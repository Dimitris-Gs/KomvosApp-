// document.getElementById("pills-myListings-tab").addEventListener('click', () => {
//     getArrangementsOfferingByOwner()
// });
document.getElementById("arrangementShow").addEventListener('click', () => {
    getFirstCase();
    getSecondCase();
});

function getFirstCase() {

    var mySocket = io.sails.connect();

    mySocket.on('connect', function onConnect() {
        console.log("Socket arrangements connected!");
        mySocket.request(
            {
                method: 'post',
                url: '/first-case',
                data: {}

            },
            function (result, response) {
                console.log(result);
                let root = document.getElementById("firstcase");

               let offered = result[0];
               let received = result[1];

               let resultOffered = '';
               for(let i = 0; i < offered.length; i++){
                resultOffered += 

                `<div class="card mb-4">
                <div class="card-header">
               <div class="row">
                   <div class="col-md-3">
                   Στις <br>
                   ${new Date(offered[i].createdAt).getDate()}/${new Date(offered[i].createdAt).getMonth() + 1}/${new Date(offered[i].createdAt).getFullYear()} 
                       
                   </div>
                   <div class="col-md-9">
                       <p class="h5">Ο/H ${offered[i].receiver} εκδήλωσε ενδιαφέρον για την αγγελία σας:
                       </p>
                   </div>
               </div>
           </div>

           <div class="card-body">
               <br>

               <div class="row ">
                   <div class="col-sm-2"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                           width="100px" height="100px"></div>
                   <div class="col-sm-5">
                       <div>${offered[i].receiver} </div>
                       <div>${offered[i].receiverMail}</div>
                   </div>

               </div>

               <br>
               <div class="row">
                   <div class="col-md-8">
                       <div>
                           <span class="badge bg-secondary">${offered[i].category}</span>
                       </div>
                       <div style="text-align: justify;">
                       ${offered[i].listingDescription}
                       </div>

                   </div>
                   <div class="col-md-4 text-end">
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
                           ${new Date(offered[i].startingDate).getDate()}/${new Date(offered[i].startingDate).getMonth() + 1}/${new Date(offered[i].startingDate).getFullYear()}
                         
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
                           ${new Date(offered[i].endingDate).getDate()}/${new Date(offered[i].endingDate).getMonth() + 1}/${new Date(offered[i].endingDate).getFullYear()}
                       </div>
                   </div>
               </div>
              

           </div>
           <div class="card-footer">
               <button type="button" class="float-end"
                   style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">Απόρριψη</button>
               <button type="button" class="float-end"
                   style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">Επιβεβαίωση</button>
           </div>
           </div>
          

`;
               }

               let resultReceived = '';
               for(let i = 0; i < received.length; i++){
                resultReceived += 

                `<div class="card mb-4">
                <div class="card-header">
               <div class="row">
                   <div class="col-md-3">
                   Στις <br>
                   ${new Date(received[i].createdAt).getDate()}/${new Date(received[i].createdAt).getMonth() + 1}/${new Date(received[i].createdAt).getFullYear()} 
                       
                   </div>
                   <div class="col-md-9">
                       <p class="h5">Ο/H ${received[i].offerer} εκδήλωσε ενδιαφέρον για την αγγελία σας:
                       </p>
                   </div>
               </div>
           </div>

           <div class="card-body">
               <br>

               <div class="row ">
                   <div class="col-sm-2"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                           width="100px" height="100px"></div>
                   <div class="col-sm-5">
                       <div>${received[i].offerer} </div>
                       <div>${received[i].offererMail}</div>
                   </div>

               </div>

               <br>
               <div class="row">
                   <div class="col-md-8">
                       <div>
                           <span class="badge bg-secondary">${received[i].category}</span>
                       </div>
                       <div style="text-align: justify;">
                       ${received[i].listingDescription}
                       </div>

                   </div>
                   <div class="col-md-4 text-end">
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
                           ${new Date(received[i].startingDate).getDate()}/${new Date(received[i].startingDate).getMonth() + 1}/${new Date(received[i].startingDate).getFullYear()}
                         
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
                           ${new Date(received[i].endingDate).getDate()}/${new Date(received[i].endingDate).getMonth() + 1}/${new Date(received[i].endingDate).getFullYear()}
                       </div>
                   </div>
               </div>
              

           </div>
           <div class="card-footer">
               <button type="button" class="float-end"
                   style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">Απόρριψη</button>
               <button type="button" class="float-end"
                   style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">Επιβεβαίωση</button>
           </div>
           </div>
          

`;
               }
               
                

                root.innerHTML = resultOffered + resultReceived ;

            })
    })
}

