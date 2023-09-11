## EPÜ
``javascript:(function(){x=prompt("Artikel: a87\nAusfO: r12a\nGebO: g2");if(/[aA][1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/a"+x.substring(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/r"+x.substring(1)+".html"}else if(/[fFgG][1-9][0-9]{0,1}[a-z]{0,1}/.test(x)){window.location="https://www.epo.org/de/legal/epc/2020/f"+x.substring(1)+".html"}})();``

## PCT
``javascript:(function(){x=prompt("Artikel: a19\nAusfO: r13bis\nVerwV: s104");if(/[aA][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/de/texts/articles/a"+x.substring(1)+".html"}else if(/[rR][1-9][0-9]{0,2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/rules/r"+x.substring(1)+".html"}else if(/[sSvV][1-9][0-9]{2}[a-z]{0,9}/.test(x)){window.location="https://www.wipo.int/pct/en/texts/ai/s"+x.substring(1)+".html"}})();``

## PatG
``javascript:(function(){x=prompt("PatG 1970, bitte gewünschten Paragraphen eingeben:");if(/[1-9][0-9]{0,2}[a-z]{0,1}/.test(x)){window.location="http://www.ris.bka.gv.at/Ergebnis.wxe?Abfrage=Bundesnormen&Index=&Titel=Patentgesetz&VonParagraf="+x+"&BisParagraf="+x+"&SkipToDocumentPage=true"}})();``
