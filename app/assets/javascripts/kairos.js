var kairosAPIURL = "http://api.kairos.com"

var kairosAPIKEY = "3326986684ad5d3fde93d958cddcfb1f"

var kairosID = "4b76f596"

var parseKairosResults = function(){
// debugger

};

var getKairos = function(){
  $.ajax({
    url: kairosAPIURL,
    method: "GET",
    header: {
      api_key: kairosAPIKEY,
      api_id: kairosID,
      format: "json"
    },
    // success: parseKairosResults
  });
}


// var request = new XMLHttpRequest();
//
// request.open('GET', 'https://api.kairos.com/v2/media/{id}');
//
// request.setRequestHeader('app_id', '4985f625');
// request.setRequestHeader('app_key', '4423301b832793e217d04bc44eb041d3');
//
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };
//
// request.send();
