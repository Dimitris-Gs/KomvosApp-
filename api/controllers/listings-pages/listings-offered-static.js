
module.exports = {


    friendlyName: 'Listings Offered',
  
  
    description: 'Renders the page listings offered with the listings and the user',
  
  
    inputs: {
  
    },
  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/all-listings-offered'
      }
    },
  
  
    fn: async function (inputs) {
      
      let interimUser ;
  
      if(this.req.session.userId)
      {
          interimUser = this.req.session.userId;
          
      }
      else{
          interimUser = 150000;
      }      
  
      // All done.
      return  { interimUser : interimUser } ;
    }
    
  
  };