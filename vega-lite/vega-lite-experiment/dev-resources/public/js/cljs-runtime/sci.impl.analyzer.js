goog.provide('sci.impl.analyzer');
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});

sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
var G__52225 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__52226 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52225,G__52226) : sci.impl.analyzer.analyze.call(null,G__52225,G__52226));
} else {
var f = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__52229 = f__$1;
var G__52229__$1 = (((G__52229 == null))?null:cljs.core.meta(G__52229));
if((G__52229__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__52229__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52230_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__52230_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__52230_SHARP_));
}),children);
});
sci.impl.analyzer.maybe_destructured = (function sci$impl$analyzer$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__52670 = cljs.core.next(params__$1);
var G__52671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52672 = lets;
params__$1 = G__52670;
new_params = G__52671;
lets = G__52672;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52673 = cljs.core.next(params__$1);
var G__52674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52673;
new_params = G__52674;
lets = G__52675;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__52270,fn_name,p__52271,macro_QMARK_){
var map__52276 = p__52270;
var map__52276__$1 = (((((!((map__52276 == null))))?(((((map__52276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52276):map__52276);
var ctx = map__52276__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__52277 = p__52271;
var seq__52278 = cljs.core.seq(vec__52277);
var first__52279 = cljs.core.first(seq__52278);
var seq__52278__$1 = cljs.core.next(seq__52278);
var binding_vector = first__52279;
var body_exprs = seq__52278__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__52234_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__52234_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__52235_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__52235_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__52295 = sci.impl.analyzer.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__52295__$1 = (((((!((map__52295 == null))))?(((((map__52295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52295):map__52295);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52295__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52295__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.analyze_children(ctx__$1,body);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648),body__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738),params,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100),var_arg_name,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name], null);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?sci.impl.utils.mark_eval((sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m))):m);
return m__$1;
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__52345,macro_QMARK_){
var vec__52347 = p__52345;
var seq__52348 = cljs.core.seq(vec__52347);
var first__52349 = cljs.core.first(seq__52348);
var seq__52348__$1 = cljs.core.next(seq__52348);
var _fn = first__52349;
var first__52349__$1 = cljs.core.first(seq__52348__$1);
var seq__52348__$2 = cljs.core.next(seq__52348__$1);
var name_QMARK_ = first__52349__$1;
var body = seq__52348__$2;
var fn_expr = vec__52347;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52352,body__$2){
var map__52353 = p__52352;
var map__52353__$1 = (((((!((map__52353 == null))))?(((((map__52353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52353):map__52353);
var acc = map__52353__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52353__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52353__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,fn_name,body__$2,macro_QMARK_);
var body__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword("sci.impl","arglist","sci.impl/arglist",2082561957),arglist);
var var_arg_name = new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100).cljs$core$IFn$_invoke$arity$1(body__$4);
var fixed_arity = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_arg_name;
if(cljs.core.truth_(and__4115__auto__)){
return min_varargs;
} else {
return and__4115__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_(((cljs.core.not(var_arg_name))?(function (){var and__4115__auto__ = min_varargs;
if(cljs.core.truth_(and__4115__auto__)){
return (fixed_arity > min_varargs);
} else {
return and__4115__auto__;
}
})():false))){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4214__auto__ = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var y__4215__auto__ = max_fixed;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$4),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,destructured_let_bindings,exprs){
var vec__52359 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52362,p__52363){
var vec__52364 = p__52362;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52364,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52364,(1),null);
var vec__52367 = p__52363;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52367,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52367,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52359,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52359,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return cljs.core.with_meta((function (ctx__$2){
return sci.impl.evaluator.eval_let(ctx__$2,new_let_bindings,body);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),sci.impl.utils.evaluate], null));
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__52372){
var vec__52375 = p__52372;
var seq__52376 = cljs.core.seq(vec__52375);
var first__52377 = cljs.core.first(seq__52376);
var seq__52376__$1 = cljs.core.next(seq__52376);
var _let = first__52377;
var first__52377__$1 = cljs.core.first(seq__52376__$1);
var seq__52376__$2 = cljs.core.next(seq__52376__$1);
var let_bindings = first__52377__$1;
var exprs = seq__52376__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__52380 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52380,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52380,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52380,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52380,(3),null);
var G__52383_52677 = ctx;
var G__52384_52678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__52383_52677,G__52384_52678) : sci.impl.analyzer.expand_declare.call(null,G__52383_52677,G__52384_52678));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
var var_name__$1 = cljs.core.with_meta(var_name,m__$3);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,var_name__$1,(new cljs.core.List(null,init__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__52385){
var vec__52386 = p__52385;
var seq__52387 = cljs.core.seq(vec__52386);
var first__52388 = cljs.core.first(seq__52387);
var seq__52387__$1 = cljs.core.next(seq__52387);
var op = first__52388;
var first__52388__$1 = cljs.core.first(seq__52387__$1);
var seq__52387__$2 = cljs.core.next(seq__52387__$1);
var fn_name = first__52388__$1;
var body = seq__52387__$2;
var expr = vec__52386;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__52390_52679 = ctx;
var G__52391_52680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__52390_52679,G__52391_52680) : sci.impl.analyzer.expand_declare.call(null,G__52390_52679,G__52391_52680));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__52392 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52392,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52392,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5735__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5735__auto__)){
var ds = temp__5735__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5735__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map__$1 = (function (){var G__52410 = ctx;
var G__52411 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52410,G__52411) : sci.impl.analyzer.analyze.call(null,G__52410,G__52411));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__52419 = meta_map__$2;
var G__52419__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52419,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__52419);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52419__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__52419__$1;
}
})());
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name__$1,new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552),true], 0));
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,fn_name__$1,(new cljs.core.List(null,f__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__52439 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52439,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52439,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),(new cljs.core.List(null,(function (){var G__52468 = ctx;
var G__52469 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52468,G__52469) : sci.impl.analyzer.analyze.call(null,G__52468,G__52469));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.expand_if = (function sci$impl$analyzer$expand_if(ctx,p__52474){
var vec__52476 = p__52474;
var seq__52477 = cljs.core.seq(vec__52476);
var first__52478 = cljs.core.first(seq__52477);
var seq__52477__$1 = cljs.core.next(seq__52477);
var _if = first__52478;
var exprs = seq__52477__$1;
var expr = vec__52476;
var G__52479 = cljs.core.count(exprs);
switch (G__52479) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
case (3):
var vec__52480 = sci.impl.analyzer.analyze_children(ctx,exprs);
var cond = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52480,(0),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52480,(1),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52480,(2),null);
return cljs.core.with_meta((function (ctx__$1){
return sci.impl.evaluator.eval_if(ctx__$1,cond,then,else$);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),sci.impl.utils.evaluate], null));

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.expand_case = (function sci$impl$analyzer$expand_case(ctx,expr){
var v = (function (){var G__52487 = ctx;
var G__52488 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52487,G__52488) : sci.impl.analyzer.analyze.call(null,G__52487,G__52488));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__52489 = ctx;
var G__52490 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52489,G__52490) : sci.impl.analyzer.analyze.call(null,G__52489,G__52490));
})()], null):null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v__$1){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__52494 = cases__$1;
var seq__52495 = cljs.core.seq(vec__52494);
var first__52496 = cljs.core.first(seq__52495);
var seq__52495__$1 = cljs.core.next(seq__52495);
var k = first__52496;
var first__52496__$1 = cljs.core.first(seq__52495__$1);
var seq__52495__$2 = cljs.core.next(seq__52495__$1);
var v__$1 = first__52496__$1;
var cases__$2 = seq__52495__$2;
if(cljs.core.list_QMARK_(k)){
var G__52690 = cases__$2;
var G__52691 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__52494,seq__52495,first__52496,seq__52495__$1,k,first__52496__$1,seq__52495__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__52494,seq__52495,first__52496,seq__52495__$1,k,first__52496__$1,seq__52495__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__52690;
ret_map = G__52691;
continue;
} else {
var G__52692 = cases__$2;
var G__52693 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__52692;
ret_map = G__52693;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var ret = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"case-map","case-map",955082964),case_map,new cljs.core.Keyword(null,"case-val","case-val",880926521),v,new cljs.core.Keyword(null,"case-default","case-default",1140470708),default$], null),(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)));
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(ret);
});
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__52497){
var vec__52498 = p__52497;
var seq__52499 = cljs.core.seq(vec__52498);
var first__52500 = cljs.core.first(seq__52499);
var seq__52499__$1 = cljs.core.next(seq__52499);
var _try = first__52500;
var body = seq__52499__$1;
var vec__52502 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr))))){
var G__52694 = exprs__$1;
var G__52695 = body_exprs;
var G__52696 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__52697 = finally_expr;
exprs = G__52694;
body_exprs = G__52695;
catch_exprs = G__52696;
finally_expr = G__52697;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__52698 = exprs__$1;
var G__52699 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__52700 = catch_exprs;
var G__52701 = finally_expr;
exprs = G__52698;
body_exprs = G__52699;
catch_exprs = G__52700;
finally_expr = G__52701;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52502,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52502,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52502,(2),null);
var body__$1 = (function (){var G__52509 = ctx;
var G__52510 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52509,G__52510) : sci.impl.analyzer.analyze.call(null,G__52509,G__52510));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__52512 = c;
var seq__52513 = cljs.core.seq(vec__52512);
var first__52514 = cljs.core.first(seq__52513);
var seq__52513__$1 = cljs.core.next(seq__52513);
var _ = first__52514;
var first__52514__$1 = cljs.core.first(seq__52513__$1);
var seq__52513__$2 = cljs.core.next(seq__52513__$1);
var ex = first__52514__$1;
var first__52514__$2 = cljs.core.first(seq__52513__$2);
var seq__52513__$3 = cljs.core.next(seq__52513__$2);
var binding = first__52514__$2;
var body__$2 = seq__52513__$3;
var temp__5733__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5733__auto__)){
var clazz = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__52516 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__52517 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52516,G__52517) : sci.impl.analyzer.analyze.call(null,G__52516,G__52517));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__52518 = ctx;
var G__52519 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52518,G__52519) : sci.impl.analyzer.analyze.call(null,G__52518,G__52519));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"try","try",1380742522)], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__52521){
var vec__52522 = p__52521;
var seq__52523 = cljs.core.seq(vec__52522);
var first__52524 = cljs.core.first(seq__52523);
var seq__52523__$1 = cljs.core.next(seq__52523);
var _declare = first__52524;
var names = seq__52523__$1;
var expr = vec__52522;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),(function (current_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5733__auto__ = acc.get(name);
if(cljs.core.truth_(temp__5733__auto__)){
var x = temp__5733__auto__;
var temp__5733__auto____$1 = (function (){var G__52525 = x;
var G__52525__$1 = (((G__52525 == null))?null:cljs.core.meta(G__52525));
if((G__52525__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__52525__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var prev_ns = temp__5733__auto____$1;
var current_ns_name = sci.impl.vars.current_ns_name();
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci.impl.vars.getName(prev_ns),current_ns_name)))){
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns_name)].join(''),expr);
} else {
return acc;
}
} else {
return acc;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__52526 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__52526.sci$impl$vars$IVar$unbind$arity$1(null);

return G__52526;
})());
}
}),current_ns,names);
}));
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__52529){
var vec__52531 = p__52529;
var seq__52532 = cljs.core.seq(vec__52531);
var first__52533 = cljs.core.first(seq__52532);
var seq__52532__$1 = cljs.core.next(seq__52532);
var _dot = first__52533;
var first__52533__$1 = cljs.core.first(seq__52532__$1);
var seq__52532__$2 = cljs.core.next(seq__52532__$1);
var instance_expr = first__52533__$1;
var first__52533__$2 = cljs.core.first(seq__52532__$2);
var seq__52532__$3 = cljs.core.next(seq__52532__$2);
var method_expr = first__52533__$2;
var args = seq__52532__$3;
var _expr = vec__52531;
var vec__52534 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__52535 = cljs.core.seq(vec__52534);
var first__52536 = cljs.core.first(seq__52535);
var seq__52535__$1 = cljs.core.next(seq__52535);
var method_expr__$1 = first__52536;
var args__$1 = seq__52535__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5733__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto__)){
var t = temp__5733__auto__;
var clazz = (function (){var or__4126__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_expr__$2 = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,instance_expr__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_expr__$2,null,(1),null)),(new cljs.core.List(null,args__$2,null,(1),null))], 0)))));
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__52539){
var vec__52540 = p__52539;
var seq__52541 = cljs.core.seq(vec__52540);
var first__52542 = cljs.core.first(seq__52541);
var seq__52541__$1 = cljs.core.next(seq__52541);
var method_name = first__52542;
var first__52542__$1 = cljs.core.first(seq__52541__$1);
var seq__52541__$2 = cljs.core.next(seq__52541__$1);
var obj = first__52542__$1;
var args = seq__52541__$2;
var expr = vec__52540;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__52544){
var vec__52545 = p__52544;
var seq__52546 = cljs.core.seq(vec__52545);
var first__52547 = cljs.core.first(seq__52546);
var seq__52546__$1 = cljs.core.next(seq__52546);
var _new = first__52547;
var first__52547__$1 = cljs.core.first(seq__52546__$1);
var seq__52546__$2 = cljs.core.next(seq__52546__$1);
var class_sym = first__52547__$1;
var args = seq__52546__$2;
var _expr = vec__52545;
var temp__5733__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5733__auto__)){
var map__52548 = temp__5733__auto__;
var map__52548__$1 = (((((!((map__52548 == null))))?(((((map__52548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52548):map__52548);
var _opts = map__52548__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(new cljs.core.List(null,constructor$,(new cljs.core.List(null,args__$1,null,(1),null)),(2),null)),(3),null)));
} else {
var temp__5733__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5733__auto____$1)){
var record = temp__5733__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record)),args__$1));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__52553){
var vec__52556 = p__52553;
var seq__52557 = cljs.core.seq(vec__52556);
var first__52558 = cljs.core.first(seq__52557);
var seq__52557__$1 = cljs.core.next(seq__52557);
var constructor_sym = first__52558;
var args = seq__52557__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__52561){
var vec__52562 = p__52561;
var seq__52563 = cljs.core.seq(vec__52562);
var first__52564 = cljs.core.first(seq__52563);
var seq__52563__$1 = cljs.core.next(seq__52563);
var _ns = first__52564;
var first__52564__$1 = cljs.core.first(seq__52563__$1);
var seq__52563__$2 = cljs.core.next(seq__52563__$1);
var ns_name = first__52564__$1;
var exprs = seq__52563__$2;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__52599 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52599,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52599,(1),null);
var vec__52602 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52602,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52602,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__52617 = cljs.core.first(exprs__$3);
var seq__52618 = cljs.core.seq(vec__52617);
var first__52619 = cljs.core.first(seq__52618);
var seq__52618__$1 = cljs.core.next(seq__52618);
var k = first__52619;
var args = seq__52618__$1;
var expr = vec__52617;
var G__52620 = k;
var G__52620__$1 = (((G__52620 instanceof cljs.core.Keyword))?G__52620.fqn:null);
switch (G__52620__$1) {
case "require":
case "use":
var G__52727 = cljs.core.next(exprs__$3);
var G__52728 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args),cljs.core.meta(expr))));
exprs__$3 = G__52727;
ret = G__52728;
continue;

