module.exports = {


  friendlyName: 'Arrangements receiver',


  description: '',


  inputs: {
    // ideally id of user
    userId: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function (inputs) {
    let arrangements = await Arrangement.find({
      where: {
        receiving_user_id: inputs.userId,
        status:'in progress'
      }      

    })
    // All done.
    return arrangements ;

  }


};
