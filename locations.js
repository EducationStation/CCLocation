
animicon = "img/arrowsmallerorange.png";
filmicon = "img/arrowsmallerblue.png";
youtubeicon = "img/arrowsmallerred.png";

const CONFIGURATION = {
    "locations": [
      {"title":"Katy","title2":"Mirus Academy","address1":"5561 3rd St","address2":"Katy, TX 77493, USA","coords":{"lat":29.787922492451827,"lng":-95.82045536441802},"placeId":"ChIJsVW26iMkQYYRq4rXBj7EgJs","camps":[{camp:"Animation",days:"3 days | Mon-Wed", price:"$229.99",icon:animicon},{camp:"Filmmaking",days:"3 days | Mon-Wed", price:"$229.99",icon:filmicon},{camp:"Youtubers",days:"3 days | Mon-Wed", price:"$229.99",icon:youtubeicon}]},
      {"title":"Richmond","title2":"Shady Oak Primary","address1":"600 Main St","address2":"Richmond, TX 77469, USA","coords":{"lat":29.579462734973493,"lng":-95.76243063558196},"placeId":"ChIJg4twb3oeQYYRLszePNTxfyo","camps":[{camp:"Animation",days:"3 days | Mon-Wed", price:"$229.99",icon:animicon},{camp:"Filmmaking",days:"3 days | Mon-Wed", price:"$229.99",icon:filmicon},{camp:"Youtubers",days:"3 days | Mon-Wed", price:"$229.99",icon:youtubeicon}]},
      {"title":"Cy-fair","title2":"Texas Christian Academy","address1":"17810 Kieth Harrow Blvd","address2":"Cypress, TX 77084, USA","coords":{"lat":29.84985717507098,"lng":-95.67134867934465},"placeId":"ChIJETdJFt_ZQIYR2QC-Cb4o2bw","camps":[{camp:"Animation",days:"3 days | Mon-Wed", price:"$229.99",icon:animicon},{camp:"Filmmaking",days:"3 days | Mon-Wed", price:"$229.99",icon:filmicon},{camp:"Youtubers",days:"3 days | Mon-Wed", price:"$229.99",icon:youtubeicon}]},
      {"title":"Memorial","title2":"Yorkshire Academy","address1":"14120 Memorial Dr","address2":"Houston, TX 77079, USA","coords":{"lat":29.77108864232313,"lng":-95.59252427790985},"placeId":"ChIJfWgquWTbQIYRD-wa36hRBZE","camps":[{camp:"Animation",days:"5 half days | Mon-Fri", price:"$199.99",icon:animicon},{camp:"Filmmaking",days:"5 half days | Mon-Fri", price:"$199.99",icon:filmicon}]},
    ],
    "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
    "mapsApiKey": "AIzaSyDH_VUHgooxpBZJBWEHfHnRt_mcCRsMvyI"
  };

  function initMap() {
    new LocatorPlus(CONFIGURATION);
  }