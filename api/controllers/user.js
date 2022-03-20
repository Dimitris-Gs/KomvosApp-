module.exports = {


  friendlyName: 'User',


  description: 'User something.',


  inputs: {

  },


  exits: {

  },


  find: async function (inputs) {
    // Find user in db
    const user = await TestUser.findOne({
      where: { id: 1 },
      select: ['firstName', 'email', "dateOfBirth"]
    });

    // All done.
    return user;
  },

  update: async function (inputs) {
    // Find user in db
    const user = await TestUser.findOne({
      where: { id: 1 },
      select: ['firstName', 'email', "dateOfBirth"]
    });

    // All done.
    return user;
  },
};
