
module.exports = {


  friendlyName: 'Upload picture',


  description: '',


  inputs: {

  },


  exits: {
  

  },


  fn: function (req,res) {
  


//   //   console.log(this.req.body.photo);
//   //   console.log("Έχουμε controller");
//   //   console.log(this.req.body.photo.value);
    this.req.file('photo').upload(
      // don't allow the total upload size to exceed ~10MB
      
      // dirname: require('path').resolve(sails.config.appPath,'/assets/images')
     function whenDone(err, uploadedFiles) {
      if (err) {
        return this.res.send(500, err)
      }
      else{
        if (uploadedFiles.length === 0){
          console.log("No files for you sir");
      }
        console.log(uploadedFiles);
        console.log("Macneil γαμιέσαι!")
      }
    })
  // }
}
}
