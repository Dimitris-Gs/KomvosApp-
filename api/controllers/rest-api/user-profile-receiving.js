const { User } = require("../view_models/UserListingArrangement")

module.exports = {


  friendlyName: 'User profile',


  description: '',


  inputs: {
    userId: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function (inputs) {
    let user = await TestUser.findOne({
      where: { id: inputs.userId },
      select: ['firstName', 'email', "dateOfBirth"]
    })

    let userReceivingArrangements = await Arrangement.find({
      where: {
        receiving_user_id: user.id,
        status: { in: ['finished', 'inProgress'] }
      },
      select: ['listing_id']
    })


    var numbers = userReceivingArrangements.map(element => element.listing_id)


    let userListing = await Listing.find({
      where: { id: { in: numbers } }
    }).populate('arrangements')


    let p = new User(userListing)

    await p.test3()


    return p.dto;


  }


};
