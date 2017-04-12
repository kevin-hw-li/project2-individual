// var emotionAnalysis = function () {
//
//   initCamera();
//
//   $('#capture').on('click', function (e) {
//
//     var snap = camera.capture();
//     snap.get_blob(function(img){
//       // console.log(img, this);
//
//       var reader  = new FileReader();
//       reader.readAsDataURL(img);
//       reader.onloadend = function () {
//         var fileData = parseImageData(reader.result);
//         var subjectID = $("#username").val()
//
//         // console.log(subjectID, fileData.length, GALLERY_NAME);
//
//         kairos.verify(fileData, GALLERY_NAME, subjectID, function (response) {
//           if (response.responseText.length < 100 || JSON.parse(response.responseText).images[0].transaction.confidence < 0.6) {
//             // flash an error message
//             console.log(response.responseText);
//           } else {
//             $("#verify").attr("type", "submit").trigger("click")
//           }
//           // JSON.parse(response.responseText)
//         })
//         // console.log(fileData);
//       }
//     })
//   })
// };
