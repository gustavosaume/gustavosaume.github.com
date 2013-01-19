---
layout: post
title: "Bootstrap Progress Button"
description: "A mix between the bootstrap progress bar and a button"
category: playground
tags: [css]
css: progressButton
script: progressButton
---
{% include JB/setup %}
<h1>Bootstrap Progress Button</h1>
<div id="buttons" class="row">
  <button class="btn btn-large btn-progress span4" 
    data-loading-text="Loading..." >Load Awesome</button>
  <button class="btn btn-large btn-progress btn-primary span4" 
    data-loading-text="Loading..." >Load Awesome</button>
  <button class="btn btn-large btn-progress btn-danger span4" 
    data-loading-text="Loading..." >Load Awesome</button>
  <button class="btn btn-large btn-progress btn-success span4" 
    data-loading-text="Loading..." >Load Awesome</button>
  <button class="btn btn-large btn-progress btn-info span4" 
    data-loading-text="Loading..." >Load Awesome</button>
  <button class="btn btn-large btn-progress btn-warning span4" 
    data-loading-text="Loading..." >Load Awesome</button>
</div>