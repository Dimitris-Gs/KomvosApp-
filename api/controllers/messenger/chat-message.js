module.exports = {


  friendlyName: 'Chat message',


  description: '',


  inputs: {
    user1: { type: 'number', required: true },
    user2: { type: 'number', required: true },
    text: { type: 'string', required: true }
  },


  exits: {

  },


  fn: async function ({user1, user2, text }) {

    let message = await ChatMessages.create({ user1, user2, text }).fetch();

    if (this.req.isSocket) {
      sails.sockets.broadcast(user2, 'message', text);
    }

    return message;

  }


};    
