(this.webpackJsonpspotit=this.webpackJsonpspotit||[]).push([[0],{109:function(e,t,n){},12:function(e,t,n){e.exports={AlbumCard:"AlbumCard_AlbumCard___MstQ",albumGrid:"AlbumCard_albumGrid__1Mgxn",imgContainer:"AlbumCard_imgContainer__1duqt",preview:"AlbumCard_preview__3O7T0",main:"AlbumCard_main__34eND",name:"AlbumCard_name__2lo9n",artists:"AlbumCard_artists__3D034"}},19:function(e,t,n){e.exports={ArtistCard:"ArtistCard_ArtistCard__ZCdVO",imgContainer:"ArtistCard_imgContainer__Kd-f2",main:"ArtistCard_main__1RTcx",name:"ArtistCard_name__3X3IS",rating:"ArtistCard_rating__2E4FB"}},245:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(37),s=n.n(a),i=n(18),o=n(100),u=n(4),l="SET_ACCESS_TOKEN",j="REMOVE_ACCESS_TOKEN",b="SET_ARTISTS",d="REMOVE_ARTISTS",f="SET_LAST_SEARCH",m="SET_CURRENT_ARTIST",h="REMOVE_CURRENT_ARTIST",g="SET_ALBUMS",O="REMOVE_ALBUMS",x="SET_NEXT_ARTISTS_URL",p="SET_NEXT_ALBUMS_URL",_=n(63),v=function(e,t){return Object(_.a)(Object(_.a)({},e),t)},S=function(e){var t=""+e,n=(t.length-1)/3;if(n>=1){var r=Math.floor(n),c="KMGT"[r-1],a=3*(n-r);return t.slice(0,a+1)+"."+t.slice(a+2,a+3)+c}return e},A={accessToken:!!localStorage.getItem("accessToken"),artists:null,lastSearch:"",currentArtist:null,albums:null,nextArtistsUrl:null,nextAlbumsUrl:null},T=function(e,t){return localStorage.setItem("accessToken",t.accessToken),localStorage.setItem("expiresAt",t.expiresAt),v(e,{accessToken:!0})},C=function(e,t){return localStorage.removeItem("accessToken"),localStorage.removeItem("expiresAt"),v(e,{accessToken:!1,timer:null})},N=function(e,t){return v(e,{artists:t.artists})},y=function(e,t){return v(e,{artists:null})},k=function(e,t){return v(e,{lastSearch:t.lastSearch})},E=function(e,t){return v(e,{currentArtist:t.currentArtist})},w=function(e,t){return v(e,{currentArtist:null})},L=function(e,t){return v(e,{albums:t.albums})},R=function(e,t){return v(e,{albums:null})},U=function(e,t){return v(e,{nextArtistsUrl:t.nextArtistsUrl})},I=function(e,t){return v(e,{nextAlbumsUrl:t.nextAlbumsUrl})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return T(e,t);case j:return C(e);case b:return N(e,t);case d:return y(e);case f:return k(e,t);case m:return E(e,t);case h:return w(e);case g:return L(e,t);case O:return R(e);case x:return U(e,t);case p:return I(e,t);default:return e}},P=(n(109),n(9)),M=n(3),H=n(26),F=n.n(H),z="https://accounts.spotify.com/authorize?client_id=6499b09693a64a09ae4d961182500473&redirect_uri=".concat("https://joehachem3.github.io/spotit","/%23/&response_type=token&state=123"),D=function(e){return F.a.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}})},V=n.p+"static/media/spotifyLogo.bc1a3e4c.svg",G=n(96),K=n.n(G),Q=n(1),X=function(e){return Object(Q.jsxs)("a",{href:e.href,className:K.a.SpotifyLogin,children:[Object(Q.jsx)("span",{children:"Login with Spotify"}),Object(Q.jsx)("img",{src:V,alt:"Spotify logo"})]})},q=n(57),W=n.n(q),Y=function(){return Object(Q.jsxs)("section",{className:W.a.LoginPage,children:[Object(Q.jsxs)("h1",{className:W.a.welcome,children:[Object(Q.jsx)("span",{children:"Welcome to Spotit,"})," Get started here"]}),Object(Q.jsx)(X,{href:z})]})},J=n(22),Z=n(246),$=n.p+"static/media/search.f8c9c140.svg",ee=n(97),te=n.n(ee),ne=function(e){var t=Object(r.useRef)(),n=Object(u.c)((function(e){return e.lastSearch})),c=Object(r.useState)(e.lastSearch),a=Object(P.a)(c,2),s=a[0],i=a[1],o=function(n){if(n.preventDefault(),t.current){var r=t.current.value.trim();r&&e.search(r)}};return Object(Q.jsxs)("form",{onSubmit:o,className:te.a.SearchBar,children:[Object(Q.jsx)("input",{ref:t,id:"searchInput",type:"text",value:s,placeholder:"Search for an artist...",onChange:function(r){i(r.target.value);var c=r.target.value.trim();setTimeout((function(){if(t.current){var r=t.current.value.trim();r!==n&&c===r&&e.search(c)}}),500)}}),Object(Q.jsx)("img",{src:$,alt:"",onClick:o})]})},re=n(98),ce=n.n(re),ae={transitionDuration:0},se=function(e){return Object(Q.jsx)(ce.a,{options:ae,children:e.children})},ie=n(19),oe=n.n(ie),ue=function(e){for(var t=Math.floor(e.rating),n=[],r=1;r<=5;r++)if(r<t)n.push(Object(Q.jsx)("div",{style:{background:"var(--color-bright-green)"}},r));else if(r<e.rating){var c=100*(e.rating-t);n.push(Object(Q.jsx)("div",{style:{background:"linear-gradient(90deg, var(--color-bright-green) ".concat(c,"%, var(--color-gray) ").concat(100-c,"%)")}},r))}else n.push(Object(Q.jsx)("div",{style:{background:"var(--color-gray)"}},r));return Object(Q.jsxs)("div",{className:oe.a.ArtistCard,onClick:e.redirect,children:[Object(Q.jsx)("div",{className:oe.a.imgContainer,children:Object(Q.jsx)("img",{src:e.image,alt:e.name})}),Object(Q.jsxs)("div",{className:oe.a.main,children:[Object(Q.jsx)("h5",{className:oe.a.name,children:e.name}),Object(Q.jsxs)("p",{className:oe.a.followers,children:[e.followers," followers"]}),Object(Q.jsx)("div",{className:oe.a.rating,children:n})]})]})},le=n(58),je=n.n(le),be=function(e){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)("img",{src:V,alt:"",className:[je.a.Spinner,je.a[e.className]].join(" ")})})},de=n(99),fe=n.n(de),me=function(e){var t=e.children;return e.error&&(t=Object(Q.jsxs)("div",{className:fe.a.ErrorHandler,children:[Object(Q.jsx)("h1",{children:e.error.message}),Object(Q.jsx)("p",{children:"Oops... Something went wrong, try again later!"})]})),t},he=function(){return{type:j}},ge=function(e){return{type:m,currentArtist:e}},Oe=n.p+"static/media/defaultArtist.b95d14e9.png",xe=n(27),pe=n.n(xe),_e=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),c=Object(P.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(null),o=Object(P.a)(i,2),l=o[0],j=o[1],m=Object(r.useState)(!1),g=Object(P.a)(m,2),p=g[0],_=g[1],v=Object(u.c)((function(e){return e.artists})),A=Object(u.c)((function(e){return e.lastSearch})),T=Object(u.c)((function(e){return e.currentArtist})),C=Object(u.c)((function(e){return e.albums})),N=Object(u.c)((function(e){return e.nextArtistsUrl})),y=Object(u.b)(),k=Object(r.useCallback)((function(e){return y(function(e){return{type:b,artists:e}}(e))}),[y]),E=function(){return y({type:d})},w=function(e){return y(function(e){return{type:f,lastSearch:e}}(e))},L=Object(r.useCallback)((function(){return y({type:h,currentArtist:null})}),[y]),R=Object(r.useCallback)((function(){return y({type:O,albums:null})}),[y]),U=Object(r.useCallback)((function(e){return y(function(e){return{type:x,nextArtistsUrl:e}}(e))}),[y]);Object(r.useEffect)((function(){if(!l){C&&R(),T&&L();var e=function(){t.current&&(t.current.getBoundingClientRect().top<=window.innerHeight+100&&(p||(_(!0),N&&D(N).then((function(e){console.log(e),U(e.data.artists.next),k([].concat(Object(J.a)(v),Object(J.a)(e.data.artists.items))),_(!1)})).catch((function(e){s(!1),j(e),console.log(e)})))))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}}),[p,v,T,C,N,l,U,k,L,R]);var I=function(t){!function(e){y(ge(e))}({id:t.id,name:t.name}),e.history.push("/artists/".concat(t.id,"/albums"))},B=null===v||void 0===v?void 0:v.map((function(e){var t;return Object(Q.jsx)(ue,{redirect:function(){return I(e)},image:(null===(t=e.images[1])||void 0===t?void 0:t.url)||Oe,name:e.name,followers:S(e.followers.total),rating:e.popularity/20},Object(Z.a)())})),M=Object(Q.jsx)(se,{children:B}),H=a?Object(Q.jsx)(be,{className:"fixed"}):M,z=p?N?Object(Q.jsx)(be,{}):Object(Q.jsx)("h3",{children:"You've Reached the End"}):null;return Object(Q.jsxs)("section",{className:pe.a.ArtistsPage,children:[Object(Q.jsx)("div",{className:pe.a.searchBox,children:Object(Q.jsx)(ne,{search:function(e){if(l&&j(null),!e)return E(),void w(e);s(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=e?"q=".concat(e):"",a=t.length?"type=".concat(t.join(",")):"",s=n?"limit=".concat(n):"",i=r?"offset=".concat(r):"";return F.a.get("https://api.spotify.com/v1/search?".concat(c,"&").concat(a,"&").concat(s,"&").concat(i),{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}})}(e,["artist"],20).then((function(t){console.log(t),k(t.data.artists.items),w(e),s(!1),U(t.data.artists.next)})).catch((function(e){s(!1),j(e),console.log(e)}))},lastSearch:A})}),Object(Q.jsxs)(me,{error:l,children:[Object(Q.jsx)("p",{className:pe.a.searchText,children:B?B.length?"Showing results for '".concat(A,"'"):"No Results Found for '".concat(A,"'"):"Type anything in the search box to get started!"}),H]}),Object(Q.jsx)("footer",{className:pe.a.footer,ref:t,children:z})]})},ve=n(12),Se=n.n(ve),Ae=function(e){return Object(Q.jsxs)("div",{className:Se.a.AlbumCard,children:[Object(Q.jsxs)("div",{className:Se.a.albumGrid,children:[Object(Q.jsx)("div",{className:Se.a.imgContainer,children:Object(Q.jsx)("img",{src:e.image,alt:e.name})}),Object(Q.jsx)("a",{className:Se.a.preview,href:e.preview,children:Object(Q.jsx)("span",{children:"Preview on Spotify"})})]}),Object(Q.jsxs)("div",{className:Se.a.main,children:[Object(Q.jsx)("h5",{className:Se.a.name,children:e.name}),Object(Q.jsx)("p",{className:Se.a.artists,children:e.artists.join(" ")}),Object(Q.jsx)("p",{className:Se.a.date,children:e.date}),Object(Q.jsxs)("p",{className:Se.a.tracks,children:[e.tracks," tracks"]})]})]})},Te=n.p+"static/media/defaultAlbum.7d7102cb.png",Ce=n(40),Ne=n.n(Ce),ye=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),c=Object(P.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(null),o=Object(P.a)(i,2),l=o[0],j=o[1],b=Object(r.useState)(!1),d=Object(P.a)(b,2),f=d[0],m=d[1],h=Object(u.c)((function(e){return e.currentArtist})),O=Object(u.c)((function(e){return e.albums})),x=Object(u.c)((function(e){return e.nextAlbumsUrl})),_=Object(u.b)(),v=Object(r.useCallback)((function(e){return _(ge(e))}),[_]),S=Object(r.useCallback)((function(e){return _(function(e){return{type:g,albums:e}}(e))}),[_]),A=Object(r.useCallback)((function(e){return _(function(e){return{type:p,nextAlbumsUrl:e}}(e))}),[_]);Object(r.useEffect)((function(){if(!l){var n;h||(s(!0),(n=e.match.params.id,F.a.get("https://api.spotify.com/v1/artists/".concat(n),{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}})).then((function(e){console.log(e),v({id:e.data.id,name:e.data.name}),s(!1)})).catch((function(e){s(!1),j(e),console.log(e)}))),O||(s(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=t.length?"include_groups=".concat(t.join(",")):"",a=n?"limit=".concat(n):"",s=r?"offset=".concat(r):"";return F.a.get("https://api.spotify.com/v1/artists/".concat(e,"/albums?").concat(c,"&").concat(a,"&").concat(s),{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}})}(e.match.params.id,[],20).then((function(e){console.log(e),e.data.items.forEach((function(e){return e.artists=e.artists.map((function(e){return e.name}))})),S(e.data.items),A(e.data.next),s(!1)})).catch((function(e){s(!1),j(e),console.log(e)})));var r=function(){t.current&&(t.current.getBoundingClientRect().top<=window.innerHeight+100&&(f||(m(!0),x&&D(x).then((function(e){console.log(e),e.data.items.forEach((function(e){return e.artists=e.artists.map((function(e){return e.name}))})),S([].concat(Object(J.a)(O),Object(J.a)(e.data.items))),A(e.data.next),m(!1)})).catch((function(e){s(!1),m(!1),j(e),console.log(e)})))))};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}}),[e,f,h,O,x,l,A,v,S]);var T,C=null===O||void 0===O?void 0:O.map((function(e){var t;return Object(Q.jsx)(Ae,{image:(null===(t=e.images[1])||void 0===t?void 0:t.url)||Te,name:e.name,artists:e.artists,tracks:e.total_tracks,date:e.release_date,preview:e.external_urls.spotify},Object(Z.a)())}));C&&(T=C.length?Object(Q.jsx)(se,{children:C}):Object(Q.jsx)("h1",{children:"No Albums yet"}));var N=a?Object(Q.jsx)(be,{}):T,y=f?x?Object(Q.jsx)(be,{}):Object(Q.jsx)("h3",{children:"You've Reached the End"}):null;return Object(Q.jsxs)("section",{className:Ne.a.AlbumsPage,children:[Object(Q.jsxs)(me,{error:l,children:[Object(Q.jsxs)("div",{className:Ne.a.intro,children:[Object(Q.jsx)("h1",{children:null===h||void 0===h?void 0:h.name}),Object(Q.jsx)("span",{children:"Albums"})]}),N]}),Object(Q.jsx)("footer",{className:Ne.a.footer,ref:t,children:y})]})},ke=n(59),Ee=n.n(ke),we=function(e){var t=Object(u.b)();return Object(Q.jsx)(i.b,{to:"/",className:[Ee.a.Logout,Ee.a[e.className]].join(" "),onClick:function(){return t(he())},children:"Logout"})},Le=n(62),Re=n.n(Le),Ue=function(e){return Object(Q.jsxs)("nav",{className:Re.a.Header,children:[Object(Q.jsxs)(i.b,{to:"/",className:Re.a.Logo,children:[Object(Q.jsx)("img",{src:V,alt:""}),Object(Q.jsx)("h1",{children:"Spotit"})]}),e.accessToken?Object(Q.jsx)(we,{className:"header"}):null]})},Ie=Object(M.h)((function(){var e=Object(r.useState)(null),t=Object(P.a)(e,2),n=t[0],c=t[1],a=Object(u.c)((function(e){return e.accessToken})),s=Object(u.b)(),i=Object(r.useCallback)((function(e,t){return s(function(e,t){return{type:l,accessToken:e,expiresAt:t}}(e,t))}),[s]),o=Object(r.useCallback)((function(){return s(he())}),[s]),j=Object(M.g)().pathname;return Object(r.useEffect)((function(){if(a){var e=localStorage.getItem("expiresAt"),t=(new Date).getTime();setTimeout((function(){o()}),e-t)}else{var n=new URLSearchParams(j.replace("/","?")),r=n.get("access_token");if(r){var s=(new Date).getTime(),u=1e3*parseInt(n.get("expires_in"));i(r,s+u)}c(Object(Q.jsx)(M.a,{to:"/"}))}}),[a,j,i,o]),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Ue,{accessToken:a}),Object(Q.jsxs)(M.d,{children:[Object(Q.jsx)(M.b,{exact:!0,path:"/",component:a?_e:Y}),Object(Q.jsx)(M.b,{exact:!0,path:"/artists/:id/albums",component:ye}),Object(Q.jsx)(M.b,{path:"/",render:function(){return Object(Q.jsx)(M.a,{to:"/"})}})]}),n]})})),Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},Pe=Object(o.a)(B);s.a.render(Object(Q.jsx)(c.a.StrictMode,{children:Object(Q.jsx)(u.a,{store:Pe,children:Object(Q.jsx)(i.a,{basename:"/",children:Object(Q.jsx)(Ie,{})})})}),document.getElementById("root")),Be()},27:function(e,t,n){e.exports={footer:"ArtistsPage_footer__1yNVf",searchBox:"ArtistsPage_searchBox__32FPd",searchText:"ArtistsPage_searchText__1WZaa"}},40:function(e,t,n){e.exports={footer:"AlbumsPage_footer__251fr",intro:"AlbumsPage_intro__36c6W"}},57:function(e,t,n){e.exports={LoginPage:"LoginPage_LoginPage__2jbru",welcome:"LoginPage_welcome__1pizM"}},58:function(e,t,n){e.exports={Spinner:"Spinner_Spinner__1Hsyz",loading:"Spinner_loading__kqbuU",fixed:"Spinner_fixed__2U3x0"}},59:function(e,t,n){e.exports={Logout:"Logout_Logout__M7RYp",header:"Logout_header__1zRfy"}},62:function(e,t,n){e.exports={Header:"Header_Header__MTfQT",Logo:"Header_Logo__1S6Qb"}},96:function(e,t,n){e.exports={SpotifyLogin:"SpotifyLogin_SpotifyLogin__NuURX"}},97:function(e,t,n){e.exports={SearchBar:"SearchBar_SearchBar__8Soa7"}},99:function(e,t,n){e.exports={ErrorHandler:"ErrorHandler_ErrorHandler__2Qku1"}}},[[245,1,2]]]);
//# sourceMappingURL=main.c11c12bc.chunk.js.map