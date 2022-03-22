// εδω προκειται να κανουμε κλασση που θα δεχεται λιστικγς με τa arrangements του και θα επιστρεφει ενα ολοκληρωμενο αντικειμενο στο φροντ

class User {
    constructor(userListingArrangements) {
        this.dto = []
        this.userListingArrangements = userListingArrangements
        // this.listing = this.userListingArrangements.forEach(listing => {
        //     this.currentListing = {}
        //     this.currentListing.arrangements = []
        //     // console.log(listing);
        //     this.listingCategory(listing.category_id).then( (result,reject) => {console.log(result)})
        //     this.currentListing.listingName = listing.name
        //     this.currentListing.listingStartingDate = listing.startingDate
        //     this.currentListing.listingEndingDate = listing.endingDate
        //     // this.listingCategory(listing.category_id).then( (result,reject) => {this.currentListing.listingCategoryName = result.name})
        //     // console.log(this.current.listingCategoryName);
        //     this.currentListing.listingCategoryName = this.listingCategory(listing.category_id).then( (result,reject) => {return result.name})
        //     console.log("-------------------------");
        //     console.log(element.arrangements);
        //     listing.arrangements.forEach(arrangement => {
        //         // console.log(new Date(arrangement.createdAt).toLocaleDateString("en-US"));
        //         this.currentArrangement = {}
        //         // this.user(arrangement.receiving_user_id).then( (result,reject) => {console.log(result);})
        //         this.currentArrangement.date =  arrangement.createdAt
        //         this.currentArrangement.points = arrangement.points
        //         this.currentArrangement.receiving = this.user(arrangement.receiving_user_id).then( (result,reject) => {return result})
        //         this.currentListing.arrangements.push(this.currentArrangement)
        //     })
        //     this.dto.push(this.currentListing)
        // });
    }
    async user(id) {
        return await TestUser.findOne({
            where: { id: id },
            select: ['firstName', 'lastName']
        })
    }
    async listingCategory(id) {
        return await ListingCategories.findOne({
            where: { id: id },
            select: ['name']
        })
    }
    async test() {

        this.userListingArrangements.forEach(listing => {
            this.currentListing = {}
            this.currentListing.arrangements = []
            // console.log(listing);
            // this.listingCategory(listing.category_id).then( (result,reject) => {console.log(result)})
            console.log(this.listingCategory(listing.category_id))
            this.currentListing.listingName = listing.name
            this.currentListing.listingStartingDate = listing.startingDate
            this.currentListing.listingEndingDate = listing.endingDate
            // this.listingCategory(listing.category_id).then( (result,reject) => {this.currentListing.listingCategoryName = result.name})
            // console.log(this.current.listingCategoryName);
            this.currentListing.listingCategoryName = this.listingCategory(listing.category_id).then((result, reject) => { return result.name })
            // console.log(this.dto);
            // console.log(this.currentListing.listingCategoryName);
            // console.log("-------------------------");
            // console.log(element.arrangements);
            // listing.arrangements.forEach(arrangement => {
            //     // console.log(new Date(arrangement.createdAt).toLocaleDateString("en-US"));
            //     this.currentArrangement = {}
            //     // this.user(arrangement.receiving_user_id).then( (result,reject) => {console.log(result);})
            //     this.currentArrangement.date =  arrangement.createdAt
            //     this.currentArrangement.points = arrangement.points
            //     this.currentArrangement.receiving = this.user(arrangement.receiving_user_id).then( (result,reject) => {return result})
            //     this.currentListing.arrangements.push(this.currentArrangement)
            // })
            this.dto.push(this.currentListing)
        });
    }
    async test2() {
        await Promise.all(this.userListingArrangements.map(async (listing) => {
            this.currentListing = {}
            this.currentListing.arrangements = []
            // await this.listingCategory(listing.category_id).then( (result,reject) => {console.log(result)})
            this.currentListing.listingCategoryName = await this.listingCategory(listing.category_id).then((result, reject) => { return result.name })
            this.currentListing.listingName = listing.name
            this.currentListing.listingStartingDate = listing.startingDate
            this.currentListing.listingEndingDate = listing.endingDate
            this.dto.push(this.currentListing)
            console.log(this.dto);
        }))
    }
    async test3() {
        await this.userListingArrangements.reduce(async (memo, listing) => {
            await memo
            this.currentListing = {}
            this.currentListing.arrangements = []
            // await this.listingCategory(listing.category_id).then( (result,reject) => {console.log(result)})
            this.currentListing.listingCategoryName = await this.listingCategory(listing.category_id).then((result, reject) => { return result.name })
            this.currentListing.listingName = listing.name
            this.currentListing.listingStartingDate = listing.startingDate
            this.currentListing.listingEndingDate = listing.endingDate
            // this.dto.push(this.currentListing)
            // console.log(this.dto);
            await listing.arrangements.reduce(async (memo, arrangement) => {
                await memo
                this.currentArrangement = {}
                // this.user(arrangement.receiving_user_id).then( (result,reject) => {console.log(result);})
                this.currentArrangement.date = arrangement.createdAt
                this.currentArrangement.points = arrangement.points
                // this.currentArrangement.receiving = await this.user(arrangement.receiving_user_id).then((result, reject) => { return result })
                let receiver = await this.user(arrangement.receiving_user_id).then((result, reject) => { return result })
                this.currentArrangement.receiving = `${receiver.firstName} ${receiver.lastName}`
                this.currentListing.arrangements.push(this.currentArrangement)
            }, undefined)
            this.dto.push(this.currentListing)
        }, undefined)
    }


}

module.exports = { User }