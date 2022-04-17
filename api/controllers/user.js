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
    console.log(this.req.session);
    let user = await TestUser.findOne({
       where: { id: this.req.session.userId }
    });

    // All done.
    return  { user } ;
  }
};


 