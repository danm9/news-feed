(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(7),i=n.n(r),o=(n(13),n(2)),l=n(3),u=n(5),d=n(4),j=(n(14),function(e){var t=e.item;return Object(c.jsx)("div",{className:"col s4",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-image",children:[Object(c.jsx)("img",{src:t.urlToImage,alt:t.title}),Object(c.jsx)("span",{className:"card-title",children:t.source.name})]}),Object(c.jsx)("div",{className:"card-content",children:Object(c.jsx)("p",{children:t.title})}),Object(c.jsx)("div",{className:"card-action",children:Object(c.jsx)("a",{href:t.url,target:"_blank",children:"Full article"})})]})})}),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={news:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/".concat(this.props.news.type,"?").concat(this.props.news.query,"&apiKey=258d0dcae7d14d18baae22d847567ee2");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({news:t.articles})})).catch((function(e){return console.log(e)}))}},{key:"renderItems",value:function(){return this.state.news.map((function(e){return Object(c.jsx)(j,{item:e},e.url)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"row",children:this.renderItems()})}}]),n}(s.Component),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={news1:{type:"top-headlines",query:"country=us&category=business"},news2:{type:"top-headlines",query:"sources=techcrunch"}},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{className:"App-title",children:"My feed"})}),Object(c.jsx)(h,{news:this.state.news1}),Object(c.jsx)(h,{news:this.state.news2})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.3ef4102d.chunk.js.map