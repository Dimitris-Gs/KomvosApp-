module.exports = {


  friendlyName: 'Listing categories',


  description: '',


  inputs: {

  },


  exits: {
  
  },



  fn: async function (inputs) {
    // Find user in db
    let categories = await ListingCategories.find({ select: ['name']});
    // All done.
    return  categories ;
  }
};
