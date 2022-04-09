module.exports = {


  friendlyName: 'Chat',


  description: 'Chat something.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/messenger'
    }
  },


  fn: async function (inputs) {
    let result = await sails.sendNativeQuery(`
    SELECT m.createdAt, m.text, m.user1, m.user2, user1.first_name as user1FirstName, user1.last_name as user1LastName, user2.first_name as user2FirstName, user2.last_name as user2LastName
    FROM chatmessages m
    INNER JOIN
      (
        SELECT MAX(id) as lastId
        FROM  chatmessages
        WHERE
          (
            chatmessages.user2 = $1
            OR
            chatmessages.user1 = $1
          )
        GROUP BY
        CONCAT(
          LEAST(chatmessages.user2, chatmessages.user1),
          '.',
          GREATEST(chatmessages.user2, chatmessages.user1)
        )
      ) conversations 
    ON conversations.lastId = m.id
    INNER JOIN test_user as user1 ON user1.id = m.user1
    INNER JOIN test_user as user2 ON user2.id = m.user2
    ORDER BY m.createdAt DESC`, [ 1]);

    const chats = result.rows.map(value => {
      if (value.user1 === 1) {
        return {text: value.text, createdAt : value.createdAt, userId: value.user2, fistsName: value.user2FirstName, lastName: value.user2LastName}
      } else {
        return {text: value.text, createdAt: value.createdAt, userId : value.user1, fistsName: value.user1FirstName, lastName: value.user1LastName}
      }
    });

    return { chats };
  }


};
