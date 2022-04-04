module.exports = {


  friendlyName: 'Second case',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let listing = await Listing.find({
      where:{
        user_id: 1,
       
      }
    });

    //i am owner of these listings
    let listings = listing.map( element => element.id);
   

    let arrReceiving = await Arrangement.find({
      where: {
        receiving_user_id : 1,
        status: 'pending'
      },
      select: ['listing_id']
    });

    let listingIds1 = arrReceiving.map(element => element.listing_id);

    

    let arrOffering = await Arrangement.find({
      where: {
        offering_user_id : 1,
        status: 'pending'
      },
      select: ['listing_id']
    });

    let listingIds2 = arrOffering.map(element => element.listing_id) ;
    let listingIds = listingIds1.concat(listingIds2);
    console.log(listings);
    console.log(listingIds);
    // console.log( typeof listings[0]);

    let listingsWithArrangements = await Listing.find({
      where: {
        id : { nin :  listings },        
      }
    }).populate('arrangements', { where: { listing_id : { in: listingIds} } });
    
   

    let properArrangements = [];

    for (let i = 0; i < listingsWithArrangements.length; i++) {
      if (listingsWithArrangements[i].arrangements.length !== 0) {
        properArrangements.push(listingsWithArrangements[i]);
      }
    }


    let dto = [];
    for (let j = 0; j < properArrangements.length; j++) {
      for (let k = 0; k < properArrangements[j].arrangements.length; k++) {
        let currentArrangement = {};
        currentArrangement.listingId = properArrangements[j].id;
        currentArrangement.listingName = properArrangements[j].name;
        currentArrangement.isOffered = properArrangements[j].isOffered;
        currentArrangement.listingDescription = properArrangements[j].description;
        currentArrangement.startingDate = properArrangements[j].startingDate;
        currentArrangement.endingDate = properArrangements[j].endingDate;
        let categoryName = await ListingCategories.findOne({
          where: {
            id: properArrangements[j].category_id
          },
          select: ['name']
        });

        currentArrangement.category = categoryName.name;

        let receiving_user = await TestUser.findOne({
          where: { id: properArrangements[j].arrangements[k].receiving_user_id },
          select: ['firstName', 'lastName', 'email']
        });
        currentArrangement.receiverId = receiving_user.id;
        currentArrangement.receiver = receiving_user.firstName + " " + receiving_user.lastName;
        currentArrangement.receiverMail = receiving_user.email;


        let offering_user = await TestUser.findOne({
          where: { id: properArrangements[j].arrangements[k].offering_user_id },
          select: ['firstName', 'lastName', 'email']
        });
        currentArrangement.offererId = offering_user.id;
        currentArrangement.offerer = offering_user.firstName + " " + offering_user.lastName;
        currentArrangement.offererMail = offering_user.email;

        currentArrangement.createdAt = properArrangements[j].arrangements[k].createdAt;
        currentArrangement.status = properArrangements[j].arrangements[k].status;

        dto.push(currentArrangement);
      }
    }
    // εδω πανε οι συμφωνιες στις οποιες ο χρηστης 1 ειναι ο receiver
    let offeringListing = [];
    // εδω πανε οι συμφωνιες στις οποιες ο χρηστης 1 ειναι ο offerer
    let receivingListing= [];


    for(let f = 0; f < dto.length; f++){
        if(dto[f].receiverId == 1){
          offeringListing.push(dto[f]);
        }
        else {
          receivingListing.push(dto[f]);
        }
    }

    let secondCaseResult = [];
    secondCaseResult.push(offeringListing);
    secondCaseResult.push(receivingListing);
    // All done.
    return secondCaseResult;

  }


};
