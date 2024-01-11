import{i as c,S as g,a as h}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();c.settings({position:"topRight",timeout:5e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});const b=new g(".gallery a",{captionsData:"alt",captionDelay:250}),x="41671607-e33db59ab0332d081087354c8",v="https://pixabay.com/api/?",n={key:x,orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:40,page:1,q:""},l=document.querySelector(".search-form"),u=document.querySelector("div[data-loader='search']"),m=document.querySelector(".gallery"),p=document.querySelector("button[data-pagination"),f=document.querySelector("div[data-loader='pagination']"),d=document.querySelector(".nomore-msg");p.addEventListener("click",q);l.addEventListener("submit",S);function S(s){s.preventDefault();const t=l.elements.searchStr.value.trim();if(!t){l.reset(),c.error({message:"Search field cannot be empty!"});return}m.textContent="",u.style.display="block",p.style.display="none",d.style.display="none",n.q=t,n.page=1,y(n),l.reset()}function q(){f.style.display="block",y(n)}async function y(s){try{const i=(await h.get(v,{params:s})).data;if(i.hits.length==0){c.warning({message:"Sorry, there are no images matching<br> your search query.Please try again!"});return}P(i.hits),L(i.totalHits)}catch(t){c.error({message:`Api request error: ${t}`})}}function L(s){if(s<=n.per_page*n.page?(p.style.display="none",d.style.display="block"):(n.page+=1,p.style.display="block",d.style.display="none"),u.style.display="none",f.style.display="none",n.page>2){const t=m.children[0].getBoundingClientRect().height;window.scrollBy({left:0,top:t*2+12,behavior:"smooth"})}}function P(s){m.insertAdjacentHTML("beforeend",s.map(w).join("")),b.refresh()}const w=({largeImageURL:s,webformatURL:t,tags:i,likes:a,views:e,comments:o,downloads:r})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <div class="item-wrap">
          <div class="image-wrap">
            <img class="gallery-image" src="${t}" alt="${i}" />
          </div>
          <ul class="metabox-list">
            <li class="mbox-info">
              <p class="mbox-info-title">Likes</p>
              <span class="mbox-info-descr">${a}</span>
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
              <span class="mbox-info-descr">${r}</span>
            </li>
          </ul>
        </div>
      </a>
    </li>`;
//# sourceMappingURL=commonHelpers.js.map
