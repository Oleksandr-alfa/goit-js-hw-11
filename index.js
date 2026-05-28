import{a as g,S as y,i as l}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(s){return g.get("https://pixabay.com/api/",{params:{key:"55967578-63fe6e26d403e30fe0ce454ba",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}let n=null;const f=document.querySelector(".loader"),c=document.querySelector(".gallery");function b(s){if(!s||s.length===0)return c.innerHTML="",null;const o=s.map(({largeImageURL:r,tags:i,previewURL:e,webformatURL:t,likes:a,views:p,comments:m,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
        <img class="gallery-img"
        src="${e}"
        data-source="${r}"
        alt="${i}"
        width="360"/></a>
        <div class="gallery-img-info-box">
        <p class="gallery-img-info-text"><b>Likes</b><span>${a}</span></p>
        <p class="gallery-img-info-text"><b>Views</b><span>${p}</span></p>
        <p class="gallery-img-info-text"><b>Comments</b><span>${m}</span></p>
        <p class="gallery-img-info-text"><b>Downloads</b><span>${d}</span></p>
      </div></li> `).join("");return c.innerHTML=o,n?n.refresh():n=new y(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}),n}function L(){f.classList.remove("visible")}function S(){f.classList.add("visible")}const u=document.querySelector(".form");u.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();o&&(L(),h(o).then(r=>{const i=r.data;if(i.hits.length===0)throw new Error("NO_RESULTS");b(i.hits)}).catch(r=>r.message==="NO_RESULTS"?(l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):(l.error({title:"Error",message:r.message,position:"topRight"}),[])).finally(()=>{S(),u.reset()}))});
//# sourceMappingURL=index.js.map
