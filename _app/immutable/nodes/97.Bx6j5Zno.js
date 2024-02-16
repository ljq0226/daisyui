import{s as Ke,z as xe,A as $e,e as l,a as p,H as $,c as i,g as r,d as o,b as q,x as A,h as t,i as u,j as n,n as Qe}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as Ve,i as We,c as Xe,b as Ze,m as et,t as tt,a as at,d as nt}from"../chunks/index.BimWP6M-.js";import{g as st,a as qe}from"../chunks/spread.CgU5AtxT.js";import{M as lt}from"../chunks/mdsvex-blog.Ctcp5KI_.js";function it(z){let s,x="Next.js is currently one of the popular JavaScript meta frameworks for building web applications. Since we can use daisyUI in any JavaScript framework, we can also use it in Next.js.",m,f,c="Installing Next.js is pretty straightforward. It also includes Tailwind CSS by default. After installing Next.js, we can install daisyUI as a plugin and start using it in our Next.js project.",d,k,ge='<a aria-hidden="true" tabindex="-1" href="#installing-nextjs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Installing Next.js',J,j,_e=`<li>Let’s start by creating a new Next.js project.<br/>
You can use the following command to create a new Next.js project:</li>`,Y,T,D,ze='<code class="language-undefined">npx create-next-app@latest</code>',G,g,ve=`<li>Answer the questions to complete the project creation process.<br/>
Make sure to enable <code>Tailwind CSS</code> when asked about it:</li>`,B,M,he='<img src="/images/blog/install-nextjs.jpg" alt="Install Next.js"/>',F,C,ye="Go to the project directory. If you named it <code>my-app</code>:",K,I,Q,Je='<code class="language-undefined">cd my-app</code>',V,_,we='<a aria-hidden="true" tabindex="-1" href="#installing-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Installing daisyUI',W,v,be="<li>Now install the latest version of daisyUI as a dev dependency:</li>",X,N,Z,Ye='<code class="language-undefined">npm i -D daisyui@latest</code>',ee,h,He=`<li>Open <code>tailwind.config.ts</code> file<br/>
Add daisyUI as a plugin:</li>`,te,E,ae,De=`<code class="language-diff">import type &#123; Config &#125; from 'tailwindcss'
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import daisyui from 'daisyui'
</span></span>const config: Config = &#123;
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> content: [
</span><span class="token prefix unchanged"> </span><span class="token line">   './pages/**/*.&#123;js,ts,jsx,tsx,mdx&#125;',
</span><span class="token prefix unchanged"> </span><span class="token line">   './components/**/*.&#123;js,ts,jsx,tsx,mdx&#125;',
</span><span class="token prefix unchanged"> </span><span class="token line">   './app/**/*.&#123;js,ts,jsx,tsx,mdx&#125;',
</span><span class="token prefix unchanged"> </span><span class="token line"> ],
</span><span class="token prefix unchanged"> </span><span class="token line"> theme: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">   extend: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">     backgroundImage: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
</span><span class="token prefix unchanged"> </span><span class="token line">       'gradient-conic':
</span><span class="token prefix unchanged"> </span><span class="token line">         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
</span><span class="token prefix unchanged"> </span><span class="token line">     &#125;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &#125;,
</span><span class="token prefix unchanged"> </span><span class="token line"> &#125;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> plugins: [],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> plugins: [daisyui],
</span></span>&#125;
export default config
</code>`,ne,y,Le='<a aria-hidden="true" tabindex="-1" href="#using-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Using daisyUI',se,w,je=`<li>Open <code>/app/page.tsx</code> file<br/>
Replace the content with:</li>`,le,P,ie,Ge=`<code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello daisyUI!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,pe,b,Te='<a aria-hidden="true" tabindex="-1" href="#ready-to-go"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Ready to go!',oe,H,Me="<li>Run the project using:</li>",ce,S,re,Be='<code class="language-undefined">npm run dev</code>',ue,U,Ce="And open <code>http://localhost:3000/</code> to see a button with daisyUI styles.",de,R,Ie='You can now use any <a href="https://daisyui.com/components/" rel="nofollow" target="_blank">daisyUI component</a> or any <a href="https://tailwindcss.com/" rel="nofollow" target="_blank">Tailwind CSS utility class</a> in your Next.js project.',fe,L,Ne="<li>Extra: You can also remove the default Next.js styles from <code>app/globals.css</code>, to have a clean start. Only keep the following line:</li>",ke,O,me,Fe=`<code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span></code>`;return{c(){s=l("p"),s.textContent=x,m=p(),f=l("p"),f.textContent=c,d=p(),k=l("h3"),k.innerHTML=ge,J=p(),j=l("ol"),j.innerHTML=_e,Y=p(),T=l("pre"),D=new $(!1),G=p(),g=l("ol"),g.innerHTML=ve,B=p(),M=l("p"),M.innerHTML=he,F=p(),C=l("p"),C.innerHTML=ye,K=p(),I=l("pre"),Q=new $(!1),V=p(),_=l("h3"),_.innerHTML=we,W=p(),v=l("ol"),v.innerHTML=be,X=p(),N=l("pre"),Z=new $(!1),ee=p(),h=l("ol"),h.innerHTML=He,te=p(),E=l("pre"),ae=new $(!1),ne=p(),y=l("h3"),y.innerHTML=Le,se=p(),w=l("ol"),w.innerHTML=je,le=p(),P=l("pre"),ie=new $(!1),pe=p(),b=l("h3"),b.innerHTML=Te,oe=p(),H=l("ol"),H.innerHTML=Me,ce=p(),S=l("pre"),re=new $(!1),ue=p(),U=l("p"),U.innerHTML=Ce,de=p(),R=l("p"),R.innerHTML=Ie,fe=p(),L=l("ol"),L.innerHTML=Ne,ke=p(),O=l("pre"),me=new $(!1),this.h()},l(e){s=i(e,"P",{"data-svelte-h":!0}),r(s)!=="svelte-xcskb"&&(s.textContent=x),m=o(e),f=i(e,"P",{"data-svelte-h":!0}),r(f)!=="svelte-15rsct4"&&(f.textContent=c),d=o(e),k=i(e,"H3",{id:!0,"data-svelte-h":!0}),r(k)!=="svelte-15lk4x4"&&(k.innerHTML=ge),J=o(e),j=i(e,"OL",{"data-svelte-h":!0}),r(j)!=="svelte-1qckd4g"&&(j.innerHTML=_e),Y=o(e),T=i(e,"PRE",{class:!0});var a=q(T);D=A(a,!1),a.forEach(t),G=o(e),g=i(e,"OL",{start:!0,"data-svelte-h":!0}),r(g)!=="svelte-1r52wr1"&&(g.innerHTML=ve),B=o(e),M=i(e,"P",{"data-svelte-h":!0}),r(M)!=="svelte-1g5la3l"&&(M.innerHTML=he),F=o(e),C=i(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-qhrfkr"&&(C.innerHTML=ye),K=o(e),I=i(e,"PRE",{class:!0});var Ee=q(I);Q=A(Ee,!1),Ee.forEach(t),V=o(e),_=i(e,"H3",{id:!0,"data-svelte-h":!0}),r(_)!=="svelte-1g0l270"&&(_.innerHTML=we),W=o(e),v=i(e,"OL",{start:!0,"data-svelte-h":!0}),r(v)!=="svelte-19ppdny"&&(v.innerHTML=be),X=o(e),N=i(e,"PRE",{class:!0});var Pe=q(N);Z=A(Pe,!1),Pe.forEach(t),ee=o(e),h=i(e,"OL",{start:!0,"data-svelte-h":!0}),r(h)!=="svelte-srzoyh"&&(h.innerHTML=He),te=o(e),E=i(e,"PRE",{class:!0});var Se=q(E);ae=A(Se,!1),Se.forEach(t),ne=o(e),y=i(e,"H3",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-1urt7rx"&&(y.innerHTML=Le),se=o(e),w=i(e,"OL",{start:!0,"data-svelte-h":!0}),r(w)!=="svelte-9g8bz"&&(w.innerHTML=je),le=o(e),P=i(e,"PRE",{class:!0});var Ue=q(P);ie=A(Ue,!1),Ue.forEach(t),pe=o(e),b=i(e,"H3",{id:!0,"data-svelte-h":!0}),r(b)!=="svelte-zq2g36"&&(b.innerHTML=Te),oe=o(e),H=i(e,"OL",{start:!0,"data-svelte-h":!0}),r(H)!=="svelte-esopt7"&&(H.innerHTML=Me),ce=o(e),S=i(e,"PRE",{class:!0});var Re=q(S);re=A(Re,!1),Re.forEach(t),ue=o(e),U=i(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-10bppgc"&&(U.innerHTML=Ce),de=o(e),R=i(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-3n04mq"&&(R.innerHTML=Ie),fe=o(e),L=i(e,"OL",{start:!0,"data-svelte-h":!0}),r(L)!=="svelte-4b5a9x"&&(L.innerHTML=Ne),ke=o(e),O=i(e,"PRE",{class:!0});var Oe=q(O);me=A(Oe,!1),Oe.forEach(t),this.h()},h(){u(k,"id","installing-nextjs"),D.a=null,u(T,"class","language-undefined"),u(g,"start","2"),Q.a=null,u(I,"class","language-undefined"),u(_,"id","installing-daisyui"),u(v,"start","3"),Z.a=null,u(N,"class","language-undefined"),u(h,"start","4"),ae.a=null,u(E,"class","language-diff"),u(y,"id","using-daisyui"),u(w,"start","5"),ie.a=null,u(P,"class","language-jsx"),u(b,"id","ready-to-go"),u(H,"start","6"),re.a=null,u(S,"class","language-undefined"),u(L,"start","7"),me.a=null,u(O,"class","language-css")},m(e,a){n(e,s,a),n(e,m,a),n(e,f,a),n(e,d,a),n(e,k,a),n(e,J,a),n(e,j,a),n(e,Y,a),n(e,T,a),D.m(ze,T),n(e,G,a),n(e,g,a),n(e,B,a),n(e,M,a),n(e,F,a),n(e,C,a),n(e,K,a),n(e,I,a),Q.m(Je,I),n(e,V,a),n(e,_,a),n(e,W,a),n(e,v,a),n(e,X,a),n(e,N,a),Z.m(Ye,N),n(e,ee,a),n(e,h,a),n(e,te,a),n(e,E,a),ae.m(De,E),n(e,ne,a),n(e,y,a),n(e,se,a),n(e,w,a),n(e,le,a),n(e,P,a),ie.m(Ge,P),n(e,pe,a),n(e,b,a),n(e,oe,a),n(e,H,a),n(e,ce,a),n(e,S,a),re.m(Be,S),n(e,ue,a),n(e,U,a),n(e,de,a),n(e,R,a),n(e,fe,a),n(e,L,a),n(e,ke,a),n(e,O,a),me.m(Fe,O)},p:Qe,d(e){e&&(t(s),t(m),t(f),t(d),t(k),t(J),t(j),t(Y),t(T),t(G),t(g),t(B),t(M),t(F),t(C),t(K),t(I),t(V),t(_),t(W),t(v),t(X),t(N),t(ee),t(h),t(te),t(E),t(ne),t(y),t(se),t(w),t(le),t(P),t(pe),t(b),t(oe),t(H),t(ce),t(S),t(ue),t(U),t(de),t(R),t(fe),t(L),t(ke),t(O))}}}function pt(z){let s,x;const m=[z[0],Ae];let f={$$slots:{default:[it]},$$scope:{ctx:z}};for(let c=0;c<m.length;c+=1)f=xe(f,m[c]);return s=new lt({props:f}),{c(){Xe(s.$$.fragment)},l(c){Ze(s.$$.fragment,c)},m(c,d){et(s,c,d),x=!0},p(c,[d]){const k=d&1?st(m,[d&1&&qe(c[0]),d&0&&qe(Ae)]):{};d&2&&(k.$$scope={dirty:d,ctx:c}),s.$set(k)},i(c){x||(tt(s.$$.fragment,c),x=!0)},o(c){at(s.$$.fragment,c),x=!1},d(c){nt(s,c)}}}const Ae={title:"How to install daisyUI and Tailwind CSS in Next.js 14",desc:"In this article, we will learn how to use daisyUI component library in Next.js.",published:!0,date:"2023-9-22",author:"Pouya Saadeghi",thumbnail:"/images/blog/daisyui-nextjs-component-library.jpg",tags:["Next.js","React","JavaScript frameworks"]};function ot(z,s,x){return z.$$set=m=>{x(0,s=xe(xe({},s),$e(m)))},s=$e(s),[s]}class ft extends Ve{constructor(s){super(),We(this,s,ot,pt,Ke,{})}}export{ft as component};
