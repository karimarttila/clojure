goog.provide('sci.impl.parser.edamame.syntax_quote');
sci.impl.parser.edamame.syntax_quote.unquote_QMARK_ = (function sci$impl$parser$edamame$syntax_quote$unquote_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null))));
});
sci.impl.parser.edamame.syntax_quote.unquote_splicing_QMARK_ = (function sci$impl$parser$edamame$syntax_quote$unquote_splicing_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null))));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
sci.impl.parser.edamame.syntax_quote.expand_list = (function sci$impl$parser$edamame$syntax_quote$expand_list(ctx,reader,s){
var s__$1 = cljs.core.seq(s);
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first(s__$1);
var ret = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,((sci.impl.parser.edamame.syntax_quote.unquote_QMARK_(item))?(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),(new cljs.core.List(null,cljs.core.second(item),null,(1),null)),(2),null)):((sci.impl.parser.edamame.syntax_quote.unquote_splicing_QMARK_(item))?cljs.core.second(item):(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),(new cljs.core.List(null,(sci.impl.parser.edamame.syntax_quote.syntax_quote.cljs$core$IFn$_invoke$arity$3 ? sci.impl.parser.edamame.syntax_quote.syntax_quote.cljs$core$IFn$_invoke$arity$3(ctx,reader,item) : sci.impl.parser.edamame.syntax_quote.syntax_quote.call(null,ctx,reader,item)),null,(1),null)),(2),null))
)));
var G__51627 = cljs.core.next(s__$1);
var G__51628 = ret;
s__$1 = G__51627;
r = G__51628;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(r));
}
break;
}
});
sci.impl.parser.edamame.syntax_quote.syntax_quote_coll = (function sci$impl$parser$edamame$syntax_quote$syntax_quote_coll(ctx,reader,type,coll){
var res = (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),sci.impl.parser.edamame.syntax_quote.expand_list(ctx,reader,coll)),null,(1),null)),(2),null)),null,(1),null)),(2),null));
if(cljs.core.truth_(type)){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),(new cljs.core.List(null,type,(new cljs.core.List(null,res,null,(1),null)),(2),null)),(3),null));
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
sci.impl.parser.edamame.syntax_quote.map_func = (function sci$impl$parser$edamame$syntax_quote$map_func(coll){
if((cljs.core.count(coll) >= (16))){
return new cljs.core.Symbol("clojure.core","hash-map","clojure.core/hash-map",338908405,null);
} else {
return new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null);
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
sci.impl.parser.edamame.syntax_quote.flatten_map = (function sci$impl$parser$edamame$syntax_quote$flatten_map(form){
var s = cljs.core.seq(form);
var key_vals = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first(s);
var G__51629 = cljs.core.next(s);
var G__51630 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(key_vals,cljs.core.key(e)),cljs.core.val(e));
s = G__51629;
key_vals = G__51630;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(key_vals));
}
break;
}
});
sci.impl.parser.edamame.syntax_quote.syntax_quote_STAR_ = (function sci$impl$parser$edamame$syntax_quote$syntax_quote_STAR_(p__51409,reader,form){
var map__51410 = p__51409;
var map__51410__$1 = (((((!((map__51410 == null))))?(((((map__51410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51410):map__51410);
var ctx = map__51410__$1;
var gensyms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword(null,"gensyms","gensyms",248713782));
if(cljs.core.special_symbol_QMARK_(form)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null));
} else {
if((form instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,(function (){var sym_name = cljs.core.name(form);
if(cljs.core.special_symbol_QMARK_(form)){
return form;
} else {
if(clojure.string.ends_with_QMARK_(sym_name,"#")){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gensyms),form);
if(cljs.core.truth_(temp__5733__auto__)){
var generated = temp__5733__auto__;
return generated;
} else {
var n = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_name,(0),(((sym_name).length) - (1)));
var generated = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([n,"__"].join(''));
var generated__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(generated),"__auto__"].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gensyms,cljs.core.assoc,form,generated__$1);

return generated__$1;
}
} else {
var f = new cljs.core.Keyword(null,"resolve-symbol","resolve-symbol",-319166964).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx));
var fexpr__51416 = (function (){var or__4126__auto__ = f;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
return (fexpr__51416.cljs$core$IFn$_invoke$arity$1 ? fexpr__51416.cljs$core$IFn$_invoke$arity$1(form) : fexpr__51416.call(null,form));

}
}
})(),null,(1),null)),(2),null));
} else {
if(sci.impl.parser.edamame.syntax_quote.unquote_QMARK_(form)){
return cljs.core.second(form);
} else {
if(sci.impl.parser.edamame.syntax_quote.unquote_splicing_QMARK_(form)){
throw (new Error("unquote-splice not in list"));
} else {
if(cljs.core.coll_QMARK_(form)){
if((form instanceof cljs.core.IRecord)){
return form;
} else {
if(cljs.core.map_QMARK_(form)){
return sci.impl.parser.edamame.syntax_quote.syntax_quote_coll(ctx,reader,sci.impl.parser.edamame.syntax_quote.map_func(form),sci.impl.parser.edamame.syntax_quote.flatten_map(form));
} else {
if(cljs.core.vector_QMARK_(form)){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),(new cljs.core.List(null,sci.impl.parser.edamame.syntax_quote.syntax_quote_coll(ctx,reader,null,form),null,(1),null)),(2),null));
} else {
if(cljs.core.set_QMARK_(form)){
return sci.impl.parser.edamame.syntax_quote.syntax_quote_coll(ctx,reader,new cljs.core.Symbol("clojure.core","hash-set","clojure.core/hash-set",1229125967,null),form);
} else {
if(((cljs.core.seq_QMARK_(form)) || (cljs.core.list_QMARK_(form)))){
var seq = cljs.core.seq(form);
if(seq){
return sci.impl.parser.edamame.syntax_quote.syntax_quote_coll(ctx,reader,null,seq);
} else {
return cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null));
}
} else {
throw (new Error("Unknown Collection type"));

}
}
}
}
}
} else {
if((((form instanceof cljs.core.Keyword)) || (typeof form === 'number') || (cljs.core.char_QMARK_(form)) || (typeof form === 'string') || ((form == null)) || (cljs.core.boolean_QMARK_(form)) || (cljs.core.regexp_QMARK_(form)))){
return form;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null));

}
}
}
}
}
}
});
sci.impl.parser.edamame.syntax_quote.add_meta = (function sci$impl$parser$edamame$syntax_quote$add_meta(ctx,reader,form,ret){
if((((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(form),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0))):false)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),(new cljs.core.List(null,ret,(new cljs.core.List(null,sci.impl.parser.edamame.syntax_quote.syntax_quote_STAR_(ctx,reader,cljs.core.meta(form)),null,(1),null)),(2),null)),(3),null));
} else {
return ret;
}
});
sci.impl.parser.edamame.syntax_quote.syntax_quote = (function sci$impl$parser$edamame$syntax_quote$syntax_quote(ctx,reader,form){
var ret = sci.impl.parser.edamame.syntax_quote.syntax_quote_STAR_(ctx,reader,form);
return sci.impl.parser.edamame.syntax_quote.add_meta(ctx,reader,form,ret);
});

//# sourceMappingURL=sci.impl.parser.edamame.syntax_quote.js.map
