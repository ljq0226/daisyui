import{s as Lt,z as Ra,A as kt,e,a as p,H as d,c as l,g as c,d as o,b as f,x as v,h as t,i as r,j as n,n as Tt}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as Ht,i as It,c as Pt,b as Ut,m as jt,t as Et,a as qt,d as St}from"../chunks/index.BimWP6M-.js";import{g as Rt,a as mt}from"../chunks/spread.CgU5AtxT.js";import{M as $t}from"../chunks/mdsvex-blog.Ctcp5KI_.js";function zt(K){let i,b='<a aria-hidden="true" tabindex="-1" href="#what-is-mary-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What is Mary UI?',_,m,u=`<a href="https://mary-ui.com/" rel="nofollow" target="_blank">Mary UI</a> is a collection of Laravel blade components made for Livewire 3.<br/>
These components are built on top of <a href="https://daisyui.com/" rel="nofollow" target="_blank">daisyUI</a> and <a href="https://tailwindcss.com/" rel="nofollow" target="_blank">Tailwind CSS</a>.<br/>
If you’re a Laravel developer and you’re using Livewire, you’ll love Mary UI because it makes it faster and easier to build web pages.`,k,y,$a="Mary UI does not ship any custom CSS and relies on daisyUI and Tailwind for out-of-box styling. You can customize most of components styles, by inline overriding daisyUI and Tailwind CSS classes.",O,w,za='<a aria-hidden="true" tabindex="-1" href="#how-does-it-look-like"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How does it look like?',Q,g,Aa="Mary UI allows you to use daisyUI components in your Laravel blade files using Livewire syntax.",X,C,Ya=`To make a form like this:
<img src="/images/blog/mary-ui-form.jpg" alt="Mary UI form"/>
All you need would be these few lines:`,Z,M,aa,ft=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-form</span> <span class="token attr-name"><span class="token namespace">wire:</span>submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>save<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-input</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wire:</span>model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-input</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Amount<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">wire:</span>model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>amount<span class="token punctuation">"</span></span>
    <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>USD<span class="token punctuation">"</span></span>
    <span class="token attr-name">money</span>
    <span class="token attr-name">hint</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>It submits an unmasked value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>actions</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Click me!<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">spinner</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>save<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">x-slot:</span>actions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-form</span><span class="token punctuation">></span></span></code>`,ta,h,Da='<a aria-hidden="true" tabindex="-1" href="#how-to-install-mary-ui-on-a-new-laravel-project"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Mary UI on a new Laravel project?',sa,L,Va="You can install Mary UI using composer:",na,T,ea,vt='<code class="language-bash"><span class="token function">composer</span> require robsontenorio/mary</code>',la,H,Fa="If it’s a new Laravel project, you can complete the setup by running the following command:",pa,I,oa,_t='<code class="language-bash">php artisan mary:install</code>',ia,P,Na="And start the dev server",ca,U,ua,yt='<code class="language-bash"><span class="token function">yarn</span> dev</code>',ra,j,Wa='Read more about <a href="https://mary-ui.com/docs/installation" rel="nofollow" target="_blank">Mary UI installation</a>.',ka,x,Ba='<a aria-hidden="true" tabindex="-1" href="#how-to-install-mary-ui-on-existing-laravel-project"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Mary UI on existing Laravel project?',ma,E,Ga="Install Mary UI using composer:",da,q,fa,bt='<code class="language-bash"><span class="token function">composer</span> require robsontenorio/mary</code>',va,S,Ja="If it’s an existing Laravel project, Install daisyUI and Tailwind CSS and initialize Tailwind CSS config file:",_a,R,ya,wt='<code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> tailwindcss daisyui@latest postcss autoprefixer <span class="token operator">&amp;&amp;</span> npx tailwindcss init <span class="token parameter variable">-p</span></code>',ba,$,Ka="Change your tailwind.config.js file like this:",wa,z,ha,ht=`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// You will probably also need those lines</span>
    <span class="token string">"./resources/**/**/*.&#123;js,blade.php&#125;"</span><span class="token punctuation">,</span>
    <span class="token string">"./app/View/Components/**/**/*.php"</span><span class="token punctuation">,</span>
    <span class="token string">"./app/Livewire/**/**/*.php"</span><span class="token punctuation">,</span>

    <span class="token comment">// Add mary</span>
    <span class="token string">"./vendor/robsontenorio/mary/src/View/Components/**/*.php"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Add daisyUI</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,xa,A,Oa="Add Tailwind directives to <code>resources/css/app.css</code>",ga,Y,Ca,xt=`<code class="language-pcss">@tailwind base;
@tailwind components;
@tailwind utilities;</code>`,Ma,D,Qa="Setup Livewire default app template.",La,V,Ta,gt=`<code class="language-bash"><span class="token comment"># It creates &#96;views/components/layouts/app.blade.php&#96;</span>
php artisan livewire:layout</code>`,Ha,F,Xa="Then add <code>@vite</code> on default app template <code>views/components/layouts/app.blade.php</code>",Ia,N,Pa,Ct=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  ...
  <span class="token comment">&lt;!-- This --></span>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code>`,Ua,W,Za="Finally, start dev server.",ja,B,Ea,Mt='<code class="language-bash"><span class="token function">yarn</span> dev</code>',qa,G,at="That’s it! You can now use Mary UI components in your blade files.",Sa,J,tt='Read more about <a href="https://mary-ui.com" rel="nofollow" target="_blank">Mary UI</a>.';return{c(){i=e("h2"),i.innerHTML=b,_=p(),m=e("p"),m.innerHTML=u,k=p(),y=e("p"),y.textContent=$a,O=p(),w=e("h2"),w.innerHTML=za,Q=p(),g=e("p"),g.textContent=Aa,X=p(),C=e("p"),C.innerHTML=Ya,Z=p(),M=e("pre"),aa=new d(!1),ta=p(),h=e("h2"),h.innerHTML=Da,sa=p(),L=e("p"),L.textContent=Va,na=p(),T=e("pre"),ea=new d(!1),la=p(),H=e("p"),H.textContent=Fa,pa=p(),I=e("pre"),oa=new d(!1),ia=p(),P=e("p"),P.textContent=Na,ca=p(),U=e("pre"),ua=new d(!1),ra=p(),j=e("p"),j.innerHTML=Wa,ka=p(),x=e("h2"),x.innerHTML=Ba,ma=p(),E=e("p"),E.textContent=Ga,da=p(),q=e("pre"),fa=new d(!1),va=p(),S=e("p"),S.textContent=Ja,_a=p(),R=e("pre"),ya=new d(!1),ba=p(),$=e("p"),$.textContent=Ka,wa=p(),z=e("pre"),ha=new d(!1),xa=p(),A=e("p"),A.innerHTML=Oa,ga=p(),Y=e("pre"),Ca=new d(!1),Ma=p(),D=e("p"),D.textContent=Qa,La=p(),V=e("pre"),Ta=new d(!1),Ha=p(),F=e("p"),F.innerHTML=Xa,Ia=p(),N=e("pre"),Pa=new d(!1),Ua=p(),W=e("p"),W.textContent=Za,ja=p(),B=e("pre"),Ea=new d(!1),qa=p(),G=e("p"),G.textContent=at,Sa=p(),J=e("p"),J.innerHTML=tt,this.h()},l(a){i=l(a,"H2",{id:!0,"data-svelte-h":!0}),c(i)!=="svelte-zuwr9f"&&(i.innerHTML=b),_=o(a),m=l(a,"P",{"data-svelte-h":!0}),c(m)!=="svelte-1978jy7"&&(m.innerHTML=u),k=o(a),y=l(a,"P",{"data-svelte-h":!0}),c(y)!=="svelte-1cji1ok"&&(y.textContent=$a),O=o(a),w=l(a,"H2",{id:!0,"data-svelte-h":!0}),c(w)!=="svelte-b1w8ye"&&(w.innerHTML=za),Q=o(a),g=l(a,"P",{"data-svelte-h":!0}),c(g)!=="svelte-4x9zsw"&&(g.textContent=Aa),X=o(a),C=l(a,"P",{"data-svelte-h":!0}),c(C)!=="svelte-ag9r89"&&(C.innerHTML=Ya),Z=o(a),M=l(a,"PRE",{class:!0});var s=f(M);aa=v(s,!1),s.forEach(t),ta=o(a),h=l(a,"H2",{id:!0,"data-svelte-h":!0}),c(h)!=="svelte-ybx79f"&&(h.innerHTML=Da),sa=o(a),L=l(a,"P",{"data-svelte-h":!0}),c(L)!=="svelte-k04kk9"&&(L.textContent=Va),na=o(a),T=l(a,"PRE",{class:!0});var st=f(T);ea=v(st,!1),st.forEach(t),la=o(a),H=l(a,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1swsank"&&(H.textContent=Fa),pa=o(a),I=l(a,"PRE",{class:!0});var nt=f(I);oa=v(nt,!1),nt.forEach(t),ia=o(a),P=l(a,"P",{"data-svelte-h":!0}),c(P)!=="svelte-l9h07o"&&(P.textContent=Na),ca=o(a),U=l(a,"PRE",{class:!0});var et=f(U);ua=v(et,!1),et.forEach(t),ra=o(a),j=l(a,"P",{"data-svelte-h":!0}),c(j)!=="svelte-3npu3a"&&(j.innerHTML=Wa),ka=o(a),x=l(a,"H2",{id:!0,"data-svelte-h":!0}),c(x)!=="svelte-15akkbv"&&(x.innerHTML=Ba),ma=o(a),E=l(a,"P",{"data-svelte-h":!0}),c(E)!=="svelte-zkwnn8"&&(E.textContent=Ga),da=o(a),q=l(a,"PRE",{class:!0});var lt=f(q);fa=v(lt,!1),lt.forEach(t),va=o(a),S=l(a,"P",{"data-svelte-h":!0}),c(S)!=="svelte-k94tif"&&(S.textContent=Ja),_a=o(a),R=l(a,"PRE",{class:!0});var pt=f(R);ya=v(pt,!1),pt.forEach(t),ba=o(a),$=l(a,"P",{"data-svelte-h":!0}),c($)!=="svelte-1299s35"&&($.textContent=Ka),wa=o(a),z=l(a,"PRE",{class:!0});var ot=f(z);ha=v(ot,!1),ot.forEach(t),xa=o(a),A=l(a,"P",{"data-svelte-h":!0}),c(A)!=="svelte-1fjemzl"&&(A.innerHTML=Oa),ga=o(a),Y=l(a,"PRE",{class:!0});var it=f(Y);Ca=v(it,!1),it.forEach(t),Ma=o(a),D=l(a,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1fy2lue"&&(D.textContent=Qa),La=o(a),V=l(a,"PRE",{class:!0});var ct=f(V);Ta=v(ct,!1),ct.forEach(t),Ha=o(a),F=l(a,"P",{"data-svelte-h":!0}),c(F)!=="svelte-fbcjn4"&&(F.innerHTML=Xa),Ia=o(a),N=l(a,"PRE",{class:!0});var ut=f(N);Pa=v(ut,!1),ut.forEach(t),Ua=o(a),W=l(a,"P",{"data-svelte-h":!0}),c(W)!=="svelte-1q4lepj"&&(W.textContent=Za),ja=o(a),B=l(a,"PRE",{class:!0});var rt=f(B);Ea=v(rt,!1),rt.forEach(t),qa=o(a),G=l(a,"P",{"data-svelte-h":!0}),c(G)!=="svelte-1e6m7wx"&&(G.textContent=at),Sa=o(a),J=l(a,"P",{"data-svelte-h":!0}),c(J)!=="svelte-1yzgdnn"&&(J.innerHTML=tt),this.h()},h(){r(i,"id","what-is-mary-ui"),r(w,"id","how-does-it-look-like"),aa.a=null,r(M,"class","language-html"),r(h,"id","how-to-install-mary-ui-on-a-new-laravel-project"),ea.a=null,r(T,"class","language-bash"),oa.a=null,r(I,"class","language-bash"),ua.a=null,r(U,"class","language-bash"),r(x,"id","how-to-install-mary-ui-on-existing-laravel-project"),fa.a=null,r(q,"class","language-bash"),ya.a=null,r(R,"class","language-bash"),ha.a=null,r(z,"class","language-js"),Ca.a=null,r(Y,"class","language-pcss"),Ta.a=null,r(V,"class","language-bash"),Pa.a=null,r(N,"class","language-html"),Ea.a=null,r(B,"class","language-bash")},m(a,s){n(a,i,s),n(a,_,s),n(a,m,s),n(a,k,s),n(a,y,s),n(a,O,s),n(a,w,s),n(a,Q,s),n(a,g,s),n(a,X,s),n(a,C,s),n(a,Z,s),n(a,M,s),aa.m(ft,M),n(a,ta,s),n(a,h,s),n(a,sa,s),n(a,L,s),n(a,na,s),n(a,T,s),ea.m(vt,T),n(a,la,s),n(a,H,s),n(a,pa,s),n(a,I,s),oa.m(_t,I),n(a,ia,s),n(a,P,s),n(a,ca,s),n(a,U,s),ua.m(yt,U),n(a,ra,s),n(a,j,s),n(a,ka,s),n(a,x,s),n(a,ma,s),n(a,E,s),n(a,da,s),n(a,q,s),fa.m(bt,q),n(a,va,s),n(a,S,s),n(a,_a,s),n(a,R,s),ya.m(wt,R),n(a,ba,s),n(a,$,s),n(a,wa,s),n(a,z,s),ha.m(ht,z),n(a,xa,s),n(a,A,s),n(a,ga,s),n(a,Y,s),Ca.m(xt,Y),n(a,Ma,s),n(a,D,s),n(a,La,s),n(a,V,s),Ta.m(gt,V),n(a,Ha,s),n(a,F,s),n(a,Ia,s),n(a,N,s),Pa.m(Ct,N),n(a,Ua,s),n(a,W,s),n(a,ja,s),n(a,B,s),Ea.m(Mt,B),n(a,qa,s),n(a,G,s),n(a,Sa,s),n(a,J,s)},p:Tt,d(a){a&&(t(i),t(_),t(m),t(k),t(y),t(O),t(w),t(Q),t(g),t(X),t(C),t(Z),t(M),t(ta),t(h),t(sa),t(L),t(na),t(T),t(la),t(H),t(pa),t(I),t(ia),t(P),t(ca),t(U),t(ra),t(j),t(ka),t(x),t(ma),t(E),t(da),t(q),t(va),t(S),t(_a),t(R),t(ba),t($),t(wa),t(z),t(xa),t(A),t(ga),t(Y),t(Ma),t(D),t(La),t(V),t(Ha),t(F),t(Ia),t(N),t(Ua),t(W),t(ja),t(B),t(qa),t(G),t(Sa),t(J))}}}function At(K){let i,b;const _=[K[0],dt];let m={$$slots:{default:[zt]},$$scope:{ctx:K}};for(let u=0;u<_.length;u+=1)m=Ra(m,_[u]);return i=new $t({props:m}),{c(){Pt(i.$$.fragment)},l(u){Ut(i.$$.fragment,u)},m(u,k){jt(i,u,k),b=!0},p(u,[k]){const y=k&1?Rt(_,[k&1&&mt(u[0]),k&0&&mt(dt)]):{};k&2&&(y.$$scope={dirty:k,ctx:u}),i.$set(y)},i(u){b||(Et(i.$$.fragment,u),b=!0)},o(u){qt(i.$$.fragment,u),b=!1},d(u){St(i,u)}}}const dt={title:"Mary UI: Laravel blade components made with daisyUI",desc:"Mary UI is a collection of Laravel blade components made for Livewire 3 and styled around daisyUI and Tailwind CSS",published:!0,date:"2023-9-13",author:"Pouya Saadeghi",thumbnail:"/images/blog/mary-ui.jpg",tags:["Laravel"]};function Yt(K,i,b){return K.$$set=_=>{b(0,i=Ra(Ra({},i),kt(_)))},i=kt(i),[i]}class Wt extends Ht{constructor(i){super(),It(this,i,Yt,At,Lt,{})}}export{Wt as component};
