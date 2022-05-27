
animicon = "img/arrowsmallerorange.png";
filmicon = "img/arrowsmallerblue.png";
youtubeicon = "img/arrowsmallerred.png";

locaMirus = "img/MirusAcademy.png";
locaShady = "img/ShadyOak.png";
locaTCS = "img/TCS.png";
locaYork = "img/Yorkshire.png";


const CONFIGURATION = {
    "locations": [
        { "Price": "$229", "Full": false, "title": "Mirus Academy Katy", "img": locaMirus, "Available": "Filmmaking, Animation, Youtube Creators", "address1": "5561 3rd St", "address2": "Katy, TX 77493, USA", "coords": { "lat": 29.787922492451827, "lng": -95.82045536441802 }, "placeId": "ChIJsVW26iMkQYYRq4rXBj7EgJs", "camps": [{ camp: "Animation", days: "3 days | Mon-Wed", price: "$229.99", icon: animicon }, { camp: "Filmmaking", days: "3 days | Mon-Wed", price: "$229.99", icon: filmicon }, { camp: "Youtubers", days: "3 days | Mon-Wed", price: "$229.99", icon: youtubeicon }] },
        { "Price": "$199", "Full": false, "title": "Shady Oak Primary Richmond", "img": locaShady, "Available": "Filmmaking, Animation, Youtube Creators", "address1": "600 Main St", "address2": "Richmond, TX 77469, USA", "coords": { "lat": 29.579462734973493, "lng": -95.76243063558196 }, "placeId": "ChIJg4twb3oeQYYRLszePNTxfyo", "camps": [{ camp: "Animation", days: "3 days | Mon-Wed", price: "$199.99", icon: animicon }, { camp: "Filmmaking", days: "3 days | Mon-Wed", price: "$199.99", icon: filmicon }] },
        { "Price": "$199", "Full": false, "title": "TX Christian School Cy-fair", "img": locaTCS, "Available": "Filmmaking, Animation, Youtube Creators", "address1": "17810 Kieth Harrow Blvd", "address2": "Cypress, TX 77084, USA", "coords": { "lat": 29.84985717507098, "lng": -95.67134867934465 }, "placeId": "ChIJETdJFt_ZQIYR2QC-Cb4o2bw", "camps": [{ camp: "Animation", days: "3 days | Tue-Thu", price: "$199.99", icon: animicon }, { camp: "Youtubers", days: "3 days | Tue-Thu", price: "$199.99", icon: youtubeicon }] },
        { "Price": "FULL!", "Full": true, "title": "Yorkshire Academy Memorial", "img": locaYork, "Available": "Filmmaking, Animation", "address1": "14120 Memorial Dr", "address2": "Houston, TX 77079, USA", "coords": { "lat": 29.77108864232313, "lng": -95.59252427790985 }, "placeId": "ChIJfWgquWTbQIYRD-wa36hRBZE", "camps": [{ camp: "Animation", days: "5 half days | Mon-Fri", price: "FULL!", icon: animicon }, { camp: "Filmmaking", days: "5 half days | Mon-Fri", price: "FULL!", icon: filmicon }] },
    ],
    "mapOptions": { "center": { "lat": 38.0, "lng": -100.0 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": false, "zoom": 4, "zoomControl": true, "maxZoom": 17 },
    "mapsApiKey": "AIzaSyDH_VUHgooxpBZJBWEHfHnRt_mcCRsMvyI"
};

function initMap() {
    new LocatorPlus(CONFIGURATION);
}