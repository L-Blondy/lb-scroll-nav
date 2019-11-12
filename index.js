export default function setScrollNav ( sections, sectionsContainer = document.querySelector( "body" ), threshold = 0.5 ) {

	document.addEventListener( "click", e => {
		const href = e.target.getAttribute( "href" )
		if ( href && e.target.getAttribute( "href" )[ 0 ] === "#" ) {
			window.location.replace( href );
		}
	} )

	const options = {
		threshold
	}

	function callback ( entries ) {
		entries.forEach( entry => {
			if ( entry.intersectionRatio >= options.threshold ) {
				const id = entry.target.id
				const prevActive = document.querySelector( ".navlink-active" )
				const newActive = document.querySelector( `[href="#${ id }"]` )

				prevActive && prevActive.classList.remove( "navlink-active" )
				newActive.classList.add( "navlink-active" )
				history.replaceState( {}, id, `/#${ id }` )
			}
		} )
	}

	try {
		const observer = new IntersectionObserver( callback, options )

		sections.forEach( section => {
			observer.observe( section )
		} )
	}
	catch ( error ) {
		console.log( "The IntersectionObserver API might not be supported by the browser" )
	}
	sectionsContainer.style.overflowY = "scroll";
	sectionsContainer.style.overflowX = "hidden";
	sectionsContainer.style.scrollBehavior = "smooth";
	const body = document.querySelector( "body" );
	body.style.height = "100vh";
	body.style.width = "100%";
	body.style.overflow = "hidden";
	document.querySelector( "nav" ).style.width = "100%";
}
