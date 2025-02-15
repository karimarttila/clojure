goog.provide('reagent_dev_tools.state_tree');
if((typeof reagent_dev_tools !== 'undefined') && (typeof reagent_dev_tools.state_tree !== 'undefined') && (typeof reagent_dev_tools.state_tree.state_tree !== 'undefined')){
} else {
reagent_dev_tools.state_tree.state_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent_dev_tools.state_tree.toggle = (function reagent_dev_tools$state_tree$toggle(v,ks,open_QMARK_){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return open_QMARK_;
}
})())){
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc_in(v,ks,null);
}
});
reagent_dev_tools.state_tree.key__GT_string = (function reagent_dev_tools$state_tree$key__GT_string(k){
if((k instanceof cljs.core.Keyword)){
var s = cljs.core.namespace(k);
var n = cljs.core.name(k);
return [":",(cljs.core.truth_(s)?[s,"/",n].join(''):n)].join('');
} else {
return k;
}
});
reagent_dev_tools.state_tree.type__GT_class = (function reagent_dev_tools$state_tree$type__GT_class(v){
if((v instanceof cljs.core.Keyword)){
return "reagent-dev-tools__keyword";
} else {
if(typeof v === 'string'){
return "reagent-dev-tools__string";
} else {
if(typeof v === 'number'){
return "reagent-dev-tools__number";
} else {
if((v == null)){
return "reagent-dev-tools__nil";
} else {
return null;
}
}
}
}
});
reagent_dev_tools.state_tree.collection_name = (function reagent_dev_tools$state_tree$collection_name(v){
if(cljs.core.map_QMARK_(v)){
return "{}";
} else {
if(cljs.core.vector_QMARK_(v)){
return "[]";
} else {
if(cljs.core.set_QMARK_(v)){
return "#{}";
} else {
if(cljs.core.list_QMARK_(v)){
return "()";
} else {
return null;
}
}
}
}
});
reagent_dev_tools.state_tree.tree = (function reagent_dev_tools$state_tree$tree(open,open_fn,v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__75956(s__75957){
return (new cljs.core.LazySeq(null,(function (){
var s__75957__$1 = s__75957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75957__$1);
if(temp__5735__auto__){
var s__75957__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75957__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75957__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75959 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75958 = (0);
while(true){
if((i__75958 < size__4528__auto__)){
var vec__75962 = cljs.core._nth(c__4527__auto__,i__75958);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75962,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75962,(1),null);
var open__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(open,k);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__75959,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string(k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__75958,open__$1,ks__$1,vec__75962,k,v__$1,c__4527__auto__,size__4528__auto__,b__75959,s__75957__$2,temp__5735__auto__){
return (function (){
return (open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(ks__$1,false) : open_fn.call(null,ks__$1,false));
});})(i__75958,open__$1,ks__$1,vec__75962,k,v__$1,c__4527__auto__,size__4528__auto__,b__75959,s__75957__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_(v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class(k)], null),reagent_dev_tools.state_tree.key__GT_string(k)], null)," "], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__75958,open__$1,ks__$1,vec__75962,k,v__$1,c__4527__auto__,size__4528__auto__,b__75959,s__75957__$2,temp__5735__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some(cljs.core.nil_QMARK_,cljs.core.vals(open__$1));
var seq__75965 = cljs.core.seq(((cljs.core.map_QMARK_(v__$1))?v__$1:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v__$1)));
var chunk__75966 = null;
var count__75967 = (0);
var i__75968 = (0);
while(true){
if((i__75968 < count__75967)){
var vec__75981 = chunk__75966.cljs$core$IIndexed$_nth$arity$2(null,i__75968);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75981,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75981,(1),null);
var G__75984_76091 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__75985_76092 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__75984_76091,G__75985_76092) : open_fn.call(null,G__75984_76091,G__75985_76092));


var G__76093 = seq__75965;
var G__76094 = chunk__75966;
var G__76095 = count__75967;
var G__76096 = (i__75968 + (1));
seq__75965 = G__76093;
chunk__75966 = G__76094;
count__75967 = G__76095;
i__75968 = G__76096;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__75965);
if(temp__5735__auto____$1){
var seq__75965__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__75965__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75965__$1);
var G__76101 = cljs.core.chunk_rest(seq__75965__$1);
var G__76102 = c__4556__auto__;
var G__76103 = cljs.core.count(c__4556__auto__);
var G__76104 = (0);
seq__75965 = G__76101;
chunk__75966 = G__76102;
count__75967 = G__76103;
i__75968 = G__76104;
continue;
} else {
var vec__75986 = cljs.core.first(seq__75965__$1);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75986,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75986,(1),null);
var G__75991_76105 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__75992_76106 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__75991_76105,G__75992_76106) : open_fn.call(null,G__75991_76105,G__75992_76106));


