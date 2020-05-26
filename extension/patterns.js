/// pairs: (regex, quote from keats)
var regex2quote = [

	// ode to psyche

	[/\b((written|spoken)[ -]word)\b|\bread(s|ing)? ((a|some) )?(poems?|poetry)\b/i,
		"O Goddess! hear these tuneless numbers, wrung<br>By sweet enforcement and remembrance dear"],

	[/\b(conch|mollusks?|mussels?|sea snails?|\byour \w+ ears?|psychoan\w+)\b/i,
		"And pardon that thy secrets should be sung<br>Even into thine own soft-conched ear"],

	[/\bdream(ed|s|ing|t)?.{1,50}\baw[oa]ke\w+\b|\bSurely I\b/i,
		"Surely I dreamt to-day, or did I see<br>The winged Psyche with awaken'd eyes?"],

	[/\b(a stroll|I wandered) (in|into|through|by|past)\b|\ball of a sudden\b/i,
		"I wander'd in a forest thoughtlessly,<br>And, on the sudden, fainting with surprise<br>Saw two fair creatures, couched side by side"],

	[/\b(pikachus|raichus|caterpies|pokemon)\b|\b(rivulet|(the|a) (creek|brook))\b|\b(coucher|collocate|the \w+ couple)\b|\boff the beaten (trail|track|path)\b/,
		"...two fair creatures, couched side by side<br>In deepest grass, beneath the whisp'ring roof<br>Of leaves and trembled blossoms, where there ran<br>A brooklet, scarce espied"],

	[/\b(blue|green|black|white|silver|gold|green|pink|orange|teal|gr[ea]y|pink|purple|yellow)\b[ -]\b(blue|green|black|white|silver|gold|green|pink|orange|teal|gr[ea]y|pink|purple|yellow)|\b(soft|cool|damp) (earth|soil|mud|dirt)\b|\bbreathing (exercises?|techniques?)\b|\bbiofeedback\b|\bdeep breathing\b|\b(cool|cold)-\w+\b/i,
		"Mid hush'd, cool-rooted flowers, fragrant-eyed,<br>Blue, silver-white, and budded Tyrian,<br>They lay calm-breathing, on the bedded grass"],

	[/\b(their arms|legs|wings|buffalo wild wings|bw3|wing stop|drivetrain)\b|\b\w+oo\b.{5,50}ieu\b/i,
		"Their arms embraced, and their pinions too;<br>Their lips touch'd not, but had not bade adieu"],

	[/\bsoft (hands|arms|touch)\b|\b(manipulated by|rearranged the \w+s|the dreamers|bertolucci)\b/i,
		"As if disjoined by soft-handed slumber,<br>And ready still past kisses to outnumber"],

	[/\b[3-6]:\d\d (a.?m.?|in the morning)\b|\bat dawn\b|\b()\beye-\w+\b|\beye \w+ (from|of|with|by)\b|\bthe (\w+ )?sublime\b/i,
		"And ready still past kisses to outnumber<br>At tender eye-dawn of aurorean love"],

	[/\b(Icarus|Caravaggio|Jarman)\b|\bthe \w+ boy I know\b|\bthe winged \w+\b/i,
		"The winged boy I knew"],

	[/\b(\w+[yY]?),? \1\b|\btrue [B-DF-HJ-NP-TV-Z]+/i,
		"But who wast thou, O happy, happy dove?<br>His Psyche true!"],

	[/\bla\w+st (\w+ )?and lo\w+st\b|\b(\w+st|most \w+) (vision|sight|scene|view|panorama|vista)\b|\b\w+ed \w+archy\b|\bit[ -]girl\b|\b(Jane Birken|Chlo[eë] Sevigny|Kendall Jenner|Grace Jones|Edie Sedgwick)\b/i,
		"O latest born and loveliest vision far<br>Of all Olympus' faded hierarchy!"],

	[/\b(Phoebe|Venus|Hesperus|Phosphorus|evening (star|sky|meal)|gold[- ]crowned|crown of gold|sapphire[- ]\w+ed|glow[- ]?worm|biolum\w+)\b/i,
		"Fairer than Phoebe's sapphire-region'd star,<br>Or Vesper, amorous glow-worm of the sky"],

	[/\b(do(n't| not|es not|esn't) have|without) (m?any|an? )?(temples?|altars?|hymns?|fans?|follow(ers?|ing)|website?|Patreon|wikipedia page|fan[ -]?base|simps|stans)\b/i,
		"Fairer than Phoebe's sapphire-region'd star,<br>Or Vesper, amorous glow-worm of the sky<br>Fairer than these, though temple thou hast none,<br>Nor altar heap'd with flowers"]

	//ode on indolence

	[/\bwith (an? )?\w+ed (necks?|heads?|face?|hands?|arms?|lips?|eyes?|mouths?|smiles?|shoulders?|teeth|tooth|noses?|fingers?|foot|feet|hair), and (an? )?\w+ (necks?|heads?|face?|hands?|arms?|lips?|eyes?|mouths?|smiles?|shoulders?|teeth|tooth|noses?|fingers?|foot|feet|hair)\b/i,
		"One morn before me were three figures seen,<br>With bowèd necks, and joinèd hands, side-faced;"],

	[/\b\w+ed in (white|black|silver|gold) \w+s|\b\w+ in (white|black|silver|gold) \w+s \w+ed\b|\wed,? one (behind|in front of|with) the other\b|one (behind|in front of|with) the other \w+ed|\b(tevas|birkenstocks|chacos)\b/i,
		"And one behind the other stepp’d serene,<br>In placid sandals, and in white robes graced"],

	[/\b(zoetrope|duotrope|wintergarden|Méliès|george melies|action movies?|british cinema|(mm|millimetres?) film|horse gait|gait of (the|a) ?horses)\b/i,
		"They pass’d, like figures on a marble urn,<br>When shifted round to see the other side"],

	[/\b((a|the) sequel to|eternal (return|recurrence)|time is (infinite|a circle))\b/i,
		"They came again; as when the urn once more<br>Is shifted round, the first seen shades return"],

	[/\bas may (sometimes? )?(happen|be the case) with \w+,|((ceramic|cereal|ramen|set of \d+|tea|coffee|japanese|pyrex|porcelain|clay) (bowls?|cups?|mugs?))/,
		"And they were strange to me, as may betide<br>With vases, to one deep in Phidian lore."],

	[/\bHow is it that I (\w+ )?knew|\w+ed in such a \w+ \w+[?.!]|(n95|surgical|sheet|3d[- ]printed) masks?\b/i,
		"How is it, Shadows! that I knew ye not?\bHow came ye muffled in so hush a mask?"],

	[/\b(grew|grows?) (less|\w+er) and (less|\w+er)|(necks?|heads?|face?|hands?|arms?|lips?|eyes?|fingers?|foot|feet|body|bodies|skin|legs?|gums) (was|were|is|are|felt|got) numb\b|\bslow\w+ pulse\b/i,
		"Ripe was the drowsy hour;<br>The blissful cloud of summer-indolence<br>Benumb’d my eyes; my pulse grew less and less"],

	[/[.?!] +\bPain?\b[A-Za-z, '’]+\bpleasure?\b[A-Za-z, '’]+[.?!]|[.?!] +Pleasures?\b[A-Za-z, '’]+\bpains?\b[A-Za-z, '’]+[.?!]/i,
		"Pain had no sting, and pleasure’s wreath no flower"],

	[/\b(exorcis[mt])\b|\bthink about nothing\b|\bstare at (her|my|their|his) phone\b/i,
		"O, why did ye not melt, and leave my sense<br>Unhaunted quite of all but—nothingness?"],

	[/\b(unmeek|bossy|overbearing|pushy|loud|obstreperous|unruly|difficult|noisy|demanding) (wom[ea]n|girls|wi[fv]es?|girlfriends?)\b|\b(my|her|his|your) demons?\b|\b(artistic|poetic) inspiration\b|\bthe poetry of \b/i,
		"The last, whom I love more, the more of blame<br>Is heap’d upon her, maiden most unmeek,—<br>I knew to be my demon Poesy."],

	[/(your|my|our) (lazy|idle|tired|exhausted) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\b(achievement subject|neoliberal ideology|self-optimization|byung-chul han)\b/i,
		"Was it a silent deep-disguisèd plot<br>To steal away, and leave without a task<br>My idle days?"],

	[/\b(like clockwork|rule of threes?|scotophob\w+)|and, [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+ing\b,/i,
		"A third time pass’d they by, and, passing, turn’d<br>Each one the face a moment whiles to me"],

	[/\b((so|gettin?) faded)\b|\bfaded (af|every (day|night)|all the time)\b|\b|\b(wingstop|bw3|(barbecue|bbq|hot|chicken) wings)\b/i,
		"Then faded, and to follow them I burn’d<br>And ached for wings"],

	[/\b(her name was|she was (called|named)) (Am|Lo)\w+\b|\bher \w+ was pale\b|\bthe three[:;.]/i,
		"I knew the three;<br>The first was a fair Maid, and Love her name;<br>The second was Ambition, pale of cheek,<br>And ever watchful with fatiguèd eye",],

	[/\blove is\b|\bwant(s|ed|ing)? (wings|to hide|to fly( away)?|super[- ]?powers)|\bfade[ -](in|out)\b|\bOh? f\w+!|\bW(hat|here|ho|hen) (\b[A-Z]?[a-z]+\b ?){2,7}\? +(\b[A-Z]?[a-z]+\b ?){2,7}\?/i,
		"They faded, and, forsooth! I wanted wings:<br>O folly! What is Love? and where is it?"],

	[/\b((stay|keep|get) motivated|need motivation|time management|bullet journal|pomodoro technique|to-?do app|trello)\b|\b\w+[’']s \w+ \w+[’']s/i,
		"And for that poor Ambition! it springs<br>From a man’s little heart’s short fever-fit"],

	[/\bat least for me\b|\bnothing (sweeter|better|(as )?sweet|(as )?good) (as|than)\b|\bhoneyed\b|\brather be (sleeping|in bed)\b/i,
		"For Poesy!—no,—she has not a joy,—<br>At least for me,—so sweet as drowsy noons,<br>And evenings steep’d in honey’d indolence"],

	[/\b((your|my) ((late|early|mid)[- ])?((twen|thir|for|six|seven|eigh|nine)ties|(2|3|4|5|6|7|8|9)0s))\b|\bretirement[- ]age\b|\buniversal[- ]basic income\b/i,
		"O, for an age so shelter’d from annoy,<br>That I may never know how change the moons,<br>Or hear the voice of busy common-sense!"],

	[/\b\b([b-df-hj-np-tv-z]+)\w+ \1[b-df-hj-np-tv-z]{0,}(ea[nm]s?|oo[nm]s?|ai[nm]s?)|\bembroidered with\b/i,
		"My sleep had been embroider’d with dim dreams;<br>My soul had been a lawn besprinkled o’er<br>With flowers, and stirring shades, and baffled beams"],

	[/\b(starlings|goldfinch(es)?|magpies?|sparrows?|wrens?|crows?|orioles?|warblers?)'s?|\b(vine|ivy|tendril)[,.]|\bpent[- ]up\b/i,
		"The morn was clouded, but no shower fell,<br>Tho’ in her lids hung the sweet tears of May;<br>The open casement press’d a new-leaved vine,<br>Let in the budding warmth and throstle’s lay"],

	[/\bno \w+ of mine\b|\bsee me cry\b|\b(your|my) (skirts?|dress(es)?|blouses?|tears)\b|\bclosing[- ]time\b/i,
		"O Shadows! ’twas a time to bid farewell!<br>Upon your skirts had fallen no tears of mine."],

	[/\b(Laters?|Adios|Hasta luego|Seeya|Bye ?bye|Peace)[!.,]|\b(I'm|am|I was) (just )?(chilling?|(chill|rel)axing|spac(ing|ed) out)\b/i,
		"So, ye three Ghosts, adieu! Ye cannot raise<br>My head cool-bedded in the flowery grass"],

	[/\ba pet[- ]\w+\b|\ba sentimental \w+\b|\b(farce|bullshit|scandal|charade|shit[ -]show|travesty)[.!]/i,
		"For I would not be dieted with praise,<br>A pet-lamb in a sentimental farce!"],

	[/\bsoftly (from|through|with|over|beyond|at|over|into)\b|\bon the [b-df-hj-np-tv-z]+eamy\b/i,
		"Fade softly from my eyes, and be once more<br>In masque-like figures on the dreamy urn"],

	[/\b\w+s (for|of|with) the (night|evening|dark)[.,?!]|\bnights? [\w ,\n]{1,30}\bdays?\b/i,
		"Farewell! I yet have visions for the night,<br>And for the day faint visions there is store"],

	[/(fuckers|(\bassholes|shitheads|dipshits|losers|ghosts))!|\bfuck off!|\b(idle|lazy) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+[aeiou]?s?\b/i,
		"Vanish, ye Phantoms! from my idle spright,<br>Into the clouds, and never more return!"],


	//ode on melancholy

	[/\btight-\w+ed\b|\bits poisonous \w.+[.?!:;]|\bNo,? no,/,
		"No, no, go not to Lethe, neither twist<br>Wolf's-bane, tight-rooted, for its poisonous wine"],

	[/\bDon't let.{1,25}\b(kiss|touch)(ed)?|\b(nightshades?|egglplants?|xans|[Xx]anax|[Bb]enzos)\b/,
		"Nor suffer thy pale forehead to be kiss'd<br>By nightshade, ruby grape of Proserpine"],

	[/\b(your rosary|a partner in your|psyche)\b|\w+'s mysteries\b/i,
		"Make not your rosary of yew-berries,<br>Nor let the beetle, <br>nor the death-moth be<br>Your mournful Psyche, nor the downy owl<br>A partner in your sorrow's mysteries"],

	[/([st]h\w+) to \1|the \w+ \w+ of the (soul|mind|heart|imagination)/i,
		"For shade to shade will come too drowsily,<br>And drown the wakeful anguish of the soul"],

	[/\like a \b(weeping|crying|sad) \w+[,.?!],|\ball the (\w+ )?(flowers|bushes|bouquets|petals|blooms)[,.?!]/i,
		"But when the melancholy fit shall fall<br>Sudden from heaven like a weeping cloud,<br>That fosters the droop-headed flowers all"],

	[/\brainbow of the\b|\b(globed|peonies|glut|shroud)\b|\bof global\b|\b(red|blue|green|black|white|grey) (hill|peak|field|stream|pond|brook|cloud|star|creek|mist)|\bApril sh\w+/,
		"And hides the green hill in an April shroud;<br>Then glut thy sorrow on a morning rose,<br>Or on the rainbow of the salt sand-wave,<br>Or on the wealth of globed peonies"],

	[/\b([b-df-hj-np-tv-z])([eo]{2})\w+.{1,20}([b-df-hj-np-tv-z])(?!\1)\2\w+|\b(\w+), \4 (through|in|by|against|with|over|among|of|up|under|within|without|towards?)\b/i,
		"Or if thy mistress some rich anger shows,<br>Emprison her soft hand, and let her rave,<br>And feed deep, deep upon her peerless eyes."],

	[/(\w{5,})( - |—|--|---|–|[.?!.] )\1|\b([.?!] +She lives with|must die)\b/,
		"She dwells with Beauty—beauty that must die;<br>And Joy,<br>whose hand is ever at his lips<br>Bidding adieu"],

	[/(turn\w+ to|bec[oa]me|grew) (poison|ash|ruin|shit|mold|spoil)\w{0,}|\b\w+-mouth\b|\b(alchemy|metamorph[a-z]+|betrayals?|curdled?)\b/i,
		"and aching Pleasure nigh,<br>Turning to poison while the bee-mouth sips"],

	[/\b([Cc]hurch|[Tt]emple) of [A-Z]\w+\b|\b[Ss]overeign\w+\b|\b[Vv]eil\w+\b/,
		"Ay, in the very temple of Delight<br>Veil'd Melancholy has her sovran shrine"],

	[/\b(gnostic\w+|sommeliers?|(refined|excellent|superb) tastes?|secret (society|club))|a sophisticate\b|\bsensitive (people|person|guy)\b/i,
		"Veil'd Melancholy has her sovran shrine,<br>Though seen of none save him whose strenuous tongue<br>Can burst Joy's grape against his palate fine"],

	[/the \w+ness of (my|her|our|your|his|their)? [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\w[b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+(y|ies?) \w[b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+(y|ies?)|\b(troph(ies|y)|of her (might|power|strength|capability|influence|prestige|control|design))\b/i,
		"His soul shalt taste the sadness of her might,<br>And be among her cloudy trophies hung."],


	//ode to a nightingale

	[/\bheart ?aches?|\bso (?:drunk|stoned|faded)\b|\bnumb(?:ness)?.{1,20}pains?|\bpains?.{1,20}numb(?:ness)?/i,
		"My heart aches, and a drowsy numbness pains<br>My sense, as though of hemlock I had drunk"],

	[/\bopiates?\b|\boblivion\b|\babyss\b|\bforgetfulnes\b|\b[A-Z]\w+-wards\b/,
		"as though of hemlock I had drunk,<br>Or emptied some dull opiate to the drains<br>One minute past, and Lethe-wards had sunk"],

	[/\benvy (of|for)\b|\btoo (happy|perfect|good)\b/i,
		"'Tis not through envy of thy happy lot,<br> But being too happy in thine happiness"],

	[/\b(dryads?|fairy|fairies|nymphs?|oaks?|oaken|pixies?)\b|\b(melodious|lyrical|melodic|favorite song|euphon\w+)\b|\b(beech|deciduous|beechen|maple|yew|willow|alder)\b/i,
		"light-winged Dryad of the trees<br>In some melodious plot<br>Of beechen green"],

	[/\bshadows\b|\bfull-throated\b|\b(song|singing) of (the )?(summer)\b|\binfinity\b/i,
		"shadows numberless,<br>Singest of summer in full-throated ease."],

	[/\b(glass|pint) of \w+\b|\ba chilled \w+\b|(wine|merlot|pinot (noir|gris)|cabernet|sauvignon blanc|syrah|zinfandel)|\bin (the|a) (grotto|cave|cavern|earth)\b|\bneed (a|to) drink\b/i,
		"O, for a draught of vintage! that hath been<br>Cool'd a long age in the deep-delved earth"],

	[/\b(grassy|vegetal|verdant|sunburned|sunburnt|mirth|glee|hilarity)\b|\bproven[cç]\w+\b|\b(Napa Valley|Sonoma)\b|\bthe \w+ green\b/i,
		"Tasting of Flora and the country green,<br>Dance, and Provençal song, and sunburnt mirth!"],

	[/\ba \w+ full of (a|the )?(warm|hot|simmering)\b|\bthe (?:\w+ )?South\b|\b([Cc]hampagne|[Pp]rosecco|[Aa]perol|[Cc]ola|[Pp]epsi|[Rr]osé|[Bb]eaker|[Nn]algene|[Kk]lean [Kk]anteen|[Hh]ydro [Fl]lask|[Ff]lask|[Tt]he [Mm]uses|[Bb]ubbles)/,
		"O for a beaker full of the warm South,<br>Full of the true, the blushful Hippocrene,<br>With beaded bubbles winking at the brim,<br>And purple-stained mouth"],

	[/\bfade away\b|\b(deep|dark|dim|misty) (forest|woods|mist|trees)\b|\bselva oscura\b|\bleave the world\b|\bunseen\b/i,
		"That I might drink, and leave the world unseen,<br>And with thee fade away into the forest dim"],

	[/\bnever (known|knew)\b|\b(fret|weariness|weary|exhausted|fever|worry|anxiety|OCD|GAD|obsess\w+)\b/i,
		"Fade far away, dissolve, and quite forget<br>What thou among the leaves hast never known,<br>The weariness, the fever, and the fret"],

	[/\bold m(men|women|people)\b|\b(spectre|specter|ghostly)\b|\b(palsy|geriatric|elderly|Alzheimer's|nursing home|wast(ing|ed) away|gr[ae]y hairs?|gr[ae]ying)\b/i,
		"Here, where men sit and hear each other groan;<br>Where palsy shakes a few, sad, last gray hairs,<br>Where youth grows pale, and spectre-thin, and dies"],

	[/\b(lustrous|luster|glossy|shiny|desir(ed?|ing) (you|them)|leaden|despair(s|ed|ing)?)\b|\b(those|her|his|my|our|the) \w+ eyes\b/i,
		"Where but to think is to be full of sorrow<br>And leaden-eyed despairs,<br>Where Beauty cannot keep her lustrous eyes,<br>Or new Love pine at them beyond to-morrow."],

	[/^[A-Z]\w+! \w+!|\b(Bacchus|[Bb]acchanalian?|Dionysus|his (entourage|groupies|enablers))\b|\b[Ff]or I will \w+ to you\b|\bof (Verse|Rhyme|Poetry)\b/,
		"Away! away! for I will fly to thee,<br>Not charioted by Bacchus and his pards,<br>But on the viewless wings of Poesy"],

	[/\bmy (dull|stupid|idiotic|worthless|tired|broken|exhausted) (brain|mind|ideas)\b|\bmy (brain|mind|ideas) (is|are) (so )?(dull|stupid|idiotic|worthless|tired|broken|exhausted)\b/i,
		"Though the dull brain perplexes and retards"],

	[/\ban? (Aries|Taurus|Gemini|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\b|\b(I'm|she's|he's) (such )?a Cancer\b/i,
		"Already with thee! tender is the night,<br>And haply the Queen-Moon is on her throne,<br>Cluster'd around by all her starry Fays"],

	[/\bgreen and black\b|\bdark green\b|\bmossy?\b|\blichens?\b|\bfung(us|al)\b|\bmoldy?\b/i,
		"But here there is no light,<br>Save what from heaven is with the breezes blown<br>Through verdurous glooms and winding mossy ways."],

	[/\b(incense|aromatherapy|mumm(y|ification)|mangos?|apples|lemons?|oranges?|plums?|grapes?|papayas?|grapefruits?)\b|the \w+, the \w+, and the \w+-\w+ \w+/i,
		"I cannot see what flowers are at my feet,<br>Nor what soft incense hangs upon the boughs,<br>But, in embalmed darkness, guess each sweet<br>Wherewith the seasonable month endows<br>The grass, the thicket, and the fruit-tree wild"],

	[/\b\w+thorn\b|\bprickly\b|\bviolets\b|\bcovered (up )in leaves\b|\bmid-(April|May|June)\b|\bsummer (evenings|nights)|\w+'s eldest (child|son|daughter)/i,
		"White hawthorn, and the pastoral eglantine;<br>Fast fading violets cover'd up in leaves;<br>And mid-May's eldest child,<br>The coming musk-rose, full of dewy wine,<br>The murmurous haunt of flies on summer eves."],

	[/^\b[A-Z]\w+ I \w+[;:!.]|\bhalf in love\b|(with|for|of|by) ([a-z]\w+)? Death|\bgood way to die\b/,
		"Darkling I listen; and, for many a time<br>I have been half in love with easeful Death"],

	[/\b(thinking|dreaming|singing|writing|wrote|sang|dreamed|dreampt|longed) (about|of|for) death\b/i,
		"Call'd him soft names in many a mused rhyme,<br>To take into the air my quiet breath"],

	[/\b(Now more than ever it seems)\b|\bwant(s|ed|ing)? the pain to (just )?(stop|end)\b|\bin (such )?ecstasy!|\b(too|so|really) (fucking )?emo\b/i,
		"Now more than ever seems it rich to die,<br>To cease upon the midnight with no pain,<br>While thou art pouring forth thy soul abroad<br>In such an ecstasy!"],

	[/\b(my grave|my burial|my death|my demise|my corpse|turn to (grass|dirt)|requiem|Mozart's|Verdi's|about death)\b|\bbecome a [a-z]o[a-z]|\bstill you would \w+,/i,
		"Still wouldst thou sing, and I have ears in vain—<br>To thy high requiem become a sod."],

	[/\b(born (to die|for death|undying))\b|, \w+ [A-Z]\w+!|\b immortal B\w+/,
		"Thou wast not born for death, immortal Bird!"],

	[/\b(ancient|vintage|antique|old|aged) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bby [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+[aeiou]+[b-df-hj-np-tv-z]+[aeiou]+[b-df-hj-np-tv-z]+\b (and|or) [b-df-hj-np-tv-z]+[aeiou]+[b-df-hj-np-tv-z]+\b/i,
		"No hungry generations tread thee down;<br>The voice I hear this passing night was heard<br>In ancient days by emperor and clown"],

	[/\bs\w+(-| )s\w+ song\b|\bm\w+ melod(y|ies)|\bthe [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b of [B-DF-HJ-NP-TV-Z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bwhen, \w+ (for|of|in|by) \w+,|\bthe alien [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b/,
		"Perhaps the self-same song that found a path<br>Through the sad heart of Ruth, when, sick for home,<br>She stood in tears amid the alien corn"],

	[/\bha[ds] charmed\b|\bf\w+ l\w+ f\w+\b|\b(casements?|lattice[sd]?|awning|hinged)\b|\bforlorn\./i,
		"The same that oft-times hath<br>Charm'd magic casements, opening on the foam<br>Of perilous seas, in faery lands forlorn."],

	[/[.!?] +F\w+!|\b[Bb]ell\b.{1,20}[Tt]oll(s|ed)?|\b[Tt]he very \w+/,
		"Forlorn! the very word is like a bell<br>To toll me back from thee to my sole self!"],

	[/\b(Goodbye!|Later!|See ?ya!|Adios!|[Ss]he is (famous|well-known) for|([Tt]he i|I)(magination|nspiration) can('t|not)?)/,
		"Adieu! the fancy cannot cheat so well<br>As she is fam'd to do, deceiving elf."],

	[/\b(up|over|beyond|through|past|around) the (\w+ )?(streams?|hills?(-sides?)?|meadows?|dales?|mountains?|rivers?|forests?|woods?|stars|cliffs?|valleys?|fields?|streams?|beach(es)?|ponds?|hills?|brook?|trees?|gardens?|coasts?)[.,;:?!]/i,
		"Adieu! adieu! thy plaintive anthem fades<br>Past the near meadows, over the still stream,<br>Up the hill-side"],

	[/\b((just|only) an? (echo|dream|memory))\b|\bnightingale\b|\bbird('s)? ?song\b|(\b(empty|alone|sad|depressed|confused|miserable|bereft) again\b)|\balready (so |really )?far away\b|\bcouldn't hear (it|the song|the music) anymore\b|\bearshot\b|\balready gone\b|\bone hand clapping\b|\bwoke\b|\babout my dream\b/i,
		"and now 'tis buried deep<br>In the next valley-glades:<br>Was it a vision, or a waking dream?"],


	//ode on a grecian urn

	[/(\b\w+ed (bride|wife|husband)\b|\b-child\b|\bof quiet\b|\bof silence\b)|of \w+ness\b|s\w+ and s\w+\b t[aeiou]\w+\b|still un\w+ed\b/i,
		"Thou still unravish'd bride of quietness,<br>Thou foster-child of silence and slow time"],

	[/\b(of the forest|my rhyme|historian of)\b|, who \b(can't|can)\b|\ba \w+ \b(story|tale|history|drama|narrative)\b|\b(?:my|our)\b \b(rhyme|echo|melody)\b/i,
		"Sylvan historian, who canst thus express<br>A flowery tale more sweetly than our rhyme"],	

	[/\b(legend|legendary|haunts|of (deities|gods)|(gods|deities) (and|or) (humans|mortals))\b/i,
		 "What leaf-fring'd legend haunts about thy shape<br>Of deities or mortals, or of both,"],

	[/\b([Ii]n (Tempe|Delphi|Naxos|Byzantium)|(dales|valleys|hollows|dells|vales) of [A-Z]\w+)\b/,
		"Of deities or mortals, or of both,<br>In Delphi or the dales of Arcady?"],

	[/\b(What men|What women|loth)\b|(\bWhat [a-z ]+\? {0,}){3,}|(\bWhat (mad|wild|crazy|insane) \w+[!?])/,
		"What men or gods are these? What maidens loth?<br>What mad pursuit?  What struggle to escape?<br>What pipes and timbrels? What wild ecstasy?"],

	[/\b([A-Z]\w+d (songs|melodies) are)\b|\bthose \w+ are \w+er\b|\b(\w+s are sweet)\b/,
		"Heard melodies are sweet, but those unheard<br>Are sweeter"],	

	[/\byour? soft \w+\b|\bplay on\b|\bof no t\w+/i,
		"therefore, ye soft pipes, play on;<br>Not to the sensual ear, but, more endear'd,<br>Pipe to the spirit ditties of no tone"],

	[/\bt\w+ (be|are|were|) (bare|empty|naked)|\b[A-Z]\w+ youth|, beneath the \w+/i,
		"Fair youth, beneath the trees, thou canst not leave<br>Thy song, nor ever can those trees be bare"],

	[/\ba \w+ lover\b|\bnever,? never\b|\byou can kiss\b|\bnear the goal\b/i,
		"Bold Lover, never, never canst thou kiss,<br>Though winning near the goal yet, do not grieve"],

	[/\b(your bliss|(cannot|can't|won't) fade)\b/i,
		"She cannot fade, though thou hast not thy bliss,<br>For ever wilt thou love, and she be fair!"],

	[/\bhappy,? happy\b|\bbid (?:\w+ )+adieu/i,
		"Ah, happy, happy boughs! that cannot shed<br>Your leaves, nor ever bid the Spring adieu"],

	[/\ba \w+ (?:musician|drummer|composer|singer)\b|\bfor ?ever n\w+\b|\b(?:happy|perfect|joyful|beautiful|perfect|sweet) (?:love|dream|joy|life|friendship)\b/i,
		"And, happy melodist, unwearied,<br>For ever piping songs for ever new;<br>More happy love!"],

	[/\bfor ?ever young\b|\bpanting\b|\bto be (?:enjoyed|appreciated|spent)\b/i,
		"For ever warm and still to be enjoy'd,<br>or ever panting, and for ever young;"],

	[/\bburning (?:forehead|face|mind|skin|rash|hands?|arms?|tongue)\b|\bso (?:thirsty|parched)\b|\ba h\w+ h\w+-s\w+\b|\bcloyed\b|\bleaves (?:a|my|your|the) heart\b|\ba \w+ing \w+,? and a \w+ing \w+\b/i,
		"All breathing human passion far above,<br>That leaves a heart high-sorrowful and cloy'd,<br>A burning forehead, and a parching tongue."],

	[/\b\w+ious priest\b|\bsilken\b|\bgarland\b|\bmoo(?:ing|s|ed)\b|\bcow moo\w+\b|\bwhat (green|blue|red|yellow|orange|black|white)\b/i,
		"Who are these coming to the sacrifice?<br>To what green altar, O mysterious priest,<br>Lead'st thou that heifer lowing at the skies,<br>And all her silken flanks with garlands drest?"],

	[/\w+-built\b|\b(charming|quaint|little|picturesque|small|cute) (town|village|community|suburb|city)\b|\bwith peaceful\b|\bpious\b|\bsea[ -]?shore\b|\bcitadel\b|\bis emptied of\b/i,
		"What little town by river or sea shore,<br>Or mountain-built with peaceful citadel,<br>Is emptied of this folk, this pious morn?"],

	[/\bbe silent\b|\bnot a soul\b|\bcan't ever return\b|\bdesolate\b/i,
		"And, little town, thy streets for evermore<br>Will silent be; and not a soul to tell<br>Why thou art desolate, can e'er return."],

	[/\bOh? [A-Z]\w+ \w+!|\b(embroidery|braid|ponytail|pigtails?|plait)\b|\bwith forest \w+s\b|\b\w+(en|ed)\b weed\b/i,
		"O Attic shape! Fair attitude! with brede<br>Of marble men and maidens overwrought,<br>With forest branches and the trodden weed"],

	[/\beternity\b|\bout of (my|your|their) minds?\b|\bC\w+ [A-Z]\w+!/i,
		"Thou, silent form, dost tease us out of thought<br>As doth eternity: Cold Pastoral!"],

	[/\bold age\b|\bthis generation\b|\bwoe\b|\bwasted? (my|your|our|their) (life|lives)\b/i,
		"When old age shall this generation waste,<br>Thou shalt remain, in midst of other woe<br>Than ours"],

	[/\b[Aa] friend to\b|\b[Aa]ll I know is\b|\b[Aa]ll you need to know\b|\b(Beauty|Love|Truth|Power|Wisdom) is\b/,
		"A friend to man, to whom thou say'st,<br>\"Beauty is truth, truth beauty,—that is all<br>Ye know on earth, and all ye need to know.\""],

]