goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__52216 = xs;
args__$2 = G__52216;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__52218 = xs;
args__$2 = G__52218;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,let_val));
var bindings = ctx__$1.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,let_name,v);
var ctx__$2 = cljs.core._assoc(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__52221 = ctx__$2;
var G__52222 = rest_let_bindings;
ctx__$1 = G__52221;
let_bindings__$1 = G__52222;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__52223 = nexprs;
exprs__$1 = G__52223;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.eval_if = (function sci$impl$evaluator$eval_if(ctx,cond,then,else$){
if(cljs.core.truth_((sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.evaluator.eval.call(null,ctx,cond)))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.evaluator.eval.call(null,ctx,then));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.evaluator.eval.call(null,ctx,else$));
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,p__51132){
var vec__51133 = p__51132;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51133,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51133,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51133,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51133,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.evaluator.eval.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__51139 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51139,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__51139;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.evaluator.handle_refer_all = (function sci$impl$evaluator$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__51142){
var vec__51143 = p__51142;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51143,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51143,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.evaluator.handle_require_libspec_env = (function sci$impl$evaluator$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__51148){
var map__51149 = p__51148;
var map__51149__$1 = (((((!((map__51149 == null))))?(((((map__51149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51149):map__51149);
var _parsed_libspec = map__51149__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use;
}
})())?sci.impl.evaluator.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51151 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51151,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.evaluator.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5735__auto___52236 = (function (){var G__51154 = the_loaded_ns;
var G__51154__$1 = (((G__51154 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__51154));
var G__51154__$2 = (((G__51154__$1 == null))?null:cljs.core.meta(G__51154__$1));
if((G__51154__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__51154__$2);
}
})();
if(cljs.core.truth_(temp__5735__auto___52236)){
var on_loaded_52238 = temp__5735__auto___52236;
var G__51155_52240 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_52238.cljs$core$IFn$_invoke$arity$1 ? on_loaded_52238.cljs$core$IFn$_invoke$arity$1(G__51155_52240) : on_loaded_52238.call(null,G__51155_52240));
} else {
}

return env__$1;
});
sci.impl.evaluator.handle_require_libspec = (function sci$impl$evaluator$handle_require_libspec(ctx,lib,opts){
var map__51164 = opts;
var map__51164__$1 = (((((!((map__51164 == null))))?(((((map__51164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51164):map__51164);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__4126__auto__ = reload;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uberscript;
}
})();
var temp__5733__auto__ = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.evaluator.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__51169 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__51169) : load_fn.call(null,G__51169));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__51170 = temp__5733__auto____$2;
var map__51170__$1 = (((((!((map__51170 == null))))?(((((map__51170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51170):map__51170);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__51182_52341 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__51183_52342 = source;
var fexpr__51181_52343 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__51181_52343.cljs$core$IFn$_invoke$arity$2 ? fexpr__51181_52343.cljs$core$IFn$_invoke$arity$2(G__51182_52341,G__51183_52342) : fexpr__51181_52343.call(null,G__51182_52341,G__51183_52342));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e51180){if((e51180 instanceof Error)){
var e_52344 = e51180;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_52344;
} else {
throw e51180;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.evaluator.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.evaluator.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
});
sci.impl.evaluator.load_lib = (function sci$impl$evaluator$load_lib(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52346 = arguments.length;
var i__4737__auto___52350 = (0);
while(true){
if((i__4737__auto___52350 < len__4736__auto___52346)){
args__4742__auto__.push((arguments[i__4737__auto___52350]));

var G__52351 = (i__4737__auto___52350 + (1));
i__4737__auto___52350 = G__52351;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.evaluator.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.evaluator.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = prefix;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4115__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.evaluator.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.evaluator.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.evaluator.load_lib.cljs$lang$applyTo = (function (seq51184){
var G__51185 = cljs.core.first(seq51184);
var seq51184__$1 = cljs.core.next(seq51184);
var G__51186 = cljs.core.first(seq51184__$1);
var seq51184__$2 = cljs.core.next(seq51184__$1);
var G__51187 = cljs.core.first(seq51184__$2);
var seq51184__$3 = cljs.core.next(seq51184__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51185,G__51186,G__51187,seq51184__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.evaluator.prependss = (function sci$impl$evaluator$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.evaluator.libspec_QMARK_ = (function sci$impl$evaluator$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.evaluator.load_libs = (function sci$impl$evaluator$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_52373 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_52374 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_52373,flags));
if(unsupported_52374){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_52374)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__51212 = cljs.core.seq(args_STAR___$1);
var chunk__51213 = null;
var count__51214 = (0);
var i__51215 = (0);
while(true){
if((i__51215 < count__51214)){
var arg = chunk__51213.cljs$core$IIndexed$_nth$arity$2(null,i__51215);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__51235_52395 = arg;
var seq__51236_52396 = cljs.core.seq(vec__51235_52395);
var first__51237_52397 = cljs.core.first(seq__51236_52396);
var seq__51236_52398__$1 = cljs.core.next(seq__51236_52396);
var prefix_52399 = first__51237_52397;
var args_STAR__52400__$2 = seq__51236_52398__$1;
if((prefix_52399 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__51238_52401 = cljs.core.seq(args_STAR__52400__$2);
var chunk__51239_52402 = null;
var count__51240_52403 = (0);
var i__51241_52404 = (0);
while(true){
if((i__51241_52404 < count__51240_52403)){
var arg_52405__$1 = chunk__51239_52402.cljs$core$IIndexed$_nth$arity$2(null,i__51241_52404);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_52399,sci.impl.evaluator.prependss(arg_52405__$1,opts));


var G__52406 = seq__51238_52401;
var G__52407 = chunk__51239_52402;
var G__52408 = count__51240_52403;
var G__52409 = (i__51241_52404 + (1));
seq__51238_52401 = G__52406;
chunk__51239_52402 = G__52407;
count__51240_52403 = G__52408;
i__51241_52404 = G__52409;
continue;
} else {
var temp__5735__auto___52412 = cljs.core.seq(seq__51238_52401);
if(temp__5735__auto___52412){
var seq__51238_52413__$1 = temp__5735__auto___52412;
if(cljs.core.chunked_seq_QMARK_(seq__51238_52413__$1)){
var c__4556__auto___52414 = cljs.core.chunk_first(seq__51238_52413__$1);
var G__52415 = cljs.core.chunk_rest(seq__51238_52413__$1);
var G__52416 = c__4556__auto___52414;
var G__52417 = cljs.core.count(c__4556__auto___52414);
var G__52418 = (0);
seq__51238_52401 = G__52415;
chunk__51239_52402 = G__52416;
count__51240_52403 = G__52417;
i__51241_52404 = G__52418;
continue;
} else {
var arg_52420__$1 = cljs.core.first(seq__51238_52413__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_52399,sci.impl.evaluator.prependss(arg_52420__$1,opts));


var G__52421 = cljs.core.next(seq__51238_52413__$1);
var G__52422 = null;
var G__52423 = (0);
var G__52424 = (0);
seq__51238_52401 = G__52421;
chunk__51239_52402 = G__52422;
count__51240_52403 = G__52423;
i__51241_52404 = G__52424;
continue;
}
} else {
}
}
break;
}
}


var G__52425 = seq__51212;
var G__52426 = chunk__51213;
var G__52427 = count__51214;
var G__52428 = (i__51215 + (1));
seq__51212 = G__52425;
chunk__51213 = G__52426;
count__51214 = G__52427;
i__51215 = G__52428;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51212);
if(temp__5735__auto__){
var seq__51212__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51212__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51212__$1);
var G__52429 = cljs.core.chunk_rest(seq__51212__$1);
var G__52430 = c__4556__auto__;
var G__52431 = cljs.core.count(c__4556__auto__);
var G__52432 = (0);
seq__51212 = G__52429;
chunk__51213 = G__52430;
count__51214 = G__52431;
i__51215 = G__52432;
continue;
} else {
var arg = cljs.core.first(seq__51212__$1);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__51249_52433 = arg;
var seq__51250_52434 = cljs.core.seq(vec__51249_52433);
var first__51251_52435 = cljs.core.first(seq__51250_52434);
var seq__51250_52436__$1 = cljs.core.next(seq__51250_52434);
var prefix_52437 = first__51251_52435;
var args_STAR__52438__$2 = seq__51250_52436__$1;
if((prefix_52437 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__51252_52442 = cljs.core.seq(args_STAR__52438__$2);
var chunk__51253_52443 = null;
var count__51254_52444 = (0);
var i__51255_52445 = (0);
while(true){
if((i__51255_52445 < count__51254_52444)){
var arg_52446__$1 = chunk__51253_52443.cljs$core$IIndexed$_nth$arity$2(null,i__51255_52445);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_52437,sci.impl.evaluator.prependss(arg_52446__$1,opts));


var G__52447 = seq__51252_52442;
var G__52448 = chunk__51253_52443;
var G__52449 = count__51254_52444;
var G__52450 = (i__51255_52445 + (1));
seq__51252_52442 = G__52447;
chunk__51253_52443 = G__52448;
count__51254_52444 = G__52449;
i__51255_52445 = G__52450;
continue;
} else {
var temp__5735__auto___52451__$1 = cljs.core.seq(seq__51252_52442);
if(temp__5735__auto___52451__$1){
var seq__51252_52452__$1 = temp__5735__auto___52451__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51252_52452__$1)){
var c__4556__auto___52453 = cljs.core.chunk_first(seq__51252_52452__$1);
var G__52454 = cljs.core.chunk_rest(seq__51252_52452__$1);
var G__52455 = c__4556__auto___52453;
var G__52456 = cljs.core.count(c__4556__auto___52453);
var G__52457 = (0);
seq__51252_52442 = G__52454;
chunk__51253_52443 = G__52455;
count__51254_52444 = G__52456;
i__51255_52445 = G__52457;
continue;
} else {
var arg_52458__$1 = cljs.core.first(seq__51252_52452__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_52437,sci.impl.evaluator.prependss(arg_52458__$1,opts));


var G__52459 = cljs.core.next(seq__51252_52452__$1);
var G__52460 = null;
var G__52461 = (0);
var G__52462 = (0);
seq__51252_52442 = G__52459;
chunk__51253_52443 = G__52460;
count__51254_52444 = G__52461;
i__51255_52445 = G__52462;
continue;
}
} else {
}
}
break;
}
}


var G__52463 = cljs.core.next(seq__51212__$1);
var G__52464 = null;
var G__52465 = (0);
var G__52466 = (0);
seq__51212 = G__52463;
chunk__51213 = G__52464;
count__51214 = G__52465;
i__51215 = G__52466;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.evaluator.eval_require = (function sci$impl$evaluator$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52467 = arguments.length;
var i__4737__auto___52470 = (0);
while(true){
if((i__4737__auto___52470 < len__4736__auto___52467)){
args__4742__auto__.push((arguments[i__4737__auto___52470]));

var G__52471 = (i__4737__auto___52470 + (1));
i__4737__auto___52470 = G__52471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.evaluator.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.evaluator.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_require.cljs$lang$applyTo = (function (seq51270){
var G__51271 = cljs.core.first(seq51270);
var seq51270__$1 = cljs.core.next(seq51270);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51271,seq51270__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.evaluator.eval_require);
sci.impl.evaluator.eval_use = (function sci$impl$evaluator$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52483 = arguments.length;
var i__4737__auto___52484 = (0);
while(true){
if((i__4737__auto___52484 < len__4736__auto___52483)){
args__4742__auto__.push((arguments[i__4737__auto___52484]));

var G__52485 = (i__4737__auto___52484 + (1));
i__4737__auto___52484 = G__52485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.evaluator.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.evaluator.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_use.cljs$lang$applyTo = (function (seq51274){
var G__51275 = cljs.core.first(seq51274);
var seq51274__$1 = cljs.core.next(seq51274);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51275,seq51274__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.evaluator.eval_use);
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__51279){
var vec__51288 = p__51279;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51288,(0),null);
var map__51291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51288,(1),null);
var map__51291__$1 = (((((!((map__51291 == null))))?(((((map__51291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51291):map__51291);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51294 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__51298 = ctx;
var G__51299 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51298,G__51299) : sci.impl.evaluator.eval.call(null,G__51298,G__51299));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__51303 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__51303__$1 = (((((!((map__51303 == null))))?(((((map__51303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51303):map__51303);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51303__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51303__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51303__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__51311 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__51312 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__51312);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__51311);
}}catch (e51305){if((e51305 instanceof Error)){
var e = e51305;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__51306 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__51307 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51306,G__51307) : sci.impl.evaluator.eval.call(null,G__51306,G__51307));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51308 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51308,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51308,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e51305;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__51314){
var vec__51315 = p__51314;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51315,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51315,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51321_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__51321_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__51321_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__51323){
var vec__51324 = p__51323;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51324,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51324,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51324,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51322_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__51322_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__51322_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__51329,p__51330){
var map__51331 = p__51329;
var map__51331__$1 = (((((!((map__51331 == null))))?(((((map__51331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51331):map__51331);
var ctx = map__51331__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__51332 = p__51330;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(3),null);
var _expr = vec__51332;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51328_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__51328_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__51328_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__51367){
var vec__51368 = p__51367;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51368,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51368,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_refer = (function sci$impl$evaluator$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52550 = arguments.length;
var i__4737__auto___52551 = (0);
while(true){
if((i__4737__auto___52551 < len__4736__auto___52550)){
args__4742__auto__.push((arguments[i__4737__auto___52551]));

var G__52552 = (i__4737__auto___52551 + (1));
i__4737__auto___52551 = G__52552;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.evaluator.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.evaluator.eval.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__51374 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(1),null);
var G__51377_52554 = k;
var G__51377_52555__$1 = (((G__51377_52554 instanceof cljs.core.Keyword))?G__51377_52554.fqn:null);
switch (G__51377_52555__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51377_52554,G__51377_52555__$1,vec__51374,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__51377_52554,G__51377_52555__$1,vec__51374,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51377_52554,G__51377_52555__$1,vec__51374,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__51377_52554,G__51377_52555__$1,vec__51374,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51377_52555__$1)].join('')));

}

var G__52560 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__52560;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.evaluator.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.evaluator.eval_refer.cljs$lang$applyTo = (function (seq51371){
var G__51372 = cljs.core.first(seq51371);
var seq51371__$1 = cljs.core.next(seq51371);
var G__51373 = cljs.core.first(seq51371__$1);
var seq51371__$2 = cljs.core.next(seq51371__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51372,G__51373,seq51371__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.evaluator.eval_refer);
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__51382 = arguments.length;
switch (G__51382) {
case 2:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__51383 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__51383.cljs$core$IFn$_invoke$arity$3 ? fexpr__51383.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__51383.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__51387 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__51387.cljs$core$IFn$_invoke$arity$3 ? fexpr__51387.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__51387.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52568 = arguments.length;
var i__4737__auto___52569 = (0);
while(true){
if((i__4737__auto___52569 < len__4736__auto___52568)){
args__4742__auto__.push((arguments[i__4737__auto___52569]));

var G__52570 = (i__4737__auto___52569 + (1));
i__4737__auto___52569 = G__52570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51388_SHARP_){
if(((cljs.core.seq_QMARK_(p1__51388_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__51388_SHARP_))))){
return cljs.core.second(p1__51388_SHARP_);
} else {
return p1__51388_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__51392 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51392,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51392,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5733__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5733__auto__)){
var clazz = temp__5733__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5733__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5733__auto____$1)){
var rec = temp__5733__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq51390){
var G__51391 = cljs.core.first(seq51390);
var seq51390__$1 = cljs.core.next(seq51390);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51391,seq51390__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__51395){
var vec__51396 = p__51395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51396,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51396,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51396,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.evaluator.eval_do_STAR_ = (function sci$impl$evaluator$eval_do_STAR_(ctx,exprs){
var G__51402 = exprs;
var vec__51403 = G__51402;
var seq__51404 = cljs.core.seq(vec__51403);
var first__51405 = cljs.core.first(seq__51404);
var seq__51404__$1 = cljs.core.next(seq__51404);
var expr = first__51405;
var exprs__$1 = seq__51404__$1;
var G__51402__$1 = G__51402;
while(true){
var vec__51406 = G__51402__$1;
var seq__51407 = cljs.core.seq(vec__51406);
var first__51408 = cljs.core.first(seq__51407);
var seq__51407__$1 = cljs.core.next(seq__51407);
var expr__$1 = first__51408;
var exprs__$2 = seq__51407__$1;
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.evaluator.eval.call(null,ctx,expr__$1));
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__52613 = exprs__$3;
G__51402__$1 = G__52613;
continue;
} else {
return ret;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do_STAR_);
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.evaluator.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,f,args){
var G__51607 = cljs.core.count(args);
switch (G__51607) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg51417 = (function (){var G__51608 = ctx;
var G__51609 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51608,G__51609) : sci.impl.evaluator.eval.call(null,G__51608,G__51609));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg51417) : f.call(null,arg51417));

break;
case (2):
var arg51418 = (function (){var G__51610 = ctx;
var G__51611 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51610,G__51611) : sci.impl.evaluator.eval.call(null,G__51610,G__51611));
})();
var args__$1 = cljs.core.rest(args);
var arg51419 = (function (){var G__51612 = ctx;
var G__51613 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51612,G__51613) : sci.impl.evaluator.eval.call(null,G__51612,G__51613));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg51418,arg51419) : f.call(null,arg51418,arg51419));

break;
case (3):
var arg51420 = (function (){var G__51616 = ctx;
var G__51617 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51616,G__51617) : sci.impl.evaluator.eval.call(null,G__51616,G__51617));
})();
var args__$1 = cljs.core.rest(args);
var arg51421 = (function (){var G__51618 = ctx;
var G__51619 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51618,G__51619) : sci.impl.evaluator.eval.call(null,G__51618,G__51619));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51422 = (function (){var G__51621 = ctx;
var G__51622 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51621,G__51622) : sci.impl.evaluator.eval.call(null,G__51621,G__51622));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg51420,arg51421,arg51422) : f.call(null,arg51420,arg51421,arg51422));

break;
case (4):
var arg51423 = (function (){var G__51623 = ctx;
var G__51624 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51623,G__51624) : sci.impl.evaluator.eval.call(null,G__51623,G__51624));
})();
var args__$1 = cljs.core.rest(args);
var arg51424 = (function (){var G__51625 = ctx;
var G__51626 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51625,G__51626) : sci.impl.evaluator.eval.call(null,G__51625,G__51626));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51425 = (function (){var G__51636 = ctx;
var G__51637 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51636,G__51637) : sci.impl.evaluator.eval.call(null,G__51636,G__51637));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51426 = (function (){var G__51638 = ctx;
var G__51639 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51638,G__51639) : sci.impl.evaluator.eval.call(null,G__51638,G__51639));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg51423,arg51424,arg51425,arg51426) : f.call(null,arg51423,arg51424,arg51425,arg51426));

break;
case (5):
var arg51427 = (function (){var G__51640 = ctx;
var G__51641 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51640,G__51641) : sci.impl.evaluator.eval.call(null,G__51640,G__51641));
})();
var args__$1 = cljs.core.rest(args);
var arg51428 = (function (){var G__51642 = ctx;
var G__51643 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51642,G__51643) : sci.impl.evaluator.eval.call(null,G__51642,G__51643));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51429 = (function (){var G__51644 = ctx;
var G__51645 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51644,G__51645) : sci.impl.evaluator.eval.call(null,G__51644,G__51645));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51430 = (function (){var G__51646 = ctx;
var G__51647 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51646,G__51647) : sci.impl.evaluator.eval.call(null,G__51646,G__51647));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51431 = (function (){var G__51648 = ctx;
var G__51649 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51648,G__51649) : sci.impl.evaluator.eval.call(null,G__51648,G__51649));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg51427,arg51428,arg51429,arg51430,arg51431) : f.call(null,arg51427,arg51428,arg51429,arg51430,arg51431));

break;
case (6):
var arg51432 = (function (){var G__51650 = ctx;
var G__51651 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51650,G__51651) : sci.impl.evaluator.eval.call(null,G__51650,G__51651));
})();
var args__$1 = cljs.core.rest(args);
var arg51433 = (function (){var G__51652 = ctx;
var G__51653 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51652,G__51653) : sci.impl.evaluator.eval.call(null,G__51652,G__51653));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51434 = (function (){var G__51654 = ctx;
var G__51655 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51654,G__51655) : sci.impl.evaluator.eval.call(null,G__51654,G__51655));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51435 = (function (){var G__51656 = ctx;
var G__51657 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51656,G__51657) : sci.impl.evaluator.eval.call(null,G__51656,G__51657));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51436 = (function (){var G__51659 = ctx;
var G__51660 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51659,G__51660) : sci.impl.evaluator.eval.call(null,G__51659,G__51660));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51437 = (function (){var G__51661 = ctx;
var G__51662 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51661,G__51662) : sci.impl.evaluator.eval.call(null,G__51661,G__51662));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg51432,arg51433,arg51434,arg51435,arg51436,arg51437) : f.call(null,arg51432,arg51433,arg51434,arg51435,arg51436,arg51437));

break;
case (7):
var arg51438 = (function (){var G__51663 = ctx;
var G__51664 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51663,G__51664) : sci.impl.evaluator.eval.call(null,G__51663,G__51664));
})();
var args__$1 = cljs.core.rest(args);
var arg51439 = (function (){var G__51666 = ctx;
var G__51667 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51666,G__51667) : sci.impl.evaluator.eval.call(null,G__51666,G__51667));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51440 = (function (){var G__51671 = ctx;
var G__51672 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51671,G__51672) : sci.impl.evaluator.eval.call(null,G__51671,G__51672));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51441 = (function (){var G__51673 = ctx;
var G__51674 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51673,G__51674) : sci.impl.evaluator.eval.call(null,G__51673,G__51674));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51442 = (function (){var G__51675 = ctx;
var G__51676 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51675,G__51676) : sci.impl.evaluator.eval.call(null,G__51675,G__51676));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51443 = (function (){var G__51677 = ctx;
var G__51678 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51677,G__51678) : sci.impl.evaluator.eval.call(null,G__51677,G__51678));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51444 = (function (){var G__51679 = ctx;
var G__51680 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51679,G__51680) : sci.impl.evaluator.eval.call(null,G__51679,G__51680));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg51438,arg51439,arg51440,arg51441,arg51442,arg51443,arg51444) : f.call(null,arg51438,arg51439,arg51440,arg51441,arg51442,arg51443,arg51444));

break;
case (8):
var arg51445 = (function (){var G__51681 = ctx;
var G__51682 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51681,G__51682) : sci.impl.evaluator.eval.call(null,G__51681,G__51682));
})();
var args__$1 = cljs.core.rest(args);
var arg51446 = (function (){var G__51683 = ctx;
var G__51684 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51683,G__51684) : sci.impl.evaluator.eval.call(null,G__51683,G__51684));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51447 = (function (){var G__51685 = ctx;
var G__51686 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51685,G__51686) : sci.impl.evaluator.eval.call(null,G__51685,G__51686));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51448 = (function (){var G__51687 = ctx;
var G__51688 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51687,G__51688) : sci.impl.evaluator.eval.call(null,G__51687,G__51688));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51449 = (function (){var G__51689 = ctx;
var G__51690 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51689,G__51690) : sci.impl.evaluator.eval.call(null,G__51689,G__51690));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51450 = (function (){var G__51691 = ctx;
var G__51692 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51691,G__51692) : sci.impl.evaluator.eval.call(null,G__51691,G__51692));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51451 = (function (){var G__51693 = ctx;
var G__51694 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51693,G__51694) : sci.impl.evaluator.eval.call(null,G__51693,G__51694));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51452 = (function (){var G__51695 = ctx;
var G__51696 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51695,G__51696) : sci.impl.evaluator.eval.call(null,G__51695,G__51696));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg51445,arg51446,arg51447,arg51448,arg51449,arg51450,arg51451,arg51452) : f.call(null,arg51445,arg51446,arg51447,arg51448,arg51449,arg51450,arg51451,arg51452));

break;
case (9):
var arg51453 = (function (){var G__51697 = ctx;
var G__51698 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51697,G__51698) : sci.impl.evaluator.eval.call(null,G__51697,G__51698));
})();
var args__$1 = cljs.core.rest(args);
var arg51454 = (function (){var G__51699 = ctx;
var G__51700 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51699,G__51700) : sci.impl.evaluator.eval.call(null,G__51699,G__51700));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51455 = (function (){var G__51701 = ctx;
var G__51702 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51701,G__51702) : sci.impl.evaluator.eval.call(null,G__51701,G__51702));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51456 = (function (){var G__51703 = ctx;
var G__51704 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51703,G__51704) : sci.impl.evaluator.eval.call(null,G__51703,G__51704));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51457 = (function (){var G__51705 = ctx;
var G__51706 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51705,G__51706) : sci.impl.evaluator.eval.call(null,G__51705,G__51706));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51458 = (function (){var G__51707 = ctx;
var G__51708 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51707,G__51708) : sci.impl.evaluator.eval.call(null,G__51707,G__51708));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51459 = (function (){var G__51709 = ctx;
var G__51710 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51709,G__51710) : sci.impl.evaluator.eval.call(null,G__51709,G__51710));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51460 = (function (){var G__51711 = ctx;
var G__51712 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51711,G__51712) : sci.impl.evaluator.eval.call(null,G__51711,G__51712));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51461 = (function (){var G__51713 = ctx;
var G__51714 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51713,G__51714) : sci.impl.evaluator.eval.call(null,G__51713,G__51714));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg51453,arg51454,arg51455,arg51456,arg51457,arg51458,arg51459,arg51460,arg51461) : f.call(null,arg51453,arg51454,arg51455,arg51456,arg51457,arg51458,arg51459,arg51460,arg51461));

break;
case (10):
var arg51462 = (function (){var G__51715 = ctx;
var G__51716 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51715,G__51716) : sci.impl.evaluator.eval.call(null,G__51715,G__51716));
})();
var args__$1 = cljs.core.rest(args);
var arg51463 = (function (){var G__51717 = ctx;
var G__51718 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51717,G__51718) : sci.impl.evaluator.eval.call(null,G__51717,G__51718));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51464 = (function (){var G__51719 = ctx;
var G__51720 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51719,G__51720) : sci.impl.evaluator.eval.call(null,G__51719,G__51720));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51465 = (function (){var G__51724 = ctx;
var G__51725 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51724,G__51725) : sci.impl.evaluator.eval.call(null,G__51724,G__51725));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51466 = (function (){var G__51726 = ctx;
var G__51727 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51726,G__51727) : sci.impl.evaluator.eval.call(null,G__51726,G__51727));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51467 = (function (){var G__51728 = ctx;
var G__51729 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51728,G__51729) : sci.impl.evaluator.eval.call(null,G__51728,G__51729));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51468 = (function (){var G__51730 = ctx;
var G__51731 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51730,G__51731) : sci.impl.evaluator.eval.call(null,G__51730,G__51731));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51469 = (function (){var G__51732 = ctx;
var G__51733 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51732,G__51733) : sci.impl.evaluator.eval.call(null,G__51732,G__51733));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51470 = (function (){var G__51734 = ctx;
var G__51735 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51734,G__51735) : sci.impl.evaluator.eval.call(null,G__51734,G__51735));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51471 = (function (){var G__51736 = ctx;
var G__51737 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51736,G__51737) : sci.impl.evaluator.eval.call(null,G__51736,G__51737));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg51462,arg51463,arg51464,arg51465,arg51466,arg51467,arg51468,arg51469,arg51470,arg51471) : f.call(null,arg51462,arg51463,arg51464,arg51465,arg51466,arg51467,arg51468,arg51469,arg51470,arg51471));

