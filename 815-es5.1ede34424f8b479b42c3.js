!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(self.webpackChunkwikikode=self.webpackChunkwikikode||[]).push([[815],{7717:function(n,r,i){"use strict";i.r(r),i.d(r,{ArticleModule:function(){return h}});var o,a=i(7353),c=i(3019),s=i(639),u=i(6661),f=["articleContainer"],l=function(){var n=function(){function n(e,r,i){t(this,n),this.activatedRoute=e,this.resolver=r,this.articleService=i}var r,i,o;return r=n,(i=[{key:"ngAfterViewInit",value:function(){if(this.entry){var t=this.articleService.getArticleFromID(this.activatedRoute.snapshot.params.id);void 0===t&&(t=c.V),this.entry.clear();var e=this.resolver.resolveComponentFactory(t);this.entry.createComponent(e)}}}])&&e(r.prototype,i),o&&e(r,o),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(a.gz),s.Y36(s._Vd),s.Y36(u.n))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-article"]],viewQuery:function(t,e){var n;(1&t&&s.Gf(f,5,s.s_b),2&t)&&(s.iGM(n=s.CRH())&&(e.entry=n.first))},decls:2,vars:0,consts:[["articleContainer",""]],template:function(t,e){1&t&&s._UZ(0,"template",null,0)},styles:[""]}),n}(),p=[{path:":id",component:l},{path:"",component:c.V}],v=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),e}(),h=((o=function e(){t(this,e)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.oAB({type:o,bootstrap:[l]}),o.\u0275inj=s.cJS({providers:[],imports:[[v]]}),o)}}])}();