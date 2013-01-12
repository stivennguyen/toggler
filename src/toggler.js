(function($) {

  $.toggler = function( element, options ) {

    // default options
    var defaults = {
      speed: 400
    }

    // use "plugin" to reference the
    // current instance of the object
    var plugin = this;

    // set some publicly available data
    plugin.settings      = {};
    plugin.element       = $(element),
    plugin.elementParent = plugin.element.wrap('<div class="toggler" />').parent(),
    plugin.dimensions    = { element: [], elementParent: [] },
    plugin.triggers      = $('[data-rel=' + plugin.element.attr('id') + ']');

    // the "constructor"
    var _init = function() {

      // the plugin's final properties are the merged
      // default and user-provided options (if any)
      plugin.settings = $.extend({}, defaults, options);

      // Cache dimensions just in case of a apocalypse?
      plugin.dimensions.element.push( plugin.element.width(), plugin.element.height() );
      plugin.dimensions.elementParent.push( plugin.element.outerWidth(true), plugin.element.outerHeight(true) );

      // Set dimensions on element parent
      // and get elements visibility
      plugin.elementParent.css({
        height: plugin.dimensions.elementParent[1],
        overflow: 'hidden',
        display: plugin.element.css('display')
      });

      // elementParent now has original
      // visibility so let's just show element
      plugin.element.show();

      attachEvents();
    }

    // a private method
    var attachEvents = function() {
      plugin.triggers.each(function() {
        $(this).on({
          click: function(e) {
            e.preventDefault();

            if ( ! plugin.elementParent.is(':animated') ) {
              if ( plugin.elementParent.is(':visible') ) {
                plugin.elementParent.animate({
                  height: "0px"
                }, plugin.settings.speed, 'swing', function() {
                  plugin.elementParent.css({
                    display: 'none'
                  });
                });
              } else {
                plugin.elementParent.css({
                  height: "0px",
                  display: 'block'
                });

                plugin.elementParent.animate({
                  height: plugin.dimensions.elementParent[1]
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
