function ReportIssues(){let e=this;const s=document.getElementById("nr-bug-container"),t=document.getElementById("nr-bug-url-content"),l=document.getElementById("nr-bug-doc-content"),n=document.getElementById("nr-bug-issue-content"),o=document.getElementById("send"),y=document.getElementById("nr-bug-url"),c=document.getElementById("nr-bug-text"),d=document.getElementById("nr-bug-issues"),i=document.getElementById("close"),a=document.getElementById("footerClose");a.style.display="none";const p=document.getElementById("goBack");p.style.display="none";const u=document.getElementById("result");u.style.display="none";const r=document.getElementById("nr-bug-success"),m=document.getElementById("nr-bug-fail"),g=document.getElementById("bug-content"),b=document.getElementById("openInfo"),I=document.getElementById("info");I.style.display="none";const k=document.getElementById("closeInfo");function E(e){"url"===e?(s.classList.remove("nr-doc"),l.style.display="none",t.style.display="flex",n.style.height="calc(100% - 60px)"):(s.classList.add("nr-doc"),l.style.display="flex",t.style.display="none",n.style.height="calc(100% - 120px)")}k.style.display="none",e.issue={},b.onclick=()=>{g.style.display="none",I.style.display="block",b.style.display="none",o.style.display="none",k.style.display="block"},k.onclick=()=>{g.style.display="block",I.style.display="none",b.style.display="block",o.style.display="block",k.style.display="none"},i.onclick=()=>{window.close()},a.onclick=()=>{window.close()},p.onclick=function(){u.style.display="none",a.style.display="none",g.style.display="block",p.style.display="none",o.style.display="block",b.style.display="block"},o.onclick=()=>{e.issue.msg=d.value;const s=new XMLHttpRequest;s.open("POST","https://zbmbj9907e.execute-api.us-east-1.amazonaws.com/prod/issue"),s.onreadystatechange=function(){g.style.display="none",u.style.display="block",a.style.display="block",o.style.display="none",b.style.display="none",this.readyState===XMLHttpRequest.DONE&&this.status>=400&&(m.style.display="block",r.style.display="none",p.style.display="block"),this.readyState===XMLHttpRequest.DONE&&200===this.status&&(r.style.display="block",m.style.display="none")},s.onerror=function(e){g.style.display="none",u.style.display="block",r.style.display="none",m.style.display="block",p.style.display="block",a.style.display="block",o.style.display="none",b.style.display="none"};const t=JSON.stringify(e.issue);try{s.send(t)}catch(e){}},chrome.runtime.sendMessage({fn:"getIssue"},(function(s){e.issue={voiceType:s.voiceType,freeVoice:s.freeVoice,premVoice:s.premVoice,plusVoice:s.plusVoice,email:s.email,app:"ext",speed:s.speed,volume:s.volume,textSource:s.docType,provider:"ext",index:s.index,originalText:s.originalText,proccessedText:s.proccessedText,userAgent:navigator.userAgent,appVersion:s.appVersion,os:s.os,platform:s.platform},s.docType&&"html"!==s.docType?(e.issue.docTexts=s.texts,E("doc"),c.value=e.issue.docTexts):(e.issue.webpageUrl=s.tab.url,E("url"),y.value=e.issue.webpageUrl)}))}var reportIssues=reportIssues||new ReportIssues;