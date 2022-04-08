
module.exports = {


  friendlyName: 'Delete',


  description: 'Delete something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    // let userPoints = await TestUser.findOne({ 
    //   where: { id: 3 },
    //     select: ['points']
    // });
    // let points = userPoints.points;
    // points = points - 1;
    // await TestUser.updateOne({ id: 3 }).set({ points : points});
     await Arrangement.updateOne({ id: 4 }).set({ status : "accepted"});
    // await Arrangement.updateOne({ id: 10 }).set({ status : "accepted", listing_id : 6, offering_user_id: 2});
    //await Arrangement.destroyOne({ id: 23});
    // await Arrangement.destroyOne({ id: 13});
    // await Arrangement.destroyOne({ id: 14});
    // await Arrangement.destroyOne({ id: 15});
    // await Arrangement.destroyOne({ id: 16});
    // await Arrangement.destroyOne({ id: 17});
    // await Arrangement.destroyOne({ id: 18});
    // All done.
    return 
     ;

  }


};
