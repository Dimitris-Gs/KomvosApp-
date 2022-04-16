module.exports = {


  friendlyName: 'Update accepted',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let arrangementId = this.req.body;
    await Arrangement.updateOne({ id: arrangementId.id }).set({ status : "accepted"});
    this.res.redirect('/userprofile');
    // All done.
    return;

  }


};
