# Sroll Nav setup

## Install 
>npm install --save-dev lb-scroll-nav

## Description
- implements smooth scrool on modern browsers
- updates the navbar state on scroll
- removes # history spam

## Usage
index.html
```
<a href="#targetID">
...
<section id="targetID">
```

myfile.js
```
import setScrollNav from "lb-scroll-nav"
...
setScrollNav(sections, sectionsContainer, threshold)
```

sectionsContainer defaults to BODY <br/>
threshold defaults to 0.5 => location will update when 50% of the section at least is displayed
