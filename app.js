"use strict";
(function(){
const data = (typeof SITE_CONTENT==="object" && SITE_CONTENT) || {};
const el = id => document.getElementById(id);
const esc = x => String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const url = x => {if(typeof x!=="string")return ""; const u=x.trim();return /^https:\/\//.test(u)||/^[\w./%() -]+$/.test(u)&&!u.includes("..")?esc(u):""};
function render(items){
if(!Array.isArray(items)||!items.length)return '<p class="empty">资料正在整理中。</p>';
return items.map(x=>{
const p=url(x.pdf),s=url(x.ppt);
const links=(p?'<a href="'+p+'" target="_blank" rel="noopener noreferrer">PDF ↗</a>':"")+(s?'<a href="'+s+'" target="_blank" rel="noopener noreferrer">PPT ↗</a>':"");
return '<article class="item"><div><p class="meta">'+esc(x.category||"")+'</p><h3>'+esc(x.title)+'</h3><p>'+esc(x.description||"")+'</p></div><div class="links">'+(links||'<span class="placeholder">待上传</span>')+'</div></article>';
}).join("");
}
el("lecture-list").innerHTML=render(data.lectures);
el("catalogue-list").innerHTML=render(data.catalogues);
el("about-body").textContent=data.about||"";
el("year").textContent=String(new Date().getFullYear());
})();