document.getElementById("offered").addEventListener('click', () => {
    getListings()
})

// document.getElementById("received").addEventListener('click', () => {
//     // console.log("hello from received");
//     // getReceivingListings()
//     getListings(document.getElementById("received").value)

//     // console.log(document.getElementById("received").value);
// })



function getListings() {
    // var userId = {userId:1} // Here we excpect the user id to come from the front-end(cookies-sessionId),
    // so we can use a realtime id and not a fixed one
    
    var mySocket = io.sails.connect();
    mySocket.on('connect', function onConnect() {
        console.log("Socket connected!");
        mySocket.request(
            {
                method: 'post',
                url: '/userprofile',
                data: { userId: 1 }
            },
            function (result, response) {
               
                let root = document.getElementById("root");

                let listings = `<h1> Listings </h1>`
                for (let i = 0; i < result.length; i++) {

                    for (let j = 0; j < result[i].arrangements.length; j++) {
                        listings += `
                        <div class="card" style="width: 50%; margin: 0 auto;">
                            <p> 
                                Προσέφερες την ${result[i].name} στον ${result[i].arrangements[j].receiving_user} 

                                <a data-bs-toggle="collapse" href="#collapse${result[i].arrangements[j].id}" role="button" aria-expanded="false" aria-controls="collapseExample" style="text-decoration: none; color: black;"> 
                                <!-- bootstrap arrow icon  --> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                                </svg>
                                   
                                </a>                
                            </p>

                            <div class="collapse" id="collapse${result[i].arrangements[j].id}">
                                <div class="card-body">
                                    Ημερομηνία έναρξης: ${result[i].startingDate} <br>
                                                Ημερομηνία λήξης: ${result[i].endingDate} <br>
                                                Περιγραφή: ${result[i].description} <br>
                                                Κατηγορία: ${result[i].category} <br>
                                </div>
                            </div>
                        </div>`

                        root.innerHTML = listings
                    }
                }


            }
        );
    });

}
//new Date().toLocaleDateString(
// function getReceivingListings() {
//     // var userId = {userId:1} // Here we excpect the user id to come from the front-end(cookies-sessionId),
//     // so we can use a realtime id and not a fixed one
//     var mySocket = io.sails.connect();
//     mySocket.on('connect', function onConnect() {
//         console.log("Socket connected!");
//         mySocket.request(
//             {
//                 method: 'post',
//                 url: '/userprofile',
//                 data: { userId: 1 }
//             },
//             function (result, response) {
//                 console.log("hello from result");
//                 console.log(result);
//                 // for (let i = 0; i < result.length; i++) {
//                 //     let id = `o${orderProducts2.orderId}p${orderProducts2.productIds[i]}`;
//                 //     let entry = document.getElementById(id);
//                 //     entry.innerHTML = result[i];
//                 // }
//             }
//         );
//     });

// }
