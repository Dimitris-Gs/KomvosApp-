fn:{
    let findUserListing = await Listing.find({where:{id:user.id}});
    
    let dateNow = new Date.now();
    let yearNow = dateNow.getFullYear();
    let monthNow = (dateNow.getMonth() +1 );
    let dayNow = dateNow.getDate();

    let validListings = findUserListing.map(element => {
       let elementDate = new Date(element.endingDate);
       let elementYear = elementDate.getFullYear();
       let elementMonth = (elementDate.getMonth() + 1 );
       let elementDay = elementDate.getDate();

       if(elementYear < yearNow)
       {
           console.log("Δεν μας κανει");
       }
       else{
           if(elementMonth<monthNow )
           {
               console.log("Δε μας κάνει");
           }
           else{
               if(elementDay<dayNow)
               {
                   console.log("Δεν μας κάνει ")
               }
               else{
                   return element;
               }
           }
       }
    });
}