var G__76111 = cljs.core.next(seq__75965__$1);
var G__76112 = null;
var G__76113 = (0);
var G__76114 = (0);
seq__75965 = G__76111;
chunk__75966 = G__76112;
count__75967 = G__76113;
i__75968 = G__76114;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__75958,open__$1,ks__$1,vec__75962,k,v__$1,c__4527__auto__,size__4528__auto__,b__75959,s__75957__$2,temp__5735__auto__))
], null),reagent_dev_tools.state_tree.collection_name(v__$1)], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = (!(cljs.core.coll_QMARK_(v__$1)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__76136 = (i__75958 + (1));
i__75958 = G__76136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75959),reagent_dev_tools$state_tree$tree_$_iter__75956(cljs.core.chunk_rest(s__75957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75959),null);
}
} else {
var vec__75993 = cljs.core.first(s__75957__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75993,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75993,(1),null);
var open__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(open,k);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string(k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__75993,k,v__$1,s__75957__$2,temp__5735__auto__){
return (function (){
return (open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(ks__$1,false) : open_fn.call(null,ks__$1,false));
});})(open__$1,ks__$1,vec__75993,k,v__$1,s__75957__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_(v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class(k)], null),reagent_dev_tools.state_tree.key__GT_string(k)], null)," "], null),((cljs.core.coll_QMARK_(v__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__75993,k,v__$1,s__75957__$2,temp__5735__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some(cljs.core.nil_QMARK_,cljs.core.vals(open__$1));
var seq__76002 = cljs.core.seq(((cljs.core.map_QMARK_(v__$1))?v__$1:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v__$1)));
var chunk__76003 = null;
var count__76004 = (0);
var i__76005 = (0);
while(true){
if((i__76005 < count__76004)){
var vec__76028 = chunk__76003.cljs$core$IIndexed$_nth$arity$2(null,i__76005);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76028,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76028,(1),null);
var G__76031_76137 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__76032_76138 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__76031_76137,G__76032_76138) : open_fn.call(null,G__76031_76137,G__76032_76138));


var G__76139 = seq__76002;
var G__76140 = chunk__76003;
var G__76141 = count__76004;
var G__76142 = (i__76005 + (1));
seq__76002 = G__76139;
chunk__76003 = G__76140;
count__76004 = G__76141;
i__76005 = G__76142;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__76002);
if(temp__5735__auto____$1){
var seq__76002__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__76002__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76002__$1);
var G__76145 = cljs.core.chunk_rest(seq__76002__$1);
var G__76146 = c__4556__auto__;
var G__76147 = cljs.core.count(c__4556__auto__);
var G__76148 = (0);
seq__76002 = G__76145;
chunk__76003 = G__76146;
count__76004 = G__76147;
i__76005 = G__76148;
continue;
} else {
var vec__76036 = cljs.core.first(seq__76002__$1);
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76036,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76036,(1),null);
var G__76039_76150 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks__$1,k__$1);
var G__76040_76151 = open_all_QMARK_;
(open_fn.cljs$core$IFn$_invoke$arity$2 ? open_fn.cljs$core$IFn$_invoke$arity$2(G__76039_76150,G__76040_76151) : open_fn.call(null,G__76039_76150,G__76040_76151));


var G__76153 = cljs.core.next(seq__76002__$1);
var G__76154 = null;
var G__76155 = (0);
var G__76156 = (0);
seq__76002 = G__76153;
chunk__76003 = G__76154;
count__76004 = G__76155;
i__76005 = G__76156;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__75993,k,v__$1,s__75957__$2,temp__5735__auto__))
], null),reagent_dev_tools.state_tree.collection_name(v__$1)], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = (!(cljs.core.coll_QMARK_(v__$1)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__75956(cljs.core.rest(s__75957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.reagent-dev-tools__pre","pre.reagent-dev-tools__pre",556469413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class(v)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}
});
reagent_dev_tools.state_tree.state_tree_panel = (function reagent_dev_tools$state_tree$state_tree_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__76046(s__76047){
return (new cljs.core.LazySeq(null,(function (){
var s__76047__$1 = s__76047;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__76047__$1);
if(temp__5735__auto__){
var s__76047__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76047__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__76047__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__76049 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__76048 = (0);
while(true){
if((i__76048 < size__4528__auto__)){
var vec__76051 = cljs.core._nth(c__4527__auto__,i__76048);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76051,(0),null);
var map__76054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76051,(1),null);
var map__76054__$1 = (((((!((map__76054 == null))))?(((((map__76054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76054):map__76054);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76054__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76054__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append(b__76049,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__76048,vec__76051,name,map__76054,map__76054__$1,state_atom,open,c__4527__auto__,size__4528__auto__,b__76049,s__76047__$2,temp__5735__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,open_QMARK_], 0));
});})(i__76048,vec__76051,name,map__76054,map__76054__$1,state_atom,open,c__4527__auto__,size__4528__auto__,b__76049,s__76047__$2,temp__5735__auto__))
,cljs.core.deref(state_atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__76172 = (i__76048 + (1));
i__76048 = G__76172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76049),reagent_dev_tools$state_tree$state_tree_panel_$_iter__76046(cljs.core.chunk_rest(s__76047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76049),null);
}
} else {
var vec__76059 = cljs.core.first(s__76047__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76059,(0),null);
var map__76062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76059,(1),null);
var map__76062__$1 = (((((!((map__76062 == null))))?(((((map__76062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76062):map__76062);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76062__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76062__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__76059,name,map__76062,map__76062__$1,state_atom,open,s__76047__$2,temp__5735__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,open_QMARK_], 0));
});})(vec__76059,name,map__76062,map__76062__$1,state_atom,open,s__76047__$2,temp__5735__auto__))
,cljs.core.deref(state_atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__76046(cljs.core.rest(s__76047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(reagent_dev_tools.state_tree.state_tree));
})())], null);
});
reagent_dev_tools.state_tree.register_state_atom = (function reagent_dev_tools$state_tree$register_state_atom(atom_name,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_dev_tools.state_tree.state_tree,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atom_name,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857)], null),state_atom);
});

//# sourceMappingURL=reagent_dev_tools.state_tree.js.map
