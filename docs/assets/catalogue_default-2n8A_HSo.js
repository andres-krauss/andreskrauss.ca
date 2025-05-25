function f(){const n=document.getElementById("gridContainer");if(!n){console.error("❌ #gridContainer not found in DOM");return}const h=n.dataset.csv||"data/catalogue/catalogue.csv",y=parseInt(n.dataset.cols)||3,v=getComputedStyle(document.documentElement).getPropertyValue("--gap-default").trim()||"1rem";Object.assign(n.style,{display:"flex",flexWrap:"wrap",gap:v,justifyContent:"flex-start"});function _(o,e){fetch(o).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.text()}).then(t=>{const i=Papa.parse(t.trim(),{skipEmptyLines:!0});e(i.data)}).catch(t=>console.error("❌ Failed to fetch CSV:",t))}function x(o,e,t,i,d,a,s,r,g,u){let c="";const m=r.trim();return m.startsWith("http")&&(c=`<a href="${m}" target="_blank">
                <img src="media/icons/linkedin.png" style="width: 25px" alt="LinkedIn">
            </a>`),`
        <div class="product_cell">
            <div class="img_container" style="width: 100%; height: auto; display: block; overflow: hidden; margin-bottom: 20px;">
                <img src="${e}" alt="${t}" style="width: 100%; height: auto; display: block; object-fit: cover;">
            </div>
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h2 style="margin: 0;">${t}</h2>
                <div style="display: flex; flex-direction: column; align-items: end; gap: 4px;">
                    <span style="font-size: 0.9rem;">${d}</span>
                    ${c}
                </div>
            </div>
            <div>
                <span>${i}</span>
            </div>
            <p>${a}</p>
        </div>
        `}function p(){const o=window.innerWidth<=600,e=window.innerWidth<=900,t=parseFloat(getComputedStyle(n).gap)||0;let i=y;o?i=1:e&&(i=2);const a=`calc((100% - ${(i-1)*t}px) / ${i})`;for(const s of n.children)s.style.flex=`1 1 ${a}`,s.style.maxWidth=a}function w(o){for(let e=1;e<o.length;e++){const t=o[e];if(t.length>=10){const[,i,d,a,s,r,g,u,c,m]=t.map(b=>b.trim()),C=x(e,i,d,a,s,r,g,u),l=document.createElement("div");l.classList.add("grid-item"),l.innerHTML=C,l.style.boxSizing="border-box",n.appendChild(l)}}p()}window.addEventListener("resize",p),_(h,w)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();
