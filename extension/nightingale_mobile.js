// console.log('Nightingale')
// console.log('(C) kyle booten 2021')
// console.log('*'.repeat(20))
// version for Insight Browser


var regex2quote = [

	// just a few at first for a demo
	// ode to psyche

	[/\b((written|spoken)[ -]word)\b|\bread(s|ing)? ((a|some) )?(poems?|poetry)\b/i,
		"O Goddess! hear these tuneless numbers, wrung<br>By sweet enforcement and remembrance dear"],

	[/\b(conch|mollusks?|mussels?|sea snails?|\byour \w+ ears?|psychoan\w+)\b/i,
		"And pardon that thy secrets should be sung<br>Even into thine own soft-conched ear"],

]


// https://stackoverflow.com/a/15506705

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
.keatstip {
  position: relative;
  display: inline-block;
  text-shadow: 0 0 3px #d10015, 0 0 6px #2d08d1;
  cursor: url("chrome-extension://__MSG_@@extension_id__/nightingale_sm.png") 0 0, auto;
}
`
);

addStyle(`
.keatstip .keatstiptext {
  visibility: hidden;
  min-width: 200px;
  background-color: black;
  color: #fff;
  border-radius: 6px;
  padding: 5px 5px;

  /*text*/
  text-align: center;
  font-size: 20px;
  
  /* Position the tooltip source: https://stackoverflow.com/a/25829529*/
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  /*  opacity and z-index */  
  opacity: 0;  
  z-index: 10;
  transition: all 2.0s ease;
  transition-delay: 2s;
}
`);

addStyle(`
.keatstip:hover .keatstiptext{
  visibility: visible;
  opacity: 1;
  cursor:default;
  transition: all 6s ease;
  transition-delay: .25s;
}
`);


/// storing all text nodes from page; from recursive 'walk' function
var allTextNodes = [];
walk(document.body);

/// shuffling the text nodes so tooltips are placed randomly
shuffleArray(allTextNodes);


// for debugging
// comment this out before deploying
// function clearStorage(){
// 	chrome.storage.local.set({"timedQuotes":{}},function(){
// 		console.log("Clearing Localstorage (for debugging)");
// 	});		
// }
// clearStorage();



// 	console.log(timedQuotes);
// 	chrome.storage.local.set({"timedQuotes":timedQuotes},function(){
// 		console.log('updated local storage (maybe)');
// 	});				
// });



function isHidden(el) {
	// https://stackoverflow.com/a/21696585
	// does this actually do anything?
	return (el.offsetParent === null)
}



function walk(node){
	// source: http://is.gd/mwZp7E
	var child, next;
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea' || tagName == 'style' || tagName == 'script'){
		return;
	}
	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			//injectPopup(node);
			allTextNodes.push(node);
			break;
	}
}


function shuffleArray(array) {
	// source: https://stackoverflow.com/a/12646864
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



// function hasEnoughTimePassed(timestamp,seconds=259200){
// 	///figure out if hard coded amount of time has passed since timestamp
// 	currentTimestamp = Math.floor(Date.now()/1000);
// 	if (currentTimestamp-timestamp>seconds){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }


// function howManyInLastNSeconds(timestamps,){
// 	///figure out if hard coded amount of time has passed since timestamp
// 	currentTimestamp = Math.floor(Date.now()/1000);
// 	if (currentTimestamp-timestamp>259200){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }





function injectPopup(textNode){//,timedQuotes){
	// regexes matching web text to poetry
	// inject first match
	for (var i = 0; i < regex2quote.length; i++){
		var quote = regex2quote[i][1];
		// if ((quote in timedQuotes)==true){
		// 	var timestamp = timedQuotes[quote];
		// 	timeCheck = hasEnoughTimePassed(timestamp);
		// }else{
		// 	timeCheck=true;
		// }
		// if (timeCheck==true){
	    var regex = regex2quote[i][0];
	    var match = textNode.textContent.match(regex);
	    //alert(match);
	    // alert(textNode.data);
	    // alert(regex);
	    if (match){
	    	alert(textNode.data)
	    	alert("got a match!")
	    	// alert.log(match);
	    	// alert.log(match[0]);
	    	keatstip = "<span class='keatstip'>"+match[0]+"<span class='keatstiptext'>"+quote+"</span></span>";
	    	var replacementNode = document.createElement('span');
			replacementNode.innerHTML = textNode.textContent.replace(match[0],keatstip);
			textNode.parentNode.insertBefore(replacementNode, textNode);
			textNode.parentNode.removeChild(textNode);
			// usedQuotes.push(quote);
			// add to local storage (quote, timestamp)
			// console.log('adding to localstorage')
			// ts = Math.floor(Date.now()/1000);
			// timedQuotes[quote]=ts;
			// only one quote per page
			return true
		}
	}
	// }
	return false
}





// chrome.storage.local.get({'timedQuotes':{}}, function(data){
// 	var timedQuotes = data.timedQuotes;
alert(allTextNodes.length + " possible nodes");
for (var i = 0; i < allTextNodes.length; i++){
	if (isHidden(allTextNodes[i])==false){
		// only replace one per page
		// injectPopup returns 'true' if it replaced something
		var replacedAny = injectPopup(allTextNodes[i]);//,timedQuotes);
		if (replacedAny==true){
			alert('replacement made')
			break;
		}
	}
}
