const listingsOffered = io.socket
let globalDto = []

listingsOffered.post('/all-listings-offered', function (result, jwres) {
    console.log(result);
    console.log(result[1]);
    globalDto = result[0]
    divListing(globalDto,result[1])
})

