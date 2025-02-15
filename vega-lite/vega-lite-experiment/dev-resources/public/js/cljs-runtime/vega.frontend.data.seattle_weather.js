goog.provide('vega.frontend.data.seattle_weather');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vega.frontend.data.seattle-weather","ret-ok-data-seattle-weather","vega.frontend.data.seattle-weather/ret-ok-data-seattle-weather",-343036334),(function (db,p__80858){
var vec__80859 = p__80858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80859,(0),null);
var res_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80859,(1),null);
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("reg-event-db ok");

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"seattle-weather","seattle-weather",348173532),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"res-body","res-body",-1380404550),res_body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"res-body","res-body",-1380404550)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"data","data",-232669377))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"seattle-weather","seattle-weather",348173532),new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(res_body));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vega.frontend.data.seattle-weather","ret-failed-data-seattle-weather","vega.frontend.data.seattle-weather/ret-failed-data-seattle-weather",-1064595104),(function (db,p__80862){
var vec__80863 = p__80862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80863,(0),null);
var res_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80863,(1),null);
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$2("reg-event-db failed",db);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"seattle-weather","seattle-weather",348173532),new cljs.core.Keyword(null,"response","response",-1068424192)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword(null,"msg","msg",-1386103444),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"msg","msg",-1386103444)], null))], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vega.frontend.data.seattle-weather","get-data-seattle-weather","vega.frontend.data.seattle-weather/get-data-seattle-weather",-1165160244),(function (p__80866,p__80867){
var map__80869 = p__80866;
var map__80869__$1 = (((((!((map__80869 == null))))?(((((map__80869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80869):map__80869);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__80870 = p__80867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80870,(0),null);
vega.frontend.util.clog.cljs$core$IFn$_invoke$arity$1("get-data-seattle-weather");

return vega.frontend.http.http_get(db,"/vega/api/data/seattle-weather/",null,new cljs.core.Keyword("vega.frontend.data.seattle-weather","ret-ok-data-seattle-weather","vega.frontend.data.seattle-weather/ret-ok-data-seattle-weather",-343036334),new cljs.core.Keyword("vega.frontend.data.seattle-weather","ret-failed-data-seattle-weather","vega.frontend.data.seattle-weather/ret-failed-data-seattle-weather",-1064595104));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("vega.frontend.data.seattle-weather","data-seattle-weather","vega.frontend.data.seattle-weather/data-seattle-weather",858052795),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"seattle-weather","seattle-weather",348173532).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db)));
})], 0));

//# sourceMappingURL=vega.frontend.data.seattle_weather.js.map
