goog.provide('zprint.comment');
/**
 * Produce a blank string of desired size.
 */
zprint.comment.blanks = (function zprint$comment$blanks(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "));
});
/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.comment.split_lf = (function zprint$comment$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(input)){
return out;
} else {
var next_lf = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),next_lf):input);
var G__47117 = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(next_lf + (1))):null);
var G__47118 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,chunk);
input = G__47117;
out = G__47118;
continue;
}
break;
}
});
/**
 * Given a tag into which you can go down from rewrite-clj, which must be
 *   a collection of some kind, return the size the l-str.  All of the tag
 *   values into which you can go down must be in this list for indent-before
 *   to work correctly.  It uses these values when it steps up out of one of
 *   these things to see how big the thing would have been if it showed up
 *   as characters.
 */
zprint.comment.tag_l_size = (function zprint$comment$tag_l_size(t){
var G__46807 = t;
var G__46807__$1 = (((G__46807 instanceof cljs.core.Keyword))?G__46807.fqn:null);
switch (G__46807__$1) {
case "list":
return (1);

break;
case "vector":
return (1);

break;
case "set":
return (2);

break;
case "map":
return (1);

break;
case "uneval":
return (2);

break;
case "reader-macro":
return (1);

break;
case "meta":
return (1);

break;
case "quote":
return (1);

break;
case "syntax-quote":
return (1);

break;
case "fn":
return (2);

break;
case "unquote":
return (1);

break;
case "deref":
return (1);

break;
case "namespaced-map":
return (1);

break;
default:
return (0);

}
});
/**
 * Take a zloc and move left if possible, or move up if necessary.
 *   Return a vector with [up-size new-zloc]
 */
zprint.comment.left_or_up = (function zprint$comment$left_or_up(zloc){
var ploc = zloc;
var total_up = (0);
while(true){
var next_left = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zutil.left_STAR_.call(null,ploc));
if(cljs.core.truth_(next_left)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,next_left], null);
} else {
var moving_up = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zutil.up_STAR_.call(null,ploc));
var up_tag = (cljs.core.truth_(moving_up)?(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(moving_up) : zprint.zutil.tag.call(null,moving_up)):null);
var up_size = zprint.comment.tag_l_size(up_tag);
if(cljs.core.not(moving_up)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,null], null);
} else {
var G__47124 = moving_up;
var G__47125 = (total_up + up_size);
ploc = G__47124;
total_up = G__47125;
continue;
}
}
break;
}
});
/**
 * Given a string, return the number of characters to the right
 *   of any newlines in the string.  Will return nil if no newlines
 *   in the string.
 */
zprint.comment.length_after_newline = (function zprint$comment$length_after_newline(s){
var nl_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count(nl_split) - (1));
if((nl_num === (0))){
return null;
} else {
return (cljs.core.count(cljs.core.last(nl_split)) - (1));
}
});
/**
 * Given a zloc, find the amount of printing space before it on its
 *   current line.
 */
zprint.comment.length_before = (function zprint$comment$length_before(zloc){
var vec__46833 = zprint.comment.left_or_up(zloc);
var up_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46833,(0),null);
var next_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46833,(1),null);
var ploc = next_zloc;
var indent_before = up_size;
while(true){
if(cljs.core.not(ploc)){
return indent_before;
} else {
var zstr = (cljs.core.truth_(ploc)?(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zfns.zstring.call(null,ploc)):"");
var length_right_of_newline = zprint.comment.length_after_newline(zstr);
var vec__46845 = zprint.comment.left_or_up(ploc);
var up_size__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46845,(0),null);
var next_zloc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46845,(1),null);
if(cljs.core.truth_(length_right_of_newline)){
return (length_right_of_newline + indent_before);
} else {
var G__47134 = next_zloc__$1;
var G__47135 = ((indent_before + cljs.core.count(zstr)) + up_size__$1);
ploc = G__47134;
indent_before = G__47135;
continue;
}
}
break;
}
});
/**
 * If this is an inline comment, returns a vector with the amount
 *   of space that was between this and the previous element and the
 *   starting column of this inline comment.  That means that if we
 *   go left, we get something other than whitespace before a newline.
 *   If we get only whitespace before a newline, then this is considered
 *   an inline comment if the comment at the end of the previous line
 *   was an inline comment and we were aligned with that comment.
 *   Assumes zloc is a comment.
 */
