module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/thankumsg'
    }
  },


  fn: async function (inputs) {

    let user = this.req.body;
    let userEmail = user.email.toLowerCase();
    await TestUser.create( { firstName: user.firstName, lastName: user.lastName, email: userEmail, password:user.password, gender:user.gender, dateOfBirth: user.dateOfBirth, radioAddress: user.radioAddress, address: user.address, photo:user.photo, description:user.description,  points: 20, employeed: user.employeed, disabled: user.disabled,volunteer: user.volunteer, freeTime: user.freeTime, admin: false});
   
    return user;

  }


};
