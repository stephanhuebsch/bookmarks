## EPÜ
``javascript:(function(){x=prompt("Artikel: a87\nAusfO: r12a\nGebO: g2");if(/[aA][1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/a"+x.substring(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/r"+x.substring(1)+".html"}else if(/[fFgG][1-9][0-9]{0,1}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/f"+x.substring(1)+".html"}})();``

## PCT
``javascript:(function(){x=prompt("Artikel: a19\nAusfO: r13bis\nVerwV: v104");if(/[aA][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/de/texts/articles/a"+x.substring(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/rules/r"+x.substring(1)+".html"}else if(/[sSvV][1-9][0-9]{2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/ai/s"+x.substring(1)+".html"}})();``

## Annex
``javascript:(function(){var userInput=prompt('Bitte den zweistelligen Länder-Code (zB: AT) eingeben:');if(userInput)window.location.href='https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code='+encodeURIComponent(userInput)+'&doc-lang=en';})();``

## PatG
``javascript:(function(){x=prompt("PatG 1970, bitte gewünschten Paragraphen eingeben:");if(/[1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="http://www.ris.bka.gv.at/Ergebnis.wxe?Abfrage=Bundesnormen&Index=&Titel=Patentgesetz&VonParagraf="+x+"&BisParagraf="+x+"&SkipToDocumentPage=true"}})();``

## RIS
``javascript:(function(){const mappings={"patg":"10002181","gmg":"10003230","mschg":"10002180","muschg":"10002963","patveg":"10002458","patawg":"10002093","pag":"20003819","io":"10001736","eo":"10001700","zpo":"10001699","abgb":"10001622","ugb":"10001702","kschg":"10002462","bvg":"10000138","kartg":"20004174","uwg":"10002665","jn":"10001697","egjn":"10001696","egzpo":"10001698","oghg":"10000449","zustg":"10005522","gog":"10000009","egeo":"10001916","ieg":"10001735","außstrg":"20003047","rpflg":"10002703","gmbhg":"10001720","aktg":"10002070"};const userInput=prompt("Bitte Eingabe eingeben (z.B. io, eo, zpo):");if(userInput){const lowerCaseInput=userInput.toLowerCase();if(mappings[lowerCaseInput]){const url=`https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=${mappings[lowerCaseInput]}`;window.location.href=url;}else{alert("Ungültige Eingabe. Bitte versuche es erneut.");}}else{alert("Eingabe wurde abgebrochen.");}})();``
