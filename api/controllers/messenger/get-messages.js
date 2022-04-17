module.exports = {


  friendlyName: 'Get messages',


  description: '',


  inputs: {
    user2: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function ({ user2 }) {

    let messages = await ChatMessages.find({
      select: ['text', 'createdAt', 'user1'],
      where: {
        user1 : {in : [this.req.session.userId, user2]},
        user2: {in : [this.req.session.userId, user2]}
      }
    }).sort('createdAt ASC');

    return messages;
  }


};
