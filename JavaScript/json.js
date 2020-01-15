// {
//   "first_name"  :  "Sammy",
//   "last_name"   :  "Shark",
//   "online"      :  true
// }

// In terms of syntax, JavaScript objects are similar
// to JSON, but the keys in JavaScript objects are not
// strings in quotes. Also, JavaScript objects are less
// limited in terms of types passed to values, so they can
// use functions as values.

// -----------Accessing JSON Data--------------
// var sammy = {
//   "first_name"  :  "Sammy",
//   "last_name"   :  "Shark",
//   "online"      :  true
// }

// sammy.first_name
// sammy.last_name
// sammy.online

// var user_profile = {
//   username: "SammyShark",
//   social_media: [
//     {
//       description: "twitter",
//       link: "https://twitter.com/digitalocean"
//     },
//     {
//       description: "facebook",
//       link: "https://www.facebook.com/DigitalOceanCloudHosting"
//     },
//     {
//       description: "github",
//       link: "https://github.com/digitalocean"
//     }
//   ]
// };

// console.log(user_profile.social_media[1].description);

// // -----------Functions for Working with JSON--------------
// var obj = { first_name: "Sammy", last_name: "Shark", location: "Ocean" };
// console.log(obj);
// var s = JSON.stringify(obj);
// console.log(s);

//-------------------JSON.stringify()---------------
var obj = { first_name: "Sammy", last_name: "Shark", location: "Ocean" };
var s = JSON.stringify(obj);
// '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';
//-------------------JSON.parse()---------------
var o = JSON.parse(s);
// o = obj
