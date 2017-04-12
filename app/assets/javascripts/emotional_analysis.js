var emotionAnalysis = function () {

  initCamera();

  $('#capture').on('click', function (e) {

    var snap = camera.capture();
    snap.get_blob(function(img){
      // console.log(img, this);

      var reader  = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = function () {
        var fileData = parseImageData(reader.result);

        $.ajax({
            url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/octet-stream");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8598cbde27b5447d9f22f6047e1f767e");
            },
            type: "POST",
            // Request body
            processData: false,
            contentType: 'application/octet-stream',
            data: fileData

        })
        .done(function(data) {
            alert("success");
            console.log(data)
        })
        .fail(function(data) {
            alert("error");
            console.log(data)
        });
        // var subjectID = $("#username").val()

        // console.log(subjectID, fileData.length, GALLERY_NAME);

        // kairos.verify(fileData, GALLERY_NAME, subjectID, function (response) {
        //   if (response.responseText.length < 100 || JSON.parse(response.responseText).images[0].transaction.confidence < 0.6) {
        //     // flash an error message
        //     console.log(response.responseText);
        //   } else {
        //     $("#verify").attr("type", "submit").trigger("click")
          // }
          // JSON.parse(response.responseText)
        // })
        // console.log(fileData);
      }
    })
  })
};


// $(function() {
//
//     });
