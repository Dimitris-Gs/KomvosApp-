module.exports = {


  friendlyName: 'Homepage',


  description: 'Homepage something.',


  inputs: {

  },


  exits: {
    success:{

      viewTemplatePath:'pages/homepage'
    }

  },


  fn: async function (inputs) {
  let infoForFront;
    if(this.req.session.userId)
    {
      if(this.req.session.userId == 0)
      {
        infoForFront = false;
      }
      else{

        infoForFront = true;
      }
    }
    else{
      infoForFront = false
    }
    console.log(infoForFront)

    return {infoForFront};
  }


};
