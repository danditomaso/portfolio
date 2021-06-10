// Run any sort of animations and callback on else condition
app.detailsAnimation = ({ action, windowHeight, onComplete }) => {
  const detailsElement = document.querySelector(app.detailClassName);
  if (action) {
    // Details Window is not open, show it
    TweenLite.fromTo(
      detailsElement,
      0.2,
      {
        height: 0,
        margin: 0
      },
      
      {
        height: windowHeight,
        marginTop: 5,
        ease: Quad.easeInOut,
        onComplete
      }
    );
  } else {
    // Details Window is open, close it down
    TweenLite.to(detailsElement, 0.3, {
      height: windowHeight,
      margin: 0,
      ease: Quad.easeInOut,
      opacity: 0,
      onComplete: app.removeDetailWindow,
      onCompleteParams: [detailsElement]
    });
  }
};

// Thanks to Go Make Things for these helper functions https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/

/**
 * Get all of an element's parent elements up the DOM tree
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against [optional]
 * @return {Array}           The parent elements
 */
app.getParents = function (elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) { }
        return i > -1;
      };
  }

  // Setup parents array
  var parents = [];

  // Get matching parent elements
  for (; elem && elem !== document; elem = elem.parentNode) {
    // Add matching parents to array
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
    } else {
      parents.push(elem);
    }
  }

  return [parents];
};
