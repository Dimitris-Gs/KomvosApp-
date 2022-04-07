
module.exports = {


  friendlyName: 'Create arrangmenet offered',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    let arrangementOffered = this.req.body;
    let arrangement = await Arrangement.create({
      offering_user_id: arrangementOffered.offering_user_id, receiving_user_id: 3, listing_id: arrangementOffered.listing_id,
      status: "pending"
    });
    
    // ideally redirect to userprofile
    this.res.redirect('/listings-offered');
    return;

  }


};