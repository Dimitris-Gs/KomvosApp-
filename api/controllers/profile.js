
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

   // attempt to find the arrangements where user is the receiver

    let user = await TestUser.findOne({ 
      where: {id:1},
      select: ['firstName', 'email', "dateOfBirth"]
    })

    
    let userArrangementsReceiving = await Arrangement.find({ 
      where: {
        receiving_user_id: user.id,
        status: {in: ['finished','inProgress']}
      },
      select: ['listing_id']
    })
    
    let numbersReceiving = userArrangementsReceiving.map(element => element.listing_id)
    console.log(numbersReceiving);
    // console.log(userListing);
    
    let userListingReceiving = await Listing.find({
      where: {id: { in: numbersReceiving } }
    }).populate('arrangements');
    
    let userArrangementsOffering = await Arrangement.find({ 
      where: {
        offering_user_id: user.id,
        status: {in: ['finished','inProgress']}
      },
      select: ['listing_id']
    })
    
    // attempt to find the arrangements where user is the provider

    let numbersOffering = userArrangementsOffering.map(element => element.listing_id)
    console.log(numbersOffering);
    // console.log(userListing);
    
    let userListingOffering = await Listing.find({
      where: {id: { in: numbersOffering } }
    }).populate('arrangements');

   
    // , {
    //   where: {
    //     offering_user_id: user.id,
    //     status: {in: ['finished','inProgress']}
    //     }
    // })

    // console.log(user[0].id)
    // console.log(userListing.populate());
    
    // All done.
    return [userListingReceiving,userListingOffering];

  }


};
