goog.provide('sci.impl.reify');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52663 = arguments.length;
var i__4737__auto___52664 = (0);
while(true){
if((i__4737__auto___52664 < len__4736__auto___52663)){
args__4742__auto__.push((arguments[i__4737__auto___52664]));

var G__52665 = (i__4737__auto___52664 + (1));
i__4737__auto___52664 = G__52665;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,args){
var classes__GT_methods = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,args);
var classes__GT_methods__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52655){
var vec__52656 = p__52655;
var seq__52657 = cljs.core.seq(vec__52656);
var first__52658 = cljs.core.first(seq__52657);
var seq__52657__$1 = cljs.core.next(seq__52657);
var class$ = first__52658;
var methods$ = seq__52657__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),methods$))], null);
}),classes__GT_methods));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify*","cljs.core/reify*",1256833160,null),null,(1),null)),(new cljs.core.List(null,classes__GT_methods__$1,null,(1),null)))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq52649){
var G__52650 = cljs.core.first(seq52649);
var seq52649__$1 = cljs.core.next(seq52649);
var G__52651 = cljs.core.first(seq52649__$1);
var seq52649__$2 = cljs.core.next(seq52649__$1);
var G__52652 = cljs.core.first(seq52649__$2);
var seq52649__$3 = cljs.core.next(seq52649__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52650,G__52651,G__52652,seq52649__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,classes__GT_methods){
var vec__52660 = cljs.core.first(classes__GT_methods);
var interface$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52660,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52660,(1),null);
return sci.impl.types.__GT_Reified(interface$,methods$);
});

//# sourceMappingURL=sci.impl.reify.js.map
