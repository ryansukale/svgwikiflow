$(function(){


	$('.save-changes').on('click',function(event){
		var $this = $(this);
		var $target = $(event.target);
		
		console.log('saving-svg');
		
		saveSvg();
		//Seralize the SVG
	});
	
	

/*
	var svgCanvas = null;

	function init_embed() {
		var frame = document.getElementById('svgedit');
		svgCanvas = new embedded_svg_edit(frame);
		
		// Hide main button, as we will be controlling new/load/save etc from the host document
		var doc;
		doc = frame.contentDocument;
		if (!doc)
		{
			doc = frame.contentWindow.document;
		}
		
		var mainButton = doc.getElementById('main_button');
		mainButton.style.display = 'none';
	}
	
	function handleSvgData(data, error) {
	
		console.log(data);
		
		if (error)
		{
			alert('error ' + error);
		}
		else
		{
			//Serialize the svg in a string and save it.
			
			console.log(data);
			
			var saveObj =  {
				id:'007',
				parentId : '001',
				svgInfo : { 
					svgContent : data
				}
			} ;
			
			
			$.post('http://www.google.com');
			
			var requestURL = "http://wikiflow-api.herokuapp.com/subdiagram/create/001/"+JSON.stringify(saveObj);
			
			console.log(encodeURI(requestURL));
			
			//--disable-web-security
			
			$.post(encodeURI(requestURL),function(data){
				
				console.log(data);
				
			});
			
			//alert('Congratulations. Your SVG string is back in the host page, do with it what you will\n\n' + data);
			console.dir(saveObj);
		}			
	}
	
	function loadSvg() {
		//var svgexample = '<svg width="640" height="480" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><title>Layer 1</title><rect stroke-width="5" stroke="#000000" fill="#FF0000" id="svg_1" height="35" width="51" y="35" x="32"/><ellipse ry="15" rx="24" stroke-width="5" stroke="#000000" fill="#0000ff" id="svg_2" cy="60" cx="66"/></g></svg>';
		
		//var svgexample = '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg">  <g>   <title>Layer 1</title>   <rect stroke="#000000" id="svg_1" height="65" width="184.00001" y="188" x="22" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_4" height="59" width="141.00001" y="315" x="196" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_5" height="61" width="174" y="90" x="164" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_6" height="64" width="268.99999" y="180" x="307" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <line id="svg_7" y2="119" x2="179" y1="199" x1="71" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#000000" fill="none"/>   <line id="svg_8" y2="225" x2="431" y1="336" x1="297" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#000000" fill="none"/>   <line id="svg_11" y2="177" x2="459" y1="124" x1="322" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="none"/>   <rect id="svg_3" height="1" width="0" y="302" x="638" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#b0cae5"/>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_12" y="226" x="114" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Register vehicle</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_13" y="129" x="256" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Pay Fees</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_15" y="212" x="443" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Get a Weight Certificate</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_16" y="352" x="269" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Done</text>  </g> </svg>';
		
		var svgexample = '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg">  <g>   <title>Layer 1</title>   <rect stroke="#000000" id="svg_1" height="65" width="184.00001" y="186" x="21" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_4" height="59" width="151.00001" y="297" x="190" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_5" height="61" width="234" y="66" x="160" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_6" height="64" width="261.00001" y="160" x="309.99999" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <line id="svg_7" y2="119" x2="179" y1="199" x1="71" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#000000" fill="none"/>   <line id="svg_8" y2="200" x2="403" y1="311" x1="269" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#000000" fill="none"/>   <line id="svg_11" y2="169" x2="427" y1="116" x1="290" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="none"/>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_2" y="227" x="112" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Register Vehicle</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_3" y="96" x="234" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Pay Fees</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_9" y="202" x="445" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Get a weight certificate</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_12" y="333" x="269" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Done</text>  </g> </svg> editDiagram.js:37 <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg">  <g>   <title>Layer 1</title>   <rect stroke="#000000" id="svg_1" height="65" width="184.00001" y="186" x="21" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_4" height="59" width="151.00001" y="297" x="190" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_5" height="61" width="234" y="66" x="160" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <rect stroke="#000000" id="svg_6" height="64" width="261.00001" y="160" x="309.99999" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#b0cae5"/>   <line id="svg_7" y2="119" x2="179" y1="199" x1="71" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#000000" fill="none"/>   <line id="svg_8" y2="200" x2="403" y1="311" x1="269" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke="#000000" fill="none"/>   <line id="svg_11" y2="169" x2="427" y1="116" x1="290" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="none"/>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_2" y="227" x="112" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Register Vehicle</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_3" y="96" x="234" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Pay Fees</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_9" y="202" x="445" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Get a weight certificate</text>   <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_12" y="333" x="269" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Done</text>  </g> </svg>';
		svgCanvas.setSvgString(svgexample);
	}
	
	function saveSvg() {			
		svgCanvas.getSvgString()(handleSvgData);
	}
	
	$('#svgedit').load(function(){
		init_embed();
	});
	
	var timeoutID = window.setTimeout(function(){
		//loadSvg();
	}, 2500);
	
	*/
	
});
