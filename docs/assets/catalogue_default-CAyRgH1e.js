function g(){const s=document.getElementById("gridContainer");if(!s){console.error("❌ #gridContainer not found in DOM");return}const h=s.dataset.csv||"data/catalogue/catalogue.csv",f=`col-md-${12/(parseInt(s.dataset.cols)||4)}`;function _(n,e){fetch(n).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.text()}).then(t=>{const i=Papa.parse(t.trim(),{skipEmptyLines:!0});e(i.data)}).catch(t=>console.error("❌ Failed to fetch CSV:",t))}function $(n,e,t,i,a,c,m,r,p,u){let d="";const o=r.trim();return o.startsWith("http")?(console.log(`🔗 item_A [row ${n}]:`,o),d=`<a href="${o}" target="_blank">
                <img src="media/icons/linkedin.png" style="width: 25px" alt="LinkedIn">
            </a>`):o.length>0&&console.warn(`⚠️ item_A is non-empty but not a URL [row ${n}]:`,o),`
        <div class="product_cell">
            <div class="img_container" style="width: 100%; height: auto; display: block; overflow: hidden; margin-block: 20px;">
                <img src="${e}" alt="${t}" style="width: 100%; height: auto; display: block; object-fit: cover;">
            </div>
            <div class="d-flex">
                <span class="fs-2">${t}</span>
                <span class="fs-6 ms-auto">${a}</span>
            </div>
            <div>
                <span>${i}</span>
                <span>${d}</span>
            </div>
            <p>${c}</p>
        </div>
        `}function v(n){for(let e=1;e<n.length;e++){const t=n[e];if(t.length>=10){const[,i,a,c,m,r,p,u,d,o]=t.map(C=>C.trim()),w=$(e,i,a,c,m,r,p,u),l=document.createElement("div");l.className=`${f} mb-4`,l.innerHTML=w,s.appendChild(l),console.log(`✅ Added product row ${e}: "${a}"`)}else console.warn(`⚠️ Skipping row ${e}, not enough columns:`,t)}}_(h,v)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();
