module.exports = {


  friendlyName: 'Delete listing categories',


  description: '',


  inputs: {

  },


  exits: {
 
  },


  fn: async function (inputs) {
    // Find listing in db
    let categories = await ListingCategories.destroyOne({
       where: { id: this.req.body.id }
    });
    this.res.redirect('/admin')
    // All done.
    return  { categories } ;
  }
};
