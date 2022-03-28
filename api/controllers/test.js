
module.exports = {


  friendlyName: 'Test',


  description: 'Test something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let test = await TestUser.findOne({
              where : 
              {email: "koukou@pasp.com"}
    });
    
    console.log(typeof test);
    // All done.
    return test;

  }


};
