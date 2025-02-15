goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__75209 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__75210 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__75210);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___75359 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___75359)){
var new_db_75360 = temp__5735__auto___75359;
var fexpr__75220_75361 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__75220_75361.cljs$core$IFn$_invoke$arity$1 ? fexpr__75220_75361.cljs$core$IFn$_invoke$arity$1(new_db_75360) : fexpr__75220_75361.call(null,new_db_75360));
} else {
}

var seq__75222 = cljs.core.seq(effects_without_db);
var chunk__75223 = null;
var count__75224 = (0);
var i__75225 = (0);
while(true){
if((i__75225 < count__75224)){
var vec__75248 = chunk__75223.cljs$core$IIndexed$_nth$arity$2(null,i__75225);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75248,(1),null);
var temp__5733__auto___75362 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___75362)){
var effect_fn_75363 = temp__5733__auto___75362;
(effect_fn_75363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_75363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_75363.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__75364 = seq__75222;
var G__75365 = chunk__75223;
var G__75366 = count__75224;
var G__75367 = (i__75225 + (1));
seq__75222 = G__75364;
chunk__75223 = G__75365;
count__75224 = G__75366;
i__75225 = G__75367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75222);
if(temp__5735__auto__){
var seq__75222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75222__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75222__$1);
var G__75368 = cljs.core.chunk_rest(seq__75222__$1);
var G__75369 = c__4556__auto__;
var G__75370 = cljs.core.count(c__4556__auto__);
var G__75371 = (0);
seq__75222 = G__75368;
chunk__75223 = G__75369;
count__75224 = G__75370;
i__75225 = G__75371;
continue;
} else {
var vec__75257 = cljs.core.first(seq__75222__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75257,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75257,(1),null);
var temp__5733__auto___75372 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___75372)){
var effect_fn_75373 = temp__5733__auto___75372;
(effect_fn_75373.cljs$core$IFn$_invoke$arity$1 ? effect_fn_75373.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_75373.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__75374 = cljs.core.next(seq__75222__$1);
var G__75375 = null;
var G__75376 = (0);
var G__75377 = (0);
seq__75222 = G__75374;
chunk__75223 = G__75375;
count__75224 = G__75376;
i__75225 = G__75377;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__74875__auto___75378 = re_frame.interop.now();
var duration__74876__auto___75379 = (end__74875__auto___75378 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__74876__auto___75379,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__74875__auto___75378);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__75209);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___75383 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___75383)){
var new_db_75384 = temp__5735__auto___75383;
var fexpr__75275_75385 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__75275_75385.cljs$core$IFn$_invoke$arity$1 ? fexpr__75275_75385.cljs$core$IFn$_invoke$arity$1(new_db_75384) : fexpr__75275_75385.call(null,new_db_75384));
} else {
}

