var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u041c"},1E4:{other:"00\u041c"},1E5:{other:"000\u041c"},1E6:{other:"0\u0421"},1E7:{other:"00\u0421"},1E8:{other:"000\u0421"},1E9:{other:"0\u0422"},1E10:{other:"00\u0422"},1E11:{other:"000\u0422"},1E12:{other:"0\u0418\u041d"},1E13:{other:"00\u0418\u041d"},1E14:{other:"000\u0418\u041d"}},a:{1E3:{other:"0 \u043c\u044f\u043d\u0433\u0430"},1E4:{other:"00 \u043c\u044f\u043d\u0433\u0430"},1E5:{other:"000 \u043c\u044f\u043d\u0433\u0430"},1E6:{other:"0 \u0441\u0430\u044f"},
1E7:{other:"00 \u0441\u0430\u044f"},1E8:{other:"000 \u0441\u0430\u044f"},1E9:{other:"0 \u0442\u044d\u0440\u0431\u0443\u043c"},1E10:{other:"00 \u0442\u044d\u0440\u0431\u0443\u043c"},1E11:{other:"000 \u0442\u044d\u0440\u0431\u0443\u043c"},1E12:{other:"0 \u0438\u0445 \u043d\u0430\u044f\u0434"},1E13:{other:"00 \u0438\u0445 \u043d\u0430\u044f\u0434"},1E14:{other:"000 \u0438\u0445 \u043d\u0430\u044f\u0434"}}};var d={I:"y",la:"y G",J:"MMM y",K:"MMMM y",s:"MMM d",u:"MMMM dd",w:"M/d",v:"MMMM d",V:"MMM d, y",H:"EEE, MMM d",ja:"EEE, MMM d, y",f:"d"},d={I:"y",la:"G y",J:"y MMM",K:"y MMMM",s:"MMM d",u:"MMMM dd",w:"M-d",v:"MMMM d",V:"y MMM d",H:"EEE MMM d",ja:"EEE, y MMM d",f:"d"};var h;
h={R:["\u043c.\u044d.\u04e9","\u043c.\u044d."],P:["\u043c\u0430\u043d\u0430\u0439 \u044d\u0440\u0438\u043d\u0438\u0439 \u04e9\u043c\u043d\u04e9\u0445","\u043c\u0430\u043d\u0430\u0439 \u044d\u0440\u0438\u043d\u0438\u0439"],W:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),ca:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),U:"\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(";"),ba:"\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(";"),
Z:"1-\u0440 \u0441\u0430\u0440;2-\u0440 \u0441\u0430\u0440;3-\u0440 \u0441\u0430\u0440;4-\u0440 \u0441\u0430\u0440;5-\u0440 \u0441\u0430\u0440;6-\u0440 \u0441\u0430\u0440;7-\u0440 \u0441\u0430\u0440;8-\u0440 \u0441\u0430\u0440;9-\u0440 \u0441\u0430\u0440;10-\u0440 \u0441\u0430\u0440;11-\u0440 \u0441\u0430\u0440;12-\u0440 \u0441\u0430\u0440".split(";"),ea:"1-\u0440 \u0441\u0430\u0440;2-\u0440 \u0441\u0430\u0440;3-\u0440 \u0441\u0430\u0440;4-\u0440 \u0441\u0430\u0440;5-\u0440 \u0441\u0430\u0440;6-\u0440 \u0441\u0430\u0440;7-\u0440 \u0441\u0430\u0440;8-\u0440 \u0441\u0430\u0440;9-\u0440 \u0441\u0430\u0440;10-\u0440 \u0441\u0430\u0440;11-\u0440 \u0441\u0430\u0440;12-\u0440 \u0441\u0430\u0440".split(";"),
ia:"\u043d\u044f\u043c \u0434\u0430\u0432\u0430\u0430 \u043c\u044f\u0433\u043c\u0430\u0440 \u043b\u0445\u0430\u0433\u0432\u0430 \u043f\u04af\u0440\u044d\u0432 \u0431\u0430\u0430\u0441\u0430\u043d \u0431\u044f\u043c\u0431\u0430".split(" "),ga:"\u043d\u044f\u043c \u0434\u0430\u0432\u0430\u0430 \u043c\u044f\u0433\u043c\u0430\u0440 \u043b\u0445\u0430\u0433\u0432\u0430 \u043f\u04af\u0440\u044d\u0432 \u0431\u0430\u0430\u0441\u0430\u043d \u0431\u044f\u043c\u0431\u0430".split(" "),aa:"\u041d\u044f \u0414\u0430 \u041c\u044f \u041b\u0445 \u041f\u04af \u0411\u0430 \u0411\u044f".split(" "),
fa:"\u041d\u044f \u0414\u0430 \u041c\u044f \u041b\u0445 \u041f\u04af \u0411\u0430 \u0411\u044f".split(" "),X:"1234567".split(""),da:"1234567".split(""),$:["\u04231","\u04232","\u04233","\u04234"],Y:["1-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b","2-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b","3-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b","4-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b"],M:["\u04ae\u04e8","\u04ae\u0425"],N:["EEEE, y '\u043e\u043d\u044b' MM '\u0441\u0430\u0440\u044b\u043d' d","y '\u043e\u043d\u044b' MM '\u0441\u0430\u0440\u044b\u043d' d",
"y MMM d","y-MM-dd"],ha:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],O:["{1} {0}","{1} {0}","{1} {0}","{1}, {0}"],S:6,ka:[5,6],T:5};var l={h:".",l:",",B:"%",L:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"\u00a4#,##0.00",i:"USD"},l={h:".",l:",",B:"%",L:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"\u00a4\u00a0#,##0.00",i:"MNT"};b("I18N_DATETIMESYMBOLS_ERAS",h.R);b("I18N_DATETIMESYMBOLS_ERANAMES",h.P);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.W);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.U);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Z);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.$);b("I18N_DATETIMESYMBOLS_QUARTERS",h.Y);b("I18N_DATETIMESYMBOLS_AMPMS",h.M);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.N);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.O);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.S);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.T);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.I);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.J);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.s);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.u);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.w);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.v);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.H);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.f);
void 0!==h.ma&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ma);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.h);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.B);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.L);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.F);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.o);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.j);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.D);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.m);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.A);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.g);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.C);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.i);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
