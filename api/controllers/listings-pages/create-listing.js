

module.exports = {


  friendlyName: 'Create listing',


  description: '',


  inputs: {

  },


  exits: {
    
  },


  fn: async function (req,res,inputs) {

    let listing = this.req.body;
    let categoryId = listing.category_id;

    await Listing.create( { user_id: 3, isOffered:listing.isOffered, category_id:listing.category_id, name: listing.name, description:listing.description, startingDate:listing.startingDate, endingDate:listing.endingDate});

    //redirect on listings offered or received
    if(listing.isOffered == "true"){
      this.res.redirect('/listings-offered');
    }
    else {
      
      let userInfo = await TestUser.findOne({
        where: { id: 3 },
        select: ['points']
      });

      let userPoints = userInfo.points;
      userPoints = userPoints - 1;
      
      //remove one point if he is creating a received listing if category is not food or home
      if( categoryId !== 1 && categoryId !== 2) {
        await TestUser.updateOne({ id: 3 }).set({ points: userPoints });
      }
     
      this.res.redirect('/listings-received');
    }
    
    
    return ;

  }


};
