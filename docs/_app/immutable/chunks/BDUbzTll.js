import {
	b as B,
	h as S,
	K as L,
	E as N,
	O as Y,
	P as M,
	M as j,
	Q as w,
	f as K,
	S as z,
	U as G,
	V as H,
	j as U,
	W as Q,
	X as E,
	Y as R,
	Z as V,
	_ as q,
	n as P,
	$ as W,
	a0 as X,
	a1 as J,
	F as I,
	a2 as k,
	a3 as rr,
	v as er,
	a4 as nr,
	a5 as sr,
	q as ir,
	a6 as ar,
	a7 as tr,
	a8 as fr,
	a9 as A,
	aa as y,
	ab as v,
	ac as F
} from './CCxZTBg-.js';
import { B as $ } from './DRMZ3B1H.js';
function _r(r, e, s = !1) {
	var n;
	S && ((n = K), L());
	var i = new $(r),
		a = s ? N : 0;
	function o(t, l) {
		if (S) {
			var c = Y(n);
			if (t !== parseInt(c.substring(1))) {
				var u = M();
				j(u), (i.anchor = u), w(!1), i.ensure(t, l), w(!0);
				return;
			}
		}
		i.ensure(t, l);
	}
	B(() => {
		var t = !1;
		e((l, c = 0) => {
			(t = !0), o(c, l);
		}),
			t || o(-1, null);
	}, a);
}
function vr(r, e, s) {
	var n;
	S && ((n = K), L());
	var i = new $(r);
	B(() => {
		var a = e() ?? null;
		if (S) {
			var o = Y(n),
				t = o === z,
				l = a !== null;
			if (t !== l) {
				var c = M();
				j(c), (i.anchor = c), w(!1), i.ensure(a, a && ((u) => s(u, a))), w(!0);
				return;
			}
		}
		i.ensure(a, a && ((u) => s(u, a)));
	}, N);
}
function D(r, e) {
	return r === e || (r == null ? void 0 : r[E]) === e;
}
function hr(r = {}, e, s, n) {
	return (
		G(() => {
			var i, a;
			return (
				H(() => {
					(i = a),
						(a = []),
						U(() => {
							r !== s(...a) && (e(r, ...a), i && D(s(...i), r) && e(null, ...i));
						});
				}),
				() => {
					Q(() => {
						a && D(s(...a), r) && e(null, ...a);
					});
				}
			);
		}),
		r
	);
}
let b = !1;
function ur(r) {
	var e = b;
	try {
		return (b = !1), [r(), b];
	} finally {
		b = e;
	}
}
const lr = {
	get(r, e) {
		if (!r.exclude.includes(e)) return P(r.version), e in r.special ? r.special[e]() : r.props[e];
	},
	set(r, e, s) {
		if (!(e in r.special)) {
			var n = I;
			try {
				y(r.parent_effect),
					(r.special[e] = or(
						{
							get [e]() {
								return r.props[e];
							}
						},
						e,
						q
					));
			} finally {
				y(n);
			}
		}
		return r.special[e](s), A(r.version), !0;
	},
	getOwnPropertyDescriptor(r, e) {
		if (!r.exclude.includes(e) && e in r.props)
			return { enumerable: !0, configurable: !0, value: r.props[e] };
	},
	deleteProperty(r, e) {
		return r.exclude.includes(e) || (r.exclude.push(e), A(r.version)), !0;
	},
	has(r, e) {
		return r.exclude.includes(e) ? !1 : e in r.props;
	},
	ownKeys(r) {
		return Reflect.ownKeys(r.props).filter((e) => !r.exclude.includes(e));
	}
};
function br(r, e) {
	return new Proxy({ props: r, exclude: e, special: {}, version: fr(0), parent_effect: I }, lr);
}
const cr = {
	get(r, e) {
		let s = r.props.length;
		for (; s--; ) {
			let n = r.props[s];
			if ((v(n) && (n = n()), typeof n == 'object' && n !== null && e in n)) return n[e];
		}
	},
	set(r, e, s) {
		let n = r.props.length;
		for (; n--; ) {
			let i = r.props[n];
			v(i) && (i = i());
			const a = R(i, e);
			if (a && a.set) return a.set(s), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(r, e) {
		let s = r.props.length;
		for (; s--; ) {
			let n = r.props[s];
			if ((v(n) && (n = n()), typeof n == 'object' && n !== null && e in n)) {
				const i = R(n, e);
				return i && !i.configurable && (i.configurable = !0), i;
			}
		}
	},
	has(r, e) {
		if (e === E || e === F) return !1;
		for (let s of r.props) if ((v(s) && (s = s()), s != null && e in s)) return !0;
		return !1;
	},
	ownKeys(r) {
		const e = [];
		for (let s of r.props)
			if ((v(s) && (s = s()), !!s)) {
				for (const n in s) e.includes(n) || e.push(n);
				for (const n of Object.getOwnPropertySymbols(s)) e.includes(n) || e.push(n);
			}
		return e;
	}
};
function Pr(...r) {
	return new Proxy({ props: r }, cr);
}
function or(r, e, s, n) {
	var g;
	var i = !er || (s & nr) !== 0,
		a = (s & rr) !== 0,
		o = (s & tr) !== 0,
		t = n,
		l = !0,
		c = () => (l && ((l = !1), (t = o ? U(n) : n)), t),
		u;
	if (a) {
		var m = E in r || F in r;
		u = ((g = R(r, e)) == null ? void 0 : g.set) ?? (m && e in r ? (f) => (r[e] = f) : void 0);
	}
	var p,
		T = !1;
	a ? ([p, T] = ur(() => r[e])) : (p = r[e]),
		p === void 0 && n !== void 0 && ((p = c()), u && (i && V(), u(p)));
	var d;
	if (
		(i
			? (d = () => {
					var f = r[e];
					return f === void 0 ? c() : ((l = !0), f);
				})
			: (d = () => {
					var f = r[e];
					return f !== void 0 && (t = void 0), f === void 0 ? t : f;
				}),
		i && (s & q) === 0)
	)
		return d;
	if (u) {
		var C = r.$$legacy;
		return function (f, h) {
			return arguments.length > 0 ? ((!i || !h || C || T) && u(h ? d() : f), f) : d();
		};
	}
	var O = !1,
		_ = ((s & sr) !== 0 ? ir : ar)(() => ((O = !1), d()));
	a && P(_);
	var Z = I;
	return function (f, h) {
		if (arguments.length > 0) {
			const x = h ? P(_) : i && a ? W(f) : f;
			return X(_, x), (O = !0), t !== void 0 && (t = x), f;
		}
		return (J && O) || (Z.f & k) !== 0 ? _.v : P(_);
	};
}
export { hr as b, vr as c, _r as i, br as l, or as p, Pr as s };
