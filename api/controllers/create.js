module.exports = {


  friendlyName: 'Test user',


  description: '',


  inputs: {

  },


  exits: {
      //layout page
  },


  fn: async function (inputs) {
    await TestUser.create( { firstName: "George", lastName: "Pasparakis", email: "koukou@pasp.com", password:"123456789", gender:"Male", dateOfBirth: "1950-02-02", radioAddress: 'true', address: "Panepistimiou 39", photo:'a', description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam omnis earum laborum esse nemo, aliquam ullam delectus eaque facere quae quis quam labore maxime cumque.',  points: 2, employeed: 'false', disabled: 'false', volunteer: 'false', freeTime: 'freeTimeNone', admin: false, reservedPoints: 0}).fetch();

    await TestUser.create( { firstName: "Eva", lastName: "Papageorgiou", email: "skinsep@gmail.com", password:"123456789", gender:"Female", dateOfBirth: "1996-02-17", radioAddress: 'true',  address: "Panepistimiou 39", photo:'a', description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam omnis earum laborum esse nemo, aliquam ullam delectus eaque facere quae quis quam labore maxime cumque.',  points: 2, employeed: 'true', disabled: 'false', volunteer: 'true', freeTime: 'freeTimeWeekend', admin: false, reservedPoints: 0}).fetch();

    await TestUser.create( { firstName: "Antonis", lastName: "Markoulinos", email: "antoni@mark.com", password:"123456789", gender:"Male", dateOfBirth: "1980-07-02", radioAddress: 'false', photo:'a', description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam omnis earum laborum esse nemo, aliquam ullam delectus eaque facere quae quis quam labore maxime cumque.',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'freeTimeMinimum',admin: false, reservedPoints: 0}).fetch();
   
    await TestUser.create( { firstName: "John", lastName: "Papajohn", email: "john@papajohn.com", password:"123456789", gender:"Male", dateOfBirth: "1990-07-02", radioAddress: 'false', photo:'a', description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam omnis earum laborum esse nemo, aliquam ullam delectus eaque facere quae quis quam labore maxime cumque.',  points: 20, employeed: 'false', disabled: 'false',volunteer: 'false',freeTime: 'freeTimeMinimum',admin: false , reservedPoints: 0}).fetch();
   
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

   // regular user 
    await Categories.create( { name: "regular", description: "A user who doesn't belong in any special category"} ).fetch();
    // person without housing
    await Categories.create( { name: "person without housing", description: "A user lacking stable, safe, and adequate housing"} ).fetch();
    // food insecure person
    await Categories.create( { name: "food insecure person", description: "A user lacking consistent access to enough food for an active, healthy life"} ).fetch();
    // disabled person
    await Categories.create( { name: "disabled person", description: "A user who has an illness, injury, or condition that tends to restrict the way that they can live their life"} ).fetch();
    // elderly people
    await Categories.create( { name: "elderly person", description: "A user with age-related needs and capacities"} ).fetch();

    // await ListingCategories.create( { name: "A", description: "i am nobody"}).fetch();
    await Listing.create( { user_id: 1, category_id: 1, name: 'Υπηρεσία σχετική με την προμήθεια έτοιμου φαγητού', description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus laudantium consequuntur ipsa nobis ad laborum?', startingDate: "2022-02-28", endingDate: "2022-05-28", isOffered: true }).fetch();

    await Listing.create( { user_id: 1, category_id: 2, name: 'Υπηρεσία σχετική με την παροχή προσωρινής στέγης', description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus laudantium consequuntur ipsa nobis ad laborum?', startingDate: "2022-02-28", endingDate: "2022-05-03", isOffered: false }).fetch();

    await Listing.create( { user_id: 2, category_id: 3, name: 'Υπηρεσία σχετική με την προσφορά μαθημάτων', description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus laudantium consequuntur ipsa nobis ad laborum?', startingDate: "2022-03-02", endingDate: "2022-06-30", isOffered: true }).fetch();

    await Listing.create( { user_id: 3, category_id: 4, name: 'Υπηρεσία σχετική με την μεταφορά ατόμων', description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus laudantium consequuntur ipsa nobis ad laborum?', startingDate: "2022-03-22", endingDate: "2022-07-03", isOffered: true }).fetch();

    await Listing.create( { user_id: 4, category_id: 5, name: 'Υπηρεσία σχετική με την προσφορά τεχνικών εργασιών', description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus laudantium consequuntur ipsa nobis ad laborum?', startingDate: "2022-02-02", endingDate: "2022-02-03", isOffered: true }).fetch();

    await Arrangement.create ( {offering_user_id: 1, receiving_user_id:2, listing_id: 1, pointsOfTransaction:1, status:'accepted'}).fetch();
    await Arrangement.create ( {offering_user_id: 1, receiving_user_id:3, listing_id: 1, pointsOfTransaction:1, status:'pending'}).fetch();
    await Arrangement.create ( {offering_user_id: 3, receiving_user_id:1, listing_id: 2, pointsOfTransaction:1, status:'pending'}).fetch();
    await Arrangement.create ( {offering_user_id: 3, receiving_user_id:1, listing_id: 4, pointsOfTransaction:1, status:'accepted'}).fetch();
    await Arrangement.create ( {offering_user_id: 2, receiving_user_id:4, listing_id: 3, pointsOfTransaction:1, status:'pending'}).fetch();
    await Arrangement.create ( {offering_user_id: 4, receiving_user_id:3, listing_id: 5, pointsOfTransaction:1, status:'pending'}).fetch();

  
    return;

  }


};
