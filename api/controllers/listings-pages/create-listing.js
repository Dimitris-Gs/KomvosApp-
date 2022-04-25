

module.exports = {


  friendlyName: 'Create listing',


  description: '',


  inputs: {

  },


  exits: {
    
  },


  fn: async function (req,res,inputs) {

    let listing = this.req.body;
    
<<<<<<< Updated upstream
    await Listing.create( { user_id: 3, isOffered:listing.isOffered, category_id:listing.category_id, name: listing.name, description:listing.description, startingDate:listing.startingDate, endingDate:listing.endingDate});

    //redirect on listings offered or received
=======
    let newListing = await Listing.create( { user_id: this.req.session.userId, isOffered:listing.isOffered, category_id:listing.category_id, name: listing.name, description:listing.description, startingDate:listing.startingDate, endingDate:listing.endingDate}).fetch();
    let categoryName = await ListingCategories.findOne({
      where: {id:newListing.category_id},
      select: ['name']
    })
    newListing.categoryName = categoryName.name
    console.log(newListing);
    sails.sockets.broadcast('userProfileDto', 'newListing', newListing);
    
    // redirect on listings offered or received
>>>>>>> Stashed changes
    if(listing.isOffered == "true"){
      this.res.redirect('/listings-offered');
    }
    else {
      this.res.redirect('/listings-received');
    }
    
    
    return ;

  }


};
