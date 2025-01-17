// Nightingale
// (C) kyle booten 2021
// https://github.com/kbooten/nightingale
// version for Insight Browser


// adding css
// https://stackoverflow.com/a/15506705
function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
.keatstip {
  all: unset;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 3px #d10015, 0 0 6px #2d08d1;
  font-size: inherit;
}
`
);

addStyle(`
.keatstiptext{
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
  z-index: 100;
  transition: all 2.0s ease;
  transition-delay: .2s;
}
`);


addStyle(`
.keatstipOn{
  visibility: visible;
  opacity: 1;
  transition: all 3s ease;
  transition-delay: .2s;
}
`);



//////////////
//////////////

/// regex interpretetations of keats' 6 late odes
/// pairs: (regex, quote from keats)

var regex2quote = [


	// ode to psyche

	[/\b((written|spoken)[ -]word)\b|\bread(s|ing)? ((a|some) )?(poems?|poetry)\b/i,
		"O Goddess! hear these tuneless numbers, wrung<br>By sweet enforcement and remembrance dear",0],

	[/\b(conch|mollusks?|mussels?|sea snails?|\byour \w+ ears?|psychoan\w+)\b/i,
		"And pardon that thy secrets should be sung<br>Even into thine own soft-conched ear",0],

	[/\bdream(ed|s|ing|t)?.{1,50}\baw[oa]ke\w+\b|\bSurely I\b/i,
		"Surely I dreamt to-day, or did I see<br>The winged Psyche with awaken'd eyes?",0],

	[/\b(a stroll|I wandered) (in|into|through|by|past)\b|\ball of a sudden\b/i,
		"I wander'd in a forest thoughtlessly,<br>And, on the sudden, fainting with surprise<br>Saw two fair creatures, couched side by side",0],

	[/\b(pikachus?|raichus?|caterpies?|pokemon)\b|\b(rivulet|(the|a) (creek|brook))\b|\b(coucher|collocate|the \w+ couple)\b|\boff the beaten (trail|track|path)\b/,
		"...two fair creatures, couched side by side<br>In deepest grass, beneath the whisp'ring roof<br>Of leaves and trembled blossoms, where there ran<br>A brooklet, scarce espied",0],

	[/\b(blue|green|black|white|silver|gold|green|red|orange|teal|gr[ea]y|pink|purple|yellow)\b[ -]\b(blue|green|black|white|silver|gold|green|red|orange|teal|gr[ea]y|pink|purple|yellow)\b|\b(soft|cool|damp) (earth|soil|mud|dirt)\b|\bbreathing (exercises?|techniques?)\b|\bbiofeedback\b|\bdeep breathing\b|\b(cool|cold)-\w+\b/i,
		"Mid hush'd, cool-rooted flowers, fragrant-eyed,<br>Blue, silver-white, and budded Tyrian,<br>They lay calm-breathing, on the bedded grass",0],

	[/\b(their arms|legs|wings|buffalo wild wings|bw3|wing stop|drivetrain)\b|\b\w+oo\b.{5,50}ieu\b/i,
		"Their arms embraced, and their pinions too;<br>Their lips touch'd not, but had not bade adieu",0],

	[/\bsoft (hands|arms|touch)\b|\b(manipulated by|rearranged the \w+s|the dreamers|bertolucci)\b/i,
		"As if disjoined by soft-handed slumber,<br>And ready still past kisses to outnumber",0],

	[/\b[3-6]:\d\d (a.?m.?|in the morning)\b|\bat dawn\b|\b()\beye-\w+\b|\beye \w+ (from|of|with|by)\b|\bthe (\w+ )?sublime\b/i,
		"And ready still past kisses to outnumber<br>At tender eye-dawn of aurorean love",0],

	[/\b(Icarus|Caravaggio|Jarman)\b|\bthe \w+ boy I know\b|\bthe winged \w+\b/i,
		"The winged boy I knew",0],

	[/\b(\w+(y|Y|ie|IE)), \1\b|\b(his|her) (true|real) [B-DF-HJ-NP-TV-Z]\w+\b/,
		"But who wast thou, O happy, happy dove?<br>His Psyche true!",0],

	[/\bla\w+st (\w+ )?and lo\w+st\b|\b(\w+st|most \w+) (vision|sight|scene|view|panorama|vista)\b|\b\w+ed \w+archy\b|\bit[ -]girl\b|\b(Jane Birken|Chlo[eë] Sevigny|Kendall Jenner|Grace Jones|Edie Sedgwick)\b/i,
		"O latest born and loveliest vision far<br>Of all Olympus' faded hierarchy!",0],

	[/\b(Phoebe|Venus|Hesperus|Phosphorus|evening (star|sky|meal)|gold[- ]crowned|crown of gold|sapphire[- ]\w+ed|glow[- ]?worm|biolum\w+)\b/i,
		"Fairer than Phoebe's sapphire-region'd star,<br>Or Vesper, amorous glow-worm of the sky",0],

	[/\b(do(n't| not|es not|esn't) have|has no|without) (m?any|an? )?(temples?|altars?|hymns?|fans?|follow(ers?|ing)|website?|Patreon|wikipedia page|fan[ -]?base|simps|stans)\b/i,
		"Fairer than Phoebe's sapphire-region'd star,<br>Or Vesper, amorous glow-worm of the sky<br>Fairer than these, though temple thou hast none,<br>Nor altar heap'd with flowers",0],

	[/\b(virgins)\b|\bto (make|cook|brew) (an?|some )?(delicious|fabulous|tasty) \w+|\bvirgin \w+ v.?s.? (the )?chad \w+\b/i,
		"Nor virgin-choir to make delicious moan<br>Upon the midnight hours",0],

	[/\b(incense|aromatherpy|diffuser|censer|lost (my|her|his|your) voice)\b|\b(\w+[kn] Orthodox|Divine Liturgy)\b/i,
		"No voice, no lute, no pipe, no incense sweet<br>From chain-swung censer teeming",0],

	[/\b(seculari\w+|rates? of (church|relig\w+))\b|\b(prophe\w+|Ezekiel|Isaiah|Jeremiah)\b|\b((data|predictive) analytics|(logistic|linear) regression|(language|time series) models|actuar\w+)\b/i,
		"No shrine, no grove, no oracle, no heat<br>Of pale-mouth'd prophet dreaming.",0],

	[/\btoo, too\b|\btoo late for (the|a\w+)\b|\bfor a promises?\b|\b(the|an?) (\w+ )?(believing|faithful|credulous) \w+|\bfor (\w+ )?(ancient|vintage|antique|old|aged) \w+s\b/i,
		"O brightest! though too late for antique vows,<br>Too, too late for the fond believing lyre",0],

	[/\b(air)\b.{2,50}\b(water|fire)\b|\b(water)\b.{2,50}\b(air|fire)\b|\b(fire)\b.{2,50}\b(water|air)\b|\b(haunted|spooky) (forests?|woods?)\b/i,
		"Too, too late for the fond believing lyre,<br>When holy were the haunted forest boughs,<br>Holy the air, the water, and the fire",0],

	[/\byour (bright|glowing|shining) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bOlympians?\b|\bI('m| am) my own|\bmy own eyes\b/i,
		"Yet even in these days so far retir'd<br>From happy pieties, thy lucent fans,<br>Fluttering among the faint Olympians<br>I see, and sing, by my own eyes inspir'd.",0],

	[/\bso let me be\b|\bbe your (ch|k)[aeoiu]\w+\b|\bmidnight hours?\b|\ba ((gr|m)oan|whimper)\b|\bnsfw\b/i,
		"So let me be thy choir, and make a moan<br>Upon the midnight hours",0],

	[/\b(your (\w+ )?\w+, ){1,}((and )?your (\w+ )?\w+)\b/i,
		"Thy voice, thy lute, thy pipe, thy incense sweet<br>From swinged censer teeming",0],

	[/\b(shrines?|gardens?|altars?|oracles?|priests?|prophets?|tombs?|dreams?(ing)?|holy?|sacred?|mystical|mysterious|flowers?|flora|vines?)\b[^.!?]+\b(shrines?|gardens?|alters?|oracles?|priests?|prophets?|tombs?|dreams?(ing)?|holy?|sacred?|mystical|mysterious|flowers?|flora|vines?)\b/i,
		"Thy shrine, thy grove, thy oracle, thy heat<br>Of pale-mouth'd prophet dreaming.",0],

	[/\ba (temple|shrine|church) in some\b|\b(bethel|basilica|shrine|chapel|tabernacle|stupa|reliquary|buts?udan|maq[āa]m|chantry|ciborium|chantry)\b/i,
		"Yes, I will be thy priest, and build a fane<br>In some untrodden region of my mind",0],

	[/\b(primeval|primary|virgin|wild|untouched|) (forest?|gardens?|woods?|nature)\b|\bnature preserves?\b|\b(concept|mind)[- ]map(\w+)?\b|\b(neurogenesis|synap\w+|dendrit\w+|decision trees?)|\bin the wind\b/i,
		"In some untrodden region of my mind,<br>Where branched thoughts, new grown with pleasant pain,<br>Instead of pines shall murmur in the wind",0],

	[/\b(winged|gr[eo]ws?(ing)? (\w+ )?wings|(baby|fledgling) birds?)\b|\bs(\w+) by s\5\b|\bfar,? far\b|terrafor\w+/i,
		"Far, far around shall those dark-cluster'd trees<br>Fledge the wild-ridged mountains steep by steep",0],

	[/\b(light|west(ern?)) winds?\b|\bbirds and (the )?bees\b|\b(dryads?|fairy|fairies|nymphs?|oaks?|oaken|pixies?)\b|\b(melatonin|ambien)s?\b/i,
		"And there by zephyrs, streams, and birds, and bees,<br>The moss-lain Dryads shall be lull'd to sleep",0],

	[/\bin the midst of this\b|\ba w\+ (sanctuary|temple|church|shrine|mosque)\b|\b(neural[ -]?network|cognition|neurogenesis|synap\w+|dendrit\w+|decision trees?)\b|\bnoise( -)cancelling\b|\b(florists?|landscape arch\w+)\b/i,
		"And in the midst of this wide quietness<br>A rosy sanctuary will I dress<br>With the wreath'd trellis of a working brain",0],

	[/\bb[aeiou]+[b-df-hj-np-tv-z]+,? (and|not|or|with|of|for) ?b[aeiou]+[b-df-hj-np-tv-z]+\b|\bwithout (a name|names)\b|\bgreen thumbs?|horticult\w+\b|\bheirloom (vegetables?|fruits?|agricult\w+)\b|\bone of a kind\b|\bbroke the mou?ld\b|\bastron\w+\b|\bbook of Genesis\b|\bGenesis 2:[0-9]{2}\b/i,
		"With buds, and bells, and stars without a name,<br>With all the gardener Fancy e'er could feign,<br>Who breeding flowers, will never breed the same",0],

	[/\b(all|most|some) (soft|sweet|kind|delicious|merciful|good|pure|beautiful|nice|holy) \w{6,}\b|\bthere (shall|will) be (for|in|by|of)\b|\blaw of attraction\b|\bpower of positiv(ity|e (thoughts|thinking))\b|\b(an?|the) (truce|endgame)\b/i,
		"And there shall be for thee all soft delight<br>That shadowy thought can win",0],

	[/\bbright [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bopen(ed (the|a))? window\b|\b(maglite|petzl|black diamond)|\b(casper|purple|avocado) mattress\b|\bwarm [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+[ie]{0,}\b|\blet (love|truth|inspiration)\b/i,
		"And there shall be for thee all soft delight<br>That shadowy thought can win,<br>A bright torch, and a casement<br>ope at night,<br>To let the warm Love in!",0],


	//ode on indolence

	[/\bwith (an? )?\w+ed (necks?|heads?|face?|hands?|arms?|lips?|eyes?|mouths?|smiles?|shoulders?|teeth|tooth|noses?|fingers?|foot|feet|hair), and (an? )?\w+ (necks?|heads?|face?|hands?|arms?|lips?|eyes?|mouths?|smiles?|shoulders?|teeth|tooth|noses?|fingers?|foot|feet|hair)\b/i,
		"One morn before me were three figures seen,<br>With bowèd necks, and joinèd hands, side-faced;",1],

	[/\b\w+ed in (white|black|silver|gold) \w+s\b|\b\w+ in (white|black|silver|gold) \w+s \w+ed\b|\bone (behind|in front of|with) the other \w+ed\b|\b(tevas|birkenstocks|chacos)\b/i,
		"And one behind the other stepp’d serene,<br>In placid sandals, and in white robes graced",1],

	[/\b(zoetrope|duotrope|wintergarden|Méliès|george melies|action movies?|british cinema|(mm|millimetres?) film|horse gait|gait of (the|a) ?horses)\b/i,
		"They pass’d, like figures on a marble urn,<br>When shifted round to see the other side",1],

	[/\b((a|the) sequel to|eternal (return|recurrence)|time is (infinite|a circle))\b/i,
		"They came again; as when the urn once more<br>Is shifted round, the first seen shades return",1],

	[/\bas may (sometimes? )?(happen|be the case) with \w+,|((ceramic|cereal|ramen|set of \d+|tea|coffee|japanese|pyrex|porcelain|clay) (bowls?|cups?|mugs?))/,
		"And they were strange to me, as may betide<br>With vases, to one deep in Phidian lore.",1],

	[/\bHow is it that I (\w+ )?knew|\w+ed in such a \w+ \w+[?.!]|(n95|surgical|sheet|3d[- ]printed) masks?\b/i,
		"How is it, Shadows! that I knew ye not?\bHow came ye muffled in so hush a mask?",1],

	[/\b(grew|grows?) (less|\w+er) and (less|\w+er)|(necks?|heads?|face?|hands?|arms?|lips?|eyes?|fingers?|foot|feet|body|bodies|skin|legs?|gums) (was|were|is|are|felt|got) numb\b|\bslow\w+ pulse\b/i,
		"Ripe was the drowsy hour;<br>The blissful cloud of summer-indolence<br>Benumb’d my eyes; my pulse grew less and less",1],

	[/[.?!] +\bPain?\b[A-Za-z, '’]+\bpleasure?\b[A-Za-z, '’]+[.?!]|[.?!] +Pleasures?\b[A-Za-z, '’]+\bpains?\b[A-Za-z, '’]+[.?!]/i,
		"Pain had no sting, and pleasure’s wreath no flower",1],

	[/\b(exorcis[mt])\b|\bthink about nothing\b|\bstare at (her|my|their|his) phone\b/i,
		"O, why did ye not melt, and leave my sense<br>Unhaunted quite of all but—nothingness?",1],

	[/\b(unmeek|bossy|overbearing|pushy|loud|obstreperous|unruly|difficult|noisy|demanding) (wom[ea]n|girls|wi[fv]es?|girlfriends?)\b|\b(my|her|his|your) demons?\b|\b(artistic|poetic) inspiration\b|\bthe poetry of \b/i,
		"The last, whom I love more, the more of blame<br>Is heap’d upon her, maiden most unmeek,—<br>I knew to be my demon Poesy.",1],

	[/(your|my|our) (lazy|idle|tired|exhausted) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\b(achievement subject|neoliberal ideology|self-optimization|byung-chul han)\b/i,
		"Was it a silent deep-disguisèd plot<br>To steal away, and leave without a task<br>My idle days?",1],

	[/\b(like clockwork|rule of threes?|scotophob\w+)|and, [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+ing\b,/i,
		"A third time pass’d they by, and, passing, turn’d<br>Each one the face a moment whiles to me",1],

	[/\b((so|gettin?) faded)\b|\bfaded (af|every (day|night)|all the time)\b|\b(wingstop|bw3|(barbecue|bbq|hot|chicken) wings)\b/i,
		"Then faded, and to follow them I burn’d<br>And ached for wings",1],

	[/\b(her name was|she was (called|named)) (Am|Lo)\w+\b|\bher \w+ was pale\b|\bthe three[:;.]/i,
		"I knew the three;<br>The first was a fair Maid, and Love her name;<br>The second was Ambition, pale of cheek,<br>And ever watchful with fatiguèd eye",,1],

	[/\blove is\b|\bwant(s|ed|ing)? (wings|to hide|to fly( away)?|super[- ]?powers)|\bfade[ -](in|out)\b|\bOh? f\w+!|\bW(hat|here|ho|hen) (\b[A-Z]?[a-z]+\b ?){2,7}\? +(\b[A-Z]?[a-z]+\b ?){2,7}\?/i,
		"They faded, and, forsooth! I wanted wings:<br>O folly! What is Love? and where is it?",1],

	[/\b((stay|keep|get) motivated|need motivation|time management|bullet journal|pomodoro technique|to-?do app|trello)\b|\b\w+[’']s \w+ \w+[’']s/i,
		"And for that poor Ambition! it springs<br>From a man’s little heart’s short fever-fit",1],

	[/\bat least for me\b|\bnothing (sweeter|better|(as )?sweet|(as )?good) (as|than)\b|\bhoneyed\b|\brather be (sleeping|in bed)\b/i,
		"For Poesy!—no,—she has not a joy,—<br>At least for me,—so sweet as drowsy noons,<br>And evenings steep’d in honey’d indolence",1],

	[/\b((your|my) ((late|early|mid)[- ])?((twen|thir|for|six|seven|eigh|nine)ties|(2|3|4|5|6|7|8|9)0s))\b|\bretirement[- ]age\b|\buniversal[- ]basic income\b/i,
		"O, for an age so shelter’d from annoy,<br>That I may never know how change the moons,<br>Or hear the voice of busy common-sense!",1],

	[/\b([b-df-hj-np-tv-z]+)(\w+d|[aeiou]{1,}[b-df-hj-np-tv-z]{1,}) \1[b-df-hj-np-tv-z]{0,}(ea[nm]s?|oo[nm]s?|ai[nm]s?)\b|\bembroidered with\b/i,
		"My sleep had been embroider’d with dim dreams;<br>My soul had been a lawn besprinkled o’er<br>With flowers, and stirring shades, and baffled beams",1],

	[/\b(starlings|goldfinch(es)?|magpies?|sparrows?|wrens?|crows?|orioles?|warblers?)'s?|\b(vine|ivy|tendril)[,.]|\bpent[- ]up\b/i,
		"The morn was clouded, but no shower fell,<br>Tho’ in her lids hung the sweet tears of May;<br>The open casement press’d a new-leaved vine,<br>Let in the budding warmth and throstle’s lay",1],

	[/\bno \w+ of mine\b|\bsee me cry\b|\b(your|my) (skirts?|dress(es)?|blouses?|tears)\b|\bclosing[- ]time\b/i,
		"O Shadows! ’twas a time to bid farewell!<br>Upon your skirts had fallen no tears of mine.",1],

	[/\b(Adi[oó]s|Hasta luego|Seeya|Bye ?bye|Peace)[!.,]|\b(I'm|am|I was) (just )?(chilling?|(chill|rel)axing|spac(ing|ed) out)\b/i,
		"So, ye three Ghosts, adieu! Ye cannot raise<br>My head cool-bedded in the flowery grass",1],

	[/\ba pet[- ]\w+\b|\ba sentimental \w+\b|\b(farce|bullshit|scandal|charade|shit[ -]show|travesty)[.!]/i,
		"For I would not be dieted with praise,<br>A pet-lamb in a sentimental farce!",1],

	[/\bsoftly (from|through|with|over|beyond|at|over|into)\b|\bon the [b-df-hj-np-tv-z]+eamy\b/i,
		"Fade softly from my eyes, and be once more<br>In masque-like figures on the dreamy urn",1],

	[/\b\w+s (for|of|with) the (night|evening|dark)[.,?!]|\bnights?\b[^?.!]{1,30}\bdays?\b/i,
		"Farewell! I yet have visions for the night,<br>And for the day faint visions there is store",1],

	[/\byou (fuckers|assholes|shitheads|dipshits|losers|ghosts)!|\bfuck off!|\b(idle|lazy) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+[aeiou]?s?\b/i,
		"Vanish, ye Phantoms! from my idle spright,<br>Into the clouds, and never more return!",1],


	//ode on melancholy

	[/\btight-\w+ed\b|\bits poisonous \w.+[.?!:;]|\bNo,? no,/,
		"No, no, go not to Lethe, neither twist<br>Wolf's-bane, tight-rooted, for its poisonous wine",2],

	[/\bDon't let[^.?!,]{1,25}\b(kiss|touch)(ed)?\b|\b(nightshades?|eggplants?|[Xx]ans?|[Xx]anax(es)?|[Bb]enzos?)\b|\bOcean Spray\b/,
		"Nor suffer thy pale forehead to be kiss'd<br>By nightshade, ruby grape of Proserpine",2],

	[/\b(your rosary|a partner in your|psyche)\b|\w+'s mysteries\b/i,
		"Make not your rosary of yew-berries,<br>Nor let the beetle, <br>nor the death-moth be<br>Your mournful Psyche, nor the downy owl<br>A partner in your sorrow's mysteries",2],

	[/([st]h\w+) to \1|the \w+ \w+ of the (soul|mind|heart|imagination)/i,
		"For shade to shade will come too drowsily,<br>And drown the wakeful anguish of the soul",2],

	[/\like a \b(weeping|crying|sad) \w+[,.?!,2],|\ball the (\w+ )?(flowers|bushes|bouquets|petals|blooms)[,.?!]/i,
		"But when the melancholy fit shall fall<br>Sudden from heaven like a weeping cloud,<br>That fosters the droop-headed flowers all",2],

	[/\brainbow of the\b|\b(globed|peonies|glut|shroud)\b|\bof global\b|\b(red|blue|green|black|white|grey) (hill|peak|field|stream|pond|brook|cloud|star|creek|mist)|\bApril sh\w+/,
		"And hides the green hill in an April shroud;<br>Then glut thy sorrow on a morning rose,<br>Or on the rainbow of the salt sand-wave,<br>Or on the wealth of globed peonies",2],

	[/\b([b-df-hj-np-tv-z])([aeiou]{1,2})([b-df-hj-np-tv-z]), \1\2\3|\b(\w+), \4 (upon|through|in|by|against|with|over|among|of|up|under|within|without|towards?)\b/i,
		"Or if thy mistress some rich anger shows,<br>Emprison her soft hand, and let her rave,<br>And feed deep, deep upon her peerless eyes.",2],

	[/(\w{5,})( - |—|--|---|–|[.?!.] )\1|\b([.?!] +She lives with|must die)\b/,
		"She dwells with Beauty—beauty that must die;<br>And Joy,<br>whose hand is ever at his lips<br>Bidding adieu",2],

	[/(turn\w+ to|bec[oa]me|grew) (poison|ash|ruin|shit|mold|spoil)\w{0,}|\b\w+-mouth\b|\b(alchemy|metamorph[a-z]+|betrayals?|curdled?)\b/i,
		"and aching Pleasure nigh,<br>Turning to poison while the bee-mouth sips",2],

	[/\b([Cc]hurch|[Tt]emple) of [A-Z]\w+\b|\b[Ss]overeign\w+\b|\b[Vv]eil\w+\b/,
		"Ay, in the very temple of Delight<br>Veil'd Melancholy has her sovran shrine",2],

	[/\b(gnostic\w+|sommeliers?|(refined|excellent|superb) tastes?|secret (society|club))|a sophisticate\b|\bsensitive (people|person|guy)\b/i,
		"Veil'd Melancholy has her sovran shrine,<br>Though seen of none save him whose strenuous tongue<br>Can burst Joy's grape against his palate fine",2],

	[/\bthe \w+ness of (my|her|his|our|your|his|their)? [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|(my|her|his|our|your|his|their) \b\w[b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+(y|ies?) \w[b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+(y|ies?)\b|\b(troph(ies|y)\b|\bof her (might|power|strength|capability|influence|prestige|control|design))\b/i,
		"His soul shalt taste the sadness of her might,<br>And be among her cloudy trophies hung.",2],


	//ode to a nightingale

	[/\bheart ?aches?|\bso (?:drunk|stoned|faded)\b|\bnumb(?:ness)?.{1,20}pains?|\bpains?.{1,20}numb(?:ness)?/i,
		"My heart aches, and a drowsy numbness pains<br>My sense, as though of hemlock I had drunk",3],

	[/\bopiates?\b|\boblivion\b|\babyss\b|\bforgetfulnes\b|\b[A-Z]\w+-wards\b/,
		"as though of hemlock I had drunk,<br>Or emptied some dull opiate to the drains<br>One minute past, and Lethe-wards had sunk",3],

	[/\benvy (of|for)\b|\btoo (happy|perfect|good)\b/i,
		"'Tis not through envy of thy happy lot,<br> But being too happy in thine happiness",3],

	[/\b(dryads?|fairy|fairies|nymphs?|oaks?|oaken|pixies?)\b|\b(melodious|lyrical|melodic|favorite song|euphon\w+)\b|\b(beech|deciduous|beechen|maple|yew|willow|alder)\b/i,
		"light-winged Dryad of the trees<br>In some melodious plot<br>Of beechen green",3],

	[/\bshadows\b|\bfull-throated\b|\b(song|singing) of (the )?(summer)\b|\binfinity\b/i,
		"shadows numberless,<br>Singest of summer in full-throated ease.",3],

	[/\b(glass|pint) of \w+\b|\ba chilled \w+\b|\b(wine|merlot|pinot (noir|gris)|cabernet|sauvignon blanc|syrah|zinfandel)\b|\bin (the|a) (grotto|cave|cavern|earth)\b|\bneed (a|to) drink\b/i,
		"O, for a draught of vintage! that hath been<br>Cool'd a long age in the deep-delved earth",3],

	[/\b(grassy|vegetal|verdant|sunburned|sunburnt|mirth|glee|hilarity)\b|\bproven[cç]\w+\b|\b(Napa Valley|Sonoma)\b|\bthe \w+ green\b/i,
		"Tasting of Flora and the country green,<br>Dance, and Provençal song, and sunburnt mirth!",3],

	[/\ba \w+ full of (a|the )?(warm|hot|simmering)\b|\bthe (?:\w+ )?South\b|\b([Cc]hampagne|[Pp]rosecco|[Aa]perol|[Cc]ola|[Pp]epsi|[Rr]osé|[Bb]eaker|[Nn]algene|[Kk]lean [Kk]anteen|[Hh]ydro [Fl]lask|[Ff]lask|[Tt]he [Mm]uses|[Bb]ubbles)/,
		"O for a beaker full of the warm South,<br>Full of the true, the blushful Hippocrene,<br>With beaded bubbles winking at the brim,<br>And purple-stained mouth",3],

	[/\bfade away\b|\b(deep|dark|dim|misty) (forest|woods|mist|trees)\b|\bselva oscura\b|\bleave the world\b|\bunseen\b/i,
		"That I might drink, and leave the world unseen,<br>And with thee fade away into the forest dim",3],

	[/\bnever (known|knew)\b|\b(fret|weariness|weary|exhausted|fever|worry|anxiety|OCD|GAD|obsess\w+)\b/i,
		"Fade far away, dissolve, and quite forget<br>What thou among the leaves hast never known,<br>The weariness, the fever, and the fret",3],

	[/\bold m(men|women|people)\b|\b(spectre|specter|ghostly)\b|\b(palsy|geriatric|elderly|Alzheimer's|nursing home|wast(ing|ed) away|gr[ae]y hairs?|gr[ae]ying)\b/i,
		"Here, where men sit and hear each other groan;<br>Where palsy shakes a few, sad, last gray hairs,<br>Where youth grows pale, and spectre-thin, and dies",3],

	[/\b(lustrous|luster|glossy|shiny|desir(ed?|ing) (you|them)|leaden|despair(s|ed|ing)?)\b|\b(those|her|his|my|our|the) \w+ eyes\b/i,
		"Where but to think is to be full of sorrow<br>And leaden-eyed despairs,<br>Where Beauty cannot keep her lustrous eyes,<br>Or new Love pine at them beyond to-morrow.",3],

	[/^[A-Z]\w+! \w+!|\b(Bacchus|[Bb]acchanalian?|Dionysus|his (entourage|groupies|enablers))\b|\b[Ff]or I will \w+ to you\b|\bof (Verse|Rhyme|Poetry)\b/,
		"Away! away! for I will fly to thee,<br>Not charioted by Bacchus and his pards,<br>But on the viewless wings of Poesy",3],

	[/\bmy (dull|stupid|idiotic|worthless|tired|broken|exhausted) (brain|mind|ideas)\b|\bmy (brain|mind|ideas) (is|are) (so )?(dull|stupid|idiotic|worthless|tired|broken|exhausted)\b/i,
		"Though the dull brain perplexes and retards",3],

	[/\ban? (Aries|Taurus|Gemini|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\b|\b(I'm|she's|he's) (such )?a Cancer\b/i,
		"Already with thee! tender is the night,<br>And haply the Queen-Moon is on her throne,<br>Cluster'd around by all her starry Fays",3],

	[/\bgreen and black\b|\bdark green\b|\bmossy?\b|\blichens?\b|\bfung(us|al)\b|\bmoldy?\b/i,
		"But here there is no light,<br>Save what from heaven is with the breezes blown<br>Through verdurous glooms and winding mossy ways.",3],

	[/\b(incense|aromatherapy|mumm(y|ification)|mangos?|apples|lemons?|oranges?|plums?|grapes?|papayas?|grapefruits?)\b|the \w+, the \w+, and the \w+-\w+ \w+/i,
		"I cannot see what flowers are at my feet,<br>Nor what soft incense hangs upon the boughs,<br>But, in embalmed darkness, guess each sweet<br>Wherewith the seasonable month endows<br>The grass, the thicket, and the fruit-tree wild",3],

	[/\b\w+thorn\b|\bprickly\b|\bviolets\b|\bcovered (up )in leaves\b|\bmid-(April|May|June)\b|\bsummer (evenings|nights)|\w+'s eldest (child|son|daughter)/i,
		"White hawthorn, and the pastoral eglantine;<br>Fast fading violets cover'd up in leaves;<br>And mid-May's eldest child,<br>The coming musk-rose, full of dewy wine,<br>The murmurous haunt of flies on summer eves.",3],

	[/^\b[A-Z]\w+ I \w+[;:!.]|\bhalf in love\b|(with|for|of|by) ([a-z]\w+)? Death|\bgood way to die\b/,
		"Darkling I listen; and, for many a time<br>I have been half in love with easeful Death",3],

	[/\b(thinking|dreaming|singing|writing|wrote|sang|dreamed|dreampt|longed) (about|of|for) death\b/i,
		"Call'd him soft names in many a mused rhyme,<br>To take into the air my quiet breath",3],

	[/\b(Now more than ever it seems)\b|\bwant(s|ed|ing)? the pain to (just )?(stop|end)\b|\bin (such )?ecstasy!|\b(too|so|really) (fucking )?emo\b/i,
		"Now more than ever seems it rich to die,<br>To cease upon the midnight with no pain,<br>While thou art pouring forth thy soul abroad<br>In such an ecstasy!",3],

	[/\b(my grave|my burial|my death|my demise|my corpse|turn to (grass|dirt)|requiem|Mozart's|Verdi's|about death)\b|\bbecome a [a-z]o[a-z]\b|\bstill you would \w+,/i,
		"Still wouldst thou sing, and I have ears in vain—<br>To thy high requiem become a sod.",3],

	[/\b(born (to die|for death|undying))\b|, [a-z]\w{5,} [A-Z]\w+!|\b immortal B\w+/,
		"Thou wast not born for death, immortal Bird!",3],

	[/\b(ancient|vintage|antique|old|aged|previous|medieval|primeval|bygone|former) (times?|years?|mornings?|evenings?|hours?|customs?|cultures?|patterns?|civilizations?|ways?)/i,
		"No hungry generations tread thee down;<br>The voice I hear this passing night was heard<br>In ancient days by emperor and clown",3],

	[/\bs\w+(-| )s\w+ song\b|\bm\w+ melod(y|ies)|\bthe [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b of [B-DF-HJ-NP-TV-Z]{1,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bwhen, \w+ (for|of|in|by) \w+,|\bthe alien [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b/,
		"Perhaps the self-same song that found a path<br>Through the sad heart of Ruth, when, sick for home,<br>She stood in tears amid the alien corn",3],

	[/\bha[ds] charmed\b|\bf\w+ l\w+ f\w+\b|\b(casements?|lattice[sd]?|awning|hinged)\b|\bforlorn\./i,
		"The same that oft-times hath<br>Charm'd magic casements, opening on the foam<br>Of perilous seas, in faery lands forlorn.",3],

	[/[.!?] +F\w+!|\b[Bb]ell\b.{1,20}[Tt]oll(s|ed)?|\b[Tt]he very \w+/,
		"Forlorn! the very word is like a bell<br>To toll me back from thee to my sole self!",3],

	[/\b(Goodbye!|Later!|See ?ya!|Adios!|[Ss]he is (famous|well-known) for|([Tt]he i|I)(magination|nspiration) can('t|not)?)/,
		"Adieu! the fancy cannot cheat so well<br>As she is fam'd to do, deceiving elf.",3],

	[/\b(up|over|beyond|through|past|around) the (\w+ )?(streams?|hills?(-sides?)?|meadows?|dales?|mountains?|rivers?|forests?|woods?|stars|cliffs?|valleys?|fields?|streams?|beach(es)?|ponds?|hills?|brook?|trees?|gardens?|coasts?)[.,;:?!]/i,
		"Adieu! adieu! thy plaintive anthem fades<br>Past the near meadows, over the still stream,<br>Up the hill-side",3],

	[/\b((just|only) an? (echo|dream|memory))\b|\bnightingale\b|\bbird('s)? ?song\b|(\b(empty|alone|sad|depressed|confused|miserable|bereft) again\b)|\balready (so |really )?far away\b|\bcouldn't hear (it|the song|the music) anymore\b|\bearshot\b|\balready gone\b|\bone hand clapping\b|\bwoke\b|\babout my dream\b/i,
		"and now 'tis buried deep<br>In the next valley-glades:<br>Was it a vision, or a waking dream?",3],


	//ode on a grecian urn

	[/(\b\w+ed (bride|wife|husband)\b|\b-child\b|\bof quiet\b|\bof silence\b)|of \w+ness\b|s\w+ and s\w+\b t[aeiou]\w+\b|still un\w+ed\b/i,
		"Thou still unravish'd bride of quietness,<br>Thou foster-child of silence and slow time",4],

	[/\b(of the forest|my rhyme|historian of)\b|, who \b(can't|can)\b|\ba \w+y \b(story|tale|history|drama|narrative)\b|\b(?:my|our)\b \b(rhyme|echo|melody)\b/i,
		"Sylvan historian, who canst thus express<br>A flowery tale more sweetly than our rhyme",4],	

	[/\b(legend|legendary|haunts|of (deities|gods)|(gods|deities) (and|or) (humans|mortals))\b/i,
		 "What leaf-fring'd legend haunts about thy shape<br>Of deities or mortals, or of both,",4],

	[/\b([Ii]n (Tempe|Delphi|Naxos|Byzantium)|(dales|valleys|hollows|dells|vales) of [A-Z]\w+)\b/,
		"Of deities or mortals, or of both,<br>In Delphi or the dales of Arcady?",4],

	[/\b(What men|What women|loth)\b|(\bWhat [a-z ]+\? {0,}){3,}|(\bWhat (mad|wild|crazy|insane) \w+[!?])/,
		"What men or gods are these? What maidens loth?<br>What mad pursuit?  What struggle to escape?<br>What pipes and timbrels? What wild ecstasy?",4],

	[/\b[A-Z]\w+d (songs|melodies) are\b|\bthose \w+ are \w+er\b|\b\w+s are sweet\b/i,
		"Heard melodies are sweet, but those unheard<br>Are sweeter",4],	

	[/\byour? soft \w+\b|\bplay on\b|\bof no t\w+/i,
		"therefore, ye soft pipes, play on;<br>Not to the sensual ear, but, more endear'd,<br>Pipe to the spirit ditties of no tone",4],

	[/\bt\w+ (be|are|were|) (bare|empty|naked)|\b[A-Z]\w+ youth|, beneath the \w+/,
		"Fair youth, beneath the trees, thou canst not leave<br>Thy song, nor ever can those trees be bare",4],

	[/\ba \w+ lover\b|\bnever,? never\b|\byou can kiss\b|\bnear the goal\b/i,
		"Bold Lover, never, never canst thou kiss,<br>Though winning near the goal yet, do not grieve",4],

	[/\b(your bliss|(cannot|can't|won't) fade)\b/i,
		"She cannot fade, though thou hast not thy bliss,<br>For ever wilt thou love, and she be fair!",4],

	[/\bhappy,? happy\b|\bbid (?:\w+ )+adieu/i,
		"Ah, happy, happy boughs! that cannot shed<br>Your leaves, nor ever bid the Spring adieu",4],

	[/\ba \w+ (?:musician|drummer|composer|singer)\b|\bfor ?ever n\w+\b|\b(?:happy|perfect|joyful|beautiful|perfect|sweet) (?:love|dream|joy|life|friendship)\b/i,
		"And, happy melodist, unwearied,<br>For ever piping songs for ever new;<br>More happy love!",4],

	[/\bfor ?ever young\b|\bpanting\b|\bto be (?:enjoyed|appreciated|spent)\b/i,
		"For ever warm and still to be enjoy'd,<br>or ever panting, and for ever young;",4],

	[/\bburning (?:forehead|face|mind|skin|rash|hands?|arms?|tongue)\b|\bso (?:thirsty|parched)\b|\ba h\w+ h\w+-s\w+\b|\bcloyed\b|\bleaves (?:a|my|your|the) heart\b|\ba \w+ing \w+,? and a \w+ing \w+\b/i,
		"All breathing human passion far above,<br>That leaves a heart high-sorrowful and cloy'd,<br>A burning forehead, and a parching tongue.",4],

	[/\b\w+ious priest\b|\bsilken\b|\bgarland\b|\bmoo(?:ing|s|ed)\b|\bcow moo\w+\b|\bwhat (green|blue|red|yellow|orange|black|white)\b/i,
		"Who are these coming to the sacrifice?<br>To what green altar, O mysterious priest,<br>Lead'st thou that heifer lowing at the skies,<br>And all her silken flanks with garlands drest?",4],

	[/\w+-built\b|\b(charming|quaint|little|picturesque|small|cute) (town|village|community|suburb|city)\b|\bwith peaceful\b|\bpious\b|\bsea[ -]?shore\b|\bcitadel\b|\bis emptied of\b/i,
		"What little town by river or sea shore,<br>Or mountain-built with peaceful citadel,<br>Is emptied of this folk, this pious morn?",4],

	[/\bbe silent\b|\bnot a soul\b|\bcan't ever return\b|\bdesolate\b/i,
		"And, little town, thy streets for evermore<br>Will silent be; and not a soul to tell<br>Why thou art desolate, can e'er return.",4],

	[/\bOh? [A-Z]\w+ \w+!|\b(embroidery|braid|ponytail|pigtails?|plait)\b|\bwith forest \w+s\b|\b\w+(en|ed)\b weed\b/i,
		"O Attic shape! Fair attitude! with brede<br>Of marble men and maidens overwrought,<br>With forest branches and the trodden weed",4],

	[/\beternity\b|\bout of (my|your|their) minds?\b|\bC\w+ [A-Z]\w+!/,
		"Thou, silent form, dost tease us out of thought<br>As doth eternity: Cold Pastoral!",4],

	[/\bold age\b|\bthis generation\b|\bwoe\b|\bwasted? (my|your|our|their) (life|lives)\b/i,
		"When old age shall this generation waste,<br>Thou shalt remain, in midst of other woe<br>Than ours",4],

	[/\b[Aa] friend to\b|\b[Aa]ll I know is\b|\b[Aa]ll you need to know\b|\b(Beauty|Love|Truth|Power|Wisdom) is\b/,
		"A friend to man, to whom thou say'st,<br>\"Beauty is truth, truth beauty,—that is all<br>Ye know on earth, and all ye need to know.\"",4],

		
	// to autumn

	[/\b(pumpkins?|figs?|pears?|persimmons?|beets?|cranberr(y|ies)|bosom[- ]budd(y|ies))\b/i,
		"Season of mists and mellow fruitfulness,<br>Close bosom-friend of the maturing sun",5],

	[/\b(conspiracy theor(y|ies)|agri-?business|GMOs?|Syngenta|Nutrien|Monsanto|DowDuPont|Isidore|(St.?|Saint) Dorothy|thatched)\b|\bautumn\w+/i,
		"Close bosom-friend of the maturing sun;<br>Conspiring with him how to load and bless<br>With fruit the vines that round the thatch-eves run",5],

	[/\b(Thomas Kincade|tutti frutti|juice box(es)?|Mott's|Simply Orange|Capri Sun|Tropicana|Minute Maid|fill all|to the core)\b/i,
		"Conspiring with him...<br>To bend with apples the moss'd cottage-trees,<br>And fill all fruit with ripeness to the core",5],

	[/\b(nutella|ferrero rocher|bacci|tumescen(ce|t)|fertility|sweet corn|fatten the|KIND bars?|hazelnut?|pistachios?|Mr\.? Peanut)\b/i,
		"Conspiring with him...<br>To swell the gourd, and plump the hazel shells<br>With a sweet kernel",5],

	[/\b(apiary|honey|bees?|honecombs?|endless summers?|lobster rolls?|fried clams?|hives?|🍯|🐝|over the (lip|edge|brim)s?)\b/i,
		"to set budding more,<br>And still more, later flowers for the bees,<br>Until they think warm days will never cease,<br>For summer has o'er-brimm'd their clammy cells.",5],

	[/\b(preppers?|survivalism|hoarding|pandemic pantry|sardines|lentils|stockpil(e|ing)|toilet paper)\b/i,
		"Who hath not seen thee oft amid thy store?",5],

	[/\b(barley|oats|rye|maize|millet|amaranth|quinoa|buckwheat|farro|spelt)\b|\b(hard|soft|warm|cold|near|far)-\w+ed\b|\bw\w+ winds?\b/i,
		"Sometimes whoever seeks abroad may find<br>Thee sitting careless on a granary floor,<br>Thy hair soft-lifted by the winnowing wind",5],

	[/\b(furrow|sound asleep|drowsy|sudafed|heroin|methadone|narcotic|opi(um|ate)|spared by|swath|thresher|eau de (parfum|toilette|cologne)|perfume|burnout)\b/i,
		"Or on a half-reap'd furrow sound asleep,<br>Drows'd with the fume of poppies, while thy hook<br>Spares the next swath and all its twined flowers",5],

	[/\b(chaff|deep attention|thresholds?|heavy is the head|across a brook)\b/i,
		"And sometimes like a gleaner thou dost keep<br>Steady thy laden head across a brook",5],

	[/\b(ciders?|applejack|calvados|deep attention|ooz(e[ds]?|ings?)|dregs|residues?)\b|a \w+-press\b|\b(hour|day|month)s? by (hour|day|month)s?\b/i,
		"Or by a cyder-press, with patient look,<br>Thou watchest the last oozings hours by hours.",5],

	[/\bWhere\b[^?.!]{5,50}\?[^?.!]{0,6}\b[Ww]here\b[^?.!]{5,50}\?|\b[Tt]hink not of\b|\b[Yy]ou have your\b/,
		"Where are the songs of spring? Ay, Where are they?<br>Think not of them, thou hast thy music too,—",5],

	[/\b(the evening|(five|5) o'?clock shadow|at (sunset|dusk)|stubble|with (rosy|reddish|pink(ish)?))\b/i,
		"While barred clouds bloom the soft-dying day,<br>And touch the stubble-plains with rosy hue;",5],

	[/\b(gnats?|midges?|flies?|willows?|reeds?|cat[ -](tails|kins)?|borne aloft|on the (wind|breeze))\b/i,
		"Then in a wailful choir the small gnats mourn<br>Among the river sallows, borne aloft<br>Or sinking as the light wind lives or dies",5],

	[/\b(fully?[ -]grown|bleat(s|ing|ed)?|from (the )?hilly? \w+)\b/i,
		"And full-grown lambs loud bleat from hilly bourn",5],

	[/\b(crickets?|cicadas?|locusts?|grasshoppers?|Syngenta|Nutrien|Monsanto|DowDuPont|agri-?business|(family|community|neighborhood)[ -](farm|garden)s?|robin|finch|treble)\b/i,
		"Hedge-crickets sing; and now with treble soft<br>The red-breast whistles from a garden-croft;",5],

	[/\b(a|the|some|\w+ing) swallows?|tweet(s|ed|ing)? (at|in|with|on|to)\b/i,
		"And gathering swallows twitter in the skies.",5]


]


var num2poemUrl = {
	0:"https://www.poetryfoundation.org/poems/44480/ode-to-psyche",
	1:"https://www.poetryfoundation.org/poems/52995/ode-on-indolence",
	2:"https://www.poetryfoundation.org/poems/44478/ode-on-melancholy",
	3:"https://www.poetryfoundation.org/poems/44479/ode-to-a-nightingale",
	4:"https://www.poetryfoundation.org/poems/44477/ode-on-a-grecian-urn",
	5:"https://www.poetryfoundation.org/poems/44484/to-autumn"
};


//////////////
//////////////

// keep track of whether any popup has been added
var popupAdded = false;


function isHidden(el) {
	// https://stackoverflow.com/a/21696585
	// does this actually do anything?
	return (el.offsetParent === null)
}


function shuffleArray(array) {
	// source: https://stackoverflow.com/a/12646864
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function togglePopup(){
	p = document.getElementById('popup');
	if (p.classList.contains("keatstipOn")){
		p.classList.remove("keatstipOn");
		window.clearTimeout(readingTimer); // interrupt the process if not let alone for long enough time
	}else{
		p.classList.add("keatstipOn");
		// use localStorage to keep track
		window.readingTimer = setTimeout(function(){localStorage.setItem("lastCheckedQuote", Date.now());},10000);
	}
}


var targetTextId = 0;


///only one popup per page, text needs to change
var popup = document.createElement('div');
popup.setAttribute("id", "popup");
popup.classList.add("keatstiptext");
document.body.appendChild(popup);


function injectPopup(textNode){
	// regexes matching web text to poetry
	// inject first match
	for (let i = 0; i < regex2quote.length; i++){
		var quote = regex2quote[i][1];
	    	var regex = regex2quote[i][0];
	    	var poemUrl = num2poemUrl[regex2quote[i][2]];
	    	var match = textNode.textContent.match(regex);
	    	// don't match popup, or span already injected with feather magic
	    	// though that is unnecessary if buttons are ignored in walk()
	    	if (match && textNode.id!="popup" && textNode.textContent.includes('🪶')==false){
	    		keatstip = "<button class='keatstip' id='targetText"+targetTextId+"'>🪶 "+match[0]+"</button>";
	    		var replacementNode = document.createElement('span');
			replacementNode.innerHTML = textNode.textContent.replace(match[0],keatstip);
			textNode.parentNode.insertBefore(replacementNode, textNode);
			textNode.parentNode.removeChild(textNode);
			var targetTextNode = document.getElementById('targetText'+targetTextId);
			var p = document.getElementById('popup');
			p.innerHTML = quote; // add popup
			// event listener for glowing text
	    		targetTextNode.addEventListener("click", function(e){
	    			togglePopup(); // popup on and off
	    			e.preventDefault(); // keep anchors from firing hyperlink
	    			e.stopPropagation(); // keep from bubbling
	    		});
			// event listener for popup
	    		p.addEventListener('click',function(e){ // click on tooltip to open full poem page
	    			window.open(poemUrl, "_blank");
	    			e.stopPropagation(); 
	    		})
			/// note what quotes have been recently seen
			var nRecentQuotes_ = JSON.parse(localStorage.getItem("nRecents"));
			nRecentQuotes_.unshift(quote); // prepend
			nRecentQuotes_ = nRecentQuotes_.slice(0,5); // limit size
			localStorage.setItem("nRecents",JSON.stringify(nRecentQuotes_));
			targetTextId+=1; //increment in case there is more than one on page (in case of Twitter)
			return true
		}
	}
	return false
}


function initialize(nodeListChange){
	/// reads the nodes
	/// randomizes the quotes
	/// tries to add 


	/// storing all text nodes from page; from recursive 'walk' function
	function walk(node){
		// source: http://is.gd/mwZp7E
		var child, next;
		var tagName = node.tagName ? node.tagName.toLowerCase() : "";
		if (tagName == 'input' || tagName == 'button' || tagName == 'textarea' || tagName == 'style' || tagName == 'script'){
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


	/// get all the nodes
	var allTextNodes = [];
	walk(document.body);


	if (nodeListChange == "random"){/// shuffling the text nodes so tooltips are placed randomly
		shuffleArray(allTextNodes);
	}else if (nodeListChange == "reverse"){  /// just reversing them (for scrolling down on Twitter)
		allTextNodes.reverse();
	}


	/// sampling regex2quote pairs
	var sampleN = 60;
	shuffleArray(regex2quote);
	regex2quote = regex2quote.slice(0, sampleN);


	/// filtering out those in the currently forbidden list in localstorage
	var nRecentQuotes_ = JSON.parse(localStorage.getItem("nRecents"));
	var regex2quote_filtered = []; 
	for (let i = 0; i < regex2quote.length; i++){
		var quote = regex2quote[i][1];
		if (nRecentQuotes_.includes(quote)==false){
			regex2quote_filtered.push(regex2quote[i]);
		}
	}
	regex2quote = regex2quote_filtered;
	

	/// add, break if one is added
	// alert("trying to add");
	for (let i = 0; i < allTextNodes.length; i++){
		if (isHidden(allTextNodes[i])==false){
			var replacedAny = injectPopup(allTextNodes[i]);
			if (replacedAny==true){
				// make a note globally so only one is added (needed for twitter) 
				popupAdded = true; 
				break;
			}
		}
	}
}


/// main 
/// check to make sure enough time has passed since last click (per domain)
/// sometimes randomize the nodes, sometimes start from the top
var lastChecked = localStorage.getItem("lastCheckedQuote");
if (lastChecked === null){
	var lastChecked = 0; // default value...very much in the past
}
// alert(lastChecked)

// initialize the bucket of recents if doesn't exist
var nRecentQuotes = localStorage.getItem("nRecents");
if (nRecentQuotes === null){
	// if does not exist yet
	// alert('initializing empty array'); 
	var emptyArray = [];
	localStorage.setItem("nRecents",JSON.stringify(emptyArray));
	nRecentQuotes = [];
}

// timeOut
var timeOut = 86400 * 1000 * 5; // seconds in a day times number of days
timeOut = 60 * 1000 * 6; // for debugging
// alert(Date.now() - lastChecked);
// alert(lastChecked);
var enoughTimePassed = true;
if (Date.now() - lastChecked > timeOut){ // enough time passed
	// alert("enough time passed");
	if (Math.random()>.2){
		initialize(nodeListChange="random");
	}else{
		initialize();
	}
}else{
	//alert("not enough time passed");
	enoughTimePassed = false;
}


/// Twitter stuff
/// fires every so often as long as user has scrolled down
var scrollY = window.pageYOffset;
if (window.location.hostname.includes("twitter")==true && popupAdded==false && enoughTimePassed == true){
	setInterval(function(){
		var scrollYNew = window.pageYOffset;
		if (scrollYNew - scrollY > 1000){
			scrollY = scrollYNew;
			if (popupAdded==false && enoughTimePassed == true){// kind of repetitive (see ref to variable above) but required by my use of setInterval
				initialize(nodeListChange="reverse"); ///start from the end
			}
		}
	},12000);
}
