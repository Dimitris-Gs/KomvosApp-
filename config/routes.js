/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/register': {view: 'pages/registration'},
  '/login'   : {view : 'pages/loginform'},
  '/thankyou': { view : 'pages/thankumsg'},
  '/listings-offered': {action : 'listings-offered'},
  '/listings-received': {action : 'listings-received'},
  '/events': { view : 'pages/events'},
  '/create'  : {action:'create'},
  '/userprofile': { action: "user" },
  'POST /updateuser' : {action: "update-user"},
  'POST /rest': {action:"rest-api/create-user"},
  'POST /userprofile': {action: 'rest-api/user-profile'},
  'POST /userprofileoffered': {action: 'rest-api/user-profile-offering'},
  'POST /userprofilereceived' : {action:'rest-api/user-profile-receiving'},
  'POST /listing-categories' : {action : 'listing-categories'},
  'POST /restlisting': {action:"rest-api/create-listing"},
  '/create-event' : {view: 'pages/create-event'},
  'POST /restevent': {action:"rest-api/create-event"},
  '/update-event': { action: "event" },
  'POST /updateevent' : {action: "update-event"},
  'POST /register/check-email': { action: "rest-api/check-email"},
 

  
  

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
