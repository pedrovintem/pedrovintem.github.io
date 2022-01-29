/**
 * Lightbox
 */

( function( $ ) {

	$.fn.powerkitLightbox = function( options ) {

		var settings = $.extend( {
			gallery: false,
		}, options );

		var objSelector = this;
		var imageSelector = null;
		var containerSelector = null;
		var initGallery = [];

		$( objSelector ).each( function() {
			var id = Math.random().toString( 36 ).substr( 2, 9 );

			if ( $( this ).is( 'img' ) ) {
				imageSelector = this;
			} else {
				imageSelector = $( this ).find( 'img' );
			}

			$( imageSelector ).each( function() {

				var container = $( this ).parent();

				if ( !$( container ).is( 'a' ) ) {
					return;
				}

				var imagehref = $( container ).attr( 'href' );
				if ( !imagehref.match( /\.(gif|jpeg|jpg|png)/ ) ) {
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

				$( '> a', container ).not( '.pk-pin-it' ).addClass( 'pk-image-popup' );

				if ( powerkit_lightbox_localize.zoom_icon ) {
					$( '> a', container ).not( '.pk-pin-it' ).addClass( 'pk-zoom-icon-popup' );
				}

				if ( $( objSelector ).is( 'img' ) ) {
					containerSelector = container;
				}

			} );

			if ( !$( objSelector ).is( 'img' ) ) {
				containerSelector = this;
			}

			if ( $( containerSelector ).is( '[data-pk-uuid]' ) ) {
				return;
			}

			$( containerSelector ).attr( 'data-pk-uuid', id );

			initGallery[ id ] = GLightbox( {
				loop: settings.gallery,
				touchNavigation: true,
				autoplayVideos: true,
				selector: `[data-pk-uuid="${id}"] .pk-image-popup`,
			} );

			initGallery[ id ].on( 'slide_before_load', ( data ) => {
				const { slideIndex, slideNode, slideConfig, player, trigger } = data;

				let figure = $( trigger ).closest( 'figure' );

				let description = $( figure ).find( 'img' ).data( 'lightbox-description' ) || '';

				if ( !description ) {
					description = $( figure ).find( '.wp-caption-text' ).text();
				}

				if ( !description ) {
					description = $( figure ).find( 'figcaption' ).text();
				}

				if ( description ) {
					slideConfig.title = description;
				}
			} );
		} );
	};


	function initPowerkitLightbox() {
		var excludeSelectors = powerkit_lightbox_localize.exclude_selectors;
		var imageSelectors = powerkit_lightbox_localize.single_image_selectors;
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
			var exSplit = excludeSelectors.split( ',' );
			var glSplit = gallerySelectors.split( ',' );

			// Join exclude selectors.
			filterSelectors = exSplit.concat( glSplit ).filter( function( value ) {
				return !!value;
			} ).filter( function( value ) {
				return !this[ value ] && ( this[ value ] = true );
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
