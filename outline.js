/**
 * Scrapes all h1, h2, h3, h4, h5, h6, h7, h8, h9 text nodes from a page
 * and returns an indented outline as a string. Additionally, the outline
 * is copied to the system clipboard if the environment supports a `copy'
 * command (Firebug).
 *
 * Dependencies: jQuery
 */


var outline = '';

/**
 * Takes a headline tag name (h1, h2, h3, h4, h5, ...) as a string and
 * returns n repetitively concatenated occurences of the specified char as
 * a string.
 *
 * @param {string} tagName Any one of  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
 *   'h7', 'h8', 'h9'.
 * @param {string} char Optional: Character which should be used as
 *   indentation. Default: ' '
 */
var indentify = function(tagName, string) {
  var string = string || ' ';
  var s = '';

  var indentations = parseInt(tagName.substr(1));

  for (var i = 0; i < indentations; ++i) {
    s += string;
  }

  return s;
}


$('h1, h2, h3, h4, h5, h6, h7, h8, h9').each(function(i, obj) {
  outline += indentify($(obj).get(0).tagName, '  ') + $(obj).text() + '\n';
});


// Log to console (if there is a `console' object available)
try {
  console.log(outline);
} catch(err) {
  // Error
}

// Copy to clipboard (Firbug-specific `copy' function)
try {
  copy(outline);
} catch(err) {
  // Error
}
