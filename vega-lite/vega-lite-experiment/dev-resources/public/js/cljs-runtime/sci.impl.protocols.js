goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52193 = arguments.length;
var i__4737__auto___52194 = (0);
while(true){
if((i__4737__auto___52194 < len__4736__auto___52193)){
args__4742__auto__.push((arguments[i__4737__auto___52194]));

var G__52195 = (i__4737__auto___52194 + (1));
i__4737__auto___52194 = G__52195;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__51774 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51774,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51774,(1),null);
var vec__51777 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51777,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51777,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51799){
var vec__51800 = p__51799;
var seq__51801 = cljs.core.seq(vec__51800);
var first__51802 = cljs.core.first(seq__51801);
var seq__51801__$1 = cljs.core.next(seq__51801);
var method_name = first__51802;
var ___$2 = seq__51801__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__51742__auto__","x__51742__auto__",1848243726,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51743__auto__","args__51743__auto__",-1958622433,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__51744__auto__","methods__51744__auto__",-145284734,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51742__auto__","x__51742__auto__",1848243726,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__51744__auto__","methods__51744__auto__",-145284734,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51742__auto__","x__51742__auto__",1848243726,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51743__auto__","args__51743__auto__",-1958622433,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__51745__auto__","x__51745__auto__",760282476,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51746__auto__","args__51746__auto__",-1817308912,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__51747__auto__","meta__51747__auto__",-1888938865,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51745__auto__","x__51745__auto__",760282476,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51748__auto__","method__51748__auto__",-1743359856,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__51747__auto__","meta__51747__auto__",-1888938865,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51748__auto__","method__51748__auto__",-1743359856,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51748__auto__","method__51748__auto__",-1743359856,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51745__auto__","x__51745__auto__",760282476,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51746__auto__","args__51746__auto__",-1817308912,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51745__auto__","x__51745__auto__",760282476,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq51755){
var G__51756 = cljs.core.first(seq51755);
var seq51755__$1 = cljs.core.next(seq51755);
var G__51757 = cljs.core.first(seq51755__$1);
var seq51755__$2 = cljs.core.next(seq51755__$1);
var G__51758 = cljs.core.first(seq51755__$2);
var seq51755__$3 = cljs.core.next(seq51755__$2);
var G__51759 = cljs.core.first(seq51755__$3);
var seq51755__$4 = cljs.core.next(seq51755__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51756,G__51757,G__51758,G__51759,seq51755__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52224 = arguments.length;
var i__4737__auto___52227 = (0);
while(true){
if((i__4737__auto___52227 < len__4736__auto___52224)){
args__4742__auto__.push((arguments[i__4737__auto___52227]));

var G__52228 = (i__4737__auto___52227 + (1));
i__4737__auto___52227 = G__52228;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__51863_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__51863_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__51872 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__51872.cljs$core$IFn$_invoke$arity$2 ? fexpr__51872.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__51872.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__51864_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__51864_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51881){
var vec__51884 = p__51881;
var seq__51885 = cljs.core.seq(vec__51884);
var first__51886 = cljs.core.first(seq__51885);
var seq__51885__$1 = cljs.core.next(seq__51885);
var type = first__51886;
var meths = seq__51885__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq51865){
var G__51866 = cljs.core.first(seq51865);
var seq51865__$1 = cljs.core.next(seq51865);
var G__51867 = cljs.core.first(seq51865__$1);
var seq51865__$2 = cljs.core.next(seq51865__$1);
var G__51868 = cljs.core.first(seq51865__$2);
var seq51865__$3 = cljs.core.next(seq51865__$2);
var G__51869 = cljs.core.first(seq51865__$3);
var seq51865__$4 = cljs.core.next(seq51865__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51866,G__51867,G__51868,G__51869,seq51865__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52231 = arguments.length;
var i__4737__auto___52232 = (0);
while(true){
if((i__4737__auto___52232 < len__4736__auto___52231)){
args__4742__auto__.push((arguments[i__4737__auto___52232]));

var G__52233 = (i__4737__auto___52232 + (1));
i__4737__auto___52232 = G__52233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__51930 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__51932 = null;
var count__51933 = (0);
var i__51934 = (0);
while(true){
if((i__51934 < count__51933)){
var vec__52068 = chunk__51932.cljs$core$IIndexed$_nth$arity$2(null,i__51934);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52068,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52068,(1),null);
var proto_ns_52243 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_52244 = sci.impl.vars.getName(proto_ns_52243);
var seq__52073_52245 = cljs.core.seq(mmap);
var chunk__52074_52246 = null;
var count__52075_52247 = (0);
var i__52076_52248 = (0);
while(true){
if((i__52076_52248 < count__52075_52247)){
var vec__52105_52249 = chunk__52074_52246.cljs$core$IIndexed$_nth$arity$2(null,i__52076_52248);
var fn_name_52250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52105_52249,(0),null);
var f_52251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52105_52249,(1),null);
var fn_sym_52252 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_52250));
var env_52253 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52254 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52253,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52244,fn_sym_52252], null));
var multi_method_52255 = cljs.core.deref(multi_method_var_52254);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52255,atype,f_52251);


var G__52256 = seq__52073_52245;
var G__52257 = chunk__52074_52246;
var G__52258 = count__52075_52247;
var G__52259 = (i__52076_52248 + (1));
seq__52073_52245 = G__52256;
chunk__52074_52246 = G__52257;
count__52075_52247 = G__52258;
i__52076_52248 = G__52259;
continue;
} else {
var temp__5735__auto___52260 = cljs.core.seq(seq__52073_52245);
if(temp__5735__auto___52260){
var seq__52073_52261__$1 = temp__5735__auto___52260;
if(cljs.core.chunked_seq_QMARK_(seq__52073_52261__$1)){
var c__4556__auto___52262 = cljs.core.chunk_first(seq__52073_52261__$1);
var G__52263 = cljs.core.chunk_rest(seq__52073_52261__$1);
var G__52264 = c__4556__auto___52262;
var G__52265 = cljs.core.count(c__4556__auto___52262);
var G__52266 = (0);
seq__52073_52245 = G__52263;
chunk__52074_52246 = G__52264;
count__52075_52247 = G__52265;
i__52076_52248 = G__52266;
continue;
} else {
var vec__52124_52267 = cljs.core.first(seq__52073_52261__$1);
var fn_name_52268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52124_52267,(0),null);
var f_52269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52124_52267,(1),null);
var fn_sym_52272 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_52268));
var env_52273 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52274 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52273,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52244,fn_sym_52272], null));
var multi_method_52275 = cljs.core.deref(multi_method_var_52274);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52275,atype,f_52269);


