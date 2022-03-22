const {User} = require("../view_models/UserListingArrangement")

module.exports = {


  friendlyName: 'User profile',


  description: '',


  inputs: {
    userId: { type: 'number', required: true },
    // offerOrReceive: { type: 'string', required: true }
  },


  exits: {

  },


  fn: async function (inputs) {
    let user = await TestUser.findOne({
      where: { id: inputs.userId },
      select: ['firstName', 'email', "dateOfBirth"]
    })
    
    // let userReceivingArrangements = await Arrangement.find({
    //   where: {
    //     receiving_user_id: user.id,
    //     status: { in: ['finished', 'inProgress'] }
    //   },
    //   select: ['listing_id']
    // })

    let userOfferingArrangements = await Arrangement.find({
      where: {
        offering_user_id: user.id,
        status: { in: ['finished', 'inProgress'] }
      },
      select: ['listing_id']
    })

    // if (inputs.offerOrReceive == "offering"){
    //   var numbers = userOfferingArrangements.map(element => element.listing_id)
    // } else if (inputs.offerOrReceive == "receiving"){
    //   var numbers = userReceivingArrangements.map(element => element.listing_id)
    // }
    
    var numbers = userOfferingArrangements.map(element => element.listing_id)

    let userListing = await Listing.find({
      where: { id: { in: numbers } }
    }).populate('arrangements')

    // console.log(userOfferingArrangements);
    // console.log(numbers);
    // console.log(userListing[0]);
    // console.log(userListing[0].arrangements);
    // console.log(userListing[1]);
    // console.log(userListing[1].arrangements);
    let p = new User(userListing)
    // p.userListingArrangements.forEach(element => {
    //   console.log(element);
    // });
    // p.listing
    // p.test3().then((result,reject) => {console.log(result);})
    await p.test3()
    // console.log(p.dto);
    // p.user().then( (result,reject) => {console.log(result);})
    // let l = p.user().then( (result,reject) => {return result})

    return p.dto;


  }


};
