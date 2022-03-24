// εδω προκειται να κανουμε κλασση που θα δεχεται λιστικγς με τa arrangements του και θα επιστρεφει ενα ολοκληρωμενο αντικειμενο στο φροντ

class User {
    constructor(userListingArrangements) {
        this.dto = []
        this.userListingArrangements = userListingArrangements
        
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
    
    async test3() {
        await this.userListingArrangements.reduce(async (memo, listing) => {
            await memo
            this.currentListing = {}
            this.currentListing.arrangements = []
            this.currentListing.listingCategoryName = await this.listingCategory(listing.category_id).then((result, reject) => { return result.name })
            this.currentListing.listingName = listing.name
            this.currentListing.listingStartingDate = listing.startingDate
            this.currentListing.listingEndingDate = listing.endingDate
            this.currentListing.listingDescription = listing.description
           
            await listing.arrangements.reduce(async (memo, arrangement) => {
                await memo
                this.currentArrangement = {}
        
                this.currentArrangement.id = arrangement.id
                this.currentArrangement.date = arrangement.createdAt
                this.currentArrangement.points = arrangement.pointsOfTransaction
                
                let receiver = await this.user(arrangement.receiving_user_id).then((result, reject) => { return result });
                this.currentArrangement.receiving = `${receiver.firstName} ${receiver.lastName}`;
                this.currentListing.arrangements.push(this.currentArrangement)
            }, undefined);
            this.dto.push(this.currentListing);
        }, undefined);
    }


}

module.exports = { User }