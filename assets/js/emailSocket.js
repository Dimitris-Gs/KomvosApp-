function checkEmail(email) {
  
    var mySocket = io.sails.connect();
    mySocket.on('connect', function onConnect() {
        console.log("Socket connected!");
        mySocket.request(
            {
                method: 'post',
                url: '/register/check-email',
                data: {email: email}
            },
            function (result, response) {
                let emailInput = document.getElementById("regEmail");
                if(result == "OK"){
                   
                    emailInput.style.backgroundColor = "#cdf5af";
                }
                else{
                    
                    emailInput.style.backgroundColor = "#ffdddd";
                    document.getElementById("emailExists").style.display = 'block';
                }
                
            })
        })
    }