break;
case (11):
var arg51472 = (function (){var G__51738 = ctx;
var G__51739 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51738,G__51739) : sci.impl.evaluator.eval.call(null,G__51738,G__51739));
})();
var args__$1 = cljs.core.rest(args);
var arg51473 = (function (){var G__51740 = ctx;
var G__51741 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51740,G__51741) : sci.impl.evaluator.eval.call(null,G__51740,G__51741));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51474 = (function (){var G__51749 = ctx;
var G__51750 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51749,G__51750) : sci.impl.evaluator.eval.call(null,G__51749,G__51750));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51475 = (function (){var G__51751 = ctx;
var G__51752 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51751,G__51752) : sci.impl.evaluator.eval.call(null,G__51751,G__51752));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51476 = (function (){var G__51753 = ctx;
var G__51754 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51753,G__51754) : sci.impl.evaluator.eval.call(null,G__51753,G__51754));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51477 = (function (){var G__51760 = ctx;
var G__51761 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51760,G__51761) : sci.impl.evaluator.eval.call(null,G__51760,G__51761));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51478 = (function (){var G__51762 = ctx;
var G__51763 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51762,G__51763) : sci.impl.evaluator.eval.call(null,G__51762,G__51763));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51479 = (function (){var G__51764 = ctx;
var G__51765 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51764,G__51765) : sci.impl.evaluator.eval.call(null,G__51764,G__51765));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51480 = (function (){var G__51766 = ctx;
var G__51767 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51766,G__51767) : sci.impl.evaluator.eval.call(null,G__51766,G__51767));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51481 = (function (){var G__51768 = ctx;
var G__51769 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51768,G__51769) : sci.impl.evaluator.eval.call(null,G__51768,G__51769));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51482 = (function (){var G__51770 = ctx;
var G__51771 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51770,G__51771) : sci.impl.evaluator.eval.call(null,G__51770,G__51771));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg51472,arg51473,arg51474,arg51475,arg51476,arg51477,arg51478,arg51479,arg51480,arg51481,arg51482) : f.call(null,arg51472,arg51473,arg51474,arg51475,arg51476,arg51477,arg51478,arg51479,arg51480,arg51481,arg51482));

