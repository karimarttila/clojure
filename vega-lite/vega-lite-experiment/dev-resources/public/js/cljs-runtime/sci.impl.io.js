goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__51110 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51111 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51111);

try{var G__51112 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__51112);

return G__51112;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51110);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__51113 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51114 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51114);

try{var G__51115 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__51115);

return G__51115;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51113);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__51118 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51119 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51119);

try{var G__51120 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__51120);

return G__51120;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51118);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51348 = arguments.length;
var i__4737__auto___51349 = (0);
while(true){
if((i__4737__auto___51349 < len__4736__auto___51348)){
args__4742__auto__.push((arguments[i__4737__auto___51349]));

var G__51350 = (i__4737__auto___51349 + (1));
i__4737__auto___51349 = G__51350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51124 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51125 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51126 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51127 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51128 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51129 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51130 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51131 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51128);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51129);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51130);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51131);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51127);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51126);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51125);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51124);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq51121){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51121));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51352 = arguments.length;
var i__4737__auto___51353 = (0);
while(true){
if((i__4737__auto___51353 < len__4736__auto___51352)){
args__4742__auto__.push((arguments[i__4737__auto___51353]));

var G__51354 = (i__4737__auto___51353 + (1));
i__4737__auto___51353 = G__51354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51156 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51157 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51158 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51159 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51160 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51161 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51162 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51163 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51160);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51161);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51162);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51163);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51159);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51158);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51157);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51156);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq51138){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51138));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51355 = arguments.length;
var i__4737__auto___51356 = (0);
while(true){
if((i__4737__auto___51356 < len__4736__auto___51355)){
args__4742__auto__.push((arguments[i__4737__auto___51356]));

var G__51357 = (i__4737__auto___51356 + (1));
i__4737__auto___51356 = G__51357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51172 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51173 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51174 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51175 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51176 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51177 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51178 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51179 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51176);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51177);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51178);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51179);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51175);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51174);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51173);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51172);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq51168){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51168));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51358 = arguments.length;
var i__4737__auto___51359 = (0);
while(true){
if((i__4737__auto___51359 < len__4736__auto___51358)){
args__4742__auto__.push((arguments[i__4737__auto___51359]));

var G__51360 = (i__4737__auto___51359 + (1));
i__4737__auto___51359 = G__51360;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51197 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51198 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51199 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51200 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51201 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51202 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51203 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51204 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51201);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51202);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51203);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51204);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51200);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51199);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51198);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51197);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq51191){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51191));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51361 = arguments.length;
var i__4737__auto___51362 = (0);
while(true){
if((i__4737__auto___51362 < len__4736__auto___51361)){
args__4742__auto__.push((arguments[i__4737__auto___51362]));

var G__51363 = (i__4737__auto___51362 + (1));
i__4737__auto___51362 = G__51363;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51242 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51243 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51244 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51245 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51246 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__51247 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51245);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51246);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51247);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51244);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51243);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51242);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq51206){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51206));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51364 = arguments.length;
var i__4737__auto___51365 = (0);
while(true){
if((i__4737__auto___51365 < len__4736__auto___51364)){
args__4742__auto__.push((arguments[i__4737__auto___51365]));

var G__51366 = (i__4737__auto___51365 + (1));
i__4737__auto___51365 = G__51366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51256 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51257 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51258 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51259 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51260 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51261 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51262 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51263 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51260);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51261);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51262);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51263);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51259);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51258);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51257);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51256);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq51248){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51248));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51379 = arguments.length;
var i__4737__auto___51380 = (0);
while(true){
if((i__4737__auto___51380 < len__4736__auto___51379)){
args__4742__auto__.push((arguments[i__4737__auto___51380]));

var G__51381 = (i__4737__auto___51380 + (1));
i__4737__auto___51380 = G__51381;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__51280 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51281 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51282 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51283 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__51284 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51285 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51286 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51287 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51284);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51285);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51286);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51287);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51283);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51282);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51281);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51280);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq51269){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51269));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51384 = arguments.length;
var i__4737__auto___51385 = (0);
while(true){
if((i__4737__auto___51385 < len__4736__auto___51384)){
args__4742__auto__.push((arguments[i__4737__auto___51385]));

var G__51386 = (i__4737__auto___51385 + (1));
i__4737__auto___51385 = G__51386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__51297__auto__","s__51297__auto__",-867941607,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__51297__auto__","s__51297__auto__",-867941607,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__51297__auto__","s__51297__auto__",-867941607,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq51300){
var G__51301 = cljs.core.first(seq51300);
var seq51300__$1 = cljs.core.next(seq51300);
var G__51302 = cljs.core.first(seq51300__$1);
var seq51300__$2 = cljs.core.next(seq51300__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51301,G__51302,seq51300__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
