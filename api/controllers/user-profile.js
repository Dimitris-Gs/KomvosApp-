module.exports = {


  friendlyName: 'User profile',


  description: '',


  inputs: {

  },


  exits: {  success:{
    viewTemplatePath: 'pages/profile'
  }

  },


  fn: async function (inputs) {
  let user = await TestUser.findOne({where:{id : 1}});
  
    
    return user;

  }


};
