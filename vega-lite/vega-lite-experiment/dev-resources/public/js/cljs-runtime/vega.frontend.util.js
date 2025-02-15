goog.provide('vega.frontend.util');
/**
 * Javascript console logger helper.
 */
vega.frontend.util.clog = (function vega$frontend$util$clog(var_args){
var G__80746 = arguments.length;
switch (G__80746) {
case 1:
return vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2(msg,null);
}));

(vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2 = (function (msg,data){
var buf = (cljs.core.truth_(data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''):msg);
return console.log(buf);
}));

(vega.frontend.util.clog.cljs$lang$maxFixedArity = 2);

vega.frontend.util.debug = true;
vega.frontend.util.backend_host_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),(7501)], null);
vega.frontend.util.get_base_url = (function vega$frontend$util$get_base_url(){
var host = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(vega.frontend.util.backend_host_config);
var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(vega.frontend.util.backend_host_config);
var url = ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
return url;
});
/**
 * Debug panel - you can use this panel in any view to show some page specific debug data.
 */
vega.frontend.util.debug_panel = (function vega$frontend$util$debug_panel(data){
if(vega.frontend.util.debug){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.e-debug-panel","div.e-debug-panel",-1363616413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.e-debug-panel.hr","hr.e-debug-panel.hr",1753845079)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.e-debug-panel.header","h3.e-debug-panel.header",288876437),"DEBUG-PANEL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.e-debug-panel.body","pre.e-debug-panel.body",1369856427),(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80768_80774 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80769_80775 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80770_80776 = true;
var _STAR_print_fn_STAR__temp_val__80771_80777 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80770_80776);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80771_80777);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80769_80775);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80768_80774);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=vega.frontend.util.js.map
