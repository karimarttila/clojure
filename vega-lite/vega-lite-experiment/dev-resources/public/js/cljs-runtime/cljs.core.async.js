goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62347 = arguments.length;
switch (G__62347) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62352 = (function (f,blockable,meta62353){
this.f = f;
this.blockable = blockable;
this.meta62353 = meta62353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62354,meta62353__$1){
var self__ = this;
var _62354__$1 = this;
return (new cljs.core.async.t_cljs$core$async62352(self__.f,self__.blockable,meta62353__$1));
}));

(cljs.core.async.t_cljs$core$async62352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62354){
var self__ = this;
var _62354__$1 = this;
return self__.meta62353;
}));

(cljs.core.async.t_cljs$core$async62352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62353","meta62353",-1474494950,null)], null);
}));

(cljs.core.async.t_cljs$core$async62352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62352");

(cljs.core.async.t_cljs$core$async62352.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62352.
 */
cljs.core.async.__GT_t_cljs$core$async62352 = (function cljs$core$async$__GT_t_cljs$core$async62352(f__$1,blockable__$1,meta62353){
return (new cljs.core.async.t_cljs$core$async62352(f__$1,blockable__$1,meta62353));
});

}

return (new cljs.core.async.t_cljs$core$async62352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__62392 = arguments.length;
switch (G__62392) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__62406 = arguments.length;
switch (G__62406) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__62411 = arguments.length;
switch (G__62411) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_64756 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64756) : fn1.call(null,val_64756));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64756) : fn1.call(null,val_64756));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__62422 = arguments.length;
switch (G__62422) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___64764 = n;
var x_64765 = (0);
while(true){
if((x_64765 < n__4613__auto___64764)){
(a[x_64765] = x_64765);

var G__64766 = (x_64765 + (1));
x_64765 = G__64766;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62442 = (function (flag,meta62443){
this.flag = flag;
this.meta62443 = meta62443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62444,meta62443__$1){
var self__ = this;
var _62444__$1 = this;
return (new cljs.core.async.t_cljs$core$async62442(self__.flag,meta62443__$1));
}));

(cljs.core.async.t_cljs$core$async62442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62444){
var self__ = this;
var _62444__$1 = this;
return self__.meta62443;
}));

(cljs.core.async.t_cljs$core$async62442.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62442.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62443","meta62443",-162636660,null)], null);
}));

(cljs.core.async.t_cljs$core$async62442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62442");

(cljs.core.async.t_cljs$core$async62442.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62442.
 */
cljs.core.async.__GT_t_cljs$core$async62442 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62442(flag__$1,meta62443){
return (new cljs.core.async.t_cljs$core$async62442(flag__$1,meta62443));
});

}

return (new cljs.core.async.t_cljs$core$async62442(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62453 = (function (flag,cb,meta62454){
this.flag = flag;
this.cb = cb;
this.meta62454 = meta62454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62455,meta62454__$1){
var self__ = this;
var _62455__$1 = this;
return (new cljs.core.async.t_cljs$core$async62453(self__.flag,self__.cb,meta62454__$1));
}));

(cljs.core.async.t_cljs$core$async62453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62455){
var self__ = this;
var _62455__$1 = this;
return self__.meta62454;
}));

(cljs.core.async.t_cljs$core$async62453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62454","meta62454",947510059,null)], null);
}));

(cljs.core.async.t_cljs$core$async62453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62453");

(cljs.core.async.t_cljs$core$async62453.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62453.
 */
cljs.core.async.__GT_t_cljs$core$async62453 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62453(flag__$1,cb__$1,meta62454){
return (new cljs.core.async.t_cljs$core$async62453(flag__$1,cb__$1,meta62454));
});

}

