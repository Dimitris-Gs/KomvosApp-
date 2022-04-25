const listingsReceived = io.socket
let globalDto = []

listingsReceived.post('/all-listings-received', function (result, jwres) {
    console.log('received');
    console.log(result);
    console.log(result[1]);
    globalDto = result[0]
    divListingReceived(globalDto,result[1])
})
