const createArrangementReceived = require("./create-arrangement-received");

module.exports = {


  friendlyName: 'Delete',


  description: 'Delete something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    //  let event = await Arrangement.updateOne({ id: 19 }).set({ status : "accepted"});
    await Arrangement.destroyOne({ id: 23});
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
