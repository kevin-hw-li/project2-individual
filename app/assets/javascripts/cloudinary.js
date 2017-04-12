var captureImage = function () {

  initCamera();

  $('#capture').on('click', function (e) {

    var snap = camera.capture();
    snap.get_blob(function(img){
      console.log(img, this);

      // $('#image_upload').unsigned_cloudinary_upload("test123",
      //   { cloud_name: 'dsgd2hpbg', tags: 'browser_uploads' },
      //   { multiple: false }
      // )
      // .bind('cloudinarydone', function(e, data) {
      //   console.log('DONE 1!', data);
      //   // ajax send to rails server: data.result.public_id
      // })
      // .fileupload('add', { files: [ img ] });

      var reader  = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = function () {
        var fileData = parseImageData(reader.result);
        // var subjectID = $("#user_name").val()

        // console.log(subjectID, fileData.length, GALLERY_NAME);


        $('#image_upload').unsigned_cloudinary_upload("test123",
          { cloud_name: 'dsgd2hpbg', tags: 'browser_uploads' },
          { multiple: false }
        )
        .bind('cloudinarydone', function(e, data) {
          console.log('DONE 1!', data);
          // ajax send to rails server: data.result.public_id
          $.ajax({
            url: "/images",
            method: "POST",
            data: { img_src: "data.result.public_id" },
            success: function () {
              console.log('SUCCESS');
            },
            error: function (err) {
              console.log('ERROR', err);
            },
          }) // closes ajax post request
        }) //closes cludinary bind
        .fileupload('add', { files: [ img ] });
      }; //closes reader onloadend
    }); //closes snap capture
  });  //cloese event handler
};  //closes doc ready
