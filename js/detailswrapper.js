const expandCollapses = document.querySelectorAll( '.expand-collapse' );
if ( expandCollapses )
	expandCollapses.forEach( ( expandCollapse ) => {
		expandCollapse.addEventListener( 'click', () => {
			const currentAction = expandCollapse.getAttribute( 'id' );
			if ( currentAction === 'expand' ) {
				expandCollapse.setAttribute( 'id', 'collapse' );
				expandCollapse.innerHTML = 'Collapse All';
			} else {
				expandCollapse.setAttribute( 'id', 'expand' );
				expandCollapse.innerHTML = 'Expand All';
			}

			expandCollapse.parentElement.parentElement
				.querySelectorAll( 'details' )
				.forEach( ( accItem, i ) => {
					if ( currentAction === 'expand' ) {
						accItem.setAttribute( 'open', true );
					} else {
						accItem.removeAttribute( 'open' );
					}
				} );
		} );
	} );
console.log('Hello World');
