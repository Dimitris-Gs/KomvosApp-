/**
 * Arrangement.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'arrangement',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    offering_user_id: { model: 'testuser'},
    receiving_user_id: { model: 'testuser'},
    listing_id: { model: 'listing'},
    pointsOfTransaction: { type: 'number', defaultsTo: 1, columnName: 'pointsoftransaction'},
    status: {type:'string', required: true }, //in progress,finished,canceled,
    //ίσως θα ήταν χρήσιμο να έχουμε ημερομηνία είτε που γίνεται η συμφωνία είτε που ολοκληρώνεται 
    // σdate:{type:'string',required: false}// Υπάρχει πρόβλημα εάν ένας χρήστης έχει χρησιμοποιήσει ένα listing παραπάνω από μια φορά 

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

