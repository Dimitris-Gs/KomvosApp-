const listingsOffered = io.socket
let globalDto = []

listingsOffered.post('/all-listings-offered', function (result, jwres) {
    console.log(result);
    globalDto = result
    divListing(globalDto)
})

