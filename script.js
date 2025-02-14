javascript:(function(){
    // -------------------------
    // Define mapping objects
    // -------------------------
    const paragrafMappingsOriginal = {
        "PatG": "10002181", "GMG": "10003230", "MSchG": "10002180",
        "MuSchG": "10002963", "PatV-EG": "10002458",
        "PatAnwG": "10002093", "PAG": "20003819",
        "IO": "10001736", "EO": "10001700", "ZPO": "10001699", "ABGB": "10001622",
        "UGB": "10001702", "KSchG": "10002462", "KartG": "20004174",
        "UWG": "10002665", "JN": "10001697", "OGHG": "10000449", "ZustG": "10005522",
        "GOG": "10000009", "IEG": "10001735", "AußStrG": "20003047", "RpflG": "10002703",
        "GmbHG": "10001720", "AktG": "10002070", "AVG": "10005768", "VwGG": "10000795",
        "VfGG": "10000245", "DepotG": "10002142", "KMG": "20010729", "BWG": "10004827",
        "WechselG": "10001934", "GebG": "10003882", "WettbG": "20001898",
        "ASGG": "10000813", "GEO": "10000240", "IESG": "10008418", "URG": "10003479",
        "Reo": "20011622", "AStG": "20009242", "SchZG": "10003470", "HlSchG": "10002876",
        "SortSchG": "20001503", "PPG": "20010791", "UrhG": "10001848", "FlexKapGG": "20012473"
    };
    const artikelMappingsOriginal = {
        "PVÜ": "10002271", "B-VG": "10000138",
        "EGJN": "10001696", "EGZPO": "10001698", "EGEO": "10001916"
    };
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
        },
        "UMV": {
            noNumber: "https://eur-lex.europa.eu/legal-content/DE/TXT/?qid=1506417891296&uri=CELEX:32017R1001",
            withNumber: "https://eur-lex.europa.eu/legal-content/DE/TXT/?qid=1506417891296&uri=CELEX:32017R1001#art_{num}"
        }
    };

    // -------------------------
    // Build normalized mapping objects (lowercase & ignore hyphens)
    // -------------------------
    function buildNormalizedMapping(mappingOriginal) {
        const normalized = {};
        Object.keys(mappingOriginal).forEach(key => {
            normalized[key.toLowerCase().replace(/-/g, '')] = mappingOriginal[key];
        });
        return normalized;
    }

    const paragrafMappingsNorm = buildNormalizedMapping(paragrafMappingsOriginal);
    const artikelMappingsNorm  = buildNormalizedMapping(artikelMappingsOriginal);
    const spezialMappingsNorm  = buildNormalizedMapping(spezialMappingsOriginal);

    // -------------------------
    // Build lower-case lookup objects for suggestions (keep original casing for display)
    // -------------------------
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
    modal.style.boxShadow = "rgb(0, 0, 0) 1px 1px 0px, rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px";
    modal.style.borderBottom = "6px solid rgb(136,136,136)";
    modal.style.zIndex = "10000";
    modal.style.textAlign = "center";
    modal.style.fontSize = "16px";
    modal.style.fontFamily = "Arial";
    modal.style.hyphens = "auto";
    modal.style.lineHeight = "20px";

    let p_title = document.createElement("p");
    p_title.style.fontSize = "16px";
    p_title.style.margin = "0 0 10px 0";
    p_title.style.fontWeight = "bold";
    p_title.style.color = "#333";
    p_title.style.lineHeight = "20px";
    p_title.textContent = "Gesetzestexte";

    let p_text = document.createElement("p");
    p_text.style.fontSize = "14px";
    p_text.style.margin = "0 0 10px 0";
    p_text.style.color = "#333";
    p_text.style.textAlign = "left";
    p_text.style.lineHeight = "20px";
    p_text.innerHTML = "Bitte ein <abbr title='zB PatG, ZPO, EPÜ, ...'>Gesetz</abbr> oder einen <abbr title='zB 22a PatG, 381 ZPO, 123 EPÜ, ...'>konkreten Paragraphen/Artikel</abbr> eingeben:";
    modal.appendChild(p_title);
    modal.appendChild(p_text);

    // Close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "✕";
    closeButton.classList.add("hoverRed");
    closeButton.style.position = "absolute";
    closeButton.style.top = "3px";
    closeButton.style.right = "3px";
    closeButton.style.backgroundColor = "rgba(0, 0, 0, 0)";
    closeButton.style.color = "#333";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "6px";
    closeButton.style.cursor = "pointer";
    closeButton.style.width = "20px";
    closeButton.style.height = "20px";
    closeButton.style.fontSize = "12px";
    closeButton.style.lineHeight = "20px";
    closeButton.style.padding = "0";
    closeButton.style.boxShadow = "none";
    closeButton.style.textShadow = "none";
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
    inputContainer.style.lineHeight = "20px";
    modal.appendChild(inputContainer);

    // Input field
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "PatG, 15a GMG, ...";
    input.style.backgroundColor = "white";
    input.style.color = "#333";
    input.style.fontFamily = "Arial";
    input.style.padding = "5px";
    input.style.margin = "0";
    input.style.fontSize = "16px";
    input.style.width = "70%";
    input.style.border = "1px solid #888";
    input.style.borderRadius = "5px";
    input.style.outline = "none";
    input.style.lineHeight = "20px";
    input.style.cursor = "auto";
    input.style.height = "auto";
    input.style.boxShadow = "none";
    input.style.boxSizing = "border-box";
    inputContainer.appendChild(input);

    // Suggestions dropdown
    let suggestions = document.createElement("ul");
    suggestions.style.listStyleType = "none";
    suggestions.style.textAlign = "left";
    suggestions.style.fontFamily = "Arial";
    suggestions.style.color = "#333";
    suggestions.style.lineHeight = "20px";
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
    suggestions.style.fontWeight = "normal";
    suggestions.style.display = "none";
    inputContainer.appendChild(suggestions);

    // Submit button
    let button = document.createElement("button");
    button.innerText = "Suche";
    button.classList.add("buttonSuche");    
    button.style.margin = "0 0 0 10px";
    button.style.padding = "3px 8px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#bbb";
    button.style.color = "#333";
    button.style.border = "0";
    button.style.borderBottom = "4px solid #999";
    button.style.borderRadius = "5px";
    button.style.lineHeight = "20px";
    button.style.fontWeight = "normal";
    button.style.textTransform = "none";
    button.style.boxShadow = "none";
    button.style.webkitBoxSizing = "content-box";
    button.style.boxSizing = "content-box";
    button.style.height = "auto";
    button.style.textShadow = "none";
    inputContainer.appendChild(button);

    // Additional info text
    let text_unten = document.createElement("p");
    text_unten.style.color = "#333";
    text_unten.style.fontFamily = "Arial";
    text_unten.style.fontSize = "12px";
    text_unten.style.fontStyle = "italic";
    text_unten.style.marginTop = "8px";
    text_unten.style.marginBottom = "0";
    text_unten.style.lineHeight = "20px";
    text_unten.innerHTML = "Groß- und Kleinschreibung wird ignoriert &ndash; ";
    let github_link = document.createElement("a");
    github_link.style.color = "#333";
    github_link.classList.add("hoverRed");    
    github_link.style.textDecoration = "none";
    github_link.style.lineHeight = "20px";
    github_link.style.fontWeight = "bold";
    github_link.style.border = "none";
    github_link.href = "https://github.com/stephanhuebsch/bookmarks/";
    github_link.innerText = "Quellcode";
    text_unten.appendChild(github_link);
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
        // Remove hyphens for matching purposes.
        let sanitizedSearchTerm = searchTerm.replace(/-/g, '');
        let matches = alleGesetzeOriginal.filter(gesetz => {
            let sanitizedGesetz = gesetz.toLowerCase().replace(/-/g, '');
            return sanitizedGesetz.includes(sanitizedSearchTerm);
        });
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
    // Submission: use normalized mappings (ignore hyphens)
    // -------------------------
    function submitInput() {
        document.body.style.cursor = "progress";
        let trimmed = input.value.trim().toLowerCase();
        // Check if the input starts with a number followed by some text.
        let match = trimmed.match(/^(\d+[a-z]?)\s+(.+)$/);
        if (match) {
            let number = match[1];
            // Normalize the law key by removing hyphens.
            let lawKey = match[2].trim().toLowerCase().replace(/-/g, '');
            // Check for special mapping first.
            if(spezialMappingsNorm.hasOwnProperty(lawKey)) {
                let urlTemplate = spezialMappingsNorm[lawKey].withNumber;
                let finalUrl = urlTemplate.replace("{num}", number);
                window.location.href = finalUrl;
                return;
            }
            // Fall back to normal mappings.
            if (paragrafMappingsNorm[lawKey]) {
                window.location.href = `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(paragrafMappingsNorm[lawKey])}&Artikel=&Paragraf=${encodeURIComponent(number)}`;
            } else if (artikelMappingsNorm[lawKey]) {
                window.location.href = `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(artikelMappingsNorm[lawKey])}&Artikel=${encodeURIComponent(number)}&Paragraf=`;
            } else {
                console.log("Ungültige Eingabe.");
                document.body.style.cursor = "default";
                input.style.transition = "border 0.3s ease-in-out, background-color 0.3s ease-in-out";
		input.style.border = "1px solid #BC101D";
		input.style.backgroundColor = "#f1cfd1";
		setTimeout(() => {
			input.style.border = "1px solid #888";
			input.style.backgroundColor = "white";
		}, 1000);
            }
        } else {
            // No number provided.
            let normalizedInput = trimmed.replace(/-/g, '');
            if(spezialMappingsNorm.hasOwnProperty(normalizedInput)) {
                window.location.href = spezialMappingsNorm[normalizedInput].noNumber;
                return;
            }
            if (paragrafMappingsNorm[normalizedInput]) {
                window.location.href = `https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(paragrafMappingsNorm[normalizedInput])}`;
            } else if (artikelMappingsNorm[normalizedInput]) {
                window.location.href = `https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${encodeURIComponent(artikelMappingsNorm[normalizedInput])}`;
            } else {
                console.log("Ungültige Eingabe.");
                document.body.style.cursor = "default";
                input.style.transition = "border 0.3s ease-in-out, background-color 0.3s ease-in-out";
		input.style.border = "1px solid #BC101D";
		input.style.backgroundColor = "#f1cfd1";
		setTimeout(() => {
			input.style.border = "1px solid #888";
			input.style.backgroundColor = "white";
		}, 1000);
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

    const style = document.createElement("style");
    style.textContent = `
        .hoverRed { transition: color 0.3s ease-in-out; }
        .hoverRed:hover { color: #BC101D !important; }
        .buttonSuche:hover { filter: brightness(105%); }
	abbr { cursor: text; text-decoration: underline dotted; }
    `;
    
    document.head.appendChild(style);

    document.body.appendChild(modal);
    input.focus();
})();
