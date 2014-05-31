//****** Set the spinner
var opts = {
      lines: 16,                                       // The number of lines to draw
      length: 0,                                       // The length of each line
      width: 4,                                        // The line thickness
      radius: 30,                                      // The radius of the inner circle
      corners: 1,                                      // Corner roundness (0..1)
      rotate: 0,                                       // The rotation offset
      direction: 1,                                    // 1: clockwise, -1: counterclockwise
      color: '#ffffff',                                // #rgb or #rrggbb or array of colors
      speed: 1,                                        // Rounds per second
      trail: 60,                                       // Afterglow percentage
      shadow: false,                                   // Whether to render a shadow
      hwaccel: false,                                  // Whether to use hardware acceleration
      className: 'spinner',                            // The CSS class to assign to the spinner
      zIndex: 2e9,                                     // The z-index (defaults to 2000000000)
      top: 'auto',                                     // Top position relative to parent in px
      left: 'auto'                                     // Left position relative to parent in px
};
var target = document.getElementById('preloader');
var spinner = new Spinner(opts).spin(target);

//****** Set the slider options
      slidertransition = 'fade',                       // set the Slider transition - fade or scrollHorz (use scrollHorz with the scroller file provided )
      //slidertransition = 'scrollHorz',               // set the Slider transition - fade or scrollHorz (use scrollHorz with the scroller file provided )
      sliderspeed = '3000',                            // set the Slider speed
      slidertimeout = '6000';                          // set the Slider timeout
