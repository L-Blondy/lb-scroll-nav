import "./index.css"

export default function setScrollNav ( sections, sectionContainer ) {
	const refs = {};
	let maxElemRef;

	document.addEventListener( "click", e => {
		const href = e.target.getAttribute( "href" )
		const target = document.querySelector( href )

		if ( href && e.target.getAttribute( "href" )[ 0 ] === "#" ) {
			e.preventDefault()
			target.scrollIntoView(
				{ behavior: "smooth" }
			)
		}
	} )

	function callback ( entries ) {
		entries.forEach( entry => {
			const activeLinks = document.querySelectorAll( ".active" );
			[].forEach.call( activeLinks, link => link.classList.remove( "active" ) )
			refs[ entry.target.id ] = entry.intersectionRatio;
			let maxRatio = 0;

			for ( let ref in refs ) {
				if ( refs[ ref ] > maxRatio ) {
					maxRatio = refs[ ref ]
					maxElemRef = ref
				}
				if ( refs[ ref ] > 0.5 ) {
					const link = document.querySelector( `[href="#${ ref }"]` )
					if ( !link.classList.contains( "active" ) ) {
						link.classList.add( "active" )
					}
				}
			}
			if ( maxRatio <= 0.5 ) {
				const link = document.querySelector( `[href="#${ maxElemRef }"]` )
				if ( !link.classList.contains( "active" ) ) {
					link.classList.add( "active" )
				}
			}
		} )
	}
	try {
		const options = {
			root: sectionContainer,
			threshold: [ 0, 0.1, 0.2, 0.3, 0.4, 0.5 ]
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
