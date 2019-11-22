import "./index.css";
import setScrollNav from "../index.js";

const sections = document.querySelectorAll( "section" );
const sectionContainer = document.querySelector( ".section-container" );
setScrollNav( sections, sectionContainer )