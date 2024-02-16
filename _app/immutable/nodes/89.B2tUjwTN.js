import{s as ai,z as lt,A as Xt,e as l,a as s,c as n,g as r,d as o,i as c,w as ei,j as i,n as li,h as a}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as ni,i as si,c as oi,b as ri,m as di,t as ui,a as ci,d as pi}from"../chunks/index.BimWP6M-.js";import{g as mi,a as ti}from"../chunks/spread.CgU5AtxT.js";import{M as hi}from"../chunks/mdsvex-blog.Ctcp5KI_.js";function fi(ue){let d,b="It’s been 3 years since the first commit of daisyUI. At first, it was just a small side project to help me with my own freelance projects. But it quickly grew into something bigger than I could have ever imagined. It’s been an exciting journey and 2023 in particular was a special year for daisyUI. Let’s see all the good things that happened in 2023.",h,p,u='<a aria-hidden="true" tabindex="-1" href="#2023-in-numbers-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>2023 in numbers 📊',m,f,nt="<li>In 2023 we released <code>190</code> versions of daisyUI from <code>2.46.1</code> to <code>4.4.20</code> fixing more than <code>1000</code> bugs and adding many new features.</li> <li>daisyUI is now used in more than <code>156,000</code> open source projects according to GitHub’s dependency graph (<code>340%</code> increase compared to 2022).</li> <li>In the past year, daisyUI GitHub repo went from <code>16,000</code> stars to <code>27,000</code> stars and it’s now in GitHub’s top 500 repositories.</li> <li>daisyUI NPM package recently reached the all time record of <code>260,000</code> downloads per week. It was downloaded <code>7.7</code> million times in 2023 (a <code>330%</code> increase compared to 2022).</li>",ce,S,st='<img src="/images/blog/daisyui-is-the-most-popular-tailwindcss-component-library.png" alt="daisyUI NPM installs" class="rounded-box"/> <figcaption class="text-center">daisyUI NPM installs</figcaption>',pe,P,ot="<li>daisyUI CDN file now has more than <code>3 million hits per week</code> from jsDelivr only (we can estimate a similar number from other CDNs in addition to jsDelivr).</li> <li>In the beginning of 2023, daisyUI had <code>89</code> contributors. Now in December, it has <code>162</code> contributors from many different countries around the world.</li>",me,z,rt='<img src="/images/blog/daisyui-contributors.png" alt="daisyUI contributors around the world" class="rounded-box"/> <figcaption class="text-center">daisyUI contributors around the world</figcaption>',he,y,dt='<a aria-hidden="true" tabindex="-1" href="#performance-improvements"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>performance improvements',fe,j,ut="<li>daisyUI 4 reduced the Node package install size from 14.0MB to 3.83MB (including all dependencies).</li> <li>daisyUI 4 reduced Node module dependencies by 92% and node_modules footprint by 73%.</li>",be,q,ct="<thead><tr><th></th> <th>daisyUI 3</th> <th>daisyUI 4</th></tr></thead> <tbody><tr><td>NPM install size</td> <td>14.0MB</td> <td>3.83MB</td></tr> <tr><td>NPM bundle size</td> <td>434kB</td> <td>238.7kB</td></tr> <tr><td>NPM bundle size (gzip)</td> <td>74.7kB</td> <td>38.8kB</td></tr> <tr><td>Total Node module dependencies</td> <td>86</td> <td>7</td></tr></tbody>",ye,B,pt="<li>We moved from HSL color system to OKLCH wide-gamut color system. This granted us access to a wider color gamut and allows us to use more colors in daisyUI themes.</li> <li>daisyUI 4 also moved from directional CSS to logical CSS properties which makes it easier to support RTL languages in runtime, without the need to generate a separate CSS file using additional dependencies.</li>",ve,v,mt='<a aria-hidden="true" tabindex="-1" href="#new-features"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>New features',we,G,ht='In 2023, we added 7 new components, 3 new themes and more than 100 utility classes to daisyUI. We also rewrote the style for many components to make them more accessible and easier to customize. You can check the details in the <a href="/docs/changelog/">changelog</a>.',ge,w,ft='<a aria-hidden="true" tabindex="-1" href="#accessibility"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Accessibility',xe,N,bt='All color pairs used on daisyUI built-in themes now tested for contrast ratio and <a href="https://github.com/saadeghi/daisyui/actions/runs/7216144450/job/19661791138#step:6:20" rel="nofollow" target="_blank">they all pass the WCAG test</a>. This test runs automatically everytime there’s a change in themes or theme functions to make sure we provide accessible color combinations by default.',He,A,yt='<img src="/images/blog/daisyui-colors-are-accessible.png" alt="daisyUI colors are accessible" class="rounded-box"/> <figcaption class="text-center"><p><a href="https://github.com/saadeghi/daisyui/actions/runs/7216144450/job/19661791138#step:6:20" rel="nofollow" target="_blank">See the test results</a></p></figcaption>',Te,W,vt="In 2023 all daisyUI theme colors were adjusted to improve contrast ratio while providing a better visual experience. As long as you use the correct color pairs to build your UI (for example using <code>bg-primary</code> and <code>text-primary-content</code> together), you can be sure that your UI is accessible by default, on all themes.",Ie,F,wt="In 2023 daisyUI adapted to new HTML and CSS standards such as the new <code>&lt;dialog&gt;</code> element and CSS features like <code>:has()</code> and <code>color-mix()</code>. We also improved existing components to make sure they are accessible by default. We now use HTML <code>&lt;dialog&gt;</code> element for daisyUI modal and we use HTML <code>&lt;details&gt;</code> for submenus and dropdown examples.",Me,R,gt="daisyUI uses native HTML elements and attributes on all components to provide an accessible experience by default. We are not using <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> with <code>role</code> attributes to emulate native HTML elements. This means accessibility is not an afterthought in daisyUI. It’s included by default if use the native HTML elements.",Le,$,xt='This is a huge advantage for daisyUI and it’s one of the reasons why daisyUI is accessible. For example, <a href="https://daisyui.com/components/toggle/" rel="nofollow" target="_blank">daisyUI <code>toggle</code></a> is a native HTML checkbox and it’s accessible by default. But if a component library uses <code>&lt;div&gt;</code> tags to to emulate native HTML elements they would need <code>role=&quot;checkbox&quot;</code>, <code>aria-checked</code> and <code>aria-labelledby</code> attributes to make it accessible for screen readers and keyboard navigation. They would also need custom, framework specific JS to make it functional. This is not the case for daisyUI because we use semantic HTML elements and attributes for daisyUI components.',_e,E,Ht="In 2023 we improved the code example for each component to make sure they are accessible for keyboard navigation and screen readers.",Ce,D,Tt=`<p>For content-specific code examples, we don’t provide a generic content in the code example.<br/>
For example <code>&lt;img&gt;</code> tags do not have an <code>alt</code> attribute because the <code>alt</code> attribute must be provided by you, based on your page’s content. This is also true for <code>aria-label</code> and <code>aria-labelledby</code> attributes.<br/>
If we provide a dummy text for that, it’s likely for you to ship that code to production without changing it.<br/>
That’s not okay so it’s better if you receive an error from your code editor or linter to remind you to add the correct <code>alt</code> or <code>aria-label</code> attribute when needed.</p>`,Ue,g,It='<a aria-hidden="true" tabindex="-1" href="#a-cli-for-installing-tailwind-css-and-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>A CLI for installing Tailwind CSS and daisyUI',ke,O,Mt=`In 2023 we released <a href="/blog/npm-init-daisyui/">npm init daisyui</a> which is a CLI tool for installing Tailwind CSS, PostCSS and daisyUI in a single command.
<a href="https://github.com/daisyui/create-daisyui/" rel="nofollow" target="_blank">Give the repo a star on GitHub</a> if you like it!`,Se,x,Lt='<a aria-hidden="true" tabindex="-1" href="#daisyui-has-a-logo-now"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>daisyUI has a logo now!',Pe,V,_t=`Some people say it’s a fried egg 🍳 and avocado 🥑, some people say it’s a flower 🌼<br/>
But we all agree that it’s cute and simple.`,ze,H,Ct,je,T,Ut='<a aria-hidden="true" tabindex="-1" href="#website-redesign"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Website redesign',qe,Y,kt="daisyUI website was redesigned in 2023. The new homepage visualizes the most important features of daisyUI and how it can help your development workflow using Tailwind CSS. We’re using SvelteKit 2 and Vite 5 for the website now and it’s such a joy to work with.",Be,I,St='<a aria-hidden="true" tabindex="-1" href="#docs-improvements"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Docs improvements',Ge,K,Pt="We added 6 new translations to the website in 2023. daisyUI docs are now available in 16 languages which makes it accessible to a wider audience.",Ne,M,zt,Ae,Q,jt='This year we launched <a href="/store/">daisyUI Store</a>, <a href="/resources/videos/">daisyUI Resources</a> and <a href="/blog/">daisyUI Blog</a>.',We,J,qt='We added new pages including <a href="/docs/roadmap/">daisyUI Roadmap</a>, <a href="/docs/utilities/">daisyUI utilities docs</a> and also a <a href="https://github.com/saadeghi/daisyui/discussions/1949" rel="nofollow" target="_blank">FAQ page</a>.',Fe,L,Bt='<a aria-hidden="true" tabindex="-1" href="#newsletter"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Newsletter',Re,Z,Gt="We have a newsletter now! You can subscribe using the form on the footer of the website to get the latest news about daisyUI.",$e,X,Nt='You can also subscribe to the RSS feed for <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4 text-warning"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <a href="/blog/rss.xml">daisyUI Blog</a> or <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4 text-warning"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <a href="/store/rss.xml">daisyUI Store</a> to get the latest updates.',Ee,_,At='<a aria-hidden="true" tabindex="-1" href="#growing-community"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>growing community',De,ee,Wt='There are projects built on top of daisyUI like <a href="https://github.com/daisyui/react-daisyui" rel="nofollow" target="_blank">React daisyUI</a> which is a React component library on top of daisyUI. There is also <a href="https://github.com/robsontenorio/mary" rel="nofollow" target="_blank">Mary UI</a> for Laravel and Livewire. I’m really excited to see more projects like these in 2024. If you’re working on a project built on top of daisyUI, let me know so I can add it the footer of daisyUI website.',Oe,C,Ft='<a aria-hidden="true" tabindex="-1" href="#thank-you-daisyui-contributors-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Thank you daisyUI contributors 💚',Ve,te,Rt="In the beginning of 2023, daisyUI had <code>89</code> contributors. Now it has <code>162</code> contributors. I’m grateful for all contributions and support from the community. daisyUI is a community project that wouldn’t be possible without the help of all contributors.",Ye,ie,$t='<img src="https://contrib.rocks/image?repo=saadeghi/daisyui&amp;columns=15&amp;anon=1&amp;max=300" alt="daisyUI contributors on GitHub" class="rounded-box"/> <figcaption class="text-center">daisyUI contributors on GitHub</figcaption>',Ke,ae,Et="daisyUI now has 77 financial contributors who help us keep the project alive by donating on Open Collective. Thank you all for your support!",Qe,le,Dt='<img src="https://opencollective.com/daisyui/organizations.svg?button=false&amp;width=745&amp;avatarHeight=50" alt="daisyUI organization backers" class="rounded-box"/> <img src="https://opencollective.com/daisyui/backers.svg?button=false&amp;width=745&amp;avatarHeight=50" alt="daisyUI backers" class="rounded-box"/> <figcaption class="text-center">daisyUI sponsors on Open Collective</figcaption>',Je,U,Ot='<a aria-hidden="true" tabindex="-1" href="#whats-next"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What’s next?',Ze,ne,Vt="We’re going to fix bugs and improve daisyUI continuously. There are lots of cool things coming to CSS and Tailwind CSS in 2024 and we’re going to use them all in daisyUI. There will be new components, new themes and new features in 2024 in addition to many improvements to the existing components. I’m so excited for 2024 and I hope you are too!",Xe,se,Yt='To contribute to daisyUI, you can <a href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md" rel="nofollow" target="_blank">start by reading the contribution guide</a>, and to report a bug or request a feature, you can <a href="https://github.com/saadeghi/daisyui/issues" rel="nofollow" target="_blank">open a new issue on GitHub</a>.',et,oe,Kt='If you have any questions, you can ask them on <a href="https://github.com/saadeghi/daisyui/discussions" rel="nofollow" target="_blank">daisyUI discussions</a>.',tt,k,Qt='<a aria-hidden="true" tabindex="-1" href="#happy-new-year-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Happy new year! 🎉',it,re,Jt="2023 was a great year for daisyUI and I’m so excited about how much we can accomplish in 2024. I hope you have a great year too and I wish you all the best in 2024.",at,de,Zt='🎁 As a new year gift, use the coupon code <code>YEAR2024</code> to get 40% off on all daisyUI products on <a href="/store/">daisyUI Store</a>.';return{c(){d=l("p"),d.textContent=b,h=s(),p=l("h2"),p.innerHTML=u,m=s(),f=l("ul"),f.innerHTML=nt,ce=s(),S=l("figure"),S.innerHTML=st,pe=s(),P=l("ul"),P.innerHTML=ot,me=s(),z=l("figure"),z.innerHTML=rt,he=s(),y=l("h2"),y.innerHTML=dt,fe=s(),j=l("ul"),j.innerHTML=ut,be=s(),q=l("table"),q.innerHTML=ct,ye=s(),B=l("ul"),B.innerHTML=pt,ve=s(),v=l("h2"),v.innerHTML=mt,we=s(),G=l("p"),G.innerHTML=ht,ge=s(),w=l("h2"),w.innerHTML=ft,xe=s(),N=l("p"),N.innerHTML=bt,He=s(),A=l("figure"),A.innerHTML=yt,Te=s(),W=l("p"),W.innerHTML=vt,Ie=s(),F=l("p"),F.innerHTML=wt,Me=s(),R=l("p"),R.innerHTML=gt,Le=s(),$=l("p"),$.innerHTML=xt,_e=s(),E=l("p"),E.textContent=Ht,Ce=s(),D=l("blockquote"),D.innerHTML=Tt,Ue=s(),g=l("h2"),g.innerHTML=It,ke=s(),O=l("p"),O.innerHTML=Mt,Se=s(),x=l("h2"),x.innerHTML=Lt,Pe=s(),V=l("p"),V.innerHTML=_t,ze=s(),H=l("img"),je=s(),T=l("h2"),T.innerHTML=Ut,qe=s(),Y=l("p"),Y.textContent=kt,Be=s(),I=l("h2"),I.innerHTML=St,Ge=s(),K=l("p"),K.textContent=Pt,Ne=s(),M=l("img"),Ae=s(),Q=l("p"),Q.innerHTML=jt,We=s(),J=l("p"),J.innerHTML=qt,Fe=s(),L=l("h2"),L.innerHTML=Bt,Re=s(),Z=l("p"),Z.textContent=Gt,$e=s(),X=l("p"),X.innerHTML=Nt,Ee=s(),_=l("h2"),_.innerHTML=At,De=s(),ee=l("p"),ee.innerHTML=Wt,Oe=s(),C=l("h2"),C.innerHTML=Ft,Ve=s(),te=l("p"),te.innerHTML=Rt,Ye=s(),ie=l("figure"),ie.innerHTML=$t,Ke=s(),ae=l("p"),ae.textContent=Et,Qe=s(),le=l("figure"),le.innerHTML=Dt,Je=s(),U=l("h2"),U.innerHTML=Ot,Ze=s(),ne=l("p"),ne.textContent=Vt,Xe=s(),se=l("p"),se.innerHTML=Yt,et=s(),oe=l("p"),oe.innerHTML=Kt,tt=s(),k=l("h2"),k.innerHTML=Qt,it=s(),re=l("p"),re.textContent=Jt,at=s(),de=l("p"),de.innerHTML=Zt,this.h()},l(e){d=n(e,"P",{"data-svelte-h":!0}),r(d)!=="svelte-dw67cn"&&(d.textContent=b),h=o(e),p=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(p)!=="svelte-12kfz90"&&(p.innerHTML=u),m=o(e),f=n(e,"UL",{"data-svelte-h":!0}),r(f)!=="svelte-z3fkbj"&&(f.innerHTML=nt),ce=o(e),S=n(e,"FIGURE",{"data-svelte-h":!0}),r(S)!=="svelte-1m62miq"&&(S.innerHTML=st),pe=o(e),P=n(e,"UL",{"data-svelte-h":!0}),r(P)!=="svelte-g3j3lz"&&(P.innerHTML=ot),me=o(e),z=n(e,"FIGURE",{"data-svelte-h":!0}),r(z)!=="svelte-mrk0vq"&&(z.innerHTML=rt),he=o(e),y=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-htpbhg"&&(y.innerHTML=dt),fe=o(e),j=n(e,"UL",{"data-svelte-h":!0}),r(j)!=="svelte-zub27d"&&(j.innerHTML=ut),be=o(e),q=n(e,"TABLE",{"data-svelte-h":!0}),r(q)!=="svelte-1nx3hmw"&&(q.innerHTML=ct),ye=o(e),B=n(e,"UL",{"data-svelte-h":!0}),r(B)!=="svelte-4lkx25"&&(B.innerHTML=pt),ve=o(e),v=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-13yi51u"&&(v.innerHTML=mt),we=o(e),G=n(e,"P",{"data-svelte-h":!0}),r(G)!=="svelte-1wz1dpl"&&(G.innerHTML=ht),ge=o(e),w=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-1w851ot"&&(w.innerHTML=ft),xe=o(e),N=n(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-3ib5m3"&&(N.innerHTML=bt),He=o(e),A=n(e,"FIGURE",{"data-svelte-h":!0}),r(A)!=="svelte-1u4vzve"&&(A.innerHTML=yt),Te=o(e),W=n(e,"P",{"data-svelte-h":!0}),r(W)!=="svelte-1d5xtdu"&&(W.innerHTML=vt),Ie=o(e),F=n(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-1e73ow1"&&(F.innerHTML=wt),Me=o(e),R=n(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-6ulhvn"&&(R.innerHTML=gt),Le=o(e),$=n(e,"P",{"data-svelte-h":!0}),r($)!=="svelte-120257j"&&($.innerHTML=xt),_e=o(e),E=n(e,"P",{"data-svelte-h":!0}),r(E)!=="svelte-1y7ft5q"&&(E.textContent=Ht),Ce=o(e),D=n(e,"BLOCKQUOTE",{"data-svelte-h":!0}),r(D)!=="svelte-kvzyom"&&(D.innerHTML=Tt),Ue=o(e),g=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(g)!=="svelte-1g7rtci"&&(g.innerHTML=It),ke=o(e),O=n(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-82t4bi"&&(O.innerHTML=Mt),Se=o(e),x=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(x)!=="svelte-93leg0"&&(x.innerHTML=Lt),Pe=o(e),V=n(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-6qhf2y"&&(V.innerHTML=_t),ze=o(e),H=n(e,"IMG",{src:!0,alt:!0,class:!0}),je=o(e),T=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(T)!=="svelte-1bel2g9"&&(T.innerHTML=Ut),qe=o(e),Y=n(e,"P",{"data-svelte-h":!0}),r(Y)!=="svelte-21xfql"&&(Y.textContent=kt),Be=o(e),I=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(I)!=="svelte-1v8wk81"&&(I.innerHTML=St),Ge=o(e),K=n(e,"P",{"data-svelte-h":!0}),r(K)!=="svelte-1yycb0o"&&(K.textContent=Pt),Ne=o(e),M=n(e,"IMG",{src:!0,alt:!0,class:!0}),Ae=o(e),Q=n(e,"P",{"data-svelte-h":!0}),r(Q)!=="svelte-q38gzw"&&(Q.innerHTML=jt),We=o(e),J=n(e,"P",{"data-svelte-h":!0}),r(J)!=="svelte-1ftnui5"&&(J.innerHTML=qt),Fe=o(e),L=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(L)!=="svelte-pdny6a"&&(L.innerHTML=Bt),Re=o(e),Z=n(e,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-1ti5z6m"&&(Z.textContent=Gt),$e=o(e),X=n(e,"P",{"data-svelte-h":!0}),r(X)!=="svelte-15n5mjt"&&(X.innerHTML=Nt),Ee=o(e),_=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(_)!=="svelte-1k2a0gl"&&(_.innerHTML=At),De=o(e),ee=n(e,"P",{"data-svelte-h":!0}),r(ee)!=="svelte-1g96kkf"&&(ee.innerHTML=Wt),Oe=o(e),C=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(C)!=="svelte-3gvzuz"&&(C.innerHTML=Ft),Ve=o(e),te=n(e,"P",{"data-svelte-h":!0}),r(te)!=="svelte-e177ob"&&(te.innerHTML=Rt),Ye=o(e),ie=n(e,"FIGURE",{"data-svelte-h":!0}),r(ie)!=="svelte-1xion14"&&(ie.innerHTML=$t),Ke=o(e),ae=n(e,"P",{"data-svelte-h":!0}),r(ae)!=="svelte-i96f7o"&&(ae.textContent=Et),Qe=o(e),le=n(e,"FIGURE",{"data-svelte-h":!0}),r(le)!=="svelte-1e52jyp"&&(le.innerHTML=Dt),Je=o(e),U=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(U)!=="svelte-sc6arl"&&(U.innerHTML=Ot),Ze=o(e),ne=n(e,"P",{"data-svelte-h":!0}),r(ne)!=="svelte-5z7mxp"&&(ne.textContent=Vt),Xe=o(e),se=n(e,"P",{"data-svelte-h":!0}),r(se)!=="svelte-1g9q4sd"&&(se.innerHTML=Yt),et=o(e),oe=n(e,"P",{"data-svelte-h":!0}),r(oe)!=="svelte-1qjpme2"&&(oe.innerHTML=Kt),tt=o(e),k=n(e,"H2",{id:!0,"data-svelte-h":!0}),r(k)!=="svelte-1hef596"&&(k.innerHTML=Qt),it=o(e),re=n(e,"P",{"data-svelte-h":!0}),r(re)!=="svelte-yhloqi"&&(re.textContent=Jt),at=o(e),de=n(e,"P",{"data-svelte-h":!0}),r(de)!=="svelte-1e26dzx"&&(de.innerHTML=Zt),this.h()},h(){c(p,"id","2023-in-numbers-"),c(y,"id","performance-improvements"),c(v,"id","new-features"),c(w,"id","accessibility"),c(g,"id","a-cli-for-installing-tailwind-css-and-daisyui"),c(x,"id","daisyui-has-a-logo-now"),ei(H.src,Ct="/images/daisyui-logo/daisyui-logotype.svg")||c(H,"src",Ct),c(H,"alt","daisyUI logo"),c(H,"class","w-2/3 mx-auto bg-gray-100 rounded-box"),c(T,"id","website-redesign"),c(I,"id","docs-improvements"),ei(M.src,zt="/images/blog/daisyui-translations.png")||c(M,"src",zt),c(M,"alt","daisyUI translations"),c(M,"class","rounded-box mx-auto w-2/3"),c(L,"id","newsletter"),c(_,"id","growing-community"),c(C,"id","thank-you-daisyui-contributors-"),c(U,"id","whats-next"),c(k,"id","happy-new-year-")},m(e,t){i(e,d,t),i(e,h,t),i(e,p,t),i(e,m,t),i(e,f,t),i(e,ce,t),i(e,S,t),i(e,pe,t),i(e,P,t),i(e,me,t),i(e,z,t),i(e,he,t),i(e,y,t),i(e,fe,t),i(e,j,t),i(e,be,t),i(e,q,t),i(e,ye,t),i(e,B,t),i(e,ve,t),i(e,v,t),i(e,we,t),i(e,G,t),i(e,ge,t),i(e,w,t),i(e,xe,t),i(e,N,t),i(e,He,t),i(e,A,t),i(e,Te,t),i(e,W,t),i(e,Ie,t),i(e,F,t),i(e,Me,t),i(e,R,t),i(e,Le,t),i(e,$,t),i(e,_e,t),i(e,E,t),i(e,Ce,t),i(e,D,t),i(e,Ue,t),i(e,g,t),i(e,ke,t),i(e,O,t),i(e,Se,t),i(e,x,t),i(e,Pe,t),i(e,V,t),i(e,ze,t),i(e,H,t),i(e,je,t),i(e,T,t),i(e,qe,t),i(e,Y,t),i(e,Be,t),i(e,I,t),i(e,Ge,t),i(e,K,t),i(e,Ne,t),i(e,M,t),i(e,Ae,t),i(e,Q,t),i(e,We,t),i(e,J,t),i(e,Fe,t),i(e,L,t),i(e,Re,t),i(e,Z,t),i(e,$e,t),i(e,X,t),i(e,Ee,t),i(e,_,t),i(e,De,t),i(e,ee,t),i(e,Oe,t),i(e,C,t),i(e,Ve,t),i(e,te,t),i(e,Ye,t),i(e,ie,t),i(e,Ke,t),i(e,ae,t),i(e,Qe,t),i(e,le,t),i(e,Je,t),i(e,U,t),i(e,Ze,t),i(e,ne,t),i(e,Xe,t),i(e,se,t),i(e,et,t),i(e,oe,t),i(e,tt,t),i(e,k,t),i(e,it,t),i(e,re,t),i(e,at,t),i(e,de,t)},p:li,d(e){e&&(a(d),a(h),a(p),a(m),a(f),a(ce),a(S),a(pe),a(P),a(me),a(z),a(he),a(y),a(fe),a(j),a(be),a(q),a(ye),a(B),a(ve),a(v),a(we),a(G),a(ge),a(w),a(xe),a(N),a(He),a(A),a(Te),a(W),a(Ie),a(F),a(Me),a(R),a(Le),a($),a(_e),a(E),a(Ce),a(D),a(Ue),a(g),a(ke),a(O),a(Se),a(x),a(Pe),a(V),a(ze),a(H),a(je),a(T),a(qe),a(Y),a(Be),a(I),a(Ge),a(K),a(Ne),a(M),a(Ae),a(Q),a(We),a(J),a(Fe),a(L),a(Re),a(Z),a($e),a(X),a(Ee),a(_),a(De),a(ee),a(Oe),a(C),a(Ve),a(te),a(Ye),a(ie),a(Ke),a(ae),a(Qe),a(le),a(Je),a(U),a(Ze),a(ne),a(Xe),a(se),a(et),a(oe),a(tt),a(k),a(it),a(re),a(at),a(de))}}}function bi(ue){let d,b;const h=[ue[0],ii];let p={$$slots:{default:[fi]},$$scope:{ctx:ue}};for(let u=0;u<h.length;u+=1)p=lt(p,h[u]);return d=new hi({props:p}),{c(){oi(d.$$.fragment)},l(u){ri(d.$$.fragment,u)},m(u,m){di(d,u,m),b=!0},p(u,[m]){const f=m&1?mi(h,[m&1&&ti(u[0]),m&0&&ti(ii)]):{};m&2&&(f.$$scope={dirty:m,ctx:u}),d.$set(f)},i(u){b||(ui(d.$$.fragment,u),b=!0)},o(u){ci(d.$$.fragment,u),b=!1},d(u){pi(d,u)}}}const ii={title:"daisyUI 2023 Wrapped",desc:"It's the end of the year and this year was amazing! For Front-end development, For CSS, For Tailwind and for daisyUI! Let's take a look at what we've accomplished in 2023.",published:!0,date:"2023-12-20T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"/images/blog/daisyui-is-the-best-component-library.png",tags:["daisyUI"]};function yi(ue,d,b){return ue.$$set=h=>{b(0,d=lt(lt({},d),Xt(h)))},d=Xt(d),[d]}class Hi extends ni{constructor(d){super(),si(this,d,yi,bi,ai,{})}}export{Hi as component};
