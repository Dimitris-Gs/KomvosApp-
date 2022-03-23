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
                data: { userId: 1, offerOrReceive: offerOrReceive}
            },
            function (result, response) {
                console.log("hello from result");
                console.log(result);
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