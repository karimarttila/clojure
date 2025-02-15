goog.provide('spec_tools.parse');
spec_tools.parse.type_dispatch_value = (function spec_tools$parse$type_dispatch_value(type){
var fexpr__77660 = ((cljs.core.sequential_QMARK_(type))?cljs.core.first:cljs.core.identity);
return (fexpr__77660.cljs$core$IFn$_invoke$arity$1 ? fexpr__77660.cljs$core$IFn$_invoke$arity$1(type) : fexpr__77660.call(null,type));
});
spec_tools.parse.collection_type_QMARK_ = (function spec_tools$parse$collection_type_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),type);
});
spec_tools.parse.leaf_type_QMARK_ = (function spec_tools$parse$leaf_type_QMARK_(type){
return (!(cljs.core.contains_QMARK_((spec_tools.parse.non_leaf_types.cljs$core$IFn$_invoke$arity$0 ? spec_tools.parse.non_leaf_types.cljs$core$IFn$_invoke$arity$0() : spec_tools.parse.non_leaf_types.call(null)),type)));
});
/**
 * Parses info out of a spec. Spec can be passed as a name, Spec or a form.
 *   Returns either `nil` or a map, with keys `:type` and other extra keys
 *   (like `:keys` for s/keys specs).
 */
spec_tools.parse.parse_spec = (function spec_tools$parse$parse_spec(x){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),x)){
return null;
} else {
if(cljs.core.qualified_keyword_QMARK_(x)){
var G__77709 = cljs.spec.alpha.form(cljs.spec.alpha.get_spec(x));
x = G__77709;
continue;
} else {
if((x instanceof cljs.core.Symbol)){
var G__77661 = spec_tools.impl.normalize_symbol(x);
var G__77662 = null;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__77661,G__77662) : spec_tools.parse.parse_form.call(null,G__77661,G__77662));
} else {
if(cljs.core.seq_QMARK_(x)){
var G__77663 = spec_tools.impl.normalize_symbol(cljs.core.first(x));
var G__77664 = x;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__77663,G__77664) : spec_tools.parse.parse_form.call(null,G__77663,G__77664));
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(x))){
var G__77714 = cljs.spec.alpha.form(x);
x = G__77714;
continue;
} else {
if(cljs.core.ifn_QMARK_(x)){
var G__77665 = spec_tools.impl.normalize_symbol(spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(x));
var G__77666 = null;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__77665,G__77666) : spec_tools.parse.parse_form.call(null,G__77665,G__77666));
} else {
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(x,null) : spec_tools.parse.parse_form.call(null,x,null));

}
}
}
}
}
}
break;
}
});
spec_tools.parse.parse_spec_with_spec_ref = (function spec_tools$parse$parse_spec_with_spec_ref(x){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.parse.parse_spec(x),((cljs.core.qualified_keyword_QMARK_(x))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null):null)], 0));
});
spec_tools.parse.get_keys = (function spec_tools$parse$get_keys(parse_data){
var or__4126__auto__ = new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460).cljs$core$IFn$_invoke$arity$1(parse_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__77667 = parse_data;
var G__77667__$1 = (((G__77667 == null))?null:new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600).cljs$core$IFn$_invoke$arity$1(G__77667));
var G__77667__$2 = (((G__77667__$1 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.get_keys,G__77667__$1));
var G__77667__$3 = (((G__77667__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__77667__$2));
var G__77667__$4 = (((G__77667__$3 == null))?null:cljs.core.seq(G__77667__$3));
if((G__77667__$4 == null)){
return null;
} else {
return cljs.core.set(G__77667__$4);
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.parse !== 'undefined') && (typeof spec_tools.parse.parse_form !== 'undefined')){
} else {
spec_tools.parse.parse_form = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.parse","default","spec-tools.parse/default",-1184283850)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77668 = cljs.core.get_global_hierarchy;
return (fexpr__77668.cljs$core$IFn$_invoke$arity$0 ? fexpr__77668.cljs$core$IFn$_invoke$arity$0() : fexpr__77668.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.parse","parse-form"),(function (dispatch,_){
return dispatch;
}),new cljs.core.Keyword("spec-tools.parse","default","spec-tools.parse/default",-1184283850),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.parse","default","spec-tools.parse/default",-1184283850),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}));
spec_tools.parse.non_leaf_types = (function spec_tools$parse$non_leaf_types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"nilable","nilable",1842307102),null], null), null);
});
spec_tools.parse.types = (function spec_tools$parse$types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"long","long",-171452093),null,new cljs.core.Keyword(null,"double","double",884886883),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"spec","spec",347520401),null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),null,new cljs.core.Keyword(null,"keyword","keyword",811389747),null,new cljs.core.Keyword(null,"ratio","ratio",-926560044),null,new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"uri","uri",-774711847),null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"nilable","nilable",1842307102),null], null), null);
});
spec_tools.parse.type_symbols = (function spec_tools$parse$type_symbols(){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(cljs.core.methods$(spec_tools.parse.parse_form))));
});
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","any?","clojure.core/any?",-1093069272,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.any_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.some_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","number?","clojure.core/number?",-1044499897,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","integer?","clojure.core/integer?",-1617881728,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","int?","clojure.core/int?",1026034806,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","pos-int?","clojure.core/pos-int?",-1946393424,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.pos_int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","neg-int?","clojure.core/neg-int?",-830554117,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.neg_int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","nat-int?","clojure.core/nat-int?",-65390525,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.nat_int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.float_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.double_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","boolean?","clojure.core/boolean?",1566259823,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","string?","clojure.core/string?",-1902673477,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","ident?","clojure.core/ident?",1397717549,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.ident_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","simple-ident?","clojure.core/simple-ident?",1706467712,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.simple_ident_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","qualified-ident?","clojure.core/qualified-ident?",-1630579588,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.qualified_ident_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","keyword?","clojure.core/keyword?",543424180,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","simple-keyword?","clojure.core/simple-keyword?",406342760,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.simple_keyword_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","qualified-keyword?","clojure.core/qualified-keyword?",-398139912,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","symbol?","clojure.core/symbol?",1587987784,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.symbol_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","simple-symbol?","clojure.core/simple-symbol?",-1919094963,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.simple_symbol_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","qualified-symbol?","clojure.core/qualified-symbol?",1469032566,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.qualified_symbol_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","uuid?","clojure.core/uuid?",-100722718,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","inst?","clojure.core/inst?",-1302678916,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.inst_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","seqable?","clojure.core/seqable?",-696461980,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.seqable_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","indexed?","clojure.core/indexed?",-1145703303,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.indexed_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","map?","clojure.core/map?",-1425864013,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.map_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","vector?","clojure.core/vector?",-1380385430,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.vector_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","list?","clojure.core/list?",-775099136,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.list_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","seq?","clojure.core/seq?",-1182659926,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.seq_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","char?","clojure.core/char?",372498287,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.char_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","set?","clojure.core/set?",-1275117977,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.set_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.nil_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","false?","clojure.core/false?",-1754275840,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.false_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","true?","clojure.core/true?",-21483202,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.true_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","zero?","clojure.core/zero?",-313584680,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.zero_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","coll?","clojure.core/coll?",1311547908,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.coll_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","empty?","clojure.core/empty?",1788889970,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.empty_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","associative?","clojure.core/associative?",634514106,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","sequential?","clojure.core/sequential?",1943138316,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.sequential_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("clojure.spec.alpha","unknown","clojure.spec.alpha/unknown",-246507596),(function (_,___$1){
return null;
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (_,form){
var map__77675 = spec_tools.impl.parse_keys(form);
var map__77675__$1 = (((((!((map__77675 == null))))?(((((map__77675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77675):map__77675);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77675__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77675__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77675__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77675__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var key__GT_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77675__$1,new cljs.core.Keyword(null,"key->spec","key->spec",1088543019));
var G__77677 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("spec-tools.parse","key->spec","spec-tools.parse/key->spec",1347735257),key__GT_spec,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req,opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req_un,opt_un], 0)))], null);
var G__77677__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = req;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return req_un;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77677,new cljs.core.Keyword("spec-tools.parse","keys-req","spec-tools.parse/keys-req",-1559250753),cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,req_un))):G__77677);
if(cljs.core.truth_((function (){var or__4126__auto__ = opt;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return opt_un;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77677__$1,new cljs.core.Keyword("spec-tools.parse","keys-opt","spec-tools.parse/keys-opt",-1090203455),cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,opt_un)));
} else {
return G__77677__$1;
}
}));
/**
 * Given a multi-spec form, call its multi method methods to retrieve
 * its subspecs.
 */
