goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73953 = arguments.length;
var i__4737__auto___73954 = (0);
while(true){
if((i__4737__auto___73954 < len__4736__auto___73953)){
args__4742__auto__.push((arguments[i__4737__auto___73954]));

var G__73955 = (i__4737__auto___73954 + (1));
i__4737__auto___73954 = G__73955;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq73710){
var G__73711 = cljs.core.first(seq73710);
var seq73710__$1 = cljs.core.next(seq73710);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73711,seq73710__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__73723 = cljs.core.seq(sources);
var chunk__73724 = null;
var count__73725 = (0);
var i__73726 = (0);
while(true){
if((i__73726 < count__73725)){
var map__73743 = chunk__73724.cljs$core$IIndexed$_nth$arity$2(null,i__73726);
var map__73743__$1 = (((((!((map__73743 == null))))?(((((map__73743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73743):map__73743);
var src = map__73743__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73745){var e_73956 = e73745;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73956);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73956.message)].join('')));
}

var G__73960 = seq__73723;
var G__73961 = chunk__73724;
var G__73962 = count__73725;
var G__73963 = (i__73726 + (1));
seq__73723 = G__73960;
chunk__73724 = G__73961;
count__73725 = G__73962;
i__73726 = G__73963;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73723);
if(temp__5735__auto__){
var seq__73723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73723__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73723__$1);
var G__73964 = cljs.core.chunk_rest(seq__73723__$1);
var G__73965 = c__4556__auto__;
var G__73966 = cljs.core.count(c__4556__auto__);
var G__73967 = (0);
seq__73723 = G__73964;
chunk__73724 = G__73965;
count__73725 = G__73966;
i__73726 = G__73967;
continue;
} else {
var map__73746 = cljs.core.first(seq__73723__$1);
var map__73746__$1 = (((((!((map__73746 == null))))?(((((map__73746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73746):map__73746);
var src = map__73746__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73746__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73746__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73746__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73746__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73748){var e_73970 = e73748;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73970);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73970.message)].join('')));
}

var G__73971 = cljs.core.next(seq__73723__$1);
var G__73972 = null;
var G__73973 = (0);
var G__73974 = (0);
seq__73723 = G__73971;
chunk__73724 = G__73972;
count__73725 = G__73973;
i__73726 = G__73974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__73749 = cljs.core.seq(js_requires);
var chunk__73750 = null;
var count__73751 = (0);
var i__73752 = (0);
while(true){
if((i__73752 < count__73751)){
var js_ns = chunk__73750.cljs$core$IIndexed$_nth$arity$2(null,i__73752);
var require_str_73977 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73977);


var G__73978 = seq__73749;
var G__73979 = chunk__73750;
var G__73980 = count__73751;
var G__73981 = (i__73752 + (1));
seq__73749 = G__73978;
chunk__73750 = G__73979;
count__73751 = G__73980;
i__73752 = G__73981;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73749);
if(temp__5735__auto__){
var seq__73749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73749__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73749__$1);
var G__73982 = cljs.core.chunk_rest(seq__73749__$1);
var G__73983 = c__4556__auto__;
var G__73984 = cljs.core.count(c__4556__auto__);
var G__73985 = (0);
seq__73749 = G__73982;
chunk__73750 = G__73983;
count__73751 = G__73984;
i__73752 = G__73985;
continue;
} else {
var js_ns = cljs.core.first(seq__73749__$1);
var require_str_73986 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73986);


var G__73987 = cljs.core.next(seq__73749__$1);
var G__73988 = null;
var G__73989 = (0);
var G__73990 = (0);
seq__73749 = G__73987;
chunk__73750 = G__73988;
count__73751 = G__73989;
i__73752 = G__73990;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__73754){
var map__73755 = p__73754;
var map__73755__$1 = (((((!((map__73755 == null))))?(((((map__73755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73755):map__73755);
var msg = map__73755__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73755__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73755__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73759(s__73760){
return (new cljs.core.LazySeq(null,(function (){
var s__73760__$1 = s__73760;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73760__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__73767 = cljs.core.first(xs__6292__auto__);
var map__73767__$1 = (((((!((map__73767 == null))))?(((((map__73767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73767):map__73767);
var src = map__73767__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73767__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73767__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__73760__$1,map__73767,map__73767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73755,map__73755__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73759_$_iter__73761(s__73762){
return (new cljs.core.LazySeq(null,((function (s__73760__$1,map__73767,map__73767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73755,map__73755__$1,msg,info,reload_info){
return (function (){
var s__73762__$1 = s__73762;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__73762__$1);
if(temp__5735__auto____$1){
var s__73762__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73762__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73762__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73764 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73763 = (0);
while(true){
if((i__73763 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__73763);
cljs.core.chunk_append(b__73764,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__73993 = (i__73763 + (1));
i__73763 = G__73993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73764),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73759_$_iter__73761(cljs.core.chunk_rest(s__73762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73764),null);
}
} else {
var warning = cljs.core.first(s__73762__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73759_$_iter__73761(cljs.core.rest(s__73762__$2)));
}
} else {
return null;
}
break;
}
});})(s__73760__$1,map__73767,map__73767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73755,map__73755__$1,msg,info,reload_info))
,null,null));
});})(s__73760__$1,map__73767,map__73767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73755,map__73755__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73759(cljs.core.rest(s__73760__$1)));
} else {
var G__73994 = cljs.core.rest(s__73760__$1);
s__73760__$1 = G__73994;
continue;
}
} else {
var G__73995 = cljs.core.rest(s__73760__$1);
s__73760__$1 = G__73995;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__73777_73996 = cljs.core.seq(warnings);
var chunk__73778_73997 = null;
var count__73779_73998 = (0);
var i__73780_73999 = (0);
while(true){
if((i__73780_73999 < count__73779_73998)){
var map__73786_74000 = chunk__73778_73997.cljs$core$IIndexed$_nth$arity$2(null,i__73780_73999);
var map__73786_74001__$1 = (((((!((map__73786_74000 == null))))?(((((map__73786_74000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73786_74000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73786_74000):map__73786_74000);
var w_74002 = map__73786_74001__$1;
var msg_74003__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786_74001__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_74004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786_74001__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_74005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786_74001__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_74006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786_74001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_74006)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_74004),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_74005),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_74003__$1)].join(''));


var G__74008 = seq__73777_73996;
var G__74009 = chunk__73778_73997;
var G__74010 = count__73779_73998;
var G__74011 = (i__73780_73999 + (1));
seq__73777_73996 = G__74008;
chunk__73778_73997 = G__74009;
count__73779_73998 = G__74010;
i__73780_73999 = G__74011;
continue;
} else {
var temp__5735__auto___74012 = cljs.core.seq(seq__73777_73996);
if(temp__5735__auto___74012){
var seq__73777_74013__$1 = temp__5735__auto___74012;
if(cljs.core.chunked_seq_QMARK_(seq__73777_74013__$1)){
var c__4556__auto___74014 = cljs.core.chunk_first(seq__73777_74013__$1);
var G__74015 = cljs.core.chunk_rest(seq__73777_74013__$1);
var G__74016 = c__4556__auto___74014;
var G__74017 = cljs.core.count(c__4556__auto___74014);
var G__74018 = (0);
seq__73777_73996 = G__74015;
chunk__73778_73997 = G__74016;
count__73779_73998 = G__74017;
i__73780_73999 = G__74018;
continue;
} else {
var map__73794_74019 = cljs.core.first(seq__73777_74013__$1);
var map__73794_74020__$1 = (((((!((map__73794_74019 == null))))?(((((map__73794_74019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73794_74019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73794_74019):map__73794_74019);
var w_74021 = map__73794_74020__$1;
var msg_74022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73794_74020__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_74023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73794_74020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_74024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73794_74020__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_74025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73794_74020__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_74025)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_74023),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_74024),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_74022__$1)].join(''));


var G__74027 = cljs.core.next(seq__73777_74013__$1);
var G__74028 = null;
var G__74029 = (0);
var G__74030 = (0);
seq__73777_73996 = G__74027;
chunk__73778_73997 = G__74028;
count__73779_73998 = G__74029;
i__73780_73999 = G__74030;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__73753_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__73753_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__73806){
var map__73807 = p__73806;
var map__73807__$1 = (((((!((map__73807 == null))))?(((((map__73807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73807):map__73807);
var msg = map__73807__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73807__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__73809 = cljs.core.seq(updates);
var chunk__73811 = null;
var count__73812 = (0);
var i__73813 = (0);
while(true){
if((i__73813 < count__73812)){
var path = chunk__73811.cljs$core$IIndexed$_nth$arity$2(null,i__73813);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73875_74036 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73879_74037 = null;
var count__73880_74038 = (0);
var i__73881_74039 = (0);
while(true){
if((i__73881_74039 < count__73880_74038)){
var node_74040 = chunk__73879_74037.cljs$core$IIndexed$_nth$arity$2(null,i__73881_74039);
if(cljs.core.not(node_74040.shadow$old)){
var path_match_74042 = shadow.cljs.devtools.client.browser.match_paths(node_74040.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74042)){
var new_link_74043 = (function (){var G__73887 = node_74040.cloneNode(true);
G__73887.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74042),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73887;
})();
(node_74040.shadow$old = true);

(new_link_74043.onload = ((function (seq__73875_74036,chunk__73879_74037,count__73880_74038,i__73881_74039,seq__73809,chunk__73811,count__73812,i__73813,new_link_74043,path_match_74042,node_74040,path,map__73807,map__73807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74040);
});})(seq__73875_74036,chunk__73879_74037,count__73880_74038,i__73881_74039,seq__73809,chunk__73811,count__73812,i__73813,new_link_74043,path_match_74042,node_74040,path,map__73807,map__73807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74042], 0));

goog.dom.insertSiblingAfter(new_link_74043,node_74040);


var G__74044 = seq__73875_74036;
var G__74045 = chunk__73879_74037;
var G__74046 = count__73880_74038;
var G__74047 = (i__73881_74039 + (1));
seq__73875_74036 = G__74044;
chunk__73879_74037 = G__74045;
count__73880_74038 = G__74046;
i__73881_74039 = G__74047;
continue;
} else {
var G__74048 = seq__73875_74036;
var G__74049 = chunk__73879_74037;
var G__74050 = count__73880_74038;
var G__74051 = (i__73881_74039 + (1));
seq__73875_74036 = G__74048;
chunk__73879_74037 = G__74049;
count__73880_74038 = G__74050;
i__73881_74039 = G__74051;
continue;
}
} else {
var G__74052 = seq__73875_74036;
var G__74053 = chunk__73879_74037;
var G__74054 = count__73880_74038;
var G__74055 = (i__73881_74039 + (1));
seq__73875_74036 = G__74052;
chunk__73879_74037 = G__74053;
count__73880_74038 = G__74054;
i__73881_74039 = G__74055;
continue;
}
} else {
var temp__5735__auto___74056 = cljs.core.seq(seq__73875_74036);
if(temp__5735__auto___74056){
var seq__73875_74057__$1 = temp__5735__auto___74056;
if(cljs.core.chunked_seq_QMARK_(seq__73875_74057__$1)){
var c__4556__auto___74058 = cljs.core.chunk_first(seq__73875_74057__$1);
var G__74059 = cljs.core.chunk_rest(seq__73875_74057__$1);
var G__74060 = c__4556__auto___74058;
var G__74061 = cljs.core.count(c__4556__auto___74058);
var G__74062 = (0);
seq__73875_74036 = G__74059;
chunk__73879_74037 = G__74060;
count__73880_74038 = G__74061;
i__73881_74039 = G__74062;
continue;
} else {
var node_74063 = cljs.core.first(seq__73875_74057__$1);
if(cljs.core.not(node_74063.shadow$old)){
var path_match_74064 = shadow.cljs.devtools.client.browser.match_paths(node_74063.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74064)){
var new_link_74065 = (function (){var G__73888 = node_74063.cloneNode(true);
G__73888.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74064),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73888;
})();
(node_74063.shadow$old = true);

(new_link_74065.onload = ((function (seq__73875_74036,chunk__73879_74037,count__73880_74038,i__73881_74039,seq__73809,chunk__73811,count__73812,i__73813,new_link_74065,path_match_74064,node_74063,seq__73875_74057__$1,temp__5735__auto___74056,path,map__73807,map__73807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74063);
});})(seq__73875_74036,chunk__73879_74037,count__73880_74038,i__73881_74039,seq__73809,chunk__73811,count__73812,i__73813,new_link_74065,path_match_74064,node_74063,seq__73875_74057__$1,temp__5735__auto___74056,path,map__73807,map__73807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74064], 0));

goog.dom.insertSiblingAfter(new_link_74065,node_74063);


var G__74066 = cljs.core.next(seq__73875_74057__$1);
var G__74067 = null;
var G__74068 = (0);
var G__74069 = (0);
seq__73875_74036 = G__74066;
chunk__73879_74037 = G__74067;
count__73880_74038 = G__74068;
i__73881_74039 = G__74069;
continue;
} else {
var G__74070 = cljs.core.next(seq__73875_74057__$1);
var G__74071 = null;
var G__74072 = (0);
var G__74073 = (0);
seq__73875_74036 = G__74070;
chunk__73879_74037 = G__74071;
count__73880_74038 = G__74072;
i__73881_74039 = G__74073;
continue;
}
} else {
var G__74074 = cljs.core.next(seq__73875_74057__$1);
var G__74075 = null;
var G__74076 = (0);
var G__74077 = (0);
seq__73875_74036 = G__74074;
chunk__73879_74037 = G__74075;
count__73880_74038 = G__74076;
i__73881_74039 = G__74077;
continue;
}
}
} else {
}
}
break;
}


var G__74079 = seq__73809;
var G__74080 = chunk__73811;
var G__74081 = count__73812;
var G__74082 = (i__73813 + (1));
seq__73809 = G__74079;
chunk__73811 = G__74080;
count__73812 = G__74081;
i__73813 = G__74082;
continue;
} else {
var G__74083 = seq__73809;
var G__74084 = chunk__73811;
var G__74085 = count__73812;
var G__74086 = (i__73813 + (1));
seq__73809 = G__74083;
chunk__73811 = G__74084;
count__73812 = G__74085;
i__73813 = G__74086;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73809);
if(temp__5735__auto__){
var seq__73809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73809__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73809__$1);
var G__74088 = cljs.core.chunk_rest(seq__73809__$1);
var G__74089 = c__4556__auto__;
var G__74090 = cljs.core.count(c__4556__auto__);
var G__74091 = (0);
seq__73809 = G__74088;
chunk__73811 = G__74089;
count__73812 = G__74090;
i__73813 = G__74091;
continue;
} else {
var path = cljs.core.first(seq__73809__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73891_74092 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73895_74093 = null;
var count__73896_74094 = (0);
var i__73897_74095 = (0);
while(true){
if((i__73897_74095 < count__73896_74094)){
var node_74096 = chunk__73895_74093.cljs$core$IIndexed$_nth$arity$2(null,i__73897_74095);
if(cljs.core.not(node_74096.shadow$old)){
var path_match_74097 = shadow.cljs.devtools.client.browser.match_paths(node_74096.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74097)){
var new_link_74098 = (function (){var G__73903 = node_74096.cloneNode(true);
G__73903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74097),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73903;
})();
(node_74096.shadow$old = true);

(new_link_74098.onload = ((function (seq__73891_74092,chunk__73895_74093,count__73896_74094,i__73897_74095,seq__73809,chunk__73811,count__73812,i__73813,new_link_74098,path_match_74097,node_74096,path,seq__73809__$1,temp__5735__auto__,map__73807,map__73807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74096);
});})(seq__73891_74092,chunk__73895_74093,count__73896_74094,i__73897_74095,seq__73809,chunk__73811,count__73812,i__73813,new_link_74098,path_match_74097,node_74096,path,seq__73809__$1,temp__5735__auto__,map__73807,map__73807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74097], 0));

goog.dom.insertSiblingAfter(new_link_74098,node_74096);


var G__74099 = seq__73891_74092;
var G__74100 = chunk__73895_74093;
var G__74101 = count__73896_74094;
var G__74102 = (i__73897_74095 + (1));
seq__73891_74092 = G__74099;
chunk__73895_74093 = G__74100;
count__73896_74094 = G__74101;
i__73897_74095 = G__74102;
continue;
} else {
var G__74103 = seq__73891_74092;
var G__74104 = chunk__73895_74093;
var G__74105 = count__73896_74094;
var G__74106 = (i__73897_74095 + (1));
seq__73891_74092 = G__74103;
chunk__73895_74093 = G__74104;
count__73896_74094 = G__74105;
i__73897_74095 = G__74106;
continue;
}
} else {
var G__74107 = seq__73891_74092;
var G__74108 = chunk__73895_74093;
var G__74109 = count__73896_74094;
var G__74110 = (i__73897_74095 + (1));
seq__73891_74092 = G__74107;
chunk__73895_74093 = G__74108;
count__73896_74094 = G__74109;
i__73897_74095 = G__74110;
continue;
}
} else {
var temp__5735__auto___74111__$1 = cljs.core.seq(seq__73891_74092);
if(temp__5735__auto___74111__$1){
var seq__73891_74112__$1 = temp__5735__auto___74111__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73891_74112__$1)){
var c__4556__auto___74113 = cljs.core.chunk_first(seq__73891_74112__$1);
var G__74114 = cljs.core.chunk_rest(seq__73891_74112__$1);
var G__74115 = c__4556__auto___74113;
var G__74116 = cljs.core.count(c__4556__auto___74113);
var G__74117 = (0);
seq__73891_74092 = G__74114;
chunk__73895_74093 = G__74115;
count__73896_74094 = G__74116;
i__73897_74095 = G__74117;
continue;
} else {
var node_74118 = cljs.core.first(seq__73891_74112__$1);
if(cljs.core.not(node_74118.shadow$old)){
var path_match_74119 = shadow.cljs.devtools.client.browser.match_paths(node_74118.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74119)){
var new_link_74120 = (function (){var G__73904 = node_74118.cloneNode(true);
G__73904.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74119),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73904;
})();
(node_74118.shadow$old = true);

(new_link_74120.onload = ((function (seq__73891_74092,chunk__73895_74093,count__73896_74094,i__73897_74095,seq__73809,chunk__73811,count__73812,i__73813,new_link_74120,path_match_74119,node_74118,seq__73891_74112__$1,temp__5735__auto___74111__$1,path,seq__73809__$1,temp__5735__auto__,map__73807,map__73807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74118);
});})(seq__73891_74092,chunk__73895_74093,count__73896_74094,i__73897_74095,seq__73809,chunk__73811,count__73812,i__73813,new_link_74120,path_match_74119,node_74118,seq__73891_74112__$1,temp__5735__auto___74111__$1,path,seq__73809__$1,temp__5735__auto__,map__73807,map__73807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74119], 0));

goog.dom.insertSiblingAfter(new_link_74120,node_74118);


var G__74121 = cljs.core.next(seq__73891_74112__$1);
var G__74122 = null;
var G__74123 = (0);
var G__74124 = (0);
seq__73891_74092 = G__74121;
chunk__73895_74093 = G__74122;
count__73896_74094 = G__74123;
i__73897_74095 = G__74124;
continue;
} else {
var G__74125 = cljs.core.next(seq__73891_74112__$1);
var G__74126 = null;
var G__74127 = (0);
var G__74128 = (0);
seq__73891_74092 = G__74125;
chunk__73895_74093 = G__74126;
count__73896_74094 = G__74127;
i__73897_74095 = G__74128;
continue;
}
} else {
var G__74129 = cljs.core.next(seq__73891_74112__$1);
var G__74130 = null;
var G__74131 = (0);
var G__74132 = (0);
seq__73891_74092 = G__74129;
chunk__73895_74093 = G__74130;
count__73896_74094 = G__74131;
i__73897_74095 = G__74132;
continue;
}
}
} else {
}
}
break;
}


var G__74133 = cljs.core.next(seq__73809__$1);
var G__74134 = null;
var G__74135 = (0);
var G__74136 = (0);
seq__73809 = G__74133;
chunk__73811 = G__74134;
count__73812 = G__74135;
i__73813 = G__74136;
continue;
} else {
var G__74137 = cljs.core.next(seq__73809__$1);
var G__74138 = null;
var G__74139 = (0);
var G__74140 = (0);
seq__73809 = G__74137;
chunk__73811 = G__74138;
count__73812 = G__74139;
i__73813 = G__74140;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__73909){
var map__73910 = p__73909;
var map__73910__$1 = (((((!((map__73910 == null))))?(((((map__73910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73910):map__73910);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73910__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__73914){
var map__73915 = p__73914;
var map__73915__$1 = (((((!((map__73915 == null))))?(((((map__73915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73915):map__73915);
var _ = map__73915__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73915__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__73917,done,error){
var map__73918 = p__73917;
var map__73918__$1 = (((((!((map__73918 == null))))?(((((map__73918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73918):map__73918);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73918__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__73920,done,error){
var map__73921 = p__73920;
var map__73921__$1 = (((((!((map__73921 == null))))?(((((map__73921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73921):map__73921);
var msg = map__73921__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73921__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73921__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73921__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73923){
var map__73924 = p__73923;
var map__73924__$1 = (((((!((map__73924 == null))))?(((((map__73924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73924):map__73924);
var src = map__73924__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73924__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__73926 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__73926) : done.call(null,G__73926));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__73927){
var map__73928 = p__73927;
var map__73928__$1 = (((((!((map__73928 == null))))?(((((map__73928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73928):map__73928);
var msg__$1 = map__73928__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73928__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e73933){var ex = e73933;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__73935){
var map__73936 = p__73935;
var map__73936__$1 = (((((!((map__73936 == null))))?(((((map__73936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73936):map__73936);
var env = map__73936__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73936__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__73941){
var map__73942 = p__73941;
var map__73942__$1 = (((((!((map__73942 == null))))?(((((map__73942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73942):map__73942);
var msg = map__73942__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73942__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__73947){
var map__73948 = p__73947;
var map__73948__$1 = (((((!((map__73948 == null))))?(((((map__73948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73948):map__73948);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73948__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73948__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__73950){
var map__73951 = p__73950;
var map__73951__$1 = (((((!((map__73951 == null))))?(((((map__73951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73951):map__73951);
var svc = map__73951__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73951__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
