document.addEventListener("DOMContentLoaded",function(){function c(e,s){fetch(e).then(t=>t.text()).then(t=>{Papa.parse(t,{header:!1,skipEmptyLines:!0,complete:function(n){s(n.data)}})})}function o(e,s){s||(s=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");const t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=t.exec(s);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function i(e,s){const t=s[parseInt(e)];if(t){const n=`data/catalogue/images/${t[1]}`,a=t[2],r=t[3],p=t[4];t[5];const u=t[6];t[7],t[8],t[9];const m=u.split("|").map(v=>`<p class="ms-2">${v}</p>`).join(""),f=`
                <div class="container product_details">
                    <section class="main_content mb-0">
                        <div class="row text-start">
                            <!-- Left Column -->
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <span class="fs-1">${a}</span>
                                    <span class="fs-3 ms-auto">${p}</span>
                                </div>
                                <div class="fs-6 mb-3">${r}</div>
                                <img src="${n}" alt="${a}" class="img-fluid w-100">
                            </div>
                            <!-- Right Column -->
                            <div class="col-md-6">
                                <div style="margin-top: 5.75rem !important;">${m}</div>
                            </div>
                        </div>
                    </section>
                </div>
            `,g=document.getElementById("productDetailsContainer");g.innerHTML=f}}const d="data/catalogue/catalogue.csv",l=o("index");c(d,function(e){i(l,e)})});
