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
    
  
    let userListing = await Listing.find({
      where: {
        user_id: inputs.userId,
      }
    })

  
    let listingsUserDto = new User(userListing)
    
    await listingsUserDto.listingQueryToDto()

    return listingsUserDto.dto
  }


};
