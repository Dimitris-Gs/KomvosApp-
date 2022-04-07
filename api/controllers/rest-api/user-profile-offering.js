const {User} = require("../view-models/UserListingArrangement")

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
    
    let userOfferingArrangements = await Arrangement.find({
      where: {
        offering_user_id: user.id,
         // should be 'finished'
        //now only for display puproses
        status: { in: ['accepted'] }
      },
      select: ['listing_id']
    })

    var numbers = userOfferingArrangements.map(element => element.listing_id)

    let userListing = await Listing.find({
      where: { id: { in: numbers } }
    }).populate('arrangements')

    
    let p = new User(userListing)
    
    await p.test3()
    
    return [p.dto,'offering'];
  }
};