var G__52281 = cljs.core.next(seq__52073_52261__$1);
var G__52282 = null;
var G__52283 = (0);
var G__52284 = (0);
seq__52073_52245 = G__52281;
chunk__52074_52246 = G__52282;
count__52075_52247 = G__52283;
i__52076_52248 = G__52284;
continue;
}
} else {
}
}
break;
}


var G__52285 = seq__51930;
var G__52286 = chunk__51932;
var G__52287 = count__51933;
var G__52288 = (i__51934 + (1));
seq__51930 = G__52285;
chunk__51932 = G__52286;
count__51933 = G__52287;
i__51934 = G__52288;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51930);
if(temp__5735__auto__){
var seq__51930__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51930__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51930__$1);
var G__52289 = cljs.core.chunk_rest(seq__51930__$1);
var G__52290 = c__4556__auto__;
var G__52291 = cljs.core.count(c__4556__auto__);
var G__52292 = (0);
seq__51930 = G__52289;
chunk__51932 = G__52290;
count__51933 = G__52291;
i__51934 = G__52292;
continue;
} else {
var vec__52140 = cljs.core.first(seq__51930__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52140,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52140,(1),null);
var proto_ns_52293 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_52294 = sci.impl.vars.getName(proto_ns_52293);
var seq__52148_52296 = cljs.core.seq(mmap);
var chunk__52149_52297 = null;
var count__52150_52298 = (0);
var i__52151_52299 = (0);
while(true){
if((i__52151_52299 < count__52150_52298)){
var vec__52167_52300 = chunk__52149_52297.cljs$core$IIndexed$_nth$arity$2(null,i__52151_52299);
var fn_name_52301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52167_52300,(0),null);
var f_52302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52167_52300,(1),null);
var fn_sym_52303 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_52301));
var env_52304 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52305 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52304,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52294,fn_sym_52303], null));
var multi_method_52306 = cljs.core.deref(multi_method_var_52305);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52306,atype,f_52302);


