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
  '/login'   : {action :'loginForm/view-login-form' },
  '/thankyou': { view : 'pages/thankumsg'},
  '/listings-offered': {action : 'listings-pages/listings-offered'},
  '/listings-received': {action : 'listings-pages/listings-received'},
  '/events': { action : 'events'},
  '/create'  : {action:'create'},
  '/delete' : { action : 'delete'},
  '/userprofile': { action: "user" },
  '/userprofileAntonis':  { action: "user-antonis" },
  'POST /updateuser' : {action: "update-user"},
  'POST /rest': {action:"rest-api/create-user"},
  'POST /userprofile': {action: 'rest-api/user-profile'},
  'POST /userprofileoffered': {action: 'rest-api/user-profile-offering'},
  'POST /userprofilereceived' : {action:'rest-api/user-profile-receiving'},
  'POST /listing-categories' : {action : 'listings-pages/listing-categories'},
  'POST /create-listing': {action:"listings-pages/create-listing"},
  '/create-event' : {view: 'pages/create-event'},
  'POST /restevent': {action:"rest-api/create-event"},
  '/update-event': { action: "event" },
  'POST /updateevent' : {action: "update-event"},
  'POST /register/check-email': { action: "rest-api/check-email"},
  'POST /create-arrangement-offered': { action: "arrangements-create-update/create-arrangement-offered"},
  'POST /create-arrangement-received': { action: "arrangements-create-update/create-arrangement-received"},
  'POST /first-case' : { action: "active-arrangements/first-case"},
  'POST /second-case' : { action: "active-arrangements/second-case"},
  'POST /third-case' : { action: "active-arrangements/third-case"},
  'POST /fourth-case' : { action: "active-arrangements/fourth-case"},
  'POST /update-canceled' : { action: "arrangements-create-update/update-canceled" } ,
  'POST /update-accepted' : { action: "arrangements-create-update/update-accepted" } ,
  'POST /update-finished' : { action: "arrangements-create-update/update-finished" } ,
  'POST /loginForm/checkCredentials' : {action :'loginForm/check-credentials-for-login-form'}

  
  

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
