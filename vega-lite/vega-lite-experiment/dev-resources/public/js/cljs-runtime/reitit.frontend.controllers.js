goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__80679,match){
var map__80680 = p__80679;
var map__80680__$1 = (((((!((map__80680 == null))))?(((((map__80680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80680):map__80680);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80680__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80680__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80680__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__80683(s__80684){
return (new cljs.core.LazySeq(null,(function (){
var s__80684__$1 = s__80684;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80684__$1);
if(temp__5735__auto__){
var s__80684__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80684__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80684__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80686 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80685 = (0);
while(true){
if((i__80685 < size__4528__auto__)){
var vec__80687 = cljs.core._nth(c__4527__auto__,i__80685);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80687,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80687,(1),null);
cljs.core.chunk_append(b__80686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__80720 = (i__80685 + (1));
i__80685 = G__80720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80686),reitit$frontend$controllers$get_identity_$_iter__80683(cljs.core.chunk_rest(s__80684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80686),null);
}
} else {
var vec__80691 = cljs.core.first(s__80684__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80691,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80691,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__80683(cljs.core.rest(s__80684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__80697 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80697) : f.call(null,G__80697));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__80702_80724 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__80703_80725 = null;
var count__80704_80726 = (0);
var i__80705_80727 = (0);
while(true){
if((i__80705_80727 < count__80704_80726)){
var controller_80728 = chunk__80703_80725.cljs$core$IIndexed$_nth$arity$2(null,i__80705_80727);
reitit.frontend.controllers.apply_controller(controller_80728,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__80729 = seq__80702_80724;
var G__80730 = chunk__80703_80725;
var G__80731 = count__80704_80726;
var G__80732 = (i__80705_80727 + (1));
seq__80702_80724 = G__80729;
chunk__80703_80725 = G__80730;
count__80704_80726 = G__80731;
i__80705_80727 = G__80732;
continue;
} else {
var temp__5735__auto___80733 = cljs.core.seq(seq__80702_80724);
if(temp__5735__auto___80733){
var seq__80702_80734__$1 = temp__5735__auto___80733;
if(cljs.core.chunked_seq_QMARK_(seq__80702_80734__$1)){
var c__4556__auto___80735 = cljs.core.chunk_first(seq__80702_80734__$1);
var G__80736 = cljs.core.chunk_rest(seq__80702_80734__$1);
var G__80737 = c__4556__auto___80735;
var G__80738 = cljs.core.count(c__4556__auto___80735);
var G__80739 = (0);
seq__80702_80724 = G__80736;
chunk__80703_80725 = G__80737;
count__80704_80726 = G__80738;
i__80705_80727 = G__80739;
continue;
} else {
var controller_80741 = cljs.core.first(seq__80702_80734__$1);
reitit.frontend.controllers.apply_controller(controller_80741,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__80742 = cljs.core.next(seq__80702_80734__$1);
var G__80743 = null;
var G__80744 = (0);
var G__80745 = (0);
seq__80702_80724 = G__80742;
chunk__80703_80725 = G__80743;
count__80704_80726 = G__80744;
i__80705_80727 = G__80745;
continue;
}
} else {
}
}
break;
}

var seq__80711_80747 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__80712_80748 = null;
var count__80713_80749 = (0);
var i__80714_80750 = (0);
while(true){
if((i__80714_80750 < count__80713_80749)){
var controller_80751 = chunk__80712_80748.cljs$core$IIndexed$_nth$arity$2(null,i__80714_80750);
reitit.frontend.controllers.apply_controller(controller_80751,new cljs.core.Keyword(null,"start","start",-355208981));


var G__80752 = seq__80711_80747;
var G__80753 = chunk__80712_80748;
var G__80754 = count__80713_80749;
var G__80755 = (i__80714_80750 + (1));
seq__80711_80747 = G__80752;
chunk__80712_80748 = G__80753;
count__80713_80749 = G__80754;
i__80714_80750 = G__80755;
continue;
} else {
var temp__5735__auto___80756 = cljs.core.seq(seq__80711_80747);
if(temp__5735__auto___80756){
var seq__80711_80757__$1 = temp__5735__auto___80756;
if(cljs.core.chunked_seq_QMARK_(seq__80711_80757__$1)){
var c__4556__auto___80758 = cljs.core.chunk_first(seq__80711_80757__$1);
var G__80759 = cljs.core.chunk_rest(seq__80711_80757__$1);
var G__80760 = c__4556__auto___80758;
var G__80761 = cljs.core.count(c__4556__auto___80758);
var G__80762 = (0);
seq__80711_80747 = G__80759;
chunk__80712_80748 = G__80760;
count__80713_80749 = G__80761;
i__80714_80750 = G__80762;
continue;
} else {
var controller_80763 = cljs.core.first(seq__80711_80757__$1);
reitit.frontend.controllers.apply_controller(controller_80763,new cljs.core.Keyword(null,"start","start",-355208981));


var G__80764 = cljs.core.next(seq__80711_80757__$1);
var G__80765 = null;
var G__80766 = (0);
var G__80767 = (0);
seq__80711_80747 = G__80764;
chunk__80712_80748 = G__80765;
count__80713_80749 = G__80766;
i__80714_80750 = G__80767;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
