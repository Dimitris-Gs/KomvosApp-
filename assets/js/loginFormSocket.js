
function checkCredentials(emailValue,passwordValue)
{
    var mySocket = io.sails.connect();
        mySocket.on('connect',function onConnect(){
            mySocket.request(
                {
                    method:'post',
                    url:'/loginForm/checkCredentials',
                    data: {email:emailValue , password: passwordValue}
                },
                function (result , response)

                {
                    //   console.log(result);
                    //   console.log("ΓΑΜΩ ΤΟΝ MCNEIL");
                    
                    if(result == "OK")

                    {

                        // console.log(response.headers);
                        // console.log(`'Έχουμε response ${response.headers} `);
                        alert("Δεν υπάρχει χρήστης με τα στοιχεία που εισήγαγες! Παρακαλούμε έλεγξε ξανά το email και τον κωδικό σου!");
                    }
                    else{
                        console.log(response);
                        let output = document.getElementById('invisibleDivForUserData');
                        output.innerHTML = response.body.email;
                        window.location.replace("http://localhost:1337");
                        
                            
                        }
                    }
                
                
            )
        })
}