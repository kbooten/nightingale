console.log('Nightingale')
console.log('(C) kyle booten 2020')
console.log('*'.repeat(20))


/// storing quotes already on page
// var usedQuotes = [];

/// storing all text nodes from page; from recursive 'walk' function
var allTextNodes = [];
walk(document.body);

/// shuffling the text nodes so tooltips are placed randomly
shuffleArray(allTextNodes);


// // get the requisite info from localstorage
// // inject tooltip
// // update localstorage
// chrome.storage.local.set({"timedQuotes":{}},function(){
// 	console.log('udpated local storage (maybe)');
// });	



chrome.storage.local.get({'timedQuotes':{}}, function(data){
	var timedQuotes = data.timedQuotes;
	console.log(data);
	for (var i = 0; i < allTextNodes.length; i++){
		injectPopup(allTextNodes[i],timedQuotes);
	}
	console.log(timedQuotes);
	chrome.storage.local.set({"timedQuotes":timedQuotes},function(){
		console.log('udpated local storage (maybe)');
	});				
});


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



function hasEnoughTimePassed(timestamp,seconds=259200){ //defaults to
	///figure out if hard coded amount of time has passed since timestamp
	currentTimestamp = Math.floor(Date.now()/1000);
	if (currentTimestamp-timestamp>seconds){
		return true;
	}else{
		return false;
	}
}


function howManyInLastNSeconds(timestamps,){
	///figure out if hard coded amount of time has passed since timestamp
	currentTimestamp = Math.floor(Date.now()/1000);
	if (currentTimestamp-timestamp>259200){
		return true;
	}else{
		return false;
	}
}


function injectPopup(textNode,timedQuotes){
	// regexes matching web text to poetry
	// inject first match
	for (var i = 0; i < regex2quote.length; i++){
		//console.log(regex2quote[i])
		var quote = regex2quote[i][1]
		if ((quote in timedQuotes)==true){
			var timestamp = timedQuotes[quote];
			timeCheck = hasEnoughTimePassed(timestamp);
		}else{
			timeCheck=true;
		}
		if (timeCheck==true){
		    var regex = regex2quote[i][0];
		    var match = textNode.textContent.match(regex);
		    if (match){
		    	console.log(match[0])
		    	keatstip = "<span class='keatstip'>"+match[0]+"<span class='keatstiptext'>"+quote+"</span></span>";
		    	var replacementNode = document.createElement('span');
				replacementNode.innerHTML = textNode.textContent.replace(match[0],keatstip);
				textNode.parentNode.insertBefore(replacementNode, textNode);
				textNode.parentNode.removeChild(textNode);
				//usedQuotes.push(quote);
				// add to local storage (quote, timestamp)
				console.log('adding to localstorage')
				ts = Math.floor(Date.now()/1000);
				timedQuotes[quote]=ts;
				// only one quote per page
				break;
			}
		}
	}
}
