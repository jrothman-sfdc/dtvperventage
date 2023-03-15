<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const express = require('express');</p>
<p class="p1">const app = express();</p>
<p class="p1">const port = process.env.PORT || 3000;</p>
<p class="p2"><br></p>
<p class="p1">app.use(express.static('public'));</p>
<p class="p2"><br></p>
<p class="p1">app.listen(port, () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>console.log(`Server listening on port ${port}`);</p>
<p class="p1">});</p>
</body>
</html>
