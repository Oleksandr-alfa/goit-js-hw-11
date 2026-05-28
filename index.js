import{a as p,S as m,i as l}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(r){return p.get("https://pixabay.com/api/",{params:{key:"55967578-63fe6e26d403e30fe0ce454ba",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}let a=null;const u=document.querySelector(".loader"),f=document.querySelector(".gallery");function g({largeImageURL:r,webformatURL:o,tags:i,likes:s,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
        <img class="gallery-img"
        src="${o}"
        data-source="${r}"
        alt="${i}"
        width="360"/></a>
        <div class="gallery-img-info-box">
        <p class="gallery-img-info-text"><b>Likes</b><span>${s}</span></p>
        <p class="gallery-img-info-text"><b>Views</b><span>${e}</span></p>
        <p class="gallery-img-info-text"><b>Comments</b><span>${t}</span></p>
        <p class="gallery-img-info-text"><b>Downloads</b><span>${n}</span></p>
      </div></li> `}function y(r){if(!r||r.length===0)return null;const o=r.map(g).join("");return f.innerHTML=o,a?a.refresh():a=new m(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}),a}function h(){u.classList.add("is-visible")}function b(){u.classList.remove("is-visible")}function L(){f.innerHTML=""}const c=document.querySelector(".form");c.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim(),i="NO_RESULTS";o&&(L(),h(),d(o).then(s=>{if(s.length===0)throw new Error(i);y(s)}).catch(s=>{s.message===i?l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):l.error({title:"Error",message:s.message,position:"topRight"})}).finally(()=>{b(),c.reset()}))});
//# sourceMappingURL=index.js.map
