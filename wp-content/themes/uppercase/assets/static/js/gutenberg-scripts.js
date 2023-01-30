"use strict";

/**
 * Editor Scripts
 */
wp.domReady(function () {
  // Unregister "Wide" Separator Style.
  wp.blocks.unregisterBlockStyle('core/separator', 'wide');
});