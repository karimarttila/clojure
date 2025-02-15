goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,eval_do_STAR_,p__41253,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__41254 = p__41253;
var map__41254__$1 = (((((!((map__41254 == null))))?(((((map__41254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41254):map__41254);
var _m = map__41254__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41254__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var body_count = cljs.core.count(body);
var return$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),body_count))?(function (){var fst = cljs.core.first(body);
return (function (p1__41243_SHARP_){
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(p1__41243_SHARP_,fst) : interpret.call(null,p1__41243_SHARP_,fst));
});
})():(function (p1__41244_SHARP_){
return (eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(p1__41244_SHARP_,body) : eval_do_STAR_.call(null,p1__41244_SHARP_,body));
}));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__41273 = (fixed_arity | (0));
switch (G__41273) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = return$(ctx);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41291 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__41289){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41291,G__41289);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42645 = cljs.core._nth(recur_val,(0));
G__41289 = G__42645;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41307 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__41306){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41307,G__41306);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42648 = cljs.core._nth(recur_val,(0));
G__41306 = G__42648;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41321 = cljs.core._nth(params,(0));
var G__41322 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__41319,G__41320){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41321,G__41319);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41322,G__41320);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42654 = cljs.core._nth(recur_val,(0));
var G__42655 = cljs.core._nth(recur_val,(1));
G__41319 = G__42654;
G__41320 = G__42655;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41332 = cljs.core._nth(params,(0));
var G__41333 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__41330,G__41331){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41332,G__41330);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41333,G__41331);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42659 = cljs.core._nth(recur_val,(0));
var G__42660 = cljs.core._nth(recur_val,(1));
G__41330 = G__42659;
G__41331 = G__42660;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41350 = cljs.core._nth(params,(0));
var G__41351 = cljs.core._nth(params,(1));
var G__41352 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__41347,G__41348,G__41349){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41350,G__41347);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41351,G__41348);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41352,G__41349);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42668 = cljs.core._nth(recur_val,(0));
var G__42669 = cljs.core._nth(recur_val,(1));
var G__42670 = cljs.core._nth(recur_val,(2));
G__41347 = G__42668;
G__41348 = G__42669;
G__41349 = G__42670;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41365 = cljs.core._nth(params,(0));
var G__41366 = cljs.core._nth(params,(1));
var G__41367 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__41362,G__41363,G__41364){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41365,G__41362);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41366,G__41363);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41367,G__41364);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42689 = cljs.core._nth(recur_val,(0));
var G__42690 = cljs.core._nth(recur_val,(1));
var G__42691 = cljs.core._nth(recur_val,(2));
G__41362 = G__42689;
G__41363 = G__42690;
G__41364 = G__42691;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41378 = cljs.core._nth(params,(0));
var G__41379 = cljs.core._nth(params,(1));
var G__41380 = cljs.core._nth(params,(2));
var G__41381 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__41374,G__41375,G__41376,G__41377){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41378,G__41374);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41379,G__41375);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41380,G__41376);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41381,G__41377);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42696 = cljs.core._nth(recur_val,(0));
var G__42697 = cljs.core._nth(recur_val,(1));
var G__42698 = cljs.core._nth(recur_val,(2));
var G__42699 = cljs.core._nth(recur_val,(3));
G__41374 = G__42696;
G__41375 = G__42697;
G__41376 = G__42698;
G__41377 = G__42699;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41395 = cljs.core._nth(params,(0));
var G__41396 = cljs.core._nth(params,(1));
var G__41397 = cljs.core._nth(params,(2));
var G__41398 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__41391,G__41392,G__41393,G__41394){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41395,G__41391);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41396,G__41392);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41397,G__41393);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41398,G__41394);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42704 = cljs.core._nth(recur_val,(0));
var G__42705 = cljs.core._nth(recur_val,(1));
var G__42706 = cljs.core._nth(recur_val,(2));
var G__42707 = cljs.core._nth(recur_val,(3));
G__41391 = G__42704;
G__41392 = G__42705;
G__41393 = G__42706;
G__41394 = G__42707;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41412 = cljs.core._nth(params,(0));
var G__41413 = cljs.core._nth(params,(1));
var G__41414 = cljs.core._nth(params,(2));
var G__41415 = cljs.core._nth(params,(3));
var G__41416 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__41407,G__41408,G__41409,G__41410,G__41411){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41412,G__41407);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41413,G__41408);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41414,G__41409);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41415,G__41410);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41416,G__41411);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42715 = cljs.core._nth(recur_val,(0));
var G__42716 = cljs.core._nth(recur_val,(1));
var G__42717 = cljs.core._nth(recur_val,(2));
var G__42718 = cljs.core._nth(recur_val,(3));
var G__42719 = cljs.core._nth(recur_val,(4));
G__41407 = G__42715;
G__41408 = G__42716;
G__41409 = G__42717;
G__41410 = G__42718;
G__41411 = G__42719;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41425 = cljs.core._nth(params,(0));
var G__41426 = cljs.core._nth(params,(1));
var G__41427 = cljs.core._nth(params,(2));
var G__41428 = cljs.core._nth(params,(3));
var G__41429 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__41420,G__41421,G__41422,G__41423,G__41424){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41425,G__41420);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41426,G__41421);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41427,G__41422);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41428,G__41423);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41429,G__41424);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42725 = cljs.core._nth(recur_val,(0));
var G__42726 = cljs.core._nth(recur_val,(1));
var G__42727 = cljs.core._nth(recur_val,(2));
var G__42728 = cljs.core._nth(recur_val,(3));
var G__42729 = cljs.core._nth(recur_val,(4));
G__41420 = G__42725;
G__41421 = G__42726;
G__41422 = G__42727;
G__41423 = G__42728;
G__41424 = G__42729;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41448 = cljs.core._nth(params,(0));
var G__41449 = cljs.core._nth(params,(1));
var G__41450 = cljs.core._nth(params,(2));
var G__41451 = cljs.core._nth(params,(3));
var G__41452 = cljs.core._nth(params,(4));
var G__41453 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__41442,G__41443,G__41444,G__41445,G__41446,G__41447){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41448,G__41442);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41449,G__41443);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41450,G__41444);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41451,G__41445);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41452,G__41446);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41453,G__41447);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42742 = cljs.core._nth(recur_val,(0));
var G__42743 = cljs.core._nth(recur_val,(1));
var G__42744 = cljs.core._nth(recur_val,(2));
var G__42745 = cljs.core._nth(recur_val,(3));
var G__42746 = cljs.core._nth(recur_val,(4));
var G__42747 = cljs.core._nth(recur_val,(5));
G__41442 = G__42742;
G__41443 = G__42743;
G__41444 = G__42744;
G__41445 = G__42745;
G__41446 = G__42746;
G__41447 = G__42747;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41472 = cljs.core._nth(params,(0));
var G__41473 = cljs.core._nth(params,(1));
var G__41474 = cljs.core._nth(params,(2));
var G__41475 = cljs.core._nth(params,(3));
var G__41476 = cljs.core._nth(params,(4));
var G__41477 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__41466,G__41467,G__41468,G__41469,G__41470,G__41471){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41472,G__41466);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41473,G__41467);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41474,G__41468);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41475,G__41469);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41476,G__41470);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41477,G__41471);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42766 = cljs.core._nth(recur_val,(0));
var G__42767 = cljs.core._nth(recur_val,(1));
var G__42768 = cljs.core._nth(recur_val,(2));
var G__42769 = cljs.core._nth(recur_val,(3));
var G__42770 = cljs.core._nth(recur_val,(4));
var G__42771 = cljs.core._nth(recur_val,(5));
G__41466 = G__42766;
G__41467 = G__42767;
G__41468 = G__42768;
G__41469 = G__42769;
G__41470 = G__42770;
G__41471 = G__42771;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41492 = cljs.core._nth(params,(0));
var G__41493 = cljs.core._nth(params,(1));
var G__41494 = cljs.core._nth(params,(2));
var G__41495 = cljs.core._nth(params,(3));
var G__41496 = cljs.core._nth(params,(4));
var G__41497 = cljs.core._nth(params,(5));
var G__41498 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__41485,G__41486,G__41487,G__41488,G__41489,G__41490,G__41491){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41492,G__41485);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41493,G__41486);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41494,G__41487);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41495,G__41488);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41496,G__41489);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41497,G__41490);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41498,G__41491);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42782 = cljs.core._nth(recur_val,(0));
var G__42783 = cljs.core._nth(recur_val,(1));
var G__42784 = cljs.core._nth(recur_val,(2));
var G__42785 = cljs.core._nth(recur_val,(3));
var G__42786 = cljs.core._nth(recur_val,(4));
var G__42787 = cljs.core._nth(recur_val,(5));
var G__42788 = cljs.core._nth(recur_val,(6));
G__41485 = G__42782;
G__41486 = G__42783;
G__41487 = G__42784;
G__41488 = G__42785;
G__41489 = G__42786;
G__41490 = G__42787;
G__41491 = G__42788;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41515 = cljs.core._nth(params,(0));
var G__41516 = cljs.core._nth(params,(1));
var G__41517 = cljs.core._nth(params,(2));
var G__41518 = cljs.core._nth(params,(3));
var G__41519 = cljs.core._nth(params,(4));
var G__41520 = cljs.core._nth(params,(5));
var G__41521 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__41508,G__41509,G__41510,G__41511,G__41512,G__41513,G__41514){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41515,G__41508);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41516,G__41509);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41517,G__41510);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41518,G__41511);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41519,G__41512);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41520,G__41513);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41521,G__41514);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42796 = cljs.core._nth(recur_val,(0));
var G__42797 = cljs.core._nth(recur_val,(1));
var G__42798 = cljs.core._nth(recur_val,(2));
var G__42799 = cljs.core._nth(recur_val,(3));
var G__42800 = cljs.core._nth(recur_val,(4));
var G__42801 = cljs.core._nth(recur_val,(5));
var G__42802 = cljs.core._nth(recur_val,(6));
G__41508 = G__42796;
G__41509 = G__42797;
G__41510 = G__42798;
G__41511 = G__42799;
G__41512 = G__42800;
G__41513 = G__42801;
G__41514 = G__42802;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41536 = cljs.core._nth(params,(0));
var G__41537 = cljs.core._nth(params,(1));
var G__41538 = cljs.core._nth(params,(2));
var G__41539 = cljs.core._nth(params,(3));
var G__41540 = cljs.core._nth(params,(4));
var G__41541 = cljs.core._nth(params,(5));
var G__41542 = cljs.core._nth(params,(6));
var G__41543 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__41528,G__41529,G__41530,G__41531,G__41532,G__41533,G__41534,G__41535){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41536,G__41528);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41537,G__41529);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41538,G__41530);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41539,G__41531);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41540,G__41532);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41541,G__41533);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41542,G__41534);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41543,G__41535);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42806 = cljs.core._nth(recur_val,(0));
var G__42807 = cljs.core._nth(recur_val,(1));
var G__42808 = cljs.core._nth(recur_val,(2));
var G__42809 = cljs.core._nth(recur_val,(3));
var G__42810 = cljs.core._nth(recur_val,(4));
var G__42811 = cljs.core._nth(recur_val,(5));
var G__42812 = cljs.core._nth(recur_val,(6));
var G__42813 = cljs.core._nth(recur_val,(7));
G__41528 = G__42806;
G__41529 = G__42807;
G__41530 = G__42808;
G__41531 = G__42809;
G__41532 = G__42810;
G__41533 = G__42811;
G__41534 = G__42812;
G__41535 = G__42813;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41566 = cljs.core._nth(params,(0));
var G__41567 = cljs.core._nth(params,(1));
var G__41568 = cljs.core._nth(params,(2));
var G__41569 = cljs.core._nth(params,(3));
var G__41570 = cljs.core._nth(params,(4));
var G__41571 = cljs.core._nth(params,(5));
var G__41572 = cljs.core._nth(params,(6));
var G__41573 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__41558,G__41559,G__41560,G__41561,G__41562,G__41563,G__41564,G__41565){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41566,G__41558);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41567,G__41559);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41568,G__41560);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41569,G__41561);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41570,G__41562);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41571,G__41563);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41572,G__41564);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41573,G__41565);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42819 = cljs.core._nth(recur_val,(0));
var G__42820 = cljs.core._nth(recur_val,(1));
var G__42821 = cljs.core._nth(recur_val,(2));
var G__42822 = cljs.core._nth(recur_val,(3));
var G__42823 = cljs.core._nth(recur_val,(4));
var G__42824 = cljs.core._nth(recur_val,(5));
var G__42825 = cljs.core._nth(recur_val,(6));
var G__42826 = cljs.core._nth(recur_val,(7));
G__41558 = G__42819;
G__41559 = G__42820;
G__41560 = G__42821;
G__41561 = G__42822;
G__41562 = G__42823;
G__41563 = G__42824;
G__41564 = G__42825;
G__41565 = G__42826;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41593 = cljs.core._nth(params,(0));
var G__41594 = cljs.core._nth(params,(1));
var G__41595 = cljs.core._nth(params,(2));
var G__41596 = cljs.core._nth(params,(3));
var G__41597 = cljs.core._nth(params,(4));
var G__41598 = cljs.core._nth(params,(5));
var G__41599 = cljs.core._nth(params,(6));
var G__41600 = cljs.core._nth(params,(7));
var G__41601 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__41584,G__41585,G__41586,G__41587,G__41588,G__41589,G__41590,G__41591,G__41592){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41593,G__41584);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41594,G__41585);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41595,G__41586);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41596,G__41587);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41597,G__41588);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41598,G__41589);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41599,G__41590);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41600,G__41591);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41601,G__41592);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42836 = cljs.core._nth(recur_val,(0));
var G__42837 = cljs.core._nth(recur_val,(1));
var G__42838 = cljs.core._nth(recur_val,(2));
var G__42839 = cljs.core._nth(recur_val,(3));
var G__42840 = cljs.core._nth(recur_val,(4));
var G__42841 = cljs.core._nth(recur_val,(5));
var G__42842 = cljs.core._nth(recur_val,(6));
var G__42843 = cljs.core._nth(recur_val,(7));
var G__42844 = cljs.core._nth(recur_val,(8));
G__41584 = G__42836;
G__41585 = G__42837;
G__41586 = G__42838;
G__41587 = G__42839;
G__41588 = G__42840;
G__41589 = G__42841;
G__41590 = G__42842;
G__41591 = G__42843;
G__41592 = G__42844;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41617 = cljs.core._nth(params,(0));
var G__41618 = cljs.core._nth(params,(1));
var G__41619 = cljs.core._nth(params,(2));
var G__41620 = cljs.core._nth(params,(3));
var G__41621 = cljs.core._nth(params,(4));
var G__41622 = cljs.core._nth(params,(5));
var G__41623 = cljs.core._nth(params,(6));
var G__41624 = cljs.core._nth(params,(7));
var G__41625 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__41608,G__41609,G__41610,G__41611,G__41612,G__41613,G__41614,G__41615,G__41616){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41617,G__41608);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41618,G__41609);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41619,G__41610);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41620,G__41611);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41621,G__41612);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41622,G__41613);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41623,G__41614);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41624,G__41615);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41625,G__41616);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42854 = cljs.core._nth(recur_val,(0));
var G__42855 = cljs.core._nth(recur_val,(1));
var G__42856 = cljs.core._nth(recur_val,(2));
var G__42857 = cljs.core._nth(recur_val,(3));
var G__42858 = cljs.core._nth(recur_val,(4));
var G__42859 = cljs.core._nth(recur_val,(5));
var G__42860 = cljs.core._nth(recur_val,(6));
var G__42861 = cljs.core._nth(recur_val,(7));
var G__42862 = cljs.core._nth(recur_val,(8));
G__41608 = G__42854;
G__41609 = G__42855;
G__41610 = G__42856;
G__41611 = G__42857;
G__41612 = G__42858;
G__41613 = G__42859;
G__41614 = G__42860;
G__41615 = G__42861;
G__41616 = G__42862;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41648 = cljs.core._nth(params,(0));
var G__41649 = cljs.core._nth(params,(1));
var G__41650 = cljs.core._nth(params,(2));
var G__41651 = cljs.core._nth(params,(3));
var G__41652 = cljs.core._nth(params,(4));
var G__41653 = cljs.core._nth(params,(5));
var G__41654 = cljs.core._nth(params,(6));
var G__41655 = cljs.core._nth(params,(7));
var G__41656 = cljs.core._nth(params,(8));
var G__41657 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__41638,G__41639,G__41640,G__41641,G__41642,G__41643,G__41644,G__41645,G__41646,G__41647){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41648,G__41638);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41649,G__41639);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41650,G__41640);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41651,G__41641);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41652,G__41642);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41653,G__41643);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41654,G__41644);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41655,G__41645);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41656,G__41646);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41657,G__41647);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42872 = cljs.core._nth(recur_val,(0));
var G__42873 = cljs.core._nth(recur_val,(1));
var G__42874 = cljs.core._nth(recur_val,(2));
var G__42875 = cljs.core._nth(recur_val,(3));
var G__42876 = cljs.core._nth(recur_val,(4));
var G__42877 = cljs.core._nth(recur_val,(5));
var G__42878 = cljs.core._nth(recur_val,(6));
var G__42879 = cljs.core._nth(recur_val,(7));
var G__42880 = cljs.core._nth(recur_val,(8));
var G__42881 = cljs.core._nth(recur_val,(9));
G__41638 = G__42872;
G__41639 = G__42873;
G__41640 = G__42874;
G__41641 = G__42875;
G__41642 = G__42876;
G__41643 = G__42877;
G__41644 = G__42878;
G__41645 = G__42879;
G__41646 = G__42880;
G__41647 = G__42881;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41677 = cljs.core._nth(params,(0));
var G__41678 = cljs.core._nth(params,(1));
var G__41679 = cljs.core._nth(params,(2));
var G__41680 = cljs.core._nth(params,(3));
var G__41681 = cljs.core._nth(params,(4));
var G__41682 = cljs.core._nth(params,(5));
var G__41683 = cljs.core._nth(params,(6));
var G__41684 = cljs.core._nth(params,(7));
var G__41685 = cljs.core._nth(params,(8));
var G__41686 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__41667,G__41668,G__41669,G__41670,G__41671,G__41672,G__41673,G__41674,G__41675,G__41676){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41677,G__41667);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41678,G__41668);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41679,G__41669);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41680,G__41670);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41681,G__41671);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41682,G__41672);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41683,G__41673);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41684,G__41674);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41685,G__41675);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41686,G__41676);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42889 = cljs.core._nth(recur_val,(0));
var G__42890 = cljs.core._nth(recur_val,(1));
var G__42891 = cljs.core._nth(recur_val,(2));
var G__42892 = cljs.core._nth(recur_val,(3));
var G__42893 = cljs.core._nth(recur_val,(4));
var G__42894 = cljs.core._nth(recur_val,(5));
var G__42895 = cljs.core._nth(recur_val,(6));
var G__42896 = cljs.core._nth(recur_val,(7));
var G__42897 = cljs.core._nth(recur_val,(8));
var G__42898 = cljs.core._nth(recur_val,(9));
G__41667 = G__42889;
G__41668 = G__42890;
G__41669 = G__42891;
G__41670 = G__42892;
G__41671 = G__42893;
G__41672 = G__42894;
G__41673 = G__42895;
G__41674 = G__42896;
G__41675 = G__42897;
G__41676 = G__42898;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41714 = cljs.core._nth(params,(0));
var G__41715 = cljs.core._nth(params,(1));
var G__41716 = cljs.core._nth(params,(2));
var G__41717 = cljs.core._nth(params,(3));
var G__41718 = cljs.core._nth(params,(4));
var G__41719 = cljs.core._nth(params,(5));
var G__41720 = cljs.core._nth(params,(6));
var G__41721 = cljs.core._nth(params,(7));
var G__41722 = cljs.core._nth(params,(8));
var G__41723 = cljs.core._nth(params,(9));
var G__41724 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__41703,G__41704,G__41705,G__41706,G__41707,G__41708,G__41709,G__41710,G__41711,G__41712,G__41713){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41714,G__41703);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41715,G__41704);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41716,G__41705);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41717,G__41706);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41718,G__41707);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41719,G__41708);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41720,G__41709);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41721,G__41710);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41722,G__41711);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41723,G__41712);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41724,G__41713);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42911 = cljs.core._nth(recur_val,(0));
var G__42912 = cljs.core._nth(recur_val,(1));
var G__42913 = cljs.core._nth(recur_val,(2));
var G__42914 = cljs.core._nth(recur_val,(3));
var G__42915 = cljs.core._nth(recur_val,(4));
var G__42916 = cljs.core._nth(recur_val,(5));
var G__42917 = cljs.core._nth(recur_val,(6));
var G__42918 = cljs.core._nth(recur_val,(7));
var G__42919 = cljs.core._nth(recur_val,(8));
var G__42920 = cljs.core._nth(recur_val,(9));
var G__42921 = cljs.core._nth(recur_val,(10));
G__41703 = G__42911;
G__41704 = G__42912;
G__41705 = G__42913;
G__41706 = G__42914;
G__41707 = G__42915;
G__41708 = G__42916;
G__41709 = G__42917;
G__41710 = G__42918;
G__41711 = G__42919;
G__41712 = G__42920;
G__41713 = G__42921;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41766 = cljs.core._nth(params,(0));
var G__41767 = cljs.core._nth(params,(1));
var G__41768 = cljs.core._nth(params,(2));
var G__41769 = cljs.core._nth(params,(3));
var G__41770 = cljs.core._nth(params,(4));
var G__41771 = cljs.core._nth(params,(5));
var G__41772 = cljs.core._nth(params,(6));
var G__41773 = cljs.core._nth(params,(7));
var G__41774 = cljs.core._nth(params,(8));
var G__41775 = cljs.core._nth(params,(9));
var G__41776 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__41755,G__41756,G__41757,G__41758,G__41759,G__41760,G__41761,G__41762,G__41763,G__41764,G__41765){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41766,G__41755);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41767,G__41756);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41768,G__41757);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41769,G__41758);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41770,G__41759);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41771,G__41760);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41772,G__41761);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41773,G__41762);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41774,G__41763);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41775,G__41764);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41776,G__41765);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42929 = cljs.core._nth(recur_val,(0));
var G__42930 = cljs.core._nth(recur_val,(1));
var G__42931 = cljs.core._nth(recur_val,(2));
var G__42932 = cljs.core._nth(recur_val,(3));
var G__42933 = cljs.core._nth(recur_val,(4));
var G__42934 = cljs.core._nth(recur_val,(5));
var G__42935 = cljs.core._nth(recur_val,(6));
var G__42936 = cljs.core._nth(recur_val,(7));
var G__42937 = cljs.core._nth(recur_val,(8));
var G__42938 = cljs.core._nth(recur_val,(9));
var G__42939 = cljs.core._nth(recur_val,(10));
G__41755 = G__42929;
G__41756 = G__42930;
G__41757 = G__42931;
G__41758 = G__42932;
G__41759 = G__42933;
G__41760 = G__42934;
G__41761 = G__42935;
G__41762 = G__42936;
G__41763 = G__42937;
G__41764 = G__42938;
G__41765 = G__42939;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41804 = cljs.core._nth(params,(0));
var G__41805 = cljs.core._nth(params,(1));
var G__41806 = cljs.core._nth(params,(2));
var G__41807 = cljs.core._nth(params,(3));
var G__41808 = cljs.core._nth(params,(4));
var G__41809 = cljs.core._nth(params,(5));
var G__41810 = cljs.core._nth(params,(6));
var G__41811 = cljs.core._nth(params,(7));
var G__41812 = cljs.core._nth(params,(8));
var G__41813 = cljs.core._nth(params,(9));
var G__41814 = cljs.core._nth(params,(10));
var G__41815 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__41792,G__41793,G__41794,G__41795,G__41796,G__41797,G__41798,G__41799,G__41800,G__41801,G__41802,G__41803){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41804,G__41792);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41805,G__41793);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41806,G__41794);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41807,G__41795);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41808,G__41796);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41809,G__41797);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41810,G__41798);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41811,G__41799);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41812,G__41800);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41813,G__41801);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41814,G__41802);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__41815,G__41803);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42951 = cljs.core._nth(recur_val,(0));
var G__42952 = cljs.core._nth(recur_val,(1));
var G__42953 = cljs.core._nth(recur_val,(2));
var G__42954 = cljs.core._nth(recur_val,(3));
var G__42955 = cljs.core._nth(recur_val,(4));
var G__42956 = cljs.core._nth(recur_val,(5));
var G__42957 = cljs.core._nth(recur_val,(6));
var G__42958 = cljs.core._nth(recur_val,(7));
var G__42959 = cljs.core._nth(recur_val,(8));
var G__42960 = cljs.core._nth(recur_val,(9));
var G__42961 = cljs.core._nth(recur_val,(10));
var G__42962 = cljs.core._nth(recur_val,(11));
G__41792 = G__42951;
G__41793 = G__42952;
G__41794 = G__42953;
G__41795 = G__42954;
G__41796 = G__42955;
G__41797 = G__42956;
G__41798 = G__42957;
G__41799 = G__42958;
G__41800 = G__42959;
G__41801 = G__42960;
G__41802 = G__42961;
G__41803 = G__42962;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41836 = cljs.core._nth(params,(0));
var G__41837 = cljs.core._nth(params,(1));
var G__41838 = cljs.core._nth(params,(2));
var G__41839 = cljs.core._nth(params,(3));
var G__41840 = cljs.core._nth(params,(4));
var G__41841 = cljs.core._nth(params,(5));
var G__41842 = cljs.core._nth(params,(6));
var G__41843 = cljs.core._nth(params,(7));
var G__41844 = cljs.core._nth(params,(8));
var G__41845 = cljs.core._nth(params,(9));
var G__41846 = cljs.core._nth(params,(10));
var G__41847 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__41824,G__41825,G__41826,G__41827,G__41828,G__41829,G__41830,G__41831,G__41832,G__41833,G__41834,G__41835){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41836,G__41824);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41837,G__41825);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41838,G__41826);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41839,G__41827);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41840,G__41828);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41841,G__41829);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41842,G__41830);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41843,G__41831);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41844,G__41832);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41845,G__41833);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41846,G__41834);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__41847,G__41835);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42969 = cljs.core._nth(recur_val,(0));
var G__42970 = cljs.core._nth(recur_val,(1));
var G__42971 = cljs.core._nth(recur_val,(2));
var G__42972 = cljs.core._nth(recur_val,(3));
var G__42973 = cljs.core._nth(recur_val,(4));
var G__42974 = cljs.core._nth(recur_val,(5));
var G__42975 = cljs.core._nth(recur_val,(6));
var G__42976 = cljs.core._nth(recur_val,(7));
var G__42977 = cljs.core._nth(recur_val,(8));
var G__42978 = cljs.core._nth(recur_val,(9));
var G__42979 = cljs.core._nth(recur_val,(10));
var G__42980 = cljs.core._nth(recur_val,(11));
G__41824 = G__42969;
G__41825 = G__42970;
G__41826 = G__42971;
G__41827 = G__42972;
G__41828 = G__42973;
G__41829 = G__42974;
G__41830 = G__42975;
G__41831 = G__42976;
G__41832 = G__42977;
G__41833 = G__42978;
G__41834 = G__42979;
G__41835 = G__42980;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41871 = cljs.core._nth(params,(0));
var G__41872 = cljs.core._nth(params,(1));
var G__41873 = cljs.core._nth(params,(2));
var G__41874 = cljs.core._nth(params,(3));
var G__41875 = cljs.core._nth(params,(4));
var G__41876 = cljs.core._nth(params,(5));
var G__41877 = cljs.core._nth(params,(6));
var G__41878 = cljs.core._nth(params,(7));
var G__41879 = cljs.core._nth(params,(8));
var G__41880 = cljs.core._nth(params,(9));
var G__41881 = cljs.core._nth(params,(10));
var G__41882 = cljs.core._nth(params,(11));
var G__41883 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__41858,G__41859,G__41860,G__41861,G__41862,G__41863,G__41864,G__41865,G__41866,G__41867,G__41868,G__41869,G__41870){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41871,G__41858);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41872,G__41859);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41873,G__41860);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41874,G__41861);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41875,G__41862);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41876,G__41863);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41877,G__41864);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41878,G__41865);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41879,G__41866);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41880,G__41867);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41881,G__41868);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__41882,G__41869);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__41883,G__41870);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__42991 = cljs.core._nth(recur_val,(0));
var G__42992 = cljs.core._nth(recur_val,(1));
var G__42993 = cljs.core._nth(recur_val,(2));
var G__42994 = cljs.core._nth(recur_val,(3));
var G__42995 = cljs.core._nth(recur_val,(4));
var G__42996 = cljs.core._nth(recur_val,(5));
var G__42997 = cljs.core._nth(recur_val,(6));
var G__42998 = cljs.core._nth(recur_val,(7));
var G__42999 = cljs.core._nth(recur_val,(8));
var G__43000 = cljs.core._nth(recur_val,(9));
var G__43001 = cljs.core._nth(recur_val,(10));
var G__43002 = cljs.core._nth(recur_val,(11));
var G__43003 = cljs.core._nth(recur_val,(12));
G__41858 = G__42991;
G__41859 = G__42992;
G__41860 = G__42993;
G__41861 = G__42994;
G__41862 = G__42995;
G__41863 = G__42996;
G__41864 = G__42997;
G__41865 = G__42998;
G__41866 = G__42999;
G__41867 = G__43000;
G__41868 = G__43001;
G__41869 = G__43002;
G__41870 = G__43003;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41901 = cljs.core._nth(params,(0));
var G__41902 = cljs.core._nth(params,(1));
var G__41903 = cljs.core._nth(params,(2));
var G__41904 = cljs.core._nth(params,(3));
var G__41905 = cljs.core._nth(params,(4));
var G__41906 = cljs.core._nth(params,(5));
var G__41907 = cljs.core._nth(params,(6));
var G__41908 = cljs.core._nth(params,(7));
var G__41909 = cljs.core._nth(params,(8));
var G__41910 = cljs.core._nth(params,(9));
var G__41911 = cljs.core._nth(params,(10));
var G__41912 = cljs.core._nth(params,(11));
var G__41913 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__41888,G__41889,G__41890,G__41891,G__41892,G__41893,G__41894,G__41895,G__41896,G__41897,G__41898,G__41899,G__41900){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41901,G__41888);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41902,G__41889);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41903,G__41890);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41904,G__41891);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41905,G__41892);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41906,G__41893);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41907,G__41894);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41908,G__41895);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41909,G__41896);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41910,G__41897);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41911,G__41898);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__41912,G__41899);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__41913,G__41900);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43018 = cljs.core._nth(recur_val,(0));
var G__43019 = cljs.core._nth(recur_val,(1));
var G__43020 = cljs.core._nth(recur_val,(2));
var G__43021 = cljs.core._nth(recur_val,(3));
var G__43022 = cljs.core._nth(recur_val,(4));
var G__43023 = cljs.core._nth(recur_val,(5));
var G__43024 = cljs.core._nth(recur_val,(6));
var G__43025 = cljs.core._nth(recur_val,(7));
var G__43026 = cljs.core._nth(recur_val,(8));
var G__43027 = cljs.core._nth(recur_val,(9));
var G__43028 = cljs.core._nth(recur_val,(10));
var G__43029 = cljs.core._nth(recur_val,(11));
var G__43030 = cljs.core._nth(recur_val,(12));
G__41888 = G__43018;
G__41889 = G__43019;
G__41890 = G__43020;
G__41891 = G__43021;
G__41892 = G__43022;
G__41893 = G__43023;
G__41894 = G__43024;
G__41895 = G__43025;
G__41896 = G__43026;
G__41897 = G__43027;
G__41898 = G__43028;
G__41899 = G__43029;
G__41900 = G__43030;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__41943 = cljs.core._nth(params,(0));
var G__41944 = cljs.core._nth(params,(1));
var G__41945 = cljs.core._nth(params,(2));
var G__41946 = cljs.core._nth(params,(3));
var G__41947 = cljs.core._nth(params,(4));
var G__41948 = cljs.core._nth(params,(5));
var G__41949 = cljs.core._nth(params,(6));
var G__41950 = cljs.core._nth(params,(7));
var G__41951 = cljs.core._nth(params,(8));
var G__41952 = cljs.core._nth(params,(9));
var G__41953 = cljs.core._nth(params,(10));
var G__41954 = cljs.core._nth(params,(11));
var G__41955 = cljs.core._nth(params,(12));
var G__41956 = cljs.core._nth(params,(13));
var G__41957 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__41928,G__41929,G__41930,G__41931,G__41932,G__41933,G__41934,G__41935,G__41936,G__41937,G__41938,G__41939,G__41940,G__41941,G__41942){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41943,G__41928);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41944,G__41929);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41945,G__41930);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41946,G__41931);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41947,G__41932);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41948,G__41933);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41949,G__41934);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41950,G__41935);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41951,G__41936);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41952,G__41937);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41953,G__41938);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__41954,G__41939);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__41955,G__41940);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__41956,G__41941);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__41957,G__41942);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43046 = cljs.core._nth(recur_val,(0));
var G__43047 = cljs.core._nth(recur_val,(1));
var G__43048 = cljs.core._nth(recur_val,(2));
var G__43049 = cljs.core._nth(recur_val,(3));
var G__43050 = cljs.core._nth(recur_val,(4));
var G__43051 = cljs.core._nth(recur_val,(5));
var G__43052 = cljs.core._nth(recur_val,(6));
var G__43053 = cljs.core._nth(recur_val,(7));
var G__43054 = cljs.core._nth(recur_val,(8));
var G__43055 = cljs.core._nth(recur_val,(9));
var G__43056 = cljs.core._nth(recur_val,(10));
var G__43057 = cljs.core._nth(recur_val,(11));
var G__43058 = cljs.core._nth(recur_val,(12));
var G__43059 = cljs.core._nth(recur_val,(13));
var G__43060 = cljs.core._nth(recur_val,(14));
G__41928 = G__43046;
G__41929 = G__43047;
G__41930 = G__43048;
G__41931 = G__43049;
G__41932 = G__43050;
G__41933 = G__43051;
G__41934 = G__43052;
G__41935 = G__43053;
G__41936 = G__43054;
G__41937 = G__43055;
G__41938 = G__43056;
G__41939 = G__43057;
G__41940 = G__43058;
G__41941 = G__43059;
G__41942 = G__43060;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__41984 = cljs.core._nth(params,(0));
var G__41985 = cljs.core._nth(params,(1));
var G__41986 = cljs.core._nth(params,(2));
var G__41987 = cljs.core._nth(params,(3));
var G__41988 = cljs.core._nth(params,(4));
var G__41989 = cljs.core._nth(params,(5));
var G__41990 = cljs.core._nth(params,(6));
var G__41991 = cljs.core._nth(params,(7));
var G__41992 = cljs.core._nth(params,(8));
var G__41993 = cljs.core._nth(params,(9));
var G__41994 = cljs.core._nth(params,(10));
var G__41995 = cljs.core._nth(params,(11));
var G__41996 = cljs.core._nth(params,(12));
var G__41997 = cljs.core._nth(params,(13));
var G__41998 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__41969,G__41970,G__41971,G__41972,G__41973,G__41974,G__41975,G__41976,G__41977,G__41978,G__41979,G__41980,G__41981,G__41982,G__41983){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__41984,G__41969);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__41985,G__41970);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__41986,G__41971);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__41987,G__41972);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__41988,G__41973);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__41989,G__41974);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__41990,G__41975);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__41991,G__41976);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__41992,G__41977);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__41993,G__41978);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__41994,G__41979);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__41995,G__41980);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__41996,G__41981);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__41997,G__41982);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__41998,G__41983);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43071 = cljs.core._nth(recur_val,(0));
var G__43072 = cljs.core._nth(recur_val,(1));
var G__43073 = cljs.core._nth(recur_val,(2));
var G__43074 = cljs.core._nth(recur_val,(3));
var G__43075 = cljs.core._nth(recur_val,(4));
var G__43076 = cljs.core._nth(recur_val,(5));
var G__43077 = cljs.core._nth(recur_val,(6));
var G__43078 = cljs.core._nth(recur_val,(7));
var G__43079 = cljs.core._nth(recur_val,(8));
var G__43080 = cljs.core._nth(recur_val,(9));
var G__43081 = cljs.core._nth(recur_val,(10));
var G__43082 = cljs.core._nth(recur_val,(11));
var G__43083 = cljs.core._nth(recur_val,(12));
var G__43084 = cljs.core._nth(recur_val,(13));
var G__43085 = cljs.core._nth(recur_val,(14));
G__41969 = G__43071;
G__41970 = G__43072;
G__41971 = G__43073;
G__41972 = G__43074;
G__41973 = G__43075;
G__41974 = G__43076;
G__41975 = G__43077;
G__41976 = G__43078;
G__41977 = G__43079;
G__41978 = G__43080;
G__41979 = G__43081;
G__41980 = G__43082;
G__41981 = G__43083;
G__41982 = G__43084;
G__41983 = G__43085;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__42030 = cljs.core._nth(params,(0));
var G__42031 = cljs.core._nth(params,(1));
var G__42032 = cljs.core._nth(params,(2));
var G__42033 = cljs.core._nth(params,(3));
var G__42034 = cljs.core._nth(params,(4));
var G__42035 = cljs.core._nth(params,(5));
var G__42036 = cljs.core._nth(params,(6));
var G__42037 = cljs.core._nth(params,(7));
var G__42038 = cljs.core._nth(params,(8));
var G__42039 = cljs.core._nth(params,(9));
var G__42040 = cljs.core._nth(params,(10));
var G__42041 = cljs.core._nth(params,(11));
var G__42042 = cljs.core._nth(params,(12));
var G__42043 = cljs.core._nth(params,(13));
var G__42044 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__42015,G__42016,G__42017,G__42018,G__42019,G__42020,G__42021,G__42022,G__42023,G__42024,G__42025,G__42026,G__42027,G__42028,G__42029){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42030,G__42015);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42031,G__42016);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42032,G__42017);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42033,G__42018);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42034,G__42019);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42035,G__42020);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42036,G__42021);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42037,G__42022);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42038,G__42023);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42039,G__42024);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42040,G__42025);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42041,G__42026);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42042,G__42027);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42043,G__42028);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42044,G__42029);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43094 = cljs.core._nth(recur_val,(0));
var G__43095 = cljs.core._nth(recur_val,(1));
var G__43096 = cljs.core._nth(recur_val,(2));
var G__43097 = cljs.core._nth(recur_val,(3));
var G__43098 = cljs.core._nth(recur_val,(4));
var G__43099 = cljs.core._nth(recur_val,(5));
var G__43100 = cljs.core._nth(recur_val,(6));
var G__43101 = cljs.core._nth(recur_val,(7));
var G__43102 = cljs.core._nth(recur_val,(8));
var G__43103 = cljs.core._nth(recur_val,(9));
var G__43104 = cljs.core._nth(recur_val,(10));
var G__43105 = cljs.core._nth(recur_val,(11));
var G__43106 = cljs.core._nth(recur_val,(12));
var G__43107 = cljs.core._nth(recur_val,(13));
var G__43108 = cljs.core._nth(recur_val,(14));
G__42015 = G__43094;
G__42016 = G__43095;
G__42017 = G__43096;
G__42018 = G__43097;
G__42019 = G__43098;
G__42020 = G__43099;
G__42021 = G__43100;
G__42022 = G__43101;
G__42023 = G__43102;
G__42024 = G__43103;
G__42025 = G__43104;
G__42026 = G__43105;
G__42027 = G__43106;
G__42028 = G__43107;
G__42029 = G__43108;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__42068 = cljs.core._nth(params,(0));
var G__42069 = cljs.core._nth(params,(1));
var G__42070 = cljs.core._nth(params,(2));
var G__42071 = cljs.core._nth(params,(3));
var G__42072 = cljs.core._nth(params,(4));
var G__42073 = cljs.core._nth(params,(5));
var G__42074 = cljs.core._nth(params,(6));
var G__42075 = cljs.core._nth(params,(7));
var G__42076 = cljs.core._nth(params,(8));
var G__42077 = cljs.core._nth(params,(9));
var G__42078 = cljs.core._nth(params,(10));
var G__42079 = cljs.core._nth(params,(11));
var G__42080 = cljs.core._nth(params,(12));
var G__42081 = cljs.core._nth(params,(13));
var G__42082 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__42053,G__42054,G__42055,G__42056,G__42057,G__42058,G__42059,G__42060,G__42061,G__42062,G__42063,G__42064,G__42065,G__42066,G__42067){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42068,G__42053);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42069,G__42054);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42070,G__42055);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42071,G__42056);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42072,G__42057);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42073,G__42058);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42074,G__42059);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42075,G__42060);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42076,G__42061);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42077,G__42062);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42078,G__42063);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42079,G__42064);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42080,G__42065);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42081,G__42066);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42082,G__42067);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43133 = cljs.core._nth(recur_val,(0));
var G__43134 = cljs.core._nth(recur_val,(1));
var G__43135 = cljs.core._nth(recur_val,(2));
var G__43136 = cljs.core._nth(recur_val,(3));
var G__43137 = cljs.core._nth(recur_val,(4));
var G__43138 = cljs.core._nth(recur_val,(5));
var G__43139 = cljs.core._nth(recur_val,(6));
var G__43140 = cljs.core._nth(recur_val,(7));
var G__43141 = cljs.core._nth(recur_val,(8));
var G__43142 = cljs.core._nth(recur_val,(9));
var G__43143 = cljs.core._nth(recur_val,(10));
var G__43144 = cljs.core._nth(recur_val,(11));
var G__43145 = cljs.core._nth(recur_val,(12));
var G__43146 = cljs.core._nth(recur_val,(13));
var G__43147 = cljs.core._nth(recur_val,(14));
G__42053 = G__43133;
G__42054 = G__43134;
G__42055 = G__43135;
G__42056 = G__43136;
G__42057 = G__43137;
G__42058 = G__43138;
G__42059 = G__43139;
G__42060 = G__43140;
G__42061 = G__43141;
G__42062 = G__43142;
G__42063 = G__43143;
G__42064 = G__43144;
G__42065 = G__43145;
G__42066 = G__43146;
G__42067 = G__43147;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__42110 = cljs.core._nth(params,(0));
var G__42111 = cljs.core._nth(params,(1));
var G__42112 = cljs.core._nth(params,(2));
var G__42113 = cljs.core._nth(params,(3));
var G__42114 = cljs.core._nth(params,(4));
var G__42115 = cljs.core._nth(params,(5));
var G__42116 = cljs.core._nth(params,(6));
var G__42117 = cljs.core._nth(params,(7));
var G__42118 = cljs.core._nth(params,(8));
var G__42119 = cljs.core._nth(params,(9));
var G__42120 = cljs.core._nth(params,(10));
var G__42121 = cljs.core._nth(params,(11));
var G__42122 = cljs.core._nth(params,(12));
var G__42123 = cljs.core._nth(params,(13));
var G__42124 = cljs.core._nth(params,(14));
var G__42125 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__42094,G__42095,G__42096,G__42097,G__42098,G__42099,G__42100,G__42101,G__42102,G__42103,G__42104,G__42105,G__42106,G__42107,G__42108,G__42109){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42110,G__42094);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42111,G__42095);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42112,G__42096);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42113,G__42097);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42114,G__42098);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42115,G__42099);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42116,G__42100);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42117,G__42101);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42118,G__42102);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42119,G__42103);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42120,G__42104);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42121,G__42105);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42122,G__42106);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42123,G__42107);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42124,G__42108);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42125,G__42109);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43154 = cljs.core._nth(recur_val,(0));
var G__43155 = cljs.core._nth(recur_val,(1));
var G__43156 = cljs.core._nth(recur_val,(2));
var G__43157 = cljs.core._nth(recur_val,(3));
var G__43158 = cljs.core._nth(recur_val,(4));
var G__43159 = cljs.core._nth(recur_val,(5));
var G__43160 = cljs.core._nth(recur_val,(6));
var G__43161 = cljs.core._nth(recur_val,(7));
var G__43162 = cljs.core._nth(recur_val,(8));
var G__43163 = cljs.core._nth(recur_val,(9));
var G__43164 = cljs.core._nth(recur_val,(10));
var G__43165 = cljs.core._nth(recur_val,(11));
var G__43166 = cljs.core._nth(recur_val,(12));
var G__43167 = cljs.core._nth(recur_val,(13));
var G__43168 = cljs.core._nth(recur_val,(14));
var G__43169 = cljs.core._nth(recur_val,(15));
G__42094 = G__43154;
G__42095 = G__43155;
G__42096 = G__43156;
G__42097 = G__43157;
G__42098 = G__43158;
G__42099 = G__43159;
G__42100 = G__43160;
G__42101 = G__43161;
G__42102 = G__43162;
G__42103 = G__43163;
G__42104 = G__43164;
G__42105 = G__43165;
G__42106 = G__43166;
G__42107 = G__43167;
G__42108 = G__43168;
G__42109 = G__43169;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__42152 = cljs.core._nth(params,(0));
var G__42153 = cljs.core._nth(params,(1));
var G__42154 = cljs.core._nth(params,(2));
var G__42155 = cljs.core._nth(params,(3));
var G__42156 = cljs.core._nth(params,(4));
var G__42157 = cljs.core._nth(params,(5));
var G__42158 = cljs.core._nth(params,(6));
var G__42159 = cljs.core._nth(params,(7));
var G__42160 = cljs.core._nth(params,(8));
var G__42161 = cljs.core._nth(params,(9));
var G__42162 = cljs.core._nth(params,(10));
var G__42163 = cljs.core._nth(params,(11));
var G__42164 = cljs.core._nth(params,(12));
var G__42165 = cljs.core._nth(params,(13));
var G__42166 = cljs.core._nth(params,(14));
var G__42167 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__42136,G__42137,G__42138,G__42139,G__42140,G__42141,G__42142,G__42143,G__42144,G__42145,G__42146,G__42147,G__42148,G__42149,G__42150,G__42151){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42152,G__42136);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42153,G__42137);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42154,G__42138);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42155,G__42139);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42156,G__42140);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42157,G__42141);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42158,G__42142);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42159,G__42143);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42160,G__42144);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42161,G__42145);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42162,G__42146);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42163,G__42147);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42164,G__42148);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42165,G__42149);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42166,G__42150);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42167,G__42151);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43232 = cljs.core._nth(recur_val,(0));
var G__43233 = cljs.core._nth(recur_val,(1));
var G__43234 = cljs.core._nth(recur_val,(2));
var G__43235 = cljs.core._nth(recur_val,(3));
var G__43236 = cljs.core._nth(recur_val,(4));
var G__43237 = cljs.core._nth(recur_val,(5));
var G__43238 = cljs.core._nth(recur_val,(6));
var G__43239 = cljs.core._nth(recur_val,(7));
var G__43240 = cljs.core._nth(recur_val,(8));
var G__43241 = cljs.core._nth(recur_val,(9));
var G__43242 = cljs.core._nth(recur_val,(10));
var G__43243 = cljs.core._nth(recur_val,(11));
var G__43244 = cljs.core._nth(recur_val,(12));
var G__43245 = cljs.core._nth(recur_val,(13));
var G__43246 = cljs.core._nth(recur_val,(14));
var G__43247 = cljs.core._nth(recur_val,(15));
G__42136 = G__43232;
G__42137 = G__43233;
G__42138 = G__43234;
G__42139 = G__43235;
G__42140 = G__43236;
G__42141 = G__43237;
G__42142 = G__43238;
G__42143 = G__43239;
G__42144 = G__43240;
G__42145 = G__43241;
G__42146 = G__43242;
G__42147 = G__43243;
G__42148 = G__43244;
G__42149 = G__43245;
G__42150 = G__43246;
G__42151 = G__43247;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__42209 = cljs.core._nth(params,(0));
var G__42210 = cljs.core._nth(params,(1));
var G__42211 = cljs.core._nth(params,(2));
var G__42212 = cljs.core._nth(params,(3));
var G__42213 = cljs.core._nth(params,(4));
var G__42214 = cljs.core._nth(params,(5));
var G__42215 = cljs.core._nth(params,(6));
var G__42216 = cljs.core._nth(params,(7));
var G__42217 = cljs.core._nth(params,(8));
var G__42218 = cljs.core._nth(params,(9));
var G__42219 = cljs.core._nth(params,(10));
var G__42220 = cljs.core._nth(params,(11));
var G__42221 = cljs.core._nth(params,(12));
var G__42222 = cljs.core._nth(params,(13));
var G__42223 = cljs.core._nth(params,(14));
var G__42224 = cljs.core._nth(params,(15));
var G__42225 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__42192,G__42193,G__42194,G__42195,G__42196,G__42197,G__42198,G__42199,G__42200,G__42201,G__42202,G__42203,G__42204,G__42205,G__42206,G__42207,G__42208){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42209,G__42192);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42210,G__42193);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42211,G__42194);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42212,G__42195);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42213,G__42196);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42214,G__42197);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42215,G__42198);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42216,G__42199);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42217,G__42200);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42218,G__42201);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42219,G__42202);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42220,G__42203);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42221,G__42204);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42222,G__42205);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42223,G__42206);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42224,G__42207);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__42225,G__42208);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43316 = cljs.core._nth(recur_val,(0));
var G__43317 = cljs.core._nth(recur_val,(1));
var G__43318 = cljs.core._nth(recur_val,(2));
var G__43319 = cljs.core._nth(recur_val,(3));
var G__43320 = cljs.core._nth(recur_val,(4));
var G__43321 = cljs.core._nth(recur_val,(5));
var G__43322 = cljs.core._nth(recur_val,(6));
var G__43323 = cljs.core._nth(recur_val,(7));
var G__43324 = cljs.core._nth(recur_val,(8));
var G__43325 = cljs.core._nth(recur_val,(9));
var G__43326 = cljs.core._nth(recur_val,(10));
var G__43327 = cljs.core._nth(recur_val,(11));
var G__43328 = cljs.core._nth(recur_val,(12));
var G__43329 = cljs.core._nth(recur_val,(13));
var G__43330 = cljs.core._nth(recur_val,(14));
var G__43331 = cljs.core._nth(recur_val,(15));
var G__43332 = cljs.core._nth(recur_val,(16));
G__42192 = G__43316;
G__42193 = G__43317;
G__42194 = G__43318;
G__42195 = G__43319;
G__42196 = G__43320;
G__42197 = G__43321;
G__42198 = G__43322;
G__42199 = G__43323;
G__42200 = G__43324;
G__42201 = G__43325;
G__42202 = G__43326;
G__42203 = G__43327;
G__42204 = G__43328;
G__42205 = G__43329;
G__42206 = G__43330;
G__42207 = G__43331;
G__42208 = G__43332;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__42252 = cljs.core._nth(params,(0));
var G__42253 = cljs.core._nth(params,(1));
var G__42254 = cljs.core._nth(params,(2));
var G__42255 = cljs.core._nth(params,(3));
var G__42256 = cljs.core._nth(params,(4));
var G__42257 = cljs.core._nth(params,(5));
var G__42258 = cljs.core._nth(params,(6));
var G__42259 = cljs.core._nth(params,(7));
var G__42260 = cljs.core._nth(params,(8));
var G__42261 = cljs.core._nth(params,(9));
var G__42262 = cljs.core._nth(params,(10));
var G__42263 = cljs.core._nth(params,(11));
var G__42264 = cljs.core._nth(params,(12));
var G__42265 = cljs.core._nth(params,(13));
var G__42266 = cljs.core._nth(params,(14));
var G__42267 = cljs.core._nth(params,(15));
var G__42268 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__42235,G__42236,G__42237,G__42238,G__42239,G__42240,G__42241,G__42242,G__42243,G__42244,G__42245,G__42246,G__42247,G__42248,G__42249,G__42250,G__42251){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42252,G__42235);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42253,G__42236);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42254,G__42237);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42255,G__42238);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42256,G__42239);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42257,G__42240);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42258,G__42241);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42259,G__42242);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42260,G__42243);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42261,G__42244);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42262,G__42245);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42263,G__42246);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42264,G__42247);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42265,G__42248);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42266,G__42249);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42267,G__42250);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__42268,G__42251);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43405 = cljs.core._nth(recur_val,(0));
var G__43406 = cljs.core._nth(recur_val,(1));
var G__43407 = cljs.core._nth(recur_val,(2));
var G__43408 = cljs.core._nth(recur_val,(3));
var G__43409 = cljs.core._nth(recur_val,(4));
var G__43410 = cljs.core._nth(recur_val,(5));
var G__43411 = cljs.core._nth(recur_val,(6));
var G__43412 = cljs.core._nth(recur_val,(7));
var G__43413 = cljs.core._nth(recur_val,(8));
var G__43414 = cljs.core._nth(recur_val,(9));
var G__43415 = cljs.core._nth(recur_val,(10));
var G__43416 = cljs.core._nth(recur_val,(11));
var G__43417 = cljs.core._nth(recur_val,(12));
var G__43418 = cljs.core._nth(recur_val,(13));
var G__43419 = cljs.core._nth(recur_val,(14));
var G__43420 = cljs.core._nth(recur_val,(15));
var G__43421 = cljs.core._nth(recur_val,(16));
G__42235 = G__43405;
G__42236 = G__43406;
G__42237 = G__43407;
G__42238 = G__43408;
G__42239 = G__43409;
G__42240 = G__43410;
G__42241 = G__43411;
G__42242 = G__43412;
G__42243 = G__43413;
G__42244 = G__43414;
G__42245 = G__43415;
G__42246 = G__43416;
G__42247 = G__43417;
G__42248 = G__43418;
G__42249 = G__43419;
G__42250 = G__43420;
G__42251 = G__43421;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__42294 = cljs.core._nth(params,(0));
var G__42295 = cljs.core._nth(params,(1));
var G__42296 = cljs.core._nth(params,(2));
var G__42297 = cljs.core._nth(params,(3));
var G__42298 = cljs.core._nth(params,(4));
var G__42299 = cljs.core._nth(params,(5));
var G__42300 = cljs.core._nth(params,(6));
var G__42301 = cljs.core._nth(params,(7));
var G__42302 = cljs.core._nth(params,(8));
var G__42303 = cljs.core._nth(params,(9));
var G__42304 = cljs.core._nth(params,(10));
var G__42305 = cljs.core._nth(params,(11));
var G__42306 = cljs.core._nth(params,(12));
var G__42307 = cljs.core._nth(params,(13));
var G__42308 = cljs.core._nth(params,(14));
var G__42309 = cljs.core._nth(params,(15));
var G__42310 = cljs.core._nth(params,(16));
var G__42311 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__42276,G__42277,G__42278,G__42279,G__42280,G__42281,G__42282,G__42283,G__42284,G__42285,G__42286,G__42287,G__42288,G__42289,G__42290,G__42291,G__42292,G__42293){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42294,G__42276);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42295,G__42277);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42296,G__42278);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42297,G__42279);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42298,G__42280);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42299,G__42281);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42300,G__42282);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42301,G__42283);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42302,G__42284);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42303,G__42285);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42304,G__42286);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42305,G__42287);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42306,G__42288);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42307,G__42289);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42308,G__42290);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42309,G__42291);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__42310,G__42292);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__42311,G__42293);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43502 = cljs.core._nth(recur_val,(0));
var G__43503 = cljs.core._nth(recur_val,(1));
var G__43504 = cljs.core._nth(recur_val,(2));
var G__43505 = cljs.core._nth(recur_val,(3));
var G__43506 = cljs.core._nth(recur_val,(4));
var G__43507 = cljs.core._nth(recur_val,(5));
var G__43508 = cljs.core._nth(recur_val,(6));
var G__43509 = cljs.core._nth(recur_val,(7));
var G__43510 = cljs.core._nth(recur_val,(8));
var G__43511 = cljs.core._nth(recur_val,(9));
var G__43512 = cljs.core._nth(recur_val,(10));
var G__43513 = cljs.core._nth(recur_val,(11));
var G__43514 = cljs.core._nth(recur_val,(12));
var G__43515 = cljs.core._nth(recur_val,(13));
var G__43516 = cljs.core._nth(recur_val,(14));
var G__43517 = cljs.core._nth(recur_val,(15));
var G__43518 = cljs.core._nth(recur_val,(16));
var G__43519 = cljs.core._nth(recur_val,(17));
G__42276 = G__43502;
G__42277 = G__43503;
G__42278 = G__43504;
G__42279 = G__43505;
G__42280 = G__43506;
G__42281 = G__43507;
G__42282 = G__43508;
G__42283 = G__43509;
G__42284 = G__43510;
G__42285 = G__43511;
G__42286 = G__43512;
G__42287 = G__43513;
G__42288 = G__43514;
G__42289 = G__43515;
G__42290 = G__43516;
G__42291 = G__43517;
G__42292 = G__43518;
G__42293 = G__43519;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__42336 = cljs.core._nth(params,(0));
var G__42337 = cljs.core._nth(params,(1));
var G__42338 = cljs.core._nth(params,(2));
var G__42339 = cljs.core._nth(params,(3));
var G__42340 = cljs.core._nth(params,(4));
var G__42341 = cljs.core._nth(params,(5));
var G__42342 = cljs.core._nth(params,(6));
var G__42343 = cljs.core._nth(params,(7));
var G__42344 = cljs.core._nth(params,(8));
var G__42345 = cljs.core._nth(params,(9));
var G__42346 = cljs.core._nth(params,(10));
var G__42347 = cljs.core._nth(params,(11));
var G__42348 = cljs.core._nth(params,(12));
var G__42349 = cljs.core._nth(params,(13));
var G__42350 = cljs.core._nth(params,(14));
var G__42351 = cljs.core._nth(params,(15));
var G__42352 = cljs.core._nth(params,(16));
var G__42353 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__42318,G__42319,G__42320,G__42321,G__42322,G__42323,G__42324,G__42325,G__42326,G__42327,G__42328,G__42329,G__42330,G__42331,G__42332,G__42333,G__42334,G__42335){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42336,G__42318);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42337,G__42319);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42338,G__42320);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42339,G__42321);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42340,G__42322);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42341,G__42323);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42342,G__42324);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42343,G__42325);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42344,G__42326);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42345,G__42327);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42346,G__42328);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42347,G__42329);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42348,G__42330);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42349,G__42331);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42350,G__42332);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42351,G__42333);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__42352,G__42334);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__42353,G__42335);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43592 = cljs.core._nth(recur_val,(0));
var G__43593 = cljs.core._nth(recur_val,(1));
var G__43594 = cljs.core._nth(recur_val,(2));
var G__43595 = cljs.core._nth(recur_val,(3));
var G__43596 = cljs.core._nth(recur_val,(4));
var G__43597 = cljs.core._nth(recur_val,(5));
var G__43598 = cljs.core._nth(recur_val,(6));
var G__43599 = cljs.core._nth(recur_val,(7));
var G__43600 = cljs.core._nth(recur_val,(8));
var G__43601 = cljs.core._nth(recur_val,(9));
var G__43602 = cljs.core._nth(recur_val,(10));
var G__43603 = cljs.core._nth(recur_val,(11));
var G__43604 = cljs.core._nth(recur_val,(12));
var G__43605 = cljs.core._nth(recur_val,(13));
var G__43606 = cljs.core._nth(recur_val,(14));
var G__43607 = cljs.core._nth(recur_val,(15));
var G__43608 = cljs.core._nth(recur_val,(16));
var G__43609 = cljs.core._nth(recur_val,(17));
G__42318 = G__43592;
G__42319 = G__43593;
G__42320 = G__43594;
G__42321 = G__43595;
G__42322 = G__43596;
G__42323 = G__43597;
G__42324 = G__43598;
G__42325 = G__43599;
G__42326 = G__43600;
G__42327 = G__43601;
G__42328 = G__43602;
G__42329 = G__43603;
G__42330 = G__43604;
G__42331 = G__43605;
G__42332 = G__43606;
G__42333 = G__43607;
G__42334 = G__43608;
G__42335 = G__43609;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__42383 = cljs.core._nth(params,(0));
var G__42384 = cljs.core._nth(params,(1));
var G__42385 = cljs.core._nth(params,(2));
var G__42386 = cljs.core._nth(params,(3));
var G__42387 = cljs.core._nth(params,(4));
var G__42388 = cljs.core._nth(params,(5));
var G__42389 = cljs.core._nth(params,(6));
var G__42390 = cljs.core._nth(params,(7));
var G__42391 = cljs.core._nth(params,(8));
var G__42392 = cljs.core._nth(params,(9));
var G__42393 = cljs.core._nth(params,(10));
var G__42394 = cljs.core._nth(params,(11));
var G__42395 = cljs.core._nth(params,(12));
var G__42396 = cljs.core._nth(params,(13));
var G__42397 = cljs.core._nth(params,(14));
var G__42398 = cljs.core._nth(params,(15));
var G__42399 = cljs.core._nth(params,(16));
var G__42400 = cljs.core._nth(params,(17));
var G__42401 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__42364,G__42365,G__42366,G__42367,G__42368,G__42369,G__42370,G__42371,G__42372,G__42373,G__42374,G__42375,G__42376,G__42377,G__42378,G__42379,G__42380,G__42381,G__42382){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42383,G__42364);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42384,G__42365);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42385,G__42366);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42386,G__42367);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42387,G__42368);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42388,G__42369);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42389,G__42370);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42390,G__42371);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42391,G__42372);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42392,G__42373);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42393,G__42374);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42394,G__42375);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42395,G__42376);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42396,G__42377);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42397,G__42378);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42398,G__42379);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__42399,G__42380);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__42400,G__42381);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__42401,G__42382);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43688 = cljs.core._nth(recur_val,(0));
var G__43689 = cljs.core._nth(recur_val,(1));
var G__43690 = cljs.core._nth(recur_val,(2));
var G__43691 = cljs.core._nth(recur_val,(3));
var G__43692 = cljs.core._nth(recur_val,(4));
var G__43693 = cljs.core._nth(recur_val,(5));
var G__43694 = cljs.core._nth(recur_val,(6));
var G__43695 = cljs.core._nth(recur_val,(7));
var G__43696 = cljs.core._nth(recur_val,(8));
var G__43697 = cljs.core._nth(recur_val,(9));
var G__43698 = cljs.core._nth(recur_val,(10));
var G__43699 = cljs.core._nth(recur_val,(11));
var G__43700 = cljs.core._nth(recur_val,(12));
var G__43701 = cljs.core._nth(recur_val,(13));
var G__43702 = cljs.core._nth(recur_val,(14));
var G__43703 = cljs.core._nth(recur_val,(15));
var G__43704 = cljs.core._nth(recur_val,(16));
var G__43705 = cljs.core._nth(recur_val,(17));
var G__43706 = cljs.core._nth(recur_val,(18));
G__42364 = G__43688;
G__42365 = G__43689;
G__42366 = G__43690;
G__42367 = G__43691;
G__42368 = G__43692;
G__42369 = G__43693;
G__42370 = G__43694;
G__42371 = G__43695;
G__42372 = G__43696;
G__42373 = G__43697;
G__42374 = G__43698;
G__42375 = G__43699;
G__42376 = G__43700;
G__42377 = G__43701;
G__42378 = G__43702;
G__42379 = G__43703;
G__42380 = G__43704;
G__42381 = G__43705;
G__42382 = G__43706;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
} else {
var G__42432 = cljs.core._nth(params,(0));
var G__42433 = cljs.core._nth(params,(1));
var G__42434 = cljs.core._nth(params,(2));
var G__42435 = cljs.core._nth(params,(3));
var G__42436 = cljs.core._nth(params,(4));
var G__42437 = cljs.core._nth(params,(5));
var G__42438 = cljs.core._nth(params,(6));
var G__42439 = cljs.core._nth(params,(7));
var G__42440 = cljs.core._nth(params,(8));
var G__42441 = cljs.core._nth(params,(9));
var G__42442 = cljs.core._nth(params,(10));
var G__42443 = cljs.core._nth(params,(11));
var G__42444 = cljs.core._nth(params,(12));
var G__42445 = cljs.core._nth(params,(13));
var G__42446 = cljs.core._nth(params,(14));
var G__42447 = cljs.core._nth(params,(15));
var G__42448 = cljs.core._nth(params,(16));
var G__42449 = cljs.core._nth(params,(17));
var G__42450 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__42413,G__42414,G__42415,G__42416,G__42417,G__42418,G__42419,G__42420,G__42421,G__42422,G__42423,G__42424,G__42425,G__42426,G__42427,G__42428,G__42429,G__42430,G__42431){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__42432,G__42413);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__42433,G__42414);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__42434,G__42415);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__42435,G__42416);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__42436,G__42417);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__42437,G__42418);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__42438,G__42419);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__42439,G__42420);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__42440,G__42421);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__42441,G__42422);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__42442,G__42423);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__42443,G__42424);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__42444,G__42425);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__42445,G__42426);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__42446,G__42427);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__42447,G__42428);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__42448,G__42429);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__42449,G__42430);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__42450,G__42431);
var ctx__40712__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__40713__auto__ = return$(ctx__40712__auto__);
var recur_QMARK___40714__auto__ = (ret__40713__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___40714__auto__){
var recur_val = sci.impl.types.getVal(ret__40713__auto__);
var G__43790 = cljs.core._nth(recur_val,(0));
var G__43791 = cljs.core._nth(recur_val,(1));
var G__43792 = cljs.core._nth(recur_val,(2));
var G__43793 = cljs.core._nth(recur_val,(3));
var G__43794 = cljs.core._nth(recur_val,(4));
var G__43795 = cljs.core._nth(recur_val,(5));
var G__43796 = cljs.core._nth(recur_val,(6));
var G__43797 = cljs.core._nth(recur_val,(7));
var G__43798 = cljs.core._nth(recur_val,(8));
var G__43799 = cljs.core._nth(recur_val,(9));
var G__43800 = cljs.core._nth(recur_val,(10));
var G__43801 = cljs.core._nth(recur_val,(11));
var G__43802 = cljs.core._nth(recur_val,(12));
var G__43803 = cljs.core._nth(recur_val,(13));
var G__43804 = cljs.core._nth(recur_val,(14));
var G__43805 = cljs.core._nth(recur_val,(15));
var G__43806 = cljs.core._nth(recur_val,(16));
var G__43807 = cljs.core._nth(recur_val,(17));
var G__43808 = cljs.core._nth(recur_val,(18));
G__42413 = G__43790;
G__42414 = G__43791;
G__42415 = G__43792;
G__42416 = G__43793;
G__42417 = G__43794;
G__42418 = G__43795;
G__42419 = G__43796;
G__42420 = G__43797;
G__42421 = G__43798;
G__42422 = G__43799;
G__42423 = G__43800;
G__42424 = G__43801;
G__42425 = G__43802;
G__42426 = G__43803;
G__42427 = G__43804;
G__42428 = G__43805;
G__42429 = G__43806;
G__42430 = G__43807;
G__42431 = G__43808;
continue;
} else {
return ret__40713__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
}

