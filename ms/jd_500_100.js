/*
抢500-100券(中了群主回收)
不会用加群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#抢500-100券(中了群主回收)
10 59 21 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js, tag=抢500-100券(中了群主回收), img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "10 59 21 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js,tag=抢500-100券(中了群主回收)
===================================Surge================================
抢500-100券(中了群主回收) = type=cron,cronexp="10 59 21 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js
====================================小火箭=============================
抢500-100券(中了群主回收) = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_500_100.js, cronexpr="10 59 21 * * *", timeout=3600, enable=true
 */
const $ = new Env('抢500-100券(中了群主回收)');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

var _0xodz='jsjiami.com.v6',_0xodz_=['‮_0xodz'],_0x315f=[_0xodz,'DkPCtDchZsOQwq0O','IcOgLQ==','TsOHPMK6BHg=','YXLDsQzCrg==','XsOhJcKYCg==','JVjCryw7OcKMw4gow4XCiALCuDLCpcKbBMOnFcKuWQYdLS9aa1nDkcOowpEgwq0OSMODw4XDmMK9w7nDvHgw','5LmJ56Gr6LyT6KKu56WU5pSow53DoA==','w5JNwoxkw4E=','wprjg6Pjg5njgLzjgLLjgJzjgpfmiZfooIHml4zplLp9IA==','LgLCgg==','NkHDp2rCksKkezN0MMKub8KgUA==','SkxhVcOm','wocJZCxMw7xTUsKy','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','IVrCrQ==','44KO5o6W56Wf44Gx6K6w5YSv6I6P5Y295Lqy5Lq56LSd5Y+m5Lq4wpoPw6rDgMOOQMKJ55qk5o+M5L2G55SdwrbDhMKrOmHCuueZj+S6tuS6i+etq+WIn+iNuOWPjA==','J8K5wq/CvsOh','DylswqnCtQ==','w6wvwpnCocOT','wqUMB3xj','w7fCqcKie18=','562y5b+7Aw==','w5znppXlkJXmiZHooq3kurzno6U=','Qm7DmQbDhg==','VMK5w41Qw7k=','XsOdMcKSAnnDonRIw5Q=','ZcKfw7d+w68=','P8O0P8KtIiIMDAU5','N8OwU1k6L8KSfQHCmA==','5oiyw53DogcUJsKsAOWJtQ==','JMKVwoXCsMOdw5ZZwrzCtCs=','IUnCtTs8aw==','GcKkwo0Dw4paTys=','wo/DpmYcAA==','F11rwqkM','LcOmcVITKcKI','wpM5woY=','w4JSUFgmCnvlv7/lpofjg5PkuZnkuJ/ot6vljIc=','JUfCrkzCpA==','I0XCuDcGYsOOwoI=','MwNlwovCmQQeYQ==','TFoqw5PDvU9ZLmLCsg==','aMO6YsK4PRXChQ==','IcKkwo8=','44Gk5oy556S/44CgEMKgwrrDjMKTw6vltoLlp67ml6Q=','5LuU5LqJ6La45YyA','LcO7WVgM','wqYRGRlCQTzCmg==','AsKTwoLCgcO8w5NRwpQ=','wqLor6rphILmlrznm67lvaPojYvlj6XDgQ7CplXCiQQ/w5xtwpRkeUbCjnTClMOAHcK3LMKrw4XCk8Kyw7LCt8KGw4LDoXvDoXrCt8O0QS11W8Owd3IsR8OD','wo8PwqnCg0Y=','IMK4wo8=','dztpVcK9','wpJUwr/CuyU=','woDDrMObw4bDig==','wrLCv8K7WV14w6tDbw==','TEvDrD3CvQ==','w5lMwopUw60=','w7YyERA0XRfChG7Dl1R1w53Cj07DqMKFw41Bwq0zBlQawpXDisKlLwrCusKobsO+Y0rDoCNpDsKOwpzDlMK7woJcw6saEUbCh8Kmw4HDrhHDmsKAw47ChsOSXF/Dk8Osw5IHwoliw7/DhMKhwoYcw43CksOjwoMQw6LCiAt3XzvDj8KFwqbDjsKbHsKkw65QJcKlwovDvsO4NcOuw789JsOTC8OIPsK/LyLCoGPClTxmwqwhwrYMw7HCrmwZwq/DtA/CqGLDh3Q8eEPDlBvDsMO8SWLCnMKtw6DCjMOqYsKAWcKbwrYrwrTCohNKUUXDrcObP8OEwrPDjMO3fsOFw6vDk8OEwrhLW8OaFsK+w6NvRcOgPsKYCQQcw4pnFMOYbgUtwqvCm0pnw4TCtMKmw4Axw7HCnsKyBiMaQB87wp3Ctz9Iw47CmE7DvkM=','wrcXAEJy','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','w4DDo8K6Whs=','FMO6w7k=','wpHDsnA8B8OJDsKuwpHCjg==','wrE4FXNqNsOFP2hK','wodwQMOZfFfCjA==','5oqZSxMmw4QAw53CnOWJig==','w4kxag==','w7blvYflp5DmipTDgW3DlMKpf3TDmeWLuyA=','cQZGd8K/','woREwqrChDA=','YgcGNAU=','DUPCrWvCiw==','wrLDiMKcWE0sw50QD0jCrylkwqPDnsO8wolTwpLCqsONwoU4DVZFWsOTYsOWThFWwpfCjcKCN8Kdc8OAwqPCiMKIw5wnw5oLwrLDmBN6FwB/w7jCr8OwUV3DonnCuSHCig==','aipsRsKD','LUDDnmBr','XnBUecOn','wpRvwqjCqUofM8OQbA==','wpJaL1R/','WMOyJMKjGg==','BnHDh0NT','wqg+GF4=','wrs+YcK/','w4YcLTAN','NsOFMsKjNw==','44K45Liw5LmJPcKlBueZuOWIi++/h+aImOe9tuS4muWYp+aVgeOAlA==','DU7DlVdk','wrYuQMKgwrk=','woYuwqXCv0E=','w7IpAg==','NWXCoULChg==','ZcKrw4jCv8KAw7XCtg==','wpHDonwbJsOCH8KKwoTCkA==','5oucBj/DvFnDocKsw5Dli5o=','woBBw5bDmMOMwqzCpMKCw7I3','csO8TMKUNRjCjlVXwrY=','wrV1IlJyw4HCr2LDlDI=','bUPDjCXDtMKIwqI=','AMOiw7TChCg=','FQViwrrCuAEWSTvDnw==','w6RXwodlw5c=','aELDjw==','w4s/YCc=','w5Bn5aSq6LSTw4B/5Y275Zm5aGc=','wpkswrnDvg==','w6Mxfy9Jw6c=','wrvDpkQrIw==','w40PwrfCpsOnLMKC','P8KmBMKwbsOuwqtl','cDgIDi7DgsOgwo05w4w=','K8OkKcK9KCUGLxIt','wpgzwpXCg3zDgMK5OsOEwqtgwoLDsVUG','MMOwTkk=','XURhTcO+NmA=','wol7UMO6cXTChitcQiM=','Jj1twp7CqsO/','wpssIWRO','wpbDomEL','KsKmAMKUYMO4wrw=','wotrwqvCqxME','wowjwoPCvWHDng==','wq4oGVdxOg==','wpwWw7TCnsKyJMOVwrwXHMK6BX8Pw7s=','N17Dk8ObDA==','asK2w457w5nCoMKP','LT13wrTCscO5wpXCsw==','K8OkKcKmIjMbMg==','wrghw5Z3w40Owr7DhFrCmMKb','wonDomsM','PsKsAsK9YMO4wrE=','C3jCpQ==','IcO7Sw==','MsORw4HCswg0w5Ra','ABFsworCsg==','w4TDmMKo','SsONJ8K1DGnDpg==','bE5+SsO2ME8j','w7EPw6fCqsKuwrsA','O8O6w7HCnCQTw4tZVw==','ZjMJZsjFiamyFtDi.ucgUyowJm.v6=='];if(function(_0x563a60,_0x4d94e2,_0x101e82){function _0x20c886(_0x1733be,_0x304451,_0x20471e,_0x2b1f6e,_0x56373d,_0x575318){_0x304451=_0x304451>>0x8,_0x56373d='po';var _0x206e3a='shift',_0x169dcf='push',_0x575318='‮';if(_0x304451<_0x1733be){while(--_0x1733be){_0x2b1f6e=_0x563a60[_0x206e3a]();if(_0x304451===_0x1733be&&_0x575318==='‮'&&_0x575318['length']===0x1){_0x304451=_0x2b1f6e,_0x20471e=_0x563a60[_0x56373d+'p']();}else if(_0x304451&&_0x20471e['replace'](/[ZMJZFyFtDugUywJ=]/g,'')===_0x304451){_0x563a60[_0x169dcf](_0x2b1f6e);}}_0x563a60[_0x169dcf](_0x563a60[_0x206e3a]());}return 0xca519;};return _0x20c886(++_0x4d94e2,_0x101e82)>>_0x4d94e2^_0x101e82;}(_0x315f,0xf6,0xf600),_0x315f){_0xodz_=_0x315f['length']^0xf6;};function _0x1a79(_0x332611,_0x3e0895){_0x332611=~~'0x'['concat'](_0x332611['slice'](0x1));var _0x14ea47=_0x315f[_0x332611];if(_0x1a79['RsCwIH']===undefined){(function(){var _0x4069c1=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x298f40='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4069c1['atob']||(_0x4069c1['atob']=function(_0x12683a){var _0x24fd44=String(_0x12683a)['replace'](/=+$/,'');for(var _0x5dd335=0x0,_0x18af73,_0x4800c2,_0x4f7813=0x0,_0x16b713='';_0x4800c2=_0x24fd44['charAt'](_0x4f7813++);~_0x4800c2&&(_0x18af73=_0x5dd335%0x4?_0x18af73*0x40+_0x4800c2:_0x4800c2,_0x5dd335++%0x4)?_0x16b713+=String['fromCharCode'](0xff&_0x18af73>>(-0x2*_0x5dd335&0x6)):0x0){_0x4800c2=_0x298f40['indexOf'](_0x4800c2);}return _0x16b713;});}());function _0x291eed(_0xd80bd0,_0x3e0895){var _0x25f819=[],_0x5f1f64=0x0,_0x2913e6,_0x4f5c88='',_0x228e39='';_0xd80bd0=atob(_0xd80bd0);for(var _0x2b86da=0x0,_0x478a95=_0xd80bd0['length'];_0x2b86da<_0x478a95;_0x2b86da++){_0x228e39+='%'+('00'+_0xd80bd0['charCodeAt'](_0x2b86da)['toString'](0x10))['slice'](-0x2);}_0xd80bd0=decodeURIComponent(_0x228e39);for(var _0x2a77c1=0x0;_0x2a77c1<0x100;_0x2a77c1++){_0x25f819[_0x2a77c1]=_0x2a77c1;}for(_0x2a77c1=0x0;_0x2a77c1<0x100;_0x2a77c1++){_0x5f1f64=(_0x5f1f64+_0x25f819[_0x2a77c1]+_0x3e0895['charCodeAt'](_0x2a77c1%_0x3e0895['length']))%0x100;_0x2913e6=_0x25f819[_0x2a77c1];_0x25f819[_0x2a77c1]=_0x25f819[_0x5f1f64];_0x25f819[_0x5f1f64]=_0x2913e6;}_0x2a77c1=0x0;_0x5f1f64=0x0;for(var _0x1e513b=0x0;_0x1e513b<_0xd80bd0['length'];_0x1e513b++){_0x2a77c1=(_0x2a77c1+0x1)%0x100;_0x5f1f64=(_0x5f1f64+_0x25f819[_0x2a77c1])%0x100;_0x2913e6=_0x25f819[_0x2a77c1];_0x25f819[_0x2a77c1]=_0x25f819[_0x5f1f64];_0x25f819[_0x5f1f64]=_0x2913e6;_0x4f5c88+=String['fromCharCode'](_0xd80bd0['charCodeAt'](_0x1e513b)^_0x25f819[(_0x25f819[_0x2a77c1]+_0x25f819[_0x5f1f64])%0x100]);}return _0x4f5c88;}_0x1a79['YMvzzG']=_0x291eed;_0x1a79['EyPdad']={};_0x1a79['RsCwIH']=!![];}var _0xb15a0b=_0x1a79['EyPdad'][_0x332611];if(_0xb15a0b===undefined){if(_0x1a79['HZRlIR']===undefined){_0x1a79['HZRlIR']=!![];}_0x14ea47=_0x1a79['YMvzzG'](_0x14ea47,_0x3e0895);_0x1a79['EyPdad'][_0x332611]=_0x14ea47;}else{_0x14ea47=_0xb15a0b;}return _0x14ea47;};const fetch=require('node-fetch');let cookiesArr=[],cookie='',message;Date['prototype'][_0x1a79('‮0','t8*]')]=function(_0x8682da){var _0x4b7251={'YaVTK':function(_0x8dc3b0,_0x3aca5e){return _0x8dc3b0+_0x3aca5e;},'RRGQY':function(_0x1704de,_0x23095a){return _0x1704de-_0x23095a;}};var _0xaf44ce={'M+':_0x4b7251[_0x1a79('‮1','*fLt')](this['getMonth'](),0x1),'d+':this[_0x1a79('‫2','S#9K')](),'h+':this[_0x1a79('‫3','22@B')](),'m+':this[_0x1a79('‫4','hwaA')](),'s+':this[_0x1a79('‫5','m5yA')](),'S':this[_0x1a79('‫6','lj$U')]()};if(/(y+)/[_0x1a79('‫7','QREd')](_0x8682da))_0x8682da=_0x8682da[_0x1a79('‮8','%#S@')](RegExp['$1'],_0x4b7251['YaVTK'](this[_0x1a79('‫9','btTM')](),'')['substr'](_0x4b7251['RRGQY'](0x4,RegExp['$1'][_0x1a79('‫a','GF8O')])));for(var _0x2484c4 in _0xaf44ce)if(new RegExp(_0x4b7251[_0x1a79('‫b','O9M6')]('('+_0x2484c4,')'))[_0x1a79('‫c','*fLt')](_0x8682da))_0x8682da=_0x8682da[_0x1a79('‫d','22@B')](RegExp['$1'],RegExp['$1'][_0x1a79('‮e','WMlN')]==0x1?_0xaf44ce[_0x2484c4]:('00'+_0xaf44ce[_0x2484c4])[_0x1a79('‫f','lj$U')]((''+_0xaf44ce[_0x2484c4])[_0x1a79('‮10','O9M6')]));return _0x8682da;};function getCurrentDateTimeT(){var _0x4517ab={'tEaHf':function(_0x5d9808,_0x621df){return _0x5d9808+_0x621df;},'kMwtc':function(_0x5c2b71,_0x5e762a){return _0x5c2b71+_0x5e762a;},'Xwkks':function(_0x2dc251,_0x25541d){return _0x2dc251+_0x25541d;},'XrHGG':function(_0x15125e,_0x5f21da){return _0x15125e+_0x5f21da;},'RskDn':function(_0x3d10ea,_0x42d38f){return _0x3d10ea+_0x42d38f;},'QDatG':function(_0x1f3e0c,_0x521e35){return _0x1f3e0c(_0x521e35);},'PsrFm':function(_0x2a760f,_0xae3c87){return _0x2a760f(_0xae3c87);}};var _0x3d914d=_0x1a79('‮11','S#9K')['split']('|'),_0x59ae72=0x0;while(!![]){switch(_0x3d914d[_0x59ae72++]){case'0':var _0x520fe5=_0x44f6b2[_0x1a79('‫5','m5yA')]();continue;case'1':return _0x4517ab['tEaHf'](_0x4517ab['kMwtc'](_0x4517ab['Xwkks'](_0x4517ab['XrHGG'](_0x4517ab['RskDn'](_0x5ca70f+'年'+_0x4517ab['QDatG'](formatZero,_0x5c0c5f),'月')+_0x4517ab['QDatG'](formatZero,_0x29dab8),'日\x20'),formatZero(_0x3230cd)),':'),formatZero(_0x3755cf))+':'+_0x4517ab[_0x1a79('‫12','$eWU')](formatZero,_0x520fe5);case'2':var _0x29dab8=_0x44f6b2[_0x1a79('‫13','*BzJ')]();continue;case'3':var _0x3755cf=_0x44f6b2['getMinutes']();continue;case'4':var _0x5c0c5f=_0x44f6b2[_0x1a79('‫14','GF8O')]()+0x1;continue;case'5':var _0x3230cd=_0x44f6b2[_0x1a79('‫15','m5yA')]();continue;case'6':var _0x44f6b2=new Date();continue;case'7':var _0x5ca70f=_0x44f6b2[_0x1a79('‫16','Kyv9')]();continue;}break;}}function sleep(_0x36556f){return new Promise(_0x408de9=>setTimeout(_0x408de9,_0x36556f));}if($['isNode']()){Object[_0x1a79('‮17','*fLt')](jdCookieNode)[_0x1a79('‫18','22@B')](_0x32fb72=>{cookiesArr['push'](jdCookieNode[_0x32fb72]);});if(process[_0x1a79('‫19','0pWv')]['JD_DEBUG']&&process[_0x1a79('‮1a','QREd')][_0x1a79('‫1b','7S)M')]===_0x1a79('‫1c','!nqs'))console[_0x1a79('‮1d','HCcI')]=()=>{};}else{cookiesArr=[$[_0x1a79('‫1e','zA)B')](_0x1a79('‮1f','%#S@')),$[_0x1a79('‫20','AnOw')](_0x1a79('‫21','7S)M')),...jsonParse($['getdata'](_0x1a79('‫22','@#zn'))||'[]')[_0x1a79('‫23','m5yA')](_0xf67ff3=>_0xf67ff3[_0x1a79('‫24','zA)B')])]['filter'](_0x442f15=>!!_0x442f15);}!(async()=>{var _0x407370={'YjwoA':function(_0x214e1c,_0x628817){return _0x214e1c!=_0x628817;},'hLMAW':function(_0x14c69e,_0x2cb6cf){return _0x14c69e!=_0x2cb6cf;},'oroCE':function(_0x5ca886,_0x4a2e79){return _0x5ca886===_0x4a2e79;},'MwVuJ':_0x1a79('‮25','bYBH'),'XZHPJ':function(_0x2d0831,_0x459375){return _0x2d0831!=_0x459375;},'CoQTU':'【中了100的券，找群主回收】','zDoMz':function(_0x2ee350,_0x12b58c){return _0x2ee350+_0x12b58c;},'FEZCU':function(_0x143669,_0x3fcafc){return _0x143669===_0x3fcafc;},'yxDqT':_0x1a79('‫26','zA)B'),'yLkkZ':function(_0x4d380c,_0x24d6bb){return _0x4d380c!=_0x24d6bb;},'pYHMS':_0x1a79('‫27','@#zn'),'EqoPk':_0x1a79('‮28','S#9K'),'gApLf':_0x1a79('‫29','nDwu'),'QPPZg':function(_0x2dfa38,_0x5f1092){return _0x2dfa38*_0x5f1092;},'grFgK':function(_0x537dcd,_0x3dbd31){return _0x537dcd-_0x3dbd31;},'FCqFJ':function(_0x17882e,_0x113346){return _0x17882e(_0x113346);},'WOfEh':_0x1a79('‫2a','gOth'),'OGtkW':'《《《《《《','LEJCT':'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection','cJoHW':_0x1a79('‫2b','Ve3%'),'uZzwB':_0x1a79('‮2c','oYZF'),'AjgBW':'application/x-www-form-urlencoded','fKQtZ':_0x1a79('‮2d','%#S@'),'qQEXx':'cors','uZwrw':'no-referrer-when-downgrade','smmCL':'POST','JxeaV':function(_0x4c7ecb,_0x5d98dc,_0x3513e7){return _0x4c7ecb(_0x5d98dc,_0x3513e7);},'QTOPj':_0x1a79('‮2e','t8*]'),'TZoEb':_0x1a79('‫2f','Ve3%'),'MzHWb':_0x1a79('‫30','G*%^')};if(!cookiesArr[0x0]){$[_0x1a79('‮31','oYZF')]($['name'],_0x1a79('‮32','G*%^'),_0x407370[_0x1a79('‫33','Hr4e')],{'open-url':_0x407370['pYHMS']});return;}let _0x3fec2c=new Date()['Format']('s.S');let _0x231780=0x3c;console['log'](_0x407370[_0x1a79('‫34','GF8O')]+_0x231780);if(_0x3fec2c<0x3b){if(_0x407370[_0x1a79('‮35','S#9K')](_0x407370[_0x1a79('‮36','O9M6')],_0x407370[_0x1a79('‫37','gOth')])){let _0x218c47=_0x407370['QPPZg'](_0x407370['grFgK'](_0x231780,_0x3fec2c),0x3e8);console[_0x1a79('‮1d','HCcI')](_0x1a79('‫38','u[Se')+_0x218c47/0x3e8+_0x1a79('‫39','Zep9'));await _0x407370[_0x1a79('‮3a','Ve3%')](sleep,_0x218c47);}else{console['log'](json);var _0x505fb5='成功';if(_0x407370[_0x1a79('‫3b','*BzJ')](json,null)&&json[_0x1a79('‮3c','zA)B')]!=null&&_0x407370[_0x1a79('‮3d','*BzJ')](json[_0x1a79('‫3e','m5yA')]['indexOf'](_0x505fb5),-0x1)){notify[_0x1a79('‫3f','QREd')](_0x1a79('‮40','gOth'),json[_0x1a79('‮41','Hr4e')]);}}}console['log'](_0x407370['zDoMz'](_0x407370['WOfEh'],getCurrentDateTimeT())+_0x407370['OGtkW']);for(let _0x19c318=0x0;_0x19c318<cookiesArr[_0x1a79('‮42','@#zn')];_0x19c318++){if(cookiesArr[_0x19c318]){cookie=cookiesArr[_0x19c318];$[_0x1a79('‫43','9%^o')]=_0x407370['FCqFJ'](decodeURIComponent,cookie[_0x1a79('‮44','*fLt')](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x1a79('‫45','fkHy')]=_0x19c318+0x1;$[_0x1a79('‫46','QREd')]=!![];$['nickName']='';message='';console[_0x1a79('‫47','lj$U')](_0x1a79('‮48','stE7')+$[_0x1a79('‫49','oYZF')]+'】'+($[_0x1a79('‫4a','@#zn')]||$[_0x1a79('‫4b','!nqs')])+_0x1a79('‮4c','!nqs'));if(!$[_0x1a79('‮4d','!ip8')]){$[_0x1a79('‫4e','9%^o')]($['name'],_0x1a79('‮4f','8sUZ'),_0x1a79('‮50','7S)M')+$[_0x1a79('‫51','QREd')]+'\x20'+($[_0x1a79('‮52','stE7')]||$[_0x1a79('‮53','Hr4e')])+_0x1a79('‮54','nDwu'),{'open-url':_0x407370[_0x1a79('‮55','lj$U')]});continue;}console[_0x1a79('‮56','9%^o')]('\x0a开始抢\x20500-100券\x20');await fetch(_0x407370[_0x1a79('‮57','u[Se')],{'headers':{'accept':_0x407370['cJoHW'],'accept-language':_0x407370[_0x1a79('‮58','WMlN')],'content-type':_0x407370[_0x1a79('‫59','85vp')],'sec-ch-ua':'\x22\x20Not;A\x20Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x2297\x22,\x20\x22Chromium\x22;v=\x2297\x22','sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x1a79('‮5a','gOth'),'sec-fetch-dest':_0x407370[_0x1a79('‮5b','bYBH')],'sec-fetch-mode':_0x407370[_0x1a79('‫5c','nDwu')],'sec-fetch-site':'same-site','cookie':cookie,'Referer':_0x1a79('‮5d','G*%^'),'Referrer-Policy':_0x407370[_0x1a79('‫5e','O9M6')]},'body':_0x1a79('‫5f','22@B'),'method':_0x407370['smmCL']})['then'](_0x25dcab=>_0x25dcab['json']())['then'](_0x46c539=>{if(_0x407370['oroCE'](_0x1a79('‫60','HCcI'),_0x407370['MwVuJ'])){return new Promise(_0x6c778f=>setTimeout(_0x6c778f,timeout));}else{console[_0x1a79('‫61','7S)M')](_0x46c539);var _0x38407e='成功';if(_0x46c539!=null&&_0x407370['XZHPJ'](_0x46c539[_0x1a79('‫62','*fLt')],null)&&_0x46c539[_0x1a79('‫63','O9M6')][_0x1a79('‫64','btTM')](_0x38407e)!=-0x1){notify['sendNotify'](_0x1a79('‮65','u[Se'),_0x46c539[_0x1a79('‮41','Hr4e')]+_0x407370['CoQTU']);}}});console[_0x1a79('‫66','t8*]')](_0x1a79('‮67','Zep9'));await _0x407370[_0x1a79('‮68','u[Se')](fetch,'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection',{'headers':{'accept':_0x407370[_0x1a79('‮69','WMlN')],'accept-language':_0x407370[_0x1a79('‮6a','hwaA')],'content-type':_0x407370[_0x1a79('‫6b','oYZF')],'sec-ch-ua':_0x1a79('‮6c','gOth'),'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x407370[_0x1a79('‫6d','u[Se')],'sec-fetch-dest':_0x407370[_0x1a79('‫6e','OW%d')],'sec-fetch-mode':_0x407370[_0x1a79('‫6f','%#S@')],'sec-fetch-site':_0x1a79('‫70','WMlN'),'cookie':cookie,'Referer':_0x407370[_0x1a79('‮71','boFS')],'Referrer-Policy':_0x407370[_0x1a79('‮72','zA)B')]},'body':_0x407370[_0x1a79('‮73','OW%d')],'method':_0x407370['smmCL']})['then'](_0x27e36a=>_0x27e36a[_0x1a79('‫74','O9M6')]())[_0x1a79('‫75','lPxY')](_0x284499=>{var _0x21385d={'wKhkz':function(_0x41c8b4,_0x479396){return _0x407370[_0x1a79('‫76','G*%^')](_0x41c8b4,_0x479396);},'xwjse':function(_0x20cafa,_0x4e29e0){return _0x407370[_0x1a79('‫77','m5yA')](_0x20cafa,_0x4e29e0);},'LJHiB':_0x1a79('‮78','nDwu')};if(_0x407370[_0x1a79('‫79','OW%d')](_0x407370[_0x1a79('‫7a','lPxY')],_0x407370[_0x1a79('‮7b','lj$U')])){console[_0x1a79('‫7c','G*%^')](_0x284499);var _0x5b19c5='成功';if(_0x407370[_0x1a79('‫7d','oYZF')](_0x284499,null)&&_0x407370['yLkkZ'](_0x284499['subCodeMsg'],null)&&_0x407370['yLkkZ'](_0x284499['subCodeMsg'][_0x1a79('‮7e','A7U7')](_0x5b19c5),-0x1)){notify[_0x1a79('‫7f','*fLt')](_0x1a79('‮80','fkHy'),_0x284499[_0x1a79('‫81','8l)T')]);}}else{console[_0x1a79('‮56','9%^o')](_0x284499);var _0x2247d1='成功';if(_0x21385d['wKhkz'](_0x284499,null)&&_0x21385d['wKhkz'](_0x284499[_0x1a79('‫82','!ip8')],null)&&_0x284499[_0x1a79('‫83','boFS')][_0x1a79('‫84','Ve3%')](_0x2247d1)!=-0x1){notify['sendNotify']('抢500-100券',_0x21385d[_0x1a79('‫85','7S)M')](_0x284499[_0x1a79('‫86','!nqs')],_0x21385d[_0x1a79('‮87','nDwu')]));}}});}}})()['catch'](_0x58156a=>{$[_0x1a79('‫88','Ve3%')]('','❌\x20'+$[_0x1a79('‫89','t8*]')]+_0x1a79('‮8a','Zep9')+_0x58156a+'!','');})['finally'](()=>{$[_0x1a79('‮8b','pM3Z')]();});;_0xodz='jsjiami.com.v6';

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}