break;
case (12):
var arg51483 = (function (){var G__51772 = ctx;
var G__51773 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51772,G__51773) : sci.impl.evaluator.eval.call(null,G__51772,G__51773));
})();
var args__$1 = cljs.core.rest(args);
var arg51484 = (function (){var G__51781 = ctx;
var G__51782 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51781,G__51782) : sci.impl.evaluator.eval.call(null,G__51781,G__51782));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51485 = (function (){var G__51783 = ctx;
var G__51784 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51783,G__51784) : sci.impl.evaluator.eval.call(null,G__51783,G__51784));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51486 = (function (){var G__51785 = ctx;
var G__51786 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51785,G__51786) : sci.impl.evaluator.eval.call(null,G__51785,G__51786));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51487 = (function (){var G__51787 = ctx;
var G__51788 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51787,G__51788) : sci.impl.evaluator.eval.call(null,G__51787,G__51788));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51488 = (function (){var G__51789 = ctx;
var G__51790 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51789,G__51790) : sci.impl.evaluator.eval.call(null,G__51789,G__51790));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51489 = (function (){var G__51791 = ctx;
var G__51792 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51791,G__51792) : sci.impl.evaluator.eval.call(null,G__51791,G__51792));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51490 = (function (){var G__51793 = ctx;
var G__51794 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51793,G__51794) : sci.impl.evaluator.eval.call(null,G__51793,G__51794));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51491 = (function (){var G__51795 = ctx;
var G__51796 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51795,G__51796) : sci.impl.evaluator.eval.call(null,G__51795,G__51796));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51492 = (function (){var G__51797 = ctx;
var G__51798 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51797,G__51798) : sci.impl.evaluator.eval.call(null,G__51797,G__51798));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51493 = (function (){var G__51803 = ctx;
var G__51804 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51803,G__51804) : sci.impl.evaluator.eval.call(null,G__51803,G__51804));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51494 = (function (){var G__51805 = ctx;
var G__51806 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51805,G__51806) : sci.impl.evaluator.eval.call(null,G__51805,G__51806));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg51483,arg51484,arg51485,arg51486,arg51487,arg51488,arg51489,arg51490,arg51491,arg51492,arg51493,arg51494) : f.call(null,arg51483,arg51484,arg51485,arg51486,arg51487,arg51488,arg51489,arg51490,arg51491,arg51492,arg51493,arg51494));

