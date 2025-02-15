goog.provide('vega.frontend.components');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react_vega$lib$index=shadow.js.require("module$node_modules$react_vega$lib$index", {});
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
var module$node_modules$vega$build$vega_node=shadow.js.require("module$node_modules$vega$build$vega_node", {});
var module$node_modules$vega_lite$build$vega_lite=shadow.js.require("module$node_modules$vega_lite$build$vega_lite", {});
var module$node_modules$vega_lite_api$build$vega_lite_api=shadow.js.require("module$node_modules$vega_lite_api$build$vega_lite_api", {});
vega.frontend.components.debug = true;
if((typeof vega !== 'undefined') && (typeof vega.frontend !== 'undefined') && (typeof vega.frontend.components !== 'undefined') && (typeof vega.frontend.components.my_vl !== 'undefined')){
} else {
vega.frontend.components.my_vl = module$node_modules$vega_lite_api$build$vega_lite_api.register(module$node_modules$vega$build$vega_node,module$node_modules$vega_lite$build$vega_lite,({"view": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),"canvas"], null)}));
}
vega.frontend.components.render_it = (function vega$frontend$components$render_it(dom_node,spec){
console.log(dom_node);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec.render().then((function (viewElement){
return dom_node.appendChild(viewElement);
}))], null);
});
/**
 * Reagent component that renders vega
 */
vega.frontend.components.vega_lite_api_render = (function vega$frontend$components$vega_lite_api_render(func,data){
var spec = (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(data) : func.call(null,data));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return vega.frontend.components.render_it(reagent.dom.dom_node(this$),spec);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viz","div.viz",1155063891)], null);
})], null));
});
vega.frontend.components.vega_lite_react_wrapper = (function vega$frontend$components$vega_lite_react_wrapper(spec){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(module$node_modules$react_vega$lib$index.VegaLite,({"spec": spec}));
});
vega.frontend.components.vega_lite_react_wrapper_old_style = (function vega$frontend$components$vega_lite_react_wrapper_old_style(spec){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(module$node_modules$react_vega$lib$index.VegaLite,({"spec": cljs.core.clj__GT_js(spec)}));
});

//# sourceMappingURL=vega.frontend.components.js.map
