## EPÜ
``javascript:(function(){x=prompt("Artikel EP%C3%9C: a87\nAusfO: r12a\nGebO: f2");if(/[afrAFR][0-9]{1,3}[a-z]{0,9}/.test(x)){window.location="https://new.epo.org/de/legal/epc/2020/"+x.charAt(0).toLowerCase()+x.slice(1)+".html"}})();``

## PCT
``javascript:(function(){x=prompt("Artikel PCT: a19\nAusfO: r13bis\nVerwVor: s104");if(/[aA][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/de/texts/articles/"+x.charAt(0).toLowerCase()+x.slice(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/rules/"+x.charAt(0).toLowerCase()+x.slice(1)+".html"}else if(/[sS][1-9][0-9]{2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/ai/"+x.charAt(0).toLowerCase()+x.slice(1)+".html"}})();``

## PatG
``javascript:(function(){x=prompt("PatG 1970, bitte gewünschten Paragraphen eingeben:");if(/[1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="http://www.ris.bka.gv.at/Ergebnis.wxe?Abfrage=Bundesnormen&Index=&Titel=Patentgesetz&VonParagraf="+x+"&BisParagraf="+x+"&SkipToDocumentPage=true"}})();``
