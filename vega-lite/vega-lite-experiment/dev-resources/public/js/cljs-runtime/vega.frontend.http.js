goog.provide('vega.frontend.http');
vega.frontend.http.http = (function vega$frontend$http$http(method,db,uri,data,on_success,on_failure){
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2("http, uri",uri);

var xhrio = (function (){var G__80800 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null);
if(cljs.core.truth_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80800,new cljs.core.Keyword(null,"params","params",710516235),data);
} else {
return G__80800;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),xhrio,new cljs.core.Keyword(null,"db","db",993250759),db], null);
});
vega.frontend.http.http_post = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(vega.frontend.http.http,new cljs.core.Keyword(null,"post","post",269697687));
vega.frontend.http.http_get = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(vega.frontend.http.http,new cljs.core.Keyword(null,"get","get",1683182755));

//# sourceMappingURL=vega.frontend.http.js.map