spec_tools.parse.get_multi_spec_sub_specs = (function spec_tools$parse$get_multi_spec_sub_specs(multi_spec_form){
var vec__77682 = multi_spec_form;
var seq__77683 = cljs.core.seq(vec__77682);
var first__77684 = cljs.core.first(seq__77683);
var seq__77683__$1 = cljs.core.next(seq__77683);
var _ = first__77684;
var first__77684__$1 = cljs.core.first(seq__77683__$1);
var seq__77683__$2 = cljs.core.next(seq__77683__$1);
var multi_method_symbol = first__77684__$1;
var ___$1 = seq__77683__$2;
var form = vec__77682;
var temp__5735__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.spec.alpha.form(v));
}),cljs.core.vals(cljs.spec.alpha.registry())));
if(cljs.core.truth_(temp__5735__auto__)){
var spec = temp__5735__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77685){
var vec__77686 = p__77685;
var spec_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77686,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77686,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_k,(method.cljs$core$IFn$_invoke$arity$1 ? method.cljs$core$IFn$_invoke$arity$1(null) : method.call(null,null))], null);
}),cljs.core.methods$(cljs.core.deref(spec.mmvar)));
} else {
return null;
}
});
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","multi-spec","clojure.spec.alpha/multi-spec",1408976740,null),(function (_,form){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253),cljs.core.last(form),new cljs.core.Keyword("spec-tools.parse","dispatch","spec-tools.parse/dispatch",1593226563),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,spec_tools.parse.get_multi_spec_sub_specs(form))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (_,form){
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(form)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),specs))))], null),new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600),specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (_,form){
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,cljs.core.rest(form));
var types = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),specs))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),types], null),new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600),specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (_,form){
var type_priority = (function (p1__77689_SHARP_){
var G__77691 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),(0),new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),(1)], null);
var G__77692 = (0);
var fexpr__77690 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__77689_SHARP_);
return (fexpr__77690.cljs$core$IFn$_invoke$arity$2 ? fexpr__77690.cljs$core$IFn$_invoke$arity$2(G__77691,G__77692) : fexpr__77690.call(null,G__77691,G__77692));
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.deep_merge,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(type_priority,cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec,cljs.core.rest(form))));
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (_,form){
var map__77693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),form));
var map__77693__$1 = (((((!((map__77693 == null))))?(((((map__77693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77693):map__77693);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77693__$1,new cljs.core.Keyword(null,"into","into",-150836029));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128),spec_tools.parse.parse_spec(cljs.core.second(form)),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.map_QMARK_(into))?new cljs.core.Keyword(null,"map-of","map-of",1189682355):((cljs.core.set_QMARK_(into))?new cljs.core.Keyword(null,"set","set",304602554):new cljs.core.Keyword(null,"vector","vector",1902966158)
))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (_,form){
var map__77695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),form));
var map__77695__$1 = (((((!((map__77695 == null))))?(((((map__77695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77695):map__77695);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77695__$1,new cljs.core.Keyword(null,"into","into",-150836029));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128),spec_tools.parse.parse_spec_with_spec_ref(cljs.core.second(form)),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.map_QMARK_(into))?new cljs.core.Keyword(null,"map-of","map-of",1189682355):((cljs.core.set_QMARK_(into))?new cljs.core.Keyword(null,"set","set",304602554):new cljs.core.Keyword(null,"vector","vector",1902966158)
))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (_,p__77697){
var vec__77698 = p__77697;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77698,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77698,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77698,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253),spec_tools.parse.parse_spec_with_spec_ref(k),new cljs.core.Keyword("spec-tools.parse","value","spec-tools.parse/value",-492706501),spec_tools.parse.parse_spec_with_spec_ref(v)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (_,form){
var parsed = spec_tools.parse.parse_spec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(cljs.core.last(form)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parsed))){
return parsed;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spec","spec",347520401)], null);
}
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,p__77701){
var vec__77702 = p__77701;
var seq__77703 = cljs.core.seq(vec__77702);
var first__77704 = cljs.core.first(seq__77703);
var seq__77703__$1 = cljs.core.next(seq__77703);
var ___$1 = first__77704;
var values = seq__77703__$1;
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,values);
var types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),specs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),types], null),new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600),specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (_,form){
var spec = spec_tools.parse.parse_spec_with_spec_ref(cljs.core.second(form));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nilable","nilable",1842307102),new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128),spec], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (_,form){
var type_priority = (function (p1__77705_SHARP_){
var G__77707 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),(1),new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),(0)], null);
var fexpr__77706 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__77705_SHARP_);
return (fexpr__77706.cljs$core$IFn$_invoke$arity$1 ? fexpr__77706.cljs$core$IFn$_invoke$arity$1(G__77707) : fexpr__77706.call(null,G__77707));
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.deep_merge,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(type_priority,cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec,cljs.core.rest(form))));
}));

//# sourceMappingURL=spec_tools.parse.js.map
