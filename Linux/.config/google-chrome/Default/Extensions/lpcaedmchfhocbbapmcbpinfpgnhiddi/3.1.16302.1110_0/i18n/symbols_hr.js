var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0tis."},1E4:{other:"00\u00a0tis."},1E5:{other:"000\u00a0tis."},1E6:{other:"0\u00a0mil."},1E7:{other:"00\u00a0mil."},1E8:{other:"000\u00a0mil."},1E9:{other:"0\u00a0mlr."},1E10:{other:"00\u00a0mlr."},1E11:{other:"000\u00a0mlr."},1E12:{other:"0\u00a0bil."},1E13:{other:"00\u00a0bil."},1E14:{other:"000\u00a0bil."}},a:{1E3:{other:"0 tisu\u0107a"},1E4:{other:"00 tisu\u0107a"},1E5:{other:"000 tisu\u0107a"},1E6:{other:"0 milijuna"},1E7:{other:"00 milijuna"},
1E8:{other:"000 milijuna"},1E9:{other:"0 milijardi"},1E10:{other:"00 milijardi"},1E11:{other:"000 milijardi"},1E12:{other:"0 bilijuna"},1E13:{other:"00 bilijuna"},1E14:{other:"000 bilijuna"}}};var d={I:"y",la:"y G",J:"MMM y",K:"MMMM y",s:"MMM d",u:"MMMM dd",w:"M/d",v:"MMMM d",V:"MMM d, y",H:"EEE, MMM d",ja:"EEE, MMM d, y",f:"d"},d={I:"y.",la:"y. G",J:"LLL y.",K:"LLLL y.",s:"d. MMM",u:"dd. MMMM",w:"dd.MM.",v:"d. MMMM",V:"d. MMM y.",H:"EEE, d. MMM",ja:"EEE, d. MMM y.",f:"d."};var h;
h={R:["pr. Kr.","p. Kr."],P:["prije Krista","poslije Krista"],W:"1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12.".split(" "),ca:"1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12.".split(" "),U:"sije\u010dnja velja\u010de o\u017eujka travnja svibnja lipnja srpnja kolovoza rujna listopada studenoga prosinca".split(" "),ba:"sije\u010danj velja\u010da o\u017eujak travanj svibanj lipanj srpanj kolovoz rujan listopad studeni prosinac".split(" "),Z:"sij velj o\u017eu tra svi lip srp kol ruj lis stu pro".split(" "),ea:"sij velj o\u017eu tra svi lip srp kol ruj lis stu pro".split(" "),ia:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
ga:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),aa:"ned pon uto sri \u010det pet sub".split(" "),fa:"ned pon uto sri \u010det pet sub".split(" "),X:"NPUS\u010cPS".split(""),da:"npus\u010dps".split(""),$:["1kv","2kv","3kv","4kv"],Y:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],M:["AM","PM"],N:["EEEE, d. MMMM y.","d. MMMM y.","d. MMM y.","dd.MM.y."],ha:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],O:["{1} 'u' {0}","{1} 'u' {0}","{1} {0}","{1} {0}"],S:0,ka:[5,
6],T:6};var l={h:".",l:",",B:"%",L:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"\u00a4#,##0.00",i:"USD"},l={h:",",l:".",B:"%",L:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"#,##0.00\u00a0\u00a4",i:"HRK"};b("I18N_DATETIMESYMBOLS_ERAS",h.R);b("I18N_DATETIMESYMBOLS_ERANAMES",h.P);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.W);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.U);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Z);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.$);b("I18N_DATETIMESYMBOLS_QUARTERS",h.Y);b("I18N_DATETIMESYMBOLS_AMPMS",h.M);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.N);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.O);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.S);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.T);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.I);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.J);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.s);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.u);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.w);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.v);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.H);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.f);
void 0!==h.ma&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ma);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.h);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.B);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.L);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.F);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.o);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.j);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.D);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.m);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.A);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.g);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.C);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.i);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