function getSecondCase() {

    var mySocket = io.sails.connect();

    mySocket.on('connect', function onConnect() {
        console.log("Socket arrangements connected!");
        mySocket.request(
            {
                method: 'post',
                url: '/second-case',
                data: {}

            },
            function (result, response) {
                console.log(result);
                let root = document.getElementById("secondcase");

                //θελω offerer
               let offered = result[0];
                //θελω receiver
               let received = result[1];

               let resultOffered = '';
               for(let i = 0; i < offered.length; i++){
                resultOffered += 
                        `<div class="card">


                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-3">
                                    Στις <br>
                                    ${new Date(offered[i].createdAt).getDate()}/${new Date(offered[i].createdAt).getMonth() + 1}/${new Date(offered[i].createdAt).getFullYear()} 
                                </div>
                                <div class="col-md-9">
                                    <p class="h5">Έχετε εκδηλώσει ενδιαφέρον για την αγγελία του χρήστη:</p>
                                </div>
                            </div>

                        </div>

                        <div class="card-body">
                            <br>

                            <div class="row ">
                                <div class="col-sm-2"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                                        width="100px" height="100px"></div>
                                <div class="col-sm-5">
                                    <div>${offered[i].offerer} </div>
                                    <div>${offered[i].offererMail}</div>
                                </div>

                                <div class="col-sm-5  text-end">
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
                                        ${new Date(offered[i].startingDate).getDate()}/${new Date(offered[i].startingDate).getMonth() + 1}/${new Date(offered[i].startingDate).getFullYear()}
                         
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
                                        ${new Date(offered[i].endingDate).getDate()}/${new Date(offered[i].endingDate).getMonth() + 1}/${new Date(offered[i].endingDate).getFullYear()}
                                    </div>
                                </div>

                            </div>

                            <br>
                            <div>
                                <span class="badge bg-secondary">${offered[i].category}</span>
                            </div>

                            <div style="text-align: justify;  width: 80%;">
                            ${offered[i].listingDescription}
                            </div>

                        </div>
                        <div class="card-footer">

                            <button type="button" class="float-end"
                                style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">Ακύρωση</button>
                        </div>

                        </div>`
                                    }

                                    let resultReceived = '';
                                    for(let i = 0; i < received.length; i++){
                                        resultReceived += 

                                        `<div class="card">


                                        <div class="card-header">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    Στις <br>
                                                    ${new Date(received[i].createdAt).getDate()}/${new Date(received[i].createdAt).getMonth() + 1}/${new Date(received[i].createdAt).getFullYear()} 
                                                </div>
                                                <div class="col-md-9">
                                                    <p class="h5">Έχετε εκδηλώσει ενδιαφέρον για την αγγελία του χρήστη:</p>
                                                </div>
                                            </div>
                
                                        </div>
                
                                        <div class="card-body">
                                            <br>
                
                                            <div class="row ">
                                                <div class="col-sm-2"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                                                        width="100px" height="100px"></div>
                                                <div class="col-sm-5">
                                                    <div>${received[i].receiver} </div>
                                                    <div>${received[i].receiverMail}</div>
                                                </div>
                
                                                <div class="col-sm-5  text-end">
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
                                                        ${new Date(received[i].startingDate).getDate()}/${new Date(received[i].startingDate).getMonth() + 1}/${new Date(received[i].startingDate).getFullYear()}
                                         
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
                                                        ${new Date(received[i].endingDate).getDate()}/${new Date(received[i].endingDate).getMonth() + 1}/${new Date(received[i].endingDate).getFullYear()}
                                                    </div>
                                                </div>
                
                                            </div>
                
                                            <br>
                                            <div>
                                                <span class="badge bg-secondary">${received[i].category}</span>
                                            </div>
                
                                            <div style="text-align: justify;  width: 80%;">
                                            ${received[i].listingDescription}
                                            </div>
                
                                        </div>
                                        <div class="card-footer">
                
                                            <button type="button" class="float-end"
                                                style="padding: 5px; border-radius: 10%; background-color: rgb(156, 38, 38); color: white;">Ακύρωση</button>
                                        </div>
                
                                        </div>`;
               }
               
                

                root.innerHTML = resultOffered + resultReceived ;

            })
    })
}
// function getArrangementsOfferingByOwner() {

//     var mySocket = io.sails.connect();

//     mySocket.on('connect', function onConnect() {
//         console.log("Socket arrangements connected!");
//         mySocket.request(
//             {
//                 method: 'post',
//                 url: '/owner-offering',
//                 data: {}

//             },
//             function (result, response) {
//                 console.log(result);
//                 let root = document.getElementById("v-pills-offering");

//                 let accepted = [];
//                 let pending = [];
//                 let arrangements = "";

//                 for (let i = 0; i < result.length; i++) {
//                     if (result[i].status == "accepted") {
//                         accepted.push(result[i]);
//                     }
//                     else {
//                         pending.push(result[i]);
//                     }

//                 }

//                 for (let j = 0; j < accepted.length; j++) {

//                     arrangements +=
//                         `<div> Accepted :
//                     <br> 
//                     ${accepted[j].listingId}
//                     <br>
//                     ${accepted[j].listingName}
//                     <br>                        
//                     ${accepted[j].listingDescription}
//                     <br>
//                     ${accepted[j].startingDate}
//                     <br>
//                         ${accepted[j].endingDate}
//                         <br>
//                         ${accepted[j].category}
//                         <br>
//                         ${accepted[j].receiver}
//                         <br>
//                         ${accepted[j].status}
//                     </div>
           
//                     `
//                 }

//                 for (let k = 0; k < pending.length; k++) {
//                     arrangements +=
//                         `<div> Pending :
//                     <br> 
//                     ${pending[k].listingId}
//                     <br>
//                     ${pending[k].listingName}
//                     <br>                        
//                     ${pending[k].listingDescription}
//                     <br>
//                     ${pending[k].startingDate}
//                     <br>
//                         ${pending[k].endingDate}
//                         <br>
//                         ${pending[k].category}
//                         <br>
//                         ${pending[k].receiver}
//                         <br>
//                         ${pending[k].status}
//                     </div>
           
//                     `

//                 }

//                 root.innerHTML = arrangements;

//             })
//     })
// }