break;
case (13):
var arg51495 = (function (){var G__51807 = ctx;
var G__51808 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51807,G__51808) : sci.impl.evaluator.eval.call(null,G__51807,G__51808));
})();
var args__$1 = cljs.core.rest(args);
var arg51496 = (function (){var G__51809 = ctx;
var G__51810 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51809,G__51810) : sci.impl.evaluator.eval.call(null,G__51809,G__51810));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51497 = (function (){var G__51811 = ctx;
var G__51812 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51811,G__51812) : sci.impl.evaluator.eval.call(null,G__51811,G__51812));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51498 = (function (){var G__51813 = ctx;
var G__51814 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51813,G__51814) : sci.impl.evaluator.eval.call(null,G__51813,G__51814));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51499 = (function (){var G__51815 = ctx;
var G__51816 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51815,G__51816) : sci.impl.evaluator.eval.call(null,G__51815,G__51816));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51500 = (function (){var G__51817 = ctx;
var G__51818 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51817,G__51818) : sci.impl.evaluator.eval.call(null,G__51817,G__51818));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51501 = (function (){var G__51819 = ctx;
var G__51820 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51819,G__51820) : sci.impl.evaluator.eval.call(null,G__51819,G__51820));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51502 = (function (){var G__51821 = ctx;
var G__51822 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51821,G__51822) : sci.impl.evaluator.eval.call(null,G__51821,G__51822));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51503 = (function (){var G__51823 = ctx;
var G__51824 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51823,G__51824) : sci.impl.evaluator.eval.call(null,G__51823,G__51824));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51504 = (function (){var G__51825 = ctx;
var G__51826 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51825,G__51826) : sci.impl.evaluator.eval.call(null,G__51825,G__51826));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51505 = (function (){var G__51827 = ctx;
var G__51828 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51827,G__51828) : sci.impl.evaluator.eval.call(null,G__51827,G__51828));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51506 = (function (){var G__51829 = ctx;
var G__51830 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51829,G__51830) : sci.impl.evaluator.eval.call(null,G__51829,G__51830));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51507 = (function (){var G__51831 = ctx;
var G__51832 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51831,G__51832) : sci.impl.evaluator.eval.call(null,G__51831,G__51832));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg51495,arg51496,arg51497,arg51498,arg51499,arg51500,arg51501,arg51502,arg51503,arg51504,arg51505,arg51506,arg51507) : f.call(null,arg51495,arg51496,arg51497,arg51498,arg51499,arg51500,arg51501,arg51502,arg51503,arg51504,arg51505,arg51506,arg51507));

