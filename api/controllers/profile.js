
module.exports = {


  friendlyName: 'Profile',


  description: 'Profile something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {


    /*
    firstname
    lastname
    dateofbirth
    listings
    arrangement

    

    */

    let user = await TestUser.findOne({ 
      where: {id:1},
      select: ['firstName', 'email', "dateOfBirth"]
    })

    
    let userArrangements = await Arrangement.find({ 
      where: {
        receiving_user_id: user.id,
        status: {in: ['finished','inProgress']}
      },
      select: ['listing_id']
    })
    
    let numbers = userArrangements.map(element => element.listing_id)
    console.log(numbers);
    // console.log(userListing);
    
    let userListing = await Listing.find({
      where: {id: { in: numbers } }
    }).populate('arrangements')
    // , {
    //   where: {
    //     offering_user_id: user.id,
    //     status: {in: ['finished','inProgress']}
    //     }
    // })

    // console.log(user[0].id)
    // console.log(userListing.populate());
    
    // All done.
    return userListing;

  }


};
