module.exports = {


  friendlyName: 'Listing categories',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/create-listing'
    }
  },



  fn: async function (inputs) {
    // Find user in db
    let categories = await ListingCategories.find({ select: ['name']})

    // All done.
    return  { categories } ;
  }
};