break;
case (14):
var arg51508 = (function (){var G__51833 = ctx;
var G__51834 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51833,G__51834) : sci.impl.evaluator.eval.call(null,G__51833,G__51834));
})();
var args__$1 = cljs.core.rest(args);
var arg51509 = (function (){var G__51835 = ctx;
var G__51836 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51835,G__51836) : sci.impl.evaluator.eval.call(null,G__51835,G__51836));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51510 = (function (){var G__51837 = ctx;
var G__51838 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51837,G__51838) : sci.impl.evaluator.eval.call(null,G__51837,G__51838));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51511 = (function (){var G__51839 = ctx;
var G__51840 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51839,G__51840) : sci.impl.evaluator.eval.call(null,G__51839,G__51840));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51512 = (function (){var G__51841 = ctx;
var G__51842 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51841,G__51842) : sci.impl.evaluator.eval.call(null,G__51841,G__51842));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51513 = (function (){var G__51843 = ctx;
var G__51844 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51843,G__51844) : sci.impl.evaluator.eval.call(null,G__51843,G__51844));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51514 = (function (){var G__51846 = ctx;
var G__51847 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51846,G__51847) : sci.impl.evaluator.eval.call(null,G__51846,G__51847));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51515 = (function (){var G__51849 = ctx;
var G__51850 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51849,G__51850) : sci.impl.evaluator.eval.call(null,G__51849,G__51850));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51516 = (function (){var G__51851 = ctx;
var G__51852 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51851,G__51852) : sci.impl.evaluator.eval.call(null,G__51851,G__51852));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51517 = (function (){var G__51853 = ctx;
var G__51854 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51853,G__51854) : sci.impl.evaluator.eval.call(null,G__51853,G__51854));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51518 = (function (){var G__51855 = ctx;
var G__51856 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51855,G__51856) : sci.impl.evaluator.eval.call(null,G__51855,G__51856));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51519 = (function (){var G__51857 = ctx;
var G__51858 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51857,G__51858) : sci.impl.evaluator.eval.call(null,G__51857,G__51858));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51520 = (function (){var G__51859 = ctx;
var G__51860 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51859,G__51860) : sci.impl.evaluator.eval.call(null,G__51859,G__51860));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51521 = (function (){var G__51861 = ctx;
var G__51862 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51861,G__51862) : sci.impl.evaluator.eval.call(null,G__51861,G__51862));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg51508,arg51509,arg51510,arg51511,arg51512,arg51513,arg51514,arg51515,arg51516,arg51517,arg51518,arg51519,arg51520,arg51521) : f.call(null,arg51508,arg51509,arg51510,arg51511,arg51512,arg51513,arg51514,arg51515,arg51516,arg51517,arg51518,arg51519,arg51520,arg51521));

