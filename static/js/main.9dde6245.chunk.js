(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),o=a.n(l),s=(a(14),a(4)),c=a(5),r=a(7),h=a(6),d=a(8),m=a(1),u=(a(16),"8K43T8LNtSz5xtNVpR73qg9YnKESx1UH");function p(e){var t=e.images.map(function(t,a){return i.a.createElement("img",{id:a,onClick:e.imageClick,key:a,src:t})});return i.a.createElement("div",null,i.a.createElement("h1",null," Gifs..."),t)}function f(e){return i.a.createElement("form",{onSubmit:e.handleFormSubmit},i.a.createElement("input",{type:"text",onChange:e.handleSearchInput,value:e.searchInput,className:"Search-field",placeholder:"Search term & hit enter!"}))}function g(e){return i.a.createElement("div",{className:"Modal"},i.a.createElement("img",{src:e.url}),i.a.createElement("hr",null),i.a.createElement("a",{href:e.giphyURl},i.a.createElement("button",null,i.a.createElement("i",{className:"fa fa-eye"})," View on Giphy")),i.a.createElement("button",{onClick:e.handleClose},i.a.createElement("i",{className:"fa fa-window-close"})," Close"))}var S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={isImagesLoaded:!1,images:[],error:null,isModalShown:!1,modalURL:"",searchInput:"",modalGiphyURL:""},a.handleImageClick=a.handleImageClick.bind(Object(m.a)(Object(m.a)(a))),a.handleBodyClick=a.handleBodyClick.bind(Object(m.a)(Object(m.a)(a))),a.handleModalClose=a.handleModalClose.bind(Object(m.a)(Object(m.a)(a))),a.handleSearchInput=a.handleSearchInput.bind(Object(m.a)(Object(m.a)(a))),a.handleFormSubmit=a.handleFormSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"callApi",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){t.setState({isLoaded:!0,images:e.data})},function(e){t.setState({isLoaded:!0,error:e})})}},{key:"componentDidMount",value:function(){this.callApi("https://api.giphy.com/v1/gifs/trending?api_key=8K43T8LNtSz5xtNVpR73qg9YnKESx1UH")}},{key:"handleModalClose",value:function(){this.setState({isModalShown:!1})}},{key:"handleImageClick",value:function(e){this.setState({isModalShown:!0}),this.setState({modalURL:this.state.images[e.target.id].images.original.url,modalGiphyURL:this.state.images[e.target.id].url})}},{key:"handleSearchInput",value:function(e){this.setState({searchInput:e.target.value})}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var t="https://api.giphy.com/v1/gifs/search?api_key="+u+"&q="+this.state.searchInput;this.callApi(t),console.log("clicked")}},{key:"handleBodyClick",value:function(){this.state.isModalShown&&this.setState({isModalShown:!1})}},{key:"render",value:function(){var e=this.state.images.map(function(e){return e.images.fixed_width.url});return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-header"},i.a.createElement("div",{onClick:this.handleBodyClick,className:this.state.isModalShown?"Content":""},i.a.createElement("h1",null,"GiphyApp"),i.a.createElement(f,{searchInput:this.state.searchInput,handleSearchInput:this.handleSearchInput,handleFormSubmit:this.handleFormSubmit}),i.a.createElement(p,{images:e,imageClick:this.handleImageClick})),this.state.isModalShown&&i.a.createElement(g,{url:this.state.modalURL,handleClose:this.handleModalClose,giphyURl:this.state.modalGiphyURL}),i.a.createElement("div",{className:this.state.isModalShown?"Content":""},i.a.createElement("p",{class:"footer"},"Made by Masroor Aijaz for learning ReactJS!"),i.a.createElement("p",{class:"small"},"Uses ",i.a.createElement("a",{href:"https://developers.giphy.com/"},"GiphyAPI")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.9dde6245.chunk.js.map