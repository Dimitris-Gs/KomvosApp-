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
    const user = await TestUser.findOne({
      where: { id: 1 },
      select: ['firstName', 'lastName', 'email', "gender", "dateOfBirth", "address", "photo", "description", "employeed", "disabled", "volunteer", "freeTime"]
    });

    // All done.
    return { user };
  },
};
