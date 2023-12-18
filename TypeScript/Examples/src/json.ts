export { }
// ---------------------json------------------------------
var sammy = {
    first_name: "Sammy",
    last_name: "Shark",
    online: true
};

// ---------------------------nested array----------------------
var user_profile = {
    username: "SammyShark",
    social_media: [
        {
            description: "twitter",
            link: "https://twitter.com/digitalocean"
        },
        {
            description: "facebook",
            link: "https://www.facebook.com/DigitalOceanCloudHosting"
        },
        {
            description: "github",
            link: "https://github.com/digitalocean"
        }
    ]
};
console.log(user_profile.social_media[1].description);

// ------------------------json.stringify---------------------
var obj = { first_name: "Sammy", last_name: "Shark", location: "Ocean" };
var str = JSON.stringify(obj);
console.log(str); // {"first_name":"Sammy","last_name":"Shark","location":"Ocean"}

// ------------------------json.parse--------------------------
// strings are useful for transporting but you’ll want to be able to
// convert them back to a JSON object on the client and/or the server side.
var o = JSON.parse(str);