zprint.comment.inlinecomment_QMARK_ = (function zprint$comment$inlinecomment_QMARK_(zloc){
var nloc = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
var spaces = (0);
var passed_nl_QMARK_ = false;
while(true){
var vec__46878 = (function (){var tnloc = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zfns.ztag.call(null,nloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var nstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zfns.zstring.call(null,nloc));
var trim_nstr = clojure.string.trimr(nstr);
if((((trim_nstr).length) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),(spaces + (cljs.core.count(nstr) - ((trim_nstr).length)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),spaces], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tnloc,spaces], null);
}
})();
var tnloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46878,(0),null);
var spaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46878,(1),null);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__47154 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__47155 = spaces__$1;
var G__47156 = true;
nloc = G__47154;
spaces = G__47155;
passed_nl_QMARK_ = G__47156;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
if(cljs.core.truth_((zprint.comment.inlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.comment.inlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.comment.inlinecomment_QMARK_.call(null,nloc)))){
var nloc_length_before = zprint.comment.length_before(nloc);
var zloc_length_before = zprint.comment.length_before(zloc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nloc_length_before,zloc_length_before)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zloc_length_before], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
if(cljs.core.truth_(passed_nl_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zprint.comment.length_before(zloc)], null);
}
} else {
var G__47157 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__47158 = ((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) + spaces__$1);
var G__47159 = passed_nl_QMARK_;
nloc = G__47157;
spaces = G__47158;
passed_nl_QMARK_ = G__47159;
continue;

}
}
}
}
break;
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.comment.last_space = (function zprint$comment$last_space(s,from_index){
var from_index__$1 = (function (){var x__4217__auto__ = (cljs.core.count(s) - (1));
var y__4218__auto__ = from_index;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var rev_seq = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2((from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__46888_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__46888_SHARP_," ");
}),rev_seq);
var space_index = (from_index__$1 - cljs.core.count(seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.comment.next_space = (function zprint$comment$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count(s))){
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__46890_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__46890_SHARP_," ");
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(from_index__$1,cljs.core.seq(s)));
var space_index = (from_index__$1 + cljs.core.count(seq_after_space));
if((space_index >= cljs.core.count(s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.comment.wrap_comment = (function zprint$comment$wrap_comment(width,p__46905,start){
var vec__46906 = p__46905;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(1),null);
var stype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(2),null);
var element = vec__46906;
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))))){
return element;
} else {
var comment_width = (width - start);
var semi_str = cljs.core.re_find(/;*/,s);
var rest_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(semi_str));
var space_str = cljs.core.re_find(/ */,rest_str);
var rest_str__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest_str,cljs.core.count(space_str));
var newline_QMARK_ = cljs.core.re_find(/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count(semi_str)) - cljs.core.count(space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(comment_str)){
if((cljs.core.count(out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(38)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_((cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(39)], null)):out));
}
} else {
var last_space_index = (((((comment_str).length) <= comment_width__$1))?(((comment_str).length) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__4126__auto__ = zprint.comment.next_space(comment_str,(0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (((comment_str).length) - (1));
}
})():(function (){var or__4126__auto__ = zprint.comment.last_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = zprint.comment.next_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (((comment_str).length) - (1));
}
}
})()));
var next_comment = clojure.string.trimr(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(comment_str,(0),(last_space_index + (1))));
var G__47184 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(comment_str,(last_space_index + (1)));
var G__47185 = (((cljs.core.count(out) === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,stype], null)):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(start))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(40)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)], null)));
comment_str = G__47184;
out = G__47185;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.comment.loc_vec = (function zprint$comment$loc_vec(start,p__46910){
var vec__46911 = p__46910;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46911,(0),null);
var split = zprint.comment.split_lf(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(split),(1))){
return (start + cljs.core.count(s));
} else {
return cljs.core.count(cljs.core.last(split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec. Accepts a beginning indent.
 */
zprint.comment.style_loc_vec = (function zprint$comment$style_loc_vec(indent,style_vec){
return cljs.core.butlast(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(zprint.comment.loc_vec,indent,style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.comment.lift_vec = (function zprint$comment$lift_vec(out_vec,element){
if(typeof cljs.core.first(element) === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not(element_vec)){
return out;
} else {
var G__47194 = cljs.core.next(element_vec);
var G__47195 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(element_vec));
element_vec = G__47194;
out = G__47195;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.comment.lift_style_vec = (function zprint$comment$lift_style_vec(style_vec){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.comment.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.comment.fzprint_wrap_comments = (function zprint$comment$fzprint_wrap_comments(p__46918,style_vec){
var map__46919 = p__46918;
var map__46919__$1 = (((((!((map__46919 == null))))?(((((map__46919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46919):map__46919);
var options = map__46919__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46919__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options)], 0));
} else {
}

var start_col = zprint.comment.style_loc_vec((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),style_vec);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0))], 0)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col], 0)):null);
var wrap_style_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.wrap_comment,width),style_vec,start_col);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrap:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0))], 0)):null);
var out_style_vec = zprint.comment.lift_style_vec(wrap_style_vec);
return out_style_vec;
});
/**
 * Find a the first element of this type working from the end of a 
 *   style-vec.  Return the index of the element.
 */
