# Scroll Nav setup

## Install 
>npm install --save-dev lb-scroll-nav

## Description
- implements smooth scrool on modern browsers
- updates the navbar state on scroll
- removes # history spam

## Usage
*index.html*
```
<nav ...>
	<a href="#targetID_1">
	<a href="#targetID_2">
	<a href="#targetID_3">
	<a href="#targetID_4">
</nav>
...
<div class="sectionsContainer" >
	<section id="targetID_1">
	<section id="targetID_2">
	<section id="targetID_3">
	<section id="targetID_4">
</div>

```
**Note** : active class = "navbar-active"

*myfile.js*
```
import setScrollNav from "lb-scroll-nav"
...
setScrollNav(sections, sectionContainer, threshold)
```
`threshold` sets the required visible ratio of a section in order for the navlink to be set as `active`.<br/>
Defaults to 0.5 for each section.

## Default styling

```
sections-container {
	overflow-y: "hidden";
	overflow-x: "scroll";
	scrollBehavior: smooth;
}
body {
	height: 100vh;
	width: 100%;
	overflow: hidden;
}
