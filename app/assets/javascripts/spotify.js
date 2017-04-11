// const app = {};
// 
// app.apiUrl = 'https://api.spotify.com/v1';
//
// app.events = function () {
//   $('form').on('submit', function (e) {
//     e.preventDefault();
//     $('.loader').toggleClass('show');
//     var artists =  $('input[type=search]').val();
//     artists = artists.split(',');
//     var search = artists.map(artistName => app.searchArtist(artistName));
//
//     app.retrieveArtistInfo(search);
//
//   });
//
// };
//
// app.searchArtist = (artistName) => $.ajax({
//   url: `${app.apiUrl}/search`,
//   method: 'GET',
//   dataType: 'json',
//   data: {
//     q: artistName,
//     type: 'artist'
//   }
//
// });
//
// app.getArtistAlbums =  (artistId) => $.ajax({
//   url: `${app.apiUrl}/artists/${artistId}/albums`,
//   method: 'GET',
//   dataType: 'json',
//   data: {
//     album_type: 'album'
//   }
// });
//
// app.getArtistTracks = (id) => $.ajax({
//   url: `${app.apiUrl}/albums/${id}/tracks`,
//   method: 'GET',
//   dataType: 'json',
// });
//
// app.buildPlayList = function (tracks) {
//   $.when(...tracks)
//     .then((...tracksResults) => {
//       tracksResults = tracksResults.map(getFirstElement)
//          .map(item => item.items)
//          .reduce(flatten,[])
//          .map(item => item.id);
//       const randomTracks = [];
//       for(var i = 0; i < 30; i++) {
//         randomTracks.push(getRandomTrack(tracksResults));
//       }
//       const baseUrl = `https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:${randomTracks.join()}`;
//
//       $('.loader').toggleClass('show');
//
//       $('.playlist').html(`<iframe src="${baseUrl}" height="400 px"></iframe>`);
//       console.log(baseUrl);
//     });
// };
//
// app.retrieveArtistInfo = function (search) {
//   $.when(...search)
//     .then((...results) => {
//       results = results.map(getFirstElement)
//         .map(res => res.artists.items[0].id)
//         .map(id => app.getArtistAlbums(id));
//
//         app.retrieveArtistTracks(results);
//     });
// };
//
// app.retrieveArtistTracks = function (artistAlbums) {
//   $.when(...artistAlbums)
//      .then((...albums)  => {
//          albumIds = albums.map(getFirstElement)
//             .map(res => res.items)
//             .reduce(flatten,[])
//             .map(album => album.id )
//             .map(ids => app.getArtistTracks(ids));
//          app.buildPlayList(albumIds);
//
//      });
// }
//
// const getFirstElement = (item) => item[0];
//
// const flatten = (prev,curr) => [...prev,...curr];
//
// const getRandomTrack = (trackArray) => {
//     const randNum = Math.floor(Math.random() * trackArray.length);
//     return trackArray[randNum];
// }
//
//
//
// app.init = function () {
//   app.events();
//
// };
//
//
// $(app.init);