var G__52307 = seq__52148_52296;
var G__52308 = chunk__52149_52297;
var G__52309 = count__52150_52298;
var G__52310 = (i__52151_52299 + (1));
seq__52148_52296 = G__52307;
chunk__52149_52297 = G__52308;
count__52150_52298 = G__52309;
i__52151_52299 = G__52310;
continue;
} else {
var temp__5735__auto___52311__$1 = cljs.core.seq(seq__52148_52296);
if(temp__5735__auto___52311__$1){
var seq__52148_52312__$1 = temp__5735__auto___52311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52148_52312__$1)){
var c__4556__auto___52313 = cljs.core.chunk_first(seq__52148_52312__$1);
var G__52314 = cljs.core.chunk_rest(seq__52148_52312__$1);
var G__52315 = c__4556__auto___52313;
var G__52316 = cljs.core.count(c__4556__auto___52313);
var G__52317 = (0);
seq__52148_52296 = G__52314;
chunk__52149_52297 = G__52315;
count__52150_52298 = G__52316;
i__52151_52299 = G__52317;
continue;
} else {
var vec__52170_52318 = cljs.core.first(seq__52148_52312__$1);
var fn_name_52319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52170_52318,(0),null);
var f_52320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52170_52318,(1),null);
var fn_sym_52322 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_52319));
var env_52323 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52324 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52323,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52294,fn_sym_52322], null));
var multi_method_52325 = cljs.core.deref(multi_method_var_52324);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52325,atype,f_52320);


var G__52327 = cljs.core.next(seq__52148_52312__$1);
var G__52328 = null;
var G__52329 = (0);
var G__52330 = (0);
seq__52148_52296 = G__52327;
chunk__52149_52297 = G__52328;
count__52150_52298 = G__52329;
i__52151_52299 = G__52330;
continue;
}
} else {
}
}
break;
}


var G__52331 = cljs.core.next(seq__51930__$1);
var G__52332 = null;
var G__52333 = (0);
var G__52334 = (0);
seq__51930 = G__52331;
chunk__51932 = G__52332;
count__51933 = G__52333;
i__51934 = G__52334;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq51912){
var G__51915 = cljs.core.first(seq51912);
var seq51912__$1 = cljs.core.next(seq51912);
var G__51916 = cljs.core.first(seq51912__$1);
var seq51912__$2 = cljs.core.next(seq51912__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51915,G__51916,seq51912__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52337 = arguments.length;
var i__4737__auto___52338 = (0);
while(true){
if((i__4737__auto___52338 < len__4736__auto___52337)){
args__4742__auto__.push((arguments[i__4737__auto___52338]));

var G__52340 = (i__4737__auto___52338 + (1));
i__4737__auto___52338 = G__52340;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__52175_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__52175_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52184){
var vec__52185 = p__52184;
var seq__52186 = cljs.core.seq(vec__52185);
var first__52187 = cljs.core.first(seq__52186);
var seq__52186__$1 = cljs.core.next(seq__52186);
var proto = first__52187;
var meths = seq__52186__$1;
var protocol_var = (function (){var fexpr__52188 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__52188.cljs$core$IFn$_invoke$arity$2 ? fexpr__52188.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__52188.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__52176_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__52176_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq52177){
var G__52178 = cljs.core.first(seq52177);
var seq52177__$1 = cljs.core.next(seq52177);
var G__52179 = cljs.core.first(seq52177__$1);
var seq52177__$2 = cljs.core.next(seq52177__$1);
var G__52180 = cljs.core.first(seq52177__$2);
var seq52177__$3 = cljs.core.next(seq52177__$2);
var G__52181 = cljs.core.first(seq52177__$3);
var seq52177__$4 = cljs.core.next(seq52177__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52178,G__52179,G__52180,G__52181,seq52177__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.sci$impl$types$IReified$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj):false)):cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj))){
var temp__5733__auto__ = sci.impl.types.getInterface(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var obj_type = temp__5733__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,obj_type);
} else {
return false;
}
} else {
return cljs.core.boolean$(cljs.core.some((function (p1__52189_SHARP_){
return cljs.core.get_method(p1__52189_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var m = cljs.core.meta(clazz);
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(m);
})():false))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,(function (){var G__52191 = x;
var G__52191__$1 = (((G__52191 == null))?null:cljs.core.meta(G__52191));
if((G__52191__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","type","sci.impl/type",1797552241).cljs$core$IFn$_invoke$arity$1(G__52191__$1);
}
})());
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__52192_SHARP_){
return cljs.core.get_method(p1__52192_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
