const { User } = require("./view-models/UserListingArrangement")
module.exports = {


  friendlyName: 'Joinroom',


  description: 'Joinroom something.',


  inputs: {
    userType: {type:'string', required:true},
    userId: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function (inputs) {

    let id = sails.sockets.getId(this.req)
    sails.sockets.join(id, 'userProfileDto', function (err) {
    });
    

    let user = await TestUser.findOne({
      where: { id: 1 },
      select: ['firstName', 'lastName']
    })

    if (inputs.userType == 'offer'){
      let userOfferingArrangements = await Arrangement.find({
        where: {
          offering_user_id: inputs.userId,
        },
        select: ['listing_id']
      })
  
      let offerNumbers = userOfferingArrangements.map(element => element.listing_id)
  
      let offerUserListing = await Listing.find({
        where: { id: { in: offerNumbers } }
      }).populate('arrangements', {
        where: { offering_user_id: inputs.userId }
      });

      let offerUserDto = new User(offerUserListing,{firstName:user.firstName, lastName:user.lastName},'offer')
      await offerUserDto.listingsQueryWithArrangementsToDto()

      return offerUserDto.dto
    } 
    else if(inputs.userType == 'receive'){
      let userReceivingArrangements = await Arrangement.find({
      where: {
        receiving_user_id: inputs.userId,
      },
      select: ['listing_id']
    })

    let receiveNumbers = userReceivingArrangements.map(element => element.listing_id)

    let receiveUserListing = await Listing.find({
      where: { id: { in: receiveNumbers } }
    }).populate('arrangements', {
      where: { receiving_user_id: inputs.userid }
    });
    
    let receiveUserDto = new User(receiveUserListing,{firstName:user.firstName, lastName:user.lastName},'receive')
    await receiveUserDto.listingsQueryWithArrangementsToDto()
    
    return receiveUserDto.dto
    } 

  }


};

