# [Toggler](http://gavrisimo.github.com/toggler/) - toggle visibility of elements with ease!

[![Build Status](https://travis-ci.org/Gavrisimo/toggler.png?branch=master)](https://travis-ci.org/Gavrisimo/toggler)

When you call `toggler()` method on element, plugin automatically selects all
other elements that have `data-rel` same as the `id` attribute of element, on
which you called `toggler()` method, and it attaches `click` event handler to it.

Then you can click on any of those elements that now have `click` event attached
to toggle visibility of element on which you called `toggler()` method.

## Roadmap
1. Provide easy and reusable way to toggle visibility of elements
2. Provide easy way to have *non* jerky versions of slideToggle() method

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/Gavrisimo/toggler/master/dist/toggler.min.js
[max]: https://raw.github.com/Gavrisimo/toggler/master/dist/toggler.js

Include jQuery and plugin in your page then call `toggler()` method on element
you wish to toggle:

```html
<button data-rel="hidden-content">Toggle visibility</button>
<a data-rel="hidden-content" href="#">Toggle visibility</a>
<div data-rel="hidden-content">Toggle visibility</div>

<div id="hidden-content" style="display: none;">Hidden content</div>

<script src="libs/jquery.js"></script>
<script src="dist/toggler.min.js"></script>

<script>
  jQuery(function($) {
    $('#hidden-content').toggler();
  });
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Miloš Gavrilović Licensed under the MIT license.
