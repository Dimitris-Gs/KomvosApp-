const createArrangementReceived = require("./create-arrangement-received");

module.exports = {


  friendlyName: 'Delete',


  description: 'Delete something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    // let event = await Arrangement.updateOne({ id: 7 }).set({ status : "in progress"});
    await Arrangement.destroyOne({ id: 9});
    // All done.
    return 
     ;

  }


};
