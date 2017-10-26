function write_history(e){return!is_user_debug_enabled()||("undefined"!=typeof LPhistory&&null!==LPhistory||(LPhistory=new LPhistory_lib),LPhistory.write(e))}function show_history(){return dump_history()}function clear_history(){return reset_history()}function reset_history(){return LPhistory||(LPhistory=new LPhistory_lib),LPhistory.reset()}function dump_history(){return LPhistory||(LPhistory=new LPhistory_lib),LPhistory.dump(null,g_isadmin?LPhistory.LOG_ADMIN:LPhistory.LOG_USER)}function gethistorybuf(){return LPhistory||(LPhistory=new LPhistory_lib),is_user_debug_enabled()?LPhistory.getbuf():""}function LPhistory_lib(){function e(e){if(!e)return n.LOG_DEBUG;var s=n.LOG_USER;switch(e.cmd){case"LoadData":s=n.LOG_DEBUG;break;case"":case null:console_log("bad history object"),s=n.LOG_DEBUG}return s}function s(e){return!is_user_debug_enabled()||(o||(o=[]),!!e&&(void 0===e.timestamp&&(e.timestamp=(new Date).getTime()),o.length>t&&o.shift(),o.push(e),!0))}function i(e){if(!e)return null;var s=e.prop,i=e.dflt;void 0===i&&(i=null);var t=s;return void 0!==s&&null!==s||(t=i),t}var t=8192,o=[],n=this;this.LOG_ADMIN=2,this.LOG_DEBUG=1,this.LOG_USER=0,this.write=function(i){if(!is_user_debug_enabled())return!0;if(!i)return!1;void 0===i.timestamp&&(i.timestamp=(new Date).getTime()),void 0===i.loglevel&&(i.loglevel=e(i));var t,o=i.tabid,n=i.docnum;if(void 0===i.docnum&&null!==g_CS_tops&&o&&(n=g_CS_tops[o]),null!==n&&void 0!==n&&o){var r="";if("all"==n)r=ftd_get_topurl(o);else if((t=getcsinfo(o,n))&&t.url)r=t.url;else if(g_CS[o]&&g_CS[o][n]){var a=g_CS[o][n];r=gettaburl(a),r||(r=a.name)}else r="";i.url=r}return s(i)},this.getbuf=function(){return n.dump(!0,g_isadmin?LPhistory.LOG_ADMIN:LPhistory.LOG_USER)},this.dump=function(e,s){var t="";if(!is_user_debug_enabled())return!e||t;if(void 0===s&&(s=n.LOG_USER),!o)return console.error("empty history !"),!!e&&t;var a;for(a=0;a<o.length;a++){var l=o[a];if(l){var d=l.loglevel;if(void 0===l.loglevel&&(d=n.LOG_USER),d>s)continue;var f="",c=l.timestamp;f=void 0===c||null===f?"none?":void 0!==new Date(c).toUTCString?new Date(c).toUTCString():parseInt(c/1e3).toString();var p=i({prop:l.aid,dflt:""}),u=i({prop:l.tabid,dflt:""}),m=i({prop:l.cmd,dflt:"none?"}),g=i({prop:l.url,dflt:""}),b=i({prop:l.msg,dflt:""}),h=i({prop:l.docnum,dflt:""}),_=i({prop:l.docstate,dflt:""}),D="";b.match(/^\w{2}\d+$/)&&r[b]&&(D=sprintf(r[b],l.param1,l.param2,l.param3,l.param4,l.param5,l.param6,l.param7,l.param8,l.param9))&&(b=D);var E=i({prop:l.submit,dflt:"none"}),y=i({prop:l.doconfirm,dflt:"none"}),v=i({prop:l.allowforce,dflt:"none"}),A=i({prop:l.name,dflt:""}),k=i({prop:l.custom_js,dflt:""}),C=i({prop:l.is_launch,dflt:""}),L=i({prop:l.manualfill,dflt:""}),S=i({prop:l.originator,dflt:""}),I=i({prop:l.delay,dflt:0}),w=i({prop:l.submit_js,dflt:""}),N=i({prop:l.submit_id,dflt:""}),P=i({prop:l.username,dflt:""}),F=i({prop:l.result,dflt:""}),O=i({prop:l.force_fillbest,dflt:"none"}),T=i({prop:l.ready_state,dflt:-1}),U=i({prop:l.status,dflt:-1}),V=i({prop:l.sz,dflt:-1}),M=i({prop:l.status_s,dflt:-1}),G=i({prop:l.lver,dflt:-1}),R=i({prop:l.sver,dflt:-1}),q=i({prop:l.spin,dflt:""}),X=(i({prop:l.flavor,dflt:""}),i({prop:l.color,dflt:""}),i({prop:l.num,dflt:-1})),x=i({prop:l.file,dflt:""}),W=i({prop:l.line,dflt:0}),j=i({prop:l.stack,dflt:""}),z=i({prop:l.name,dflt:""}),B=i({prop:l.message,dflt:""}),H="";switch(m){case"fill_A1":case"fill_A2":case"fill_A3":case"fill_A4":case"FILL_F2":case"FILL_F3":case"FILL_F4":case"FILL_F5":case"FILL_F6":case"fill_PW":case"FILLBASIC":case"autofillaid":case"autologinaid":H=sprintf("[submit=%s][doconfirm=%s][allowforce=%s]",E,y,v);break;case"fillfieldCS":H=sprintf("[name=%s][manualfill=%s][is_launch=%s][originator=%s][delay=%dms][custom_js=%s]",A,L,C,S,I,k);break;case"fillbestCS":H=sprintf("[username=%s][force_fillbest=%s][custom_js=%s]",P,O,k);break;case"submitCS":H=sprintf("[submit_id=%s][delay=%dms][submit_js=%s]",N,I,w);break;case"check_autologin1":case"check_autologin2":case"check_autologin3":H=sprintf("[dosubmit=%s]",E);break;case"fillfieldconfirm":H=sprintf("[result=%s][manualfill=%s][allowforce=%s][fieldname=%s][force_fillbest=%s]",F,L,v,A,O);break;case"get_accts_success":case"get_accts_fail":H=sprintf("[size=%d][ready_state=%d][status=%d][lver=%d][sver=%d]",V,T,U,G,R);break;case"get_accts_local":H=sprintf("[size=%d][status=%s][lver=%d][sver=%d]",V,M,G,R);break;case"showchangenotification":H=sprintf("[spin=%s]",q);break;case"showaddnotification":H=sprintf("[spin=%s][username=%s]",q,P);break;case"LoadData":H=sprintf("[file=%s][num=%d]",x,X);break;case"errtrap":case"errtrapCS":H=sprintf("[errtype=%s][errmsg=%s][line=%d][stack=%s]",z,B,W,j);break;case"info":case"decision":default:H=""}var Z=sprintf("[%s][%s]%s%s%s%s%s%s%s",m,f,u?sprintf("[tabid=%s]",u):"",h||0===h?sprintf("[docnum=%s]",h):"",g?sprintf("[url=%s]",g):"",p||0===p?sprintf("[aid=%s]",p):"",b?sprintf("[msg=%s]",LPPerl.chomp(b)):"",_?sprintf("[docstate=%s]",_):"",H);e?t=t+Z+"\n":console.log(Z)}}return!e||t},this.reset=function(){return o=[],!0};var r={DE1:"created %s icons on ASP page",DE2:"created %s icons on generic page",DE3:"created %s icons the old way",DE4:"created %s icons by filling",DE5:"executing NEXT double-password hack to get website to activate %s",DE6:"retrying setval_bestmatch INPUT field detection; not ignoring hidden fields",DE7:"no form, no id/name, no joy",DE8:"executing PREV double-password hack to get website to activate %s",DE9:"executing double-secret password hack to get website to activate %s",DE10:"switching field from text to password from LP_setval",DE11:"switching field from text to password from chk_form_has_password",DE12:"ASP/bgicon login",DE13:"EVALUATING HIDDEN FORM, NOT IGNORING HIDDEN FIELD ANYMORE %s",DE14:"looking for orphaned INPUT elements",DE15:"entered setupIcons()",DE16:"trying generic strategy %s",DE17:"creating icon on input %s",DE18:"create failed on %s",DE19:"detected ASP.NET form, two if by sea",DE20:"detected ASP.NET form, one if by land",DE21:"trying alternate strategy for ASP page %s",DE22:"combineddummy ignore on %s/%s",DE23:"Skipping field that smells like a search field",DE24:"Skipping disabled field",DE25:"Skipping non-displayed field",DE26:"too many orphan password fields found",DE27:"orphan and isolated login field found",DE28:"fieldname %s is blacklisted, skipping",DE29:"form %s has no password field?  Ignored",DE30:"form is not visible: cannot be signup form",DE31:"form %s smells like a sign up form: name/classname",DE32:"form is not signup: prelim test failed",DE33:"form %s has a signup button, loosening detection requirements",DE34:"found visible non-pw field for signup form, eltid=%s",DE35:"chk_form_ask_generate OTP field ignore on %s",DE36:"skipping invisible non-pw field for signup form, eltid=%s",DE37:"form %s is not a signup form, too many pw fields [PW:%s/NON:%s]",DE38:"form %s is not a signup form, too many non-pw fields [PW:%s/NON:%s]",DE39:"form %s is a signup form, has enough pw fields [PW:%s/NON:%s]",DE40:"form %s is a signup form, has enough pw and non-pw fields [PW:%s/NON:%s]",DE41:"form %s does not smell like signup form, not enough fields [PW:%s/NON:%s]",DE42:"[%s] form=%s field=%s appears to be current PW field in a change password form, offergenerate=false",DE43:"[%s] form=%s field=%s appears to be current PW field in a change password form, offergenerate=false",DE44:"[%s] form=%s field=%s setting up generate click listener on icon",DE45:"[%s] orphan field=%s setting up generate click listener on icon",DE46:"form %s appears to be a search form based on name/action, do not try to fill",DE47:"form %s is not visible: cannot be non-login form",DE48:"form %s appears to be a search form based on name/classname, do not try to fill",DE49:"form %s appears to be a non-login form",CA1:"Change in Progress, skipping %s",CA2:"Executing PW Change - perhaps skip some processing in this context?",CA3:"unexpected click flavor",CA4:"[docnum:%s][state:%s] clicking element ty=%s val=%s",CA5:"[docnum:%s][state:%s] unable to find element in this frame to click : ty=%s val=%s",CA6:"comparing %s with %s",CA7:"failed javascript consistency check",CA8:"[%s] executing JS: %s",CA9:"running validate_page_fields in frame %s for %s",CA10:"[%s] returning true, matched success url %s",CA11:"[%s] returning false, matched failure url %s",CA12:"[%s] DID NOT FIND REQUIRED FIELD ty=%s val=%s",CA13:"[%s] FOUND REJECT FIELD %s",CA14:"[%s] FOUND INTERACTIVE FIELD %s",CA15:"[%s] retry %s in %s ms doc state is %s",CA16:"terminate loop [%s] VT:%s T:%s ctr%s elapsed time is %s sec",CA17:"WTF?? [%s] VT:%s T:%s ctr%s elapsed time is %s sec",CA18:"[%s] warning: interrogate rcvd no inputs or urls to check against",CA19:"[%s] ctr=%s elapsed=%s sec, validate_page_fields %s retry in %s second",CA20:"[%s] cpwbot_validate_state_result retval===null FIXME",CA21:"show overlay msg=%s",CA22:"failure, !msg",CA23:"filling element ty=%s val=%s should_click=%d should_fill_via_keys=%d",CA24:"unable to find element ty=%s val=%s",CA25:"Change in Progress, skipping setupIcons",CA26:"skipping setupIcons() due to url test",CA27:"setupIcons() proceeding on %s",CA28:"setupIcons() probably caught cross-domain error, abort : %s",CV1:"specialsite TRUE",CV2:"fillfield : Setting g_passedequivdomains %s=%s",CV3:"fillfield : Setting g_passedequivdomains to NULL",CV4:"LP_compare_tlds : comparing tlds: tld1=%s tld2=%s",CV5:"LP_compare_tlds : tlds are equal",CV6:"LP_compare_tlds : tlds are equal because of equivdomains",CV7:"LP_compare_tlds : tlds are different",CV8:"XDOMAIN:uniqid=%s index=%s time=%s from=%s : valset:DIFFERENT TLD : tld=%s actiontld=%s v.length=%s type=%s",CV9:"XDOMAIN:uniqid=%s : creating cuz tld didn't exist",CV10:"XDOMAIN:uniqid=%s : tld already created but actiontld not created yet, so sleeping and retrying later",CV11:"XDOMAIN:uniqid=%s : showing security prompt cuz we never did it before for actiontld",CV12:"XDOMAIN:uniqid=%s : valset:Allowing autofilling because user accepted security prompt to allow fill. Removing neverurl for url=%s",CV13:"XDOMAIN:uniqid=%s : valset:Skipping autofilling because user refused security prompt to allow fill. Adding neverurl for url=%s",CV14:"XDOMAIN:uniqid=%s : valset:Using cached value on whether to allow autofill for %s val: %s",CV15:"XDOMAIN:uniqid=%s : valset:Skipping field autofilling because user refused to allow fill on: %s val: %s",CV16:"XDOMAIN:uniqid=%s valset:Allowing field autofilling because user accepted to allow fill on: %s val: %s",CV17:"XDOMAIN:uniqid=%s : valset:Skipping field autofilling because field is not visible on: %s val: %s",CV18:"XDOMAIN:valset:NOT DOING ANYTHING CUZ reqinfo IS NULL tld=%s actiontld=%s",CV19:"XDOMAIN:valset:SAME TLD : tld=%s actiontld=%s",CV20:"XDOMAIN:valset:NOT COMPARING TLD : tld=%s",CV21:"hotkey or contextmenu triggered autofill detect & force",SS1:"picked submit %s by ID %s",SS2:"picked submit %s by NAME %s",SS3:"warning: multiple elements with NAME %s",SS4:"picked submit INPUT by VALUE %s",SS5:"picked submit Anchor by HREF %s",SS6:"picked submit %s by XPATH %s",SS7:"picked submit %s by CSS Selector %s",SS8:"issuing click to %s",SS9:"picked an INPUT type=submit after password field and issued click to it",SS10:"picked an INPUT type=image after password field and issued click to it",SS11:"picked an INPUT type=button after password field and issued click to it",SS12:"fallback submit",SS13:"issued submit event to form %s",SS14:"NO ACTIVE FORM, defer submit",SS15:"picked a DIV or A styled to look like a button and issued a click to it",FF1:"deleting iframe named %s",FF2:"SPECIAL SITE: create icon on field %s",FF3:"SPECIAL SITE: create icon on field %s",FF4:"SPECIAL SITE: ignoring field %s",FF5:"skipping loginform icon create on %s because field is too thin",FF6:"skipping nonloginform icon create on %s because field is too thin",FF7:"skipping default-icon create on %s because field is too thin",FF8:"skipping nonloginform icon create on %s because it looks like a search field",FF9:"skipping nonloginform icon create on %s because it is read-only",FF10:"CONFLICT: form %s is a signup form and login form; treat as a signup form and present formfill options",FF11:"icon create on displayed field %s for form %s",FF12:"CLICK ON INPUT, process it",FF13:"skip icon create on hidden field %s for form %s",AO1:"",AO2:"",AO3:"",AO4:"",AO5:"",ZZZ:"final placeholder"}}LPhistory=new LPhistory_lib;