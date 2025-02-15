goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__72615,p__72616){
var map__72617 = p__72615;
var map__72617__$1 = (((((!((map__72617 == null))))?(((((map__72617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72617):map__72617);
var svc = map__72617__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72617__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72617__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72617__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__72618 = p__72616;
var map__72618__$1 = (((((!((map__72618 == null))))?(((((map__72618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72618):map__72618);
var msg = map__72618__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72618__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72618__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72618__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72618__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__72630,p__72631){
var map__72632 = p__72630;
var map__72632__$1 = (((((!((map__72632 == null))))?(((((map__72632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72632):map__72632);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72632__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__72633 = p__72631;
var map__72633__$1 = (((((!((map__72633 == null))))?(((((map__72633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72633):map__72633);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72633__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__72648,p__72649){
var map__72650 = p__72648;
var map__72650__$1 = (((((!((map__72650 == null))))?(((((map__72650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72650):map__72650);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72650__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72650__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__72651 = p__72649;
var map__72651__$1 = (((((!((map__72651 == null))))?(((((map__72651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72651):map__72651);
var msg = map__72651__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72651__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__72659,tid){
var map__72660 = p__72659;
var map__72660__$1 = (((((!((map__72660 == null))))?(((((map__72660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72660):map__72660);
var svc = map__72660__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72660__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__72680 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__72681 = null;
var count__72682 = (0);
var i__72683 = (0);
while(true){
if((i__72683 < count__72682)){
var vec__72697 = chunk__72681.cljs$core$IIndexed$_nth$arity$2(null,i__72683);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72697,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72697,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__72839 = seq__72680;
var G__72840 = chunk__72681;
var G__72841 = count__72682;
var G__72842 = (i__72683 + (1));
seq__72680 = G__72839;
chunk__72681 = G__72840;
count__72682 = G__72841;
i__72683 = G__72842;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72680);
if(temp__5735__auto__){
var seq__72680__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72680__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72680__$1);
var G__72844 = cljs.core.chunk_rest(seq__72680__$1);
var G__72845 = c__4556__auto__;
var G__72846 = cljs.core.count(c__4556__auto__);
var G__72847 = (0);
seq__72680 = G__72844;
chunk__72681 = G__72845;
count__72682 = G__72846;
i__72683 = G__72847;
continue;
} else {
var vec__72706 = cljs.core.first(seq__72680__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72706,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72706,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__72848 = cljs.core.next(seq__72680__$1);
var G__72849 = null;
var G__72850 = (0);
var G__72851 = (0);
seq__72680 = G__72848;
chunk__72681 = G__72849;
count__72682 = G__72850;
i__72683 = G__72851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__72675_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__72675_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__72676_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__72676_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__72677_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__72677_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__72678_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__72678_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__72711){
var map__72712 = p__72711;
var map__72712__$1 = (((((!((map__72712 == null))))?(((((map__72712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72712):map__72712);
var svc = map__72712__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72712__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72712__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
