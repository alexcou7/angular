(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{SDNf:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("67Y/"),o=e("CcnG"),i=e("t/Na"),c=function(){function t(t){this.httpClient=t,this.projects$=null,this.url="https://api-base.herokuapp.com/api/pub/projects"}return t.prototype.obtainAllProjects=function(){return this.obtainProjectsFromURL(),this.projects$},t.prototype.obtainOneProject=function(t){return this.obtainProjectsFromURL(),this.projects$.pipe(Object(r.a)(function(n){return n.filter(function(n){return n.id==t})}))},t.prototype.transformArray=function(t){return null!=t&&t.forEach(function(t){t.id=t._id,delete t._id}),t},t.prototype.addProject=function(t){this.httpClient.post(this.url,t).subscribe()},t.prototype.obtainProjectsFilteredByNameLike=function(t){return this.obtainProjectsFromURL(),null==t||""==t.trim()?this.projects$:this.projects$.pipe(Object(r.a)(function(n){return n.filter(function(n){return n.name.toUpperCase().includes(t.toUpperCase())})}))},t.prototype.obtainProjectsFromURL=function(){this.projects$=this.httpClient.get(this.url).pipe(Object(r.a)(this.transformArray))},t.ngInjectableDef=o.U({factory:function(){return new t(o.Y(i.c))},token:t,providedIn:"root"}),t}()},kw3f:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("uGyw"),o=e("CcnG"),i=function(){function t(t){this.store=t}return t.prototype.intercept=function(t,n){return this.store.dispatch("Fecha \xfaltima consulta al WebService: "+(new Date).toLocaleString()),n.handle(t)},t.ngInjectableDef=o.U({factory:function(){return new t(o.Y(r.a))},token:t,providedIn:"root"}),t}()}}]);