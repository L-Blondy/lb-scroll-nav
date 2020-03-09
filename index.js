import "./index.css"

export default function setScrollNav ( sections, sectionContainer ) {
	const refs = {};
	let maxElemRef;

	document.addEventListener( "click", e => {
		const href = e.target.getAttribute( "href" )

		if ( href && e.target.getAttribute( "href" )[ 0 ] === "#" ) {
			e.preventDefault()
			const target = document.querySelector( href )
			target.scrollIntoView(
				{ behavior: "smooth" }
			)
		}
	} )

	function callback ( entries ) {
		entries.forEach( entry => {
			const activeLinks = document.querySelectorAll( ".active" );
			activeLinks && [].forEach.call( activeLinks, link => link.classList.remove( "active" ) )
			refs[ entry.target.id ] = entry.intersectionRatio;
			let maxRatio = 0;

			for ( let ref in refs ) {
				if ( refs[ ref ] > maxRatio ) {
					maxRatio = refs[ ref ]
					maxElemRef = ref
				}
				if ( refs[ ref ] === 1 ) {
					const activeLink = document.querySelector( ".active" )
					activeLink && activeLink.classList.remove( "active" )
					const link = document.querySelector( `[href="#${ ref }"]` )
					if ( !link.classList.contains( "active" ) ) {
						link.classList.add( "active" )
					}
				}
			}
			if ( maxRatio < 1 ) {
				const link = document.querySelector( `[href="#${ maxElemRef }"]` )
				if ( link && !link.classList.contains( "active" ) ) {
					link.classList.add( "active" )
				}
			}
		} )
	}
	try {
		const options = {
			root: sectionContainer,
			rootMargin: "-50px 0px -50px 0px",
			threshold: [ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 ]
		}

		const observer = new IntersectionObserver( callback, options );
		[].forEach.call( sections, section => {
			observer.observe( section )
		} )
	}
	catch ( error ) {
		console.log( "The IntersectionObserver API might not be supported by the browser" )
	}
}