var seq__75276 = cljs.core.seq(effects_without_db);
var chunk__75277 = null;
var count__75278 = (0);
var i__75279 = (0);
while(true){
if((i__75279 < count__75278)){
var vec__75312 = chunk__75277.cljs$core$IIndexed$_nth$arity$2(null,i__75279);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75312,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75312,(1),null);
var temp__5733__auto___75386 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___75386)){
var effect_fn_75387 = temp__5733__auto___75386;
(effect_fn_75387.cljs$core$IFn$_invoke$arity$1 ? effect_fn_75387.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_75387.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__75388 = seq__75276;
var G__75389 = chunk__75277;
var G__75390 = count__75278;
var G__75391 = (i__75279 + (1));
seq__75276 = G__75388;
chunk__75277 = G__75389;
count__75278 = G__75390;
i__75279 = G__75391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75276);
if(temp__5735__auto__){
var seq__75276__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75276__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75276__$1);
var G__75392 = cljs.core.chunk_rest(seq__75276__$1);
var G__75393 = c__4556__auto__;
var G__75394 = cljs.core.count(c__4556__auto__);
var G__75395 = (0);
seq__75276 = G__75392;
chunk__75277 = G__75393;
count__75278 = G__75394;
i__75279 = G__75395;
continue;
} else {
var vec__75315 = cljs.core.first(seq__75276__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75315,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75315,(1),null);
var temp__5733__auto___75396 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___75396)){
var effect_fn_75397 = temp__5733__auto___75396;
(effect_fn_75397.cljs$core$IFn$_invoke$arity$1 ? effect_fn_75397.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_75397.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__75398 = cljs.core.next(seq__75276__$1);
var G__75399 = null;
var G__75400 = (0);
var G__75401 = (0);
seq__75276 = G__75398;
chunk__75277 = G__75399;
count__75278 = G__75400;
i__75279 = G__75401;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__75318){
var map__75319 = p__75318;
var map__75319__$1 = (((((!((map__75319 == null))))?(((((map__75319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75319):map__75319);
var effect = map__75319__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75319__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75319__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__75321 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__75322 = null;
var count__75323 = (0);
var i__75324 = (0);
while(true){
if((i__75324 < count__75323)){
var effect = chunk__75322.cljs$core$IIndexed$_nth$arity$2(null,i__75324);
re_frame.fx.dispatch_later(effect);


var G__75403 = seq__75321;
var G__75404 = chunk__75322;
var G__75405 = count__75323;
var G__75406 = (i__75324 + (1));
seq__75321 = G__75403;
chunk__75322 = G__75404;
count__75323 = G__75405;
i__75324 = G__75406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75321);
if(temp__5735__auto__){
var seq__75321__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75321__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75321__$1);
var G__75407 = cljs.core.chunk_rest(seq__75321__$1);
var G__75408 = c__4556__auto__;
var G__75409 = cljs.core.count(c__4556__auto__);
var G__75410 = (0);
seq__75321 = G__75407;
chunk__75322 = G__75408;
count__75323 = G__75409;
i__75324 = G__75410;
continue;
} else {
var effect = cljs.core.first(seq__75321__$1);
re_frame.fx.dispatch_later(effect);


var G__75411 = cljs.core.next(seq__75321__$1);
var G__75412 = null;
var G__75413 = (0);
var G__75414 = (0);
seq__75321 = G__75411;
chunk__75322 = G__75412;
count__75323 = G__75413;
i__75324 = G__75414;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__75325 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__75326 = null;
var count__75327 = (0);
var i__75328 = (0);
while(true){
if((i__75328 < count__75327)){
var vec__75335 = chunk__75326.cljs$core$IIndexed$_nth$arity$2(null,i__75328);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75335,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75335,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___75416 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___75416)){
var effect_fn_75417 = temp__5733__auto___75416;
(effect_fn_75417.cljs$core$IFn$_invoke$arity$1 ? effect_fn_75417.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_75417.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__75418 = seq__75325;
var G__75419 = chunk__75326;
var G__75420 = count__75327;
var G__75421 = (i__75328 + (1));
seq__75325 = G__75418;
chunk__75326 = G__75419;
count__75327 = G__75420;
i__75328 = G__75421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75325);
if(temp__5735__auto__){
var seq__75325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75325__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75325__$1);
var G__75423 = cljs.core.chunk_rest(seq__75325__$1);
var G__75424 = c__4556__auto__;
var G__75425 = cljs.core.count(c__4556__auto__);
var G__75426 = (0);
seq__75325 = G__75423;
chunk__75326 = G__75424;
count__75327 = G__75425;
i__75328 = G__75426;
continue;
} else {
var vec__75338 = cljs.core.first(seq__75325__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75338,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75338,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___75427 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___75427)){
var effect_fn_75428 = temp__5733__auto___75427;
(effect_fn_75428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_75428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_75428.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__75430 = cljs.core.next(seq__75325__$1);
var G__75431 = null;
var G__75432 = (0);
var G__75433 = (0);
seq__75325 = G__75430;
chunk__75326 = G__75431;
count__75327 = G__75432;
i__75328 = G__75433;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__75341 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__75342 = null;
var count__75343 = (0);
var i__75344 = (0);
while(true){
if((i__75344 < count__75343)){
var event = chunk__75342.cljs$core$IIndexed$_nth$arity$2(null,i__75344);
re_frame.router.dispatch(event);


var G__75435 = seq__75341;
var G__75436 = chunk__75342;
var G__75437 = count__75343;
var G__75438 = (i__75344 + (1));
seq__75341 = G__75435;
chunk__75342 = G__75436;
count__75343 = G__75437;
i__75344 = G__75438;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75341);
if(temp__5735__auto__){
var seq__75341__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75341__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75341__$1);
var G__75439 = cljs.core.chunk_rest(seq__75341__$1);
var G__75440 = c__4556__auto__;
var G__75441 = cljs.core.count(c__4556__auto__);
var G__75442 = (0);
seq__75341 = G__75439;
chunk__75342 = G__75440;
count__75343 = G__75441;
i__75344 = G__75442;
continue;
} else {
var event = cljs.core.first(seq__75341__$1);
re_frame.router.dispatch(event);


var G__75443 = cljs.core.next(seq__75341__$1);
var G__75444 = null;
var G__75445 = (0);
var G__75446 = (0);
seq__75341 = G__75443;
chunk__75342 = G__75444;
count__75343 = G__75445;
i__75344 = G__75446;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__75355 = cljs.core.seq(value);
var chunk__75356 = null;
var count__75357 = (0);
var i__75358 = (0);
while(true){
if((i__75358 < count__75357)){
var event = chunk__75356.cljs$core$IIndexed$_nth$arity$2(null,i__75358);
clear_event(event);


var G__75448 = seq__75355;
var G__75449 = chunk__75356;
var G__75450 = count__75357;
var G__75451 = (i__75358 + (1));
seq__75355 = G__75448;
chunk__75356 = G__75449;
count__75357 = G__75450;
i__75358 = G__75451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75355);
if(temp__5735__auto__){
var seq__75355__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75355__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75355__$1);
var G__75453 = cljs.core.chunk_rest(seq__75355__$1);
var G__75454 = c__4556__auto__;
var G__75455 = cljs.core.count(c__4556__auto__);
var G__75456 = (0);
seq__75355 = G__75453;
chunk__75356 = G__75454;
count__75357 = G__75455;
i__75358 = G__75456;
continue;
} else {
var event = cljs.core.first(seq__75355__$1);
clear_event(event);


var G__75457 = cljs.core.next(seq__75355__$1);
var G__75458 = null;
var G__75459 = (0);
var G__75460 = (0);
seq__75355 = G__75457;
chunk__75356 = G__75458;
count__75357 = G__75459;
i__75358 = G__75460;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
