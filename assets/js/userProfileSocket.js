document.getElementById("nav-offer-tab").addEventListener('click', () => {

    getListings(document.getElementById("nav-offer-tab").value);
    console.log(document.getElementById("nav-offer-tab").value);

    // let url = "userprofile" //CODE FOR TWO DIFFERENT SOCKETS IF NEEDED WITHOUT CREATING TWO DIFFERENT FUNCTIONS
    // getListings(document.getElementById("offered").value,x)
});

document.getElementById("nav-receive-tab").addEventListener('click', () => {
    getListings(document.getElementById("nav-receive-tab").value)
    // let url = "test"
    // getListings(document.getElementById("received").value,x)
});



function getListings(offeredOrReceived) {
    // var userId = {userId:1} // Here we excpect the user id to come from the front-end(cookies-sessionId),
    // so we can use a realtime id and not a fixed one
    // var offerOrReceive = `${offeredOrReceived}_user_id`
    // var offerOrReceive = offeredOrReceived
    var mySocket = io.sails.connect();
    mySocket.on('connect', function onConnect() {
        console.log("Socket connected!");
        mySocket.request(
            {
                method: 'post',
                url: `/userprofile${offeredOrReceived}`,
                data: { userId: 1 }
            },
            function (result, response) {
                console.log(result);
                console.log(result[0]);
                console.log(result[1]);
              let result1 = result[0];
              let div = result[1];
              let link ;

              if( div === "offering")
              {
                  link = `result1[i].arrangements[j].offering`;
              }
              else{
                  link = `result1[i].arrangements[j].receiving`;
              }
                // let root = document.getElementById("arrangementsOffered");
                 let root = document.getElementById(div);
                

                let listings = ``;
                for (let i = 0; i < result1.length; i++) {

                    for (let j = 0; j < result1[i].arrangements.length; j++) {
                        listings += `
                        <div class="card" style="width: 50%; margin: 0 auto;">
                            <div class="card-header"> 
                            
                               <p>
                                    <a data-bs-toggle="collapse" href="#collapse${result1[i].arrangements[j].id}" role="button" aria-expanded="false" aria-controls="collapseExample" style="text-decoration: none; color: black;">

                                      ${result1[i].listingName} 
                                                                  
                                    </a>
                                </p>                                    
                                                                            
                            </div>
                            
                            <div class="collapse" id="collapse${result1[i].arrangements[j].id}">
                            
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="badge bg-secondary">${result1[i].listingCategoryName}</span>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar2-date" viewBox="0 0 16 16">
                                                <path
                                                d="M6.445 12.688V7.354h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                                <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                                <path
                                                d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                                                </svg> 
                                                &nbsp;
                                                ${ new Date(result1[i].listingStartingDate).getDate()}/${ new Date(result1[i].listingStartingDate).getMonth() + 1 }/${new Date(result1[i].listingStartingDate).getFullYear()}
                                            </div>

                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar2-date-fill" viewBox="0 0 16 16">
                                                <path
                                                d="M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                                                <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" />
                                                </svg>
                                                &nbsp;
                                                ${ new Date(result1[i].listingEndingDate).getDate()}/${ new Date(result1[i].listingEndingDate).getMonth() + 1 }/${new Date(result1[i].listingEndingDate).getFullYear()}
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-person-heart" viewBox="0 0 16 16">
                                                <path
                                                 d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                                                </svg>
                                                &nbsp;
                                                <a href="#">${result1[i].arrangements[j].receiving}</a>
                                            </div>
                                        </div>
                                    

                                        <div class="col-6">
                                             ${result1[i].listingDescription}
                                        </div> 

                                    </div>
                                    
                                </div>
                            </div>
                        </div>`

                        root.innerHTML = listings ;
                    }
                }
                
            }
        )
    });

}
