function U(a){if(!document.getElementById("filter-control-style")){const c=document.createElement("style");c.id="filter-control-style",c.textContent=`
            .filter-control {
                padding: 0.5rem;
                font-family: ${a}, serif;
                font-size: 1rem;
                border: none;
                border-bottom: var(--dotted-line-dark);
                border-right: var(--dotted-line-dark);
                background: none;
                outline: none;
            }

            .filter-control.select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                min-width: 120px;
            }

            @media (max-width: 600px) {
                .filter-control {
                    width: 100% !important;
                }
            }
        `,document.head.appendChild(c)}return`
        <div id="filterWrapper" style="
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            width: 100%;
        ">
            <input id="catalogueSearchInput" type="text" placeholder="Search..." class="filter-control" style="flex: 1;">
            <select id="catalogueYearSelect" class="filter-control select">
                <option value="">All Years ▾</option>
            </select>
            <select id="catalogueOrgSelect" class="filter-control select">
                <option value="">All Orgs ▾</option>
            </select>
        </div>
    `}function q(a){const c=document.getElementById("filterControls");return c.innerHTML=U(a),{searchInput:document.getElementById("catalogueSearchInput"),yearSelect:document.getElementById("catalogueYearSelect"),orgSelect:document.getElementById("catalogueOrgSelect")}}function H(){const a=document.getElementById("gridContainer");if(!a)return console.error("❌ #gridContainer not found in DOM");const c=a.dataset.csv||"data/catalogue/projects-main.csv",A=parseInt(a.dataset.cols)||3,W=getComputedStyle(document.documentElement).getPropertyValue("--gap-default").trim()||"1rem",k="var(--font-mono)",_=W;let d=[];const{searchInput:E,yearSelect:g,orgSelect:h}=q(k);function M(e,t){const i=document.createElement("option");return i.value=e,i.textContent=t,i}function j(e,t){fetch(e).then(i=>i.text()).then(i=>{const n=Papa.parse(i.trim(),{skipEmptyLines:!0});t(n.data)}).catch(i=>console.error("❌ Failed to fetch CSV:",i))}function l(e){return(e==null?void 0:e.trim())||"n/a"}function z(e,t,i,n,o,s,r,p,y,m,v,w,u,L){let x="";const b=l(m);b.startsWith("http")&&(x=`<a href="${b}" target="_blank"><img src="media/icons/linkedin.png" style="width: 25px" alt="LinkedIn"></a>`);const I=L?"max-height: unset;":"max-height: 0; overflow: hidden; transition: max-height 0.3s ease;";return`
        <div class="product_cell-inner" style="box-sizing: border-box; break-inside: avoid; font-family: ${k};">
            <div class="toggle-wrapper" style="position: relative; cursor: pointer;">
                <img src="${l(t)}" alt="${l(i)}" style="width: 100%; height: auto; display: block; object-fit: cover;">
                <div class="reveal-panel" style="${I}">
                    <div style="padding-top: var(--space-block-half);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: var(--space-block-half);">
                            <h2 style="margin: 0;">${l(i)}</h2>
                            <div style="display: flex; flex-direction: row; align-items: center; gap: 4px;">
                                <span style="font-size: 0.9rem; line-height: 1.2">${l(r)}</span>
                                <span class="hide-on-mobile">${x}</span>
                            </div>
                            
                        </div>

                        <div>
                            <li> role: ${l(s)} ${l(o)}</li>
                            <li> Inst: ${l(n)}</li>
                            <li> desc: ${l(p)}</li>
                            <li> id: ${l(u)}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>`}function F(e,t){t.innerHTML="",t.style.display="flex",t.style.flexWrap="wrap",t.style.gap=_;const i=[];for(let n=0;n<e;n++){const o=document.createElement("div");Object.assign(o.style,{flex:"1",display:"flex",flexDirection:"column",gap:_,minWidth:`calc(${100/e}% - ${_})`}),i.push(o),t.appendChild(o)}return i}function S(e){const t=window.innerWidth<=600,i=window.innerWidth<=900;let n=A;t?n=1:i&&(n=2);const o=F(n,a);for(let s=0;s<n;s++)for(let r=s;r<e.length;r+=n){const p=e[r];if(p.length>=11){const y=p.map(f=>l(f)),[m,v,w,u,L,x,b,I,D,G,N,P]=y,V=z(r,v,w,u,L,x,b,I,D,G,N,P,m,t),O=document.createElement("div");O.innerHTML=V;const $=O.firstElementChild;if(!t){const f=$.querySelector(".reveal-panel"),Y=$.querySelector(".toggle-wrapper");let C=!1,B=null;Y.addEventListener("click",()=>{C?(f.style.maxHeight="0",C=!1,clearTimeout(B)):(f.style.maxHeight="500px",C=!0,B=setTimeout(()=>{f.style.maxHeight="0",C=!1},1e4))})}o[s].appendChild($)}}}function T(){const e=E.value.trim().toLowerCase(),t=g.value.trim(),i=h.value.trim(),n=d.filter(o=>{const[,,s,r,,,p,y]=o.map(u=>(u||"n/a").toLowerCase()),m=s.includes(e)||r.includes(e)||y.includes(e),v=!t||p.includes(t),w=!i||r.trim()===i.trim().toLowerCase();return m&&v&&w});S(n)}[E,g,h].forEach(e=>{e.addEventListener("input",T),e.addEventListener("keyup",T)}),j(c,e=>{d=e.slice(1);const t=[...new Set(d.map(n=>n[6].trim()||"n/a"))].sort().reverse(),i=[...new Set(d.map(n=>n[3].trim()||"n/a"))].sort();t.forEach(n=>g.appendChild(M(n,n))),i.forEach(n=>h.appendChild(M(n,n))),S(d)}),window.addEventListener("resize",()=>{const t=window.innerWidth<=600?"100%":"auto";E.style.width=t,g.style.width=t,h.style.width=t,S(d)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H();
