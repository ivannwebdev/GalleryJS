jQuery(document).ready(function ($) {
  $('#gallery').lightGallery({
    showThumbByDefault: true,
    loop: true,
    dynamic:true,
    dynamicEl:[

      {'src':'images/img1.jpg', 'thumb': 'images/img1.jpg'},
      {'src':'images/img2.jpg', 'thumb': 'images/img2.jpg'},
      {'src':'images/img3.jpg', 'thumb': 'images/img3.jpg'},
      {'src':'images/img4.jpg', 'thumb': 'images/img4.jpg'},
    ]
  })
})