var api_url = "https://api.kairos.com/v2/media";

// var API_ID = "4b76f596";
// var API_KEY = "3326986684ad5d3fde93d958cddcfb1f";
// var GALLERY_NAME = "Users";
// var kairos = new Kairos(API_ID, API_KEY);
// console.log(kairos);




var captureImage = function () {

  initCamera();


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

    // var reader  = new FileReader();
    // reader.readAsDataURL(this.files[0]);
    // reader.onloadend = function () {
    //   var fileData = parseImageData(reader.result);
    //
    //
    //       $.ajax("https://api.kairos.com/v2/media?landmarks=1&source=url", // + '?source=' + encodeURIComponent(image_url),
    //       {
    //         method: "POST",
    //         processData: false,
    //         // contentType: this.files[0].type,
    //         headers: {
    //           app_id: API_ID,
    //           app_key: API_KEY
    //         },
    //         data: {
    //           source: fileData
    //         },
    //         // // data: {
    //         //   image: 'test',
    //         // //   source: 'test'
    //         // // },
    //         success: function (data) {
    //           console.log('kairos success!', data );
    //         },
    //         error: function (data) {
    //           console.log('kairos FUCKED!',  data );
    //         }
    //       });
    //
    //
    // };


  

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
         console.log(data);
     })
     .fail(function(error) {
         console.log(error.getAllResponseHeaders());
     });


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
          data: { img_src: data.result.public_id },
          success: function () {
            console.log('SUCCESS (image ID saved)');
            //
            var image_url = $.cloudinary.url(data.result.public_id);
            // console.log('cloud URL:', image_url);
            //


            // console.log('url', "https://api.kairos.com/v2/media" + '?source=' + encodeURIComponent(image_url), image_url);
            // $.ajax("https://api.kairos.com/v2/media", // + '?source=' + encodeURIComponent(image_url),
            // {
            //   beforeSend: function(xhrObj) {
            //       xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
            //   },
            //   method: "POST",
            //   headers: {
            //     app_id: API_ID,
            //     app_key: API_KEY
            //   },
            //   data: file,
            //   processData: false,
            //   // // data: {
            //   //   image: 'test',
            //   // //   source: 'test'
            //   // // },
            //   success: function (data) {
            //     console.log('kairos success!', data );
            //   },
            //   error: function (data) {
            //     console.log('kairos FUCKED!',  data );
            //   }
            // });


          },
          error: function (err) {
            console.log('ERROR', err);
          },
        }) // closes ajax post request
      }) //closes cloudinary bind
      .fileupload('add', { files: [ img ] });  // perform upload

      var reader  = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = function () {
        var fileData = parseImageData(reader.result);

        // $.ajax("https://api.kairos.com/v2/media?source=gofuckyourself",
        // {
        //   method: "POST",
        //   headers: {
        //     app_id: API_ID,
        //     app_key: API_KEY
        //   },
        //   // data:
        //   // {
        //   //   source: image_url
        //   // },
        //   data: {
        //     source: fileData,
        //   },
        //   success: function (data) {
        //     console.log('kairos success!', data );
        //   },
        //   error: function (data) {
        //     console.log('kairos FUCKED!',  data );
        //   }
        // });

        // kairos.detect(fileData, function (response) {
        //   if (response.responseText.length < 100) {
        //     // flash an error message
        //     console.log('%csuccess', response.responseText, 'font-color: red');
        //   } else {
        //     console.log('error?', response);
        //     // $("#enroll").attr("type", "submit").trigger("click")
        //   }
        //   // JSON.parse(response.responseText)
        // });

        console.log('file:', fileData.length)




      }; //closes reader onloadend
    }); //closes snap capture
  });  //cloese event handler


};
