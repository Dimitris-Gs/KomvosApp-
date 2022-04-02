
module.exports = {


  friendlyName: 'Listings Offered',


  description: 'Renders the page listings offered with the listings and the user',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/listings-offered'
    }
  },


  fn: async function (inputs) {

    let listings = await Listing.find({
      where: { isOffered: true },
      select: ['user_id']
    });

    let userIds = listings.map(element => element.user_id);
    

    let users = await TestUser.find({
      where: { id: { in: userIds } }
    })
    

    let userListings = await TestUser.find({
      where: { id: { in: userIds } }
    }).populate('listings', { where: { isOffered: true }
                               });

    let listingsWithUsers = [];

   

    const msPerYearNormal = 31557600000;
    const msPerYearLarge = 31622400000;
    const msPerYear = (3 * msPerYearNormal + msPerYearLarge) / 4;
    

    for (let i = 0; i < userListings.length; i++) {

      //we probably need the photo of the user at this point

      for (let j = 0; j < userListings[i].listings.length; j++) {
        let currentListing = {};
        currentListing.fullname = userListings[i].firstName + " " + userListings[i].lastName;
        currentListing.email = userListings[i].email;
        let dateOfBirth = userListings[i].dateOfBirth;
        dateOfBirth = new Date(dateOfBirth);
        currentListing.age = Math.floor((Date.now() - dateOfBirth) / (msPerYear));


        currentListing.id = userListings[i].listings[j].id;
        currentListing.name = userListings[i].listings[j].name;
        currentListing.startingDate = userListings[i].listings[j].startingDate;
        currentListing.endingDate = userListings[i].listings[j].endingDate;
        currentListing.description = userListings[i].listings[j].description;

        let categoryName = await ListingCategories.findOne({
          where: {
            id: userListings[i].listings[j].category_id
          },
          select: ['name']
        });

        currentListing.category = categoryName.name;

        listingsWithUsers.push(currentListing);
      }

    }

    // All done.
    return { listingsWithUsers : listingsWithUsers } ;
  }


};
