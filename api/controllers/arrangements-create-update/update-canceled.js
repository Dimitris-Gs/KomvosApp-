module.exports = {


  friendlyName: 'Update canceled',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let arrangementId = this.req.body;
    await Arrangement.updateOne({ id: arrangementId.id }).set({ status : "canceled"});
    this.res.redirect('/userprofile');
    // All done.
    return;

  }


};
