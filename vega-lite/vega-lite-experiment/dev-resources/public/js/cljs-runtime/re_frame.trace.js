goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__74898){
var map__74899 = p__74898;
var map__74899__$1 = (((((!((map__74899 == null))))?(((((map__74899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74899):map__74899);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74899__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74899__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74899__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74899__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__74903_74932 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__74904_74933 = null;
var count__74905_74934 = (0);
var i__74906_74935 = (0);
while(true){
if((i__74906_74935 < count__74905_74934)){
var vec__74918_74936 = chunk__74904_74933.cljs$core$IIndexed$_nth$arity$2(null,i__74906_74935);
var k_74937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74918_74936,(0),null);
var cb_74938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74918_74936,(1),null);
try{var G__74922_74939 = cljs.core.deref(re_frame.trace.traces);
(cb_74938.cljs$core$IFn$_invoke$arity$1 ? cb_74938.cljs$core$IFn$_invoke$arity$1(G__74922_74939) : cb_74938.call(null,G__74922_74939));
}catch (e74921){var e_74940 = e74921;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_74937,"while storing",cljs.core.deref(re_frame.trace.traces),e_74940], 0));
}

var G__74941 = seq__74903_74932;
var G__74942 = chunk__74904_74933;
var G__74943 = count__74905_74934;
var G__74944 = (i__74906_74935 + (1));
seq__74903_74932 = G__74941;
chunk__74904_74933 = G__74942;
count__74905_74934 = G__74943;
i__74906_74935 = G__74944;
continue;
} else {
var temp__5735__auto___74945 = cljs.core.seq(seq__74903_74932);
if(temp__5735__auto___74945){
var seq__74903_74946__$1 = temp__5735__auto___74945;
if(cljs.core.chunked_seq_QMARK_(seq__74903_74946__$1)){
var c__4556__auto___74947 = cljs.core.chunk_first(seq__74903_74946__$1);
var G__74948 = cljs.core.chunk_rest(seq__74903_74946__$1);
var G__74949 = c__4556__auto___74947;
var G__74950 = cljs.core.count(c__4556__auto___74947);
var G__74951 = (0);
seq__74903_74932 = G__74948;
chunk__74904_74933 = G__74949;
count__74905_74934 = G__74950;
i__74906_74935 = G__74951;
continue;
} else {
var vec__74923_74952 = cljs.core.first(seq__74903_74946__$1);
var k_74953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74923_74952,(0),null);
var cb_74954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74923_74952,(1),null);
try{var G__74927_74955 = cljs.core.deref(re_frame.trace.traces);
(cb_74954.cljs$core$IFn$_invoke$arity$1 ? cb_74954.cljs$core$IFn$_invoke$arity$1(G__74927_74955) : cb_74954.call(null,G__74927_74955));
}catch (e74926){var e_74956 = e74926;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_74953,"while storing",cljs.core.deref(re_frame.trace.traces),e_74956], 0));
}

var G__74957 = cljs.core.next(seq__74903_74946__$1);
var G__74958 = null;
var G__74959 = (0);
var G__74960 = (0);
seq__74903_74932 = G__74957;
chunk__74904_74933 = G__74958;
count__74905_74934 = G__74959;
i__74906_74935 = G__74960;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
