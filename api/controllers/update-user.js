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
    
    const updatedUser = await TestUser.updateOne({id:this.req.session.userId}).set(user);

    return { user: updatedUser };

  }


};
