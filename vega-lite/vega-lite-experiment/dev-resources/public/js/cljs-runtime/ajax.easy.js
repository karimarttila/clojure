goog.provide('ajax.easy');
ajax.easy.default_formats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.transit.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.transit.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.json.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.formats.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.formats.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.formats.raw_response_format], null)], null));
ajax.easy.detect_response_format = (function ajax$easy$detect_response_format(var_args){
var G__75859 = arguments.length;
switch (G__75859) {
case 0:
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.formats.detect_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.deref(ajax.easy.default_formats)], null));
}));

(ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.formats.detect_response_format(opts);
}));

(ajax.easy.detect_response_format.cljs$lang$maxFixedArity = 1);

ajax.easy.keyword_request_format = (function ajax$easy$keyword_request_format(format,format_params){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__75860 = format;
var G__75860__$1 = (((G__75860 instanceof cljs.core.Keyword))?G__75860.fqn:null);
switch (G__75860__$1) {
case "transit":
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.json.json_request_format();

break;
case "text":
return ajax.formats.text_request_format();

break;
case "raw":
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "url":
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.easy.keyword_response_format_element = (function ajax$easy$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),(function (){var G__75863 = cljs.core.second(format);
var G__75864 = format_params;
return (ajax.easy.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2 ? ajax.easy.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2(G__75863,G__75864) : ajax.easy.keyword_response_format_element.call(null,G__75863,G__75864));
})()], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__75865 = format;
var G__75865__$1 = (((G__75865 instanceof cljs.core.Keyword))?G__75865.fqn:null);
switch (G__75865__$1) {
case "transit":
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.json.json_response_format(format_params);

break;
case "text":
return (ajax.formats.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.formats.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.formats.text_response_format.call(null));

break;
case "ring":
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.easy.keyword_response_format = (function ajax$easy$keyword_response_format(format,format_params){

if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75866_SHARP_){
return ajax.easy.keyword_response_format_element(p1__75866_SHARP_,format_params);
}),format));
} else {
return ajax.easy.keyword_response_format_element(format,format_params);
}
});
ajax.easy.print_response = (function ajax$easy$print_response(response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX response:",response], 0));
});
/**
 * This gets called if you forget to attach a handler to an easy
 *   API function.
 */
ajax.easy.default_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.easy.print_response);
ajax.easy.print_error_response = (function ajax$easy$print_error_response(response){
if((typeof console !== 'undefined')){
return console.error(response);
} else {
if((typeof window !== 'undefined')){
return window.alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX ERROR:",response], 0));

}
}
});
/**
 * This will be called when errors occur if you don't supply
 * an error handler to the easy API functions. If you don't
 * want it writing errors to the console (or worse, flashing up
 * alerts), make sure you always handle errors.
 */
ajax.easy.default_error_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.easy.print_error_response);
/**
 * Converts easy API handlers to a `ajax-request` handler
 */
ajax.easy.transform_handler = (function ajax$easy$transform_handler(p__75881){
var map__75882 = p__75881;
var map__75882__$1 = (((((!((map__75882 == null))))?(((((map__75882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75882):map__75882);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75882__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75882__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75882__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__4126__auto__ = handler;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(ajax.easy.default_handler);
}
})();
var e = (function (){var or__4126__auto__ = error_handler;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(ajax.easy.default_error_handler);
}
})();
return (function ajax$easy$transform_handler_$_easy_handler(p__75887){
var vec__75888 = p__75887;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75888,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75888,(1),null);
var fexpr__75894_75928 = (cljs.core.truth_(ok)?h:e);
(fexpr__75894_75928.cljs$core$IFn$_invoke$arity$1 ? fexpr__75894_75928.cljs$core$IFn$_invoke$arity$1(result) : fexpr__75894_75928.call(null,result));

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
});
ajax.easy.transform_opts = (function ajax$easy$transform_opts(p__75895){
var map__75896 = p__75895;
var map__75896__$1 = (((((!((map__75896 == null))))?(((((map__75896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75896):map__75896);
var opts = map__75896__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75896__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75896__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75896__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75896__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75896__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = (((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")));
var rf = (cljs.core.truth_((function (){var or__4126__auto__ = format;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return needs_format;
}
})())?ajax.easy.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.easy.transform_handler(opts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.easy.keyword_response_format(response_format,opts)], 0));
});
ajax.easy.easy_ajax_request = (function ajax$easy$easy_ajax_request(uri,method,opts){
return ajax.simple.ajax_request(ajax.easy.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"method","method",55703592),method], 0))));
});

//# sourceMappingURL=ajax.easy.js.map
