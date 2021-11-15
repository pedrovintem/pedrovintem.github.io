/**
 * Lightbox
 */

( function( $ ) {

	$.fn.powerkitLightbox = function( options ) {

		var settings = $.extend( {
			gallery : false,
		}, options);

		var objSelector       = this;
		var imageSelector     = null;
		var containerSelector = null;

		$( objSelector ).each( function() {

			if ( $( this ).is( 'img' ) ) {
				imageSelector = this;
			} else {
				imageSelector = $( this ).find( 'img' );
			}

			$( imageSelector ).each( function() {

				var container = $( this ).parent();

				if ( ! $( container ).is( 'a' ) ) {
					return;
				}

				var imagehref = $( container ).attr( 'href' );
				if ( ! imagehref.match( /\.(gif|jpeg|jpg|png)/ ) ) {
					return;
				}

				if ( !( $( container ).closest( 'figure' ).length ) ) {
					$( container ).wrap( '<figure class="pk-lightbox-container"></figure>' );
				}

				if ( !$( container ).closest( 'figure' ).hasClass( 'pk-lightbox-container' ) ) {
					$( container ).closest( 'figure' ).addClass( 'pk-lightbox-container' );
				}

				// Img classes.
				var imgClasses = [ 'alignnone', 'aligncenter', 'alignleft', 'alignright' ];

				imgClasses.forEach( function( el ) {
					if ( $( container ).find( 'img' ).hasClass( el ) ) {
						$( container ).find( 'img' ).removeClass( el );
						$( container ).find( 'img' ).closest( 'figure' ).addClass( el );

						// Add width to figure.
						var imgWidth = $( container ).find( 'img' ).attr( 'width' );

						if ( parseInt( imgWidth ) !== 'NaN' ) {
							$( container ).find( 'img' ).closest( 'figure' ).width( imgWidth );
						}
					}
				} );

				container = $( container ).parent();

				$( '> a', container ).not('.pk-pin-it').addClass( 'pk-image-popup' );

				if ( powerkit_lightbox_localize.zoom_icon ) {
					$( '> a', container ).not('.pk-pin-it').addClass( 'pk-zoom-icon-popup' );
				}

				if ( $( objSelector ).is( 'img' ) ) {
					containerSelector = container;
				}

			});

			if ( ! $( objSelector ).is( 'img' ) ) {
				containerSelector = this;
			}

			$( containerSelector ).magnificPopup( {
				delegate: '.pk-image-popup',
				type: 'image',
				tClose: powerkit_lightbox_localize.text_close + '(Esc)',
				tLoading: powerkit_lightbox_localize.text_loading,
				gallery: {
					enabled: settings.gallery,
					tPrev: powerkit_lightbox_localize.text_previous,
					tNext: powerkit_lightbox_localize.text_next,
					tCounter: '<span class="mfp-counter">%curr% ' + powerkit_lightbox_localize.text_counter + ' %total%</span>'
				},
				image: {
					titleSrc: function( item ) {
						let figure = item.el.closest( 'figure' );

						let description = $( figure ).find( 'img' ).data( 'lightbox-description' );

						if ( ! description ) {
							description = $( figure ).find( '.wp-caption-text' ).text();
						}

						if ( ! description ) {
							description = $( figure ).find( 'figcaption' ).text();
						}

						return description;
					}
				},
			} );
		} );

	};


	function initPowerkitLightbox() {
		var excludeSelectors = powerkit_lightbox_localize.exclude_selectors;
		var imageSelectors   = powerkit_lightbox_localize.single_image_selectors;
		var gallerySelectors = powerkit_lightbox_localize.gallery_selectors

		// Exclude.
		var filterSelectors = null;

		var filterPowerkitLightbox = function() {
			if ( filterSelectors ) {
				if ( $( this ).closest( filterSelectors ).length > 0 ) {
					return false;
				}
			}
			return true;
		}

		// Single Init -----------------------------------
		$( imageSelectors ).imagesLoaded( function() {
			var exSplit = excludeSelectors.split(',');
			var glSplit = gallerySelectors.split(',');

			// Join exclude selectors.
			filterSelectors = exSplit.concat( glSplit ).filter( function( value ) {
				return !! value;
			} ).filter( function( value ) {
				return ! this[ value ] && ( this[ value ] = true );
			}, Object.create( null ) ).join( ',' );

			// Init.
			$( imageSelectors ).filter( filterPowerkitLightbox ).powerkitLightbox();
		} );

		// Gallery Init -----------------------------------
		$( gallerySelectors ).imagesLoaded( function() {
			filterSelectors = excludeSelectors;

			// Init.
			$( gallerySelectors ).filter( filterPowerkitLightbox ).powerkitLightbox( { gallery: true } );
		} );
	}

	$( document ).ready( function() {
		initPowerkitLightbox();
		$( document.body ).on( 'post-load image-load', function() {
			initPowerkitLightbox();
		} );
	} );

} )( jQuery );
