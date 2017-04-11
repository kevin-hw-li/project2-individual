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
//
// var request = new XMLHttpRequest();
//
// request.open('POST', 'https://api.kairos.com/detect');
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
//   'image': 'http://media.kairos.com/kairos-elizabeth.jpg',
//   'selector': 'ROLL'
// };
//
// request.send(JSON.stringify(body));
