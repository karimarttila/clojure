goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_72315 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_72315(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_72319 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_72319(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__71533 = coll;
var G__71534 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__71533,G__71534) : shadow.dom.lazy_native_coll_seq.call(null,G__71533,G__71534));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__71547 = arguments.length;
switch (G__71547) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__71550 = arguments.length;
switch (G__71550) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__71554 = arguments.length;
switch (G__71554) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__71558 = arguments.length;
switch (G__71558) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__71560 = arguments.length;
switch (G__71560) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__71566 = arguments.length;
switch (G__71566) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e71567){if((e71567 instanceof Object)){
var e = e71567;
return console.log("didnt support attachEvent",el,e);
} else {
throw e71567;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__71572 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__71573 = null;
var count__71574 = (0);
var i__71575 = (0);
while(true){
if((i__71575 < count__71574)){
var el = chunk__71573.cljs$core$IIndexed$_nth$arity$2(null,i__71575);
var handler_72342__$1 = ((function (seq__71572,chunk__71573,count__71574,i__71575,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71572,chunk__71573,count__71574,i__71575,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72342__$1);


var G__72343 = seq__71572;
var G__72344 = chunk__71573;
var G__72345 = count__71574;
var G__72346 = (i__71575 + (1));
seq__71572 = G__72343;
chunk__71573 = G__72344;
count__71574 = G__72345;
i__71575 = G__72346;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71572);
if(temp__5735__auto__){
var seq__71572__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71572__$1);
var G__72348 = cljs.core.chunk_rest(seq__71572__$1);
var G__72349 = c__4556__auto__;
var G__72350 = cljs.core.count(c__4556__auto__);
var G__72351 = (0);
seq__71572 = G__72348;
chunk__71573 = G__72349;
count__71574 = G__72350;
i__71575 = G__72351;
continue;
} else {
var el = cljs.core.first(seq__71572__$1);
var handler_72352__$1 = ((function (seq__71572,chunk__71573,count__71574,i__71575,el,seq__71572__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71572,chunk__71573,count__71574,i__71575,el,seq__71572__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72352__$1);


var G__72353 = cljs.core.next(seq__71572__$1);
var G__72354 = null;
var G__72355 = (0);
var G__72356 = (0);
seq__71572 = G__72353;
chunk__71573 = G__72354;
count__71574 = G__72355;
i__71575 = G__72356;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__71581 = arguments.length;
switch (G__71581) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__71583 = cljs.core.seq(events);
var chunk__71584 = null;
var count__71585 = (0);
var i__71586 = (0);
while(true){
if((i__71586 < count__71585)){
var vec__71594 = chunk__71584.cljs$core$IIndexed$_nth$arity$2(null,i__71586);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71594,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72361 = seq__71583;
var G__72362 = chunk__71584;
var G__72363 = count__71585;
var G__72364 = (i__71586 + (1));
seq__71583 = G__72361;
chunk__71584 = G__72362;
count__71585 = G__72363;
i__71586 = G__72364;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71583);
if(temp__5735__auto__){
var seq__71583__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71583__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71583__$1);
var G__72366 = cljs.core.chunk_rest(seq__71583__$1);
var G__72367 = c__4556__auto__;
var G__72368 = cljs.core.count(c__4556__auto__);
var G__72369 = (0);
seq__71583 = G__72366;
chunk__71584 = G__72367;
count__71585 = G__72368;
i__71586 = G__72369;
continue;
} else {
var vec__71597 = cljs.core.first(seq__71583__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71597,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72372 = cljs.core.next(seq__71583__$1);
var G__72373 = null;
var G__72374 = (0);
var G__72375 = (0);
seq__71583 = G__72372;
chunk__71584 = G__72373;
count__71585 = G__72374;
i__71586 = G__72375;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__71600 = cljs.core.seq(styles);
var chunk__71601 = null;
var count__71602 = (0);
var i__71603 = (0);
while(true){
if((i__71603 < count__71602)){
var vec__71610 = chunk__71601.cljs$core$IIndexed$_nth$arity$2(null,i__71603);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71610,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72378 = seq__71600;
var G__72379 = chunk__71601;
var G__72380 = count__71602;
var G__72381 = (i__71603 + (1));
seq__71600 = G__72378;
chunk__71601 = G__72379;
count__71602 = G__72380;
i__71603 = G__72381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71600);
if(temp__5735__auto__){
var seq__71600__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71600__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71600__$1);
var G__72385 = cljs.core.chunk_rest(seq__71600__$1);
var G__72386 = c__4556__auto__;
var G__72387 = cljs.core.count(c__4556__auto__);
var G__72388 = (0);
seq__71600 = G__72385;
chunk__71601 = G__72386;
count__71602 = G__72387;
i__71603 = G__72388;
continue;
} else {
var vec__71616 = cljs.core.first(seq__71600__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71616,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72391 = cljs.core.next(seq__71600__$1);
var G__72392 = null;
var G__72393 = (0);
var G__72394 = (0);
seq__71600 = G__72391;
chunk__71601 = G__72392;
count__71602 = G__72393;
i__71603 = G__72394;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__71619_72395 = key;
var G__71619_72396__$1 = (((G__71619_72395 instanceof cljs.core.Keyword))?G__71619_72395.fqn:null);
switch (G__71619_72396__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_72406 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_72406,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_72406,"aria-");
}
})())){
el.setAttribute(ks_72406,value);
} else {
(el[ks_72406] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__71638){
var map__71639 = p__71638;
var map__71639__$1 = (((((!((map__71639 == null))))?(((((map__71639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71639):map__71639);
var props = map__71639__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__71643 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71643,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71643,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71643,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__71646 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__71646,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__71646;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__71651 = arguments.length;
switch (G__71651) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__71653){
var vec__71654 = p__71653;
var seq__71655 = cljs.core.seq(vec__71654);
var first__71656 = cljs.core.first(seq__71655);
var seq__71655__$1 = cljs.core.next(seq__71655);
var nn = first__71656;
var first__71656__$1 = cljs.core.first(seq__71655__$1);
var seq__71655__$2 = cljs.core.next(seq__71655__$1);
var np = first__71656__$1;
var nc = seq__71655__$2;
var node = vec__71654;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71657 = nn;
var G__71658 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71657,G__71658) : create_fn.call(null,G__71657,G__71658));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71659 = nn;
var G__71660 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71659,G__71660) : create_fn.call(null,G__71659,G__71660));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__71661 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71661,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71661,(1),null);
var seq__71664_72435 = cljs.core.seq(node_children);
var chunk__71665_72436 = null;
var count__71666_72437 = (0);
var i__71667_72438 = (0);
while(true){
if((i__71667_72438 < count__71666_72437)){
var child_struct_72440 = chunk__71665_72436.cljs$core$IIndexed$_nth$arity$2(null,i__71667_72438);
var children_72441 = shadow.dom.dom_node(child_struct_72440);
if(cljs.core.seq_QMARK_(children_72441)){
var seq__71680_72442 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72441));
var chunk__71682_72443 = null;
var count__71683_72444 = (0);
var i__71684_72445 = (0);
while(true){
if((i__71684_72445 < count__71683_72444)){
var child_72446 = chunk__71682_72443.cljs$core$IIndexed$_nth$arity$2(null,i__71684_72445);
if(cljs.core.truth_(child_72446)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72446);


var G__72447 = seq__71680_72442;
var G__72448 = chunk__71682_72443;
var G__72449 = count__71683_72444;
var G__72450 = (i__71684_72445 + (1));
seq__71680_72442 = G__72447;
chunk__71682_72443 = G__72448;
count__71683_72444 = G__72449;
i__71684_72445 = G__72450;
continue;
} else {
var G__72455 = seq__71680_72442;
var G__72456 = chunk__71682_72443;
var G__72457 = count__71683_72444;
var G__72458 = (i__71684_72445 + (1));
seq__71680_72442 = G__72455;
chunk__71682_72443 = G__72456;
count__71683_72444 = G__72457;
i__71684_72445 = G__72458;
continue;
}
} else {
var temp__5735__auto___72459 = cljs.core.seq(seq__71680_72442);
if(temp__5735__auto___72459){
var seq__71680_72460__$1 = temp__5735__auto___72459;
if(cljs.core.chunked_seq_QMARK_(seq__71680_72460__$1)){
var c__4556__auto___72462 = cljs.core.chunk_first(seq__71680_72460__$1);
var G__72463 = cljs.core.chunk_rest(seq__71680_72460__$1);
var G__72464 = c__4556__auto___72462;
var G__72465 = cljs.core.count(c__4556__auto___72462);
var G__72466 = (0);
seq__71680_72442 = G__72463;
chunk__71682_72443 = G__72464;
count__71683_72444 = G__72465;
i__71684_72445 = G__72466;
continue;
} else {
var child_72467 = cljs.core.first(seq__71680_72460__$1);
if(cljs.core.truth_(child_72467)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72467);


var G__72468 = cljs.core.next(seq__71680_72460__$1);
var G__72469 = null;
var G__72470 = (0);
var G__72471 = (0);
seq__71680_72442 = G__72468;
chunk__71682_72443 = G__72469;
count__71683_72444 = G__72470;
i__71684_72445 = G__72471;
continue;
} else {
var G__72472 = cljs.core.next(seq__71680_72460__$1);
var G__72473 = null;
var G__72474 = (0);
var G__72475 = (0);
seq__71680_72442 = G__72472;
chunk__71682_72443 = G__72473;
count__71683_72444 = G__72474;
i__71684_72445 = G__72475;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72441);
}


var G__72476 = seq__71664_72435;
var G__72477 = chunk__71665_72436;
var G__72478 = count__71666_72437;
var G__72479 = (i__71667_72438 + (1));
seq__71664_72435 = G__72476;
chunk__71665_72436 = G__72477;
count__71666_72437 = G__72478;
i__71667_72438 = G__72479;
continue;
} else {
var temp__5735__auto___72480 = cljs.core.seq(seq__71664_72435);
if(temp__5735__auto___72480){
var seq__71664_72481__$1 = temp__5735__auto___72480;
if(cljs.core.chunked_seq_QMARK_(seq__71664_72481__$1)){
var c__4556__auto___72482 = cljs.core.chunk_first(seq__71664_72481__$1);
var G__72483 = cljs.core.chunk_rest(seq__71664_72481__$1);
var G__72484 = c__4556__auto___72482;
var G__72485 = cljs.core.count(c__4556__auto___72482);
var G__72486 = (0);
seq__71664_72435 = G__72483;
chunk__71665_72436 = G__72484;
count__71666_72437 = G__72485;
i__71667_72438 = G__72486;
continue;
} else {
var child_struct_72489 = cljs.core.first(seq__71664_72481__$1);
var children_72492 = shadow.dom.dom_node(child_struct_72489);
if(cljs.core.seq_QMARK_(children_72492)){
var seq__71693_72494 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72492));
var chunk__71695_72495 = null;
var count__71696_72496 = (0);
var i__71697_72497 = (0);
while(true){
if((i__71697_72497 < count__71696_72496)){
var child_72499 = chunk__71695_72495.cljs$core$IIndexed$_nth$arity$2(null,i__71697_72497);
if(cljs.core.truth_(child_72499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72499);


var G__72500 = seq__71693_72494;
var G__72501 = chunk__71695_72495;
var G__72502 = count__71696_72496;
var G__72503 = (i__71697_72497 + (1));
seq__71693_72494 = G__72500;
chunk__71695_72495 = G__72501;
count__71696_72496 = G__72502;
i__71697_72497 = G__72503;
continue;
} else {
var G__72504 = seq__71693_72494;
var G__72505 = chunk__71695_72495;
var G__72506 = count__71696_72496;
var G__72507 = (i__71697_72497 + (1));
seq__71693_72494 = G__72504;
chunk__71695_72495 = G__72505;
count__71696_72496 = G__72506;
i__71697_72497 = G__72507;
continue;
}
} else {
var temp__5735__auto___72508__$1 = cljs.core.seq(seq__71693_72494);
if(temp__5735__auto___72508__$1){
var seq__71693_72510__$1 = temp__5735__auto___72508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71693_72510__$1)){
var c__4556__auto___72511 = cljs.core.chunk_first(seq__71693_72510__$1);
var G__72512 = cljs.core.chunk_rest(seq__71693_72510__$1);
var G__72513 = c__4556__auto___72511;
var G__72514 = cljs.core.count(c__4556__auto___72511);
var G__72515 = (0);
seq__71693_72494 = G__72512;
chunk__71695_72495 = G__72513;
count__71696_72496 = G__72514;
i__71697_72497 = G__72515;
continue;
} else {
var child_72517 = cljs.core.first(seq__71693_72510__$1);
if(cljs.core.truth_(child_72517)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72517);


var G__72518 = cljs.core.next(seq__71693_72510__$1);
var G__72519 = null;
var G__72520 = (0);
var G__72521 = (0);
seq__71693_72494 = G__72518;
chunk__71695_72495 = G__72519;
count__71696_72496 = G__72520;
i__71697_72497 = G__72521;
continue;
} else {
var G__72523 = cljs.core.next(seq__71693_72510__$1);
var G__72524 = null;
var G__72525 = (0);
var G__72526 = (0);
seq__71693_72494 = G__72523;
chunk__71695_72495 = G__72524;
count__71696_72496 = G__72525;
i__71697_72497 = G__72526;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72492);
}


var G__72529 = cljs.core.next(seq__71664_72481__$1);
var G__72530 = null;
var G__72531 = (0);
var G__72532 = (0);
seq__71664_72435 = G__72529;
chunk__71665_72436 = G__72530;
count__71666_72437 = G__72531;
i__71667_72438 = G__72532;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__71722 = cljs.core.seq(node);
var chunk__71723 = null;
var count__71724 = (0);
var i__71725 = (0);
while(true){
if((i__71725 < count__71724)){
var n = chunk__71723.cljs$core$IIndexed$_nth$arity$2(null,i__71725);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72537 = seq__71722;
var G__72538 = chunk__71723;
var G__72539 = count__71724;
var G__72540 = (i__71725 + (1));
seq__71722 = G__72537;
chunk__71723 = G__72538;
count__71724 = G__72539;
i__71725 = G__72540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71722);
if(temp__5735__auto__){
var seq__71722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71722__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71722__$1);
var G__72541 = cljs.core.chunk_rest(seq__71722__$1);
var G__72542 = c__4556__auto__;
var G__72543 = cljs.core.count(c__4556__auto__);
var G__72544 = (0);
seq__71722 = G__72541;
chunk__71723 = G__72542;
count__71724 = G__72543;
i__71725 = G__72544;
continue;
} else {
var n = cljs.core.first(seq__71722__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72545 = cljs.core.next(seq__71722__$1);
var G__72546 = null;
var G__72547 = (0);
var G__72548 = (0);
seq__71722 = G__72545;
chunk__71723 = G__72546;
count__71724 = G__72547;
i__71725 = G__72548;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__71752 = arguments.length;
switch (G__71752) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__71756 = arguments.length;
switch (G__71756) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__71767 = arguments.length;
switch (G__71767) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72556 = arguments.length;
var i__4737__auto___72557 = (0);
while(true){
if((i__4737__auto___72557 < len__4736__auto___72556)){
args__4742__auto__.push((arguments[i__4737__auto___72557]));

var G__72558 = (i__4737__auto___72557 + (1));
i__4737__auto___72557 = G__72558;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__71806_72559 = cljs.core.seq(nodes);
var chunk__71807_72560 = null;
var count__71808_72561 = (0);
var i__71809_72562 = (0);
while(true){
if((i__71809_72562 < count__71808_72561)){
var node_72563 = chunk__71807_72560.cljs$core$IIndexed$_nth$arity$2(null,i__71809_72562);
fragment.appendChild(shadow.dom._to_dom(node_72563));


var G__72567 = seq__71806_72559;
var G__72568 = chunk__71807_72560;
var G__72569 = count__71808_72561;
var G__72570 = (i__71809_72562 + (1));
seq__71806_72559 = G__72567;
chunk__71807_72560 = G__72568;
count__71808_72561 = G__72569;
i__71809_72562 = G__72570;
continue;
} else {
var temp__5735__auto___72572 = cljs.core.seq(seq__71806_72559);
if(temp__5735__auto___72572){
var seq__71806_72573__$1 = temp__5735__auto___72572;
if(cljs.core.chunked_seq_QMARK_(seq__71806_72573__$1)){
var c__4556__auto___72574 = cljs.core.chunk_first(seq__71806_72573__$1);
var G__72575 = cljs.core.chunk_rest(seq__71806_72573__$1);
var G__72576 = c__4556__auto___72574;
var G__72577 = cljs.core.count(c__4556__auto___72574);
var G__72578 = (0);
seq__71806_72559 = G__72575;
chunk__71807_72560 = G__72576;
count__71808_72561 = G__72577;
i__71809_72562 = G__72578;
continue;
} else {
var node_72579 = cljs.core.first(seq__71806_72573__$1);
fragment.appendChild(shadow.dom._to_dom(node_72579));


var G__72580 = cljs.core.next(seq__71806_72573__$1);
var G__72581 = null;
var G__72582 = (0);
var G__72583 = (0);
seq__71806_72559 = G__72580;
chunk__71807_72560 = G__72581;
count__71808_72561 = G__72582;
i__71809_72562 = G__72583;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq71802){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71802));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__71845_72584 = cljs.core.seq(scripts);
var chunk__71846_72585 = null;
var count__71847_72586 = (0);
var i__71848_72587 = (0);
while(true){
if((i__71848_72587 < count__71847_72586)){
var vec__71885_72588 = chunk__71846_72585.cljs$core$IIndexed$_nth$arity$2(null,i__71848_72587);
var script_tag_72589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71885_72588,(0),null);
var script_body_72590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71885_72588,(1),null);
eval(script_body_72590);


var G__72591 = seq__71845_72584;
var G__72592 = chunk__71846_72585;
var G__72593 = count__71847_72586;
var G__72594 = (i__71848_72587 + (1));
seq__71845_72584 = G__72591;
chunk__71846_72585 = G__72592;
count__71847_72586 = G__72593;
i__71848_72587 = G__72594;
continue;
} else {
var temp__5735__auto___72595 = cljs.core.seq(seq__71845_72584);
if(temp__5735__auto___72595){
var seq__71845_72596__$1 = temp__5735__auto___72595;
if(cljs.core.chunked_seq_QMARK_(seq__71845_72596__$1)){
var c__4556__auto___72597 = cljs.core.chunk_first(seq__71845_72596__$1);
var G__72598 = cljs.core.chunk_rest(seq__71845_72596__$1);
var G__72599 = c__4556__auto___72597;
var G__72600 = cljs.core.count(c__4556__auto___72597);
var G__72601 = (0);
seq__71845_72584 = G__72598;
chunk__71846_72585 = G__72599;
count__71847_72586 = G__72600;
i__71848_72587 = G__72601;
continue;
} else {
var vec__71904_72602 = cljs.core.first(seq__71845_72596__$1);
var script_tag_72603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71904_72602,(0),null);
var script_body_72604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71904_72602,(1),null);
eval(script_body_72604);


var G__72607 = cljs.core.next(seq__71845_72596__$1);
var G__72608 = null;
var G__72609 = (0);
var G__72610 = (0);
seq__71845_72584 = G__72607;
chunk__71846_72585 = G__72608;
count__71847_72586 = G__72609;
i__71848_72587 = G__72610;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__71918){
var vec__71920 = p__71918;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71920,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71920,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__71932 = arguments.length;
switch (G__71932) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__71965 = cljs.core.seq(style_keys);
var chunk__71966 = null;
var count__71967 = (0);
var i__71968 = (0);
while(true){
if((i__71968 < count__71967)){
var it = chunk__71966.cljs$core$IIndexed$_nth$arity$2(null,i__71968);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72635 = seq__71965;
var G__72636 = chunk__71966;
var G__72637 = count__71967;
var G__72638 = (i__71968 + (1));
seq__71965 = G__72635;
chunk__71966 = G__72636;
count__71967 = G__72637;
i__71968 = G__72638;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71965);
if(temp__5735__auto__){
var seq__71965__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71965__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71965__$1);
var G__72639 = cljs.core.chunk_rest(seq__71965__$1);
var G__72640 = c__4556__auto__;
var G__72641 = cljs.core.count(c__4556__auto__);
var G__72642 = (0);
seq__71965 = G__72639;
chunk__71966 = G__72640;
count__71967 = G__72641;
i__71968 = G__72642;
continue;
} else {
var it = cljs.core.first(seq__71965__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72644 = cljs.core.next(seq__71965__$1);
var G__72645 = null;
var G__72646 = (0);
var G__72647 = (0);
seq__71965 = G__72644;
chunk__71966 = G__72645;
count__71967 = G__72646;
i__71968 = G__72647;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k71990,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__72001 = k71990;
var G__72001__$1 = (((G__72001 instanceof cljs.core.Keyword))?G__72001.fqn:null);
switch (G__72001__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71990,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__72002){
var vec__72003 = p__72002;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72003,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72003,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71989){
var self__ = this;
var G__71989__$1 = this;
return (new cljs.core.RecordIter((0),G__71989__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71991,other71992){
var self__ = this;
var this71991__$1 = this;
return (((!((other71992 == null)))) && ((this71991__$1.constructor === other71992.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71991__$1.x,other71992.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71991__$1.y,other71992.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71991__$1.__extmap,other71992.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__71989){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__72018 = cljs.core.keyword_identical_QMARK_;
var expr__72019 = k__4388__auto__;
if(cljs.core.truth_((pred__72018.cljs$core$IFn$_invoke$arity$2 ? pred__72018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__72019) : pred__72018.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72019)))){
return (new shadow.dom.Coordinate(G__71989,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72018.cljs$core$IFn$_invoke$arity$2 ? pred__72018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__72019) : pred__72018.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72019)))){
return (new shadow.dom.Coordinate(self__.x,G__71989,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__71989),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__71989){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__71989,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__71994){
var extmap__4419__auto__ = (function (){var G__72077 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71994,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__71994)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72077);
} else {
return G__72077;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__71994),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__71994),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k72101,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__72115 = k72101;
var G__72115__$1 = (((G__72115 instanceof cljs.core.Keyword))?G__72115.fqn:null);
switch (G__72115__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72101,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__72133){
var vec__72134 = p__72133;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72134,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72134,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72100){
var self__ = this;
var G__72100__$1 = this;
return (new cljs.core.RecordIter((0),G__72100__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72102,other72103){
var self__ = this;
var this72102__$1 = this;
return (((!((other72103 == null)))) && ((this72102__$1.constructor === other72103.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72102__$1.w,other72103.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72102__$1.h,other72103.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72102__$1.__extmap,other72103.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__72100){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__72159 = cljs.core.keyword_identical_QMARK_;
var expr__72160 = k__4388__auto__;
if(cljs.core.truth_((pred__72159.cljs$core$IFn$_invoke$arity$2 ? pred__72159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__72160) : pred__72159.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__72160)))){
return (new shadow.dom.Size(G__72100,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72159.cljs$core$IFn$_invoke$arity$2 ? pred__72159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__72160) : pred__72159.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__72160)))){
return (new shadow.dom.Size(self__.w,G__72100,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__72100),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__72100){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__72100,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__72104){
var extmap__4419__auto__ = (function (){var G__72163 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72104,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__72104)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72163);
} else {
return G__72163;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__72104),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__72104),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__72703 = (i + (1));
var G__72704 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__72703;
ret = G__72704;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72173){
var vec__72174 = p__72173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72174,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__72182 = arguments.length;
switch (G__72182) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__72709 = ps;
var G__72710 = (i + (1));
el__$1 = G__72709;
i = G__72710;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__72193 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__72196_72717 = cljs.core.seq(props);
var chunk__72197_72718 = null;
var count__72198_72719 = (0);
var i__72199_72720 = (0);
while(true){
if((i__72199_72720 < count__72198_72719)){
var vec__72209_72721 = chunk__72197_72718.cljs$core$IIndexed$_nth$arity$2(null,i__72199_72720);
var k_72722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72209_72721,(0),null);
var v_72723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72209_72721,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_72722);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72722),v_72723);


var G__72724 = seq__72196_72717;
var G__72725 = chunk__72197_72718;
var G__72726 = count__72198_72719;
var G__72727 = (i__72199_72720 + (1));
seq__72196_72717 = G__72724;
chunk__72197_72718 = G__72725;
count__72198_72719 = G__72726;
i__72199_72720 = G__72727;
continue;
} else {
var temp__5735__auto___72728 = cljs.core.seq(seq__72196_72717);
if(temp__5735__auto___72728){
var seq__72196_72729__$1 = temp__5735__auto___72728;
if(cljs.core.chunked_seq_QMARK_(seq__72196_72729__$1)){
var c__4556__auto___72730 = cljs.core.chunk_first(seq__72196_72729__$1);
var G__72731 = cljs.core.chunk_rest(seq__72196_72729__$1);
var G__72732 = c__4556__auto___72730;
var G__72733 = cljs.core.count(c__4556__auto___72730);
var G__72734 = (0);
seq__72196_72717 = G__72731;
chunk__72197_72718 = G__72732;
count__72198_72719 = G__72733;
i__72199_72720 = G__72734;
continue;
} else {
var vec__72212_72735 = cljs.core.first(seq__72196_72729__$1);
var k_72736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72212_72735,(0),null);
var v_72737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72212_72735,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_72736);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72736),v_72737);


var G__72738 = cljs.core.next(seq__72196_72729__$1);
var G__72739 = null;
var G__72740 = (0);
var G__72741 = (0);
seq__72196_72717 = G__72738;
chunk__72197_72718 = G__72739;
count__72198_72719 = G__72740;
i__72199_72720 = G__72741;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__72217 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72217,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72217,(1),null);
var seq__72220_72742 = cljs.core.seq(node_children);
var chunk__72222_72743 = null;
var count__72223_72744 = (0);
var i__72224_72745 = (0);
while(true){
if((i__72224_72745 < count__72223_72744)){
var child_struct_72746 = chunk__72222_72743.cljs$core$IIndexed$_nth$arity$2(null,i__72224_72745);
if((!((child_struct_72746 == null)))){
if(typeof child_struct_72746 === 'string'){
var text_72747 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72747),child_struct_72746].join(''));
} else {
var children_72748 = shadow.dom.svg_node(child_struct_72746);
if(cljs.core.seq_QMARK_(children_72748)){
var seq__72242_72749 = cljs.core.seq(children_72748);
var chunk__72244_72750 = null;
var count__72245_72751 = (0);
var i__72246_72752 = (0);
while(true){
if((i__72246_72752 < count__72245_72751)){
var child_72753 = chunk__72244_72750.cljs$core$IIndexed$_nth$arity$2(null,i__72246_72752);
if(cljs.core.truth_(child_72753)){
node.appendChild(child_72753);


var G__72754 = seq__72242_72749;
var G__72755 = chunk__72244_72750;
var G__72756 = count__72245_72751;
var G__72757 = (i__72246_72752 + (1));
seq__72242_72749 = G__72754;
chunk__72244_72750 = G__72755;
count__72245_72751 = G__72756;
i__72246_72752 = G__72757;
continue;
} else {
var G__72758 = seq__72242_72749;
var G__72759 = chunk__72244_72750;
var G__72760 = count__72245_72751;
var G__72761 = (i__72246_72752 + (1));
seq__72242_72749 = G__72758;
chunk__72244_72750 = G__72759;
count__72245_72751 = G__72760;
i__72246_72752 = G__72761;
continue;
}
} else {
var temp__5735__auto___72762 = cljs.core.seq(seq__72242_72749);
if(temp__5735__auto___72762){
var seq__72242_72763__$1 = temp__5735__auto___72762;
if(cljs.core.chunked_seq_QMARK_(seq__72242_72763__$1)){
var c__4556__auto___72764 = cljs.core.chunk_first(seq__72242_72763__$1);
var G__72765 = cljs.core.chunk_rest(seq__72242_72763__$1);
var G__72766 = c__4556__auto___72764;
var G__72767 = cljs.core.count(c__4556__auto___72764);
var G__72768 = (0);
seq__72242_72749 = G__72765;
chunk__72244_72750 = G__72766;
count__72245_72751 = G__72767;
i__72246_72752 = G__72768;
continue;
} else {
var child_72769 = cljs.core.first(seq__72242_72763__$1);
if(cljs.core.truth_(child_72769)){
node.appendChild(child_72769);


var G__72770 = cljs.core.next(seq__72242_72763__$1);
var G__72771 = null;
var G__72772 = (0);
var G__72773 = (0);
seq__72242_72749 = G__72770;
chunk__72244_72750 = G__72771;
count__72245_72751 = G__72772;
i__72246_72752 = G__72773;
continue;
} else {
var G__72774 = cljs.core.next(seq__72242_72763__$1);
var G__72775 = null;
var G__72776 = (0);
var G__72777 = (0);
seq__72242_72749 = G__72774;
chunk__72244_72750 = G__72775;
count__72245_72751 = G__72776;
i__72246_72752 = G__72777;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72748);
}
}


var G__72778 = seq__72220_72742;
var G__72779 = chunk__72222_72743;
var G__72780 = count__72223_72744;
var G__72781 = (i__72224_72745 + (1));
seq__72220_72742 = G__72778;
chunk__72222_72743 = G__72779;
count__72223_72744 = G__72780;
i__72224_72745 = G__72781;
continue;
} else {
var G__72782 = seq__72220_72742;
var G__72783 = chunk__72222_72743;
var G__72784 = count__72223_72744;
var G__72785 = (i__72224_72745 + (1));
seq__72220_72742 = G__72782;
chunk__72222_72743 = G__72783;
count__72223_72744 = G__72784;
i__72224_72745 = G__72785;
continue;
}
} else {
var temp__5735__auto___72786 = cljs.core.seq(seq__72220_72742);
if(temp__5735__auto___72786){
var seq__72220_72787__$1 = temp__5735__auto___72786;
if(cljs.core.chunked_seq_QMARK_(seq__72220_72787__$1)){
var c__4556__auto___72788 = cljs.core.chunk_first(seq__72220_72787__$1);
var G__72789 = cljs.core.chunk_rest(seq__72220_72787__$1);
var G__72790 = c__4556__auto___72788;
var G__72791 = cljs.core.count(c__4556__auto___72788);
var G__72792 = (0);
seq__72220_72742 = G__72789;
chunk__72222_72743 = G__72790;
count__72223_72744 = G__72791;
i__72224_72745 = G__72792;
continue;
} else {
var child_struct_72793 = cljs.core.first(seq__72220_72787__$1);
if((!((child_struct_72793 == null)))){
if(typeof child_struct_72793 === 'string'){
var text_72794 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72794),child_struct_72793].join(''));
} else {
var children_72795 = shadow.dom.svg_node(child_struct_72793);
if(cljs.core.seq_QMARK_(children_72795)){
var seq__72257_72796 = cljs.core.seq(children_72795);
var chunk__72259_72797 = null;
var count__72260_72798 = (0);
var i__72261_72799 = (0);
while(true){
if((i__72261_72799 < count__72260_72798)){
var child_72800 = chunk__72259_72797.cljs$core$IIndexed$_nth$arity$2(null,i__72261_72799);
if(cljs.core.truth_(child_72800)){
node.appendChild(child_72800);


var G__72801 = seq__72257_72796;
var G__72802 = chunk__72259_72797;
var G__72803 = count__72260_72798;
var G__72804 = (i__72261_72799 + (1));
seq__72257_72796 = G__72801;
chunk__72259_72797 = G__72802;
count__72260_72798 = G__72803;
i__72261_72799 = G__72804;
continue;
} else {
var G__72805 = seq__72257_72796;
var G__72806 = chunk__72259_72797;
var G__72807 = count__72260_72798;
var G__72808 = (i__72261_72799 + (1));
seq__72257_72796 = G__72805;
chunk__72259_72797 = G__72806;
count__72260_72798 = G__72807;
i__72261_72799 = G__72808;
continue;
}
} else {
var temp__5735__auto___72809__$1 = cljs.core.seq(seq__72257_72796);
if(temp__5735__auto___72809__$1){
var seq__72257_72810__$1 = temp__5735__auto___72809__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72257_72810__$1)){
var c__4556__auto___72811 = cljs.core.chunk_first(seq__72257_72810__$1);
var G__72812 = cljs.core.chunk_rest(seq__72257_72810__$1);
var G__72813 = c__4556__auto___72811;
var G__72814 = cljs.core.count(c__4556__auto___72811);
var G__72815 = (0);
seq__72257_72796 = G__72812;
chunk__72259_72797 = G__72813;
count__72260_72798 = G__72814;
i__72261_72799 = G__72815;
continue;
} else {
var child_72816 = cljs.core.first(seq__72257_72810__$1);
if(cljs.core.truth_(child_72816)){
node.appendChild(child_72816);


var G__72817 = cljs.core.next(seq__72257_72810__$1);
var G__72818 = null;
var G__72819 = (0);
var G__72820 = (0);
seq__72257_72796 = G__72817;
chunk__72259_72797 = G__72818;
count__72260_72798 = G__72819;
i__72261_72799 = G__72820;
continue;
} else {
var G__72821 = cljs.core.next(seq__72257_72810__$1);
var G__72822 = null;
var G__72823 = (0);
var G__72824 = (0);
seq__72257_72796 = G__72821;
chunk__72259_72797 = G__72822;
count__72260_72798 = G__72823;
i__72261_72799 = G__72824;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72795);
}
}


var G__72825 = cljs.core.next(seq__72220_72787__$1);
var G__72826 = null;
var G__72827 = (0);
var G__72828 = (0);
seq__72220_72742 = G__72825;
chunk__72222_72743 = G__72826;
count__72223_72744 = G__72827;
i__72224_72745 = G__72828;
continue;
} else {
var G__72829 = cljs.core.next(seq__72220_72787__$1);
var G__72830 = null;
var G__72831 = (0);
var G__72832 = (0);
seq__72220_72742 = G__72829;
chunk__72222_72743 = G__72830;
count__72223_72744 = G__72831;
i__72224_72745 = G__72832;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72833 = arguments.length;
var i__4737__auto___72834 = (0);
while(true){
if((i__4737__auto___72834 < len__4736__auto___72833)){
args__4742__auto__.push((arguments[i__4737__auto___72834]));

var G__72838 = (i__4737__auto___72834 + (1));
i__4737__auto___72834 = G__72838;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq72270){
var G__72271 = cljs.core.first(seq72270);
var seq72270__$1 = cljs.core.next(seq72270);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72271,seq72270__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__72278 = arguments.length;
switch (G__72278) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__62265__auto___72852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_72292){
var state_val_72293 = (state_72292[(1)]);
if((state_val_72293 === (1))){
var state_72292__$1 = state_72292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72292__$1,(2),once_or_cleanup);
} else {
if((state_val_72293 === (2))){
var inst_72289 = (state_72292[(2)]);
var inst_72290 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_72292__$1 = (function (){var statearr_72294 = state_72292;
(statearr_72294[(7)] = inst_72289);

return statearr_72294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72292__$1,inst_72290);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__62166__auto__ = null;
var shadow$dom$state_machine__62166__auto____0 = (function (){
var statearr_72296 = [null,null,null,null,null,null,null,null];
(statearr_72296[(0)] = shadow$dom$state_machine__62166__auto__);

(statearr_72296[(1)] = (1));

return statearr_72296;
});
var shadow$dom$state_machine__62166__auto____1 = (function (state_72292){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_72292);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e72299){var ex__62169__auto__ = e72299;
var statearr_72300_72853 = state_72292;
(statearr_72300_72853[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_72292[(4)]))){
var statearr_72301_72854 = state_72292;
(statearr_72301_72854[(1)] = cljs.core.first((state_72292[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72855 = state_72292;
state_72292 = G__72855;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
shadow$dom$state_machine__62166__auto__ = function(state_72292){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__62166__auto____0.call(this);
case 1:
return shadow$dom$state_machine__62166__auto____1.call(this,state_72292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__62166__auto____0;
shadow$dom$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__62166__auto____1;
return shadow$dom$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_72305 = f__62266__auto__();
(statearr_72305[(6)] = c__62265__auto___72852);

return statearr_72305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
