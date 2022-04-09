module.exports = {


  friendlyName: 'Join room',


  description: '',


  inputs: {
    userId: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function ({ userId}) {
    const id = sails.sockets.getId(this.req);

    sails.sockets.join(id, userId, function (err, data) {
      if (err) {
        return res.serverError(err);
      }
    });

    // All done.
    return;

  }


};
