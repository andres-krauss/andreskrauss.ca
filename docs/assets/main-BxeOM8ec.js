(function(){const N=document.createElement("link").relList;if(N&&N.supports&&N.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))g(m);new MutationObserver(m=>{for(const E of m)if(E.type==="childList")for(const k of E.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&g(k)}).observe(document,{childList:!0,subtree:!0});function M(m){const E={};return m.integrity&&(E.integrity=m.integrity),m.referrerPolicy&&(E.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?E.credentials="include":m.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function g(m){if(m.ep)return;m.ep=!0;const E=M(m);fetch(m.href,E)}})();const we="modulepreload",ke=function(O){return"/"+O},_e={},ye=function(N,M,g){let m=Promise.resolve();if(M&&M.length>0){let k=function(s){return Promise.all(s.map(P=>Promise.resolve(P).then(Y=>({status:"fulfilled",value:Y}),Y=>({status:"rejected",reason:Y}))))};document.getElementsByTagName("link");const b=document.querySelector("meta[property=csp-nonce]"),J=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));m=k(M.map(s=>{if(s=ke(s),s in _e)return;_e[s]=!0;const P=s.endsWith(".css"),Y=P?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${Y}`))return;const W=document.createElement("link");if(W.rel=P?"stylesheet":we,P||(W.as="script"),W.crossOrigin="",W.href=s,J&&W.setAttribute("nonce",J),document.head.appendChild(W),P)return new Promise((te,ne)=>{W.addEventListener("load",te),W.addEventListener("error",()=>ne(new Error(`Unable to preload CSS for ${s}`)))})}))}function E(k){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=k,window.dispatchEvent(b),!b.defaultPrevented)throw k}return m.then(k=>{for(const b of k||[])b.status==="rejected"&&E(b.reason);return N().catch(E)})};document.addEventListener("DOMContentLoaded",()=>{const O=`
    <section style="margin: unset; box-shadow: unset;">
            <article>
                <div class="nav-inner">
                    <a class="nav-brand" href="#">AK.</a>
                    <div class="nav-toggle" aria-label="Toggle menu">☰</div>
                    <div class="nav-menu">
                        <li><a class="button_1" href="index.html">Home</a></li>
                        <li><a class="button_1" href="projects.html">Projects</a></li>
                        <li><a class="button_1 k-approved" href="krauss_approved.html">K-Approved</a></li>
                        <li class="nav-dropdown">
                            <a class="button_1 nav-dropdown-toggle" href="#">Other ▾</a>
                        </li>
                    </div>
                </div>
            </article>
            <div class="nav-dropdown-menu">
                <div style="margin-inline: var(--space-inline)">
                    <li><a href="#" class="button_1">Newsletter (WIP)</a></li>
                    <li><a href="#" class="button_1">Glintbloom.io (WIP)</a></li>
                </div>
            </div>
    </section>
    `;document.getElementById("navbarContainer").innerHTML=O;const N=document.querySelector(".nav-toggle"),M=document.querySelector(".nav-menu"),g=document.querySelector(".nav-dropdown-toggle"),m=document.querySelector(".nav-dropdown-menu");function E(){return window.innerWidth<=768}function k(){E()?(N.style.display="block",M.classList.remove("nav-open"),M.style.display="none"):(N.style.display="none",M.style.display="flex",m.style.display="none")}N.addEventListener("click",()=>{M.classList.toggle("nav-open"),M.style.display=M.classList.contains("nav-open")?"flex":"none"}),g.addEventListener("click",b=>{b.preventDefault();const J=m.style.display==="block";m.style.display=J?"none":"block"}),document.addEventListener("click",b=>{!b.target.closest(".nav-dropdown")&&!b.target.closest(".nav-dropdown-menu")&&(m.style.display="none")}),window.addEventListener("resize",k),k()});document.addEventListener("DOMContentLoaded",function(){const O=`
     <section>
         <article>
            <div>
                <span> Krauss 2025 (c)<span class="hide-on-mobile"> – All rights reserved.</span></span>
                <span class="hide-on-mobile">
                    <a href="index.html" class="button_1" style="background-color: black; color: white;">Home</a>
                </span>
            </div>
        </article>
    </section>

    `;document.getElementById("footerContainer").innerHTML=O});(function(){const O=document.getElementById("my-slideshow");if(!O)return;const N=document.createElement("style");N.textContent=`
    .glintfall-slideshow {
      position: relative;
      margin-block: var(--space-block);
      overflow: hidden;
      width: 80%;
      margin-inline: auto;
    }
    
    @media (max-width: 768px) {
      .glintfall-slideshow {
        width: 100%;
        margin-inline: 0;
      }
    }


    .glintfall-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      pointer-events: none;
    }

    .glintfall-slide.active {
      position: relative;
      opacity: 1;
      pointer-events: auto;
    }

    .glintfall-slide img {
      width: 100%;
      height: auto;
      display: block;
    }

    .glintfall-caption-box {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      text-align: center;
      padding: 8px;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.5s ease, transform 0.5s ease;
      font-size: 16px;
      z-index: 5;
      pointer-events: none;
    }

    /* 🔥 Hover triggers caption reveal */
    .glintfall-slideshow:hover .glintfall-caption-box {
      opacity: 1;
      transform: translateY(0);
    }

    .glintfall-nav {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
      pointer-events: none;
    }

    .glintfall-nav button {
      pointer-events: all;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
    }
    `,document.head.appendChild(N);const M=`
    <div class="glintfall-slideshow">
      <div class="glintfall-slide active">
        <img src="data/catalogue/images/ccc_2025.png" />
      </div>
      <div class="glintfall-slide">
        <img src="media/projects/glintbloom-demo.PNG" />
      </div>

      <div class="glintfall-caption-box" id="glint-caption">Hosted competition; very happy with large showing</div>

      <div class="glintfall-nav">
        <button id="glint-prev">❮</button>
        <button id="glint-next">❯</button>
      </div>
    </div>
    `;O.innerHTML=M;const g=Array.from(O.querySelectorAll(".glintfall-slide")),m=["Hosted competition; very happy with large showing.","Webui viewer alternative to Obsidian noteapp; exp w/geo shapes.","Road into the trees"],E=O.querySelector("#glint-caption");let k=0,b;function J(P){g[k].classList.remove("active"),k=(P+g.length)%g.length,g[k].classList.add("active"),E.textContent=m[k]}function s(){b=setInterval(()=>J(k+1),1e4)}O.querySelector("#glint-prev").addEventListener("click",()=>{clearInterval(b),J(k-1),s()}),O.querySelector("#glint-next").addEventListener("click",()=>{clearInterval(b),J(k+1),s()}),s()})();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>document.body.classList.add("visible")):document.body.classList.add("visible");window.addEventListener("load",()=>{setTimeout(()=>{document.body.classList.add("visible")},200)});function Ee(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var le={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var xe=le.exports,ve;function Re(){return ve||(ve=1,function(O,N){((M,g)=>{O.exports=g()})(xe,function M(){var g=typeof self<"u"?self:typeof window<"u"?window:g!==void 0?g:{},m,E=!g.document&&!!g.postMessage,k=g.IS_PAPA_WORKER||!1,b={},J=0,s={};function P(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(t){var n=de(t);n.chunkSize=parseInt(n.chunkSize),t.step||t.chunk||(n.chunkSize=null),this._handle=new he(n),(this._handle.streamer=this)._config=n}).call(this,e),this.parseChunk=function(t,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let u=this._config.newline;u||(i=this._config.quoteChar||'"',u=this._handle.guessLineEndings(t,i)),t=[...t.split(u).slice(r)].join(u)}this.isFirstChunk&&w(this._config.beforeFirstChunk)&&(i=this._config.beforeFirstChunk(t))!==void 0&&(t=i),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+t,i=(this._partialLine="",this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(t=i.meta.cursor,r=(this._finished||(this._partialLine=r.substring(t-this._baseIndex),this._baseIndex=t),i&&i.data&&(this._rowCount+=i.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),k)g.postMessage({results:i,workerId:s.WORKER_ID,finished:r});else if(w(this._config.chunk)&&!n){if(this._config.chunk(i,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=i=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(i.data),this._completeResults.errors=this._completeResults.errors.concat(i.errors),this._completeResults.meta=i.meta),this._completed||!r||!w(this._config.complete)||i&&i.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||i&&i.meta.paused||this._nextChunk(),i}this._halted=!0},this._sendError=function(t){w(this._config.error)?this._config.error(t):k&&this._config.error&&g.postMessage({workerId:s.WORKER_ID,error:t,finished:!1})}}function Y(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),P.call(this,e),this._nextChunk=E?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(n){this._input=n,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),E||(t.onload=ee(this._chunkLoaded,this),t.onerror=ee(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!E),this._config.downloadRequestHeaders){var n,r=this._config.downloadRequestHeaders;for(n in r)t.setRequestHeader(n,r[n])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+i));try{t.send(this._config.downloadRequestBody)}catch(u){this._chunkError(u.message)}E&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(n=>(n=n.getResponseHeader("Content-Range"))!==null?parseInt(n.substring(n.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(n){n=t.statusText||n,this._sendError(new Error(n))}}function W(e){(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),P.call(this,e);var t,n,r=typeof FileReader<"u";this.stream=function(i){this._input=i,n=i.slice||i.webkitSlice||i.mozSlice,r?((t=new FileReader).onload=ee(this._chunkLoaded,this),t.onerror=ee(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var i=this._input,u=(this._config.chunkSize&&(u=Math.min(this._start+this._config.chunkSize,this._input.size),i=n.call(i,this._start,u)),t.readAsText(i,this._config.encoding));r||this._chunkLoaded({target:{result:u}})},this._chunkLoaded=function(i){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(i.target.result)},this._chunkError=function(){this._sendError(t.error)}}function te(e){var t;P.call(this,e=e||{}),this.stream=function(n){return t=n,this._nextChunk()},this._nextChunk=function(){var n,r;if(!this._finished)return n=this._config.chunkSize,t=n?(r=t.substring(0,n),t.substring(n)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function ne(e){P.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){P.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){P.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(i){this._input=i,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=ee(function(i){try{t.push(typeof i=="string"?i:i.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(u){this._streamError(u)}},this),this._streamError=ee(function(i){this._streamCleanUp(),this._sendError(i)},this),this._streamEnd=ee(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=ee(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function he(e){var t,n,r,i,u=Math.pow(2,53),T=-u,K=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,$=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,h=this,L=0,o=0,z=!1,l=!1,f=[],a={data:[],errors:[],meta:{}};function A(p){return e.skipEmptyLines==="greedy"?p.join("").trim()==="":p.length===1&&p[0].length===0}function I(){if(a&&r&&(Q("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(a.data=a.data.filter(function(x){return!A(x)})),q()){let x=function(F,R){w(e.transformHeader)&&(F=e.transformHeader(F,R)),f.push(F)};var d=x;if(a)if(Array.isArray(a.data[0])){for(var p=0;q()&&p<a.data.length;p++)a.data[p].forEach(x);a.data.splice(0,1)}else a.data.forEach(x)}function _(x,F){for(var R=e.header?{}:[],y=0;y<x.length;y++){var c=y,U=x[y],U=((v,S)=>(D=>(e.dynamicTypingFunction&&e.dynamicTyping[D]===void 0&&(e.dynamicTyping[D]=e.dynamicTypingFunction(D)),(e.dynamicTyping[D]||e.dynamicTyping)===!0))(v)?S==="true"||S==="TRUE"||S!=="false"&&S!=="FALSE"&&((D=>{if(K.test(D)&&(D=parseFloat(D),T<D&&D<u))return 1})(S)?parseFloat(S):$.test(S)?new Date(S):S===""?null:S):S)(c=e.header?y>=f.length?"__parsed_extra":f[y]:c,U=e.transform?e.transform(U,c):U);c==="__parsed_extra"?(R[c]=R[c]||[],R[c].push(U)):R[c]=U}return e.header&&(y>f.length?Q("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+y,o+F):y<f.length&&Q("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+y,o+F)),R}var C;a&&(e.header||e.dynamicTyping||e.transform)&&(C=1,!a.data.length||Array.isArray(a.data[0])?(a.data=a.data.map(_),C=a.data.length):a.data=_(a.data,0),e.header&&a.meta&&(a.meta.fields=f),o+=C)}function q(){return e.header&&f.length===0}function Q(p,_,C,d){p={type:p,code:_,message:C},d!==void 0&&(p.row=d),a.errors.push(p)}w(e.step)&&(i=e.step,e.step=function(p){a=p,q()?I():(I(),a.data.length!==0&&(L+=p.data.length,e.preview&&L>e.preview?n.abort():(a.data=a.data[0],i(a,h))))}),this.parse=function(p,_,C){var d=e.quoteChar||'"',d=(e.newline||(e.newline=this.guessLineEndings(p,d)),r=!1,e.delimiter?w(e.delimiter)&&(e.delimiter=e.delimiter(p),a.meta.delimiter=e.delimiter):((d=((x,F,R,y,c)=>{var U,v,S,D;c=c||[",","	","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var ie=0;ie<c.length;ie++){for(var G,ae=c[ie],H=0,Z=0,j=0,B=(S=void 0,new ue({comments:y,delimiter:ae,newline:F,preview:10}).parse(x)),X=0;X<B.data.length;X++)R&&A(B.data[X])?j++:(G=B.data[X].length,Z+=G,S===void 0?S=G:0<G&&(H+=Math.abs(G-S),S=G));0<B.data.length&&(Z/=B.data.length-j),(v===void 0||H<=v)&&(D===void 0||D<Z)&&1.99<Z&&(v=H,U=ae,D=Z)}return{successful:!!(e.delimiter=U),bestDelimiter:U}})(p,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=d.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),a.meta.delimiter=e.delimiter),de(e));return e.preview&&e.header&&d.preview++,t=p,n=new ue(d),a=n.parse(t,_,C),I(),z?{meta:{paused:!0}}:a||{meta:{paused:!1}}},this.paused=function(){return z},this.pause=function(){z=!0,n.abort(),t=w(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){h.streamer._halted?(z=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return l},this.abort=function(){l=!0,n.abort(),a.meta.aborted=!0,w(e.complete)&&e.complete(a),t=""},this.guessLineEndings=function(x,d){x=x.substring(0,1048576);var d=new RegExp(se(d)+"([^]*?)"+se(d),"gm"),C=(x=x.replace(d,"")).split("\r"),d=x.split(`
`),x=1<d.length&&d[0].length<C[0].length;if(C.length===1||x)return`
`;for(var F=0,R=0;R<C.length;R++)C[R][0]===`
`&&F++;return F>=C.length/2?`\r
`:"\r"}}function se(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ue(e){var t=(e=e||{}).delimiter,n=e.newline,r=e.comments,i=e.step,u=e.preview,T=e.fastMode,K=null,$=!1,h=e.quoteChar==null?'"':e.quoteChar,L=h;if(e.escapeChar!==void 0&&(L=e.escapeChar),(typeof t!="string"||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=","),r===t)throw new Error("Comment character same as delimiter");r===!0?r="#":(typeof r!="string"||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var o=0,z=!1;this.parse=function(l,f,a){if(typeof l!="string")throw new Error("Input must be a string");var A=l.length,I=t.length,q=n.length,Q=r.length,p=w(i),_=[],C=[],d=[],x=o=0;if(!l)return H();if(T||T!==!1&&l.indexOf(h)===-1){for(var F=l.split(n),R=0;R<F.length;R++){if(d=F[R],o+=d.length,R!==F.length-1)o+=n.length;else if(a)return H();if(!r||d.substring(0,Q)!==r){if(p){if(_=[],D(d.split(t)),Z(),z)return H()}else D(d.split(t));if(u&&u<=R)return _=_.slice(0,u),H(!0)}}return H()}for(var y=l.indexOf(t,o),c=l.indexOf(n,o),U=new RegExp(se(L)+se(h),"g"),v=l.indexOf(h,o);;)if(l[o]===h)for(v=o,o++;;){if((v=l.indexOf(h,v+1))===-1)return a||C.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:_.length,index:o}),G();if(v===A-1)return G(l.substring(o,v).replace(U,h));if(h===L&&l[v+1]===L)v++;else if(h===L||v===0||l[v-1]!==L){y!==-1&&y<v+1&&(y=l.indexOf(t,v+1));var S=ie((c=c!==-1&&c<v+1?l.indexOf(n,v+1):c)===-1?y:Math.min(y,c));if(l.substr(v+1+S,I)===t){d.push(l.substring(o,v).replace(U,h)),l[o=v+1+S+I]!==h&&(v=l.indexOf(h,o)),y=l.indexOf(t,o),c=l.indexOf(n,o);break}if(S=ie(c),l.substring(v+1+S,v+1+S+q)===n){if(d.push(l.substring(o,v).replace(U,h)),ae(v+1+S+q),y=l.indexOf(t,o),v=l.indexOf(h,o),p&&(Z(),z))return H();if(u&&_.length>=u)return H(!0);break}C.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:_.length,index:o}),v++}}else if(r&&d.length===0&&l.substring(o,o+Q)===r){if(c===-1)return H();o=c+q,c=l.indexOf(n,o),y=l.indexOf(t,o)}else if(y!==-1&&(y<c||c===-1))d.push(l.substring(o,y)),o=y+I,y=l.indexOf(t,o);else{if(c===-1)break;if(d.push(l.substring(o,c)),ae(c+q),p&&(Z(),z))return H();if(u&&_.length>=u)return H(!0)}return G();function D(j){_.push(j),x=o}function ie(j){var B=0;return B=j!==-1&&(j=l.substring(v+1,j))&&j.trim()===""?j.length:B}function G(j){return a||(j===void 0&&(j=l.substring(o)),d.push(j),o=A,D(d),p&&Z()),H()}function ae(j){o=j,D(d),d=[],c=l.indexOf(n,o)}function H(j){if(e.header&&!f&&_.length&&!$){var B=_[0],X=Object.create(null),ce=new Set(B);let ge=!1;for(let re=0;re<B.length;re++){let V=B[re];if(X[V=w(e.transformHeader)?e.transformHeader(V,re):V]){let oe,me=X[V];for(;oe=V+"_"+me,me++,ce.has(oe););ce.add(oe),B[re]=oe,X[V]++,ge=!0,(K=K===null?{}:K)[oe]=V}else X[V]=1,B[re]=V;ce.add(V)}ge&&console.warn("Duplicate headers found and renamed."),$=!0}return{data:_,errors:C,meta:{delimiter:t,linebreak:n,aborted:z,truncated:!!j,cursor:x+(f||0),renamedHeaders:K}}}function Z(){i(H()),_=[],C=[]}},this.abort=function(){z=!0},this.getCharIndex=function(){return o}}function be(e){var t=e.data,n=b[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,fe(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:pe,resume:pe};if(w(n.userStep)){for(var u=0;u<t.results.data.length&&(n.userStep({data:t.results.data[u],errors:t.results.errors,meta:t.results.meta},i),!r);u++);delete t.results}else w(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&fe(t.workerId,t.results)}function fe(e,t){var n=b[e];w(n.userComplete)&&n.userComplete(t),n.terminate(),delete b[e]}function pe(){throw new Error("Not implemented.")}function de(e){if(typeof e!="object"||e===null)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=de(e[t]);return n}function ee(e,t){return function(){e.apply(t,arguments)}}function w(e){return typeof e=="function"}return s.parse=function(e,t){var n=(t=t||{}).dynamicTyping||!1;if(w(n)&&(t.dynamicTypingFunction=n,n={}),t.dynamicTyping=n,t.transform=!!w(t.transform)&&t.transform,!t.worker||!s.WORKERS_SUPPORTED)return n=null,s.NODE_STREAM_INPUT,typeof e=="string"?(e=(r=>r.charCodeAt(0)!==65279?r:r.slice(1))(e),n=new(t.download?Y:te)(t)):e.readable===!0&&w(e.read)&&w(e.on)?n=new ne(t):(g.File&&e instanceof File||e instanceof Object)&&(n=new W(t)),n.stream(e);(n=(()=>{var r;return!!s.WORKERS_SUPPORTED&&(r=(()=>{var i=g.URL||g.webkitURL||null,u=M.toString();return s.BLOB_URL||(s.BLOB_URL=i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",u,")();"],{type:"text/javascript"})))})(),(r=new g.Worker(r)).onmessage=be,r.id=J++,b[r.id]=r)})()).userStep=t.step,n.userChunk=t.chunk,n.userComplete=t.complete,n.userError=t.error,t.step=w(t.step),t.chunk=w(t.chunk),t.complete=w(t.complete),t.error=w(t.error),delete t.worker,n.postMessage({input:e,config:t,workerId:n.id})},s.unparse=function(e,t){var n=!1,r=!0,i=",",u=`\r
`,T='"',K=T+T,$=!1,h=null,L=!1,o=((()=>{if(typeof t=="object"){if(typeof t.delimiter!="string"||s.BAD_DELIMITERS.filter(function(f){return t.delimiter.indexOf(f)!==-1}).length||(i=t.delimiter),typeof t.quotes!="boolean"&&typeof t.quotes!="function"&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||($=t.skipEmptyLines),typeof t.newline=="string"&&(u=t.newline),typeof t.quoteChar=="string"&&(T=t.quoteChar),typeof t.header=="boolean"&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");h=t.columns}t.escapeChar!==void 0&&(K=t.escapeChar+T),t.escapeFormulae instanceof RegExp?L=t.escapeFormulae:typeof t.escapeFormulae=="boolean"&&t.escapeFormulae&&(L=/^[=+\-@\t\r].*$/)}})(),new RegExp(se(T),"g"));if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return z(null,e,$);if(typeof e[0]=="object")return z(h||Object.keys(e[0]),e,$)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||h),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),z(e.fields||[],e.data||[],$);throw new Error("Unable to serialize unrecognized input");function z(f,a,A){var I="",q=(typeof f=="string"&&(f=JSON.parse(f)),typeof a=="string"&&(a=JSON.parse(a)),Array.isArray(f)&&0<f.length),Q=!Array.isArray(a[0]);if(q&&r){for(var p=0;p<f.length;p++)0<p&&(I+=i),I+=l(f[p],p);0<a.length&&(I+=u)}for(var _=0;_<a.length;_++){var C=(q?f:a[_]).length,d=!1,x=q?Object.keys(a[_]).length===0:a[_].length===0;if(A&&!q&&(d=A==="greedy"?a[_].join("").trim()==="":a[_].length===1&&a[_][0].length===0),A==="greedy"&&q){for(var F=[],R=0;R<C;R++){var y=Q?f[R]:R;F.push(a[_][y])}d=F.join("").trim()===""}if(!d){for(var c=0;c<C;c++){0<c&&!x&&(I+=i);var U=q&&Q?f[c]:c;I+=l(a[_][U],c)}_<a.length-1&&(!A||0<C&&!x)&&(I+=u)}}return I}function l(f,a){var A,I;return f==null?"":f.constructor===Date?JSON.stringify(f).slice(1,25):(I=!1,L&&typeof f=="string"&&L.test(f)&&(f="'"+f,I=!0),A=f.toString().replace(o,K),(I=I||n===!0||typeof n=="function"&&n(f,a)||Array.isArray(n)&&n[a]||((q,Q)=>{for(var p=0;p<Q.length;p++)if(-1<q.indexOf(Q[p]))return!0;return!1})(A,s.BAD_DELIMITERS)||-1<A.indexOf(i)||A.charAt(0)===" "||A.charAt(A.length-1)===" ")?T+A+T:A)}},s.RECORD_SEP="",s.UNIT_SEP="",s.BYTE_ORDER_MARK="\uFEFF",s.BAD_DELIMITERS=["\r",`
`,'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!E&&!!g.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=ue,s.ParserHandle=he,s.NetworkStreamer=Y,s.FileStreamer=W,s.StringStreamer=te,s.ReadableStreamStreamer=ne,g.jQuery&&((m=g.jQuery).fn.parse=function(e){var t=e.config||{},n=[];return this.each(function(u){if(!(m(this).prop("tagName").toUpperCase()==="INPUT"&&m(this).attr("type").toLowerCase()==="file"&&g.FileReader)||!this.files||this.files.length===0)return!0;for(var T=0;T<this.files.length;T++)n.push({file:this.files[T],inputElem:this,instanceConfig:m.extend({},t)})}),r(),this;function r(){if(n.length===0)w(e.complete)&&e.complete();else{var u,T,K,$,h=n[0];if(w(e.before)){var L=e.before(h.file,h.inputElem);if(typeof L=="object"){if(L.action==="abort")return u="AbortError",T=h.file,K=h.inputElem,$=L.reason,void(w(e.error)&&e.error({name:u},T,K,$));if(L.action==="skip")return void i();typeof L.config=="object"&&(h.instanceConfig=m.extend(h.instanceConfig,L.config))}else if(L==="skip")return void i()}var o=h.instanceConfig.complete;h.instanceConfig.complete=function(z){w(o)&&o(z,h.file,h.inputElem),i()},s.parse(h.file,h.instanceConfig)}}function i(){n.splice(0,1),r()}}),k&&(g.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input=="string"?g.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(g.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&g.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(Y.prototype=Object.create(P.prototype)).constructor=Y,(W.prototype=Object.create(P.prototype)).constructor=W,(te.prototype=Object.create(te.prototype)).constructor=te,(ne.prototype=Object.create(P.prototype)).constructor=ne,s})}(le)),le.exports}var Se=Re();const Oe=Ee(Se);window.Papa=Oe;const Le=window.location.pathname;document.getElementById("gridContainer")&&ye(()=>import("./content-loader-YGfnZmcA.js"),[]);Le.includes("project_details.html")&&ye(()=>import("./product_details-fMycsBlO.js"),[]);
