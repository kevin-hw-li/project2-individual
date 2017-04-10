
var request = new XMLHttpRequest();

request.open('POST', 'https://api.kairos.com/detect');

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
  'image': 'http://media.kairos.com/kairos-elizabeth.jpg',
  'selector': 'ROLL'
};

request.send(JSON.stringify(body));
