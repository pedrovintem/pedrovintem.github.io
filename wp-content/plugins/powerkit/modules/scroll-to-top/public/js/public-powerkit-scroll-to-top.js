/**
 * Scroll To Top
 */

( function( $ ) {

	$( document ).ready( function() {

		$( window ).scroll( function() {
			var offset = $( 'body' ).innerHeight() * 0.1;

			if ( $( this ).scrollTop() > offset ) {
				$( '.pk-scroll-to-top' ).addClass( 'pk-active' );
			} else {
				$( '.pk-scroll-to-top' ).removeClass( 'pk-active' );
			}
		} );

		$( '.pk-scroll-to-top' ).on( 'click', function() {

			$( 'body, html' ).animate( {
				scrollTop: 0
			}, 400 );

			return false;
		} );
	} );

} )( jQuery );