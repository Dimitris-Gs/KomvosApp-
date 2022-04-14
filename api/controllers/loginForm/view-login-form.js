module.exports = {


  friendlyName: 'View login form',


  description: 'Display "Login form" page.',


  exits: {

   success: {
      description: 'This renders the loginFormPage',
      responseType: 'view',
      viewTemplatePath:'pages/loginform'

  },
  redirect:{
    description: 'User found and sent to homepage',
    responseType:'redirect'
  }

},


  fn: async function (req,res) {
      
      
     

      // setTimeout(()=>{let session = this.req.session; console.log(session);  },6000);
      // setInterval(()=>{
      //  console.log(this.res.session);
      //  } ,6000);
    
    

     
        // function checkWhatIsHappening()
        // {
        //   if(session == undefined)
        //   {
        //     console.log("do nothing");
        //   }
        //   else{
        //       if(this.req.session.userId == undefined)
        //       {
        //         console.log("socket has not responded yet");
        //       }
        //       else{
        //         console.log("Habemus update? ");
        //       }

        //   }
        // }

    return {};

  }


};