zprint.comment.find_element_from_end = (function zprint$comment$find_element_from_end(element_pred_QMARK_,style_vec){
var index = (cljs.core.count(style_vec) - (1));
while(true){
if((index < (0))){
return null;
} else {
var vec__46940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,index);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46940,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46940,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46940,(2),null);
if(cljs.core.truth_((element_pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? element_pred_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : element_pred_QMARK_.call(null,e)))){
return index;
} else {
var G__47204 = (index - (1));
index = G__47204;
continue;
}
}
break;
}
});
/**
 * Given a style-vec, how big is it in actual characters.  This doesn't
 *   handle newlines.
 */
zprint.comment.line_size = (function zprint$comment$line_size(style_vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.loc_vec,(0)),style_vec));
});
/**
 * Given a style-vec, whose last element in a comment, find the amount
 *   of space before that comment on the line.
 */
zprint.comment.space_before_comment = (function zprint$comment$space_before_comment(style_vec){
var indent_index = zprint.comment.find_element_from_end((function (p1__46950_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__46950_SHARP_,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__46950_SHARP_,new cljs.core.Keyword(null,"newline","newline",1790071323))));
}),style_vec);
var this_line_vec = (cljs.core.truth_(indent_index)?cljs.core.nthnext(style_vec,indent_index):style_vec);
return zprint.comment.line_size(cljs.core.butlast(this_line_vec));
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.comment.fzprint_inline_comments = (function zprint$comment$fzprint_inline_comments(p__46955,style_vec){
var map__46956 = p__46955;
var map__46956__$1 = (((((!((map__46956 == null))))?(((((map__46956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46956):map__46956);
var options = map__46956__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46956__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-inline-comments:",style_vec], 0))], 0));
} else {
}

var cvec = style_vec;
var last_out = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",null,null], null);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
return out;
} else {
var vec__46977 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46977,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46977,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46977,(2),null);
var element = vec__46977;
var vec__46980 = cljs.core.second(cvec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46980,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46980,(1),null);
var ne = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46980,(2),null);
var nn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46980,(3),null);
var next_element = vec__46980;
var vec__46983 = last_out;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46983,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46983,(1),null);
var le = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46983,(2),null);
var new_element = ((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"newline","newline",1790071323))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ne,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?(((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(le,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(le,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(nn),c,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(25)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(zprint.comment.space_before_comment(out)))].join(''),c,new cljs.core.Keyword(null,"indent","indent",-148200125),(41)], null)):element
);
var G__47213 = cljs.core.next(cvec);
var G__47214 = new_element;
var G__47215 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_element);
cvec = G__47213;
last_out = G__47214;
out = G__47215;
continue;
}
break;
}
});
zprint.comment.max_aligned_inline_comment_distance = (5);
/**
 * Given a style-vec, find previously aligned inline comments and
 *   output the as a sequence of vectors of comments. The previously
 *   aligned comments do not have to be consecutive, but they can't
 *   be separated by more than max-aligned-inline-comment-distance.
 *   Each comment itself is a vector: [indent-index inline-comment-index],
 *   yielding a [[[indent-index inline-comment-index] [indent-index
 *   inline-comment-index] ...] ...].  The indexes are into the
 *   style-vec.
 */
