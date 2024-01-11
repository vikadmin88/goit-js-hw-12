import{i,S as g,a as h}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();i.settings({position:"topRight",timeout:5e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});const b=new g(".gallery a",{captionsData:"alt",captionDelay:250}),v="41671607-e33db59ab0332d081087354c8",x="https://pixabay.com/api/?",n={key:v,orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:40,page:1,q:""},c=document.querySelector(".search-form"),p=document.querySelector("div[data-loader='search']"),u=document.querySelector(".gallery"),d=document.querySelector("button[data-pagination"),m=document.querySelector("div[data-loader='pagination']"),f=document.querySelector("button[data-goup");f.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));d.addEventListener("click",S);c.addEventListener("submit",L);function L(s){s.preventDefault();const t=c.elements.searchStr.value.trim();if(!t){c.reset(),i.error({message:"Search field cannot be empty!"});return}u.innerHTML="",p.style.display="block",d.style.display="none",f.style.display="none",n.q=t,n.page=1,y(n),c.reset()}function S(){m.style.display="block",y(n)}async function y(s){try{const r=(await h.get(x,{params:s})).data;if(r.hits.length==0){i.warning({message:"Sorry, there are no images matching<br> your search query.Please try again!"});return}q(r.hits),w(r.totalHits)}catch(t){p.style.display="none",m.style.display="none",i.error({message:`Api request error: ${t}`})}}function w(s){if(s<=n.per_page*n.page?(d.style.display="none",f.style.display="block",i.warning({message:"We're sorry, but you've reached the end of search results."})):(n.page+=1,d.style.display="block"),p.style.display="none",m.style.display="none",n.page>2){const t=u.children[0].getBoundingClientRect().height;window.scrollBy({left:0,top:t*2+12,behavior:"smooth"})}}function q(s){u.insertAdjacentHTML("beforeend",s.map(k).join("")),b.refresh()}const k=({largeImageURL:s,webformatURL:t,tags:r,likes:l,views:e,comments:o,downloads:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <div class="item-wrap">
          <div class="image-wrap">
            <img class="gallery-image" src="${t}" alt="${r}" />
          </div>
          <ul class="metabox-list">
            <li class="mbox-info">
              <p class="mbox-info-title">Likes</p>
              <span class="mbox-info-descr">${l}</span>
            </li>
            <li class="mbox-info">
              <p class="mbox-info-title">Views</p>
              <span class="mbox-info-descr">${e}</span>
            </li>
            <li class="mbox-info">
              <p class="mbox-info-title">Comments</p>
              <span class="mbox-info-descr">${o}</span>
            </li>
            <li class="mbox-info">
              <p class="mbox-info-title">Downloads</p>
              <span class="mbox-info-descr">${a}</span>
            </li>
          </ul>
        </div>
      </a>
    </li>`;
//# sourceMappingURL=commonHelpers.js.map
