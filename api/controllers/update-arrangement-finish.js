
module.exports = {


  friendlyName: 'Update arrangement finish',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let arrangementId = this.req.body;
    console.log("Update Called!");
    
    let updatedArrangement = await Arrangement.updateOne({ id: arrangementId.id }).set({ status : "finished"});

    return updatedArrangement;

    // All done.
    

  }


};
