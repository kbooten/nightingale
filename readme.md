# *Nightingale*

*Nightingale* is a Chrome browser extension that injects literary pop-up ads (lines from Keats's six major odes of 1819) into the web.   

The resonances between lines of Keats's verse and fragments of web-pages are painstakingly encoded as a series of 136 regular expressions, each itself a "close-reading" that tries to consider what echoes there may be between the line and web pages I might visit.  For instance, web-text matching the regular expression:

>`/\b([A-Z]\w+d (songs|melodies) are)\b|\bthose \w+ are \w+er\b|\b(\w+s are sweet)\b/`

will trigger a pop-up containing the lines:

>Heard melodies are sweet, but those unheard  
>Are sweeter  


## Adding it to your browser

*Nightingale* is highly-personalized software; the regular expressions that match web-text to Keats's odes encode my no-doubt idiosyncratic interpretations of this verse.  Still, Chrome users can install the extension by 

1. navigating to `chrome://extensions/`
2. clicking "Load Unpacked"
3. loading the folder `extension`, downloadable from this repo

## Other features

*Nightingale* assumes that seeing the same lines from Keats pop up too frequently could breed resentment. It tracks in `localStorage` when a particular quotation from Keats was last inserted as a pop-up into a page the user visited, and the quotation will only appear after a certain amount of time has elapsed (by default, 3 days). 



