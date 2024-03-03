import{s as he,z as J,A as pe,e as s,a as r,c as o,g as d,d as c,i as $,j as i,n as fe,h as a}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as be,i as ve,c as ye,b as _e,m as we,t as Te,a as xe,d as ge}from"../chunks/index.BimWP6M-.js";import{g as He,a as ue}from"../chunks/spread.CgU5AtxT.js";import{M as Le}from"../chunks/mdsvex-blog.Cz5ms-do.js";function Ce(I){let l,f="For years, making a bidirectional website was a pain. We had to make a LTR style first, then we had to override all the directional styles to make it RTL. But with the introduction of CSS logical properties, it’s now easier than ever to make a bidirectional website.",m,p,n='<a aria-hidden="true" tabindex="-1" href="#css-logical-properties"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>CSS Logical Properties',u,h,K='<a href="https://web.dev/learn/css/logical-properties" rel="nofollow" target="_blank">CSS logical properties</a> are a set of properties that are used to define the logical direction of the content, rather than the physical direction.',U,T,O="To use CSS logical properties, you just need to replace directional properties with logical properties. For example, instead of using <code>margin-left</code>, you can use <code>margin-inline-start</code>. This way, the margin will be on the start side of the content, regardless of the direction of the content.",j,b,Q='<a aria-hidden="true" tabindex="-1" href="#its-even-easier-with-tailwind-css-and-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>It’s even easier with Tailwind CSS and daisyUI',A,x,V='<a href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties" rel="nofollow" target="_blank">Tailwind CSS (3.3+) already supports CSS logical properties</a>. This means that you can use logical properties in your Tailwind CSS classes.',R,g,X='And <a href="https://github.com/saadeghi/daisyui/discussions/2507" rel="nofollow" target="_blank">daisyUI 4</a> fully adapts to the logical properties and makes it even easier to make a bidirectional website.',q,H,ee="All daisyUI components are now bidirectional by default. It means we don’t use <code>left</code> or <code>right</code> anymore, we use <code>start</code> and <code>end</code> instead and it will automatically adapt to the direction of the content.",z,v,te='<a aria-hidden="true" tabindex="-1" href="#step-1"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 1',B,L,ie=`You need to use Tailwind CSS logical class names instead of directional class names.<br/>
Here’s a list of some of the most common logical class names.`,F,C,ae="<thead><tr><th>❌ Don’t use</th> <th>✅ Use</th></tr></thead> <tbody><tr><td><code>left-*</code></td> <td><code>start-*</code></td></tr> <tr><td><code>right-*</code></td> <td><code>end-*</code></td></tr> <tr><td><code>ml-*</code></td> <td><code>ms-*</code></td></tr> <tr><td><code>mr-*</code></td> <td><code>me-*</code></td></tr> <tr><td><code>pl-*</code></td> <td><code>ps-*</code></td></tr> <tr><td><code>pr-*</code></td> <td><code>pe-*</code></td></tr></tbody>",Y,M,le='You can find the full list in the <a href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties" rel="nofollow" target="_blank">Tailwind CSS blog</a>.',D,y,ne='<a aria-hidden="true" tabindex="-1" href="#step-2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 2',E,S,se="Add <code>dir=rtl</code> to the root element of your website for RTL languages. This will automatically change the direction of the content based on the language of the content.",N,_,oe='<a aria-hidden="true" tabindex="-1" href="#step-3"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 3',W,k,de="That’s it! Now whenever your website is RTL, all spacing and alignments will be automatically adjusted to the RTL direction. daisyUI components are bidirectional by default, so you don’t need to do anything else.",Z,w,re='<a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Conclusion',G,P,ce=`Making a bidirectional website is now easier than ever.<br/>
Try to make it a habit to use logical class names (like <code>ps-4</code> ,<code>ms-4</code>,…) instead of directional class names (like <code>pl-4</code>, <code>ml-4</code>,… ) in your CSS and you’ll see how easy it is to make a bidirectional website.`;return{c(){l=s("p"),l.textContent=f,m=r(),p=s("h2"),p.innerHTML=n,u=r(),h=s("p"),h.innerHTML=K,U=r(),T=s("p"),T.innerHTML=O,j=r(),b=s("h2"),b.innerHTML=Q,A=r(),x=s("p"),x.innerHTML=V,R=r(),g=s("p"),g.innerHTML=X,q=r(),H=s("p"),H.innerHTML=ee,z=r(),v=s("h2"),v.innerHTML=te,B=r(),L=s("p"),L.innerHTML=ie,F=r(),C=s("table"),C.innerHTML=ae,Y=r(),M=s("p"),M.innerHTML=le,D=r(),y=s("h2"),y.innerHTML=ne,E=r(),S=s("p"),S.innerHTML=se,N=r(),_=s("h2"),_.innerHTML=oe,W=r(),k=s("p"),k.textContent=de,Z=r(),w=s("h2"),w.innerHTML=re,G=r(),P=s("p"),P.innerHTML=ce,this.h()},l(e){l=o(e,"P",{"data-svelte-h":!0}),d(l)!=="svelte-19xq7zx"&&(l.textContent=f),m=c(e),p=o(e,"H2",{id:!0,"data-svelte-h":!0}),d(p)!=="svelte-1jtwg9g"&&(p.innerHTML=n),u=c(e),h=o(e,"P",{"data-svelte-h":!0}),d(h)!=="svelte-9t8o3v"&&(h.innerHTML=K),U=c(e),T=o(e,"P",{"data-svelte-h":!0}),d(T)!=="svelte-4lcsaa"&&(T.innerHTML=O),j=c(e),b=o(e,"H2",{id:!0,"data-svelte-h":!0}),d(b)!=="svelte-dmhadb"&&(b.innerHTML=Q),A=c(e),x=o(e,"P",{"data-svelte-h":!0}),d(x)!=="svelte-1txfz5p"&&(x.innerHTML=V),R=c(e),g=o(e,"P",{"data-svelte-h":!0}),d(g)!=="svelte-1sucd88"&&(g.innerHTML=X),q=c(e),H=o(e,"P",{"data-svelte-h":!0}),d(H)!=="svelte-170rced"&&(H.innerHTML=ee),z=c(e),v=o(e,"H2",{id:!0,"data-svelte-h":!0}),d(v)!=="svelte-1k4cc72"&&(v.innerHTML=te),B=c(e),L=o(e,"P",{"data-svelte-h":!0}),d(L)!=="svelte-18civyb"&&(L.innerHTML=ie),F=c(e),C=o(e,"TABLE",{"data-svelte-h":!0}),d(C)!=="svelte-19p24es"&&(C.innerHTML=ae),Y=c(e),M=o(e,"P",{"data-svelte-h":!0}),d(M)!=="svelte-sx3mxq"&&(M.innerHTML=le),D=c(e),y=o(e,"H2",{id:!0,"data-svelte-h":!0}),d(y)!=="svelte-nltxp5"&&(y.innerHTML=ne),E=c(e),S=o(e,"P",{"data-svelte-h":!0}),d(S)!=="svelte-13m7be3"&&(S.innerHTML=se),N=c(e),_=o(e,"H2",{id:!0,"data-svelte-h":!0}),d(_)!=="svelte-aeyuvc"&&(_.innerHTML=oe),W=c(e),k=o(e,"P",{"data-svelte-h":!0}),d(k)!=="svelte-hohbl4"&&(k.textContent=de),Z=c(e),w=o(e,"H2",{id:!0,"data-svelte-h":!0}),d(w)!=="svelte-1bec0y6"&&(w.innerHTML=re),G=c(e),P=o(e,"P",{"data-svelte-h":!0}),d(P)!=="svelte-q5tbxy"&&(P.innerHTML=ce),this.h()},h(){$(p,"id","css-logical-properties"),$(b,"id","its-even-easier-with-tailwind-css-and-daisyui"),$(v,"id","step-1"),$(y,"id","step-2"),$(_,"id","step-3"),$(w,"id","conclusion")},m(e,t){i(e,l,t),i(e,m,t),i(e,p,t),i(e,u,t),i(e,h,t),i(e,U,t),i(e,T,t),i(e,j,t),i(e,b,t),i(e,A,t),i(e,x,t),i(e,R,t),i(e,g,t),i(e,q,t),i(e,H,t),i(e,z,t),i(e,v,t),i(e,B,t),i(e,L,t),i(e,F,t),i(e,C,t),i(e,Y,t),i(e,M,t),i(e,D,t),i(e,y,t),i(e,E,t),i(e,S,t),i(e,N,t),i(e,_,t),i(e,W,t),i(e,k,t),i(e,Z,t),i(e,w,t),i(e,G,t),i(e,P,t)},p:fe,d(e){e&&(a(l),a(m),a(p),a(u),a(h),a(U),a(T),a(j),a(b),a(A),a(x),a(R),a(g),a(q),a(H),a(z),a(v),a(B),a(L),a(F),a(C),a(Y),a(M),a(D),a(y),a(E),a(S),a(N),a(_),a(W),a(k),a(Z),a(w),a(G),a(P))}}}function Me(I){let l,f;const m=[I[0],me];let p={$$slots:{default:[Ce]},$$scope:{ctx:I}};for(let n=0;n<m.length;n+=1)p=J(p,m[n]);return l=new Le({props:p}),{c(){ye(l.$$.fragment)},l(n){_e(l.$$.fragment,n)},m(n,u){we(l,n,u),f=!0},p(n,[u]){const h=u&1?He(m,[u&1&&ue(n[0]),u&0&&ue(me)]):{};u&2&&(h.$$scope={dirty:u,ctx:n}),l.$set(h)},i(n){f||(Te(l.$$.fragment,n),f=!0)},o(n){xe(l.$$.fragment,n),f=!1},d(n){ge(l,n)}}}const me={title:"How to make a bidirectional site using Tailwind CSS and daisyUI",desc:"Learn how to use CSS logical properties to make a bidirectional website using Tailwind CSS and daisyUI",published:!0,date:"2024-03-01T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"/images/blog/bidirectional.jpg",tags:["daisyUI"]};function Se(I,l,f){return I.$$set=m=>{f(0,l=J(J({},l),pe(m)))},l=pe(l),[l]}class Ue extends be{constructor(l){super(),ve(this,l,Se,Me,he,{})}}export{Ue as component};
