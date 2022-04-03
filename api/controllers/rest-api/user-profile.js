module.exports = {


  friendlyName: 'User profile',


  description: 'NOT IN USE',


  inputs: {
    // userId: { type: 'number', required: true },
    // offerOrReceive: { type: 'string', required: true }
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

    let userOfferingArrangements = await Arrangement.find({
      where: {
        offering_user_id: user.id,
        status: { in: ['finished', 'inProgress'] }
      },
      select: ['listing_id']
    })

    if (inputs.offerOrReceive == "offering"){
      var numbers = userOfferingArrangements.map(element => element.listing_id)
    } else if (inputs.offerOrReceive == "receiving"){
      var numbers = userReceivingArrangements.map(element => element.listing_id)
    }
    

    let userListing = await Listing.find({
      where: { id: { in: numbers } }
    }).populate('arrangements')
    return userListing;


  }


};
