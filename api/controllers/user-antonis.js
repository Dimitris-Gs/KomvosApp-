module.exports = {


  friendlyName: 'User antonis',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/userprofileAntonis'
    }
  },


  fn: async function (inputs) {
    // Find user in db
    let user = await TestUser.findOne({
      where: { id: 3 }
    });

    // All done.
    return { user };
  }


};
