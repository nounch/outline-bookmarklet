# Outline Bookmarklet

`outline.js` scrapes all `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`,
`h8`, `h9` text nodes from a page and returns an indented outline as a
string. Additionally, the outline is copied to the system clipboard if
the environment supports a `copy` command (Firebug). The string is
printed to the console in any case and can be copied from there.

This assumes that there is a jQuery-compatible library available which
exposes itself through the `$` variable.

## Usage

Copy the code to the JavaScript console of your browser or make a
bookmarklet from it.

## Example

Running `outline.js` on the Wikipedia page for
[HTML](http://en.wikipedia.org/wiki/HTML)
returns this:

        HTML
          Contents
          History
            Development
            HTML versions timeline
              HTML draft version timeline
              XHTML versions
          Markup
            Elements
              Element examples
              Attributes
            Character and entity references
            Data types
            Document type declaration
          Semantic HTML
          Delivery
            HTTP
            HTML e-mail
            Naming conventions
            HTML Application
          Current variations
            SGML-based versus XML-based HTML
            Transitional versus strict
            Frameset versus transitional
            Summary of specification versions
            WhatWG HTML versus HTML5
          Hypertext features not in HTML
          WYSIWYG editors
          See also
          References
          External links
          Navigation menu
            Personal tools
            Namespaces
            
      													
            Variants
            Views
            More
            
      							Search
      						
            Navigation
            Interaction
            Tools
            Print/export
            Languages
