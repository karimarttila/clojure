goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50058 = cljs.core.get_global_hierarchy;
return (fexpr__50058.cljs$core$IFn$_invoke$arity$0 ? fexpr__50058.cljs$core$IFn$_invoke$arity$0() : fexpr__50058.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__50059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__50059.cljs$core$IFn$_invoke$arity$1 ? fexpr__50059.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__50059.call(null,ref));
}));
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50061 = cljs.core.get_global_hierarchy;
return (fexpr__50061.cljs$core$IFn$_invoke$arity$0 ? fexpr__50061.cljs$core$IFn$_invoke$arity$0() : fexpr__50061.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50069 = cljs.core.get_global_hierarchy;
return (fexpr__50069.cljs$core$IFn$_invoke$arity$0 ? fexpr__50069.cljs$core$IFn$_invoke$arity$0() : fexpr__50069.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__50096 = null;
var G__50096__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__50077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__50077.cljs$core$IFn$_invoke$arity$2 ? fexpr__50077.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__50077.call(null,ref,f));
});
var G__50096__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__50078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__50078.cljs$core$IFn$_invoke$arity$3 ? fexpr__50078.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__50078.call(null,ref,f,a1));
});
var G__50096__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__50079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__50079.cljs$core$IFn$_invoke$arity$4 ? fexpr__50079.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__50079.call(null,ref,f,a1,a2));
});
var G__50096__5 = (function() { 
var G__50098__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__50098 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__50099__i = 0, G__50099__a = new Array(arguments.length -  4);
while (G__50099__i < G__50099__a.length) {G__50099__a[G__50099__i] = arguments[G__50099__i + 4]; ++G__50099__i;}
  args = new cljs.core.IndexedSeq(G__50099__a,0,null);
} 
return G__50098__delegate.call(this,ref,f,a1,a2,args);};
G__50098.cljs$lang$maxFixedArity = 4;
G__50098.cljs$lang$applyTo = (function (arglist__50101){
var ref = cljs.core.first(arglist__50101);
arglist__50101 = cljs.core.next(arglist__50101);
var f = cljs.core.first(arglist__50101);
arglist__50101 = cljs.core.next(arglist__50101);
var a1 = cljs.core.first(arglist__50101);
arglist__50101 = cljs.core.next(arglist__50101);
var a2 = cljs.core.first(arglist__50101);
var args = cljs.core.rest(arglist__50101);
return G__50098__delegate(ref,f,a1,a2,args);
});
G__50098.cljs$core$IFn$_invoke$arity$variadic = G__50098__delegate;
return G__50098;
})()
;
G__50096 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__50096__2.call(this,ref,f);
case 3:
return G__50096__3.call(this,ref,f,a1);
case 4:
return G__50096__4.call(this,ref,f,a1,a2);
default:
var G__50102 = null;
if (arguments.length > 4) {
var G__50103__i = 0, G__50103__a = new Array(arguments.length -  4);
while (G__50103__i < G__50103__a.length) {G__50103__a[G__50103__i] = arguments[G__50103__i + 4]; ++G__50103__i;}
G__50102 = new cljs.core.IndexedSeq(G__50103__a,0,null);
}
return G__50096__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__50102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50096.cljs$lang$maxFixedArity = 4;
G__50096.cljs$lang$applyTo = G__50096__5.cljs$lang$applyTo;
G__50096.cljs$core$IFn$_invoke$arity$2 = G__50096__2;
G__50096.cljs$core$IFn$_invoke$arity$3 = G__50096__3;
G__50096.cljs$core$IFn$_invoke$arity$4 = G__50096__4;
G__50096.cljs$core$IFn$_invoke$arity$variadic = G__50096__5.cljs$core$IFn$_invoke$arity$variadic;
return G__50096;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__50083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__50083.cljs$core$IFn$_invoke$arity$2 ? fexpr__50083.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__50083.call(null,ref,v));
}));
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__50105__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__50105 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__50107__i = 0, G__50107__a = new Array(arguments.length -  2);
while (G__50107__i < G__50107__a.length) {G__50107__a[G__50107__i] = arguments[G__50107__i + 2]; ++G__50107__i;}
  args = new cljs.core.IndexedSeq(G__50107__a,0,null);
} 
return G__50105__delegate.call(this,ref,f,args);};
G__50105.cljs$lang$maxFixedArity = 2;
G__50105.cljs$lang$applyTo = (function (arglist__50108){
var ref = cljs.core.first(arglist__50108);
arglist__50108 = cljs.core.next(arglist__50108);
var f = cljs.core.first(arglist__50108);
var args = cljs.core.rest(arglist__50108);
return G__50105__delegate(ref,f,args);
});
G__50105.cljs$core$IFn$_invoke$arity$variadic = G__50105__delegate;
return G__50105;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}));
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50109 = arguments.length;
var i__4737__auto___50110 = (0);
while(true){
if((i__4737__auto___50110 < len__4736__auto___50109)){
args__4742__auto__.push((arguments[i__4737__auto___50110]));

var G__50113 = (i__4737__auto___50110 + (1));
i__4737__auto___50110 = G__50113;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq50086){
var G__50088 = cljs.core.first(seq50086);
var seq50086__$1 = cljs.core.next(seq50086);
var G__50089 = cljs.core.first(seq50086__$1);
var seq50086__$2 = cljs.core.next(seq50086__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50088,G__50089,seq50086__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));

//# sourceMappingURL=sci.impl.core_protocols.js.map
