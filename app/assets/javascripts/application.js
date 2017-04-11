// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require kairos
//= require cloudinary
//= require_tree .

// $(document).ready(function () {
  var camera = null;
  var api_url = "https://api.kairos.com/enroll"

  var API_ID = "4b76f596";
  var API_KEY = "3326986684ad5d3fde93d958cddcfb1f";
  var GALLERY_NAME = "kevinGallery";
  var kairos = new Kairos(API_ID, API_KEY);
  console.log(kairos);

  var parseImageData = function(imageData) {
      imageData = imageData.replace("data:image/jpeg;base64,", "");
      imageData = imageData.replace("data:image/jpg;base64,", "");
      imageData = imageData.replace("data:image/png;base64,", "");
      imageData = imageData.replace("data:image/gif;base64,", "");
      imageData = imageData.replace("data:image/bmp;base64,", "");
      return imageData;
  }

  var initCamera = function () {
    if (!window.JpegCamera) {
      alert('Camera access is not available in your browser');
    } else {
      camera = new JpegCamera('#camera')
        .ready(function (resolution) {})
        .error(function () {
        alert('Camera access was denied');
      })
    }
  };

  var capturePhoto = function () {
    $('#capture').on('click', function () {

      var snap = camera.capture();
      snap.get_blob(function(img){
        console.log(img, this);

        $('#image_upload').unsigned_cloudinary_upload("test123",
          { cloud_name: 'dsgd2hpbg', tags: 'browser_uploads' },
          { multiple: false }
        )
        .bind('cloudinarydone', function(e, data) {
          console.log('DONE 1!', data);
          // ajax send to rails server: data.result.public_id
        })
        .fileupload('add', { files: [ img ] });

        var reader  = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = function () {
          var fileData = parseImageData(reader.result);
          kairos.enroll(fileData, GALLERY_NAME, 'jared', function (data) {
            console.log('success!', data);
          });
          // console.log(fileData);
        }

        //
        // $.ajax({
        //   url: api_url,
        //   method: "POST",
        //   dataType: "json", // JSONP maybe needed sometimes
        //   data: {
        //     app_id: API_ID,
        //     app_key: API_KEY,
        //     // image: i,
        //     subject_id: 'Nadal',
        //     gallery_name: 'kevinGallery',
        //   },
        //   success: function (res) {
        //     console.log('SUCCESS', res);
        //   },
        //   error: function (err) {
        //     console.log('ERROR', err);
        //   }
        // });
        // $.ajax(api_url, {
        //
        // })

      });
    });
  };

  var init = function () {
    initCamera();
    capturePhoto();
  };


// });
