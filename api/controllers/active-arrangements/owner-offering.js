module.exports = {


  friendlyName: 'Owner offering in his own listing',


  description: 'Finds all the active arrangements where status is pending or accepted and the user is owner of this listing and is the offering user (for this moment the user is user with id : 1)',


  inputs: {

  },


  exits: {

  },
  
  

  fn: async function (inputs) {

    // find all active listings with their arrangements in status pending
    let result = await Listing.find({
                        where : { user_id : 1,
                                  isOffered : true,
                                  endingDate: { '>=': new Date() } 
                                }
    }).populate('arrangements', { where: { status : {in :['pending', "accepted"] } } 
    });
    

    // because the above query returns some listings without arrangements
    // we sort once again to retreive proper data
    let listingsWithArrangements = [];

    for(let i = 0; i < result.length; i++){
      if(result[i].arrangements.length !== 0){
        listingsWithArrangements.push(result[i]);
      }
    }

    let dto = [];
    for (let j = 0; j < listingsWithArrangements.length; j++){
      for(let k = 0; k < listingsWithArrangements[j].arrangements.length; k++){
        let currentArrangement = {};
        currentArrangement.listingId = listingsWithArrangements[j].id;
        currentArrangement.listingName = listingsWithArrangements[j].name;
        currentArrangement.listingDescription = listingsWithArrangements[j].description;
        currentArrangement.startingDate = listingsWithArrangements[j].startingDate;
        currentArrangement.endingDate = listingsWithArrangements[j].endingDate;
        let categoryName = await ListingCategories.findOne({
          where: {
            id: listingsWithArrangements[j].category_id
          },
          select: ['name']
        });
        
        currentArrangement.category = categoryName.name;

        let receiving_user = await TestUser.findOne({
                                                where: { id : listingsWithArrangements[j].arrangements[k].receiving_user_id },
                                                select: ['firstName', 'lastName']
        });
        receiving_user = receiving_user.firstName + " " + receiving_user.lastName;
        currentArrangement.receiver = receiving_user;
        currentArrangement.status = listingsWithArrangements[j].arrangements[k].status;

        dto.push(currentArrangement);
      }
    }
    return dto;

  }


};
