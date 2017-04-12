
var captureImage = function () {

  initCamera();

  // What is this for?
  // $('#f').change(function () {
  //   console.log(this, this.files[0]);
  //
  //   var file = this.files[0];
  //
  //   $.ajax({
  //    url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
  //    beforeSend: function(xhrObj) {
  //        // Request headers
  //        xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
  //        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8598cbde27b5447d9f22f6047e1f767e");
  //    },
  //    type: "POST",
  //   //  data: JSON.stringify({url: 'http://res.cloudinary.com/dsgd2hpbg/image/upload/v1491973085/rjsjcp9ldicdyxomfngh.jpg'})
  //    data: file,
  //    contentType: file.type,
  //    processData: false
  //  })
  //  .done(function(data) {
  //     //  JSON.stringify(data);
  //      console.log(data);
  //  })
  //  .fail(function(error) {
  //      console.log(error.getAllResponseHeaders());
  //  });
  //
  //
  // });

  $('#capture').on('click', function () {

    var snap = camera.capture();

    snap.get_blob(function(img){
      console.log(img, this);


      var file = img;

      // THIS WORKS
      $.ajax({
       url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
       beforeSend: function(xhrObj) {
           // Request headers
           xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8598cbde27b5447d9f22f6047e1f767e");
       },
       headers: {
         'content-Type': 'application/octet-stream',
         'Ocp-Apim-Subscription-Key': '8598cbde27b5447d9f22f6047e1f767e'
       },
       type: "POST",
      //  data: JSON.stringify({url: 'http://res.cloudinary.com/dsgd2hpbg/image/upload/v1491973085/rjsjcp9ldicdyxomfngh.jpg'})
       data: file,
       contentType: file.type,
       processData: false
     })
     .done(function(data) {
        //  JSON.stringify(data);
        console.log(data[0].scores);

        emotion = Object.keys(data[0].scores).reduce(function(a, b){ return data[0].scores[a] > data[0].scores[b] ? a : b });

        window.playlists = emotion
        console.log("emotion: " + emotion);

        $('#create').trigger("click")

     })
     .fail(function(error) {
         console.log(error.getAllResponseHeaders());
     });

      // CLOUDINARY
      // $('#image_upload').unsigned_cloudinary_upload("test123",
      //   { cloud_name: 'dsgd2hpbg', tags: 'browser_uploads' },
      //   { multiple: false }
      // )
      // .bind('cloudinarydone', function(e, data) {
      //   console.log('DONE 1!', data);
      //   // ajax send to rails server: data.result.public_id
      //   $.ajax({
      //     url: "/images",
      //     method: "POST",
      //     data: { img_src: data.result.public_id },
      //     success: function () {
      //       console.log('SUCCESS (image ID saved)');
      //       //
      //       var image_url = $.cloudinary.url(data.result.public_id);
      //       // console.log('cloud URL:', image_url);
      //     },
      //     error: function (err) {
      //       console.log('ERROR', err);
      //     },
      //   }) // closes ajax post request
      // }) //closes cloudinary bind
      // .fileupload('add', { files: [ img ] });  // perform upload
      //
      // var reader  = new FileReader();
      // reader.readAsDataURL(img);
      // reader.onloadend = function () {
      //   var fileData = parseImageData(reader.result);
      //
      //   console.log('file:', fileData.length)
      //
      // }; //closes reader onloadend

    }); //closes snap capture
  });  //cloese event handler


};
