module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    let user = this.req.body
    await TestUser.create( { firstName: user.firstName, lastName: user.lastName, email: user.email, password:user.password, gender:user.gender, dateOfBirth: user.dateOfBirth,  address: "qwe", photo:user.photo, description:user.description,  points: 20, employeed: user.employeed, disabled: user.disabled,volunteer: user.volunteer,freeTime: user.freeTime,admin: false});
    return user;

  }


};