break;
case "import":
var G__52729 = cljs.core.next(exprs__$3);
var G__52730 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),args),cljs.core.meta(expr))));
exprs__$3 = G__52729;
ret = G__52730;
continue;

break;
case "refer-clojure":
var G__52732 = cljs.core.next(exprs__$3);
var G__52733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"refer","refer",676235974,null),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args),cljs.core.meta(expr))));
exprs__$3 = G__52732;
ret = G__52733;
continue;

break;
case "gen-class":
var G__52734 = cljs.core.next(exprs__$3);
var G__52735 = ret;
exprs__$3 = G__52734;
ret = G__52735;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52620__$1)].join('')));

}
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),ret));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__52628){
var vec__52630 = p__52628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52630,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52630,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385),true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__52634){
var vec__52637 = p__52634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637,(2),null);
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.getVal(obj__$1);
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,obj__$2,(new cljs.core.List(null,v__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,top_level_QMARK_){
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_(special_sym)?sci.impl.resolve.check_permission_BANG_(ctx,special_sym,f,null):null);
var f__$1 = (function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})())){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.first(f__$1),cljs.core.second(f__$1),cljs.core.rest(expr)));
} else {
if(cljs.core.truth_(((cljs.core.not(eval_QMARK_))?(function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
})():false))){
var G__52644 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__52644)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__52644)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__52644)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__52644)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__52644)){
return sci.impl.analyzer.expand_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__52644)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__52644)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__52644)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__52644)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__52644)){
var G__52646 = ctx;
var G__52647 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__52646,G__52647) : sci.impl.analyzer.analyze.call(null,G__52646,G__52647));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__52644)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__52644)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__52644)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__52644)){
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__52644)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__52644)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__52644)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__52644)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__52644)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__52644)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__52644)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__52644)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__52644)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__52644)){
return sci.impl.analyzer.expand_try(ctx,expr);
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));

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
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4115__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__4115__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v))
));
return expanded;
} else {
var temp__5733__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5733__auto__)){
var f__$2 = temp__5733__auto__;
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta);
} else {
return sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
}
}
}catch (e52648){if((e52648 instanceof Error)){
var e = e52648;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(cljs.core.cons(f__$1,cljs.core.rest(expr)),cljs.core.meta(expr))));
} else {
throw e52648;

}
}
}
}
} else {
var ret = sci.impl.utils.mark_eval_call.cljs$core$IFn$_invoke$arity$1(sci.impl.analyzer.analyze_children(ctx,expr));
return ret;
}
});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__52654 = arguments.length;
switch (G__52654) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
var ret = ((sci.impl.utils.constant_QMARK_(expr))?expr:(((expr instanceof cljs.core.Symbol))?(function (){var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return sci.impl.utils.merge_meta(v,m);

}
}
})():((cljs.core.record_QMARK_(expr))?expr:((cljs.core.map_QMARK_(expr))?(function (){var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)));
var analyzed_map = ((constant_map_QMARK_)?expr:cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs)));
var analyzed_meta = (cljs.core.truth_(m)?sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m):null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
if(cljs.core.truth_(analyzed_meta__$1)){
return cljs.core.with_meta(analyzed_map,analyzed_meta__$1);
} else {
return analyzed_map;
}
})():((((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr))))?(function (){var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_coll = ((constant_coll_QMARK_)?expr:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),sci.impl.analyzer.analyze_children(ctx,expr)));
var analyzed_meta = (cljs.core.truth_(m)?sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m):null);
var analyzed_meta__$1 = ((((constant_coll_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
if(cljs.core.truth_(analyzed_meta__$1)){
return cljs.core.with_meta(analyzed_coll,analyzed_meta__$1);
} else {
return analyzed_coll;
}
})():((cljs.core.seq_QMARK_(expr))?((cljs.core.seq(expr))?sci.impl.utils.merge_meta(sci.impl.analyzer.analyze_call(ctx,expr,top_level_QMARK_),m):expr):expr
))))));
return ret;
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
