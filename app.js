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
<p class="p1">document.getElementById("config-form").addEventListener("submit", function (e) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>e.preventDefault();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>const pathCount = parseInt(document.getElementById("path-count").value);</p>
<p class="p1"><span class="Apple-converted-space">  </span>const pathConfigs = document.getElementById("path-configs");</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>pathConfigs.innerHTML = "";</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>for (let i = 1; i &lt;= pathCount; i++) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const pathConfig = document.createElement("div");</p>
<p class="p1"><span class="Apple-converted-space">    </span>pathConfig.innerHTML = `</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;label for="path-${i}-percentage"&gt;Path ${i} - Percentage:&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;input type="number" id="path-${i}-percentage" name="path-${i}-percentage" min="0" max="100" required&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;label for="path-${i}-cap"&gt;Path ${i} - Cap:&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;input type="number" id="path-${i}-cap" name="path-${i}-cap" min="0" required&gt;</p>
<p class="p1"><span class="Apple-converted-space">    </span>`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>pathConfigs.appendChild(pathConfig);</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">});</p>
</body>
</html>
