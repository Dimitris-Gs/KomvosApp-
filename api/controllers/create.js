module.exports = {


  friendlyName: 'Test user',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await TestUser.create( { firstName: "George", lastName: "Pasparakis", email: "koukou@pasp.com", password:"a", gender:"Non-Binary", dateOfBirth: "1950-02-02",  address: "Panepistimiou 39", photo:'a', description:'a',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'false',admin: false}).fetch();
    await TestUser.create( { firstName: "George2", lastName: "Pasparakis2", email: "koukou2@pasp.com", password:"a", gender:"Non-Binary", dateOfBirth: "1950-02-02",  address: "Panepistimiou 39", photo:'a', description:'a',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'false',admin: false}).fetch();
    await TestUser.create( { firstName: "George3", lastName: "Pasparakis3", email: "koukou3@pasp.com", password:"a", gender:"Non-Binary", dateOfBirth: "1950-02-02",  address: "Panepistimiou 39", photo:'a', description:'a',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'false',admin: false}).fetch();
    // await TestUser.create( { firstName: "George3", lastName: "Pasparakis2", email: "koukou3@pasp.com"}).fetch();
   

    await ListingCategories.create( { name: "A", description: "i am nobody"}).fetch();
    await Listing.create( { user_id: 1, category_id: 1, name: 'mia aggelia', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();
    await Listing.create( { user_id: 2, category_id: 1, name: 'mia aggelia2', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: false }).fetch();
    await Listing.create( { user_id: 3, category_id: 1, name: 'mia aggelia3', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();

    await Arrangement.create ( {offering_user_id: 1, receiving_user_id:2, listing_id: 1, pointsOfTransaction:1, status:'finished'}).fetch();
    await Arrangement.create ( {offering_user_id: 2, receiving_user_id:1, listing_id: 2, pointsOfTransaction:1, status:'finished'}).fetch();
    await Arrangement.create ( {offering_user_id: 3, receiving_user_id:1, listing_id: 3, pointsOfTransaction:1, status:'finished'}).fetch();
    // All done.
    return;

  }


};
