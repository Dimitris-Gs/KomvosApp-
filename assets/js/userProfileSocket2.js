document.getElementById("offered").addEventListener('click', () => {

    getListings(document.getElementById("offered").value)

    // let url = "userprofile" //CODE FOR TWO DIFFERENT SOCKETS IF NEEDED WITHOUT CREATING TWO DIFFERENT FUNCTIONS
    // getListings(document.getElementById("offered").value,x)
})

document.getElementById("received").addEventListener('click', () => {
    getListings(document.getElementById("received").value)


    // let url = "test"
    // getListings(document.getElementById("received").value,x)

})



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
                console.log("hello from result");
                console.log(result);
                // console.log(result[0]);
                let root = document.getElementById("arrangementsOffered");
                result.forEach(element => {
                    // for (const listing in element){
                    //     root.innerHTML +=  listing
                    // }
                    for (const item of Object.entries(element)) {
                        // console.log(item[1])
                        root.innerHTML += item[1]

                    }

                    // let p = ` <p>${element.listingName} `
                    // root.innerHTML +=  p
                })
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