zprint.comment.find_aligned_inline_comments = (function zprint$comment$find_aligned_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var current_column = (0);
var distance = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
var out__$1 = (((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
return out__$1;
} else {
var vec__47024 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(2),null);
var spaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(3),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(4),null);
var element = vec__47024;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_column,current_column)){
var G__47217 = cljs.core.next(cvec);
var G__47218 = (index + (1));
var G__47219 = null;
var G__47220 = (cljs.core.truth_(last_indent)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function (){
throw (new Error(["find-aligned-inline-comments a:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__47221 = current_column;
var G__47222 = (0);
var G__47223 = out;
cvec = G__47217;
index = G__47218;
last_indent = G__47219;
current_seq = G__47220;
current_column = G__47221;
distance = G__47222;
out = G__47223;
continue;
} else {
var G__47224 = cljs.core.next(cvec);
var G__47225 = (index + (1));
var G__47226 = null;
var G__47227 = (cljs.core.truth_(last_indent)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)], null):(function (){
throw (new Error(["find-aligned-inline-comments b:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__47228 = start_column;
var G__47229 = (0);
var G__47230 = (((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
cvec = G__47224;
index = G__47225;
last_indent = G__47226;
current_seq = G__47227;
current_column = G__47228;
distance = G__47229;
out = G__47230;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
if((distance >= zprint.comment.max_aligned_inline_comment_distance)){
var G__47231 = cljs.core.next(cvec);
var G__47232 = (index + (1));
var G__47233 = index;
var G__47234 = cljs.core.PersistentVector.EMPTY;
var G__47235 = (0);
var G__47236 = (0);
var G__47237 = (((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
cvec = G__47231;
index = G__47232;
last_indent = G__47233;
current_seq = G__47234;
current_column = G__47235;
distance = G__47236;
out = G__47237;
continue;
} else {
var G__47238 = cljs.core.next(cvec);
var G__47239 = (index + (1));
var G__47240 = index;
var G__47241 = current_seq;
var G__47242 = current_column;
var G__47243 = (distance + (1));
var G__47244 = out;
cvec = G__47238;
index = G__47239;
last_indent = G__47240;
current_seq = G__47241;
current_column = G__47242;
distance = G__47243;
out = G__47244;
continue;
}
} else {
var G__47245 = cljs.core.next(cvec);
var G__47246 = (index + (1));
var G__47247 = last_indent;
var G__47248 = current_seq;
var G__47249 = current_column;
var G__47250 = distance;
var G__47251 = out;
cvec = G__47245;
index = G__47246;
last_indent = G__47247;
current_seq = G__47248;
current_column = G__47249;
distance = G__47250;
out = G__47251;
continue;

}
}
}
break;
}
});
/**
 * Given a style-vec, find consecutive inline comments and output
 *   the as a sequence of vectors of comments.  Each comment itself
 *   is a vector: [indent-index inline-comment-index], yielding a
 *   [[[indent-index inline-comment-index] [indent-index inline-comment-index]
 *   ...] ...]
 */
zprint.comment.find_consecutive_inline_comments = (function zprint$comment$find_consecutive_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
return out;
} else {
var vec__47041 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47041,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47041,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47041,(2),null);
var element = vec__47041;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
var G__47254 = cljs.core.next(cvec);
var G__47255 = (index + (1));
var G__47256 = null;
var G__47257 = (cljs.core.truth_(last_indent)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function (){
throw (new Error(["find-consecutive-inline-comments:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__47258 = out;
cvec = G__47254;
index = G__47255;
last_indent = G__47256;
current_seq = G__47257;
out = G__47258;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
var G__47259 = cljs.core.next(cvec);
var G__47260 = (index + (1));
var G__47261 = index;
var G__47262 = (cljs.core.truth_(last_indent)?cljs.core.PersistentVector.EMPTY:current_seq);
var G__47263 = (cljs.core.truth_(last_indent)?(((cljs.core.count(current_seq) > (1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out):out);
cvec = G__47259;
index = G__47260;
last_indent = G__47261;
current_seq = G__47262;
out = G__47263;
continue;
} else {
var G__47264 = cljs.core.next(cvec);
var G__47265 = (index + (1));
var G__47266 = last_indent;
var G__47267 = current_seq;
var G__47268 = out;
cvec = G__47264;
index = G__47265;
last_indent = G__47266;
current_seq = G__47267;
out = G__47268;
continue;

}
}
}
break;
}
});
/**
 * Takes a single vector of [indent-index comment-index] and will show the
 *   column on the line in which the comment starts.
 */
zprint.comment.comment_column = (function zprint$comment$comment_column(p__47053,style_vec){
var vec__47054 = p__47053;
var indent_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054,(0),null);
var comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054,(1),null);
if(cljs.core.vector_QMARK_(style_vec)){
} else {
throw (new Error(["comment-column: style-vec not a vector!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_vec)].join('')));
}

var index = indent_index;
var column = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,comment_index)){
return column;
} else {
var G__47271 = (index + (1));
var G__47272 = zprint.comment.loc_vec(column,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,index));
index = G__47271;
column = G__47272;
continue;
}
break;
}
});
/**
 * Take a single inline comment vector:
 *   [indent-index inline-comment-index] 
 *   and replace it with [inline-comment-index start-column spaces-before].
 */
zprint.comment.comment_vec_column = (function zprint$comment$comment_vec_column(style_vec,p__47067){
var vec__47068 = p__47067;
var indent_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47068,(0),null);
var inline_comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47068,(1),null);
var comment_vec = vec__47068;
var start_column = zprint.comment.comment_column(comment_vec,style_vec);
var spaces_before = zprint.comment.loc_vec((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,(inline_comment_index - (1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_comment_index,start_column,spaces_before], null);
});
/**
 * Take a single vector of inline comments
 *   [[indent-index inline-comment-index] [indent-index inline-comment-index]
 * ...] and replace it with [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...]
 */
zprint.comment.comment_vec_seq_column = (function zprint$comment$comment_vec_seq_column(style_vec,comment_vec_seq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.comment_vec_column,style_vec),comment_vec_seq);
});
/**
 * Take a seq of all of the comments as produced by 
 *   find-consecutive-inline-comments, and turn it into:
 *   [[[inline-comment-index start-column spaces-before] [inline-comment-index
 *   start-column spaces-before]
 *   ...] ...]
 */
zprint.comment.comment_vec_all_column = (function zprint$comment$comment_vec_all_column(style_vec,comment_vec_all){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.comment_vec_seq_column,style_vec),comment_vec_all);
});
/**
 * Given a set of inline comments:
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], determine
 * the minimum column at which they could be aligned.
 */
zprint.comment.minimum_column = (function zprint$comment$minimum_column(comment_vec){
var minimum_vec = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47084_SHARP_){
return ((cljs.core.second(p1__47084_SHARP_) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__47084_SHARP_,(2))) + (1));
}),comment_vec);
var minimum_col = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,minimum_vec);
return minimum_col;
});
/**
 * Given a new start-column, and a vector 
 *   [[inline-comment-index start-column spaces-before]
 *   and a style-vec, return a new style-vec with the inline-comment starting
 *   at a new column.
 */