return (new cljs.core.async.t_cljs$core$async62453(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62460_SHARP_){
var G__62463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62460_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62463) : fret.call(null,G__62463));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62461_SHARP_){
var G__62464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62461_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62464) : fret.call(null,G__62464));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__64771 = (i + (1));
i = G__64771;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64773 = arguments.length;
var i__4737__auto___64774 = (0);
while(true){
if((i__4737__auto___64774 < len__4736__auto___64773)){
args__4742__auto__.push((arguments[i__4737__auto___64774]));

var G__64775 = (i__4737__auto___64774 + (1));
i__4737__auto___64774 = G__64775;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62467){
var map__62468 = p__62467;
var map__62468__$1 = (((((!((map__62468 == null))))?(((((map__62468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62468):map__62468);
var opts = map__62468__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62465){
var G__62466 = cljs.core.first(seq62465);
var seq62465__$1 = cljs.core.next(seq62465);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62466,seq62465__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__62474 = arguments.length;
switch (G__62474) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__62265__auto___64778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62510){
var state_val_62513 = (state_62510[(1)]);
if((state_val_62513 === (7))){
var inst_62501 = (state_62510[(2)]);
var state_62510__$1 = state_62510;
var statearr_62521_64779 = state_62510__$1;
(statearr_62521_64779[(2)] = inst_62501);

(statearr_62521_64779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (1))){
var state_62510__$1 = state_62510;
var statearr_62528_64780 = state_62510__$1;
(statearr_62528_64780[(2)] = null);

(statearr_62528_64780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (4))){
var inst_62484 = (state_62510[(7)]);
var inst_62484__$1 = (state_62510[(2)]);
var inst_62485 = (inst_62484__$1 == null);
var state_62510__$1 = (function (){var statearr_62529 = state_62510;
(statearr_62529[(7)] = inst_62484__$1);

return statearr_62529;
})();
if(cljs.core.truth_(inst_62485)){
var statearr_62530_64783 = state_62510__$1;
(statearr_62530_64783[(1)] = (5));

} else {
var statearr_62531_64784 = state_62510__$1;
(statearr_62531_64784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (13))){
var state_62510__$1 = state_62510;
var statearr_62532_64785 = state_62510__$1;
(statearr_62532_64785[(2)] = null);

(statearr_62532_64785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (6))){
var inst_62484 = (state_62510[(7)]);
var state_62510__$1 = state_62510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62510__$1,(11),to,inst_62484);
} else {
if((state_val_62513 === (3))){
var inst_62503 = (state_62510[(2)]);
var state_62510__$1 = state_62510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62510__$1,inst_62503);
} else {
if((state_val_62513 === (12))){
var state_62510__$1 = state_62510;
var statearr_62533_64786 = state_62510__$1;
(statearr_62533_64786[(2)] = null);

(statearr_62533_64786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (2))){
var state_62510__$1 = state_62510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62510__$1,(4),from);
} else {
if((state_val_62513 === (11))){
var inst_62494 = (state_62510[(2)]);
var state_62510__$1 = state_62510;
if(cljs.core.truth_(inst_62494)){
var statearr_62534_64787 = state_62510__$1;
(statearr_62534_64787[(1)] = (12));

} else {
var statearr_62537_64788 = state_62510__$1;
(statearr_62537_64788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (9))){
var state_62510__$1 = state_62510;
var statearr_62539_64789 = state_62510__$1;
(statearr_62539_64789[(2)] = null);

(statearr_62539_64789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (5))){
var state_62510__$1 = state_62510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62542_64790 = state_62510__$1;
(statearr_62542_64790[(1)] = (8));

} else {
var statearr_62543_64797 = state_62510__$1;
(statearr_62543_64797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (14))){
var inst_62499 = (state_62510[(2)]);
var state_62510__$1 = state_62510;
var statearr_62544_64798 = state_62510__$1;
(statearr_62544_64798[(2)] = inst_62499);

(statearr_62544_64798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (10))){
var inst_62491 = (state_62510[(2)]);
var state_62510__$1 = state_62510;
var statearr_62548_64799 = state_62510__$1;
(statearr_62548_64799[(2)] = inst_62491);

(statearr_62548_64799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62513 === (8))){
var inst_62488 = cljs.core.async.close_BANG_(to);
var state_62510__$1 = state_62510;
var statearr_62551_64800 = state_62510__$1;
(statearr_62551_64800[(2)] = inst_62488);

(statearr_62551_64800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_62554 = [null,null,null,null,null,null,null,null];
(statearr_62554[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_62554[(1)] = (1));

return statearr_62554;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_62510){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62510);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62557){var ex__62169__auto__ = e62557;
var statearr_62559_64801 = state_62510;
(statearr_62559_64801[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62510[(4)]))){
var statearr_62560_64802 = state_62510;
(statearr_62560_64802[(1)] = cljs.core.first((state_62510[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64803 = state_62510;
state_62510 = G__64803;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_62510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_62510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62561 = f__62266__auto__();
(statearr_62561[(6)] = c__62265__auto___64778);

return statearr_62561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__62571){
var vec__62572 = p__62571;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62572,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62572,(1),null);
var job = vec__62572;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62265__auto___64806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62579){
var state_val_62580 = (state_62579[(1)]);
if((state_val_62580 === (1))){
var state_62579__$1 = state_62579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62579__$1,(2),res,v);
} else {
if((state_val_62580 === (2))){
var inst_62576 = (state_62579[(2)]);
var inst_62577 = cljs.core.async.close_BANG_(res);
var state_62579__$1 = (function (){var statearr_62585 = state_62579;
(statearr_62585[(7)] = inst_62576);

return statearr_62585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62579__$1,inst_62577);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0 = (function (){
var statearr_62586 = [null,null,null,null,null,null,null,null];
(statearr_62586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__);

(statearr_62586[(1)] = (1));

return statearr_62586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1 = (function (state_62579){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62579);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62587){var ex__62169__auto__ = e62587;
var statearr_62588_64809 = state_62579;
(statearr_62588_64809[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62579[(4)]))){
var statearr_62590_64810 = state_62579;
(statearr_62590_64810[(1)] = cljs.core.first((state_62579[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64811 = state_62579;
state_62579 = G__64811;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = function(state_62579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1.call(this,state_62579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62595 = f__62266__auto__();
(statearr_62595[(6)] = c__62265__auto___64806);

return statearr_62595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62596){
var vec__62597 = p__62596;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62597,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62597,(1),null);
var job = vec__62597;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___64813 = n;
var __64814 = (0);
while(true){
if((__64814 < n__4613__auto___64813)){
var G__62600_64815 = type;
var G__62600_64816__$1 = (((G__62600_64815 instanceof cljs.core.Keyword))?G__62600_64815.fqn:null);
switch (G__62600_64816__$1) {
case "compute":
var c__62265__auto___64818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64814,c__62265__auto___64818,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async){
return (function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = ((function (__64814,c__62265__auto___64818,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async){
return (function (state_62617){
var state_val_62619 = (state_62617[(1)]);
if((state_val_62619 === (1))){
var state_62617__$1 = state_62617;
var statearr_62621_64820 = state_62617__$1;
(statearr_62621_64820[(2)] = null);

(statearr_62621_64820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62619 === (2))){
var state_62617__$1 = state_62617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62617__$1,(4),jobs);
} else {
if((state_val_62619 === (3))){
var inst_62615 = (state_62617[(2)]);
var state_62617__$1 = state_62617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62617__$1,inst_62615);
} else {
if((state_val_62619 === (4))){
var inst_62607 = (state_62617[(2)]);
var inst_62608 = process(inst_62607);
var state_62617__$1 = state_62617;
if(cljs.core.truth_(inst_62608)){
var statearr_62622_64821 = state_62617__$1;
(statearr_62622_64821[(1)] = (5));

} else {
var statearr_62624_64822 = state_62617__$1;
(statearr_62624_64822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62619 === (5))){
var state_62617__$1 = state_62617;
var statearr_62625_64823 = state_62617__$1;
(statearr_62625_64823[(2)] = null);

(statearr_62625_64823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62619 === (6))){
var state_62617__$1 = state_62617;
var statearr_62626_64825 = state_62617__$1;
(statearr_62626_64825[(2)] = null);

(statearr_62626_64825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62619 === (7))){
var inst_62613 = (state_62617[(2)]);
var state_62617__$1 = state_62617;
var statearr_62627_64826 = state_62617__$1;
(statearr_62627_64826[(2)] = inst_62613);

(statearr_62627_64826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64814,c__62265__auto___64818,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async))
;
return ((function (__64814,switch__62165__auto__,c__62265__auto___64818,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0 = (function (){
var statearr_62629 = [null,null,null,null,null,null,null];
(statearr_62629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__);

(statearr_62629[(1)] = (1));

return statearr_62629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1 = (function (state_62617){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62617);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62630){var ex__62169__auto__ = e62630;
var statearr_62631_64827 = state_62617;
(statearr_62631_64827[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62617[(4)]))){
var statearr_62632_64828 = state_62617;
(statearr_62632_64828[(1)] = cljs.core.first((state_62617[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64829 = state_62617;
state_62617 = G__64829;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = function(state_62617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1.call(this,state_62617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__;
})()
;})(__64814,switch__62165__auto__,c__62265__auto___64818,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async))
})();
var state__62267__auto__ = (function (){var statearr_62634 = f__62266__auto__();
(statearr_62634[(6)] = c__62265__auto___64818);

return statearr_62634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
});})(__64814,c__62265__auto___64818,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async))
);


break;
case "async":
var c__62265__auto___64830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64814,c__62265__auto___64830,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async){
return (function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = ((function (__64814,c__62265__auto___64830,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async){
return (function (state_62648){
var state_val_62650 = (state_62648[(1)]);
if((state_val_62650 === (1))){
var state_62648__$1 = state_62648;
var statearr_62656_64831 = state_62648__$1;
(statearr_62656_64831[(2)] = null);

(statearr_62656_64831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62650 === (2))){
var state_62648__$1 = state_62648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62648__$1,(4),jobs);
} else {
if((state_val_62650 === (3))){
var inst_62645 = (state_62648[(2)]);
var state_62648__$1 = state_62648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62648__$1,inst_62645);
} else {
if((state_val_62650 === (4))){
var inst_62637 = (state_62648[(2)]);
var inst_62638 = async(inst_62637);
var state_62648__$1 = state_62648;
if(cljs.core.truth_(inst_62638)){
var statearr_62657_64834 = state_62648__$1;
(statearr_62657_64834[(1)] = (5));

} else {
var statearr_62659_64835 = state_62648__$1;
(statearr_62659_64835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62650 === (5))){
var state_62648__$1 = state_62648;
var statearr_62660_64836 = state_62648__$1;
(statearr_62660_64836[(2)] = null);

(statearr_62660_64836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62650 === (6))){
var state_62648__$1 = state_62648;
var statearr_62661_64837 = state_62648__$1;
(statearr_62661_64837[(2)] = null);

(statearr_62661_64837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62650 === (7))){
var inst_62643 = (state_62648[(2)]);
var state_62648__$1 = state_62648;
var statearr_62662_64838 = state_62648__$1;
(statearr_62662_64838[(2)] = inst_62643);

(statearr_62662_64838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64814,c__62265__auto___64830,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async))
;
return ((function (__64814,switch__62165__auto__,c__62265__auto___64830,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0 = (function (){
var statearr_62664 = [null,null,null,null,null,null,null];
(statearr_62664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__);

(statearr_62664[(1)] = (1));

return statearr_62664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1 = (function (state_62648){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62648);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62665){var ex__62169__auto__ = e62665;
var statearr_62666_64839 = state_62648;
(statearr_62666_64839[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62648[(4)]))){
var statearr_62667_64841 = state_62648;
(statearr_62667_64841[(1)] = cljs.core.first((state_62648[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64842 = state_62648;
state_62648 = G__64842;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = function(state_62648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1.call(this,state_62648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__;
})()
;})(__64814,switch__62165__auto__,c__62265__auto___64830,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async))
})();
var state__62267__auto__ = (function (){var statearr_62669 = f__62266__auto__();
(statearr_62669[(6)] = c__62265__auto___64830);

return statearr_62669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
});})(__64814,c__62265__auto___64830,G__62600_64815,G__62600_64816__$1,n__4613__auto___64813,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62600_64816__$1)].join('')));

}

var G__64843 = (__64814 + (1));
__64814 = G__64843;
continue;
} else {
}
break;
}

var c__62265__auto___64844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62694){
var state_val_62695 = (state_62694[(1)]);
if((state_val_62695 === (7))){
var inst_62689 = (state_62694[(2)]);
var state_62694__$1 = state_62694;
var statearr_62697_64845 = state_62694__$1;
(statearr_62697_64845[(2)] = inst_62689);

(statearr_62697_64845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62695 === (1))){
var state_62694__$1 = state_62694;
var statearr_62698_64846 = state_62694__$1;
(statearr_62698_64846[(2)] = null);

(statearr_62698_64846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62695 === (4))){
var inst_62674 = (state_62694[(7)]);
var inst_62674__$1 = (state_62694[(2)]);
var inst_62675 = (inst_62674__$1 == null);
var state_62694__$1 = (function (){var statearr_62700 = state_62694;
(statearr_62700[(7)] = inst_62674__$1);

return statearr_62700;
})();
if(cljs.core.truth_(inst_62675)){
var statearr_62702_64848 = state_62694__$1;
(statearr_62702_64848[(1)] = (5));

} else {
var statearr_62703_64849 = state_62694__$1;
(statearr_62703_64849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62695 === (6))){
var inst_62679 = (state_62694[(8)]);
var inst_62674 = (state_62694[(7)]);
var inst_62679__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62680 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62681 = [inst_62674,inst_62679__$1];
var inst_62682 = (new cljs.core.PersistentVector(null,2,(5),inst_62680,inst_62681,null));
var state_62694__$1 = (function (){var statearr_62704 = state_62694;
(statearr_62704[(8)] = inst_62679__$1);

return statearr_62704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62694__$1,(8),jobs,inst_62682);
} else {
if((state_val_62695 === (3))){
var inst_62691 = (state_62694[(2)]);
var state_62694__$1 = state_62694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62694__$1,inst_62691);
} else {
if((state_val_62695 === (2))){
var state_62694__$1 = state_62694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62694__$1,(4),from);
} else {
if((state_val_62695 === (9))){
var inst_62686 = (state_62694[(2)]);
var state_62694__$1 = (function (){var statearr_62705 = state_62694;
(statearr_62705[(9)] = inst_62686);

return statearr_62705;
})();
var statearr_62706_64851 = state_62694__$1;
(statearr_62706_64851[(2)] = null);

(statearr_62706_64851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62695 === (5))){
var inst_62677 = cljs.core.async.close_BANG_(jobs);
var state_62694__$1 = state_62694;
var statearr_62708_64852 = state_62694__$1;
(statearr_62708_64852[(2)] = inst_62677);

(statearr_62708_64852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62695 === (8))){
var inst_62679 = (state_62694[(8)]);
var inst_62684 = (state_62694[(2)]);
var state_62694__$1 = (function (){var statearr_62710 = state_62694;
(statearr_62710[(10)] = inst_62684);

return statearr_62710;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62694__$1,(9),results,inst_62679);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0 = (function (){
var statearr_62714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__);

(statearr_62714[(1)] = (1));

return statearr_62714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1 = (function (state_62694){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62694);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62716){var ex__62169__auto__ = e62716;
var statearr_62717_64853 = state_62694;
(statearr_62717_64853[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62694[(4)]))){
var statearr_62718_64854 = state_62694;
(statearr_62718_64854[(1)] = cljs.core.first((state_62694[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64855 = state_62694;
state_62694 = G__64855;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = function(state_62694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1.call(this,state_62694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62719 = f__62266__auto__();
(statearr_62719[(6)] = c__62265__auto___64844);

return statearr_62719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


var c__62265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62762){
var state_val_62763 = (state_62762[(1)]);
if((state_val_62763 === (7))){
var inst_62757 = (state_62762[(2)]);
var state_62762__$1 = state_62762;
var statearr_62768_64856 = state_62762__$1;
(statearr_62768_64856[(2)] = inst_62757);

(statearr_62768_64856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (20))){
var state_62762__$1 = state_62762;
var statearr_62769_64857 = state_62762__$1;
(statearr_62769_64857[(2)] = null);

(statearr_62769_64857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (1))){
var state_62762__$1 = state_62762;
var statearr_62771_64858 = state_62762__$1;
(statearr_62771_64858[(2)] = null);

(statearr_62771_64858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (4))){
var inst_62726 = (state_62762[(7)]);
var inst_62726__$1 = (state_62762[(2)]);
var inst_62727 = (inst_62726__$1 == null);
var state_62762__$1 = (function (){var statearr_62772 = state_62762;
(statearr_62772[(7)] = inst_62726__$1);

return statearr_62772;
})();
if(cljs.core.truth_(inst_62727)){
var statearr_62773_64859 = state_62762__$1;
(statearr_62773_64859[(1)] = (5));

} else {
var statearr_62774_64860 = state_62762__$1;
(statearr_62774_64860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (15))){
var inst_62739 = (state_62762[(8)]);
var state_62762__$1 = state_62762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62762__$1,(18),to,inst_62739);
} else {
if((state_val_62763 === (21))){
var inst_62752 = (state_62762[(2)]);
var state_62762__$1 = state_62762;
var statearr_62779_64862 = state_62762__$1;
(statearr_62779_64862[(2)] = inst_62752);

(statearr_62779_64862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (13))){
var inst_62754 = (state_62762[(2)]);
var state_62762__$1 = (function (){var statearr_62780 = state_62762;
(statearr_62780[(9)] = inst_62754);

return statearr_62780;
})();
var statearr_62783_64863 = state_62762__$1;
(statearr_62783_64863[(2)] = null);

(statearr_62783_64863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (6))){
var inst_62726 = (state_62762[(7)]);
var state_62762__$1 = state_62762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62762__$1,(11),inst_62726);
} else {
if((state_val_62763 === (17))){
var inst_62747 = (state_62762[(2)]);
var state_62762__$1 = state_62762;
if(cljs.core.truth_(inst_62747)){
var statearr_62785_64864 = state_62762__$1;
(statearr_62785_64864[(1)] = (19));

} else {
var statearr_62786_64865 = state_62762__$1;
(statearr_62786_64865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (3))){
var inst_62759 = (state_62762[(2)]);
var state_62762__$1 = state_62762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62762__$1,inst_62759);
} else {
if((state_val_62763 === (12))){
var inst_62736 = (state_62762[(10)]);
var state_62762__$1 = state_62762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62762__$1,(14),inst_62736);
} else {
if((state_val_62763 === (2))){
var state_62762__$1 = state_62762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62762__$1,(4),results);
} else {
if((state_val_62763 === (19))){
var state_62762__$1 = state_62762;
var statearr_62791_64866 = state_62762__$1;
(statearr_62791_64866[(2)] = null);

(statearr_62791_64866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (11))){
var inst_62736 = (state_62762[(2)]);
var state_62762__$1 = (function (){var statearr_62792 = state_62762;
(statearr_62792[(10)] = inst_62736);

return statearr_62792;
})();
var statearr_62793_64867 = state_62762__$1;
(statearr_62793_64867[(2)] = null);

(statearr_62793_64867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (9))){
var state_62762__$1 = state_62762;
var statearr_62794_64868 = state_62762__$1;
(statearr_62794_64868[(2)] = null);

(statearr_62794_64868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (5))){
var state_62762__$1 = state_62762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62795_64869 = state_62762__$1;
(statearr_62795_64869[(1)] = (8));

} else {
var statearr_62796_64870 = state_62762__$1;
(statearr_62796_64870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (14))){
var inst_62739 = (state_62762[(8)]);
var inst_62739__$1 = (state_62762[(2)]);
var inst_62740 = (inst_62739__$1 == null);
var inst_62741 = cljs.core.not(inst_62740);
var state_62762__$1 = (function (){var statearr_62797 = state_62762;
(statearr_62797[(8)] = inst_62739__$1);

return statearr_62797;
})();
if(inst_62741){
var statearr_62798_64871 = state_62762__$1;
(statearr_62798_64871[(1)] = (15));

} else {
var statearr_62799_64872 = state_62762__$1;
(statearr_62799_64872[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (16))){
var state_62762__$1 = state_62762;
var statearr_62800_64873 = state_62762__$1;
(statearr_62800_64873[(2)] = false);

(statearr_62800_64873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (10))){
var inst_62733 = (state_62762[(2)]);
var state_62762__$1 = state_62762;
var statearr_62801_64874 = state_62762__$1;
(statearr_62801_64874[(2)] = inst_62733);

(statearr_62801_64874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (18))){
var inst_62744 = (state_62762[(2)]);
var state_62762__$1 = state_62762;
var statearr_62802_64875 = state_62762__$1;
(statearr_62802_64875[(2)] = inst_62744);

(statearr_62802_64875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62763 === (8))){
var inst_62730 = cljs.core.async.close_BANG_(to);
var state_62762__$1 = state_62762;
var statearr_62803_64876 = state_62762__$1;
(statearr_62803_64876[(2)] = inst_62730);

(statearr_62803_64876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0 = (function (){
var statearr_62804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__);

(statearr_62804[(1)] = (1));

return statearr_62804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1 = (function (state_62762){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62762);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62805){var ex__62169__auto__ = e62805;
var statearr_62806_64877 = state_62762;
(statearr_62806_64877[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62762[(4)]))){
var statearr_62807_64878 = state_62762;
(statearr_62807_64878[(1)] = cljs.core.first((state_62762[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64879 = state_62762;
state_62762 = G__64879;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__ = function(state_62762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1.call(this,state_62762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62166__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62808 = f__62266__auto__();
(statearr_62808[(6)] = c__62265__auto__);

return statearr_62808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));

return c__62265__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__62810 = arguments.length;
switch (G__62810) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__62834 = arguments.length;
switch (G__62834) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__62841 = arguments.length;
switch (G__62841) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__62265__auto___64883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62869){
var state_val_62870 = (state_62869[(1)]);
if((state_val_62870 === (7))){
var inst_62865 = (state_62869[(2)]);
var state_62869__$1 = state_62869;
var statearr_62876_64884 = state_62869__$1;
(statearr_62876_64884[(2)] = inst_62865);

(statearr_62876_64884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (1))){
var state_62869__$1 = state_62869;
var statearr_62878_64885 = state_62869__$1;
(statearr_62878_64885[(2)] = null);

(statearr_62878_64885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (4))){
var inst_62844 = (state_62869[(7)]);
var inst_62844__$1 = (state_62869[(2)]);
var inst_62845 = (inst_62844__$1 == null);
var state_62869__$1 = (function (){var statearr_62880 = state_62869;
(statearr_62880[(7)] = inst_62844__$1);

return statearr_62880;
})();
if(cljs.core.truth_(inst_62845)){
var statearr_62881_64886 = state_62869__$1;
(statearr_62881_64886[(1)] = (5));

} else {
var statearr_62882_64887 = state_62869__$1;
(statearr_62882_64887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (13))){
var state_62869__$1 = state_62869;
var statearr_62883_64888 = state_62869__$1;
(statearr_62883_64888[(2)] = null);

(statearr_62883_64888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (6))){
var inst_62844 = (state_62869[(7)]);
var inst_62850 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62844) : p.call(null,inst_62844));
var state_62869__$1 = state_62869;
if(cljs.core.truth_(inst_62850)){
var statearr_62887_64889 = state_62869__$1;
(statearr_62887_64889[(1)] = (9));

} else {
var statearr_62888_64890 = state_62869__$1;
(statearr_62888_64890[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (3))){
var inst_62867 = (state_62869[(2)]);
var state_62869__$1 = state_62869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62869__$1,inst_62867);
} else {
if((state_val_62870 === (12))){
var state_62869__$1 = state_62869;
var statearr_62891_64892 = state_62869__$1;
(statearr_62891_64892[(2)] = null);

(statearr_62891_64892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (2))){
var state_62869__$1 = state_62869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62869__$1,(4),ch);
} else {
if((state_val_62870 === (11))){
var inst_62844 = (state_62869[(7)]);
var inst_62855 = (state_62869[(2)]);
var state_62869__$1 = state_62869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62869__$1,(8),inst_62855,inst_62844);
} else {
if((state_val_62870 === (9))){
var state_62869__$1 = state_62869;
var statearr_62894_64894 = state_62869__$1;
(statearr_62894_64894[(2)] = tc);

(statearr_62894_64894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (5))){
var inst_62847 = cljs.core.async.close_BANG_(tc);
var inst_62848 = cljs.core.async.close_BANG_(fc);
var state_62869__$1 = (function (){var statearr_62898 = state_62869;
(statearr_62898[(8)] = inst_62847);

return statearr_62898;
})();
var statearr_62900_64895 = state_62869__$1;
(statearr_62900_64895[(2)] = inst_62848);

(statearr_62900_64895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (14))){
var inst_62863 = (state_62869[(2)]);
var state_62869__$1 = state_62869;
var statearr_62901_64896 = state_62869__$1;
(statearr_62901_64896[(2)] = inst_62863);

(statearr_62901_64896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (10))){
var state_62869__$1 = state_62869;
var statearr_62902_64897 = state_62869__$1;
(statearr_62902_64897[(2)] = fc);

(statearr_62902_64897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62870 === (8))){
var inst_62858 = (state_62869[(2)]);
var state_62869__$1 = state_62869;
if(cljs.core.truth_(inst_62858)){
var statearr_62904_64898 = state_62869__$1;
(statearr_62904_64898[(1)] = (12));

} else {
var statearr_62905_64900 = state_62869__$1;
(statearr_62905_64900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_62909 = [null,null,null,null,null,null,null,null,null];
(statearr_62909[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_62909[(1)] = (1));

return statearr_62909;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_62869){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62869);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62911){var ex__62169__auto__ = e62911;
var statearr_62912_64905 = state_62869;
(statearr_62912_64905[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62869[(4)]))){
var statearr_62913_64906 = state_62869;
(statearr_62913_64906[(1)] = cljs.core.first((state_62869[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64908 = state_62869;
state_62869 = G__64908;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_62869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_62869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62914 = f__62266__auto__();
(statearr_62914[(6)] = c__62265__auto___64883);

return statearr_62914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__62265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62938){
var state_val_62939 = (state_62938[(1)]);
if((state_val_62939 === (7))){
var inst_62933 = (state_62938[(2)]);
var state_62938__$1 = state_62938;
var statearr_62941_64911 = state_62938__$1;
(statearr_62941_64911[(2)] = inst_62933);

(statearr_62941_64911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (1))){
var inst_62916 = init;
var inst_62917 = inst_62916;
var state_62938__$1 = (function (){var statearr_62944 = state_62938;
(statearr_62944[(7)] = inst_62917);

return statearr_62944;
})();
var statearr_62945_64913 = state_62938__$1;
(statearr_62945_64913[(2)] = null);

(statearr_62945_64913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (4))){
var inst_62920 = (state_62938[(8)]);
var inst_62920__$1 = (state_62938[(2)]);
var inst_62921 = (inst_62920__$1 == null);
var state_62938__$1 = (function (){var statearr_62946 = state_62938;
(statearr_62946[(8)] = inst_62920__$1);

return statearr_62946;
})();
if(cljs.core.truth_(inst_62921)){
var statearr_62947_64916 = state_62938__$1;
(statearr_62947_64916[(1)] = (5));

} else {
var statearr_62948_64917 = state_62938__$1;
(statearr_62948_64917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (6))){
var inst_62917 = (state_62938[(7)]);
var inst_62920 = (state_62938[(8)]);
var inst_62924 = (state_62938[(9)]);
var inst_62924__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_62917,inst_62920) : f.call(null,inst_62917,inst_62920));
var inst_62925 = cljs.core.reduced_QMARK_(inst_62924__$1);
var state_62938__$1 = (function (){var statearr_62949 = state_62938;
(statearr_62949[(9)] = inst_62924__$1);

return statearr_62949;
})();
if(inst_62925){
var statearr_62950_64918 = state_62938__$1;
(statearr_62950_64918[(1)] = (8));

} else {
var statearr_62952_64919 = state_62938__$1;
(statearr_62952_64919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (3))){
var inst_62935 = (state_62938[(2)]);
var state_62938__$1 = state_62938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62938__$1,inst_62935);
} else {
if((state_val_62939 === (2))){
var state_62938__$1 = state_62938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62938__$1,(4),ch);
} else {
if((state_val_62939 === (9))){
var inst_62924 = (state_62938[(9)]);
var inst_62917 = inst_62924;
var state_62938__$1 = (function (){var statearr_62953 = state_62938;
(statearr_62953[(7)] = inst_62917);

return statearr_62953;
})();
var statearr_62954_64920 = state_62938__$1;
(statearr_62954_64920[(2)] = null);

(statearr_62954_64920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (5))){
var inst_62917 = (state_62938[(7)]);
var state_62938__$1 = state_62938;
var statearr_62955_64921 = state_62938__$1;
(statearr_62955_64921[(2)] = inst_62917);

(statearr_62955_64921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (10))){
var inst_62931 = (state_62938[(2)]);
var state_62938__$1 = state_62938;
var statearr_62956_64924 = state_62938__$1;
(statearr_62956_64924[(2)] = inst_62931);

(statearr_62956_64924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62939 === (8))){
var inst_62924 = (state_62938[(9)]);
var inst_62927 = cljs.core.deref(inst_62924);
var state_62938__$1 = state_62938;
var statearr_62957_64926 = state_62938__$1;
(statearr_62957_64926[(2)] = inst_62927);

(statearr_62957_64926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__62166__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62166__auto____0 = (function (){
var statearr_62958 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62958[(0)] = cljs$core$async$reduce_$_state_machine__62166__auto__);

(statearr_62958[(1)] = (1));

return statearr_62958;
});
var cljs$core$async$reduce_$_state_machine__62166__auto____1 = (function (state_62938){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62938);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62959){var ex__62169__auto__ = e62959;
var statearr_62960_64929 = state_62938;
(statearr_62960_64929[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62938[(4)]))){
var statearr_62961_64931 = state_62938;
(statearr_62961_64931[(1)] = cljs.core.first((state_62938[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64932 = state_62938;
state_62938 = G__64932;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62166__auto__ = function(state_62938){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62166__auto____1.call(this,state_62938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62166__auto____0;
cljs$core$async$reduce_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62166__auto____1;
return cljs$core$async$reduce_$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62962 = f__62266__auto__();
(statearr_62962[(6)] = c__62265__auto__);

return statearr_62962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));

return c__62265__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_62974){
var state_val_62975 = (state_62974[(1)]);
if((state_val_62975 === (1))){
var inst_62968 = cljs.core.async.reduce(f__$1,init,ch);
var state_62974__$1 = state_62974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62974__$1,(2),inst_62968);
} else {
if((state_val_62975 === (2))){
var inst_62970 = (state_62974[(2)]);
var inst_62972 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_62970) : f__$1.call(null,inst_62970));
var state_62974__$1 = state_62974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62974__$1,inst_62972);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62166__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62166__auto____0 = (function (){
var statearr_62978 = [null,null,null,null,null,null,null];
(statearr_62978[(0)] = cljs$core$async$transduce_$_state_machine__62166__auto__);

(statearr_62978[(1)] = (1));

return statearr_62978;
});
var cljs$core$async$transduce_$_state_machine__62166__auto____1 = (function (state_62974){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_62974);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e62979){var ex__62169__auto__ = e62979;
var statearr_62980_64935 = state_62974;
(statearr_62980_64935[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_62974[(4)]))){
var statearr_62981_64937 = state_62974;
(statearr_62981_64937[(1)] = cljs.core.first((state_62974[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64939 = state_62974;
state_62974 = G__64939;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62166__auto__ = function(state_62974){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62166__auto____1.call(this,state_62974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62166__auto____0;
cljs$core$async$transduce_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62166__auto____1;
return cljs$core$async$transduce_$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_62982 = f__62266__auto__();
(statearr_62982[(6)] = c__62265__auto__);

return statearr_62982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));

return c__62265__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__62988 = arguments.length;
switch (G__62988) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__62265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_63017){
var state_val_63018 = (state_63017[(1)]);
if((state_val_63018 === (7))){
var inst_62999 = (state_63017[(2)]);
var state_63017__$1 = state_63017;
var statearr_63019_64946 = state_63017__$1;
(statearr_63019_64946[(2)] = inst_62999);

(statearr_63019_64946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (1))){
var inst_62993 = cljs.core.seq(coll);
var inst_62994 = inst_62993;
var state_63017__$1 = (function (){var statearr_63020 = state_63017;
(statearr_63020[(7)] = inst_62994);

return statearr_63020;
})();
var statearr_63021_64950 = state_63017__$1;
(statearr_63021_64950[(2)] = null);

(statearr_63021_64950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (4))){
var inst_62994 = (state_63017[(7)]);
var inst_62997 = cljs.core.first(inst_62994);
var state_63017__$1 = state_63017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63017__$1,(7),ch,inst_62997);
} else {
if((state_val_63018 === (13))){
var inst_63011 = (state_63017[(2)]);
var state_63017__$1 = state_63017;
var statearr_63022_64953 = state_63017__$1;
(statearr_63022_64953[(2)] = inst_63011);

(statearr_63022_64953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (6))){
var inst_63002 = (state_63017[(2)]);
var state_63017__$1 = state_63017;
if(cljs.core.truth_(inst_63002)){
var statearr_63025_64956 = state_63017__$1;
(statearr_63025_64956[(1)] = (8));

} else {
var statearr_63026_64957 = state_63017__$1;
(statearr_63026_64957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (3))){
var inst_63015 = (state_63017[(2)]);
var state_63017__$1 = state_63017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63017__$1,inst_63015);
} else {
if((state_val_63018 === (12))){
var state_63017__$1 = state_63017;
var statearr_63029_64959 = state_63017__$1;
(statearr_63029_64959[(2)] = null);

(statearr_63029_64959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (2))){
var inst_62994 = (state_63017[(7)]);
var state_63017__$1 = state_63017;
if(cljs.core.truth_(inst_62994)){
var statearr_63031_64963 = state_63017__$1;
(statearr_63031_64963[(1)] = (4));

} else {
var statearr_63033_64964 = state_63017__$1;
(statearr_63033_64964[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (11))){
var inst_63008 = cljs.core.async.close_BANG_(ch);
var state_63017__$1 = state_63017;
var statearr_63034_64965 = state_63017__$1;
(statearr_63034_64965[(2)] = inst_63008);

(statearr_63034_64965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (9))){
var state_63017__$1 = state_63017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63036_64969 = state_63017__$1;
(statearr_63036_64969[(1)] = (11));

} else {
var statearr_63037_64970 = state_63017__$1;
(statearr_63037_64970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (5))){
var inst_62994 = (state_63017[(7)]);
var state_63017__$1 = state_63017;
var statearr_63039_64972 = state_63017__$1;
(statearr_63039_64972[(2)] = inst_62994);

(statearr_63039_64972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (10))){
var inst_63013 = (state_63017[(2)]);
var state_63017__$1 = state_63017;
var statearr_63040_64974 = state_63017__$1;
(statearr_63040_64974[(2)] = inst_63013);

(statearr_63040_64974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63018 === (8))){
var inst_62994 = (state_63017[(7)]);
var inst_63004 = cljs.core.next(inst_62994);
var inst_62994__$1 = inst_63004;
var state_63017__$1 = (function (){var statearr_63041 = state_63017;
(statearr_63041[(7)] = inst_62994__$1);

return statearr_63041;
})();
var statearr_63042_64978 = state_63017__$1;
(statearr_63042_64978[(2)] = null);

(statearr_63042_64978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_63043 = [null,null,null,null,null,null,null,null];
(statearr_63043[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_63043[(1)] = (1));

return statearr_63043;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_63017){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_63017);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e63044){var ex__62169__auto__ = e63044;
var statearr_63045_64983 = state_63017;
(statearr_63045_64983[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_63017[(4)]))){
var statearr_63048_64984 = state_63017;
(statearr_63048_64984[(1)] = cljs.core.first((state_63017[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64985 = state_63017;
state_63017 = G__64985;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_63017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_63017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_63052 = f__62266__auto__();
(statearr_63052[(6)] = c__62265__auto__);

return statearr_63052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));

return c__62265__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__63059 = arguments.length;
switch (G__63059) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_64991 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_64991(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64993 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_64993(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64995 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_64995(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64996 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_64996(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63094 = (function (ch,cs,meta63095){
this.ch = ch;
this.cs = cs;
this.meta63095 = meta63095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63096,meta63095__$1){
var self__ = this;
var _63096__$1 = this;
return (new cljs.core.async.t_cljs$core$async63094(self__.ch,self__.cs,meta63095__$1));
}));

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63096){
var self__ = this;
var _63096__$1 = this;
return self__.meta63095;
}));

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63094.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63095","meta63095",-1313258990,null)], null);
}));

(cljs.core.async.t_cljs$core$async63094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63094");

(cljs.core.async.t_cljs$core$async63094.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63094.
 */
cljs.core.async.__GT_t_cljs$core$async63094 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63094(ch__$1,cs__$1,meta63095){
return (new cljs.core.async.t_cljs$core$async63094(ch__$1,cs__$1,meta63095));
});

}

return (new cljs.core.async.t_cljs$core$async63094(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__62265__auto___65006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_63306){
var state_val_63308 = (state_63306[(1)]);
if((state_val_63308 === (7))){
var inst_63296 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63318_65008 = state_63306__$1;
(statearr_63318_65008[(2)] = inst_63296);

(statearr_63318_65008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (20))){
var inst_63175 = (state_63306[(7)]);
var inst_63189 = cljs.core.first(inst_63175);
var inst_63191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63189,(0),null);
var inst_63193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63189,(1),null);
var state_63306__$1 = (function (){var statearr_63321 = state_63306;
(statearr_63321[(8)] = inst_63191);

return statearr_63321;
})();
if(cljs.core.truth_(inst_63193)){
var statearr_63323_65011 = state_63306__$1;
(statearr_63323_65011[(1)] = (22));

} else {
var statearr_63326_65012 = state_63306__$1;
(statearr_63326_65012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (27))){
var inst_63224 = (state_63306[(9)]);
var inst_63129 = (state_63306[(10)]);
var inst_63222 = (state_63306[(11)]);
var inst_63234 = (state_63306[(12)]);
var inst_63234__$1 = cljs.core._nth(inst_63222,inst_63224);
var inst_63235 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63234__$1,inst_63129,done);
var state_63306__$1 = (function (){var statearr_63330 = state_63306;
(statearr_63330[(12)] = inst_63234__$1);

return statearr_63330;
})();
if(cljs.core.truth_(inst_63235)){
var statearr_63331_65014 = state_63306__$1;
(statearr_63331_65014[(1)] = (30));

} else {
var statearr_63332_65015 = state_63306__$1;
(statearr_63332_65015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (1))){
var state_63306__$1 = state_63306;
var statearr_63333_65016 = state_63306__$1;
(statearr_63333_65016[(2)] = null);

(statearr_63333_65016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (24))){
var inst_63175 = (state_63306[(7)]);
var inst_63198 = (state_63306[(2)]);
var inst_63199 = cljs.core.next(inst_63175);
var inst_63140 = inst_63199;
var inst_63141 = null;
var inst_63142 = (0);
var inst_63143 = (0);
var state_63306__$1 = (function (){var statearr_63336 = state_63306;
(statearr_63336[(13)] = inst_63143);

(statearr_63336[(14)] = inst_63140);

(statearr_63336[(15)] = inst_63198);

(statearr_63336[(16)] = inst_63142);

(statearr_63336[(17)] = inst_63141);

return statearr_63336;
})();
var statearr_63337_65018 = state_63306__$1;
(statearr_63337_65018[(2)] = null);

(statearr_63337_65018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (39))){
var state_63306__$1 = state_63306;
var statearr_63343_65019 = state_63306__$1;
(statearr_63343_65019[(2)] = null);

(statearr_63343_65019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (4))){
var inst_63129 = (state_63306[(10)]);
var inst_63129__$1 = (state_63306[(2)]);
var inst_63130 = (inst_63129__$1 == null);
var state_63306__$1 = (function (){var statearr_63344 = state_63306;
(statearr_63344[(10)] = inst_63129__$1);

return statearr_63344;
})();
if(cljs.core.truth_(inst_63130)){
var statearr_63345_65020 = state_63306__$1;
(statearr_63345_65020[(1)] = (5));

} else {
var statearr_63346_65021 = state_63306__$1;
(statearr_63346_65021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (15))){
var inst_63143 = (state_63306[(13)]);
var inst_63140 = (state_63306[(14)]);
var inst_63142 = (state_63306[(16)]);
var inst_63141 = (state_63306[(17)]);
var inst_63169 = (state_63306[(2)]);
var inst_63172 = (inst_63143 + (1));
var tmp63340 = inst_63140;
var tmp63341 = inst_63142;
var tmp63342 = inst_63141;
var inst_63140__$1 = tmp63340;
var inst_63141__$1 = tmp63342;
var inst_63142__$1 = tmp63341;
var inst_63143__$1 = inst_63172;
var state_63306__$1 = (function (){var statearr_63347 = state_63306;
(statearr_63347[(18)] = inst_63169);

(statearr_63347[(13)] = inst_63143__$1);

(statearr_63347[(14)] = inst_63140__$1);

(statearr_63347[(16)] = inst_63142__$1);

(statearr_63347[(17)] = inst_63141__$1);

return statearr_63347;
})();
var statearr_63350_65022 = state_63306__$1;
(statearr_63350_65022[(2)] = null);

(statearr_63350_65022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (21))){
var inst_63202 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63355_65023 = state_63306__$1;
(statearr_63355_65023[(2)] = inst_63202);

(statearr_63355_65023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (31))){
var inst_63234 = (state_63306[(12)]);
var inst_63239 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63234);
var state_63306__$1 = state_63306;
var statearr_63358_65024 = state_63306__$1;
(statearr_63358_65024[(2)] = inst_63239);

(statearr_63358_65024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (32))){
var inst_63224 = (state_63306[(9)]);
var inst_63223 = (state_63306[(19)]);
var inst_63222 = (state_63306[(11)]);
var inst_63221 = (state_63306[(20)]);
var inst_63241 = (state_63306[(2)]);
var inst_63243 = (inst_63224 + (1));
var tmp63351 = inst_63223;
var tmp63352 = inst_63222;
var tmp63353 = inst_63221;
var inst_63221__$1 = tmp63353;
var inst_63222__$1 = tmp63352;
var inst_63223__$1 = tmp63351;
var inst_63224__$1 = inst_63243;
var state_63306__$1 = (function (){var statearr_63360 = state_63306;
(statearr_63360[(9)] = inst_63224__$1);

(statearr_63360[(19)] = inst_63223__$1);

(statearr_63360[(11)] = inst_63222__$1);

(statearr_63360[(20)] = inst_63221__$1);

(statearr_63360[(21)] = inst_63241);

return statearr_63360;
})();
var statearr_63361_65028 = state_63306__$1;
(statearr_63361_65028[(2)] = null);

(statearr_63361_65028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (40))){
var inst_63262 = (state_63306[(22)]);
var inst_63268 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63262);
var state_63306__$1 = state_63306;
var statearr_63363_65029 = state_63306__$1;
(statearr_63363_65029[(2)] = inst_63268);

(statearr_63363_65029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (33))){
var inst_63248 = (state_63306[(23)]);
var inst_63252 = cljs.core.chunked_seq_QMARK_(inst_63248);
var state_63306__$1 = state_63306;
if(inst_63252){
var statearr_63367_65030 = state_63306__$1;
(statearr_63367_65030[(1)] = (36));

} else {
var statearr_63368_65032 = state_63306__$1;
(statearr_63368_65032[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (13))){
var inst_63154 = (state_63306[(24)]);
var inst_63166 = cljs.core.async.close_BANG_(inst_63154);
var state_63306__$1 = state_63306;
var statearr_63371_65035 = state_63306__$1;
(statearr_63371_65035[(2)] = inst_63166);

(statearr_63371_65035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (22))){
var inst_63191 = (state_63306[(8)]);
var inst_63195 = cljs.core.async.close_BANG_(inst_63191);
var state_63306__$1 = state_63306;
var statearr_63374_65037 = state_63306__$1;
(statearr_63374_65037[(2)] = inst_63195);

(statearr_63374_65037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (36))){
var inst_63248 = (state_63306[(23)]);
var inst_63255 = cljs.core.chunk_first(inst_63248);
var inst_63257 = cljs.core.chunk_rest(inst_63248);
var inst_63258 = cljs.core.count(inst_63255);
var inst_63221 = inst_63257;
var inst_63222 = inst_63255;
var inst_63223 = inst_63258;
var inst_63224 = (0);
var state_63306__$1 = (function (){var statearr_63376 = state_63306;
(statearr_63376[(9)] = inst_63224);

(statearr_63376[(19)] = inst_63223);

(statearr_63376[(11)] = inst_63222);

(statearr_63376[(20)] = inst_63221);

return statearr_63376;
})();
var statearr_63379_65038 = state_63306__$1;
(statearr_63379_65038[(2)] = null);

(statearr_63379_65038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (41))){
var inst_63248 = (state_63306[(23)]);
var inst_63270 = (state_63306[(2)]);
var inst_63272 = cljs.core.next(inst_63248);
var inst_63221 = inst_63272;
var inst_63222 = null;
var inst_63223 = (0);
var inst_63224 = (0);
var state_63306__$1 = (function (){var statearr_63385 = state_63306;
(statearr_63385[(9)] = inst_63224);

(statearr_63385[(19)] = inst_63223);

(statearr_63385[(11)] = inst_63222);

(statearr_63385[(25)] = inst_63270);

(statearr_63385[(20)] = inst_63221);

return statearr_63385;
})();
var statearr_63387_65039 = state_63306__$1;
(statearr_63387_65039[(2)] = null);

(statearr_63387_65039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (43))){
var state_63306__$1 = state_63306;
var statearr_63389_65043 = state_63306__$1;
(statearr_63389_65043[(2)] = null);

(statearr_63389_65043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (29))){
var inst_63280 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63394_65044 = state_63306__$1;
(statearr_63394_65044[(2)] = inst_63280);

(statearr_63394_65044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (44))){
var inst_63292 = (state_63306[(2)]);
var state_63306__$1 = (function (){var statearr_63397 = state_63306;
(statearr_63397[(26)] = inst_63292);

return statearr_63397;
})();
var statearr_63398_65048 = state_63306__$1;
(statearr_63398_65048[(2)] = null);

(statearr_63398_65048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (6))){
var inst_63212 = (state_63306[(27)]);
var inst_63211 = cljs.core.deref(cs);
var inst_63212__$1 = cljs.core.keys(inst_63211);
var inst_63214 = cljs.core.count(inst_63212__$1);
var inst_63215 = cljs.core.reset_BANG_(dctr,inst_63214);
var inst_63220 = cljs.core.seq(inst_63212__$1);
var inst_63221 = inst_63220;
var inst_63222 = null;
var inst_63223 = (0);
var inst_63224 = (0);
var state_63306__$1 = (function (){var statearr_63402 = state_63306;
(statearr_63402[(9)] = inst_63224);

(statearr_63402[(19)] = inst_63223);

(statearr_63402[(28)] = inst_63215);

(statearr_63402[(11)] = inst_63222);

(statearr_63402[(20)] = inst_63221);

(statearr_63402[(27)] = inst_63212__$1);

return statearr_63402;
})();
var statearr_63403_65059 = state_63306__$1;
(statearr_63403_65059[(2)] = null);

(statearr_63403_65059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (28))){
var inst_63248 = (state_63306[(23)]);
var inst_63221 = (state_63306[(20)]);
var inst_63248__$1 = cljs.core.seq(inst_63221);
var state_63306__$1 = (function (){var statearr_63405 = state_63306;
(statearr_63405[(23)] = inst_63248__$1);

return statearr_63405;
})();
if(inst_63248__$1){
var statearr_63406_65060 = state_63306__$1;
(statearr_63406_65060[(1)] = (33));

} else {
var statearr_63407_65061 = state_63306__$1;
(statearr_63407_65061[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (25))){
var inst_63224 = (state_63306[(9)]);
var inst_63223 = (state_63306[(19)]);
var inst_63228 = (inst_63224 < inst_63223);
var inst_63229 = inst_63228;
var state_63306__$1 = state_63306;
if(cljs.core.truth_(inst_63229)){
var statearr_63409_65062 = state_63306__$1;
(statearr_63409_65062[(1)] = (27));

} else {
var statearr_63410_65063 = state_63306__$1;
(statearr_63410_65063[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (34))){
var state_63306__$1 = state_63306;
var statearr_63412_65065 = state_63306__$1;
(statearr_63412_65065[(2)] = null);

(statearr_63412_65065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (17))){
var state_63306__$1 = state_63306;
var statearr_63413_65068 = state_63306__$1;
(statearr_63413_65068[(2)] = null);

(statearr_63413_65068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (3))){
var inst_63298 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63306__$1,inst_63298);
} else {
if((state_val_63308 === (12))){
var inst_63207 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63415_65070 = state_63306__$1;
(statearr_63415_65070[(2)] = inst_63207);

(statearr_63415_65070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (2))){
var state_63306__$1 = state_63306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63306__$1,(4),ch);
} else {
if((state_val_63308 === (23))){
var state_63306__$1 = state_63306;
var statearr_63417_65071 = state_63306__$1;
(statearr_63417_65071[(2)] = null);

(statearr_63417_65071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (35))){
var inst_63278 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63419_65073 = state_63306__$1;
(statearr_63419_65073[(2)] = inst_63278);

(statearr_63419_65073[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (19))){
var inst_63175 = (state_63306[(7)]);
var inst_63180 = cljs.core.chunk_first(inst_63175);
var inst_63182 = cljs.core.chunk_rest(inst_63175);
var inst_63183 = cljs.core.count(inst_63180);
var inst_63140 = inst_63182;
var inst_63141 = inst_63180;
var inst_63142 = inst_63183;
var inst_63143 = (0);
var state_63306__$1 = (function (){var statearr_63420 = state_63306;
(statearr_63420[(13)] = inst_63143);

(statearr_63420[(14)] = inst_63140);

(statearr_63420[(16)] = inst_63142);

(statearr_63420[(17)] = inst_63141);

return statearr_63420;
})();
var statearr_63422_65076 = state_63306__$1;
(statearr_63422_65076[(2)] = null);

(statearr_63422_65076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (11))){
var inst_63140 = (state_63306[(14)]);
var inst_63175 = (state_63306[(7)]);
var inst_63175__$1 = cljs.core.seq(inst_63140);
var state_63306__$1 = (function (){var statearr_63423 = state_63306;
(statearr_63423[(7)] = inst_63175__$1);

return statearr_63423;
})();
if(inst_63175__$1){
var statearr_63426_65080 = state_63306__$1;
(statearr_63426_65080[(1)] = (16));

} else {
var statearr_63427_65081 = state_63306__$1;
(statearr_63427_65081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (9))){
var inst_63209 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63430_65083 = state_63306__$1;
(statearr_63430_65083[(2)] = inst_63209);

(statearr_63430_65083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (5))){
var inst_63138 = cljs.core.deref(cs);
var inst_63139 = cljs.core.seq(inst_63138);
var inst_63140 = inst_63139;
var inst_63141 = null;
var inst_63142 = (0);
var inst_63143 = (0);
var state_63306__$1 = (function (){var statearr_63431 = state_63306;
(statearr_63431[(13)] = inst_63143);

(statearr_63431[(14)] = inst_63140);

(statearr_63431[(16)] = inst_63142);

(statearr_63431[(17)] = inst_63141);

return statearr_63431;
})();
var statearr_63432_65087 = state_63306__$1;
(statearr_63432_65087[(2)] = null);

(statearr_63432_65087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (14))){
var state_63306__$1 = state_63306;
var statearr_63433_65088 = state_63306__$1;
(statearr_63433_65088[(2)] = null);

(statearr_63433_65088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (45))){
var inst_63289 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63434_65090 = state_63306__$1;
(statearr_63434_65090[(2)] = inst_63289);

(statearr_63434_65090[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (26))){
var inst_63212 = (state_63306[(27)]);
var inst_63282 = (state_63306[(2)]);
var inst_63284 = cljs.core.seq(inst_63212);
var state_63306__$1 = (function (){var statearr_63436 = state_63306;
(statearr_63436[(29)] = inst_63282);

return statearr_63436;
})();
if(inst_63284){
var statearr_63437_65092 = state_63306__$1;
(statearr_63437_65092[(1)] = (42));

} else {
var statearr_63438_65093 = state_63306__$1;
(statearr_63438_65093[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (16))){
var inst_63175 = (state_63306[(7)]);
var inst_63177 = cljs.core.chunked_seq_QMARK_(inst_63175);
var state_63306__$1 = state_63306;
if(inst_63177){
var statearr_63439_65099 = state_63306__$1;
(statearr_63439_65099[(1)] = (19));

} else {
var statearr_63440_65101 = state_63306__$1;
(statearr_63440_65101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (38))){
var inst_63275 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63441_65103 = state_63306__$1;
(statearr_63441_65103[(2)] = inst_63275);

(statearr_63441_65103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (30))){
var state_63306__$1 = state_63306;
var statearr_63443_65104 = state_63306__$1;
(statearr_63443_65104[(2)] = null);

(statearr_63443_65104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (10))){
var inst_63143 = (state_63306[(13)]);
var inst_63141 = (state_63306[(17)]);
var inst_63153 = cljs.core._nth(inst_63141,inst_63143);
var inst_63154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63153,(0),null);
var inst_63162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63153,(1),null);
var state_63306__$1 = (function (){var statearr_63444 = state_63306;
(statearr_63444[(24)] = inst_63154);

return statearr_63444;
})();
if(cljs.core.truth_(inst_63162)){
var statearr_63445_65111 = state_63306__$1;
(statearr_63445_65111[(1)] = (13));

} else {
var statearr_63446_65113 = state_63306__$1;
(statearr_63446_65113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (18))){
var inst_63205 = (state_63306[(2)]);
var state_63306__$1 = state_63306;
var statearr_63447_65115 = state_63306__$1;
(statearr_63447_65115[(2)] = inst_63205);

(statearr_63447_65115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (42))){
var state_63306__$1 = state_63306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63306__$1,(45),dchan);
} else {
if((state_val_63308 === (37))){
var inst_63248 = (state_63306[(23)]);
var inst_63129 = (state_63306[(10)]);
var inst_63262 = (state_63306[(22)]);
var inst_63262__$1 = cljs.core.first(inst_63248);
var inst_63265 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63262__$1,inst_63129,done);
var state_63306__$1 = (function (){var statearr_63448 = state_63306;
(statearr_63448[(22)] = inst_63262__$1);

return statearr_63448;
})();
if(cljs.core.truth_(inst_63265)){
var statearr_63450_65117 = state_63306__$1;
(statearr_63450_65117[(1)] = (39));

} else {
var statearr_63453_65120 = state_63306__$1;
(statearr_63453_65120[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63308 === (8))){
var inst_63143 = (state_63306[(13)]);
var inst_63142 = (state_63306[(16)]);
var inst_63146 = (inst_63143 < inst_63142);
var inst_63147 = inst_63146;
var state_63306__$1 = state_63306;
if(cljs.core.truth_(inst_63147)){
var statearr_63454_65125 = state_63306__$1;
(statearr_63454_65125[(1)] = (10));

} else {
var statearr_63455_65126 = state_63306__$1;
(statearr_63455_65126[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__62166__auto__ = null;
var cljs$core$async$mult_$_state_machine__62166__auto____0 = (function (){
var statearr_63456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63456[(0)] = cljs$core$async$mult_$_state_machine__62166__auto__);

(statearr_63456[(1)] = (1));

return statearr_63456;
});
var cljs$core$async$mult_$_state_machine__62166__auto____1 = (function (state_63306){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_63306);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e63458){var ex__62169__auto__ = e63458;
var statearr_63459_65129 = state_63306;
(statearr_63459_65129[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_63306[(4)]))){
var statearr_63460_65130 = state_63306;
(statearr_63460_65130[(1)] = cljs.core.first((state_63306[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65136 = state_63306;
state_63306 = G__65136;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62166__auto__ = function(state_63306){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62166__auto____1.call(this,state_63306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62166__auto____0;
cljs$core$async$mult_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62166__auto____1;
return cljs$core$async$mult_$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_63461 = f__62266__auto__();
(statearr_63461[(6)] = c__62265__auto___65006);

return statearr_63461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__63464 = arguments.length;
switch (G__63464) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_65146 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_65146(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_65151 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_65151(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_65156 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_65156(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_65163 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_65163(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_65167 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_65167(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65178 = arguments.length;
var i__4737__auto___65179 = (0);
while(true){
if((i__4737__auto___65179 < len__4736__auto___65178)){
args__4742__auto__.push((arguments[i__4737__auto___65179]));

var G__65180 = (i__4737__auto___65179 + (1));
i__4737__auto___65179 = G__65180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63473){
var map__63474 = p__63473;
var map__63474__$1 = (((((!((map__63474 == null))))?(((((map__63474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63474):map__63474);
var opts = map__63474__$1;
var statearr_63477_65184 = state;
(statearr_63477_65184[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63478_65188 = state;
(statearr_63478_65188[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_63479_65193 = state;
(statearr_63479_65193[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63469){
var G__63470 = cljs.core.first(seq63469);
var seq63469__$1 = cljs.core.next(seq63469);
var G__63471 = cljs.core.first(seq63469__$1);
var seq63469__$2 = cljs.core.next(seq63469__$1);
var G__63472 = cljs.core.first(seq63469__$2);
var seq63469__$3 = cljs.core.next(seq63469__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63470,G__63471,G__63472,seq63469__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63482 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63483){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63483 = meta63483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63484,meta63483__$1){
var self__ = this;
var _63484__$1 = this;
return (new cljs.core.async.t_cljs$core$async63482(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63483__$1));
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63484){
var self__ = this;
var _63484__$1 = this;
return self__.meta63483;
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63482.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63483","meta63483",1618816237,null)], null);
}));

(cljs.core.async.t_cljs$core$async63482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63482");

(cljs.core.async.t_cljs$core$async63482.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63482.
 */
cljs.core.async.__GT_t_cljs$core$async63482 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63482(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63483){
return (new cljs.core.async.t_cljs$core$async63482(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63483));
});

}

return (new cljs.core.async.t_cljs$core$async63482(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62265__auto___65209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_63597){
var state_val_63598 = (state_63597[(1)]);
if((state_val_63598 === (7))){
var inst_63506 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
var statearr_63599_65211 = state_63597__$1;
(statearr_63599_65211[(2)] = inst_63506);

(statearr_63599_65211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (20))){
var inst_63518 = (state_63597[(7)]);
var state_63597__$1 = state_63597;
var statearr_63600_65212 = state_63597__$1;
(statearr_63600_65212[(2)] = inst_63518);

(statearr_63600_65212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (27))){
var state_63597__$1 = state_63597;
var statearr_63601_65214 = state_63597__$1;
(statearr_63601_65214[(2)] = null);

(statearr_63601_65214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (1))){
var inst_63493 = (state_63597[(8)]);
var inst_63493__$1 = calc_state();
var inst_63495 = (inst_63493__$1 == null);
var inst_63496 = cljs.core.not(inst_63495);
var state_63597__$1 = (function (){var statearr_63604 = state_63597;
(statearr_63604[(8)] = inst_63493__$1);

return statearr_63604;
})();
if(inst_63496){
var statearr_63605_65217 = state_63597__$1;
(statearr_63605_65217[(1)] = (2));

} else {
var statearr_63606_65218 = state_63597__$1;
(statearr_63606_65218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (24))){
var inst_63556 = (state_63597[(9)]);
var inst_63546 = (state_63597[(10)]);
var inst_63571 = (state_63597[(11)]);
var inst_63571__$1 = (inst_63546.cljs$core$IFn$_invoke$arity$1 ? inst_63546.cljs$core$IFn$_invoke$arity$1(inst_63556) : inst_63546.call(null,inst_63556));
var state_63597__$1 = (function (){var statearr_63609 = state_63597;
(statearr_63609[(11)] = inst_63571__$1);

return statearr_63609;
})();
if(cljs.core.truth_(inst_63571__$1)){
var statearr_63610_65223 = state_63597__$1;
(statearr_63610_65223[(1)] = (29));

} else {
var statearr_63612_65224 = state_63597__$1;
(statearr_63612_65224[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (4))){
var inst_63509 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63509)){
var statearr_63614_65226 = state_63597__$1;
(statearr_63614_65226[(1)] = (8));

} else {
var statearr_63615_65227 = state_63597__$1;
(statearr_63615_65227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (15))){
var inst_63540 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63540)){
var statearr_63616_65229 = state_63597__$1;
(statearr_63616_65229[(1)] = (19));

} else {
var statearr_63617_65230 = state_63597__$1;
(statearr_63617_65230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (21))){
var inst_63545 = (state_63597[(12)]);
var inst_63545__$1 = (state_63597[(2)]);
var inst_63546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63545__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63545__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63545__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63597__$1 = (function (){var statearr_63618 = state_63597;
(statearr_63618[(10)] = inst_63546);

(statearr_63618[(12)] = inst_63545__$1);

(statearr_63618[(13)] = inst_63547);

return statearr_63618;
})();
return cljs.core.async.ioc_alts_BANG_(state_63597__$1,(22),inst_63548);
} else {
if((state_val_63598 === (31))){
var inst_63579 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63579)){
var statearr_63622_65231 = state_63597__$1;
(statearr_63622_65231[(1)] = (32));

} else {
var statearr_63624_65232 = state_63597__$1;
(statearr_63624_65232[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (32))){
var inst_63554 = (state_63597[(14)]);
var state_63597__$1 = state_63597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63597__$1,(35),out,inst_63554);
} else {
if((state_val_63598 === (33))){
var inst_63545 = (state_63597[(12)]);
var inst_63518 = inst_63545;
var state_63597__$1 = (function (){var statearr_63627 = state_63597;
(statearr_63627[(7)] = inst_63518);

return statearr_63627;
})();
var statearr_63630_65234 = state_63597__$1;
(statearr_63630_65234[(2)] = null);

(statearr_63630_65234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (13))){
var inst_63518 = (state_63597[(7)]);
var inst_63528 = inst_63518.cljs$lang$protocol_mask$partition0$;
var inst_63529 = (inst_63528 & (64));
var inst_63530 = inst_63518.cljs$core$ISeq$;
var inst_63531 = (cljs.core.PROTOCOL_SENTINEL === inst_63530);
var inst_63532 = ((inst_63529) || (inst_63531));
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63532)){
var statearr_63632_65235 = state_63597__$1;
(statearr_63632_65235[(1)] = (16));

} else {
var statearr_63634_65236 = state_63597__$1;
(statearr_63634_65236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (22))){
var inst_63556 = (state_63597[(9)]);
var inst_63554 = (state_63597[(14)]);
var inst_63553 = (state_63597[(2)]);
var inst_63554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63553,(0),null);
var inst_63556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63553,(1),null);
var inst_63557 = (inst_63554__$1 == null);
var inst_63558 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63556__$1,change);
var inst_63559 = ((inst_63557) || (inst_63558));
var state_63597__$1 = (function (){var statearr_63635 = state_63597;
(statearr_63635[(9)] = inst_63556__$1);

(statearr_63635[(14)] = inst_63554__$1);

return statearr_63635;
})();
if(cljs.core.truth_(inst_63559)){
var statearr_63636_65239 = state_63597__$1;
(statearr_63636_65239[(1)] = (23));

} else {
var statearr_63637_65240 = state_63597__$1;
(statearr_63637_65240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (36))){
var inst_63545 = (state_63597[(12)]);
var inst_63518 = inst_63545;
var state_63597__$1 = (function (){var statearr_63639 = state_63597;
(statearr_63639[(7)] = inst_63518);

return statearr_63639;
})();
var statearr_63640_65242 = state_63597__$1;
(statearr_63640_65242[(2)] = null);

(statearr_63640_65242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (29))){
var inst_63571 = (state_63597[(11)]);
var state_63597__$1 = state_63597;
var statearr_63641_65243 = state_63597__$1;
(statearr_63641_65243[(2)] = inst_63571);

(statearr_63641_65243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (6))){
var state_63597__$1 = state_63597;
var statearr_63642_65245 = state_63597__$1;
(statearr_63642_65245[(2)] = false);

(statearr_63642_65245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (28))){
var inst_63567 = (state_63597[(2)]);
var inst_63568 = calc_state();
var inst_63518 = inst_63568;
var state_63597__$1 = (function (){var statearr_63643 = state_63597;
(statearr_63643[(15)] = inst_63567);

(statearr_63643[(7)] = inst_63518);

return statearr_63643;
})();
var statearr_63644_65250 = state_63597__$1;
(statearr_63644_65250[(2)] = null);

(statearr_63644_65250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (25))){
var inst_63593 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
var statearr_63645_65252 = state_63597__$1;
(statearr_63645_65252[(2)] = inst_63593);

(statearr_63645_65252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (34))){
var inst_63591 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
var statearr_63646_65253 = state_63597__$1;
(statearr_63646_65253[(2)] = inst_63591);

(statearr_63646_65253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (17))){
var state_63597__$1 = state_63597;
var statearr_63647_65254 = state_63597__$1;
(statearr_63647_65254[(2)] = false);

(statearr_63647_65254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (3))){
var state_63597__$1 = state_63597;
var statearr_63648_65256 = state_63597__$1;
(statearr_63648_65256[(2)] = false);

(statearr_63648_65256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (12))){
var inst_63595 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63597__$1,inst_63595);
} else {
if((state_val_63598 === (2))){
var inst_63493 = (state_63597[(8)]);
var inst_63498 = inst_63493.cljs$lang$protocol_mask$partition0$;
var inst_63499 = (inst_63498 & (64));
var inst_63500 = inst_63493.cljs$core$ISeq$;
var inst_63501 = (cljs.core.PROTOCOL_SENTINEL === inst_63500);
var inst_63502 = ((inst_63499) || (inst_63501));
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63502)){
var statearr_63649_65258 = state_63597__$1;
(statearr_63649_65258[(1)] = (5));

} else {
var statearr_63650_65259 = state_63597__$1;
(statearr_63650_65259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (23))){
var inst_63554 = (state_63597[(14)]);
var inst_63561 = (inst_63554 == null);
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63561)){
var statearr_63651_65260 = state_63597__$1;
(statearr_63651_65260[(1)] = (26));

} else {
var statearr_63652_65261 = state_63597__$1;
(statearr_63652_65261[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (35))){
var inst_63582 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
if(cljs.core.truth_(inst_63582)){
var statearr_63653_65262 = state_63597__$1;
(statearr_63653_65262[(1)] = (36));

} else {
var statearr_63654_65263 = state_63597__$1;
(statearr_63654_65263[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (19))){
var inst_63518 = (state_63597[(7)]);
var inst_63542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63518);
var state_63597__$1 = state_63597;
var statearr_63655_65264 = state_63597__$1;
(statearr_63655_65264[(2)] = inst_63542);

(statearr_63655_65264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (11))){
var inst_63518 = (state_63597[(7)]);
var inst_63524 = (inst_63518 == null);
var inst_63525 = cljs.core.not(inst_63524);
var state_63597__$1 = state_63597;
if(inst_63525){
var statearr_63656_65267 = state_63597__$1;
(statearr_63656_65267[(1)] = (13));

} else {
var statearr_63657_65268 = state_63597__$1;
(statearr_63657_65268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (9))){
var inst_63493 = (state_63597[(8)]);
var state_63597__$1 = state_63597;
var statearr_63658_65271 = state_63597__$1;
(statearr_63658_65271[(2)] = inst_63493);

(statearr_63658_65271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (5))){
var state_63597__$1 = state_63597;
var statearr_63659_65272 = state_63597__$1;
(statearr_63659_65272[(2)] = true);

(statearr_63659_65272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (14))){
var state_63597__$1 = state_63597;
var statearr_63660_65275 = state_63597__$1;
(statearr_63660_65275[(2)] = false);

(statearr_63660_65275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (26))){
var inst_63556 = (state_63597[(9)]);
var inst_63564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63556);
var state_63597__$1 = state_63597;
var statearr_63661_65278 = state_63597__$1;
(statearr_63661_65278[(2)] = inst_63564);

(statearr_63661_65278[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (16))){
var state_63597__$1 = state_63597;
var statearr_63662_65279 = state_63597__$1;
(statearr_63662_65279[(2)] = true);

(statearr_63662_65279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (38))){
var inst_63587 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
var statearr_63663_65280 = state_63597__$1;
(statearr_63663_65280[(2)] = inst_63587);

(statearr_63663_65280[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (30))){
var inst_63556 = (state_63597[(9)]);
var inst_63546 = (state_63597[(10)]);
var inst_63547 = (state_63597[(13)]);
var inst_63574 = cljs.core.empty_QMARK_(inst_63546);
var inst_63575 = (inst_63547.cljs$core$IFn$_invoke$arity$1 ? inst_63547.cljs$core$IFn$_invoke$arity$1(inst_63556) : inst_63547.call(null,inst_63556));
var inst_63576 = cljs.core.not(inst_63575);
var inst_63577 = ((inst_63574) && (inst_63576));
var state_63597__$1 = state_63597;
var statearr_63666_65281 = state_63597__$1;
(statearr_63666_65281[(2)] = inst_63577);

(statearr_63666_65281[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (10))){
var inst_63493 = (state_63597[(8)]);
var inst_63514 = (state_63597[(2)]);
var inst_63515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63514,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63514,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63514,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63518 = inst_63493;
var state_63597__$1 = (function (){var statearr_63667 = state_63597;
(statearr_63667[(16)] = inst_63516);

(statearr_63667[(7)] = inst_63518);

(statearr_63667[(17)] = inst_63515);

(statearr_63667[(18)] = inst_63517);

return statearr_63667;
})();
var statearr_63668_65284 = state_63597__$1;
(statearr_63668_65284[(2)] = null);

(statearr_63668_65284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (18))){
var inst_63536 = (state_63597[(2)]);
var state_63597__$1 = state_63597;
var statearr_63669_65285 = state_63597__$1;
(statearr_63669_65285[(2)] = inst_63536);

(statearr_63669_65285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (37))){
var state_63597__$1 = state_63597;
var statearr_63670_65288 = state_63597__$1;
(statearr_63670_65288[(2)] = null);

(statearr_63670_65288[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63598 === (8))){
var inst_63493 = (state_63597[(8)]);
var inst_63511 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63493);
var state_63597__$1 = state_63597;
var statearr_63671_65290 = state_63597__$1;
(statearr_63671_65290[(2)] = inst_63511);

(statearr_63671_65290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__62166__auto__ = null;
var cljs$core$async$mix_$_state_machine__62166__auto____0 = (function (){
var statearr_63673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63673[(0)] = cljs$core$async$mix_$_state_machine__62166__auto__);

(statearr_63673[(1)] = (1));

return statearr_63673;
});
var cljs$core$async$mix_$_state_machine__62166__auto____1 = (function (state_63597){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_63597);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e63675){var ex__62169__auto__ = e63675;
var statearr_63677_65292 = state_63597;
(statearr_63677_65292[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_63597[(4)]))){
var statearr_63678_65294 = state_63597;
(statearr_63678_65294[(1)] = cljs.core.first((state_63597[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65297 = state_63597;
state_63597 = G__65297;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62166__auto__ = function(state_63597){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62166__auto____1.call(this,state_63597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62166__auto____0;
cljs$core$async$mix_$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62166__auto____1;
return cljs$core$async$mix_$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_63679 = f__62266__auto__();
(statearr_63679[(6)] = c__62265__auto___65209);

return statearr_63679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_65301 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_65301(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_65303 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_65303(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_65319 = (function() {
var G__65320 = null;
var G__65320__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__65320__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__65320 = function(p,v){
switch(arguments.length){
case 1:
return G__65320__1.call(this,p);
case 2:
return G__65320__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65320.cljs$core$IFn$_invoke$arity$1 = G__65320__1;
G__65320.cljs$core$IFn$_invoke$arity$2 = G__65320__2;
return G__65320;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63696 = arguments.length;
switch (G__63696) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65319(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65319(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__63709 = arguments.length;
switch (G__63709) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63706_SHARP_){
if(cljs.core.truth_((p1__63706_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63706_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63706_SHARP_.call(null,topic)))){
return p1__63706_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63706_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63713 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63714){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63714 = meta63714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63715,meta63714__$1){
var self__ = this;
var _63715__$1 = this;
return (new cljs.core.async.t_cljs$core$async63713(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63714__$1));
}));

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63715){
var self__ = this;
var _63715__$1 = this;
return self__.meta63714;
}));

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63714","meta63714",966475077,null)], null);
}));

(cljs.core.async.t_cljs$core$async63713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63713");

(cljs.core.async.t_cljs$core$async63713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63713.
 */
cljs.core.async.__GT_t_cljs$core$async63713 = (function cljs$core$async$__GT_t_cljs$core$async63713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63714){
return (new cljs.core.async.t_cljs$core$async63713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63714));
});

}

return (new cljs.core.async.t_cljs$core$async63713(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62265__auto___65343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_63821){
var state_val_63822 = (state_63821[(1)]);
if((state_val_63822 === (7))){
var inst_63816 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63825_65346 = state_63821__$1;
(statearr_63825_65346[(2)] = inst_63816);

(statearr_63825_65346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (20))){
var state_63821__$1 = state_63821;
var statearr_63827_65350 = state_63821__$1;
(statearr_63827_65350[(2)] = null);

(statearr_63827_65350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (1))){
var state_63821__$1 = state_63821;
var statearr_63828_65353 = state_63821__$1;
(statearr_63828_65353[(2)] = null);

(statearr_63828_65353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (24))){
var inst_63799 = (state_63821[(7)]);
var inst_63808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63799);
var state_63821__$1 = state_63821;
var statearr_63830_65358 = state_63821__$1;
(statearr_63830_65358[(2)] = inst_63808);

(statearr_63830_65358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (4))){
var inst_63745 = (state_63821[(8)]);
var inst_63745__$1 = (state_63821[(2)]);
var inst_63747 = (inst_63745__$1 == null);
var state_63821__$1 = (function (){var statearr_63833 = state_63821;
(statearr_63833[(8)] = inst_63745__$1);

return statearr_63833;
})();
if(cljs.core.truth_(inst_63747)){
var statearr_63835_65361 = state_63821__$1;
(statearr_63835_65361[(1)] = (5));

} else {
var statearr_63836_65362 = state_63821__$1;
(statearr_63836_65362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (15))){
var inst_63793 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63837_65364 = state_63821__$1;
(statearr_63837_65364[(2)] = inst_63793);

(statearr_63837_65364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (21))){
var inst_63813 = (state_63821[(2)]);
var state_63821__$1 = (function (){var statearr_63838 = state_63821;
(statearr_63838[(9)] = inst_63813);

return statearr_63838;
})();
var statearr_63840_65366 = state_63821__$1;
(statearr_63840_65366[(2)] = null);

(statearr_63840_65366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (13))){
var inst_63773 = (state_63821[(10)]);
var inst_63775 = cljs.core.chunked_seq_QMARK_(inst_63773);
var state_63821__$1 = state_63821;
if(inst_63775){
var statearr_63841_65369 = state_63821__$1;
(statearr_63841_65369[(1)] = (16));

} else {
var statearr_63842_65372 = state_63821__$1;
(statearr_63842_65372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (22))){
var inst_63805 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
if(cljs.core.truth_(inst_63805)){
var statearr_63843_65374 = state_63821__$1;
(statearr_63843_65374[(1)] = (23));

} else {
var statearr_63845_65375 = state_63821__$1;
(statearr_63845_65375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (6))){
var inst_63799 = (state_63821[(7)]);
var inst_63745 = (state_63821[(8)]);
var inst_63801 = (state_63821[(11)]);
var inst_63799__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63745) : topic_fn.call(null,inst_63745));
var inst_63800 = cljs.core.deref(mults);
var inst_63801__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63800,inst_63799__$1);
var state_63821__$1 = (function (){var statearr_63850 = state_63821;
(statearr_63850[(7)] = inst_63799__$1);

(statearr_63850[(11)] = inst_63801__$1);

return statearr_63850;
})();
if(cljs.core.truth_(inst_63801__$1)){
var statearr_63851_65380 = state_63821__$1;
(statearr_63851_65380[(1)] = (19));

} else {
var statearr_63853_65381 = state_63821__$1;
(statearr_63853_65381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (25))){
var inst_63810 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63854_65384 = state_63821__$1;
(statearr_63854_65384[(2)] = inst_63810);

(statearr_63854_65384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (17))){
var inst_63773 = (state_63821[(10)]);
var inst_63784 = cljs.core.first(inst_63773);
var inst_63785 = cljs.core.async.muxch_STAR_(inst_63784);
var inst_63786 = cljs.core.async.close_BANG_(inst_63785);
var inst_63787 = cljs.core.next(inst_63773);
var inst_63757 = inst_63787;
var inst_63758 = null;
var inst_63759 = (0);
var inst_63760 = (0);
var state_63821__$1 = (function (){var statearr_63858 = state_63821;
(statearr_63858[(12)] = inst_63758);

(statearr_63858[(13)] = inst_63757);

(statearr_63858[(14)] = inst_63759);

(statearr_63858[(15)] = inst_63786);

(statearr_63858[(16)] = inst_63760);

return statearr_63858;
})();
var statearr_63859_65388 = state_63821__$1;
(statearr_63859_65388[(2)] = null);

(statearr_63859_65388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (3))){
var inst_63818 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63821__$1,inst_63818);
} else {
if((state_val_63822 === (12))){
var inst_63795 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63860_65390 = state_63821__$1;
(statearr_63860_65390[(2)] = inst_63795);

(statearr_63860_65390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (2))){
var state_63821__$1 = state_63821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63821__$1,(4),ch);
} else {
if((state_val_63822 === (23))){
var state_63821__$1 = state_63821;
var statearr_63866_65391 = state_63821__$1;
(statearr_63866_65391[(2)] = null);

(statearr_63866_65391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (19))){
var inst_63745 = (state_63821[(8)]);
var inst_63801 = (state_63821[(11)]);
var inst_63803 = cljs.core.async.muxch_STAR_(inst_63801);
var state_63821__$1 = state_63821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63821__$1,(22),inst_63803,inst_63745);
} else {
if((state_val_63822 === (11))){
var inst_63773 = (state_63821[(10)]);
var inst_63757 = (state_63821[(13)]);
var inst_63773__$1 = cljs.core.seq(inst_63757);
var state_63821__$1 = (function (){var statearr_63871 = state_63821;
(statearr_63871[(10)] = inst_63773__$1);

return statearr_63871;
})();
if(inst_63773__$1){
var statearr_63872_65394 = state_63821__$1;
(statearr_63872_65394[(1)] = (13));

} else {
var statearr_63873_65395 = state_63821__$1;
(statearr_63873_65395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (9))){
var inst_63797 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63876_65396 = state_63821__$1;
(statearr_63876_65396[(2)] = inst_63797);

(statearr_63876_65396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (5))){
var inst_63754 = cljs.core.deref(mults);
var inst_63755 = cljs.core.vals(inst_63754);
var inst_63756 = cljs.core.seq(inst_63755);
var inst_63757 = inst_63756;
var inst_63758 = null;
var inst_63759 = (0);
var inst_63760 = (0);
var state_63821__$1 = (function (){var statearr_63878 = state_63821;
(statearr_63878[(12)] = inst_63758);

(statearr_63878[(13)] = inst_63757);

(statearr_63878[(14)] = inst_63759);

(statearr_63878[(16)] = inst_63760);

return statearr_63878;
})();
var statearr_63879_65398 = state_63821__$1;
(statearr_63879_65398[(2)] = null);

(statearr_63879_65398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (14))){
var state_63821__$1 = state_63821;
var statearr_63885_65402 = state_63821__$1;
(statearr_63885_65402[(2)] = null);

(statearr_63885_65402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (16))){
var inst_63773 = (state_63821[(10)]);
var inst_63778 = cljs.core.chunk_first(inst_63773);
var inst_63780 = cljs.core.chunk_rest(inst_63773);
var inst_63781 = cljs.core.count(inst_63778);
var inst_63757 = inst_63780;
var inst_63758 = inst_63778;
var inst_63759 = inst_63781;
var inst_63760 = (0);
var state_63821__$1 = (function (){var statearr_63888 = state_63821;
(statearr_63888[(12)] = inst_63758);

(statearr_63888[(13)] = inst_63757);

(statearr_63888[(14)] = inst_63759);

(statearr_63888[(16)] = inst_63760);

return statearr_63888;
})();
var statearr_63889_65408 = state_63821__$1;
(statearr_63889_65408[(2)] = null);

(statearr_63889_65408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (10))){
var inst_63758 = (state_63821[(12)]);
var inst_63757 = (state_63821[(13)]);
var inst_63759 = (state_63821[(14)]);
var inst_63760 = (state_63821[(16)]);
var inst_63765 = cljs.core._nth(inst_63758,inst_63760);
var inst_63766 = cljs.core.async.muxch_STAR_(inst_63765);
var inst_63767 = cljs.core.async.close_BANG_(inst_63766);
var inst_63768 = (inst_63760 + (1));
var tmp63882 = inst_63758;
var tmp63883 = inst_63757;
var tmp63884 = inst_63759;
var inst_63757__$1 = tmp63883;
var inst_63758__$1 = tmp63882;
var inst_63759__$1 = tmp63884;
var inst_63760__$1 = inst_63768;
var state_63821__$1 = (function (){var statearr_63893 = state_63821;
(statearr_63893[(17)] = inst_63767);

(statearr_63893[(12)] = inst_63758__$1);

(statearr_63893[(13)] = inst_63757__$1);

(statearr_63893[(14)] = inst_63759__$1);

(statearr_63893[(16)] = inst_63760__$1);

return statearr_63893;
})();
var statearr_63894_65416 = state_63821__$1;
(statearr_63894_65416[(2)] = null);

(statearr_63894_65416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (18))){
var inst_63790 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63895_65421 = state_63821__$1;
(statearr_63895_65421[(2)] = inst_63790);

(statearr_63895_65421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (8))){
var inst_63759 = (state_63821[(14)]);
var inst_63760 = (state_63821[(16)]);
var inst_63762 = (inst_63760 < inst_63759);
var inst_63763 = inst_63762;
var state_63821__$1 = state_63821;
if(cljs.core.truth_(inst_63763)){
var statearr_63896_65423 = state_63821__$1;
(statearr_63896_65423[(1)] = (10));

} else {
var statearr_63897_65424 = state_63821__$1;
(statearr_63897_65424[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_63898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63898[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_63898[(1)] = (1));

return statearr_63898;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_63821){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_63821);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e63899){var ex__62169__auto__ = e63899;
var statearr_63900_65431 = state_63821;
(statearr_63900_65431[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_63821[(4)]))){
var statearr_63902_65433 = state_63821;
(statearr_63902_65433[(1)] = cljs.core.first((state_63821[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65435 = state_63821;
state_63821 = G__65435;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_63821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_63821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_63904 = f__62266__auto__();
(statearr_63904[(6)] = c__62265__auto___65343);

return statearr_63904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__63910 = arguments.length;
switch (G__63910) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__63922 = arguments.length;
switch (G__63922) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__63931 = arguments.length;
switch (G__63931) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__62265__auto___65456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_63996){
var state_val_63997 = (state_63996[(1)]);
if((state_val_63997 === (7))){
var state_63996__$1 = state_63996;
var statearr_64003_65457 = state_63996__$1;
(statearr_64003_65457[(2)] = null);

(statearr_64003_65457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (1))){
var state_63996__$1 = state_63996;
var statearr_64004_65458 = state_63996__$1;
(statearr_64004_65458[(2)] = null);

(statearr_64004_65458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (4))){
var inst_63943 = (state_63996[(7)]);
var inst_63944 = (state_63996[(8)]);
var inst_63947 = (inst_63944 < inst_63943);
var state_63996__$1 = state_63996;
if(cljs.core.truth_(inst_63947)){
var statearr_64007_65493 = state_63996__$1;
(statearr_64007_65493[(1)] = (6));

} else {
var statearr_64009_65496 = state_63996__$1;
(statearr_64009_65496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (15))){
var inst_63974 = (state_63996[(9)]);
var inst_63979 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63974);
var state_63996__$1 = state_63996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63996__$1,(17),out,inst_63979);
} else {
if((state_val_63997 === (13))){
var inst_63974 = (state_63996[(9)]);
var inst_63974__$1 = (state_63996[(2)]);
var inst_63975 = cljs.core.some(cljs.core.nil_QMARK_,inst_63974__$1);
var state_63996__$1 = (function (){var statearr_64010 = state_63996;
(statearr_64010[(9)] = inst_63974__$1);

return statearr_64010;
})();
if(cljs.core.truth_(inst_63975)){
var statearr_64011_65500 = state_63996__$1;
(statearr_64011_65500[(1)] = (14));

} else {
var statearr_64012_65503 = state_63996__$1;
(statearr_64012_65503[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (6))){
var state_63996__$1 = state_63996;
var statearr_64015_65504 = state_63996__$1;
(statearr_64015_65504[(2)] = null);

(statearr_64015_65504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (17))){
var inst_63981 = (state_63996[(2)]);
var state_63996__$1 = (function (){var statearr_64021 = state_63996;
(statearr_64021[(10)] = inst_63981);

return statearr_64021;
})();
var statearr_64022_65505 = state_63996__$1;
(statearr_64022_65505[(2)] = null);

(statearr_64022_65505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (3))){
var inst_63986 = (state_63996[(2)]);
var state_63996__$1 = state_63996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63996__$1,inst_63986);
} else {
if((state_val_63997 === (12))){
var _ = (function (){var statearr_64025 = state_63996;
(statearr_64025[(4)] = cljs.core.rest((state_63996[(4)])));

return statearr_64025;
})();
var state_63996__$1 = state_63996;
var ex64019 = (state_63996__$1[(2)]);
var statearr_64027_65507 = state_63996__$1;
(statearr_64027_65507[(5)] = ex64019);


if((ex64019 instanceof Object)){
var statearr_64028_65511 = state_63996__$1;
(statearr_64028_65511[(1)] = (11));

(statearr_64028_65511[(5)] = null);

} else {
throw ex64019;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (2))){
var inst_63942 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63943 = cnt;
var inst_63944 = (0);
var state_63996__$1 = (function (){var statearr_64036 = state_63996;
(statearr_64036[(7)] = inst_63943);

(statearr_64036[(11)] = inst_63942);

(statearr_64036[(8)] = inst_63944);

return statearr_64036;
})();
var statearr_64037_65516 = state_63996__$1;
(statearr_64037_65516[(2)] = null);

(statearr_64037_65516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (11))){
var inst_63952 = (state_63996[(2)]);
var inst_63954 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63996__$1 = (function (){var statearr_64039 = state_63996;
(statearr_64039[(12)] = inst_63952);

return statearr_64039;
})();
var statearr_64042_65522 = state_63996__$1;
(statearr_64042_65522[(2)] = inst_63954);

(statearr_64042_65522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (9))){
var inst_63944 = (state_63996[(8)]);
var _ = (function (){var statearr_64044 = state_63996;
(statearr_64044[(4)] = cljs.core.cons((12),(state_63996[(4)])));

return statearr_64044;
})();
var inst_63960 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63944) : chs__$1.call(null,inst_63944));
var inst_63961 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63944) : done.call(null,inst_63944));
var inst_63962 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63960,inst_63961);
var ___$1 = (function (){var statearr_64046 = state_63996;
(statearr_64046[(4)] = cljs.core.rest((state_63996[(4)])));

return statearr_64046;
})();
var state_63996__$1 = state_63996;
var statearr_64050_65532 = state_63996__$1;
(statearr_64050_65532[(2)] = inst_63962);

(statearr_64050_65532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (5))){
var inst_63972 = (state_63996[(2)]);
var state_63996__$1 = (function (){var statearr_64052 = state_63996;
(statearr_64052[(13)] = inst_63972);

return statearr_64052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63996__$1,(13),dchan);
} else {
if((state_val_63997 === (14))){
var inst_63977 = cljs.core.async.close_BANG_(out);
var state_63996__$1 = state_63996;
var statearr_64055_65539 = state_63996__$1;
(statearr_64055_65539[(2)] = inst_63977);

(statearr_64055_65539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (16))){
var inst_63984 = (state_63996[(2)]);
var state_63996__$1 = state_63996;
var statearr_64058_65546 = state_63996__$1;
(statearr_64058_65546[(2)] = inst_63984);

(statearr_64058_65546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (10))){
var inst_63944 = (state_63996[(8)]);
var inst_63965 = (state_63996[(2)]);
var inst_63966 = (inst_63944 + (1));
var inst_63944__$1 = inst_63966;
var state_63996__$1 = (function (){var statearr_64061 = state_63996;
(statearr_64061[(14)] = inst_63965);

(statearr_64061[(8)] = inst_63944__$1);

return statearr_64061;
})();
var statearr_64063_65553 = state_63996__$1;
(statearr_64063_65553[(2)] = null);

(statearr_64063_65553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63997 === (8))){
var inst_63970 = (state_63996[(2)]);
var state_63996__$1 = state_63996;
var statearr_64064_65557 = state_63996__$1;
(statearr_64064_65557[(2)] = inst_63970);

(statearr_64064_65557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64066[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64066[(1)] = (1));

return statearr_64066;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_63996){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_63996);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64070){var ex__62169__auto__ = e64070;
var statearr_64071_65568 = state_63996;
(statearr_64071_65568[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_63996[(4)]))){
var statearr_64072_65572 = state_63996;
(statearr_64072_65572[(1)] = cljs.core.first((state_63996[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65575 = state_63996;
state_63996 = G__65575;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_63996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_63996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64073 = f__62266__auto__();
(statearr_64073[(6)] = c__62265__auto___65456);

return statearr_64073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__64080 = arguments.length;
switch (G__64080) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62265__auto___65592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64121){
var state_val_64122 = (state_64121[(1)]);
if((state_val_64122 === (7))){
var inst_64096 = (state_64121[(7)]);
var inst_64097 = (state_64121[(8)]);
var inst_64096__$1 = (state_64121[(2)]);
var inst_64097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64096__$1,(0),null);
var inst_64098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64096__$1,(1),null);
var inst_64101 = (inst_64097__$1 == null);
var state_64121__$1 = (function (){var statearr_64128 = state_64121;
(statearr_64128[(9)] = inst_64098);

(statearr_64128[(7)] = inst_64096__$1);

(statearr_64128[(8)] = inst_64097__$1);

return statearr_64128;
})();
if(cljs.core.truth_(inst_64101)){
var statearr_64130_65605 = state_64121__$1;
(statearr_64130_65605[(1)] = (8));

} else {
var statearr_64131_65609 = state_64121__$1;
(statearr_64131_65609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (1))){
var inst_64085 = cljs.core.vec(chs);
var inst_64086 = inst_64085;
var state_64121__$1 = (function (){var statearr_64136 = state_64121;
(statearr_64136[(10)] = inst_64086);

return statearr_64136;
})();
var statearr_64137_65614 = state_64121__$1;
(statearr_64137_65614[(2)] = null);

(statearr_64137_65614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (4))){
var inst_64086 = (state_64121[(10)]);
var state_64121__$1 = state_64121;
return cljs.core.async.ioc_alts_BANG_(state_64121__$1,(7),inst_64086);
} else {
if((state_val_64122 === (6))){
var inst_64117 = (state_64121[(2)]);
var state_64121__$1 = state_64121;
var statearr_64139_65621 = state_64121__$1;
(statearr_64139_65621[(2)] = inst_64117);

(statearr_64139_65621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (3))){
var inst_64119 = (state_64121[(2)]);
var state_64121__$1 = state_64121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64121__$1,inst_64119);
} else {
if((state_val_64122 === (2))){
var inst_64086 = (state_64121[(10)]);
var inst_64088 = cljs.core.count(inst_64086);
var inst_64090 = (inst_64088 > (0));
var state_64121__$1 = state_64121;
if(cljs.core.truth_(inst_64090)){
var statearr_64144_65629 = state_64121__$1;
(statearr_64144_65629[(1)] = (4));

} else {
var statearr_64146_65630 = state_64121__$1;
(statearr_64146_65630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (11))){
var inst_64086 = (state_64121[(10)]);
var inst_64110 = (state_64121[(2)]);
var tmp64140 = inst_64086;
var inst_64086__$1 = tmp64140;
var state_64121__$1 = (function (){var statearr_64149 = state_64121;
(statearr_64149[(11)] = inst_64110);

(statearr_64149[(10)] = inst_64086__$1);

return statearr_64149;
})();
var statearr_64150_65638 = state_64121__$1;
(statearr_64150_65638[(2)] = null);

(statearr_64150_65638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (9))){
var inst_64097 = (state_64121[(8)]);
var state_64121__$1 = state_64121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64121__$1,(11),out,inst_64097);
} else {
if((state_val_64122 === (5))){
var inst_64115 = cljs.core.async.close_BANG_(out);
var state_64121__$1 = state_64121;
var statearr_64156_65645 = state_64121__$1;
(statearr_64156_65645[(2)] = inst_64115);

(statearr_64156_65645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (10))){
var inst_64113 = (state_64121[(2)]);
var state_64121__$1 = state_64121;
var statearr_64157_65648 = state_64121__$1;
(statearr_64157_65648[(2)] = inst_64113);

(statearr_64157_65648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64122 === (8))){
var inst_64098 = (state_64121[(9)]);
var inst_64086 = (state_64121[(10)]);
var inst_64096 = (state_64121[(7)]);
var inst_64097 = (state_64121[(8)]);
var inst_64105 = (function (){var cs = inst_64086;
var vec__64092 = inst_64096;
var v = inst_64097;
var c = inst_64098;
return (function (p1__64075_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__64075_SHARP_);
});
})();
var inst_64106 = cljs.core.filterv(inst_64105,inst_64086);
var inst_64086__$1 = inst_64106;
var state_64121__$1 = (function (){var statearr_64160 = state_64121;
(statearr_64160[(10)] = inst_64086__$1);

return statearr_64160;
})();
var statearr_64161_65664 = state_64121__$1;
(statearr_64161_65664[(2)] = null);

(statearr_64161_65664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64163[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64163[(1)] = (1));

return statearr_64163;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_64121){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64121);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64166){var ex__62169__auto__ = e64166;
var statearr_64167_65674 = state_64121;
(statearr_64167_65674[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64121[(4)]))){
var statearr_64168_65678 = state_64121;
(statearr_64168_65678[(1)] = cljs.core.first((state_64121[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65683 = state_64121;
state_64121 = G__65683;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_64121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_64121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64170 = f__62266__auto__();
(statearr_64170[(6)] = c__62265__auto___65592);

return statearr_64170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__64179 = arguments.length;
switch (G__64179) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62265__auto___65704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64205){
var state_val_64206 = (state_64205[(1)]);
if((state_val_64206 === (7))){
var inst_64186 = (state_64205[(7)]);
var inst_64186__$1 = (state_64205[(2)]);
var inst_64188 = (inst_64186__$1 == null);
var inst_64189 = cljs.core.not(inst_64188);
var state_64205__$1 = (function (){var statearr_64208 = state_64205;
(statearr_64208[(7)] = inst_64186__$1);

return statearr_64208;
})();
if(inst_64189){
var statearr_64209_65713 = state_64205__$1;
(statearr_64209_65713[(1)] = (8));

} else {
var statearr_64210_65717 = state_64205__$1;
(statearr_64210_65717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (1))){
var inst_64180 = (0);
var state_64205__$1 = (function (){var statearr_64211 = state_64205;
(statearr_64211[(8)] = inst_64180);

return statearr_64211;
})();
var statearr_64212_65720 = state_64205__$1;
(statearr_64212_65720[(2)] = null);

(statearr_64212_65720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (4))){
var state_64205__$1 = state_64205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64205__$1,(7),ch);
} else {
if((state_val_64206 === (6))){
var inst_64200 = (state_64205[(2)]);
var state_64205__$1 = state_64205;
var statearr_64214_65728 = state_64205__$1;
(statearr_64214_65728[(2)] = inst_64200);

(statearr_64214_65728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (3))){
var inst_64202 = (state_64205[(2)]);
var inst_64203 = cljs.core.async.close_BANG_(out);
var state_64205__$1 = (function (){var statearr_64216 = state_64205;
(statearr_64216[(9)] = inst_64202);

return statearr_64216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64205__$1,inst_64203);
} else {
if((state_val_64206 === (2))){
var inst_64180 = (state_64205[(8)]);
var inst_64182 = (inst_64180 < n);
var state_64205__$1 = state_64205;
if(cljs.core.truth_(inst_64182)){
var statearr_64218_65738 = state_64205__$1;
(statearr_64218_65738[(1)] = (4));

} else {
var statearr_64222_65741 = state_64205__$1;
(statearr_64222_65741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (11))){
var inst_64180 = (state_64205[(8)]);
var inst_64192 = (state_64205[(2)]);
var inst_64193 = (inst_64180 + (1));
var inst_64180__$1 = inst_64193;
var state_64205__$1 = (function (){var statearr_64224 = state_64205;
(statearr_64224[(10)] = inst_64192);

(statearr_64224[(8)] = inst_64180__$1);

return statearr_64224;
})();
var statearr_64225_65748 = state_64205__$1;
(statearr_64225_65748[(2)] = null);

(statearr_64225_65748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (9))){
var state_64205__$1 = state_64205;
var statearr_64228_65751 = state_64205__$1;
(statearr_64228_65751[(2)] = null);

(statearr_64228_65751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (5))){
var state_64205__$1 = state_64205;
var statearr_64230_65756 = state_64205__$1;
(statearr_64230_65756[(2)] = null);

(statearr_64230_65756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (10))){
var inst_64197 = (state_64205[(2)]);
var state_64205__$1 = state_64205;
var statearr_64236_65761 = state_64205__$1;
(statearr_64236_65761[(2)] = inst_64197);

(statearr_64236_65761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64206 === (8))){
var inst_64186 = (state_64205[(7)]);
var state_64205__$1 = state_64205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64205__$1,(11),out,inst_64186);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64237[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64237[(1)] = (1));

return statearr_64237;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_64205){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64205);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64238){var ex__62169__auto__ = e64238;
var statearr_64240_65768 = state_64205;
(statearr_64240_65768[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64205[(4)]))){
var statearr_64241_65769 = state_64205;
(statearr_64241_65769[(1)] = cljs.core.first((state_64205[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65770 = state_64205;
state_64205 = G__65770;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_64205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_64205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64244 = f__62266__auto__();
(statearr_64244[(6)] = c__62265__auto___65704);

return statearr_64244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64251 = (function (f,ch,meta64252){
this.f = f;
this.ch = ch;
this.meta64252 = meta64252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64253,meta64252__$1){
var self__ = this;
var _64253__$1 = this;
return (new cljs.core.async.t_cljs$core$async64251(self__.f,self__.ch,meta64252__$1));
}));

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64253){
var self__ = this;
var _64253__$1 = this;
return self__.meta64252;
}));

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64270 = (function (f,ch,meta64252,_,fn1,meta64271){
this.f = f;
this.ch = ch;
this.meta64252 = meta64252;
this._ = _;
this.fn1 = fn1;
this.meta64271 = meta64271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64272,meta64271__$1){
var self__ = this;
var _64272__$1 = this;
return (new cljs.core.async.t_cljs$core$async64270(self__.f,self__.ch,self__.meta64252,self__._,self__.fn1,meta64271__$1));
}));

(cljs.core.async.t_cljs$core$async64270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64272){
var self__ = this;
var _64272__$1 = this;
return self__.meta64271;
}));

(cljs.core.async.t_cljs$core$async64270.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async64270.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__64247_SHARP_){
var G__64278 = (((p1__64247_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__64247_SHARP_) : self__.f.call(null,p1__64247_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__64278) : f1.call(null,G__64278));
});
}));

(cljs.core.async.t_cljs$core$async64270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64252","meta64252",1562885416,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64251","cljs.core.async/t_cljs$core$async64251",1987166907,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64271","meta64271",-421393366,null)], null);
}));

(cljs.core.async.t_cljs$core$async64270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64270");

(cljs.core.async.t_cljs$core$async64270.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64270.
 */
cljs.core.async.__GT_t_cljs$core$async64270 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64270(f__$1,ch__$1,meta64252__$1,___$2,fn1__$1,meta64271){
return (new cljs.core.async.t_cljs$core$async64270(f__$1,ch__$1,meta64252__$1,___$2,fn1__$1,meta64271));
});

}

return (new cljs.core.async.t_cljs$core$async64270(self__.f,self__.ch,self__.meta64252,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__64281 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__64281) : self__.f.call(null,G__64281));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async64251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64252","meta64252",1562885416,null)], null);
}));

(cljs.core.async.t_cljs$core$async64251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64251");

(cljs.core.async.t_cljs$core$async64251.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64251.
 */
cljs.core.async.__GT_t_cljs$core$async64251 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64251(f__$1,ch__$1,meta64252){
return (new cljs.core.async.t_cljs$core$async64251(f__$1,ch__$1,meta64252));
});

}

return (new cljs.core.async.t_cljs$core$async64251(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64287 = (function (f,ch,meta64288){
this.f = f;
this.ch = ch;
this.meta64288 = meta64288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64289,meta64288__$1){
var self__ = this;
var _64289__$1 = this;
return (new cljs.core.async.t_cljs$core$async64287(self__.f,self__.ch,meta64288__$1));
}));

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64289){
var self__ = this;
var _64289__$1 = this;
return self__.meta64288;
}));

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async64287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64288","meta64288",1117144802,null)], null);
}));

(cljs.core.async.t_cljs$core$async64287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64287");

(cljs.core.async.t_cljs$core$async64287.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64287.
 */
cljs.core.async.__GT_t_cljs$core$async64287 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64287(f__$1,ch__$1,meta64288){
return (new cljs.core.async.t_cljs$core$async64287(f__$1,ch__$1,meta64288));
});

}

return (new cljs.core.async.t_cljs$core$async64287(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64295 = (function (p,ch,meta64296){
this.p = p;
this.ch = ch;
this.meta64296 = meta64296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64297,meta64296__$1){
var self__ = this;
var _64297__$1 = this;
return (new cljs.core.async.t_cljs$core$async64295(self__.p,self__.ch,meta64296__$1));
}));

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64297){
var self__ = this;
var _64297__$1 = this;
return self__.meta64296;
}));

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async64295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64296","meta64296",250351251,null)], null);
}));

(cljs.core.async.t_cljs$core$async64295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64295");

(cljs.core.async.t_cljs$core$async64295.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64295.
 */
cljs.core.async.__GT_t_cljs$core$async64295 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64295(p__$1,ch__$1,meta64296){
return (new cljs.core.async.t_cljs$core$async64295(p__$1,ch__$1,meta64296));
});

}

return (new cljs.core.async.t_cljs$core$async64295(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__64304 = arguments.length;
switch (G__64304) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62265__auto___65789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64326){
var state_val_64327 = (state_64326[(1)]);
if((state_val_64327 === (7))){
var inst_64322 = (state_64326[(2)]);
var state_64326__$1 = state_64326;
var statearr_64328_65793 = state_64326__$1;
(statearr_64328_65793[(2)] = inst_64322);

(statearr_64328_65793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (1))){
var state_64326__$1 = state_64326;
var statearr_64329_65794 = state_64326__$1;
(statearr_64329_65794[(2)] = null);

(statearr_64329_65794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (4))){
var inst_64308 = (state_64326[(7)]);
var inst_64308__$1 = (state_64326[(2)]);
var inst_64309 = (inst_64308__$1 == null);
var state_64326__$1 = (function (){var statearr_64330 = state_64326;
(statearr_64330[(7)] = inst_64308__$1);

return statearr_64330;
})();
if(cljs.core.truth_(inst_64309)){
var statearr_64331_65795 = state_64326__$1;
(statearr_64331_65795[(1)] = (5));

} else {
var statearr_64332_65796 = state_64326__$1;
(statearr_64332_65796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (6))){
var inst_64308 = (state_64326[(7)]);
var inst_64313 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64308) : p.call(null,inst_64308));
var state_64326__$1 = state_64326;
if(cljs.core.truth_(inst_64313)){
var statearr_64333_65798 = state_64326__$1;
(statearr_64333_65798[(1)] = (8));

} else {
var statearr_64334_65799 = state_64326__$1;
(statearr_64334_65799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (3))){
var inst_64324 = (state_64326[(2)]);
var state_64326__$1 = state_64326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64326__$1,inst_64324);
} else {
if((state_val_64327 === (2))){
var state_64326__$1 = state_64326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64326__$1,(4),ch);
} else {
if((state_val_64327 === (11))){
var inst_64316 = (state_64326[(2)]);
var state_64326__$1 = state_64326;
var statearr_64339_65804 = state_64326__$1;
(statearr_64339_65804[(2)] = inst_64316);

(statearr_64339_65804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (9))){
var state_64326__$1 = state_64326;
var statearr_64340_65805 = state_64326__$1;
(statearr_64340_65805[(2)] = null);

(statearr_64340_65805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (5))){
var inst_64311 = cljs.core.async.close_BANG_(out);
var state_64326__$1 = state_64326;
var statearr_64341_65807 = state_64326__$1;
(statearr_64341_65807[(2)] = inst_64311);

(statearr_64341_65807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (10))){
var inst_64319 = (state_64326[(2)]);
var state_64326__$1 = (function (){var statearr_64342 = state_64326;
(statearr_64342[(8)] = inst_64319);

return statearr_64342;
})();
var statearr_64343_65811 = state_64326__$1;
(statearr_64343_65811[(2)] = null);

(statearr_64343_65811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64327 === (8))){
var inst_64308 = (state_64326[(7)]);
var state_64326__$1 = state_64326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64326__$1,(11),out,inst_64308);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64344 = [null,null,null,null,null,null,null,null,null];
(statearr_64344[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64344[(1)] = (1));

return statearr_64344;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_64326){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64326);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64346){var ex__62169__auto__ = e64346;
var statearr_64347_65816 = state_64326;
(statearr_64347_65816[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64326[(4)]))){
var statearr_64348_65818 = state_64326;
(statearr_64348_65818[(1)] = cljs.core.first((state_64326[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65819 = state_64326;
state_64326 = G__65819;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_64326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_64326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64350 = f__62266__auto__();
(statearr_64350[(6)] = c__62265__auto___65789);

return statearr_64350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__64353 = arguments.length;
switch (G__64353) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__62265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64424){
var state_val_64425 = (state_64424[(1)]);
if((state_val_64425 === (7))){
var inst_64420 = (state_64424[(2)]);
var state_64424__$1 = state_64424;
var statearr_64427_65824 = state_64424__$1;
(statearr_64427_65824[(2)] = inst_64420);

(statearr_64427_65824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (20))){
var inst_64390 = (state_64424[(7)]);
var inst_64401 = (state_64424[(2)]);
var inst_64402 = cljs.core.next(inst_64390);
var inst_64373 = inst_64402;
var inst_64374 = null;
var inst_64375 = (0);
var inst_64376 = (0);
var state_64424__$1 = (function (){var statearr_64429 = state_64424;
(statearr_64429[(8)] = inst_64401);

(statearr_64429[(9)] = inst_64373);

(statearr_64429[(10)] = inst_64374);

(statearr_64429[(11)] = inst_64376);

(statearr_64429[(12)] = inst_64375);

return statearr_64429;
})();
var statearr_64430_65827 = state_64424__$1;
(statearr_64430_65827[(2)] = null);

(statearr_64430_65827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (1))){
var state_64424__$1 = state_64424;
var statearr_64431_65828 = state_64424__$1;
(statearr_64431_65828[(2)] = null);

(statearr_64431_65828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (4))){
var inst_64359 = (state_64424[(13)]);
var inst_64359__$1 = (state_64424[(2)]);
var inst_64360 = (inst_64359__$1 == null);
var state_64424__$1 = (function (){var statearr_64432 = state_64424;
(statearr_64432[(13)] = inst_64359__$1);

return statearr_64432;
})();
if(cljs.core.truth_(inst_64360)){
var statearr_64433_65831 = state_64424__$1;
(statearr_64433_65831[(1)] = (5));

} else {
var statearr_64434_65832 = state_64424__$1;
(statearr_64434_65832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (15))){
var state_64424__$1 = state_64424;
var statearr_64438_65835 = state_64424__$1;
(statearr_64438_65835[(2)] = null);

(statearr_64438_65835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (21))){
var state_64424__$1 = state_64424;
var statearr_64439_65837 = state_64424__$1;
(statearr_64439_65837[(2)] = null);

(statearr_64439_65837[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (13))){
var inst_64373 = (state_64424[(9)]);
var inst_64374 = (state_64424[(10)]);
var inst_64376 = (state_64424[(11)]);
var inst_64375 = (state_64424[(12)]);
var inst_64385 = (state_64424[(2)]);
var inst_64387 = (inst_64376 + (1));
var tmp64435 = inst_64373;
var tmp64436 = inst_64374;
var tmp64437 = inst_64375;
var inst_64373__$1 = tmp64435;
var inst_64374__$1 = tmp64436;
var inst_64375__$1 = tmp64437;
var inst_64376__$1 = inst_64387;
var state_64424__$1 = (function (){var statearr_64440 = state_64424;
(statearr_64440[(14)] = inst_64385);

(statearr_64440[(9)] = inst_64373__$1);

(statearr_64440[(10)] = inst_64374__$1);

(statearr_64440[(11)] = inst_64376__$1);

(statearr_64440[(12)] = inst_64375__$1);

return statearr_64440;
})();
var statearr_64441_65839 = state_64424__$1;
(statearr_64441_65839[(2)] = null);

(statearr_64441_65839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (22))){
var state_64424__$1 = state_64424;
var statearr_64442_65841 = state_64424__$1;
(statearr_64442_65841[(2)] = null);

(statearr_64442_65841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (6))){
var inst_64359 = (state_64424[(13)]);
var inst_64370 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64359) : f.call(null,inst_64359));
var inst_64371 = cljs.core.seq(inst_64370);
var inst_64373 = inst_64371;
var inst_64374 = null;
var inst_64375 = (0);
var inst_64376 = (0);
var state_64424__$1 = (function (){var statearr_64443 = state_64424;
(statearr_64443[(9)] = inst_64373);

(statearr_64443[(10)] = inst_64374);

(statearr_64443[(11)] = inst_64376);

(statearr_64443[(12)] = inst_64375);

return statearr_64443;
})();
var statearr_64444_65845 = state_64424__$1;
(statearr_64444_65845[(2)] = null);

(statearr_64444_65845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (17))){
var inst_64390 = (state_64424[(7)]);
var inst_64394 = cljs.core.chunk_first(inst_64390);
var inst_64395 = cljs.core.chunk_rest(inst_64390);
var inst_64396 = cljs.core.count(inst_64394);
var inst_64373 = inst_64395;
var inst_64374 = inst_64394;
var inst_64375 = inst_64396;
var inst_64376 = (0);
var state_64424__$1 = (function (){var statearr_64445 = state_64424;
(statearr_64445[(9)] = inst_64373);

(statearr_64445[(10)] = inst_64374);

(statearr_64445[(11)] = inst_64376);

(statearr_64445[(12)] = inst_64375);

return statearr_64445;
})();
var statearr_64446_65846 = state_64424__$1;
(statearr_64446_65846[(2)] = null);

(statearr_64446_65846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (3))){
var inst_64422 = (state_64424[(2)]);
var state_64424__$1 = state_64424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64424__$1,inst_64422);
} else {
if((state_val_64425 === (12))){
var inst_64410 = (state_64424[(2)]);
var state_64424__$1 = state_64424;
var statearr_64447_65847 = state_64424__$1;
(statearr_64447_65847[(2)] = inst_64410);

(statearr_64447_65847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (2))){
var state_64424__$1 = state_64424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64424__$1,(4),in$);
} else {
if((state_val_64425 === (23))){
var inst_64418 = (state_64424[(2)]);
var state_64424__$1 = state_64424;
var statearr_64448_65849 = state_64424__$1;
(statearr_64448_65849[(2)] = inst_64418);

(statearr_64448_65849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (19))){
var inst_64405 = (state_64424[(2)]);
var state_64424__$1 = state_64424;
var statearr_64449_65850 = state_64424__$1;
(statearr_64449_65850[(2)] = inst_64405);

(statearr_64449_65850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (11))){
var inst_64373 = (state_64424[(9)]);
var inst_64390 = (state_64424[(7)]);
var inst_64390__$1 = cljs.core.seq(inst_64373);
var state_64424__$1 = (function (){var statearr_64450 = state_64424;
(statearr_64450[(7)] = inst_64390__$1);

return statearr_64450;
})();
if(inst_64390__$1){
var statearr_64451_65852 = state_64424__$1;
(statearr_64451_65852[(1)] = (14));

} else {
var statearr_64452_65853 = state_64424__$1;
(statearr_64452_65853[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (9))){
var inst_64412 = (state_64424[(2)]);
var inst_64413 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_64424__$1 = (function (){var statearr_64453 = state_64424;
(statearr_64453[(15)] = inst_64412);

return statearr_64453;
})();
if(cljs.core.truth_(inst_64413)){
var statearr_64454_65855 = state_64424__$1;
(statearr_64454_65855[(1)] = (21));

} else {
var statearr_64455_65856 = state_64424__$1;
(statearr_64455_65856[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (5))){
var inst_64362 = cljs.core.async.close_BANG_(out);
var state_64424__$1 = state_64424;
var statearr_64456_65857 = state_64424__$1;
(statearr_64456_65857[(2)] = inst_64362);

(statearr_64456_65857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (14))){
var inst_64390 = (state_64424[(7)]);
var inst_64392 = cljs.core.chunked_seq_QMARK_(inst_64390);
var state_64424__$1 = state_64424;
if(inst_64392){
var statearr_64459_65859 = state_64424__$1;
(statearr_64459_65859[(1)] = (17));

} else {
var statearr_64460_65860 = state_64424__$1;
(statearr_64460_65860[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (16))){
var inst_64408 = (state_64424[(2)]);
var state_64424__$1 = state_64424;
var statearr_64461_65862 = state_64424__$1;
(statearr_64461_65862[(2)] = inst_64408);

(statearr_64461_65862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64425 === (10))){
var inst_64374 = (state_64424[(10)]);
var inst_64376 = (state_64424[(11)]);
var inst_64383 = cljs.core._nth(inst_64374,inst_64376);
var state_64424__$1 = state_64424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64424__$1,(13),out,inst_64383);
} else {
if((state_val_64425 === (18))){
var inst_64390 = (state_64424[(7)]);
var inst_64399 = cljs.core.first(inst_64390);
var state_64424__$1 = state_64424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64424__$1,(20),out,inst_64399);
} else {
if((state_val_64425 === (8))){
var inst_64376 = (state_64424[(11)]);
var inst_64375 = (state_64424[(12)]);
var inst_64378 = (inst_64376 < inst_64375);
var inst_64379 = inst_64378;
var state_64424__$1 = state_64424;
if(cljs.core.truth_(inst_64379)){
var statearr_64463_65867 = state_64424__$1;
(statearr_64463_65867[(1)] = (10));

} else {
var statearr_64464_65868 = state_64424__$1;
(statearr_64464_65868[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__62166__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62166__auto____0 = (function (){
var statearr_64465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64465[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62166__auto__);

(statearr_64465[(1)] = (1));

return statearr_64465;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62166__auto____1 = (function (state_64424){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64424);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64466){var ex__62169__auto__ = e64466;
var statearr_64467_65873 = state_64424;
(statearr_64467_65873[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64424[(4)]))){
var statearr_64468_65874 = state_64424;
(statearr_64468_65874[(1)] = cljs.core.first((state_64424[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65876 = state_64424;
state_64424 = G__65876;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62166__auto__ = function(state_64424){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62166__auto____1.call(this,state_64424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62166__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62166__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64469 = f__62266__auto__();
(statearr_64469[(6)] = c__62265__auto__);

return statearr_64469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));

return c__62265__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64472 = arguments.length;
switch (G__64472) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__64475 = arguments.length;
switch (G__64475) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__64479 = arguments.length;
switch (G__64479) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62265__auto___65888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64508){
var state_val_64509 = (state_64508[(1)]);
if((state_val_64509 === (7))){
var inst_64503 = (state_64508[(2)]);
var state_64508__$1 = state_64508;
var statearr_64513_65889 = state_64508__$1;
(statearr_64513_65889[(2)] = inst_64503);

(statearr_64513_65889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (1))){
var inst_64482 = null;
var state_64508__$1 = (function (){var statearr_64516 = state_64508;
(statearr_64516[(7)] = inst_64482);

return statearr_64516;
})();
var statearr_64517_65890 = state_64508__$1;
(statearr_64517_65890[(2)] = null);

(statearr_64517_65890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (4))){
var inst_64485 = (state_64508[(8)]);
var inst_64485__$1 = (state_64508[(2)]);
var inst_64487 = (inst_64485__$1 == null);
var inst_64488 = cljs.core.not(inst_64487);
var state_64508__$1 = (function (){var statearr_64519 = state_64508;
(statearr_64519[(8)] = inst_64485__$1);

return statearr_64519;
})();
if(inst_64488){
var statearr_64521_65894 = state_64508__$1;
(statearr_64521_65894[(1)] = (5));

} else {
var statearr_64522_65896 = state_64508__$1;
(statearr_64522_65896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (6))){
var state_64508__$1 = state_64508;
var statearr_64525_65897 = state_64508__$1;
(statearr_64525_65897[(2)] = null);

(statearr_64525_65897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (3))){
var inst_64505 = (state_64508[(2)]);
var inst_64506 = cljs.core.async.close_BANG_(out);
var state_64508__$1 = (function (){var statearr_64529 = state_64508;
(statearr_64529[(9)] = inst_64505);

return statearr_64529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64508__$1,inst_64506);
} else {
if((state_val_64509 === (2))){
var state_64508__$1 = state_64508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64508__$1,(4),ch);
} else {
if((state_val_64509 === (11))){
var inst_64485 = (state_64508[(8)]);
var inst_64497 = (state_64508[(2)]);
var inst_64482 = inst_64485;
var state_64508__$1 = (function (){var statearr_64535 = state_64508;
(statearr_64535[(7)] = inst_64482);

(statearr_64535[(10)] = inst_64497);

return statearr_64535;
})();
var statearr_64538_65901 = state_64508__$1;
(statearr_64538_65901[(2)] = null);

(statearr_64538_65901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (9))){
var inst_64485 = (state_64508[(8)]);
var state_64508__$1 = state_64508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64508__$1,(11),out,inst_64485);
} else {
if((state_val_64509 === (5))){
var inst_64482 = (state_64508[(7)]);
var inst_64485 = (state_64508[(8)]);
var inst_64490 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64485,inst_64482);
var state_64508__$1 = state_64508;
if(inst_64490){
var statearr_64540_65909 = state_64508__$1;
(statearr_64540_65909[(1)] = (8));

} else {
var statearr_64541_65910 = state_64508__$1;
(statearr_64541_65910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (10))){
var inst_64500 = (state_64508[(2)]);
var state_64508__$1 = state_64508;
var statearr_64542_65911 = state_64508__$1;
(statearr_64542_65911[(2)] = inst_64500);

(statearr_64542_65911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64509 === (8))){
var inst_64482 = (state_64508[(7)]);
var tmp64539 = inst_64482;
var inst_64482__$1 = tmp64539;
var state_64508__$1 = (function (){var statearr_64543 = state_64508;
(statearr_64543[(7)] = inst_64482__$1);

return statearr_64543;
})();
var statearr_64545_65913 = state_64508__$1;
(statearr_64545_65913[(2)] = null);

(statearr_64545_65913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64546[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64546[(1)] = (1));

return statearr_64546;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_64508){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64508);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64548){var ex__62169__auto__ = e64548;
var statearr_64549_65914 = state_64508;
(statearr_64549_65914[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64508[(4)]))){
var statearr_64550_65917 = state_64508;
(statearr_64550_65917[(1)] = cljs.core.first((state_64508[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65921 = state_64508;
state_64508 = G__65921;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_64508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_64508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64552 = f__62266__auto__();
(statearr_64552[(6)] = c__62265__auto___65888);

return statearr_64552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64559 = arguments.length;
switch (G__64559) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62265__auto___65926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64608){
var state_val_64609 = (state_64608[(1)]);
if((state_val_64609 === (7))){
var inst_64604 = (state_64608[(2)]);
var state_64608__$1 = state_64608;
var statearr_64613_65928 = state_64608__$1;
(statearr_64613_65928[(2)] = inst_64604);

(statearr_64613_65928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (1))){
var inst_64567 = (new Array(n));
var inst_64568 = inst_64567;
var inst_64569 = (0);
var state_64608__$1 = (function (){var statearr_64615 = state_64608;
(statearr_64615[(7)] = inst_64569);

(statearr_64615[(8)] = inst_64568);

return statearr_64615;
})();
var statearr_64616_65932 = state_64608__$1;
(statearr_64616_65932[(2)] = null);

(statearr_64616_65932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (4))){
var inst_64572 = (state_64608[(9)]);
var inst_64572__$1 = (state_64608[(2)]);
var inst_64574 = (inst_64572__$1 == null);
var inst_64575 = cljs.core.not(inst_64574);
var state_64608__$1 = (function (){var statearr_64617 = state_64608;
(statearr_64617[(9)] = inst_64572__$1);

return statearr_64617;
})();
if(inst_64575){
var statearr_64618_65934 = state_64608__$1;
(statearr_64618_65934[(1)] = (5));

} else {
var statearr_64619_65935 = state_64608__$1;
(statearr_64619_65935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (15))){
var inst_64598 = (state_64608[(2)]);
var state_64608__$1 = state_64608;
var statearr_64622_65937 = state_64608__$1;
(statearr_64622_65937[(2)] = inst_64598);

(statearr_64622_65937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (13))){
var state_64608__$1 = state_64608;
var statearr_64623_65939 = state_64608__$1;
(statearr_64623_65939[(2)] = null);

(statearr_64623_65939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (6))){
var inst_64569 = (state_64608[(7)]);
var inst_64594 = (inst_64569 > (0));
var state_64608__$1 = state_64608;
if(cljs.core.truth_(inst_64594)){
var statearr_64624_65942 = state_64608__$1;
(statearr_64624_65942[(1)] = (12));

} else {
var statearr_64625_65944 = state_64608__$1;
(statearr_64625_65944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (3))){
var inst_64606 = (state_64608[(2)]);
var state_64608__$1 = state_64608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64608__$1,inst_64606);
} else {
if((state_val_64609 === (12))){
var inst_64568 = (state_64608[(8)]);
var inst_64596 = cljs.core.vec(inst_64568);
var state_64608__$1 = state_64608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64608__$1,(15),out,inst_64596);
} else {
if((state_val_64609 === (2))){
var state_64608__$1 = state_64608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64608__$1,(4),ch);
} else {
if((state_val_64609 === (11))){
var inst_64587 = (state_64608[(2)]);
var inst_64589 = (new Array(n));
var inst_64568 = inst_64589;
var inst_64569 = (0);
var state_64608__$1 = (function (){var statearr_64627 = state_64608;
(statearr_64627[(10)] = inst_64587);

(statearr_64627[(7)] = inst_64569);

(statearr_64627[(8)] = inst_64568);

return statearr_64627;
})();
var statearr_64628_65949 = state_64608__$1;
(statearr_64628_65949[(2)] = null);

(statearr_64628_65949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (9))){
var inst_64568 = (state_64608[(8)]);
var inst_64585 = cljs.core.vec(inst_64568);
var state_64608__$1 = state_64608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64608__$1,(11),out,inst_64585);
} else {
if((state_val_64609 === (5))){
var inst_64572 = (state_64608[(9)]);
var inst_64569 = (state_64608[(7)]);
var inst_64568 = (state_64608[(8)]);
var inst_64579 = (state_64608[(11)]);
var inst_64577 = (inst_64568[inst_64569] = inst_64572);
var inst_64579__$1 = (inst_64569 + (1));
var inst_64580 = (inst_64579__$1 < n);
var state_64608__$1 = (function (){var statearr_64629 = state_64608;
(statearr_64629[(12)] = inst_64577);

(statearr_64629[(11)] = inst_64579__$1);

return statearr_64629;
})();
if(cljs.core.truth_(inst_64580)){
var statearr_64630_65954 = state_64608__$1;
(statearr_64630_65954[(1)] = (8));

} else {
var statearr_64631_65955 = state_64608__$1;
(statearr_64631_65955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (14))){
var inst_64601 = (state_64608[(2)]);
var inst_64602 = cljs.core.async.close_BANG_(out);
var state_64608__$1 = (function (){var statearr_64634 = state_64608;
(statearr_64634[(13)] = inst_64601);

return statearr_64634;
})();
var statearr_64636_65956 = state_64608__$1;
(statearr_64636_65956[(2)] = inst_64602);

(statearr_64636_65956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (10))){
var inst_64592 = (state_64608[(2)]);
var state_64608__$1 = state_64608;
var statearr_64637_65957 = state_64608__$1;
(statearr_64637_65957[(2)] = inst_64592);

(statearr_64637_65957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64609 === (8))){
var inst_64568 = (state_64608[(8)]);
var inst_64579 = (state_64608[(11)]);
var tmp64632 = inst_64568;
var inst_64568__$1 = tmp64632;
var inst_64569 = inst_64579;
var state_64608__$1 = (function (){var statearr_64639 = state_64608;
(statearr_64639[(7)] = inst_64569);

(statearr_64639[(8)] = inst_64568__$1);

return statearr_64639;
})();
var statearr_64642_65960 = state_64608__$1;
(statearr_64642_65960[(2)] = null);

(statearr_64642_65960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64643[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64643[(1)] = (1));

return statearr_64643;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_64608){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64608);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64644){var ex__62169__auto__ = e64644;
var statearr_64645_65965 = state_64608;
(statearr_64645_65965[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64608[(4)]))){
var statearr_64647_65967 = state_64608;
(statearr_64647_65967[(1)] = cljs.core.first((state_64608[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65969 = state_64608;
state_64608 = G__65969;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_64608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_64608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64648 = f__62266__auto__();
(statearr_64648[(6)] = c__62265__auto___65926);

return statearr_64648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64650 = arguments.length;
switch (G__64650) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62265__auto___65974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62266__auto__ = (function (){var switch__62165__auto__ = (function (state_64697){
var state_val_64698 = (state_64697[(1)]);
if((state_val_64698 === (7))){
var inst_64693 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
var statearr_64699_65976 = state_64697__$1;
(statearr_64699_65976[(2)] = inst_64693);

(statearr_64699_65976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (1))){
var inst_64651 = [];
var inst_64652 = inst_64651;
var inst_64653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64697__$1 = (function (){var statearr_64700 = state_64697;
(statearr_64700[(7)] = inst_64652);

(statearr_64700[(8)] = inst_64653);

return statearr_64700;
})();
var statearr_64701_65978 = state_64697__$1;
(statearr_64701_65978[(2)] = null);

(statearr_64701_65978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (4))){
var inst_64656 = (state_64697[(9)]);
var inst_64656__$1 = (state_64697[(2)]);
var inst_64657 = (inst_64656__$1 == null);
var inst_64658 = cljs.core.not(inst_64657);
var state_64697__$1 = (function (){var statearr_64702 = state_64697;
(statearr_64702[(9)] = inst_64656__$1);

return statearr_64702;
})();
if(inst_64658){
var statearr_64703_65979 = state_64697__$1;
(statearr_64703_65979[(1)] = (5));

} else {
var statearr_64705_65980 = state_64697__$1;
(statearr_64705_65980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (15))){
var inst_64687 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
var statearr_64706_65981 = state_64697__$1;
(statearr_64706_65981[(2)] = inst_64687);

(statearr_64706_65981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (13))){
var state_64697__$1 = state_64697;
var statearr_64707_65985 = state_64697__$1;
(statearr_64707_65985[(2)] = null);

(statearr_64707_65985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (6))){
var inst_64652 = (state_64697[(7)]);
var inst_64682 = inst_64652.length;
var inst_64683 = (inst_64682 > (0));
var state_64697__$1 = state_64697;
if(cljs.core.truth_(inst_64683)){
var statearr_64708_65988 = state_64697__$1;
(statearr_64708_65988[(1)] = (12));

} else {
var statearr_64710_65989 = state_64697__$1;
(statearr_64710_65989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (3))){
var inst_64695 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64697__$1,inst_64695);
} else {
if((state_val_64698 === (12))){
var inst_64652 = (state_64697[(7)]);
var inst_64685 = cljs.core.vec(inst_64652);
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64697__$1,(15),out,inst_64685);
} else {
if((state_val_64698 === (2))){
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64697__$1,(4),ch);
} else {
if((state_val_64698 === (11))){
var inst_64656 = (state_64697[(9)]);
var inst_64660 = (state_64697[(10)]);
var inst_64673 = (state_64697[(2)]);
var inst_64676 = [];
var inst_64677 = inst_64676.push(inst_64656);
var inst_64652 = inst_64676;
var inst_64653 = inst_64660;
var state_64697__$1 = (function (){var statearr_64712 = state_64697;
(statearr_64712[(7)] = inst_64652);

(statearr_64712[(11)] = inst_64673);

(statearr_64712[(12)] = inst_64677);

(statearr_64712[(8)] = inst_64653);

return statearr_64712;
})();
var statearr_64713_65992 = state_64697__$1;
(statearr_64713_65992[(2)] = null);

(statearr_64713_65992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (9))){
var inst_64652 = (state_64697[(7)]);
var inst_64669 = cljs.core.vec(inst_64652);
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64697__$1,(11),out,inst_64669);
} else {
if((state_val_64698 === (5))){
var inst_64656 = (state_64697[(9)]);
var inst_64660 = (state_64697[(10)]);
var inst_64653 = (state_64697[(8)]);
var inst_64660__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64656) : f.call(null,inst_64656));
var inst_64662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64660__$1,inst_64653);
var inst_64663 = cljs.core.keyword_identical_QMARK_(inst_64653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64664 = ((inst_64662) || (inst_64663));
var state_64697__$1 = (function (){var statearr_64714 = state_64697;
(statearr_64714[(10)] = inst_64660__$1);

return statearr_64714;
})();
if(cljs.core.truth_(inst_64664)){
var statearr_64715_65997 = state_64697__$1;
(statearr_64715_65997[(1)] = (8));

} else {
var statearr_64716_65998 = state_64697__$1;
(statearr_64716_65998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (14))){
var inst_64690 = (state_64697[(2)]);
var inst_64691 = cljs.core.async.close_BANG_(out);
var state_64697__$1 = (function (){var statearr_64721 = state_64697;
(statearr_64721[(13)] = inst_64690);

return statearr_64721;
})();
var statearr_64722_66001 = state_64697__$1;
(statearr_64722_66001[(2)] = inst_64691);

(statearr_64722_66001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (10))){
var inst_64680 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
var statearr_64723_66005 = state_64697__$1;
(statearr_64723_66005[(2)] = inst_64680);

(statearr_64723_66005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (8))){
var inst_64656 = (state_64697[(9)]);
var inst_64652 = (state_64697[(7)]);
var inst_64660 = (state_64697[(10)]);
var inst_64666 = inst_64652.push(inst_64656);
var tmp64717 = inst_64652;
var inst_64652__$1 = tmp64717;
var inst_64653 = inst_64660;
var state_64697__$1 = (function (){var statearr_64724 = state_64697;
(statearr_64724[(7)] = inst_64652__$1);

(statearr_64724[(8)] = inst_64653);

(statearr_64724[(14)] = inst_64666);

return statearr_64724;
})();
var statearr_64725_66009 = state_64697__$1;
(statearr_64725_66009[(2)] = null);

(statearr_64725_66009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62166__auto__ = null;
var cljs$core$async$state_machine__62166__auto____0 = (function (){
var statearr_64726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64726[(0)] = cljs$core$async$state_machine__62166__auto__);

(statearr_64726[(1)] = (1));

return statearr_64726;
});
var cljs$core$async$state_machine__62166__auto____1 = (function (state_64697){
while(true){
var ret_value__62167__auto__ = (function (){try{while(true){
var result__62168__auto__ = switch__62165__auto__(state_64697);
if(cljs.core.keyword_identical_QMARK_(result__62168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62168__auto__;
}
break;
}
}catch (e64730){var ex__62169__auto__ = e64730;
var statearr_64731_66012 = state_64697;
(statearr_64731_66012[(2)] = ex__62169__auto__);


if(cljs.core.seq((state_64697[(4)]))){
var statearr_64732_66014 = state_64697;
(statearr_64732_66014[(1)] = cljs.core.first((state_64697[(4)])));

} else {
throw ex__62169__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66015 = state_64697;
state_64697 = G__66015;
continue;
} else {
return ret_value__62167__auto__;
}
break;
}
});
cljs$core$async$state_machine__62166__auto__ = function(state_64697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62166__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62166__auto____1.call(this,state_64697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62166__auto____0;
cljs$core$async$state_machine__62166__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62166__auto____1;
return cljs$core$async$state_machine__62166__auto__;
})()
})();
var state__62267__auto__ = (function (){var statearr_64733 = f__62266__auto__();
(statearr_64733[(6)] = c__62265__auto___65974);

return statearr_64733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62267__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
