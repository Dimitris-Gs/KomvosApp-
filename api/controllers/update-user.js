module.exports = {


  friendlyName: 'Update user',


  description: '',


  inputs: {
    
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/userprofile'
    }
  },


  fn: async function (inputs) {

    let user = this.req.body;

    console.log(user)

    if (user.radioAddress == 'false') user.address = '';
    
    const updatedUser = await TestUser.updateOne({id:this.req.session.userId}).set(user);
    

    return { user: updatedUser };

  }


};