var G__43846 = cljs.core.next(args_STAR_);
var G__43847 = cljs.core.next(params__$1);
var G__43848 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__43846;
params__$1 = G__43847;
ret = G__43848;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = return$(ctx__$1);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__42474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42474,(0),null);
var vec__42477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42474,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(0),null);
var G__43869 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__43869;
continue;
} else {
var G__43870 = recur_val;
args = G__43870;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43871__i = 0, G__43871__a = new Array(arguments.length -  0);
while (G__43871__i < G__43871__a.length) {G__43871__a[G__43871__i] = arguments[G__43871__i + 0]; ++G__43871__i;}
  args = new cljs.core.IndexedSeq(G__43871__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__43874){
var args = cljs.core.seq(arglist__43874);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
}

var G__43893 = cljs.core.next(args_STAR_);
var G__43894 = cljs.core.next(params__$1);
var G__43895 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__43893;
params__$1 = G__43894;
ret = G__43895;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = return$(ctx__$1);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__42499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42499,(0),null);
var vec__42502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42499,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502,(0),null);
var G__43916 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__43916;
continue;
} else {
var G__43917 = recur_val;
args = G__43917;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43918__i = 0, G__43918__a = new Array(arguments.length -  0);
while (G__43918__i < G__43918__a.length) {G__43918__a[G__43918__i] = arguments[G__43918__i + 0]; ++G__43918__i;}
  args = new cljs.core.IndexedSeq(G__43918__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__43920){
var args = cljs.core.seq(arglist__43920);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
if(cljs.core.truth_(with_meta_QMARK_)){
return cljs.core.with_meta(f,(cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721),min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity], null)));
} else {
return f;
}
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__42509 = cljs.core.meta(f);
var map__42509__$1 = (((((!((map__42509 == null))))?(((((map__42509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42509):map__42509);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42509__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42509__$1,new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4115__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4115__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__42532){
var map__42533 = p__42532;
var map__42533__$1 = (((((!((map__42533 == null))))?(((((map__42533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42533):map__42533);
var f = map__42533__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42533__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42533__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42533__$1,new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_(((cljs.core.not(var$))?fn_name:false))?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44270__i = 0, G__44270__a = new Array(arguments.length -  0);
while (G__44270__i < G__44270__a.length) {G__44270__a[G__44270__i] = arguments[G__44270__i + 0]; ++G__44270__i;}
  args = new cljs.core.IndexedSeq(G__44270__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__44271){
var args = cljs.core.seq(arglist__44271);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42522_SHARP_){
return sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,p1__42522_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__44282__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5733__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5733__auto__)){
var f__$1 = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__44282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44295__i = 0, G__44295__a = new Array(arguments.length -  0);
while (G__44295__i < G__44295__a.length) {G__44295__a[G__44295__i] = arguments[G__44295__i + 0]; ++G__44295__i;}
  args = new cljs.core.IndexedSeq(G__44295__a,0,null);
} 
return G__44282__delegate.call(this,args);};
G__44282.cljs$lang$maxFixedArity = 0;
G__44282.cljs$lang$applyTo = (function (arglist__44297){
var args = cljs.core.seq(arglist__44297);
return G__44282__delegate(args);
});
G__44282.cljs$core$IFn$_invoke$arity$variadic = G__44282__delegate;
return G__44282;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__42524_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42524_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
