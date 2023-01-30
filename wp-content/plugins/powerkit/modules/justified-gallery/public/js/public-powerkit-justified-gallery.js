/**
 * Justified Gallery
 */
( function( $ ) {

	function powerkitInitJustifiedGallery() {

		$( '.gallery-type-justified:not(.gallery-type-justified-ready)' ).imagesLoaded( function( instance ) {

			$( instance.elements ).each( function( index, el ) {
				var $el = $( el );
				var data = $el.data();

				$el.filter(':not(.gallery-type-justified-ready)')
					.addClass( 'gallery-type-justified-ready' )
					.justifiedGallery( {
						rtl: !!powerkitJG.rtl,
						margins: data.jgMargins,
						rowHeight: data.jgRowHeight,
						maxRowHeight: data.jgMaxRowHeight,
						lastRow: data.jgLastRow,
						border: 0,
						border: typeof data.jgBorder !== 'undefined' ? data.jgBorder : 0,
						selector: 'figure',
						captions: typeof data.jgCaptions !== 'undefined' ? data.jgCaptions : true,
						randomize: typeof data.jgRandomize !== 'undefined' ? data.jgRandomize : false,
						cssAnimation: true,
						captionSettings: {
							animationDuration: 100,
							visibleOpacity: 1.0,
							nonVisibleOpacity: 0.0
						}
					} ).on( 'jg.complete', function( e ) {

						$el.addClass( 'justified-loaded' );

						$( document.body ).trigger( 'image-load' );
					} );
			} );

		} );
	}

	$( document ).ready( function() {
		powerkitInitJustifiedGallery();
		$( document.body ).on( 'post-load', function() {
			powerkitInitJustifiedGallery();
		} );

		if ( 'undefined' !== typeof wp && 'undefined' !== typeof wp.hooks ) {
			wp.hooks.addAction( 'canvas.components.serverSideRender.onChange', 'canvas/justified-gallery.init', function( props ) {
				if ( 'canvas/justified-gallery' === props.block ) {
					powerkitInitJustifiedGallery();
				}
			} );
		}
	} );

} )( jQuery );