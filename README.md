## EPÜ
``javascript:(function(){x=prompt("Artikel: a87\nAusfO: r12a\nGebO: g2");if(/[aA][1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/a"+x.substring(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/r"+x.substring(1)+".html"}else if(/[fFgG][1-9][0-9]{0,1}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/f"+x.substring(1)+".html"}})();``

## PCT
``javascript:(function(){x=prompt("Artikel: a19\nAusfO: r13bis\nVerwV: v104");if(/[aA][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/de/texts/articles/a"+x.substring(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/rules/r"+x.substring(1)+".html"}else if(/[sSvV][1-9][0-9]{2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/ai/s"+x.substring(1)+".html"}})();``

## Annex
``javascript:(function(){var userInput=prompt('Bitte den zweistelligen Länder-Code (zB: AT) eingeben:');if(userInput)window.location.href='https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code='+encodeURIComponent(userInput)+'&doc-lang=en';})();``

## PatG
``javascript:(function(){x=prompt("PatG 1970, bitte gewünschten Paragraphen eingeben:");if(/[1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="http://www.ris.bka.gv.at/Ergebnis.wxe?Abfrage=Bundesnormen&Index=&Titel=Patentgesetz&VonParagraf="+x+"&BisParagraf="+x+"&SkipToDocumentPage=true"}})();``

## RIS
``javascript:(function(){const paragrafMappings={"patg":"10002181","gmg":"10003230","mschg":"10002180","muschg":"10002963","patveg":"10002458","patv-eg":"10002458","patawg":"10002093","patanwg":"10002093","pag":"20003819","io":"10001736","eo":"10001700","zpo":"10001699","abgb":"10001622","ugb":"10001702","kschg":"10002462","kartg":"20004174","uwg":"10002665","jn":"10001697","oghg":"10000449","zustg":"10005522","gog":"10000009","ieg":"10001735","außtrg":"20003047","rpflg":"10002703","gmbhg":"10001720","aktg":"10002070","avg":"10005768","vwgg":"10000795","vfgg":"10000245","depotg":"10002142","kmg":"20010729","bwg":"10004827","wechselg":"10001934","gebg":"10003882","wettbg":"20001898","asgg":"10000813","geo":"10000240","iesg":"10008418","urg":"10003479","reo":"20011622","astg":"20009242"};const artikelMappings={"pvü":"10002271","bvg":"10000138","b-vg":"10000138","egjn":"10001696","egzpo":"10001698","egeo":"10001916"};let input=prompt("Bitte Eingabe eingeben (z.B. patg oder '22a patg'):");if(input){let trimmed=input.trim().toLowerCase();let match=trimmed.match(/^(\d+[a-z]?)\s+(.+)$/);if(match){let number=match[1];let lawKey=match[2].trim();if(paragrafMappings[lawKey]){window.location.href=`https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(paragrafMappings[lawKey])}&Artikel=&Paragraf=${encodeURIComponent(number)}`}else if(artikelMappings[lawKey]){window.location.href=`https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(artikelMappings[lawKey])}&Artikel=${encodeURIComponent(number)}&Paragraf=`}else{alert("Ungültige Gesetzeskennung. Bitte versuche es erneut.")}}else{if(paragrafMappings[trimmed]){window.location.href=`https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(paragrafMappings[trimmed])}`}else if(artikelMappings[trimmed]){window.location.href=`https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(artikelMappings[trimmed])}`}else{alert("Ungültige Eingabe. Bitte versuche es erneut.")}}}else{alert("Eingabe wurde abgebrochen.")}})();``

## Alle
javascript:(function(){
    // -------------------------
    // Define mapping objects
    // -------------------------
    const paragrafMappingsOriginal = {
        "PatG": "10002181", "GMG": "10003230", "MSchG": "10002180",
        "MuSchG": "10002963", "PatVEG": "10002458", "PatV-EG": "10002458",
        "PatAwg": "10002093", "PatAnwG": "10002093", "PAG": "20003819",
        "IO": "10001736", "EO": "10001700", "ZPO": "10001699", "ABGB": "10001622",
        "UGB": "10001702", "KSchG": "10002462", "KartG": "20004174",
        "UWG": "10002665", "JN": "10001697", "OGHG": "10000449", "ZustG": "10005522",
        "GOG": "10000009", "IEG": "10001735", "AußStrG": "10003047", "RpflG": "10002703",
        "GmbHG": "10001720", "AktG": "10002070", "AVG": "10005768", "VwGG": "10000795",
        "VfGG": "10000245", "DepotG": "10002142", "KMG": "20010729", "BWG": "10004827",
        "WechselG": "10001934", "GebG": "10003882", "WettbG": "20001898",
        "ASGG": "10000813", "GEO": "10000240", "IESG": "10008418", "URG": "10003479",
        "Reo": "20011622", "AStG": "20009242"
    };
    const artikelMappingsOriginal = {
        "PVÜ": "10002271", "BVG": "10000138", "B-VG": "10000138",
        "EGJN": "10001696", "EGZPO": "10001698", "EGEO": "10001916"
    };
    // New special mappings – note: the keys here have no associated lookup number,
    // but have a URL template for when a number is given ("withNumber")
    // and a fixed URL when no number is provided ("noNumber").
    const spezialMappingsOriginal = {
        "EPÜ": {
            noNumber: "https://www.epo.org/de/legal/epc/2020/convention.html",
            withNumber: "https://www.epo.org/de/legal/epc/2020/a{num}.html"
        },
        "EPÜ AusfO": {
            noNumber: "https://www.epo.org/de/legal/epc/2020/regulations.html",
            withNumber: "https://www.epo.org/de/legal/epc/2020/r{num}.html"
        },
        "EPÜ GebO": {
            noNumber: "https://www.epo.org/de/legal/epc/2020/rfees.html",
            withNumber: "https://www.epo.org/de/legal/epc/2020/f{num}.html"
        },
        "PCT": {
            noNumber: "https://www.wipo.int/pct/de/texts/articles/atoc.html",
            withNumber: "https://www.wipo.int/pct/de/texts/articles/a{num}.html"
        },
        "PCT AusfO": {
            noNumber: "https://www.wipo.int/pct/en/texts/rules/rtoc_short.html",
            withNumber: "https://www.wipo.int/pct/en/texts/rules/r{num}.html"
        },
        "PCT VerwV": {
            noNumber: "https://www.wipo.int/pct/en/texts/ai/ai_index.html",
            withNumber: "https://www.wipo.int/pct/en/texts/ai/s{num}.html"
        },
        "EPGÜ": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/upca.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/upca_{num}.html"
        },
        "UPCA": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/upca.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/upca_{num}.html"
        },
        "DOEPS": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/upr.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/upr_{num}.html"
        },
        "UPR": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/upr.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/upr_{num}.html"
        },
        "GebOEPS": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/upf.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/upf_{num}.html"
        },
        "VO 1257/2012": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/eu20121257.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/eu20121257_{num}.html"
        },
        "VO 1260/2012": {
            noNumber: "https://www.epo.org/de/legal/up-upc/2022/eu20121260.html",
            withNumber: "https://www.epo.org/de/legal/up-upc/2022/eu20121260_{num}.html"
        }
    };

    // Build lower-case lookup objects.
    const paragrafMappings = {};
    Object.keys(paragrafMappingsOriginal).forEach(key => {
        paragrafMappings[key.toLowerCase()] = paragrafMappingsOriginal[key];
    });
    const artikelMappings = {};
    Object.keys(artikelMappingsOriginal).forEach(key => {
        artikelMappings[key.toLowerCase()] = artikelMappingsOriginal[key];
    });
    const spezialMappings = {};
    Object.keys(spezialMappingsOriginal).forEach(key => {
        spezialMappings[key.toLowerCase()] = spezialMappingsOriginal[key];
    });

    // Build a sorted list of all keys (original casing) for suggestions.
    const alleGesetzeOriginal = [...Object.keys(paragrafMappingsOriginal), 
                                  ...Object.keys(artikelMappingsOriginal),
                                  ...Object.keys(spezialMappingsOriginal)]
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    // -------------------------
    // Create modal elements
    // -------------------------
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.maxWidth = "350px";
    modal.style.lineHeight = "18px";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "#F1F3F5"; 
    modal.style.padding = "20px";
    modal.style.border = "1px solid #888";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "rgba(0, 0, 0, 0.4) 6px 6px 12px";
    modal.style.zIndex = "10000";
    modal.style.textAlign = "center";
    modal.style.fontSize = "16px";
    modal.style.fontFamily = "Arial";
    modal.innerHTML = "<p style='font-size: 16px; margin-bottom: 10px; margin-top: 0; font-weight: bold; color: black'>Gesetzestexte</p><p style='font-size: 14px; margin-bottom: 10px; color: black'>Bitte ein Gesetz (zB PatG, ZPO, EPÜ) oder einen konkreten Paragraphen/Artikel (zB 22a&nbsp;PatG) eingeben:</p>";

    // Close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "5px";
    closeButton.style.right = "5px";
    closeButton.style.backgroundColor = "#EA0E00";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "6px";
    closeButton.style.cursor = "pointer";
    closeButton.style.width = "30px";
    closeButton.style.height = "20px";
    closeButton.style.fontSize = "12px";
    closeButton.style.lineHeight = "20px";
    closeButton.style.padding = "0";
    closeButton.onclick = function() {
        modal.remove();
        document.removeEventListener("keydown", escHandler);
        document.body.style.cursor = "default";
    };
    modal.appendChild(closeButton);

    // Input container
    let inputContainer = document.createElement("div");
    inputContainer.style.position = "relative";
    inputContainer.style.display = "flex";
    inputContainer.style.width = "80%";
    inputContainer.style.marginLeft = "10%";
    inputContainer.style.marginRight = "10%";
    modal.appendChild(inputContainer);

    // Input field
    let input = document.createElement("input");
    input.type = "text";
    input.style.backgroundColor = "white";
    input.style.color = "black";
    input.style.padding = "5px";
    input.style.fontSize = "16px";
    input.style.width = "70%";
    input.style.border = "1px solid #888";
    input.style.borderRadius = "5px";
    input.style.outline = "none";
    inputContainer.appendChild(input);

    // Suggestions dropdown
    let suggestions = document.createElement("ul");
    suggestions.style.listStyleType = "none";
    suggestions.style.textAlign = "left";
    suggestions.style.fontFamily = "Arial";
    suggestions.style.color = "black";
    suggestions.style.lineHeight = "18px";
    suggestions.style.padding = "0";
    suggestions.style.margin = "5px 0 0 0";
    suggestions.style.maxHeight = "150px";
    suggestions.style.overflowY = "auto";
    suggestions.style.border = "1px solid #888";
    suggestions.style.borderRadius = "5px";
    suggestions.style.position = "absolute";
    suggestions.style.top = "calc(100% - 6px)";
    suggestions.style.left = "0";
    suggestions.style.width = "calc(70% - 1px)";
    suggestions.style.background = "white";
    suggestions.style.display = "none";
    inputContainer.appendChild(suggestions);

    // Submit button
    let button = document.createElement("button");
    button.innerText = "Suche";
    button.style.marginLeft = "10px";
    button.style.padding = "3px 8px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#888";
    button.style.color = "#F1F3F5";
    button.style.border = "0";
    button.style.borderRadius = "5px";
    inputContainer.appendChild(button);

    // Additional info text
    let text_unten = document.createElement("div");
    text_unten.innerHTML = "<p style='color: black; font-family: Arial; font-size: 12px; font-style: italic; margin-top: 8px; margin-bottom: 0'>Groß- und Kleinschreibung wird ignoriert</p>";
    modal.appendChild(text_unten);

    // -------------------------
    // Variables for suggestions
    // -------------------------
    let selectedSuggestionIndex = -1;
    let suppressInputEvent = false;

    function updateSuggestions() {
        if (suppressInputEvent) return;
        let query = input.value.toLowerCase();
        suggestions.innerHTML = "";
        selectedSuggestionIndex = -1;
        let match = query.match(/^(?:(\d+[a-zA-Z]?\s+))?(.*)$/);
        let prefix = match[1] || "";
        let searchTerm = match[2] || "";
        let matches = alleGesetzeOriginal.filter(gesetz => 
            gesetz.toLowerCase().includes(searchTerm)
        );
        if (matches.length > 0 && searchTerm.length > 0) {
            suggestions.style.display = "block";
            matches.forEach(gesetz => {
                let item = document.createElement("li");
                item.style.padding = "5px";
                item.style.cursor = "pointer";
                item.style.borderBottom = "1px solid lightgray";
                item.textContent = prefix + gesetz;
                item.onclick = function() {
                    input.value = prefix + gesetz;
                    suggestions.style.display = "none";
                };
                suggestions.appendChild(item);
            });
        } else {
            suggestions.style.display = "none";
        }
    }

    input.addEventListener("input", function(e) {
        if (!suppressInputEvent) {
            updateSuggestions();
        }
    });
    input.addEventListener("blur", function() {
        setTimeout(() => suggestions.style.display = "none", 200);
    });
    input.addEventListener("focus", updateSuggestions);

    input.addEventListener("keydown", function(event) {
        if (suggestions.style.display === "block") {
            let items = suggestions.getElementsByTagName("li");
            if (event.key === "ArrowDown") {
                event.preventDefault();
                if (selectedSuggestionIndex < items.length - 1) {
                    selectedSuggestionIndex++;
                } else {
                    selectedSuggestionIndex = 0;
                }
                for (let i = 0; i < items.length; i++) {
                    items[i].style.backgroundColor = (i === selectedSuggestionIndex) ? "#ddd" : "";
                }
                if (items[selectedSuggestionIndex]) {
                    suppressInputEvent = true;
                    input.value = items[selectedSuggestionIndex].textContent;
                    setTimeout(() => { suppressInputEvent = false; }, 0);
                    items[selectedSuggestionIndex].scrollIntoView({ block: "nearest" });
                }
                return;
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                if (selectedSuggestionIndex > 0) {
                    selectedSuggestionIndex--;
                } else {
                    selectedSuggestionIndex = items.length - 1;
                }
                for (let i = 0; i < items.length; i++) {
                    items[i].style.backgroundColor = (i === selectedSuggestionIndex) ? "#ddd" : "";
                }
                if (items[selectedSuggestionIndex]) {
                    suppressInputEvent = true;
                    input.value = items[selectedSuggestionIndex].textContent;
                    setTimeout(() => { suppressInputEvent = false; }, 0);
                    items[selectedSuggestionIndex].scrollIntoView({ block: "nearest" });
                }
                return;
            } else if (event.key === "Enter") {
                if (selectedSuggestionIndex >= 0) {
                    event.preventDefault();
                    let selectedItem = items[selectedSuggestionIndex];
                    if (selectedItem) {
                        input.value = selectedItem.textContent;
                        suggestions.style.display = "none";
                        submitInput();
                    }
                    return;
                }
            }
        }
        if (event.key === "Enter") {
            submitInput();
        }
    });

    // -------------------------
    // Submission: special mappings
    // -------------------------
    function submitInput() {
        document.body.style.cursor = "progress";
        let trimmed = input.value.trim().toLowerCase();
        // First, check if the input starts with a number followed by some text.
        let match = trimmed.match(/^(\d+[a-z]?)\s+(.+)$/);
        if (match) {
            let number = match[1];
            let lawKey = match[2].trim().toLowerCase();
            // Check for special mapping first.
            if(spezialMappings.hasOwnProperty(lawKey)) {
                // Replace {num} with the number.
                let urlTemplate = spezialMappings[lawKey].withNumber;
                let finalUrl = urlTemplate.replace("{num}", number);
                window.location.href = finalUrl;
                return;
            }
            // Fall back to normal mappings.
            if (paragrafMappings[lawKey]) {
                window.location.href = `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(paragrafMappings[lawKey])}&Artikel=&Paragraf=${encodeURIComponent(number)}`;
            } else if (artikelMappings[lawKey]) {
                window.location.href = `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(artikelMappings[lawKey])}&Artikel=${encodeURIComponent(number)}&Paragraf=`;
            } else {
                console.log("Ungültige Eingabe.");
                document.body.style.cursor = "default";
            }
        } else {
            // No number provided.
            if(spezialMappings.hasOwnProperty(trimmed)) {
                window.location.href = spezialMappings[trimmed].noNumber;
                return;
            }
            if (paragrafMappings[trimmed]) {
                window.location.href = `https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(paragrafMappings[trimmed])}`;
            } else if (artikelMappings[trimmed]) {
                window.location.href = `https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(artikelMappings[trimmed])}`;
            } else {
                console.log("Ungültige Eingabe.");
                document.body.style.cursor = "default";
            }
        }
    }

    button.onclick = submitInput;
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.remove();
            document.body.style.cursor = "default";
        }
    });

    document.body.appendChild(modal);
    input.focus();
})();
