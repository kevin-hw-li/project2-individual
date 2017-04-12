// var app = app || {};
//
// app.apiUrl = 'https://api.spotify.com/v1';
// //user can enter a search term for a playlist
// app.events = function () {
//   $('.searchForm').on('submit', function (e) {
//     e.preventDefault();
//     $('.loader').toggleClass('show');
//     var playlists =  $('input[type=search]').val();
//     playlists = playlists.split(',');
//     var search = playlists.map(playlistName => app.searchPlaylists(playlistName));
//
//     $.when(...search)
//         .then((...results) => {
//           playlistUris = results[0].playlists.items.map(function (playlist){
//             return playlist.uri;
//           });
//           console.log(playlistUris);
//
//           var playlist = getRandomPlaylist(playlistUris);
//
//           app.choosePlayList(playlist);
//     });
//
// });
//
//   //go to spotify and get list of playlists matching input
//
//   app.searchPlaylists = (searchTerm) => $.ajax({
//     url: `${app.apiUrl}/search`,
//     method: 'GET',
//     dataType: 'json',
//     data: {
//       q: searchTerm,
//       type: 'playlist'
//     }
//   });
// };
//
// //choose a random playlist
//
//   app.choosePlayList = function (playlist) {
//
//     var baseUrl = `https://embed.spotify.com/?theme=white&uri=${playlist}`;
//
//     $('.loader').toggleClass('show');
//
//     $('.playlist').html(`<iframe src="${baseUrl}" height="400 px"></iframe>`);
//     console.log(baseUrl);
//   };
//
// var getRandomPlaylist = function(playlist){
//   var randNum = Math.floor(Math.random() * playlist.length);
//   return playlist[randNum];
// };
//
// app.init = function () {
//   app.events();
// };
//
// $(app.init);
