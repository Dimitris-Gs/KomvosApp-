
module.exports = {


  friendlyName: 'Create listing categories',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    let listingCategories = this.req.body
    await ListingCategories.create({ name: listingCategories.name, description: listingCategories.description });
    this.res.redirect('/admin')
    return listingCategories;

  }


};
