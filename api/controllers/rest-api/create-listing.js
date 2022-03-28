

module.exports = {


  friendlyName: 'Create listing',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    let listing = this.req.body
    await Listing.create( { isOffered:listing.isOffered,category_id:listing.category_id, name: listing.name, description:listing.description,startingDate:listing.startingDate,endingDate:listing.endingDate,});
    return listing;

  }


};
