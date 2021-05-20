(this.webpackJsonpspotit=this.webpackJsonpspotit||[]).push([[0],{109:function(t,e,n){},12:function(t,e,n){t.exports={AlbumCard:"AlbumCard_AlbumCard___MstQ",albumGrid:"AlbumCard_albumGrid__1Mgxn",imgContainer:"AlbumCard_imgContainer__1duqt",preview:"AlbumCard_preview__3O7T0",main:"AlbumCard_main__34eND",name:"AlbumCard_name__2lo9n",artists:"AlbumCard_artists__3D034"}},18:function(t,e,n){t.exports={ArtistCard:"ArtistCard_ArtistCard__ZCdVO",imgContainer:"ArtistCard_imgContainer__Kd-f2",main:"ArtistCard_main__1RTcx",name:"ArtistCard_name__3X3IS",rating:"ArtistCard_rating__2E4FB"}},245:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(37),s=n.n(c),i=n(23),o=n(100),u=n(4),l="SET_ACCESS_TOKEN",j="REMOVE_ACCESS_TOKEN",b="SET_ARTISTS",d="REMOVE_ARTISTS",f="SET_LAST_SEARCH",m="SET_CURRENT_ARTIST",h="REMOVE_CURRENT_ARTIST",O="SET_ALBUMS",g="REMOVE_ALBUMS",x="SET_NEXT_ARTISTS_URL",p="SET_NEXT_ALBUMS_URL",_=n(63),v=function(t,e){return Object(_.a)(Object(_.a)({},t),e)},S=function(t){var e=""+t,n=(e.length-1)/3;if(n>=1){var r=Math.floor(n),a="KMGT"[r-1],c=3*(n-r);return e.slice(0,c+1)+"."+e.slice(c+2,c+3)+a}return t},A={accessToken:!!localStorage.getItem("accessToken"),artists:null,lastSearch:"",currentArtist:null,albums:null,nextArtistsUrl:null,nextAlbumsUrl:null},T=function(t,e){return localStorage.setItem("accessToken",btoa(e.accessToken)),localStorage.setItem("expiresAt",e.expiresAt),v(t,{accessToken:!0})},C=function(t,e){return localStorage.removeItem("accessToken"),localStorage.removeItem("expiresAt"),v(t,{accessToken:!1,artists:null,lastSearch:"",currentArtist:null,albums:null,nextArtistsUrl:null,nextAlbumsUrl:null})},N=function(t,e){return v(t,{artists:e.artists})},y=function(t,e){return v(t,{artists:null})},k=function(t,e){return v(t,{lastSearch:e.lastSearch})},E=function(t,e){return v(t,{currentArtist:e.currentArtist})},w=function(t,e){return v(t,{currentArtist:null})},L=function(t,e){return v(t,{albums:e.albums})},R=function(t,e){return v(t,{albums:null})},U=function(t,e){return v(t,{nextArtistsUrl:e.nextArtistsUrl})},I=function(t,e){return v(t,{nextAlbumsUrl:e.nextAlbumsUrl})},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return T(t,e);case j:return C(t);case b:return N(t,e);case d:return y(t);case f:return k(t,e);case m:return E(t,e);case h:return w(t);case O:return L(t,e);case g:return R(t);case x:return U(t,e);case p:return I(t,e);default:return t}},P=(n(109),n(3)),M=n(26),H=n.n(M),F="https://accounts.spotify.com/authorize?client_id=6499b09693a64a09ae4d961182500473&redirect_uri=".concat("https://joehachem3.github.io/spotit","/%23/&response_type=token&state=123"),z=function(t){return H.a.get(t,{headers:{Authorization:"Bearer "+atob(localStorage.getItem("accessToken"))}})},D=n.p+"static/media/spotifyLogo.bc1a3e4c.svg",V=n(96),G=n.n(V),K=n(1),Q=function(t){return Object(K.jsxs)("a",{href:t.href,className:G.a.SpotifyLogin,children:[Object(K.jsx)("span",{children:"Login with Spotify"}),Object(K.jsx)("img",{src:D,alt:"Spotify logo"})]})},X=n(57),q=n.n(X),W=function(){return Object(K.jsxs)("section",{className:q.a.LoginPage,children:[Object(K.jsxs)("h1",{className:q.a.welcome,children:[Object(K.jsx)("span",{children:"Welcome to Spotit,"})," Get started here"]}),Object(K.jsx)(Q,{href:F})]})},Y=n(21),J=n(11),Z=n(246),$=n.p+"static/media/search.f8c9c140.svg",tt=n(97),et=n.n(tt),nt=function(t){var e=Object(r.useRef)(),n=Object(u.c)((function(t){return t.lastSearch})),a=Object(r.useState)(t.lastSearch),c=Object(J.a)(a,2),s=c[0],i=c[1],o=function(n){if(n.preventDefault(),e.current){var r=e.current.value.trim();r&&t.search(r)}};return Object(K.jsxs)("form",{onSubmit:o,className:et.a.SearchBar,children:[Object(K.jsx)("input",{ref:e,id:"searchInput",type:"text",value:s,placeholder:"Search for an artist...",onChange:function(r){i(r.target.value);var a=r.target.value.trim();setTimeout((function(){if(e.current){var r=e.current.value.trim();r!==n&&a===r&&t.search(a)}}),500)}}),Object(K.jsx)("img",{src:$,alt:"",onClick:o})]})},rt=n(98),at=n.n(rt),ct={transitionDuration:0},st=function(t){return Object(K.jsx)(at.a,{options:ct,children:t.children})},it=n(18),ot=n.n(it),ut=function(t){for(var e=Math.floor(t.rating),n=[],r=1;r<=5;r++)if(r<e)n.push(Object(K.jsx)("div",{style:{background:"var(--color-bright-green)"}},r));else if(r<t.rating){var a=100*(t.rating-e);n.push(Object(K.jsx)("div",{style:{background:"linear-gradient(90deg, var(--color-bright-green) ".concat(a,"%, var(--color-gray) ").concat(100-a,"%)")}},r))}else n.push(Object(K.jsx)("div",{style:{background:"var(--color-gray)"}},r));return Object(K.jsxs)("div",{className:ot.a.ArtistCard,onClick:t.redirect,children:[Object(K.jsx)("div",{className:ot.a.imgContainer,children:Object(K.jsx)("img",{src:t.image,alt:t.name})}),Object(K.jsxs)("div",{className:ot.a.main,children:[Object(K.jsx)("h5",{className:ot.a.name,children:t.name}),Object(K.jsxs)("p",{className:ot.a.followers,children:[t.followers," followers"]}),Object(K.jsx)("div",{className:ot.a.rating,children:n})]})]})},lt=n(58),jt=n.n(lt),bt=function(t){return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("img",{src:D,alt:"",className:[jt.a.Spinner,jt.a[t.className]].join(" ")})})},dt=n(99),ft=n.n(dt),mt=function(t){var e=t.children;return t.error&&(e=Object(K.jsxs)("div",{className:ft.a.ErrorHandler,children:[Object(K.jsx)("h1",{children:t.error.message}),Object(K.jsx)("p",{children:"Oops... Something went wrong, try again later!"})]})),e},ht=function(){return{type:j}},Ot=function(t){return{type:m,currentArtist:t}},gt=n.p+"static/media/defaultArtist.b95d14e9.png",xt=n(27),pt=n.n(xt),_t=function(t){var e=Object(r.useRef)(),n=Object(r.useState)(!1),a=Object(J.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(null),o=Object(J.a)(i,2),l=o[0],j=o[1],m=Object(r.useState)(!1),O=Object(J.a)(m,2),p=O[0],_=O[1],v=Object(u.c)((function(t){return t.artists})),A=Object(u.c)((function(t){return t.lastSearch})),T=Object(u.c)((function(t){return t.currentArtist})),C=Object(u.c)((function(t){return t.albums})),N=Object(u.c)((function(t){return t.nextArtistsUrl})),y=Object(u.b)(),k=Object(r.useCallback)((function(t){return y(function(t){return{type:b,artists:t}}(t))}),[y]),E=function(){return y({type:d})},w=function(t){return y(function(t){return{type:f,lastSearch:t}}(t))},L=Object(r.useCallback)((function(){return y({type:h,currentArtist:null})}),[y]),R=Object(r.useCallback)((function(){return y({type:g,albums:null})}),[y]),U=Object(r.useCallback)((function(t){return y(function(t){return{type:x,nextArtistsUrl:t}}(t))}),[y]);Object(r.useEffect)((function(){if(!l){C&&R(),T&&L();var t=function(){e.current&&(e.current.getBoundingClientRect().top<=window.innerHeight+100&&(p||(_(!0),N&&z(N).then((function(t){U(t.data.artists.next),k([].concat(Object(Y.a)(v),Object(Y.a)(t.data.artists.items))),_(!1)})).catch((function(t){s(!1),j(t)})))))};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}}),[p,v,T,C,N,l,U,k,L,R]);var I=function(e){!function(t){y(Ot(t))}({id:e.id,name:e.name}),t.history.push("/artists/".concat(e.id,"/albums"))},B=null===v||void 0===v?void 0:v.map((function(t){var e;return Object(K.jsx)(ut,{redirect:function(){return I(t)},image:(null===(e=t.images[1])||void 0===e?void 0:e.url)||gt,name:t.name,followers:S(t.followers.total),rating:t.popularity/20},Object(Z.a)())})),P=Object(K.jsx)(st,{children:B}),M=c?Object(K.jsx)(bt,{className:"fixed"}):P,F=p?N?Object(K.jsx)(bt,{}):Object(K.jsx)("h3",{children:"You've Reached the End"}):null;return Object(K.jsxs)("section",{className:pt.a.ArtistsPage,children:[Object(K.jsx)("div",{className:pt.a.searchBox,children:Object(K.jsx)(nt,{search:function(t){if(l&&j(null),!t)return E(),void w(t);s(!0),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=t?"q=".concat(t):"",c=e.length?"type=".concat(e.join(",")):"",s=n?"limit=".concat(n):"",i=r?"offset=".concat(r):"";return H.a.get("https://api.spotify.com/v1/search?".concat(a,"&").concat(c,"&").concat(s,"&").concat(i),{headers:{Authorization:"Bearer "+atob(localStorage.getItem("accessToken"))}})}(t,["artist"],20).then((function(e){k(e.data.artists.items),w(t),s(!1),U(e.data.artists.next)})).catch((function(t){s(!1),j(t)}))},lastSearch:A})}),Object(K.jsxs)(mt,{error:l,children:[Object(K.jsx)("p",{className:pt.a.searchText,children:B?B.length?"Showing results for '".concat(A,"'"):"No Results Found for '".concat(A,"'"):"Type anything in the search box to get started!"}),M]}),Object(K.jsx)("footer",{className:pt.a.footer,ref:e,children:F})]})},vt=n(12),St=n.n(vt),At=function(t){return Object(K.jsxs)("div",{className:St.a.AlbumCard,children:[Object(K.jsxs)("div",{className:St.a.albumGrid,children:[Object(K.jsx)("div",{className:St.a.imgContainer,children:Object(K.jsx)("img",{src:t.image,alt:t.name})}),Object(K.jsx)("a",{className:St.a.preview,href:t.preview,children:Object(K.jsx)("span",{children:"Preview on Spotify"})})]}),Object(K.jsxs)("div",{className:St.a.main,children:[Object(K.jsx)("h5",{className:St.a.name,children:t.name}),Object(K.jsx)("p",{className:St.a.artists,children:t.artists.join(" ")}),Object(K.jsx)("p",{className:St.a.date,children:t.date}),Object(K.jsxs)("p",{className:St.a.tracks,children:[t.tracks," tracks"]})]})]})},Tt=n.p+"static/media/defaultAlbum.7d7102cb.png",Ct=n(40),Nt=n.n(Ct),yt=function(t){var e=Object(r.useRef)(),n=Object(r.useState)(!1),a=Object(J.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(null),o=Object(J.a)(i,2),l=o[0],j=o[1],b=Object(r.useState)(!1),d=Object(J.a)(b,2),f=d[0],m=d[1],h=Object(u.c)((function(t){return t.currentArtist})),g=Object(u.c)((function(t){return t.albums})),x=Object(u.c)((function(t){return t.nextAlbumsUrl})),_=Object(u.b)(),v=Object(r.useCallback)((function(t){return _(Ot(t))}),[_]),S=Object(r.useCallback)((function(t){return _(function(t){return{type:O,albums:t}}(t))}),[_]),A=Object(r.useCallback)((function(t){return _(function(t){return{type:p,nextAlbumsUrl:t}}(t))}),[_]);Object(r.useEffect)((function(){if(!l){var n;h||(s(!0),(n=t.match.params.id,H.a.get("https://api.spotify.com/v1/artists/".concat(n),{headers:{Authorization:"Bearer "+atob(localStorage.getItem("accessToken"))}})).then((function(t){v({id:t.data.id,name:t.data.name}),s(!1)})).catch((function(t){s(!1),j(t)}))),g||(s(!0),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=e.length?"include_groups=".concat(e.join(",")):"",c=n?"limit=".concat(n):"",s=r?"offset=".concat(r):"";return H.a.get("https://api.spotify.com/v1/artists/".concat(t,"/albums?").concat(a,"&").concat(c,"&").concat(s),{headers:{Authorization:"Bearer "+atob(localStorage.getItem("accessToken"))}})}(t.match.params.id,[],20).then((function(t){t.data.items.forEach((function(t){return t.artists=t.artists.map((function(t){return t.name}))})),S(t.data.items),A(t.data.next),s(!1)})).catch((function(t){s(!1),j(t)})));var r=function(){e.current&&(e.current.getBoundingClientRect().top<=window.innerHeight+100&&(f||(m(!0),x&&z(x).then((function(t){t.data.items.forEach((function(t){return t.artists=t.artists.map((function(t){return t.name}))})),S([].concat(Object(Y.a)(g),Object(Y.a)(t.data.items))),A(t.data.next),m(!1)})).catch((function(t){s(!1),m(!1),j(t)})))))};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}}),[t,f,h,g,x,l,A,v,S]);var T,C=null===g||void 0===g?void 0:g.map((function(t){var e;return Object(K.jsx)(At,{image:(null===(e=t.images[1])||void 0===e?void 0:e.url)||Tt,name:t.name,artists:t.artists,tracks:t.total_tracks,date:t.release_date,preview:t.external_urls.spotify},Object(Z.a)())}));C&&(T=C.length?Object(K.jsx)(st,{children:C}):Object(K.jsx)("h1",{children:"No Albums yet"}));var N=c?Object(K.jsx)(bt,{className:"fixed"}):T,y=f?x?Object(K.jsx)(bt,{}):Object(K.jsx)("h3",{children:"You've Reached the End"}):null;return Object(K.jsxs)("section",{className:Nt.a.AlbumsPage,children:[Object(K.jsxs)(mt,{error:l,children:[Object(K.jsxs)("div",{className:Nt.a.intro,children:[Object(K.jsx)("h1",{children:null===h||void 0===h?void 0:h.name}),Object(K.jsx)("span",{children:"Albums"})]}),N]}),Object(K.jsx)("footer",{className:Nt.a.footer,ref:e,children:y})]})},kt=n(59),Et=n.n(kt),wt=function(t){var e=Object(u.b)();return Object(K.jsx)("button",{className:[Et.a.Logout,Et.a[t.className]].join(" "),onClick:function(){return e(ht())},children:"Logout"})},Lt=n(60),Rt=n.n(Lt),Ut=function(t){return Object(K.jsxs)("nav",{className:Rt.a.Header,children:[Object(K.jsxs)(i.b,{to:"/",className:Rt.a.Logo,children:[Object(K.jsx)("img",{src:D,alt:""}),Object(K.jsx)("h1",{children:"Spotit"})]}),t.accessToken?Object(K.jsx)(wt,{className:"header"}):null]})},It=Object(P.h)((function(){var t=Object(u.c)((function(t){return t.accessToken})),e=Object(u.b)(),n=Object(r.useCallback)((function(t,n){return e(function(t,e){return{type:l,accessToken:t,expiresAt:e}}(t,n))}),[e]),a=Object(r.useCallback)((function(){return e(ht())}),[e]),c=Object(P.g)().pathname;return Object(r.useEffect)((function(){if(t){var e=localStorage.getItem("expiresAt"),r=(new Date).getTime();setTimeout((function(){a()}),e-r)}else{var s=new URLSearchParams(c.replace("/","?")),i=s.get("access_token");if(i){var o=(new Date).getTime(),u=1e3*parseInt(s.get("expires_in"));n(i,o+u)}}}),[t,c,n,a]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Ut,{accessToken:t}),Object(K.jsxs)(P.d,{children:[Object(K.jsx)(P.b,{exact:!0,path:"/",component:t?_t:W}),Object(K.jsx)(P.b,{exact:!0,path:"/artists/:id/albums",component:yt}),Object(K.jsx)(P.b,{path:"/",render:function(){return Object(K.jsx)(P.a,{to:"/"})}})]}),t?null:Object(K.jsx)(P.a,{to:"/"})]})})),Bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))},Pt=Object(o.a)(B);s.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(u.a,{store:Pt,children:Object(K.jsx)(i.a,{basename:"/",children:Object(K.jsx)(It,{})})})}),document.getElementById("root")),Bt()},27:function(t,e,n){t.exports={footer:"ArtistsPage_footer__1yNVf",searchBox:"ArtistsPage_searchBox__32FPd",searchText:"ArtistsPage_searchText__1WZaa"}},40:function(t,e,n){t.exports={footer:"AlbumsPage_footer__251fr",intro:"AlbumsPage_intro__36c6W"}},57:function(t,e,n){t.exports={LoginPage:"LoginPage_LoginPage__2jbru",welcome:"LoginPage_welcome__1pizM"}},58:function(t,e,n){t.exports={Spinner:"Spinner_Spinner__1Hsyz",loading:"Spinner_loading__kqbuU",fixed:"Spinner_fixed__2U3x0"}},59:function(t,e,n){t.exports={Logout:"Logout_Logout__M7RYp",header:"Logout_header__1zRfy"}},60:function(t,e,n){t.exports={Header:"Header_Header__MTfQT",Logo:"Header_Logo__1S6Qb"}},96:function(t,e,n){t.exports={SpotifyLogin:"SpotifyLogin_SpotifyLogin__NuURX"}},97:function(t,e,n){t.exports={SearchBar:"SearchBar_SearchBar__8Soa7"}},99:function(t,e,n){t.exports={ErrorHandler:"ErrorHandler_ErrorHandler__2Qku1"}}},[[245,1,2]]]);
//# sourceMappingURL=main.74cb20bc.chunk.js.map