/**
 * Pin It
 */
( function( $ ) {

	$.fn.powerkitPinIt = function() {

		$( this ).each( function() {

			if ( $( this ).hasClass( 'pk-pin-it-ready' ) ) {
				return;
			}

			var width  = $( this ).attr( 'width' );
			var height = $( this ).attr( 'height' );

			if ( typeof width === 'undefined' ) {
				width = $( this ).width();
			}

			if ( typeof height === 'undefined' ) {
				height = $( this ).height();
			}

			if ( !( parseInt( width ) > 120 && parseInt( height ) > 120 ) ) {
				$( this ).addClass( 'pk-pin-it-ready' );
				return;
			}

			var container = $( this ).parent(),
				postURL = $( location ).attr( 'href' ),
				pinURL;

			if ( $( container ).is( 'a' ) ) {

				var imagehref = $( container ).attr( 'href' );

				if ( typeof imagehref !== 'undefined' && imagehref.match( /\.(gif|jpeg|jpg|png|webp)/ ) ) {
					pinURL = imagehref;
				}

				if ( !( $( container ).closest( 'figure' ).length ) ) {
					$( container ).wrap( '<figure class="pk-pin-it-container"></figure>' );
				}

				container = $( container ).parent();

			} else {

				if ( !( $( container ).is( 'figure' ) || $( container ).closest( 'figure' ).length ) ) {
					$( this ).wrap( '<figure class="pk-pin-it-container"></figure>' );
				}

				container = $( this ).parent();

			}

			if ( !$( this ).closest( 'figure' ).hasClass( 'pk-pin-it-container' ) ) {
				$( this ).closest( 'figure' ).addClass( 'pk-pin-it-container' );
			}

			if ( ! pinURL ) {
				if ( $( this ).is( 'img' ) ) {
					pinURL = ( typeof $( this ).data( 'pk-src' ) !== 'undefined' ) ? $( this ).data( 'pk-src' ) : $( this ).attr( 'src' );
				} else {
					pinURL = ( typeof $( container ).find( 'img' ).data( 'src' ) !== 'undefined' ) ? $( container ).find( 'img' ).data( 'src' ) : $( container ).find( 'img' ).attr( 'src' );
				}
			}

			pinURL = encodeURIComponent( pinURL );
			postURL = encodeURIComponent( postURL );

			var figure = container;

			if ( ! $( container ).is( 'figure' ) ) {
				figure = $( container ).closest( 'figure' );
			}

			// Get caption text.
			var imgDescription = $( figure ).find( 'img' ).data( 'pin-description' );

			if ( !imgDescription ) {
				imgDescription = $( figure ).find( '.wp-caption-text' ).text();
			}

			if ( !imgDescription ) {
				imgDescription = $( figure ).find( 'figcaption' ).text();
			}

			if ( !imgDescription ) {
				imgDescription = $( figure ).find( 'img' ).attr( 'alt' );
			}

			if ( imgDescription ) {
				// Add attribute to share URL.
				imgDescription = '&amp;description=' + encodeURIComponent( imgDescription );
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

			// Add func PintIt.
			var addPowerkitPintIt = function( container ) {
				if ( ! $( container ).find( '.pk-pin-it' ).length ) {
					$( '<a class="pk-pin-it" href="http://www.pinterest.com/pin/create/bookmarklet/?url=' + postURL + '&amp;media=' + pinURL + imgDescription + '&is_video=false" target="_blank"><span>Pin</span><span><i class="pk-icon pk-icon-pinterest"></i></span></a>' )
						.appendTo( container )
						.addClass( 'pk-pin-it-visible' );
				}
			}

			// PintIt Mode.
			if ( powerkit_pinit_localize.only_hover ) {

				$( container ).mousemove(function(){
					addPowerkitPintIt( this );
				});

				$( container ).mouseleave(function(){
					var $this = this;

					$( $this ).children( '.pk-pin-it' ).fadeOut( 200, function(){
						$( $this ).children( '.pk-pin-it' ).remove();
					});
				});

			} else {
				addPowerkitPintIt( container );
			}

			$( this ).addClass( 'pk-pin-it-ready' );
		} );
	};


	function initPowerkitPinIt() {

		// Exclude.
		var filterPowerkitPinIt = function() {
			var exclude = powerkit_pinit_localize.exclude_selectors;
			if ( exclude ) {
				if ( $( this ).closest( exclude ).length > 0 ) {
					return false;
				}
			}
			return true;
		}

		// Init.
		$( powerkit_pinit_localize.image_selectors ).imagesLoaded( function() {
			$( powerkit_pinit_localize.image_selectors ).filter( filterPowerkitPinIt ).powerkitPinIt();
		} );
	}

	$( document ).ready( function() {
		initPowerkitPinIt();
		$( document.body ).on( 'post-load image-load', function() {
			initPowerkitPinIt();
		} );
	} );
} )( jQuery );
