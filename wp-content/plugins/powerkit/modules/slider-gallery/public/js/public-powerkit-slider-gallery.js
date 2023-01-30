/**
 * Slider Gallery
 */
( function( $ ) {

	function powerkitInitSliderGallery() {

		/**
		 * Get Page Info
		 */
		function powerkitSliderPageInfo( cellNumber, cellsLength ) {
			var sep = powerkit_sg_flickity.page_info_sep;

			return '<span class="current">' + ( cellNumber + 1 ) + '</span><span class="sep">' + sep + '</span><span class="cells">' + cellsLength + '</span>';
		}

		/**
		 * Slider Init
		 */
		$( '.gallery-type-slider:not(.gallery-type-slider-ready)' ).imagesLoaded( function( instance ) {

			$( instance.elements ).each( function( index, el ) {
				var $el = $( el );

				$el.filter(':not(.gallery-type-slider-ready)')
					.addClass( 'gallery-type-slider-ready' )
					.flickity( {
						pageDots: $el.data( 'sg-page-dots' ),
						prevNextButtons: $el.data( 'sg-nav' ),
						adaptiveHeight: true,
						cellAlign: 'left',
						contain: true,
						on: {
							ready: function() {
								var data = Flickity.data( el );

								$el.addClass( 'is-animate slider-loaded' );

								if ( $el.data( 'sg-page-info' ) ) {

									if ( $el.data( 'sg-page-dots' ) ) {
										$el.find( '.flickity-page-dots' ).wrap( '<div class="flickity-pages"></div>' );
									} else {
										$el.append( '<div class="flickity-pages"></div>' );
									}

									var cellNumber = data.selectedIndex;

									$el.find( '.flickity-pages' ).append( '<div class="flickity-page-info">' + powerkitSliderPageInfo( cellNumber, data.cells.length ) + '</div>' );
								}

								$( document.body ).trigger( 'image-load' );
							},
							change: function( cellNumber ) {
								var data = Flickity.data( el );

								if ( $el.data( 'sg-page-info' ) ) {

									$el.find( '.flickity-page-info' ).html( powerkitSliderPageInfo( cellNumber, data.cells.length ) );
								}
							}
						}
					} );
			} );
		} );
	}

	$( document ).ready( function() {
		powerkitInitSliderGallery();
		$( document.body ).on( 'post-load', function() {
			powerkitInitSliderGallery();
		} );

		if ( 'undefined' !== typeof wp && 'undefined' !== typeof wp.hooks ) {
			wp.hooks.addAction( 'canvas.components.serverSideRender.onChange', 'canvas/slider-gallery.init', function( props ) {
				if ( 'canvas/slider-gallery' === props.block ) {
					powerkitInitSliderGallery();
				}
			} );
		}
	} );

} )( jQuery );