/**
 * Share buttons.
 */

( function( $ ) {

	$( document ).ready( function() {

		// Blockquote
		let blockquoteLength = $( '.pk-share-buttons-blockquote' ).length;

		if ( blockquoteLength ) {
			$( '.entry-content' ).find( 'blockquote' ).each( function( index, item ) {

				if ( $( item ).closest( '.wp-block-embed' ).length ) {
					return;
				}

				if ( $( item ).closest( '.twitter-tweet' ).length ) {
					return;
				}

				var text = $( this ).find( 'p' ).text();

				if ( ! text ) {
					text = $( this ).text();
				}

				let container = $( '.pk-share-buttons-blockquote' ).not( '.pk-share-buttons-blockquote-clone' ).clone().appendTo( item );

				container.addClass( 'pk-share-buttons-blockquote-clone' );

				container.find( '.pk-share-buttons-link' ).each( function( index, item ) {

					let url = $( this ).attr( 'href' ).replace( '--SHARETEXT--', encodeURIComponent( text ) );

					$( this ).attr( 'href', url );
				} );
			} );
		}

		// Highlight and Share
		let highlightLength = $( '.pk-share-buttons-highlight-text' ).length;

		if ( highlightLength ) {

			/*
			 * Events
			 */

			$( 'body' ).on( 'mouseup', function( e ) {
				if ( ! $( e.target ).closest( '.entry-content' ).length &&
					 ! $( e.target ).closest( '.pk-share-buttons-wrap' ).length ) {
					highlightRemove();
				}
			} );

			$( 'body' ).on( 'mouseup', '.entry-content', function( e ) {
				e.preventDefault();

				highlightRemove();

				let selection = window.getSelection();
				let text      = selection.toString();

				// Current title.
				this.title = '';

				// Check exists text.
				if ( '' != text ) {
					highlightDisplay( text, e );;
				}
			} );

			/*
			 * Remove highlight container
			 */
			var highlightRemove = function() {
				$( '.pk-share-buttons-highlight-clone' ).remove();
			};

			/*
			 * Show highlight container
			 */
			var highlightDisplay = function( text, e ) {
				highlightRemove();

				let container = $( '.pk-share-buttons-highlight-text' ).not( '.pk-share-buttons-highlight-clone' ).clone().appendTo( 'body' );

				let wrapper_x = e.pageX + 10;
				let wrapper_y = e.pageY + 10;

				container.addClass( 'pk-share-buttons-highlight-clone' );

				container.css( { left: wrapper_x, top: wrapper_y } );

				container.find( '.pk-share-buttons-link' ).each( function( index, item ) {

					let url = $( this ).attr( 'href' ).replace( '--SHARETEXT--', encodeURIComponent( text ) );

					$( this ).attr( 'href', url );
				} );
			}
		}

		// Mobile Share
		let mobileShare = $( '.pk-share-buttons-layout-right-side, .pk-share-buttons-layout-left-side, .pk-share-buttons-layout-popup' );

		$( mobileShare ).each( function(index, elem) {
			$( elem ).find( '.pk-share-buttons-total, .pk-share-buttons-link' ).on( 'click', function(e){
				$( 'body' ).toggleClass( 'pk-mobile-share-active' );
			});
		} );

		// Close outside.
		$( document ).on( 'click', function(e) {
			if ( ! $( e.target ) .closest( '.pk-share-buttons-total' ).length ) {
				$( 'body' ).removeClass( 'pk-mobile-share-active' );
			}
		});

	} );

} )( jQuery );
