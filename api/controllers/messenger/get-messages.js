module.exports = {


  friendlyName: 'Get messages',


  description: '',


  inputs: {
    user1: { type: 'number', required: true },
    user2: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function ({ user1, user2 }) {

    let messages = await ChatMessages.find({
      select: ['text', 'createdAt', 'user1'],
      where: {
        user1 : {in : [user1, user2]},
        user2: {in : [user1, user2]}
      }
    }).sort('createdAt ASC');

    return messages;
  }


};
