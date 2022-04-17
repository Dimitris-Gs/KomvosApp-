module.exports = {


  friendlyName: 'Test user',


  description: '',


  inputs: {

  },


  exits: {
      //layout page
  },


  fn: async function (inputs) {
    // await TestUser.create( { firstName: "George", lastName: "Pasparakis", email: "koukou@pasp.com", password:"a", gender:"Male", dateOfBirth: "1950-02-02", radioAddress: 'true', address: "Panepistimiou 39", photo:'a', description:'a',  points: 20, employeed: 'false', disabled: 'false', volunteer: 'false', freeTime: 'freeTimeNone', admin: false}).fetch();

    // await TestUser.create( { firstName: "George2", lastName: "Pasparakis2", email: "koukou2@pasp.com", password:"a", gender:"Male", dateOfBirth: "1950-02-02", radioAddress: 'true',  address: "Panepistimiou 39", photo:'a', description:'a',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'freeTimeNone',admin: false}).fetch();

    // await TestUser.create( { firstName: "George3", lastName: "Pasparakis3", email: "koukou3@pasp.com", password:"a", gender:"Male", dateOfBirth: "1950-02-02", radioAddress: 'false', photo:'a', description:'a',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'freeTimeNone',admin: false}).fetch();
    // await TestUser.create( { firstName: "George3", lastName: "Pasparakis2", email: "koukou3@pasp.com"}).fetch();
   
    // σίτιση
   await ListingCategories.create({ name: "Σίτιση", description: "Υπηρεσία σχετική με την προμήθεια έτοιμου φαγητού ή βρώσιμων προϊόντων" }).fetch();
   // στέγαση
   await ListingCategories.create({ name: "Στέγαση", description: "Υπηρεσία σχετική με την παροχή προσωρινής στέγης" }).fetch();
   // προσφορά μαθημάτων
   await ListingCategories.create({ name: "Προσφορά μαθημάτων", description: "Υπηρεσία σχετική με την προσφορά μαθημάτων" }).fetch();
   // μεταφορικές υπηρεσίες
   await ListingCategories.create({ name: "Μεταφορικές υπηρεσίες", description: "Υπηρεσία σχετική με την μεταφορά ατόμων" }).fetch();
   // τεχνικές εργασίες
   await ListingCategories.create({ name: "Τεχνικές εργασίες", description: "Υπηρεσία σχετική με την προσφορά τεχνικών εργασιών" }).fetch();
   // οικιακές εργασίες
   await ListingCategories.create({ name: "Οικιακές εργασίες", description: "Υπηρεσία σχετική με την προσφορά οικιακών εργασιών" }).fetch();
   // υπηρεσίες φύλαξης
   await ListingCategories.create({ name: "Υπηρεσίες φύλαξης", description: "Υπηρεσίες σχετικές με την φύλαξη/φροντίδα/συντροφιά ατόμων" }).fetch();
   await ListingCategories.create({ name: "Άλλο", description: "Άλλο" }).fetch();


    // await ListingCategories.create( { name: "A", description: "i am nobody"}).fetch();
    // await Listing.create( { user_id: 1, category_id: 1, name: 'Υπηρεσία μεταφοράς', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();

    // await Listing.create( { user_id: 1, category_id: 1, name: 'test', description:'test', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();

    // await Listing.create( { user_id: 2, category_id: 1, name: 'mia aggelia2', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: false }).fetch();

    // await Listing.create( { user_id: 3, category_id: 1, name: 'mia aggelia3', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();

    // await Listing.create( { user_id: 3, category_id: 1, name: 'mia aggelia3', description:'mia perigrafi', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();

    // await Arrangement.create ( {offering_user_id: 1, receiving_user_id:2, listing_id: 1, pointsOfTransaction:1, status:'finished'}).fetch();
    // await Arrangement.create ( {offering_user_id: 1, receiving_user_id:3, listing_id: 1, pointsOfTransaction:1, status:'finished'}).fetch();
    // await Arrangement.create ( {offering_user_id: 3, receiving_user_id:1, listing_id: 5, pointsOfTransaction:1, status:'finished'}).fetch();
    // await Arrangement.create ( {offering_user_id: 3, receiving_user_id:1, listing_id: 3, pointsOfTransaction:1, status:'finished'}).fetch();
    // await Arrangement.create ( {offering_user_id: 1, receiving_user_id:2, listing_id: 2, pointsOfTransaction:1, status:'finished'}).fetch();
    // await Arrangement.create ( {offering_user_id: 1, receiving_user_id:3, listing_id: 2, pointsOfTransaction:1, status:'finished'}).fetch();

  
    return;

  }


};
