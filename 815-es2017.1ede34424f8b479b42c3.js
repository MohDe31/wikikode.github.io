(self.webpackChunkwikikode=self.webpackChunkwikikode||[]).push([[815],{7717:function(t,e,r){"use strict";r.r(e),r.d(e,{ArticleModule:function(){return p}});var n=r(7353),i=r(3019),o=r(639),s=r(6661);const c=["articleContainer"];let a=(()=>{class t{constructor(t,e,r){this.activatedRoute=t,this.resolver=e,this.articleService=r}ngAfterViewInit(){if(!this.entry)return;let t=this.articleService.getArticleFromID(this.activatedRoute.snapshot.params.id);void 0===t&&(t=i.V),this.entry.clear();const e=this.resolver.resolveComponentFactory(t);this.entry.createComponent(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(n.gz),o.Y36(o._Vd),o.Y36(s.n))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-article"]],viewQuery:function(t,e){if(1&t&&o.Gf(c,5,o.s_b),2&t){let t;o.iGM(t=o.CRH())&&(e.entry=t.first)}},decls:2,vars:0,consts:[["articleContainer",""]],template:function(t,e){1&t&&o._UZ(0,"template",null,0)},styles:[""]}),t})();const l=[{path:":id",component:a},{path:"",component:i.V}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[n.Bz.forChild(l)],n.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t,bootstrap:[a]}),t.\u0275inj=o.cJS({providers:[],imports:[[u]]}),t})()}}]);