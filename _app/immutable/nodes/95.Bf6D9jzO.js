import{s as hn,z as Fa,A as Qs,e as s,a as p,H as v,c as n,g as u,d as c,b as r,x as f,h as a,i,j as l,k as o,n as mn}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as gn,i as bn,c as xn,b as yn,m as _n,t as wn,a as Cn,d as Hn}from"../chunks/index.BimWP6M-.js";import{g as Tn,a as Xs}from"../chunks/spread.CgU5AtxT.js";import{M as In}from"../chunks/mdsvex-blog.Ctcp5KI_.js";function Ln(vt){let d,T='<a aria-hidden="true" tabindex="-1" href="#daisyui-4-breaking-changes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>daisyUI 4 breaking changes',C,w,k="Since the launch of daisyUI 3 in July 2023, my focus has been on pushing the boundaries and enhancing the daisyUI experience. New features in CSS opened doors to new possibilities for daisyUI and now with the release of daisyUI 4, we can enjoy all the new features and improvements.",_,H,Ga=`This latest release marks a huge leap forward in design, functionality, accessibility, and efficiency of daisyUI. For a detailed overview of the improvements, explore the <a href="https://daisyui.com/docs/changelog/" rel="nofollow" target="_blank">daisyUI changelogs page</a>.<br/>
But the most important thing for upgrading an existing project to a new major version is breaking changes. Here in this guide, we go step by step to update daisyUI from version 3 to version 4.`,At,I,Na='<a aria-hidden="true" tabindex="-1" href="#1-update-daisyui-package"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>1. Update daisyUI package',Bt,z,Ja="First, you need to update the daisyUI package to the latest version. You can do this by running the following command in your terminal:",zt,$,$t,an='<code class="language-undefined">npm i -D daisyui@latest</code>',Kt,L,Wa='<a aria-hidden="true" tabindex="-1" href="#2-daisyui-color-variables"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>2. daisyUI color variables',Ot,K,Za=`daisyUI 4 uses <a href="https://oklch.com/" rel="nofollow" target="_blank">the new OKLCH color system</a> under the hood. That means all color CSS variables (like <code>--p</code>, <code>--s</code>, etc) now have OKLCH values instead of HSL values.<br/>
( <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl" rel="nofollow" target="_blank">Read more about OKLCH</a> )`,Yt,O,Qa="<li>If you use daisyUI colors with Tailwind CSS class names (like <code>bg-primary</code>) you don’t have to do anything.</li> <li>If you use the CSS variables directly in your project (like <code>.myclass{ color: hsl(var(--p)) }</code> ) you need to use them with oklch function (like <code>.myclass{ color: oklch(var(--p)) }</code>) now.</li>",Ft,Y,Xa="Here’s the primary color of light theme in daisyUI 3 and 4:",Gt,h,F,ts="Before",La,G,as="After",Ea,It,ft,Nt,sn=`<code class="language-css"><span class="token comment">/* the values were HSL */</span>
<span class="token property">--p</span><span class="token punctuation">:</span> 251.47 100% 56%<span class="token punctuation">;</span></code>`,Ma,Lt,ht,Jt,nn=`<code class="language-css"><span class="token comment">/* the values are OKLCH */</span>
<span class="token property">--p</span><span class="token punctuation">:</span> 0.4912 0.3096 275.75<span class="token punctuation">;</span></code>`,Wt,N,ss="So for using daisyUI color CSS variables directly inside your porject, change the color funtions from <code>hsl()</code> to <code>oklch()</code> like this:",Zt,m,J,ns="Before",Da,W,es="After",Sa,Et,mt,Qt,en=`<code class="language-css"><span class="token comment">/* Using hsl() function */</span>
<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Ua,Mt,gt,Xt,ln=`<code class="language-css"><span class="token comment">/* Using oklch() function */</span>
<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ta,E,ls='<a aria-hidden="true" tabindex="-1" href="#3-all--focus-colors-are-removed"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>3. All <code>*-focus</code> colors are removed',aa,Z,os=`All <code>*-focus</code> colors like <code>primary-focus</code> color in daisyUI 3 did was using the same <code>bg-primary</code> color with a darker shade.<br/>
Now thanks to the new <code>color-mix()</code> CSS function we do the same dynamically and it gives us more control on the the colors. For example take a look at this amazing class name. It mixes primary color with black to make it 7% darker:`,sa,Q,na,on=`<code class="language-css">bg-[<span class="token function">color-mix</span><span class="token punctuation">(</span>in_oklab<span class="token punctuation">,</span><span class="token function">oklch</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>black_7%<span class="token punctuation">)</span>]
                   │              │       │
                   │              │       │
                   │              │       │
                   │              │       ╰── black with 7% opacity = 7% darker
                   │              │
                   │              ╰── primary color
                   │
                   ╰── OKLAB gives a better result</code>`,ea,X,ps="So if you used <code>*-focus</code> colors in your project and you want the exact same result, you can use the new <code>color-mix()</code> function in arbitrary class names like this:",la,g,tt,cs="Before",ja,at,is="After",Va,Dt,bt,oa,pn=`<code class="language-jsx"><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-primary-focus"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-secondary-focus"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-accent-focus"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-neutral-focus"</span></code>`,Pa,St,xt,pa,cn=`<code class="language-jsx"><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--s)),black_7%)]"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--a)),black_7%)]"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--n)),black_7%)]"</span></code>`,ca,M,us='<a aria-hidden="true" tabindex="-1" href="#4-extending-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>4. Extending themes',ia,st,rs=`There’s a change in property names in <code>daisyui/src/theming/themes.js</code> file.<br/>
If you’re customizing built-in daisyUI themes, change it:`,ua,b,nt,ds="Before",qa,et,ks="After",Ra,Ut,yt,ra,un=`<code class="language-js"><span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=light]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`,Aa,jt,_t,da,rn=`<code class="language-js"><span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"light"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`,ka,D,vs='<a aria-hidden="true" tabindex="-1" href="#5-rtl"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>5. RTL',va,lt,fs=`daisyUI 4 components use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values" rel="nofollow" target="_blank">logical CSS properties</a> instead of directional rules (<code>mr-*</code>, <code>pl-*</code>, etc).<br/>
All components now support LTR/RTL in runtime without any config or plugin. You just need <code>&lt;html dir=rtl&gt;</code> and everything will be RTL on runtime.<br/>
You can safely remove <code>rtl: true</code> config and <code>tailwindcss-flip</code> plugin from your project (If you’re using logical Tailwind CSS utility classes and you don’t need the plugin for your own directional Tailwind CSS classes)`,fa,x,ot,hs="Before",Ba,pt,ms="After",za,Vt,wt,ha,dn=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"tailwindcss-flip"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,$a,Pt,Ct,ma,kn=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,ga,S,gs='<a aria-hidden="true" tabindex="-1" href="#6-tab"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>6. Tab',ba,ct,bs="<li>these modifier classes for <code>tab</code> are removed:<ul><li><code>tab-lifted</code></li> <li><code>tab-bordered</code></li> <li><code>tab-lg</code></li> <li><code>tab-md</code></li> <li><code>tab-sm</code></li> <li><code>tab-xs</code></li></ul></li> <li>Use the following modifier classes for the parent <code>tabs</code> class instead:<ul><li><code>tabs-lifted</code></li> <li><code>tabs-bordered</code></li> <li><code>tabs-lg</code></li> <li><code>tabs-md</code></li> <li><code>tabs-sm</code></li> <li><code>tabs-xs</code></li></ul></li>",xa,y,it,xs="Before",Ka,ut,ys="After",Oa,qt,Ht,ya,vn=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted tab-active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,Ya,Rt,Tt,_a,fn=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs tabs-lg tabs-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,wa,U,_s='<a aria-hidden="true" tabindex="-1" href="#7-button"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>7. Button',Ca,rt,ws="Buttons are not uppercase by default anymore. You can add <code>uppercase</code> class if you want to make them uppercase.",Ha,j,Cs='<a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Conclusion',Ta,dt,Hs=`That’s it! You can now enjoy the new daisyUI 4 <a href="https://daisyui.com/docs/changelog/" rel="nofollow" target="_blank">features and improvements</a> in your project.
If you have questions specific about the upgrade, ask it in <a href="https://github.com/saadeghi/daisyui/discussions/2507" rel="nofollow" target="_blank">this GitHub discussion</a> and if you found a bug, report it in <a href="https://github.com/saadeghi/daisyui/issues" rel="nofollow" target="_blank">daisyUI GitHub issues</a>`,Ia,kt,Ts="I’m excited to see all the amazing things you’ll build with daisyUI 4.";return{c(){d=s("h2"),d.innerHTML=T,C=p(),w=s("p"),w.textContent=k,_=p(),H=s("p"),H.innerHTML=Ga,At=p(),I=s("h2"),I.innerHTML=Na,Bt=p(),z=s("p"),z.textContent=Ja,zt=p(),$=s("pre"),$t=new v(!1),Kt=p(),L=s("h2"),L.innerHTML=Wa,Ot=p(),K=s("p"),K.innerHTML=Za,Yt=p(),O=s("ul"),O.innerHTML=Qa,Ft=p(),Y=s("p"),Y.textContent=Xa,Gt=p(),h=s("div"),F=s("div"),F.textContent=ts,La=p(),G=s("div"),G.textContent=as,Ea=p(),It=s("div"),ft=s("pre"),Nt=new v(!1),Ma=p(),Lt=s("div"),ht=s("pre"),Jt=new v(!1),Wt=p(),N=s("p"),N.innerHTML=ss,Zt=p(),m=s("div"),J=s("div"),J.textContent=ns,Da=p(),W=s("div"),W.textContent=es,Sa=p(),Et=s("div"),mt=s("pre"),Qt=new v(!1),Ua=p(),Mt=s("div"),gt=s("pre"),Xt=new v(!1),ta=p(),E=s("h2"),E.innerHTML=ls,aa=p(),Z=s("p"),Z.innerHTML=os,sa=p(),Q=s("pre"),na=new v(!1),ea=p(),X=s("p"),X.innerHTML=ps,la=p(),g=s("div"),tt=s("div"),tt.textContent=cs,ja=p(),at=s("div"),at.textContent=is,Va=p(),Dt=s("div"),bt=s("pre"),oa=new v(!1),Pa=p(),St=s("div"),xt=s("pre"),pa=new v(!1),ca=p(),M=s("h2"),M.innerHTML=us,ia=p(),st=s("p"),st.innerHTML=rs,ua=p(),b=s("div"),nt=s("div"),nt.textContent=ds,qa=p(),et=s("div"),et.textContent=ks,Ra=p(),Ut=s("div"),yt=s("pre"),ra=new v(!1),Aa=p(),jt=s("div"),_t=s("pre"),da=new v(!1),ka=p(),D=s("h2"),D.innerHTML=vs,va=p(),lt=s("p"),lt.innerHTML=fs,fa=p(),x=s("div"),ot=s("div"),ot.textContent=hs,Ba=p(),pt=s("div"),pt.textContent=ms,za=p(),Vt=s("div"),wt=s("pre"),ha=new v(!1),$a=p(),Pt=s("div"),Ct=s("pre"),ma=new v(!1),ga=p(),S=s("h2"),S.innerHTML=gs,ba=p(),ct=s("ul"),ct.innerHTML=bs,xa=p(),y=s("div"),it=s("div"),it.textContent=xs,Ka=p(),ut=s("div"),ut.textContent=ys,Oa=p(),qt=s("div"),Ht=s("pre"),ya=new v(!1),Ya=p(),Rt=s("div"),Tt=s("pre"),_a=new v(!1),wa=p(),U=s("h2"),U.innerHTML=_s,Ca=p(),rt=s("p"),rt.innerHTML=ws,Ha=p(),j=s("h2"),j.innerHTML=Cs,Ta=p(),dt=s("p"),dt.innerHTML=Hs,Ia=p(),kt=s("p"),kt.textContent=Ts,this.h()},l(t){d=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(d)!=="svelte-k79os5"&&(d.innerHTML=T),C=c(t),w=n(t,"P",{"data-svelte-h":!0}),u(w)!=="svelte-2qserx"&&(w.textContent=k),_=c(t),H=n(t,"P",{"data-svelte-h":!0}),u(H)!=="svelte-kzmm3t"&&(H.innerHTML=Ga),At=c(t),I=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(I)!=="svelte-1sr41ox"&&(I.innerHTML=Na),Bt=c(t),z=n(t,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1wdlii0"&&(z.textContent=Ja),zt=c(t),$=n(t,"PRE",{class:!0});var e=r($);$t=f(e,!1),e.forEach(a),Kt=c(t),L=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(L)!=="svelte-e058jz"&&(L.innerHTML=Wa),Ot=c(t),K=n(t,"P",{"data-svelte-h":!0}),u(K)!=="svelte-q4d18b"&&(K.innerHTML=Za),Yt=c(t),O=n(t,"UL",{"data-svelte-h":!0}),u(O)!=="svelte-n55ab9"&&(O.innerHTML=Qa),Ft=c(t),Y=n(t,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-opaloz"&&(Y.textContent=Xa),Gt=c(t),h=n(t,"DIV",{class:!0});var V=r(h);F=n(V,"DIV",{class:!0,"data-svelte-h":!0}),u(F)!=="svelte-6gv5x6"&&(F.textContent=ts),La=c(V),G=n(V,"DIV",{class:!0,"data-svelte-h":!0}),u(G)!=="svelte-10tl2cp"&&(G.textContent=as),Ea=c(V),It=n(V,"DIV",{});var Is=r(It);ft=n(Is,"PRE",{class:!0});var Ls=r(ft);Nt=f(Ls,!1),Ls.forEach(a),Is.forEach(a),Ma=c(V),Lt=n(V,"DIV",{});var Es=r(Lt);ht=n(Es,"PRE",{class:!0});var Ms=r(ht);Jt=f(Ms,!1),Ms.forEach(a),Es.forEach(a),V.forEach(a),Wt=c(t),N=n(t,"P",{"data-svelte-h":!0}),u(N)!=="svelte-11ekaao"&&(N.innerHTML=ss),Zt=c(t),m=n(t,"DIV",{class:!0});var P=r(m);J=n(P,"DIV",{class:!0,"data-svelte-h":!0}),u(J)!=="svelte-6gv5x6"&&(J.textContent=ns),Da=c(P),W=n(P,"DIV",{class:!0,"data-svelte-h":!0}),u(W)!=="svelte-10tl2cp"&&(W.textContent=es),Sa=c(P),Et=n(P,"DIV",{});var Ds=r(Et);mt=n(Ds,"PRE",{class:!0});var Ss=r(mt);Qt=f(Ss,!1),Ss.forEach(a),Ds.forEach(a),Ua=c(P),Mt=n(P,"DIV",{});var Us=r(Mt);gt=n(Us,"PRE",{class:!0});var js=r(gt);Xt=f(js,!1),js.forEach(a),Us.forEach(a),P.forEach(a),ta=c(t),E=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(E)!=="svelte-1qinfk3"&&(E.innerHTML=ls),aa=c(t),Z=n(t,"P",{"data-svelte-h":!0}),u(Z)!=="svelte-18dcx6e"&&(Z.innerHTML=os),sa=c(t),Q=n(t,"PRE",{class:!0});var Vs=r(Q);na=f(Vs,!1),Vs.forEach(a),ea=c(t),X=n(t,"P",{"data-svelte-h":!0}),u(X)!=="svelte-4qy9g8"&&(X.innerHTML=ps),la=c(t),g=n(t,"DIV",{class:!0});var q=r(g);tt=n(q,"DIV",{class:!0,"data-svelte-h":!0}),u(tt)!=="svelte-15ht9h3"&&(tt.textContent=cs),ja=c(q),at=n(q,"DIV",{class:!0,"data-svelte-h":!0}),u(at)!=="svelte-gu95ae"&&(at.textContent=is),Va=c(q),Dt=n(q,"DIV",{});var Ps=r(Dt);bt=n(Ps,"PRE",{class:!0});var qs=r(bt);oa=f(qs,!1),qs.forEach(a),Ps.forEach(a),Pa=c(q),St=n(q,"DIV",{});var Rs=r(St);xt=n(Rs,"PRE",{class:!0});var As=r(xt);pa=f(As,!1),As.forEach(a),Rs.forEach(a),q.forEach(a),ca=c(t),M=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(M)!=="svelte-1i4o9tz"&&(M.innerHTML=us),ia=c(t),st=n(t,"P",{"data-svelte-h":!0}),u(st)!=="svelte-1f5777s"&&(st.innerHTML=rs),ua=c(t),b=n(t,"DIV",{class:!0});var R=r(b);nt=n(R,"DIV",{class:!0,"data-svelte-h":!0}),u(nt)!=="svelte-15ht9h3"&&(nt.textContent=ds),qa=c(R),et=n(R,"DIV",{class:!0,"data-svelte-h":!0}),u(et)!=="svelte-gu95ae"&&(et.textContent=ks),Ra=c(R),Ut=n(R,"DIV",{});var Bs=r(Ut);yt=n(Bs,"PRE",{class:!0});var zs=r(yt);ra=f(zs,!1),zs.forEach(a),Bs.forEach(a),Aa=c(R),jt=n(R,"DIV",{});var $s=r(jt);_t=n($s,"PRE",{class:!0});var Ks=r(_t);da=f(Ks,!1),Ks.forEach(a),$s.forEach(a),R.forEach(a),ka=c(t),D=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(D)!=="svelte-15b0xf8"&&(D.innerHTML=vs),va=c(t),lt=n(t,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-17dt1xw"&&(lt.innerHTML=fs),fa=c(t),x=n(t,"DIV",{class:!0});var A=r(x);ot=n(A,"DIV",{class:!0,"data-svelte-h":!0}),u(ot)!=="svelte-15ht9h3"&&(ot.textContent=hs),Ba=c(A),pt=n(A,"DIV",{class:!0,"data-svelte-h":!0}),u(pt)!=="svelte-gu95ae"&&(pt.textContent=ms),za=c(A),Vt=n(A,"DIV",{});var Os=r(Vt);wt=n(Os,"PRE",{class:!0});var Ys=r(wt);ha=f(Ys,!1),Ys.forEach(a),Os.forEach(a),$a=c(A),Pt=n(A,"DIV",{});var Fs=r(Pt);Ct=n(Fs,"PRE",{class:!0});var Gs=r(Ct);ma=f(Gs,!1),Gs.forEach(a),Fs.forEach(a),A.forEach(a),ga=c(t),S=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(S)!=="svelte-1jwd78i"&&(S.innerHTML=gs),ba=c(t),ct=n(t,"UL",{"data-svelte-h":!0}),u(ct)!=="svelte-jesppc"&&(ct.innerHTML=bs),xa=c(t),y=n(t,"DIV",{class:!0});var B=r(y);it=n(B,"DIV",{class:!0,"data-svelte-h":!0}),u(it)!=="svelte-15ht9h3"&&(it.textContent=xs),Ka=c(B),ut=n(B,"DIV",{class:!0,"data-svelte-h":!0}),u(ut)!=="svelte-gu95ae"&&(ut.textContent=ys),Oa=c(B),qt=n(B,"DIV",{});var Ns=r(qt);Ht=n(Ns,"PRE",{class:!0});var Js=r(Ht);ya=f(Js,!1),Js.forEach(a),Ns.forEach(a),Ya=c(B),Rt=n(B,"DIV",{});var Ws=r(Rt);Tt=n(Ws,"PRE",{class:!0});var Zs=r(Tt);_a=f(Zs,!1),Zs.forEach(a),Ws.forEach(a),B.forEach(a),wa=c(t),U=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(U)!=="svelte-ju9rti"&&(U.innerHTML=_s),Ca=c(t),rt=n(t,"P",{"data-svelte-h":!0}),u(rt)!=="svelte-iwlfnv"&&(rt.innerHTML=ws),Ha=c(t),j=n(t,"H2",{id:!0,"data-svelte-h":!0}),u(j)!=="svelte-1bec0y6"&&(j.innerHTML=Cs),Ta=c(t),dt=n(t,"P",{"data-svelte-h":!0}),u(dt)!=="svelte-qolv1q"&&(dt.innerHTML=Hs),Ia=c(t),kt=n(t,"P",{"data-svelte-h":!0}),u(kt)!=="svelte-1s7wu2l"&&(kt.textContent=Ts),this.h()},h(){i(d,"id","daisyui-4-breaking-changes"),i(I,"id","1-update-daisyui-package"),$t.a=null,i($,"class","language-undefined"),i(L,"id","2-daisyui-color-variables"),i(F,"class","text-center text-xs text-base-content/50 font-bold"),i(G,"class","text-center text-xs text-base-content/50 font-bold"),Nt.a=null,i(ft,"class","language-css"),Jt.a=null,i(ht,"class","language-css"),i(h,"class","grid sm:grid-cols-2 gap-x-4"),i(J,"class","text-center text-xs text-base-content/50 font-bold"),i(W,"class","text-center text-xs text-base-content/50 font-bold"),Qt.a=null,i(mt,"class","language-css"),Xt.a=null,i(gt,"class","language-css"),i(m,"class","grid sm:grid-cols-2 gap-x-4"),i(E,"id","3-all--focus-colors-are-removed"),na.a=null,i(Q,"class","language-css"),i(tt,"class","row-start-1 text-center text-xs text-base-content/50 font-bold"),i(at,"class","row-start-3 text-center text-xs text-base-content/50 font-bold"),oa.a=null,i(bt,"class","language-jsx"),pa.a=null,i(xt,"class","language-jsx"),i(g,"class","grid"),i(M,"id","4-extending-themes"),i(nt,"class","row-start-1 text-center text-xs text-base-content/50 font-bold"),i(et,"class","row-start-3 text-center text-xs text-base-content/50 font-bold"),ra.a=null,i(yt,"class","language-js"),da.a=null,i(_t,"class","language-js"),i(b,"class","grid"),i(D,"id","5-rtl"),i(ot,"class","row-start-1 text-center text-xs text-base-content/50 font-bold"),i(pt,"class","row-start-3 text-center text-xs text-base-content/50 font-bold"),ha.a=null,i(wt,"class","language-js"),ma.a=null,i(Ct,"class","language-js"),i(x,"class","grid"),i(S,"id","6-tab"),i(it,"class","row-start-1 text-center text-xs text-base-content/50 font-bold"),i(ut,"class","row-start-3 text-center text-xs text-base-content/50 font-bold"),ya.a=null,i(Ht,"class","language-html"),_a.a=null,i(Tt,"class","language-html"),i(y,"class","grid"),i(U,"id","7-button"),i(j,"id","conclusion")},m(t,e){l(t,d,e),l(t,C,e),l(t,w,e),l(t,_,e),l(t,H,e),l(t,At,e),l(t,I,e),l(t,Bt,e),l(t,z,e),l(t,zt,e),l(t,$,e),$t.m(an,$),l(t,Kt,e),l(t,L,e),l(t,Ot,e),l(t,K,e),l(t,Yt,e),l(t,O,e),l(t,Ft,e),l(t,Y,e),l(t,Gt,e),l(t,h,e),o(h,F),o(h,La),o(h,G),o(h,Ea),o(h,It),o(It,ft),Nt.m(sn,ft),o(h,Ma),o(h,Lt),o(Lt,ht),Jt.m(nn,ht),l(t,Wt,e),l(t,N,e),l(t,Zt,e),l(t,m,e),o(m,J),o(m,Da),o(m,W),o(m,Sa),o(m,Et),o(Et,mt),Qt.m(en,mt),o(m,Ua),o(m,Mt),o(Mt,gt),Xt.m(ln,gt),l(t,ta,e),l(t,E,e),l(t,aa,e),l(t,Z,e),l(t,sa,e),l(t,Q,e),na.m(on,Q),l(t,ea,e),l(t,X,e),l(t,la,e),l(t,g,e),o(g,tt),o(g,ja),o(g,at),o(g,Va),o(g,Dt),o(Dt,bt),oa.m(pn,bt),o(g,Pa),o(g,St),o(St,xt),pa.m(cn,xt),l(t,ca,e),l(t,M,e),l(t,ia,e),l(t,st,e),l(t,ua,e),l(t,b,e),o(b,nt),o(b,qa),o(b,et),o(b,Ra),o(b,Ut),o(Ut,yt),ra.m(un,yt),o(b,Aa),o(b,jt),o(jt,_t),da.m(rn,_t),l(t,ka,e),l(t,D,e),l(t,va,e),l(t,lt,e),l(t,fa,e),l(t,x,e),o(x,ot),o(x,Ba),o(x,pt),o(x,za),o(x,Vt),o(Vt,wt),ha.m(dn,wt),o(x,$a),o(x,Pt),o(Pt,Ct),ma.m(kn,Ct),l(t,ga,e),l(t,S,e),l(t,ba,e),l(t,ct,e),l(t,xa,e),l(t,y,e),o(y,it),o(y,Ka),o(y,ut),o(y,Oa),o(y,qt),o(qt,Ht),ya.m(vn,Ht),o(y,Ya),o(y,Rt),o(Rt,Tt),_a.m(fn,Tt),l(t,wa,e),l(t,U,e),l(t,Ca,e),l(t,rt,e),l(t,Ha,e),l(t,j,e),l(t,Ta,e),l(t,dt,e),l(t,Ia,e),l(t,kt,e)},p:mn,d(t){t&&(a(d),a(C),a(w),a(_),a(H),a(At),a(I),a(Bt),a(z),a(zt),a($),a(Kt),a(L),a(Ot),a(K),a(Yt),a(O),a(Ft),a(Y),a(Gt),a(h),a(Wt),a(N),a(Zt),a(m),a(ta),a(E),a(aa),a(Z),a(sa),a(Q),a(ea),a(X),a(la),a(g),a(ca),a(M),a(ia),a(st),a(ua),a(b),a(ka),a(D),a(va),a(lt),a(fa),a(x),a(ga),a(S),a(ba),a(ct),a(xa),a(y),a(wa),a(U),a(Ca),a(rt),a(Ha),a(j),a(Ta),a(dt),a(Ia),a(kt))}}}function En(vt){let d,T;const C=[vt[0],tn];let w={$$slots:{default:[Ln]},$$scope:{ctx:vt}};for(let k=0;k<C.length;k+=1)w=Fa(w,C[k]);return d=new In({props:w}),{c(){xn(d.$$.fragment)},l(k){yn(d.$$.fragment,k)},m(k,_){_n(d,k,_),T=!0},p(k,[_]){const H=_&1?Tn(C,[_&1&&Xs(k[0]),_&0&&Xs(tn)]):{};_&2&&(H.$$scope={dirty:_,ctx:k}),d.$set(H)},i(k){T||(wn(d.$$.fragment,k),T=!0)},o(k){Cn(d.$$.fragment,k),T=!1},d(k){Hn(d,k)}}}const tn={title:"How to update daisyUI from version 3 to version 4",desc:"This upgrade guide helps you easily update daisyUI to version 4 without breaking anything.",published:!0,date:"2023-11-23T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"/images/blog/daisyui-4-update-guide.jpg",tags:["daisyUI"]};function Mn(vt,d,T){return vt.$$set=C=>{T(0,d=Fa(Fa({},d),Qs(C)))},d=Qs(d),[d]}class Vn extends gn{constructor(d){super(),bn(this,d,Mn,En,hn,{})}}export{Vn as component};
