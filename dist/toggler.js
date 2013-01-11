/*
 * Toggler - v0.0.1 - 2013-01-12
 * https://github.com/Gavrisimo/toggler
 * Copyright (c) 2013 Miloš Gavrilović; Licensed MIT
 */

;(function($) {

  $.toggler = function( element, options ) {

    // default options
    var defaults = {
      speed: 400
    }

    // use "plugin" to reference the
    // current instance of the object
    var plugin = this;

    // this will hold the merged default
    // and user-provided options
    plugin.settings = {};

    var $element = $(element),
        $elementParent = $element.wrap('<div class="toggler" />').parent(),
        dimensions = { element: [], elementParent: [] },
        $triggers = $('[data-rel=' + $element.attr('id') + ']');

    // the "constructor"
    var _init = function() {

      // the plugin's final properties are the merged
      // default and user-provided options (if any)
      plugin.settings = $.extend({}, defaults, options);

      // Cache dimensions
      dimensions.element.push( $element.width(), $element.height() );
      dimensions.elementParent.push( $element.outerWidth(true), $element.outerHeight(true) );

      $elementParent.css({
        height: dimensions.elementParent[1],
        overflow: 'hidden',
        display: $element.css('display')
      });

      $element.css({
        display: 'block'
      });

      attachEvents();
    }

    // a private method
    var attachEvents = function() {
      $triggers.each(function() {
        $(this).on({
          click: function(e) {
            e.preventDefault();

            if ( ! $elementParent.is(':animated') ) {
              if ( $elementParent.is(':visible') ) {
                $elementParent.animate({
                  height: "0px"
                }, plugin.settings.speed, 'swing', function() {
                  $elementParent.css({
                    display: 'none'
                  });
                });
              } else {
                $elementParent.css({
                  height: "0px",
                  display: 'block'
                });

                $elementParent.animate({
                  height: dimensions.elementParent[1]
                }, plugin.settings.speed, 'swing', function() {
                  // Do something maybe?
                });
              }
            }
          }
        });
      });
    };

    // call the "constructor" method
    _init();
  }

  // add the plugin to the jQuery.fn object
  $.fn.toggler = function(options) {

    // iterate through the DOM elements we are attaching the plugin to
    return this.each(function() {

      // if plugin has not already been attached to the element
      if ( undefined == $(this).data('toggler') ) {
        // create a new instance of the plugin
        // pass the DOM element and the user-provided options as arguments
        var plugin = new $.toggler(this, options);

        // in the jQuery version of the element
        // store a reference to the plugin object
        // you can later access the plugin and its methods and properties like
        // element.data('toggler').publicMethod(arg1, arg2, ... argn) or
        // element.data('toggler').settings.propertyName
        $(this).data('toggler', plugin);
      }
    });
  }

}(jQuery));