break;
case (15):
var arg51522 = (function (){var G__51873 = ctx;
var G__51874 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51873,G__51874) : sci.impl.evaluator.eval.call(null,G__51873,G__51874));
})();
var args__$1 = cljs.core.rest(args);
var arg51523 = (function (){var G__51875 = ctx;
var G__51876 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51875,G__51876) : sci.impl.evaluator.eval.call(null,G__51875,G__51876));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51524 = (function (){var G__51877 = ctx;
var G__51878 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51877,G__51878) : sci.impl.evaluator.eval.call(null,G__51877,G__51878));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51525 = (function (){var G__51879 = ctx;
var G__51880 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51879,G__51880) : sci.impl.evaluator.eval.call(null,G__51879,G__51880));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51526 = (function (){var G__51882 = ctx;
var G__51883 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51882,G__51883) : sci.impl.evaluator.eval.call(null,G__51882,G__51883));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51527 = (function (){var G__51888 = ctx;
var G__51889 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51888,G__51889) : sci.impl.evaluator.eval.call(null,G__51888,G__51889));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51528 = (function (){var G__51890 = ctx;
var G__51891 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51890,G__51891) : sci.impl.evaluator.eval.call(null,G__51890,G__51891));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51529 = (function (){var G__51892 = ctx;
var G__51893 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51892,G__51893) : sci.impl.evaluator.eval.call(null,G__51892,G__51893));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51530 = (function (){var G__51894 = ctx;
var G__51895 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51894,G__51895) : sci.impl.evaluator.eval.call(null,G__51894,G__51895));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51531 = (function (){var G__51900 = ctx;
var G__51901 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51900,G__51901) : sci.impl.evaluator.eval.call(null,G__51900,G__51901));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51532 = (function (){var G__51902 = ctx;
var G__51903 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51902,G__51903) : sci.impl.evaluator.eval.call(null,G__51902,G__51903));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51533 = (function (){var G__51904 = ctx;
var G__51905 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51904,G__51905) : sci.impl.evaluator.eval.call(null,G__51904,G__51905));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51534 = (function (){var G__51906 = ctx;
var G__51907 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51906,G__51907) : sci.impl.evaluator.eval.call(null,G__51906,G__51907));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51535 = (function (){var G__51908 = ctx;
var G__51909 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51908,G__51909) : sci.impl.evaluator.eval.call(null,G__51908,G__51909));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51536 = (function (){var G__51910 = ctx;
var G__51911 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51910,G__51911) : sci.impl.evaluator.eval.call(null,G__51910,G__51911));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg51522,arg51523,arg51524,arg51525,arg51526,arg51527,arg51528,arg51529,arg51530,arg51531,arg51532,arg51533,arg51534,arg51535,arg51536) : f.call(null,arg51522,arg51523,arg51524,arg51525,arg51526,arg51527,arg51528,arg51529,arg51530,arg51531,arg51532,arg51533,arg51534,arg51535,arg51536));

