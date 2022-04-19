const listingsOffered = io.socket
let globalDto = []

listingsOffered.post('/all-listings-received', function (result, jwres) {
    console.log(result);
    globalDto = result
    divListingReceived(globalDto)
})
