
module.exports = {


  friendlyName: 'Delete',


  description: 'Delete something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    //await Listing.updateOne({ id: 6 }).set({ endingDate : "2022-04-30"});
    // let userPoints = await TestUser.findOne({ 
    //   where: { id: 3 },
    //     select: ['points']
    // });
    // let points = userPoints.points;
    // points = points - 1;
    // await TestUser.updateOne({ id: 3 }).set({ points : points});
     //await Arrangement.updateOne({ id: 12 }).set({ status : "accepted"});
    //  await Arrangement.updateOne({ id: 1 }).set({ status : "canceled"});
    //  await Arrangement.updateOne({ id: 2 }).set({ status : "canceled"});
    //  await Arrangement.updateOne({ id: 3 }).set({ status : "canceled"});
    //  await Arrangement.updateOne({ id: 4 }).set({ status : "canceled"});
    //  await Arrangement.updateOne({ id: 11 }).set({ status : "canceled"});
     await Arrangement.updateOne({ id: 14 }).set({ status : "accepted"});
    // await Arrangement.updateOne({ id: 3 }).set({ status : "accepted"});
    // await Arrangement.updateOne({ id: 10 }).set({ status : "accepted", listing_id : 6, offering_user_id: 2});
    //await Arrangement.destroyOne({ id: 23});
    // await Arrangement.destroyOne({ id: 13});
    // await Arrangement.destroyOne({ id: 14});
    // await Arrangement.destroyOne({ id: 15});
    // await Arrangement.destroyOne({ id: 16});
    // await Arrangement.destroyOne({ id: 17});
    //  await Event.destroyOne({ id: 1});
    // All done.
    return 
     ;

  }


};
