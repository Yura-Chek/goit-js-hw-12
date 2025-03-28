import{S as q,a as S,i as o}from"./assets/vendor-mj6yH6lW.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const g=document.querySelector(".gallery");let x=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function E(){g.innerHTML=""}function h(t,s=!0){s&&E();const r=t.map(({webformatURL:i,largeImageURL:e,tags:a,likes:n,views:L,comments:v,downloads:w})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${i}" alt="${a}" class="gallery-image" />
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${n}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${L}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${v}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${w}</p>
          </li>
        </ul>
        </div>
      </li>`).join("");g.insertAdjacentHTML("beforeend",r),x.refresh()}const O="49390436-eaa1c4fe3003ec0e1553f6322",$="https://pixabay.com/api/";async function y(t,s=15,r=1){try{return(await S.get($,{params:{key:O,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}})).data}catch(i){throw console.error("Error fetching images:",i),i}}const m=document.querySelector("form"),p=document.querySelector(".gallery"),d=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let u=15,c=1,f,b;l.classList.add("hidden");o.settings({position:"topRight"});m.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements["search-text"].value.trim();if(!s){o.error({title:"Error",message:"Please enter a search query!"});return}s!==f&&(f=s,c=1,p.innerHTML=""),p.innerHTML="",d.classList.add("visible"),l.classList.add("hidden");try{const r=await y(s,u,c);b=r.totalHits,r.hits.length===0?o.warning({title:"Oops!",message:"No images found. Try again!"}):(h(r.hits),r.hits.length===u&&l.classList.remove("hidden"))}catch{o.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{d.classList.remove("visible"),m.reset()}});l.addEventListener("click",async()=>{l.classList.add("hidden"),d.classList.add("visible"),c+=1;try{const t=await y(f,u,c);t.hits.length>0&&(h(t.hits,!1),T(".gallery-item",3)),c*u>=b?(l.classList.add("hidden"),o.info({message:"We're sorry, but you've reached the end of search results."})):l.classList.remove("hidden")}catch(t){o.error({message:t.message})}finally{d.classList.remove("visible")}});function T(t,s){const r=document.querySelector(t);if(r){const i=r.getBoundingClientRect().height;window.scrollBy({top:i*s,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
