import{a as L,S as x,N as I,K as j,M as O,i as b,b as A,A as C,c as P}from"./assets/vendor-bcca9cd9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const m=document.querySelector(".burger-icon"),h=document.querySelector(".close-modal"),c=document.querySelector(".modal-header"),f=()=>{c.classList.remove("is-active"),c.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{m.style.display="block",h.style.display="none"},500)};m.addEventListener("click",()=>{c.classList.add("is-active"),c.classList.remove("is-hidden"),m.style.display="none",h.style.display="block",document.body.classList.add("modal-open")});h.addEventListener("click",f);c.addEventListener("click",e=>{e.target===c&&f()});const T=document.querySelectorAll(".modal-content .header-menu-link");T.forEach(e=>{e.addEventListener("click",f)});const l=document.querySelectorAll(".switch-theme-checkbox");document.querySelector(".switch-theme-wrapper");const i=document.querySelector("body"),p="theme",v=localStorage.getItem(p);addEventListener("load",()=>{v==="dark"&&(i.classList.add("dark"),l.forEach(e=>{e.checked=!0})),v==="light"&&(i.classList.add("light"),l.forEach(e=>{e.checked=!1}))});l.forEach(e=>{e.addEventListener("click",()=>{if(e.checked===!0){localStorage.setItem(p,"dark"),i.classList.add("dark"),i.classList.remove("light"),l.forEach(t=>{t.checked=!0});return}else{localStorage.setItem(p,"light"),i.classList.remove("dark"),i.classList.add("light"),l.forEach(t=>{t.checked=!1});return}})});const M={projectList:document.querySelector(".my-projects-list"),projectsItems:document.querySelectorAll(".my-projects-item"),projectsBtn:document.querySelector(".my-project-btn")},{projectList:D,projectsItems:g,projectsBtn:S}=M;S.addEventListener("click",k);let u=0;const $=3;function k(){for(let e=0;e<$;e++){if(u>=g.length){S.style.display="none";break}g[u].classList.remove("is-hidden"),u++}}k();const N="https://portfolio-js.b.goit.study/api";async function R(){return(await L.get(`${N}/reviews`)).data}const _=document.querySelector(".swiper-wrapper");async function B(e){const t=e.map(({author:n,avatar_url:r,review:o})=>`        
    <li class="reviews-list-item swiper-slide">
          <p class="reviews-item">
            ${o}
          </p>
          <div class="reviews-list-conteiner">
              <img
                src="${r}"
                alt="natalia"
                width="40"
                height="40"
                class="reviews-img"
              />
            <h3 class="reviews-second-title">${n}</h3>
          </div>
        </li>`).join("");_.insertAdjacentHTML("beforeend",t)}document.querySelector(".reviews-list");const z=document.querySelector(".list-conteiner");async function E(){try{const e=await R();B(e),removeEventListener("load",E)}catch{const t=`
            <div class="errorContainer">
                <h3 class="not-found-title">Oops, something went wrong...😱</h3>
                <p class="not-found-text">Reviews not found..</p>
            </div>
          `;z.innerHTML=t,b.show({message:"Oops, there are issues with showing reviews!",position:"topRight",backgroundColor:"#EF4040",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",theme:"dark",timeout:5e3,closeOnClick:!0})}}addEventListener("load",E);new x(".mySwiper",{modules:[I,j,O],navigation:{nextEl:".reviews-btn-right",prevEl:".reviews-btn-left"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2},onlyInViewPort:!0,autoHeight:!0}});const H="/js_103_zolegov/assets/sprite-f4ef88fc.svg",U="https://portfolio-js.b.goit.study/api",y=document.querySelector(".input-success-icon"),w=document.querySelector("body"),d=A.create(`
    <div class="modal js-modal-window">
    <button class="modal-close-btn">
        <svg class="modal-img">
            <use href="${H}#icon-cross"></use>
        </svg>
    </button>
        <div class="text-content-modal">
        <h3 class="text text-modal-first">
            Thank you for your interest in cooperation!
        </h3>
        <p class="text text-modal-second">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
    </div>
        </div>
`,{onClose:e=>{w.classList.remove("modal-open"),removeEventListener("keydown",q)},onShow:e=>{w.classList.add("modal-open")}});d.element().querySelector(".modal-close-btn").addEventListener("click",()=>{d.close()});document.querySelector(".input-text").addEventListener("blur",()=>{const e=document.querySelector(".error-message p"),t=document.querySelector(".work-together-input").querySelector('input[name="user-email"]'),n=t.value.trim(),r=document.querySelector(".work-together-input").querySelector(".error-message");if(F(n))t.classList.remove("invalid"),e.textContent="",r.style.display="none",y.style.display="block";else{t.classList.add("invalid"),e.textContent="Invalid email, try again",r.style.display="block",y.style.display="none",setTimeout(()=>{t.classList.remove("invalid"),e.textContent="",r.style.display="none"},5e3);return}});const V=document.querySelector(".work-together-input");function q(e){e.keyCode===27&&d.close()}V.addEventListener("submit",async e=>{e.preventDefault();const t=e.target,r=t.querySelector('input[name="user-email"]').value.trim(),s=t.querySelector('textarea[name="comments"]').value.trim();try{(await L.post(`${U}/requests`,{email:r,comment:s})).status===201&&(d.show(),t.reset(),y.style.display="none",addEventListener("keydown",q))}catch{b.error({class:"error",message:"Error while submitting the form, please try again.",position:"topCenter",timeout:2e3})}});function F(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}new C(".accordion-container",{openOnInit:[0]});P.init({delay:100});
//# sourceMappingURL=commonHelpers.js.map