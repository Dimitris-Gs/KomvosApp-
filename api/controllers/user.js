module.exports = {


  friendlyName: 'User',


  description: 'User something.',


  inputs: {

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/userprofile'
    }
  },


  fn: async function (inputs) {
    // Find user in db
    let user = await TestUser.findOne({
       where: { id: 3 }
    });

    // All done.
    return  { user } ;
  }
};


 