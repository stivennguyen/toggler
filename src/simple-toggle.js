/*
 * simple-toggle
 * https://github.com/Gavrisimo/simple-toggle
 *
 * Copyright (c) 2013 Milos Gavrilovic
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