break;
case (16):
var arg51537 = (function (){var G__51913 = ctx;
var G__51914 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51913,G__51914) : sci.impl.evaluator.eval.call(null,G__51913,G__51914));
})();
var args__$1 = cljs.core.rest(args);
var arg51538 = (function (){var G__51917 = ctx;
var G__51918 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51917,G__51918) : sci.impl.evaluator.eval.call(null,G__51917,G__51918));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51539 = (function (){var G__51919 = ctx;
var G__51920 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51919,G__51920) : sci.impl.evaluator.eval.call(null,G__51919,G__51920));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51540 = (function (){var G__51921 = ctx;
var G__51922 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51921,G__51922) : sci.impl.evaluator.eval.call(null,G__51921,G__51922));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51541 = (function (){var G__51924 = ctx;
var G__51925 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51924,G__51925) : sci.impl.evaluator.eval.call(null,G__51924,G__51925));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51542 = (function (){var G__51926 = ctx;
var G__51927 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51926,G__51927) : sci.impl.evaluator.eval.call(null,G__51926,G__51927));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51543 = (function (){var G__51928 = ctx;
var G__51929 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51928,G__51929) : sci.impl.evaluator.eval.call(null,G__51928,G__51929));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51544 = (function (){var G__51940 = ctx;
var G__51941 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51940,G__51941) : sci.impl.evaluator.eval.call(null,G__51940,G__51941));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51545 = (function (){var G__51943 = ctx;
var G__51946 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51943,G__51946) : sci.impl.evaluator.eval.call(null,G__51943,G__51946));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51546 = (function (){var G__51947 = ctx;
var G__51948 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51947,G__51948) : sci.impl.evaluator.eval.call(null,G__51947,G__51948));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51547 = (function (){var G__51953 = ctx;
var G__51954 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51953,G__51954) : sci.impl.evaluator.eval.call(null,G__51953,G__51954));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51548 = (function (){var G__51955 = ctx;
var G__51956 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51955,G__51956) : sci.impl.evaluator.eval.call(null,G__51955,G__51956));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51549 = (function (){var G__51960 = ctx;
var G__51961 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51960,G__51961) : sci.impl.evaluator.eval.call(null,G__51960,G__51961));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51550 = (function (){var G__51962 = ctx;
var G__51963 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51962,G__51963) : sci.impl.evaluator.eval.call(null,G__51962,G__51963));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51551 = (function (){var G__51964 = ctx;
var G__51965 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51964,G__51965) : sci.impl.evaluator.eval.call(null,G__51964,G__51965));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51552 = (function (){var G__51966 = ctx;
var G__51967 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51966,G__51967) : sci.impl.evaluator.eval.call(null,G__51966,G__51967));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg51537,arg51538,arg51539,arg51540,arg51541,arg51542,arg51543,arg51544,arg51545,arg51546,arg51547,arg51548,arg51549,arg51550,arg51551,arg51552) : f.call(null,arg51537,arg51538,arg51539,arg51540,arg51541,arg51542,arg51543,arg51544,arg51545,arg51546,arg51547,arg51548,arg51549,arg51550,arg51551,arg51552));

break;
case (17):
var arg51553 = (function (){var G__51971 = ctx;
var G__51972 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51971,G__51972) : sci.impl.evaluator.eval.call(null,G__51971,G__51972));
})();
var args__$1 = cljs.core.rest(args);
var arg51554 = (function (){var G__51973 = ctx;
var G__51974 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51973,G__51974) : sci.impl.evaluator.eval.call(null,G__51973,G__51974));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51555 = (function (){var G__51975 = ctx;
var G__51976 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51975,G__51976) : sci.impl.evaluator.eval.call(null,G__51975,G__51976));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51556 = (function (){var G__51977 = ctx;
var G__51978 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51977,G__51978) : sci.impl.evaluator.eval.call(null,G__51977,G__51978));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51557 = (function (){var G__51982 = ctx;
var G__51983 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51982,G__51983) : sci.impl.evaluator.eval.call(null,G__51982,G__51983));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51558 = (function (){var G__51984 = ctx;
var G__51985 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51984,G__51985) : sci.impl.evaluator.eval.call(null,G__51984,G__51985));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51559 = (function (){var G__51986 = ctx;
var G__51987 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51986,G__51987) : sci.impl.evaluator.eval.call(null,G__51986,G__51987));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51560 = (function (){var G__51988 = ctx;
var G__51989 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51988,G__51989) : sci.impl.evaluator.eval.call(null,G__51988,G__51989));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51561 = (function (){var G__51993 = ctx;
var G__51994 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51993,G__51994) : sci.impl.evaluator.eval.call(null,G__51993,G__51994));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51562 = (function (){var G__51995 = ctx;
var G__51996 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51995,G__51996) : sci.impl.evaluator.eval.call(null,G__51995,G__51996));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51563 = (function (){var G__51997 = ctx;
var G__51998 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51997,G__51998) : sci.impl.evaluator.eval.call(null,G__51997,G__51998));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51564 = (function (){var G__51999 = ctx;
var G__52000 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__51999,G__52000) : sci.impl.evaluator.eval.call(null,G__51999,G__52000));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51565 = (function (){var G__52001 = ctx;
var G__52002 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52001,G__52002) : sci.impl.evaluator.eval.call(null,G__52001,G__52002));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51566 = (function (){var G__52007 = ctx;
var G__52008 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52007,G__52008) : sci.impl.evaluator.eval.call(null,G__52007,G__52008));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51567 = (function (){var G__52009 = ctx;
var G__52010 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52009,G__52010) : sci.impl.evaluator.eval.call(null,G__52009,G__52010));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51568 = (function (){var G__52018 = ctx;
var G__52019 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52018,G__52019) : sci.impl.evaluator.eval.call(null,G__52018,G__52019));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg51569 = (function (){var G__52026 = ctx;
var G__52027 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52026,G__52027) : sci.impl.evaluator.eval.call(null,G__52026,G__52027));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg51553,arg51554,arg51555,arg51556,arg51557,arg51558,arg51559,arg51560,arg51561,arg51562,arg51563,arg51564,arg51565,arg51566,arg51567,arg51568,arg51569) : f.call(null,arg51553,arg51554,arg51555,arg51556,arg51557,arg51558,arg51559,arg51560,arg51561,arg51562,arg51563,arg51564,arg51565,arg51566,arg51567,arg51568,arg51569));

break;
case (18):
var arg51570 = (function (){var G__52044 = ctx;
var G__52045 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52044,G__52045) : sci.impl.evaluator.eval.call(null,G__52044,G__52045));
})();
var args__$1 = cljs.core.rest(args);
var arg51571 = (function (){var G__52049 = ctx;
var G__52050 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52049,G__52050) : sci.impl.evaluator.eval.call(null,G__52049,G__52050));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51572 = (function (){var G__52051 = ctx;
var G__52052 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52051,G__52052) : sci.impl.evaluator.eval.call(null,G__52051,G__52052));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51573 = (function (){var G__52053 = ctx;
var G__52054 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52053,G__52054) : sci.impl.evaluator.eval.call(null,G__52053,G__52054));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51574 = (function (){var G__52058 = ctx;
var G__52059 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52058,G__52059) : sci.impl.evaluator.eval.call(null,G__52058,G__52059));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51575 = (function (){var G__52060 = ctx;
var G__52061 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52060,G__52061) : sci.impl.evaluator.eval.call(null,G__52060,G__52061));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51576 = (function (){var G__52062 = ctx;
var G__52063 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52062,G__52063) : sci.impl.evaluator.eval.call(null,G__52062,G__52063));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51577 = (function (){var G__52064 = ctx;
var G__52065 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52064,G__52065) : sci.impl.evaluator.eval.call(null,G__52064,G__52065));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51578 = (function (){var G__52066 = ctx;
var G__52067 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52066,G__52067) : sci.impl.evaluator.eval.call(null,G__52066,G__52067));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51579 = (function (){var G__52071 = ctx;
var G__52072 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52071,G__52072) : sci.impl.evaluator.eval.call(null,G__52071,G__52072));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51580 = (function (){var G__52077 = ctx;
var G__52078 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52077,G__52078) : sci.impl.evaluator.eval.call(null,G__52077,G__52078));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51581 = (function (){var G__52079 = ctx;
var G__52080 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52079,G__52080) : sci.impl.evaluator.eval.call(null,G__52079,G__52080));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51582 = (function (){var G__52084 = ctx;
var G__52085 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52084,G__52085) : sci.impl.evaluator.eval.call(null,G__52084,G__52085));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51583 = (function (){var G__52086 = ctx;
var G__52087 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52086,G__52087) : sci.impl.evaluator.eval.call(null,G__52086,G__52087));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51584 = (function (){var G__52088 = ctx;
var G__52089 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52088,G__52089) : sci.impl.evaluator.eval.call(null,G__52088,G__52089));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51585 = (function (){var G__52090 = ctx;
var G__52091 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52090,G__52091) : sci.impl.evaluator.eval.call(null,G__52090,G__52091));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg51586 = (function (){var G__52092 = ctx;
var G__52093 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52092,G__52093) : sci.impl.evaluator.eval.call(null,G__52092,G__52093));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg51587 = (function (){var G__52094 = ctx;
var G__52095 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52094,G__52095) : sci.impl.evaluator.eval.call(null,G__52094,G__52095));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg51570,arg51571,arg51572,arg51573,arg51574,arg51575,arg51576,arg51577,arg51578,arg51579,arg51580,arg51581,arg51582,arg51583,arg51584,arg51585,arg51586,arg51587) : f.call(null,arg51570,arg51571,arg51572,arg51573,arg51574,arg51575,arg51576,arg51577,arg51578,arg51579,arg51580,arg51581,arg51582,arg51583,arg51584,arg51585,arg51586,arg51587));