zprint.comment.change_start_column = (function zprint$comment$change_start_column(new_start_column,style_vec,p__47097){
var vec__47098 = p__47097;
var inline_comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47098,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47098,(1),null);
var spaces_before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47098,(2),null);
var comment_vec = vec__47098;
var delta_spaces = (new_start_column - start_column);
var new_spaces = (spaces_before + delta_spaces);
var previous_element_index = (inline_comment_index - (1));
var vec__47101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,previous_element_index);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47101,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47101,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47101,(2),null);
var previous_element = vec__47101;
var new_previous_element = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(new_spaces))].join(''),c,e], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(new_spaces)),c,e,(26)], null):(function(){throw (new Error(["change-start-column: comment preceded by neither"," an :indent nor :whitespace!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')))})()
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(style_vec,previous_element_index,new_previous_element);
});
/**
 * Given one set of inline comments: 
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], align them 
 * as best as possible, and return the modified style-vec.
 */
zprint.comment.align_comment_vec = (function zprint$comment$align_comment_vec(style_vec,comment_vec){
var minimum_col = zprint.comment.minimum_column(comment_vec);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.change_start_column,minimum_col),style_vec,comment_vec);
});
/**
 * Given the current style-vec, align all consecutive inline comments.
 */
zprint.comment.fzprint_align_inline_comments = (function zprint$comment$fzprint_align_inline_comments(options,style_vec){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-align-inline-comments: style-vec:",style_vec], 0))], 0));
} else {
}

var style = new cljs.core.Keyword(null,"inline-align-style","inline-align-style",1548722575).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"none","none",1333468478))){
return style_vec;
} else {
var comment_vec = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"aligned","aligned",-1015148916)))?zprint.comment.find_aligned_inline_comments(style_vec):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"consecutive","consecutive",-1628234596)))?zprint.comment.find_consecutive_inline_comments(style_vec):null));
var comment_vec_column = zprint.comment.comment_vec_all_column(style_vec,comment_vec);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.comment.align_comment_vec,style_vec,comment_vec_column);
}
});

//# sourceMappingURL=zprint.comment.js.map
