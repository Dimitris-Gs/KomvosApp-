module.exports = {


  friendlyName: 'All listing categories',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin'
    }
  },



  fn: async function (inputs) {
    // Find user in db
    let categories = await ListingCategories.find({ select: ['name'] ['description']})

    // All done.
    return  { categories } ;
  }
};