break;
case (19):
var arg51588 = (function (){var G__52099 = ctx;
var G__52100 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52099,G__52100) : sci.impl.evaluator.eval.call(null,G__52099,G__52100));
})();
var args__$1 = cljs.core.rest(args);
var arg51589 = (function (){var G__52101 = ctx;
var G__52102 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52101,G__52102) : sci.impl.evaluator.eval.call(null,G__52101,G__52102));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg51590 = (function (){var G__52103 = ctx;
var G__52104 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52103,G__52104) : sci.impl.evaluator.eval.call(null,G__52103,G__52104));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg51591 = (function (){var G__52109 = ctx;
var G__52110 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52109,G__52110) : sci.impl.evaluator.eval.call(null,G__52109,G__52110));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg51592 = (function (){var G__52112 = ctx;
var G__52113 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52112,G__52113) : sci.impl.evaluator.eval.call(null,G__52112,G__52113));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg51593 = (function (){var G__52114 = ctx;
var G__52115 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52114,G__52115) : sci.impl.evaluator.eval.call(null,G__52114,G__52115));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg51594 = (function (){var G__52116 = ctx;
var G__52117 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52116,G__52117) : sci.impl.evaluator.eval.call(null,G__52116,G__52117));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg51595 = (function (){var G__52118 = ctx;
var G__52119 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52118,G__52119) : sci.impl.evaluator.eval.call(null,G__52118,G__52119));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg51596 = (function (){var G__52122 = ctx;
var G__52123 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52122,G__52123) : sci.impl.evaluator.eval.call(null,G__52122,G__52123));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg51597 = (function (){var G__52127 = ctx;
var G__52128 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52127,G__52128) : sci.impl.evaluator.eval.call(null,G__52127,G__52128));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg51598 = (function (){var G__52129 = ctx;
var G__52130 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52129,G__52130) : sci.impl.evaluator.eval.call(null,G__52129,G__52130));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg51599 = (function (){var G__52131 = ctx;
var G__52132 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52131,G__52132) : sci.impl.evaluator.eval.call(null,G__52131,G__52132));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg51600 = (function (){var G__52133 = ctx;
var G__52134 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52133,G__52134) : sci.impl.evaluator.eval.call(null,G__52133,G__52134));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg51601 = (function (){var G__52135 = ctx;
var G__52136 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52135,G__52136) : sci.impl.evaluator.eval.call(null,G__52135,G__52136));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg51602 = (function (){var G__52137 = ctx;
var G__52138 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52137,G__52138) : sci.impl.evaluator.eval.call(null,G__52137,G__52138));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg51603 = (function (){var G__52143 = ctx;
var G__52144 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52143,G__52144) : sci.impl.evaluator.eval.call(null,G__52143,G__52144));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg51604 = (function (){var G__52146 = ctx;
var G__52147 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52146,G__52147) : sci.impl.evaluator.eval.call(null,G__52146,G__52147));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg51605 = (function (){var G__52155 = ctx;
var G__52156 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52155,G__52156) : sci.impl.evaluator.eval.call(null,G__52155,G__52156));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg51606 = (function (){var G__52157 = ctx;
var G__52158 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52157,G__52158) : sci.impl.evaluator.eval.call(null,G__52157,G__52158));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg51588,arg51589,arg51590,arg51591,arg51592,arg51593,arg51594,arg51595,arg51596,arg51597,arg51598,arg51599,arg51600,arg51601,arg51602,arg51603,arg51604,arg51605,arg51606) : f.call(null,arg51588,arg51589,arg51590,arg51591,arg51592,arg51593,arg51594,arg51595,arg51596,arg51597,arg51598,arg51599,arg51600,arg51601,arg51602,arg51603,arg51604,arg51605,arg51606));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50817_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__50817_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__50817_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__52165 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__52165)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__52165)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__52165)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__52165)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__52165)){
return sci.impl.evaluator.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__52165)){
return sci.impl.evaluator.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__52165)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__52165)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__52165)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__52165)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__52165)){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__52165)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__52165)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__52165)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__52165)){
return (new cljs.core.LazySeq(null,(function (){var G__52182 = ctx;
var G__52183 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__52182,G__52183) : sci.impl.evaluator.eval.call(null,G__52182,G__52183));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__52165)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__52165)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__52165)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52165)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.evaluator.eval_call = (function sci$impl$evaluator$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.evaluator.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
return sci.impl.evaluator.eval_static_method_invocation(ctx,expr);
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.evaluator.eval.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
return sci.impl.evaluator.fn_call(ctx,f__$1,cljs.core.rest(expr));
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e52198){if((e52198 instanceof Error)){
var e = e52198;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e52198;

}
}});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5733__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5733__auto__)){
var mm = temp__5733__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,expr){
try{if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
return cljs.core._deref(v);
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__52206 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),G__52206)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"try","try",1380742522),G__52206)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),G__52206)){
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,sci.impl.evaluator.eval_do_STAR_,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"static-access","static-access",-1860919441),G__52206)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref!","deref!",153059469),G__52206)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__52206)){
return ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__52206)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"eval","eval",536963622,null),G__52206)){
if((op === sci.impl.utils.evaluate)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(ctx) : expr.call(null,ctx));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52201_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__52201_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__52201_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52202_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__52202_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__52202_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52203_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__52203_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__52203_SHARP_));
}),expr)),sci.impl.evaluator.handle_meta(ctx,m));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
}
}
}
}
}
}
}
})());
return ret;
}
}catch (e52204){if((e52204 instanceof Error)){
var e = e52204;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var G__52205 = e;
var G__52205__$1 = (((G__52205 == null))?null:cljs.core.ex_data(G__52205));
if((G__52205__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__52205__$1);
}
})(),new cljs.core.Keyword("sci","error","sci/error",-979082803))){
throw e;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
}
} else {
throw e52204;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
