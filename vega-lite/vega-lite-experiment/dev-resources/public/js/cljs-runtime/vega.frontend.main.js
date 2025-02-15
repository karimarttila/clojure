goog.provide('vega.frontend.main');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
var module$node_modules$vega$build$vega_node=shadow.js.require("module$node_modules$vega$build$vega_node", {});
var module$node_modules$vega_lite$build$vega_lite=shadow.js.require("module$node_modules$vega_lite$build$vega_lite", {});
var module$node_modules$vega_lite_api$build$vega_lite_api=shadow.js.require("module$node_modules$vega_lite_api$build$vega_lite_api", {});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("vega.frontend.main","current-route","vega.frontend.main/current-route",442451384),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vega.frontend.main","initialize-db","vega.frontend.main/initialize-db",1592070672),(function (_,___$1){
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("reg-event-db - ::initialize-db");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vega.frontend.main","navigated","vega.frontend.main/navigated",22847612),(function (db,p__80894){
var vec__80895 = p__80894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80895,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80895,(1),null);
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("reg-event-db - ::navigated");

var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var new_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new_match);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
console.log(["new-path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_path)].join(''));

var G__80898 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",new_path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80898,new cljs.core.Keyword(null,"login","login",55217519),null);
} else {
return G__80898;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vega.frontend.main","navigate","vega.frontend.main/navigate",-837591499),(function (_,p__80899){
var vec__80900 = p__80899;
var seq__80901 = cljs.core.seq(vec__80900);
var first__80902 = cljs.core.first(seq__80901);
var seq__80901__$1 = cljs.core.next(seq__80901);
var ___$1 = first__80902;
var route = seq__80901__$1;
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("reg-event-fx - ::navigate");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("vega.frontend.main","navigate!","vega.frontend.main/navigate!",1709567676),route], null);
}));
vega.frontend.main.simple_data = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"A",new cljs.core.Keyword(null,"b","b",1482224470),(155)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"B",new cljs.core.Keyword(null,"b","b",1482224470),(55)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"C",new cljs.core.Keyword(null,"b","b",1482224470),(43)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"D",new cljs.core.Keyword(null,"b","b",1482224470),(91)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"E",new cljs.core.Keyword(null,"b","b",1482224470),(81)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"F",new cljs.core.Keyword(null,"b","b",1482224470),(53)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"G",new cljs.core.Keyword(null,"b","b",1482224470),(19)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"H",new cljs.core.Keyword(null,"b","b",1482224470),(87)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"I",new cljs.core.Keyword(null,"b","b",1482224470),(52)], null)], null);
vega.frontend.main.simple_data2 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"A",new cljs.core.Keyword(null,"b","b",1482224470),(55)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"B",new cljs.core.Keyword(null,"b","b",1482224470),(155)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"C",new cljs.core.Keyword(null,"b","b",1482224470),(43)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"D",new cljs.core.Keyword(null,"b","b",1482224470),(91)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"E",new cljs.core.Keyword(null,"b","b",1482224470),(181)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"F",new cljs.core.Keyword(null,"b","b",1482224470),(53)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"G",new cljs.core.Keyword(null,"b","b",1482224470),(99)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"H",new cljs.core.Keyword(null,"b","b",1482224470),(187)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"I",new cljs.core.Keyword(null,"b","b",1482224470),(52)], null)], null);
vega.frontend.main.bar_experiment_raw_spec = (function vega$frontend$main$bar_experiment_raw_spec(p__80903){
var map__80904 = p__80903;
var map__80904__$1 = (((((!((map__80904 == null))))?(((((map__80904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80904):map__80904);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80904__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"bar"], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"b",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"a",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null)], null);
});
vega.frontend.main.bar_experiment_vega_lite_api = (function vega$frontend$main$bar_experiment_vega_lite_api(p__80906){
var map__80907 = p__80906;
var map__80907__$1 = (((((!((map__80907 == null))))?(((((map__80907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80907):map__80907);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80907__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markBar().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldQ("b"),vega.frontend.components.my_vl.y().fieldN("a"));
});
vega.frontend.main.cars_columns_vega_lite_api = (function vega$frontend$main$cars_columns_vega_lite_api(p__80909){
var map__80910 = p__80909;
var map__80910__$1 = (((((!((map__80910 == null))))?(((((map__80910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80910):map__80910);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80910__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markCircle().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldQ("Horsepower"),vega.frontend.components.my_vl.y().fieldQ("Miles_per_Gallon"),vega.frontend.components.my_vl.column().field("Origin"));
});
vega.frontend.main.cars_counts_vega_lite_api = (function vega$frontend$main$cars_counts_vega_lite_api(p__80912){
var map__80913 = p__80912;
var map__80913__$1 = (((((!((map__80913 == null))))?(((((map__80913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80913):map__80913);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80913__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markBar().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.y().fieldN("Origin"),vega.frontend.components.my_vl.x().count());
});
vega.frontend.main.cars_avg_miles_per_gallon_vega_lite_api = (function vega$frontend$main$cars_avg_miles_per_gallon_vega_lite_api(p__80915){
var map__80916 = p__80915;
var map__80916__$1 = (((((!((map__80916 == null))))?(((((map__80916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80916):map__80916);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80916__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markBar().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.y().fieldN("Origin"),vega.frontend.components.my_vl.x().average("Miles_per_Gallon"));
});
vega.frontend.main.weather_colors = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["darkgray","paleturquoise","steelblue","gold","red"], null)], null);
vega.frontend.main.weather_bars_vega_lite_api = (function vega$frontend$main$weather_bars_vega_lite_api(p__80918){
var map__80919 = p__80918;
var map__80919__$1 = (((((!((map__80919 == null))))?(((((map__80919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80919):map__80919);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80919__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markBar().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldO("date").timeUnit("month").axis(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(-45),new cljs.core.Keyword(null,"formatType","formatType",-1770596014),"time",new cljs.core.Keyword(null,"format","format",-1306924766),"%m"], null))),vega.frontend.components.my_vl.y().count(),vega.frontend.components.my_vl.color().fieldN("weather").scale(cljs.core.clj__GT_js(vega.frontend.main.weather_colors)));
});
vega.frontend.main.weather_bars__PERCENT__vega_lite_api = (function vega$frontend$main$weather_bars__PERCENT__vega_lite_api(p__80921){
var map__80922 = p__80921;
var map__80922__$1 = (((((!((map__80922 == null))))?(((((map__80922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80922):map__80922);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80922__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markBar().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldO("date").timeUnit("month").axis(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(-45),new cljs.core.Keyword(null,"formatType","formatType",-1770596014),"time",new cljs.core.Keyword(null,"format","format",-1306924766),"%m"], null))),vega.frontend.components.my_vl.y().count().stack("normalize"),vega.frontend.components.my_vl.color().fieldN("weather").scale(cljs.core.clj__GT_js(vega.frontend.main.weather_colors)));
});
vega.frontend.main.weather_temp_circles_vega_lite_api_1 = (function vega$frontend$main$weather_temp_circles_vega_lite_api_1(p__80924){
var map__80925 = p__80924;
var map__80925__$1 = (((((!((map__80925 == null))))?(((((map__80925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80925):map__80925);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80925__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80925__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80925__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return vega.frontend.components.my_vl.markCircle().width(width).height(height).data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldT("date").timeUnit("monthdate").axis(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(-45),new cljs.core.Keyword(null,"formatType","formatType",-1770596014),"time",new cljs.core.Keyword(null,"format","format",-1306924766),"%m"], null))),vega.frontend.components.my_vl.y().fieldQ("temp_max"),vega.frontend.components.my_vl.color().fieldN("weather").scale(cljs.core.clj__GT_js(vega.frontend.main.weather_colors)));
});
vega.frontend.main.weather_temp_circles_vega_lite_api_2 = (function vega$frontend$main$weather_temp_circles_vega_lite_api_2(p__80927){
var map__80928 = p__80927;
var map__80928__$1 = (((((!((map__80928 == null))))?(((((map__80928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80928):map__80928);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80928__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80928__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80928__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return vega.frontend.components.my_vl.markCircle().width(width).height(height).data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldT("date").timeUnit("monthdate").axis(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(-45),new cljs.core.Keyword(null,"formatType","formatType",-1770596014),"time",new cljs.core.Keyword(null,"format","format",-1306924766),"%m"], null))),vega.frontend.components.my_vl.y().fieldQ("temp_max"),vega.frontend.components.my_vl.size().fieldQ("precipitation").scale(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(300)], null)], null))),vega.frontend.components.my_vl.color().fieldN("weather").scale(cljs.core.clj__GT_js(vega.frontend.main.weather_colors)));
});
vega.frontend.main.weather_temp_circles_vega_lite_api_3 = (function vega$frontend$main$weather_temp_circles_vega_lite_api_3(p__80930){
var map__80931 = p__80930;
var map__80931__$1 = (((((!((map__80931 == null))))?(((((map__80931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80931):map__80931);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80931__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markCircle().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().fieldO("date").timeUnit("monthyear").axis(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(-45),new cljs.core.Keyword(null,"formatType","formatType",-1770596014),"time",new cljs.core.Keyword(null,"format","format",-1306924766),"%Y-%m"], null))),vega.frontend.components.my_vl.y().fieldQ("temp_max"),vega.frontend.components.my_vl.color().fieldN("weather").scale(cljs.core.clj__GT_js(vega.frontend.main.weather_colors)));
});
vega.frontend.main.weather_condition_counts_vega_lite_api = (function vega$frontend$main$weather_condition_counts_vega_lite_api(p__80933){
var map__80934 = p__80933;
var map__80934__$1 = (((((!((map__80934 == null))))?(((((map__80934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80934):map__80934);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80934__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return vega.frontend.components.my_vl.markBar().data(cljs.core.clj__GT_js(data)).encode(vega.frontend.components.my_vl.x().count(),vega.frontend.components.my_vl.y().fieldN("weather"),vega.frontend.components.my_vl.color().fieldN("weather").scale(cljs.core.clj__GT_js(vega.frontend.main.weather_colors)));
});
vega.frontend.main.draw_it = (function vega$frontend$main$draw_it(graph,title,func_name,data_name,method){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box.mr-2.mb-2","div.box.mr-2.mb-2",831044238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"draw-it-box"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title.is-5","p.title.is-5",-773560169),title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(func_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),graph], null)], null)], null);
});
/**
 * This function uses vega-lite-api both to create the spec and also to render the spec to graph.
 */
vega.frontend.main.vega_lite_api_render_it = (function vega$frontend$main$vega_lite_api_render_it(func,data,p__80936){
var map__80937 = p__80936;
var map__80937__$1 = (((((!((map__80937 == null))))?(((((map__80937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80937):map__80937);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80937__$1,new cljs.core.Keyword(null,"title","title",636505583));
var func_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80937__$1,new cljs.core.Keyword(null,"func-name","func-name",1964358836));
var data_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80937__$1,new cljs.core.Keyword(null,"data-name","data-name",-1319407959));
var graph = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.components.vega_lite_api_render,func,data], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.draw_it,graph,title,func_name,data_name,"vega-lite-api render"], null);
});
/**
 * This function uses vega-lite-api to create the spec but uses vega-lite-wrapper to create the graph.
 */
vega.frontend.main.vega_lite_api_spec_and_vega_react_it = (function vega$frontend$main$vega_lite_api_spec_and_vega_react_it(func,data,p__80939){
var map__80940 = p__80939;
var map__80940__$1 = (((((!((map__80940 == null))))?(((((map__80940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80940):map__80940);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80940__$1,new cljs.core.Keyword(null,"title","title",636505583));
var func_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80940__$1,new cljs.core.Keyword(null,"func-name","func-name",1964358836));
var data_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80940__$1,new cljs.core.Keyword(null,"data-name","data-name",-1319407959));
var spec_obj = (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(data) : func.call(null,data));
var spec = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(spec_obj.toSpec());
var graph = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),vega.frontend.components.vega_lite_react_wrapper_old_style,spec], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.draw_it,graph,title,func_name,data_name,"vega-lite-react-wrapper"], null);
});
/**
 * This function uses raw vega specification (without data) and injects it with data to vega-react wrapper to create the graph.
 */
vega.frontend.main.vega_react_it_old_style = (function vega$frontend$main$vega_react_it_old_style(raw_spec_func,data,p__80942){
var map__80943 = p__80942;
var map__80943__$1 = (((((!((map__80943 == null))))?(((((map__80943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80943):map__80943);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80943__$1,new cljs.core.Keyword(null,"title","title",636505583));
var func_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80943__$1,new cljs.core.Keyword(null,"func-name","func-name",1964358836));
var data_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80943__$1,new cljs.core.Keyword(null,"data-name","data-name",-1319407959));
var spec = (raw_spec_func.cljs$core$IFn$_invoke$arity$1 ? raw_spec_func.cljs$core$IFn$_invoke$arity$1(data) : raw_spec_func.call(null,data));
var graph = vega.frontend.components.vega_lite_react_wrapper_old_style(spec);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.draw_it,graph,title,func_name,data_name,"vega-lite-react-wrapper"], null);
});
/**
 * This function uses raw vega specification (without data) and injects it with data to vega-react wrapper to create the graph.
 */
vega.frontend.main.vega_react_it = (function vega$frontend$main$vega_react_it(raw_spec_func,data,p__80945){
var map__80946 = p__80945;
var map__80946__$1 = (((((!((map__80946 == null))))?(((((map__80946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80946):map__80946);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"title","title",636505583));
var func_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"func-name","func-name",1964358836));
var data_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"data-name","data-name",-1319407959));
var spec = (raw_spec_func.cljs$core$IFn$_invoke$arity$1 ? raw_spec_func.cljs$core$IFn$_invoke$arity$1(data) : raw_spec_func.call(null,data));
var graph = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),vega.frontend.components.vega_lite_react_wrapper,spec], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.draw_it,graph,title,func_name,data_name,"vega-lite-react-wrapper"], null);
});
vega.frontend.main.home_page = (function vega$frontend$main$home_page(){
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("home-page");

var data_cars = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.data.cars","data-cars","vega.frontend.data.cars/data-cars",1095088424)], null)));
var _ = (cljs.core.truth_(data_cars)?null:re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.data.cars","get-data-cars","vega.frontend.data.cars/get-data-cars",781001011)], null)));
var data_seattle_weather = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.data.seattle-weather","data-seattle-weather","vega.frontend.data.seattle-weather/data-seattle-weather",858052795)], null)));
var ___$1 = (cljs.core.truth_(data_cars)?null:re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.data.seattle-weather","get-data-seattle-weather","vega.frontend.data.seattle-weather/get-data-seattle-weather",-1165160244)], null)));
if(cljs.core.truth_((function (){var and__4115__auto__ = data_cars;
if(cljs.core.truth_(and__4115__auto__)){
return data_seattle_weather;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-multiline.is-mobile","div.columns.is-multiline.is-mobile",-1279019852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"home-page-columns"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.weather_bars_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_seattle_weather], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Weather, bars by month, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"weather-bars-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-seattle-weather"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.weather_bars__PERCENT__vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_seattle_weather], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Weather, bars by month-%, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"weather-bars-%-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-seattle-weather"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.weather_temp_circles_vega_lite_api_1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data_seattle_weather,new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Weather, temperatures, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"weather-temp-circles-vega-lite-api-1",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-seattle-weather"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.weather_temp_circles_vega_lite_api_2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data_seattle_weather,new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Weather, temperatures, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"weather-temp-circles-vega-lite-api-2",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-seattle-weather"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.weather_condition_counts_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_seattle_weather], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Condition, counts, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"weather-condition-counts-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-seattle-weather"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.weather_temp_circles_vega_lite_api_3,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_seattle_weather], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Weather, temperatures, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"weather-temp-circles-vega-lite-api-3",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-seattle-weather"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_react_it,vega.frontend.data.cars.simple_scatter,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data_cars,new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Scatter chart, vega-lite react-wrapper",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"v-cars/simple-scatter",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-cars"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_react_it,vega.frontend.data.cars.complex_scatter1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data_cars,new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Complex Scatter chart, vega-lite react-wrapper",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"v-cars/complex-scatter1",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-cars"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.cars_columns_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_cars], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Cars, columns, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"cars-columns-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-cars"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.cars_counts_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_cars], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Cars, counts, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"cars-counts-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-cars"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.cars_avg_miles_per_gallon_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data_cars], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Cars, averages, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"cars-avg-miles-per-gallon-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"data-cars"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.bar_experiment_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),vega.frontend.main.simple_data], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Bar, vega-lite-api render",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"bar-experiment-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"simple-data"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_render_it,vega.frontend.main.bar_experiment_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),vega.frontend.main.simple_data2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Same Bar, different data",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"bar-experiment-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"simple-data2"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_react_it_old_style,vega.frontend.main.bar_experiment_raw_spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),vega.frontend.main.simple_data], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Bar, vega-lite-react-wrapper, old style",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"bar-experiment-raw-spec",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"simple-data"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_react_it,vega.frontend.main.bar_experiment_raw_spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),vega.frontend.main.simple_data], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Bar, vega-lite-react-wrapper",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"bar-experiment-raw-spec",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"simple-data"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.vega_lite_api_spec_and_vega_react_it,vega.frontend.main.bar_experiment_vega_lite_api,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),vega.frontend.main.simple_data], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Bar, vega-lite-react wrapper",new cljs.core.Keyword(null,"func-name","func-name",1964358836),"bar-experiment-vega-lite-api",new cljs.core.Keyword(null,"data-name","data-name",-1319407959),"simple-data"], null)], null)], null)], null);
} else {
return null;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword("vega.frontend.main","navigate!","vega.frontend.main/navigate!",1709567676),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
/**
 * Return relative url for given route. Url can be used in HTML links.
 */
vega.frontend.main.href = (function vega$frontend$main$href(var_args){
var G__80949 = arguments.length;
switch (G__80949) {
case 1:
return vega.frontend.main.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vega.frontend.main.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return vega.frontend.main.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vega.frontend.main.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return vega.frontend.main.href.cljs$core$IFn$_invoke$arity$3(k,null,null);
}));

(vega.frontend.main.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return vega.frontend.main.href.cljs$core$IFn$_invoke$arity$3(k,params,null);
}));

(vega.frontend.main.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));

(vega.frontend.main.href.cljs$lang$maxFixedArity = 3);

vega.frontend.main.routes_dev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("vega.frontend.main","home","vega.frontend.main/home",-1645373645),new cljs.core.Keyword(null,"view","view",1247994814),vega.frontend.main.home_page,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Home",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__80951__delegate = function (params){
return console.log(["Entering home page, params: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)].join(''));
};
var G__80951 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__80952__i = 0, G__80952__a = new Array(arguments.length -  0);
while (G__80952__i < G__80952__a.length) {G__80952__a[G__80952__i] = arguments[G__80952__i + 0]; ++G__80952__i;}
  params = new cljs.core.IndexedSeq(G__80952__a,0,null);
} 
return G__80951__delegate.call(this,params);};
G__80951.cljs$lang$maxFixedArity = 0;
G__80951.cljs$lang$applyTo = (function (arglist__80953){
var params = cljs.core.seq(arglist__80953);
return G__80951__delegate(params);
});
G__80951.cljs$core$IFn$_invoke$arity$variadic = G__80951__delegate;
return G__80951;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__80954__delegate = function (params){
return console.log(["Leaving home page, params: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)].join(''));
};
var G__80954 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__80955__i = 0, G__80955__a = new Array(arguments.length -  0);
while (G__80955__i < G__80955__a.length) {G__80955__a[G__80955__i] = arguments[G__80955__i + 0]; ++G__80955__i;}
  params = new cljs.core.IndexedSeq(G__80955__a,0,null);
} 
return G__80954__delegate.call(this,params);};
G__80954.cljs$lang$maxFixedArity = 0;
G__80954.cljs$lang$applyTo = (function (arglist__80956){
var params = cljs.core.seq(arglist__80956);
return G__80954__delegate(params);
});
G__80954.cljs$core$IFn$_invoke$arity$variadic = G__80954__delegate;
return G__80954;
})()
], null)], null)], null)], null)], null);
vega.frontend.main.routes = vega.frontend.main.routes_dev;
vega.frontend.main.on_navigate = (function vega$frontend$main$on_navigate(new_match){
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2("on-navigate, new-match",new_match);

if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.main","navigated","vega.frontend.main/navigated",22847612),new_match], null));
} else {
return null;
}
});
vega.frontend.main.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(vega.frontend.main.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
vega.frontend.main.init_routes_BANG_ = (function vega$frontend$main$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(vega.frontend.main.router,vega.frontend.main.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
vega.frontend.main.router_component = (function vega$frontend$main$router_component(_){
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("ENTER router-component");

var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.main","current-route","vega.frontend.main/current-route",442451384)], null)));
var path_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(current_route);
var ___$1 = vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2("router-component, path-params",path_params);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero.is-small","section.hero.is-small",1057977243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.has-text-centered","h1.title.has-text-centered",-1494230693),"Vega Experimentation"], null)], null)], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route)),current_route], null):null)], null);
});
vega.frontend.main.debug_QMARK_ = goog.DEBUG;
vega.frontend.main.debug = true;
vega.frontend.main.dev_setup = (function vega$frontend$main$dev_setup(){
console.log("ENTER main dev-setup");

if(vega.frontend.main.debug){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
vega.frontend.main.start = (function vega$frontend$main$start(){
console.log("ENTER main start");

re_frame.core.clear_subscription_cache_BANG_();

vega.frontend.main.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega.frontend.main.router_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),vega.frontend.main.router], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_dev_tools.core.dev_state)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reagent_dev_tools.core.dev_state))),"px"].join('')], null)], null):null)], null),document.getElementById("app"));
});
vega.frontend.main.init = (function vega$frontend$main$init(){
console.log("ENTER main init");

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vega.frontend.main","initialize-db","vega.frontend.main/initialize-db",1592070672)], null));

reagent_dev_tools.core.start_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),re_frame.db.app_db], null));

vega.frontend.main.dev_setup();

return vega.frontend.main.start();
});
goog.exportSymbol('vega.frontend.main.init', vega.frontend.main.init);
vega.frontend.main.stop = (function vega$frontend$main$stop(){
return console.log("ENTER main stop");
});

//# sourceMappingURL=vega.frontend.main.js.map
