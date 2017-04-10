
var request = new XMLHttpRequest();

request.open('POST', 'https://api.kairos.com/enroll');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('app_id', '4b76f596');
request.setRequestHeader('app_key', '3326986684ad5d3fde93d958cddcfb1f');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  "image":"http://i.imgur.com/L882czs.jpg",
  "subject_id":"husky",
  "gallery_name":"kevinGallery"
};

request.send(JSON.stringify(body));



  // var imgSrc = data.data.image_url;
  // var $img = $("<img>").attr("src", imgSrc);
  // $(".giphy .content").append($img);
// };

// $(document).ready(function () {
//   var giphyTimer = window.setInterval(enrollImage, 3000);
//   $(".giphy button").on("click", function () {
//     $(".giphy .content").html(""); // remove content when the button is clicked
//     clearInterval(giphyTimer);
//     var giphyTimer = window.setInterval(enrollImage, 3000);
//   })
// });



// var request = new XMLHttpRequest();
//
// request.open('POST', 'https://api.kairos.com/gallery/view');
//
// request.setRequestHeader('Content-Type', 'application/json');
// request.setRequestHeader('app_id', '4b76f596');
// request.setRequestHeader('app_key', '3326986684ad5d3fde93d958cddcfb1f');
//
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };
//
// var body = {
//   "gallery_name":"kevinGallery",
// };
//
// request.send(JSON.stringify(body));


$(document).ready(function () {

  var apiURL = "https://api.kairos.com/enroll"
  var API_ID = "4b76f596"
  var API_KEY = "3326986684ad5d3fde93d958cddcfb1f"

  var enrollImage = function () {
    // var tag = $(".giphy input").val();
    $.ajax({
      url: apiURL,
      method: "POST",
      // dataType: "JSON", // JSONP maybe needed sometimes
      headers: {
        "app_id": API_ID,
        "app_key": API_KEY,
        "Content-Type": "application/json",
      },
      body: {
        "image": "http://i.imgur.com/L882czs.jpg",
        "subject_id": "Nadal",
        "gallery_name": "kevinGallery"
      },
      success: displayEnrolledImage
    })
  };

  var displayEnrolledImage = function () {
    console.log("SUCCESS");
  }

});



// // POST request for emotion response media
// var request = new XMLHttpRequest();
//
// request.open('POST', 'https://api.kairos.com/v2/media?source=https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnFAAAAJGY5OWFhNzQ5LWE4NmYtNDNkYi04MmQzLTYzY2NiYjg3MzEwNQ.jpg');
//
// request.setRequestHeader('app_id', '4b76f596');
// request.setRequestHeader('app_key', '3326986684ad5d3fde93d958cddcfb1f');
//
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };
// var body = {
//   'image': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnFAAAAJGY5OWFhNzQ5LWE4NmYtNDNkYi04MmQzLTYzY2NiYjg3MzEwNQ.jpg',
//   'selector': 'ROLL'
// };
//
// request.send(JSON.stringify(body));
//
// //GET request for emotion response
//
// var request = new XMLHttpRequest();
//
// request.open('GET', 'https://api.kairos.com/v2/media/{id}');
//
// request.setRequestHeader('app_id', '4b76f596');
// request.setRequestHeader('app_key', '3326986684ad5d3fde93d958cddcfb1f');
//
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };
// var body = {
//   'image': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnFAAAAJGY5OWFhNzQ5LWE4NmYtNDNkYi04MmQzLTYzY2NiYjg3MzEwNQ.jpg',
//   'selector': 'ROLL'
// };
//
// request.send(JSON.stringify(body));
//
//
// //Analyse photo response
