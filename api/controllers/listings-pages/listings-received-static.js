module.exports = {


    friendlyName: 'Listings received',
  
  
    description: '',
  
  
    inputs: {
  
    },
  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/all-listings-received'
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
  
      
      let pointsBalance = this.req.session.points - this.req.session.reservedPoints;
      
      // All done.
      return  { interimUser:interimUser, pointsBalance : pointsBalance } ;
  
    }
  
  
  };