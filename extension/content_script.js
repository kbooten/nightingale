console.log('Nightingale')
console.log('2020')



/// storing quotes already on page
var usedQuotes = [];

/// storing all text nodes from page; from recursive 'walk' function
var allTextNodes = [];

walk(document.body);

/// shuffling the text nodes so tooltips are placed randomly
shuffleArray(allTextNodes);

/// injecting tooltip
for (var i = 0; i < allTextNodes.length; i++){
	injectPopup(allTextNodes[i])
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



function injectPopup(textNode){
	// regexes matching web text to poetry
	// inject first match
	for (var i = 0; i < regex2quote.length; i++) {
		if (usedQuotes.includes(regex2quote[i][1])==false){
		    regex = regex2quote[i][0];
		    quote = regex2quote[i][1];
		    match = textNode.textContent.match(regex);
		    if (match){
		    	console.log(textNode.textContent);
		    	console.log(regex)
		    	keatstip = "<span class='keatstip'>"+match[0]+"<span class='keatstiptext'>"+quote+"</span></span>";
		    	var replacementNode = document.createElement('span');
				replacementNode.innerHTML = textNode.textContent.replace(match[0],keatstip);
				textNode.parentNode.insertBefore(replacementNode, textNode);
				textNode.parentNode.removeChild(textNode);
				usedQuotes.push(regex2quote[i][1]);
		    }
		}
	}
}


