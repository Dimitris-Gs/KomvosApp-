

module.exports = {


  friendlyName: 'Update listing categories',


  description: '',


  inputs: {

  },


  exits: {
    // success: {
    //   viewTemplatePath: 'pages/admin'
    // }
  },


  fn: async function (inputs) {

    let categories = this.req.body;
    
    const updatedCategories = await ListingCategories.updateOne({id:categories.id}).set( {name: categories.name, description: categories.description});
    this.res.redirect('/admin')
    return //{ categories:updatedCategories };

  }


};
