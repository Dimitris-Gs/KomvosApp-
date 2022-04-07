function getArrangementsReceived() {

    var mySocket = io.sails.connect();

    mySocket.on('connect', function onConnect() {
        console.log("Socket arrangements connected!");
        mySocket.request(
            {
                method: 'post',
                url: '/arrangements-receiver',
                data: { userId: 3 }

            },
            function (result, response) {
                console.log(result);
                let root = document.getElementById("test");

                let arrangements = "";
              
                for (let i = 0; i < result.length; i++) {
                    arrangements += `
                   <div> Offering user ${result[i].offering_user_id} </div>
                   <div>  listing ${result[i].listing_id} </div>
                   <button> Cancel </button>

                   <button type="button" class="btn float-end" data-bs-toggle="modal" data-bs-target="#createArrangement" style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">
                        Finish 
                      </button>


                      <div class="modal fade" id="createArrangement" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="createArrangementLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="createArrangementLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Πατώντας επιβεβαίωση ολοκληρώνετε τη συμφωνία.
                          
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ακύρωση</button>
                            <form action="/update-arrangement-finish" method="POST" >
                                <input type="text" name="id" value="${result[i].id}" hidden>
                            <button type="submit" class="btn btn-primary">Επιβεβαίωση</button>
                            </form>
                          </div>
                           
                        </div>
                      </div>
                    </div>
                    `
             
                }

                root.innerHTML = arrangements;

            })
    })
}

window.onload = getArrangementsReceived;
