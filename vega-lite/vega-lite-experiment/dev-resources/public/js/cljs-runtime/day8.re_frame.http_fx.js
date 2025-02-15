goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__76066){
var vec__76067 = p__76066;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76067,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76067,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__76074){
var map__76076 = p__76074;
var map__76076__$1 = (((((!((map__76076 == null))))?(((((map__76076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76076):map__76076);
var request = map__76076__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76076__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76076__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__76071_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__76071_SHARP_));
}),(function (p1__76072_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__76072_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5733__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var on_request = temp__5733__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__76080 = cljs.core.seq(seq_request_maps);
var chunk__76081 = null;
var count__76082 = (0);
var i__76083 = (0);
while(true){
if((i__76083 < count__76082)){
var request__$1 = chunk__76081.cljs$core$IIndexed$_nth$arity$2(null,i__76083);
var xhrio_76116 = (function (){var G__76086 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__76086) : ajax.core.ajax_request.call(null,G__76086));
})();
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_76116);


var G__76117 = seq__76080;
var G__76118 = chunk__76081;
var G__76119 = count__76082;
var G__76120 = (i__76083 + (1));
seq__76080 = G__76117;
chunk__76081 = G__76118;
count__76082 = G__76119;
i__76083 = G__76120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__76080);
if(temp__5735__auto__){
var seq__76080__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76080__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76080__$1);
var G__76121 = cljs.core.chunk_rest(seq__76080__$1);
var G__76122 = c__4556__auto__;
var G__76123 = cljs.core.count(c__4556__auto__);
var G__76124 = (0);
seq__76080 = G__76121;
chunk__76081 = G__76122;
count__76082 = G__76123;
i__76083 = G__76124;
continue;
} else {
var request__$1 = cljs.core.first(seq__76080__$1);
var xhrio_76129 = (function (){var G__76087 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__76087) : ajax.core.ajax_request.call(null,G__76087));
})();
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_76129);


var G__76131 = cljs.core.next(seq__76080__$1);
var G__76132 = null;
var G__76133 = (0);
var G__76134 = (0);
seq__76080 = G__76131;
chunk__76081 = G__76132;
count__76082 = G__76133;
i__76083 = G__76134;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
