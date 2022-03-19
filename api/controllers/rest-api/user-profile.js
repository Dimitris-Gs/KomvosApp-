module.exports = {


  friendlyName: 'User profile',


  description: '',


  inputs: {
    userId: { type: 'number', required: true },
  },


  exits: {

  },


  fn: async function (inputs) {

    //find the user in the page user profile

    let user = await TestUser.findOne({
      where: { id: inputs.userId },
      select: ['firstName', 'email', "dateOfBirth"]
    })


    // find the arrangements where he is the offering user

    let userOfferingArrangements = await Arrangement.find({
      where: {
        offering_user_id: user.id,
        status: { in: ['finished', 'inProgress'] }
      },
      select: ['listing_id']
    });

    // find the ids of the listings corresponding to the arrangements

    var listingIds = userOfferingArrangements.map(element => element.listing_id);


    // populate the right listings with their arrangements

    // this is the result we are about to deconstruct

    let userListing = await Listing.find({
      where: { id: { in: listingIds } }
    }).populate('arrangements');

    /** At this point we have  --->  userListing
     * 
     *      userListing is an array of objects type Listing
     *      each object contains the attributes of a record from the model Listing:
     * 
     *        user_id: 
     *    category_id:  -contains a number (instead we need a category name for display purposes)
     *           name: 
     *    description: 
     *   startingDate: 
     *     endingDate: 
     *      isOffered:
     *   arrangements:  -contains an array of arrangements (of objects type Arrangement) ----------->>
     * 
     *---------->> each object contains the attributes of a record from the model Arrangement:
     *  
     *      offering_user_id: 
     *     receiving_user_id:  -contains a number (instead we need the user's fullname for display purposes)
     *            listing_id: 
     *   pointsOfTransaction: 
     *                status: 
     * 
     * 
     * ********************************
     *  So! We are about to deconstruct userListing and and create listingsWithArrangements
     *  This one is a copy of userListing BUT 
     *                                        category_id 
     *                                    AND 
     *                                        receiving_user_id
     *  contain the proper info needed to display    * 
     *     
     * */


    // initialize an array that is about to be populated with the correct data
    let listingsWithArrangements = [];
    
    
    // loop through the listings
    for (let i = 0; i < userListing.length; i++) { 

      // initialize an object listing and an array for its property arrangements 
      let currentListing = {};
      currentListing.arrangements = [];
          
          //add properties according to the original object Listing's properties
          currentListing.name = userListing[i].name;
          currentListing.description = userListing[i].description;

          // find the category name
          let categoryName = await ListingCategories.findOne({
                                    where: {
                                      id: userListing[i].category_id
                                    },
                                    select: ['name']
                                    });

          categoryName = categoryName.name;

          // and replace it in the property category
          currentListing.category = categoryName;
          currentListing.startingDate = userListing[i].startingDate;
          currentListing.endingDate = userListing[i].endingDate;
        
        // loop through the arrangements of each listing
        for (let j = 0; j < userListing[i].arrangements.length; j++) {

          // initialize an object arrangement
          let currentArrangement = {};

          //add properties according to the original object Arrangement's properties
          currentArrangement.id = userListing[i].arrangements[j].id;
          currentArrangement.points = userListing[i].arrangements[j].pointsOfTransaction;
          
          // find the receiving user's name
          let receiver =  await TestUser.findOne({
                          where: {
                            id: userListing[i].arrangements[j].receiving_user_id,
                          },
                          select: ['firstName', 'lastName']
                          });
  
          // pull the full name together
          receiver = { fullname: receiver.firstName + " " + receiver.lastName};
          receiver = receiver.fullname;

          // and replace it in the property category
          currentArrangement.receiving_user = receiver;

          // push each arrangement in the currentListing.arrangements property
          currentListing.arrangements.push(currentArrangement);
        
      }  

      // finally gather everything up for the final array with the proper data we need
      listingsWithArrangements.push(currentListing)
    }
       


    return listingsWithArrangements ;


  }


};


// let userReceivingArrangements = await Arrangement.find({
    //   where: {
    //     receiving_user_id: user.id,
    //     status: { in: ['finished', 'inProgress'] }
    //   },
    //   select: ['listing_id']
    // })

    // if (inputs.offerOrReceive == "offering"){
    //   var numbers = userOfferingArrangements.map(element => element.listing_id)
    // } else if (inputs.offerOrReceive == "receiving"){
    //   var numbers = userReceivingArrangements.map(element => element.listing_id)
    // }

    // let receivers = [];

    // for (let i = 0; i < userListing.length; i++) {

    //   for (let j = 0; j < userListing[i].arrangements.length; j++) {

    //     receivers.push(userListing[i].arrangements[j].receiving_user_id)
    //   }
    // }

    // console.log(receivers);