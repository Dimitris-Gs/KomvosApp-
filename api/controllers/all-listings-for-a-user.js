const { User } = require("./view-models/UserListingArrangement")
module.exports = {


  friendlyName: 'Joinroom',


  description: 'Joinroom something.',


  inputs: {
    userId: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function (inputs) {

    let id = sails.sockets.getId(this.req)
    sails.sockets.join(id, 'userProfileDto', function (err) {
    });
    

    // let user = await TestUser.findOne({
    //   where: { id: 1 },
    //   select: ['firstName', 'lastName']
    // })


    // let userOfferingArrangements = await Arrangement.find({
    //   where: {
    //     offering_user_id: inputs.userId,
    //   },
    //   select: ['listing_id']
    // })

    // let offerNumbers = userOfferingArrangements.map(element => element.listing_id)

    // let offerUserListing = await Listing.find({
    //   where: { id: { in: offerNumbers } }
    // }).populate('arrangements', {
    //   where: { offering_user_id: inputs.userId }
    // });

    // let userReceivingArrangements = await Arrangement.find({
    //   where: {
    //     receiving_user_id: inputs.userId,
    //   },
    //   select: ['listing_id']
    // })

    // let receiveNumbers = userReceivingArrangements.map(element => element.listing_id)

    // let receiveUserListing = await Listing.find({
    //   where: { id: { in: receiveNumbers } }
    // }).populate('arrangements', {
    //   where: { receiving_user_id: inputs.userid }
    // });

    let userListing = await Listing.find({
      where: {
        user_id: inputs.userId,
      }
    })

    // let offerUserDto = new User(offerUserListing)
    // let receiveUserDto = new User(receiveUserListing,{firstName:user.firstName, lastName:user.lastName},'receive')
    let listingsUserDto = new User(userListing)


    // await offerUserDto.listingsQueryWithArrangementsToDto()
    // await receiveUserDto.listingsQueryWithArrangementsToDto()
    await listingsUserDto.listingQueryToDto()

    // return [offerUserDto.dto, receiveUserDto.dto, listingsUserDto.dto];
    // return receiveUserDto.dto
    return listingsUserDto.dto
  }


};
