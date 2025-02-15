goog.provide('sci.impl.resolve');
sci.impl.resolve.throw_error_with_location = (function sci$impl$resolve$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});
sci.impl.resolve.mark_resolve_sym = (function sci$impl$resolve$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260));
}));
});
sci.impl.resolve.check_permission_BANG_ = (function sci$impl$resolve$check_permission_BANG_(p__49574,check_sym,sym,v){
var map__49575 = p__49574;
var map__49575__$1 = (((((!((map__49575 == null))))?(((((map__49575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49575):map__49575);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49575__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49575__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
var or__4126__auto__ = (sci.impl.utils.allowed_loop === sym);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (sci.impl.utils.allowed_recur === sym);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
if((cljs.core.truth_(allow)?((((sci.impl.vars.var_QMARK_(v)) && (cljs.core.not(new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))))) || (cljs.core.contains_QMARK_(allow,check_sym__$1))):true)){
} else {
sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
}
});
sci.impl.resolve.lookup_STAR_ = (function sci$impl$resolve$lookup_STAR_(p__49668,sym,call_QMARK_){
var map__49669 = p__49668;
var map__49669__$1 = (((((!((map__49669 == null))))?(((((map__49669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49669):map__49669);
var ctx = map__49669__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var sym_ns = (function (){var G__49671 = cljs.core.namespace(sym);
if((G__49671 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__49671);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__49673 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__49673) : cnn.call(null,G__49673));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),sym_ns], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym_ns;
}
})():null);
var or__4126__auto__ = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = sym_ns__$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))));
} else {
return and__4115__auto__;
}
})())){
var or__4126__auto____$1 = (function (){var G__49706 = env__$1;
var G__49706__$1 = (((G__49706 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__49706));
var G__49706__$2 = (((G__49706__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__49706__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__49706__$2 == null)){
return null;
} else {
return cljs.core.find(G__49706__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym_name):null);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(sym_ns__$1)){
var or__4126__auto____$1 = (function (){var G__49709 = env__$1;
var G__49709__$1 = (((G__49709 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__49709));
var G__49709__$2 = (((G__49709__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__49709__$1) : sym_ns__$1.call(null,G__49709__$1)));
if((G__49709__$2 == null)){
return null;
} else {
return cljs.core.find(G__49709__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5735__auto__)){
var clazz = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"static-access","static-access",-1860919441)], null))], null);
} else {
return null;
}
}
} else {
var or__4126__auto____$1 = (function (){var kv = (function (){var G__49807 = env__$1;
var G__49807__$1 = (((G__49807 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__49807));
var G__49807__$2 = (((G__49807__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__49807__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__49807__$2 == null)){
return null;
} else {
return cljs.core.find(G__49807__$2,sym_name);
}
})();
if(cljs.core.truth_((function (){var G__49808 = the_current_ns;
var G__49808__$1 = (((G__49808 == null))?null:new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(G__49808));
var G__49808__$2 = (((G__49808__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__49808__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
var G__49808__$3 = (((G__49808__$2 == null))?null:new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(G__49808__$2));
if((G__49808__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__49808__$3,sym_name);
}
})())){
return null;
} else {
return kv;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = (function (){var temp__5735__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var temp__5735__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,x], null);
} else {
return null;
}
}
}
}

}
}
}
});
sci.impl.resolve.tag = (function sci$impl$resolve$tag(_ctx,expr){
var temp__5735__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
});
sci.impl.resolve.lookup = (function sci$impl$resolve$lookup(p__49810,sym,call_QMARK_){
var map__49811 = p__49810;
var map__49811__$1 = (((((!((map__49811 == null))))?(((((map__49811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49811):map__49811);
var ctx = map__49811__$1;
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var vec__49813 = (function (){var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__49819 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49819,(1),null);
var t = sci.impl.resolve.tag(ctx,v);
var v__$1 = sci.impl.resolve.mark_resolve_sym(k);
var v__$2 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v__$1,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):v__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$2], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = sci.impl.resolve.lookup_STAR_(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__49822 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49822,(1),null);
var kv = vec__49822;
sci.impl.resolve.check_permission_BANG_(ctx,k,sym,v);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(1),null);
var kv = vec__49813;
var temp__5733__auto__ = ((cljs.core.not(new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385).cljs$core$IFn$_invoke$arity$1(ctx)))?cljs.core.meta(k):false);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","deref!","sci.impl/deref!",599653178).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"deref!","deref!",153059469)], null))], null);
} else {
return kv;
}
} else {
return kv;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.lookup,sci.impl.resolve.lookup);
sci.impl.resolve.resolve_symbol = (function sci$impl$resolve$resolve_symbol(var_args){
var G__49861 = arguments.length;
switch (G__49861) {
case 2:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,sym,false);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
var sym__$1 = sym;
var res = cljs.core.second((function (){var or__4126__auto__ = sci.impl.resolve.lookup(ctx,sym__$1,call_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var n = cljs.core.name(sym__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null)], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null)], null);
} else {
if(clojure.string.starts_with_QMARK_(n,"'")){
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return sci.impl.resolve.throw_error_with_location(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),sym__$1);

}
}
}
}
})());
return res;
}));

(sci.impl.resolve.resolve_symbol.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.resolve.js.map
