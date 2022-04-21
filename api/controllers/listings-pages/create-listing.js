

module.exports = {


  friendlyName: 'Create listing',


  description: '',


  inputs: {

  },


  exits: {
    
  },


  fn: async function (req,res,inputs) {

    let listing = this.req.body;
    
    await Listing.create( { user_id: this.req.session.userId, isOffered:listing.isOffered, category_id:listing.category_id, name: listing.name, description:listing.description, startingDate:listing.startingDate, endingDate:listing.endingDate});

    //redirect on listings offered or received
    if(listing.isOffered == "true"){
      this.res.redirect('/listings-offered');
    }
    else {

      if(listing.category_id !== '1' && listing.category_id !== '2'){

        this.req.session.reservedPoints = this.req.session.reservedPoints + 1 ;
      }
      this.res.redirect('/listings-received');
    }
    
    
    return ;

  }


};
