module.exports = {


  friendlyName: 'Logout',


  description: 'Logout something.',


  inputs: {

  },


  exits: {
 

  },


  fn: async function (inputs) {
    console.log(this.res.session);
    console.log(this.req.session);
    this.req.session.cookie = { cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }};
    this.req.session.userId = "";
    this.req.session.isAdmin = "";
    this.req.session.points = "";
   
    console.log(this.req.session);
    // All done.
    return this.res.redirect('http://localhost:1337');

  }


};
