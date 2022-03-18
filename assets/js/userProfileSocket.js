document.getElementById("offered").addEventListener('click', () => {
    // console.log("hello");
    // getOfferingListings()
    getListings(document.getElementById("offered").value)
})

document.getElementById("received").addEventListener('click', () => {
    // console.log("hello from received");
    // getReceivingListings()
    getListings(document.getElementById("received").value)

    // console.log(document.getElementById("received").value);
})



function getListings(offeredOrReceived) {
    // var userId = {userId:1} // Here we excpect the user id to come from the front-end(cookies-sessionId),
    // so we can use a realtime id and not a fixed one
    // var offerOrReceive = `${offeredOrReceived}_user_id`
    var offerOrReceive = offeredOrReceived
    var mySocket = io.sails.connect();
    mySocket.on('connect', function onConnect() {
        console.log("Socket connected!");
        mySocket.request(
            {
                method: 'post',
                url: '/userprofile',
                data: { userId: 1, offerOrReceive: offerOrReceive }
            },
            function (result, response) {
                console.log("hello from result");
                console.log(result);
                let root = document.getElementById("root");
                
                let listings = `<h1> Listings </h1>`
                for (let i = 0; i < result.length; i++) {
                    
                    for (let j = 0; j < result[i].arrangements.length; j++) {
                        listings += `
                        <div class="card" style="width: 50%; margin: 0 auto;">
                            <p>
                                <a data-bs-toggle="collapse" href="#collapse${result[i].arrangements[j].id}" role="button" aria-expanded="false" aria-controls="collapseExample" style="text-decoration: none; color: black;">
                                    Προσέφερες την ${result[i].name} στον ${result[i].arrangements[j].receiving_user_id}
                                </a>                
                            </p>

                            <div class="collapse" id="collapse${result[i].arrangements[j].id}">
                                <div class="card-body">
                                    Ημερομηνία έναρξης: ${new Date().toLocaleDateString(result[i].startingDate)}
                                                Ημερομηνία λήξης: ${new Date().toLocaleDateString(result[i].endingDate)}
                                                Περιγραφή: ${result[i].description}
                                                Κατηγορία: ${result[i].category_id}
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
