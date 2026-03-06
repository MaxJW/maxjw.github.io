var on = Object.defineProperty;
var yt = (e) => {
	throw TypeError(e);
};
var un = (e, t, n) =>
	t in e ? on(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var re = (e, t, n) => un(e, typeof t != 'symbol' ? t + '' : t, n),
	Xe = (e, t, n) => t.has(e) || yt('Cannot ' + n);
var _ = (e, t, n) => (Xe(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	M = (e, t, n) =>
		t.has(e)
			? yt('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	K = (e, t, n, r) => (Xe(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	B = (e, t, n) => (Xe(e, t, 'access private method'), n);
var cn = Array.isArray,
	_n = Array.prototype.indexOf,
	Te = Array.prototype.includes,
	fr = Array.from,
	ir = Object.defineProperty,
	De = Object.getOwnPropertyDescriptor,
	vn = Object.getOwnPropertyDescriptors,
	dn = Object.prototype,
	pn = Array.prototype,
	Ot = Object.getPrototypeOf,
	Et = Object.isExtensible;
function ar(e) {
	return typeof e == 'function';
}
const hn = () => {};
function lr(e) {
	return e();
}
function wn(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function kt() {
	var e,
		t,
		n = new Promise((r, s) => {
			(e = r), (t = s);
		});
	return { promise: n, resolve: e, reject: t };
}
function or(e, t) {
	if (Array.isArray(e)) return e;
	if (!(Symbol.iterator in e)) return Array.from(e);
	const n = [];
	for (const r of e) if ((n.push(r), n.length === t)) break;
	return n;
}
const A = 2,
	Oe = 4,
	ce = 8,
	Ue = 1 << 24,
	te = 16,
	V = 32,
	he = 64,
	yn = 128,
	C = 512,
	b = 1024,
	S = 2048,
	q = 4096,
	H = 8192,
	W = 16384,
	ke = 32768,
	Ye = 65536,
	mt = 1 << 17,
	En = 1 << 18,
	Pe = 1 << 19,
	xt = 1 << 20,
	ur = 1 << 25,
	_e = 65536,
	Ze = 1 << 21,
	it = 1 << 22,
	J = 1 << 23,
	oe = Symbol('$state'),
	cr = Symbol('legacy props'),
	_r = Symbol(''),
	se = new (class extends Error {
		constructor() {
			super(...arguments);
			re(this, 'name', 'StaleReactionError');
			re(this, 'message', 'The reaction that called `getAbortSignal()` was re-run or destroyed');
		}
	})();
var Nt;
const dr =
		!!((Nt = globalThis.document) != null && Nt.contentType) &&
		globalThis.document.contentType.includes('xml'),
	pr = 1,
	Be = 3,
	Dt = 8;
function mn() {
	throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function hr(e, t, n) {
	throw new Error('https://svelte.dev/e/each_key_duplicate');
}
function gn(e) {
	throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Tn() {
	throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function bn(e) {
	throw new Error('https://svelte.dev/e/effect_orphan');
}
function An() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function wr() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function yr(e) {
	throw new Error('https://svelte.dev/e/props_invalid_value');
}
function Sn() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Rn() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function Nn() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
function Er() {
	throw new Error('https://svelte.dev/e/svelte_boundary_reset_onerror');
}
const mr = 1,
	gr = 2,
	Tr = 4,
	br = 8,
	Ar = 16,
	Sr = 1,
	Rr = 2,
	Nr = 4,
	Or = 8,
	kr = 16,
	xr = 4,
	Dr = 1,
	Ir = 2,
	On = '[',
	kn = '[!',
	Cr = '[?',
	xn = ']',
	at = {},
	g = Symbol(),
	Dn = 'http://www.w3.org/1999/xhtml',
	Pr = 'http://www.w3.org/2000/svg',
	Mr = '@attach';
function lt(e) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
function Fr() {
	console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
function Lr() {
	console.warn('https://svelte.dev/e/svelte_boundary_reset_noop');
}
let ve = !1;
function jr(e) {
	ve = e;
}
let m;
function be(e) {
	if (e === null) throw (lt(), at);
	return (m = e);
}
function Yr() {
	return be(ne(m));
}
function Hr(e) {
	if (ve) {
		if (ne(m) !== null) throw (lt(), at);
		m = e;
	}
}
function qr(e = 1) {
	if (ve) {
		for (var t = e, n = m; t--; ) n = ne(n);
		m = n;
	}
}
function Vr(e = !0) {
	for (var t = 0, n = m; ; ) {
		if (n.nodeType === Dt) {
			var r = n.data;
			if (r === xn) {
				if (t === 0) return n;
				t -= 1;
			} else (r === On || r === kn || (r[0] === '[' && !isNaN(Number(r.slice(1))))) && (t += 1);
		}
		var s = ne(n);
		e && n.remove(), (n = s);
	}
}
function Ur(e) {
	if (!e || e.nodeType !== Dt) throw (lt(), at);
	return e.data;
}
function It(e) {
	return e === this.v;
}
function In(e, t) {
	return e != e
		? t == t
		: e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function Ct(e) {
	return !In(e, this.v);
}
let Ge = !1;
function Br() {
	Ge = !0;
}
let R = null;
function He(e) {
	R = e;
}
function Gr(e, t = !1, n) {
	R = {
		p: R,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		l: Ge && !t ? { s: null, u: null, $: [] } : null
	};
}
function Kr(e) {
	var t = R,
		n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Zt(r);
	}
	return (t.i = !0), (R = t.p), {};
}
function Me() {
	return !Ge || (R !== null && R.l === null);
}
let fe = [];
function Pt() {
	var e = fe;
	(fe = []), wn(e);
}
function gt(e) {
	if (fe.length === 0 && !Ie) {
		var t = fe;
		queueMicrotask(() => {
			t === fe && Pt();
		});
	}
	fe.push(e);
}
function Cn() {
	for (; fe.length > 0; ) Pt();
}
function Pn(e) {
	var t = w;
	if (t === null) return (v.f |= J), e;
	if ((t.f & ke) === 0 && (t.f & Oe) === 0) throw e;
	qe(e, t);
}
function qe(e, t) {
	for (; t !== null; ) {
		if ((t.f & yn) !== 0) {
			if ((t.f & ke) === 0) throw e;
			try {
				t.b.error(e);
				return;
			} catch (n) {
				e = n;
			}
		}
		t = t.parent;
	}
	throw e;
}
const Mn = -7169;
function E(e, t) {
	e.f = (e.f & Mn) | t;
}
function ot(e) {
	(e.f & C) !== 0 || e.deps === null ? E(e, b) : E(e, q);
}
function Mt(e) {
	if (e !== null)
		for (const t of e) (t.f & A) === 0 || (t.f & _e) === 0 || ((t.f ^= _e), Mt(t.deps));
}
function Fn(e, t, n) {
	(e.f & S) !== 0 ? t.add(e) : (e.f & q) !== 0 && n.add(e), Mt(e.deps), E(e, b);
}
const Le = new Set();
let p = null,
	T = null,
	O = [],
	Ke = null,
	Ie = !1,
	Ae = null,
	Ln = 1;
var X, we, le, ye, Ee, me, $, Y, ge, x, We, Je, Qe, et;
const pt = class pt {
	constructor() {
		M(this, x);
		re(this, 'id', Ln++);
		re(this, 'current', new Map());
		re(this, 'previous', new Map());
		M(this, X, new Set());
		M(this, we, new Set());
		M(this, le, 0);
		M(this, ye, 0);
		M(this, Ee, null);
		M(this, me, new Set());
		M(this, $, new Set());
		M(this, Y, new Map());
		re(this, 'is_fork', !1);
		M(this, ge, !1);
	}
	skip_effect(t) {
		_(this, Y).has(t) || _(this, Y).set(t, { d: [], m: [] });
	}
	unskip_effect(t) {
		var n = _(this, Y).get(t);
		if (n) {
			_(this, Y).delete(t);
			for (var r of n.d) E(r, S), Z(r);
			for (r of n.m) E(r, q), Z(r);
		}
	}
	process(t) {
		var s;
		(O = []), this.apply();
		var n = (Ae = []),
			r = [];
		for (const f of t) B(this, x, Je).call(this, f, n, r);
		if (((Ae = null), B(this, x, We).call(this))) {
			B(this, x, Qe).call(this, r), B(this, x, Qe).call(this, n);
			for (const [f, a] of _(this, Y)) Yt(f, a);
		} else {
			p = null;
			for (const f of _(this, X)) f(this);
			_(this, X).clear(),
				_(this, le) === 0 && B(this, x, et).call(this),
				Tt(r),
				Tt(n),
				_(this, me).clear(),
				_(this, $).clear(),
				(s = _(this, Ee)) == null || s.resolve();
		}
		T = null;
	}
	capture(t, n) {
		n !== g && !this.previous.has(t) && this.previous.set(t, n),
			(t.f & J) === 0 && (this.current.set(t, t.v), T == null || T.set(t, t.v));
	}
	activate() {
		(p = this), this.apply();
	}
	deactivate() {
		p === this && ((p = null), (T = null));
	}
	flush() {
		var t;
		if (O.length > 0) (p = this), Ft();
		else if (_(this, le) === 0 && !this.is_fork) {
			for (const n of _(this, X)) n(this);
			_(this, X).clear(), B(this, x, et).call(this), (t = _(this, Ee)) == null || t.resolve();
		}
		this.deactivate();
	}
	discard() {
		for (const t of _(this, we)) t(this);
		_(this, we).clear();
	}
	increment(t) {
		K(this, le, _(this, le) + 1), t && K(this, ye, _(this, ye) + 1);
	}
	decrement(t) {
		K(this, le, _(this, le) - 1),
			t && K(this, ye, _(this, ye) - 1),
			!_(this, ge) &&
				(K(this, ge, !0),
				gt(() => {
					K(this, ge, !1), B(this, x, We).call(this) ? O.length > 0 && this.flush() : this.revive();
				}));
	}
	revive() {
		for (const t of _(this, me)) _(this, $).delete(t), E(t, S), Z(t);
		for (const t of _(this, $)) E(t, q), Z(t);
		this.flush();
	}
	oncommit(t) {
		_(this, X).add(t);
	}
	ondiscard(t) {
		_(this, we).add(t);
	}
	settled() {
		return (_(this, Ee) ?? K(this, Ee, kt())).promise;
	}
	static ensure() {
		if (p === null) {
			const t = (p = new pt());
			Le.add(p),
				Ie ||
					gt(() => {
						p === t && t.flush();
					});
		}
		return p;
	}
	apply() {}
};
(X = new WeakMap()),
	(we = new WeakMap()),
	(le = new WeakMap()),
	(ye = new WeakMap()),
	(Ee = new WeakMap()),
	(me = new WeakMap()),
	($ = new WeakMap()),
	(Y = new WeakMap()),
	(ge = new WeakMap()),
	(x = new WeakSet()),
	(We = function () {
		return this.is_fork || _(this, ye) > 0;
	}),
	(Je = function (t, n, r) {
		t.f ^= b;
		for (var s = t.first; s !== null; ) {
			var f = s.f,
				a = (f & (V | he)) !== 0,
				o = a && (f & b) !== 0,
				i = (f & H) !== 0,
				l = o || _(this, Y).has(s);
			if (!l && s.fn !== null) {
				a
					? i || (s.f ^= b)
					: (f & Oe) !== 0
						? n.push(s)
						: (f & (ce | Ue)) !== 0 && i
							? r.push(s)
							: Fe(s) && (Ne(s), (f & te) !== 0 && (_(this, $).add(s), i && E(s, S)));
				var c = s.first;
				if (c !== null) {
					s = c;
					continue;
				}
			}
			for (; s !== null; ) {
				var u = s.next;
				if (u !== null) {
					s = u;
					break;
				}
				s = s.parent;
			}
		}
	}),
	(Qe = function (t) {
		for (var n = 0; n < t.length; n += 1) Fn(t[n], _(this, me), _(this, $));
	}),
	(et = function () {
		var f;
		if (Le.size > 1) {
			this.previous.clear();
			var t = p,
				n = T,
				r = !0;
			for (const a of Le) {
				if (a === this) {
					r = !1;
					continue;
				}
				const o = [];
				for (const [l, c] of this.current) {
					if (a.current.has(l))
						if (r && c !== a.current.get(l)) a.current.set(l, c);
						else continue;
					o.push(l);
				}
				if (o.length === 0) continue;
				const i = [...a.current.keys()].filter((l) => !this.current.has(l));
				if (i.length > 0) {
					var s = O;
					O = [];
					const l = new Set(),
						c = new Map();
					for (const u of o) Lt(u, i, l, c);
					if (O.length > 0) {
						(p = a), a.apply();
						for (const u of O) B((f = a), x, Je).call(f, u, [], []);
						a.deactivate();
					}
					O = s;
				}
			}
			(p = t), (T = n);
		}
		_(this, Y).clear(), Le.delete(this);
	});
let Se = pt;
function jn(e) {
	var t = Ie;
	Ie = !0;
	try {
		for (var n; ; ) {
			if ((Cn(), O.length === 0 && (p == null || p.flush(), O.length === 0))) return (Ke = null), n;
			Ft();
		}
	} finally {
		Ie = t;
	}
}
function Ft() {
	var e = null;
	try {
		for (var t = 0; O.length > 0; ) {
			var n = Se.ensure();
			if (t++ > 1e3) {
				var r, s;
				Yn();
			}
			n.process(O), Q.clear();
		}
	} finally {
		(O = []), (Ke = null), (Ae = null);
	}
}
function Yn() {
	try {
		An();
	} catch (e) {
		qe(e, Ke);
	}
}
let F = null;
function Tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t; ) {
			var r = e[n++];
			if (
				(r.f & (W | H)) === 0 &&
				Fe(r) &&
				((F = new Set()),
				Ne(r),
				r.deps === null &&
					r.first === null &&
					r.nodes === null &&
					r.teardown === null &&
					r.ac === null &&
					Jt(r),
				(F == null ? void 0 : F.size) > 0)
			) {
				Q.clear();
				for (const s of F) {
					if ((s.f & (W | H)) !== 0) continue;
					const f = [s];
					let a = s.parent;
					for (; a !== null; ) F.has(a) && (F.delete(a), f.push(a)), (a = a.parent);
					for (let o = f.length - 1; o >= 0; o--) {
						const i = f[o];
						(i.f & (W | H)) === 0 && Ne(i);
					}
				}
				F.clear();
			}
		}
		F = null;
	}
}
function Lt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null))
		for (const s of e.reactions) {
			const f = s.f;
			(f & A) !== 0
				? Lt(s, t, n, r)
				: (f & (it | te)) !== 0 && (f & S) === 0 && jt(s, t, r) && (E(s, S), Z(s));
		}
}
function jt(e, t, n) {
	const r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null)
		for (const s of e.deps) {
			if (Te.call(t, s)) return !0;
			if ((s.f & A) !== 0 && jt(s, t, n)) return n.set(s, !0), !0;
		}
	return n.set(e, !1), !1;
}
function Z(e) {
	var t = (Ke = e),
		n = t.b;
	if (n != null && n.is_pending && (e.f & (Oe | ce | Ue)) !== 0 && (e.f & ke) === 0) {
		n.defer_effect(e);
		return;
	}
	for (; t.parent !== null; ) {
		t = t.parent;
		var r = t.f;
		if (Ae !== null && t === w && (e.f & ce) === 0) return;
		if ((r & (he | V)) !== 0) {
			if ((r & b) === 0) return;
			t.f ^= b;
		}
	}
	O.push(t);
}
function Yt(e, t) {
	if (!((e.f & V) !== 0 && (e.f & b) !== 0)) {
		(e.f & S) !== 0 ? t.d.push(e) : (e.f & q) !== 0 && t.m.push(e), E(e, b);
		for (var n = e.first; n !== null; ) Yt(n, t), (n = n.next);
	}
}
function Hn(e, t, n, r) {
	const s = Me() ? ut : Bn;
	var f = e.filter((u) => !u.settled);
	if (n.length === 0 && f.length === 0) {
		r(t.map(s));
		return;
	}
	var a = w,
		o = qn(),
		i = f.length === 1 ? f[0].promise : f.length > 1 ? Promise.all(f.map((u) => u.promise)) : null;
	function l(u) {
		o();
		try {
			r(u);
		} catch (d) {
			(a.f & W) === 0 && qe(d, a);
		}
		tt();
	}
	if (n.length === 0) {
		i.then(() => l(t.map(s)));
		return;
	}
	function c() {
		o(),
			Promise.all(n.map((u) => Un(u)))
				.then((u) => l([...t.map(s), ...u]))
				.catch((u) => qe(u, a));
	}
	i ? i.then(c) : c();
}
function qn() {
	var e = w,
		t = v,
		n = R,
		r = p;
	return function (f = !0) {
		Re(e), ee(t), He(n), f && (r == null || r.activate());
	};
}
function tt(e = !0) {
	Re(null), ee(null), He(null), e && (p == null || p.deactivate());
}
function Vn() {
	var e = w.b,
		t = p,
		n = e.is_rendered();
	return (
		e.update_pending_count(1),
		t.increment(n),
		() => {
			e.update_pending_count(-1), t.decrement(n);
		}
	);
}
function ut(e) {
	var t = A | S,
		n = v !== null && (v.f & A) !== 0 ? v : null;
	return (
		w !== null && (w.f |= Pe),
		{
			ctx: R,
			deps: null,
			effects: null,
			equals: It,
			f: t,
			fn: e,
			reactions: null,
			rv: 0,
			v: g,
			wv: 0,
			parent: n ?? w,
			ac: null
		}
	);
}
function Un(e, t, n) {
	w === null && mn();
	var s = void 0,
		f = _t(g),
		a = !v,
		o = new Map();
	return (
		Wn(() => {
			var d;
			var i = kt();
			s = i.promise;
			try {
				Promise.resolve(e()).then(i.resolve, i.reject).finally(tt);
			} catch (y) {
				i.reject(y), tt();
			}
			var l = p;
			if (a) {
				var c = Vn();
				(d = o.get(l)) == null || d.reject(se), o.delete(l), o.set(l, i);
			}
			const u = (y, h = void 0) => {
				if ((l.activate(), h)) h !== se && ((f.f |= J), rt(f, h));
				else {
					(f.f & J) !== 0 && (f.f ^= J), rt(f, y);
					for (const [U, N] of o) {
						if ((o.delete(U), U === l)) break;
						N.reject(se);
					}
				}
				c && c();
			};
			i.promise.then(u, (y) => u(null, y || 'unknown'));
		}),
		$t(() => {
			for (const i of o.values()) i.reject(se);
		}),
		new Promise((i) => {
			function l(c) {
				function u() {
					c === s ? i(f) : l(s);
				}
				c.then(u, u);
			}
			l(s);
		})
	);
}
function zr(e) {
	const t = ut(e);
	return tn(t), t;
}
function Bn(e) {
	const t = ut(e);
	return (t.equals = Ct), t;
}
function Gn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) de(t[n]);
	}
}
function Kn(e) {
	for (var t = e.parent; t !== null; ) {
		if ((t.f & A) === 0) return (t.f & W) === 0 ? t : null;
		t = t.parent;
	}
	return null;
}
function ct(e) {
	var t,
		n = w;
	Re(Kn(e));
	try {
		(e.f &= ~_e), Gn(e), (t = fn(e));
	} finally {
		Re(n);
	}
	return t;
}
function Ht(e) {
	var t = ct(e);
	if (
		!e.equals(t) &&
		((e.wv = rn()), (!(p != null && p.is_fork) || e.deps === null) && ((e.v = t), e.deps === null))
	) {
		E(e, b);
		return;
	}
	pe || (T !== null ? (Xt() || (p != null && p.is_fork)) && T.set(e, t) : ot(e));
}
function zn(e) {
	var t, n;
	if (e.effects !== null)
		for (const r of e.effects)
			(r.teardown || r.ac) &&
				((t = r.teardown) == null || t.call(r),
				(n = r.ac) == null || n.abort(se),
				(r.teardown = hn),
				(r.ac = null),
				Ce(r, 0),
				dt(r));
}
function qt(e) {
	if (e.effects !== null) for (const t of e.effects) t.teardown && Ne(t);
}
let nt = new Set();
const Q = new Map();
let Vt = !1;
function _t(e, t) {
	var n = { f: 0, v: e, reactions: null, equals: It, rv: 0, wv: 0 };
	return n;
}
function z(e, t) {
	const n = _t(e);
	return tn(n), n;
}
function Xr(e, t = !1, n = !0) {
	var s;
	const r = _t(e);
	return (
		t || (r.equals = Ct),
		Ge && n && R !== null && R.l !== null && ((s = R.l).s ?? (s.s = [])).push(r),
		r
	);
}
function $r(e, t) {
	return (
		G(
			e,
			rr(() => ae(e))
		),
		t
	);
}
function G(e, t, n = !1) {
	v !== null &&
		(!L || (v.f & mt) !== 0) &&
		Me() &&
		(v.f & (A | te | it | mt)) !== 0 &&
		(P === null || !Te.call(P, e)) &&
		Nn();
	let r = n ? xe(t) : t;
	return rt(e, r);
}
function rt(e, t) {
	if (!e.equals(t)) {
		var n = e.v;
		pe ? Q.set(e, t) : Q.set(e, n), (e.v = t);
		var r = Se.ensure();
		if ((r.capture(e, n), (e.f & A) !== 0)) {
			const s = e;
			(e.f & S) !== 0 && ct(s), ot(s);
		}
		(e.wv = rn()),
			Ut(e, S),
			Me() &&
				w !== null &&
				(w.f & b) !== 0 &&
				(w.f & (V | he)) === 0 &&
				(I === null ? tr([e]) : I.push(e)),
			!r.is_fork && nt.size > 0 && !Vt && Xn();
	}
	return t;
}
function Xn() {
	Vt = !1;
	for (const e of nt) (e.f & b) !== 0 && E(e, q), Fe(e) && Ne(e);
	nt.clear();
}
function Zr(e, t = 1) {
	var n = ae(e),
		r = t === 1 ? n++ : n--;
	return G(e, n), r;
}
function $e(e) {
	G(e, e.v + 1);
}
function Ut(e, t) {
	var n = e.reactions;
	if (n !== null)
		for (var r = Me(), s = n.length, f = 0; f < s; f++) {
			var a = n[f],
				o = a.f;
			if (!(!r && a === w)) {
				var i = (o & S) === 0;
				if ((i && E(a, t), (o & A) !== 0)) {
					var l = a;
					T == null || T.delete(l), (o & _e) === 0 && (o & C && (a.f |= _e), Ut(l, q));
				} else i && ((o & te) !== 0 && F !== null && F.add(a), Z(a));
			}
		}
}
function xe(e) {
	if (typeof e != 'object' || e === null || oe in e) return e;
	const t = Ot(e);
	if (t !== dn && t !== pn) return e;
	var n = new Map(),
		r = cn(e),
		s = z(0),
		f = ue,
		a = (o) => {
			if (ue === f) return o();
			var i = v,
				l = ue;
			ee(null), Rt(f);
			var c = o();
			return ee(i), Rt(l), c;
		};
	return (
		r && n.set('length', z(e.length)),
		new Proxy(e, {
			defineProperty(o, i, l) {
				(!('value' in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) &&
					Sn();
				var c = n.get(i);
				return (
					c === void 0
						? a(() => {
								var u = z(l.value);
								return n.set(i, u), u;
							})
						: G(c, l.value, !0),
					!0
				);
			},
			deleteProperty(o, i) {
				var l = n.get(i);
				if (l === void 0) {
					if (i in o) {
						const c = a(() => z(g));
						n.set(i, c), $e(s);
					}
				} else G(l, g), $e(s);
				return !0;
			},
			get(o, i, l) {
				var y;
				if (i === oe) return e;
				var c = n.get(i),
					u = i in o;
				if (
					(c === void 0 &&
						(!u || ((y = De(o, i)) != null && y.writable)) &&
						((c = a(() => {
							var h = xe(u ? o[i] : g),
								U = z(h);
							return U;
						})),
						n.set(i, c)),
					c !== void 0)
				) {
					var d = ae(c);
					return d === g ? void 0 : d;
				}
				return Reflect.get(o, i, l);
			},
			getOwnPropertyDescriptor(o, i) {
				var l = Reflect.getOwnPropertyDescriptor(o, i);
				if (l && 'value' in l) {
					var c = n.get(i);
					c && (l.value = ae(c));
				} else if (l === void 0) {
					var u = n.get(i),
						d = u == null ? void 0 : u.v;
					if (u !== void 0 && d !== g)
						return { enumerable: !0, configurable: !0, value: d, writable: !0 };
				}
				return l;
			},
			has(o, i) {
				var d;
				if (i === oe) return !0;
				var l = n.get(i),
					c = (l !== void 0 && l.v !== g) || Reflect.has(o, i);
				if (l !== void 0 || (w !== null && (!c || ((d = De(o, i)) != null && d.writable)))) {
					l === void 0 &&
						((l = a(() => {
							var y = c ? xe(o[i]) : g,
								h = z(y);
							return h;
						})),
						n.set(i, l));
					var u = ae(l);
					if (u === g) return !1;
				}
				return c;
			},
			set(o, i, l, c) {
				var wt;
				var u = n.get(i),
					d = i in o;
				if (r && i === 'length')
					for (var y = l; y < u.v; y += 1) {
						var h = n.get(y + '');
						h !== void 0 ? G(h, g) : y in o && ((h = a(() => z(g))), n.set(y + '', h));
					}
				if (u === void 0)
					(!d || ((wt = De(o, i)) != null && wt.writable)) &&
						((u = a(() => z(void 0))), G(u, xe(l)), n.set(i, u));
				else {
					d = u.v !== g;
					var U = a(() => xe(l));
					G(u, U);
				}
				var N = Reflect.getOwnPropertyDescriptor(o, i);
				if ((N != null && N.set && N.set.call(c, l), !d)) {
					if (r && typeof i == 'string') {
						var ht = n.get('length'),
							ze = Number(i);
						Number.isInteger(ze) && ze >= ht.v && G(ht, ze + 1);
					}
					$e(s);
				}
				return !0;
			},
			ownKeys(o) {
				ae(s);
				var i = Reflect.ownKeys(o).filter((u) => {
					var d = n.get(u);
					return d === void 0 || d.v !== g;
				});
				for (var [l, c] of n) c.v !== g && !(l in o) && i.push(l);
				return i;
			},
			setPrototypeOf() {
				Rn();
			}
		})
	);
}
function bt(e) {
	try {
		if (e !== null && typeof e == 'object' && oe in e) return e[oe];
	} catch {}
	return e;
}
function Wr(e, t) {
	return Object.is(bt(e), bt(t));
}
var At, $n, Bt, Gt;
function Jr() {
	if (At === void 0) {
		(At = window), ($n = /Firefox/.test(navigator.userAgent));
		var e = Element.prototype,
			t = Node.prototype,
			n = Text.prototype;
		(Bt = De(t, 'firstChild').get),
			(Gt = De(t, 'nextSibling').get),
			Et(e) &&
				((e.__click = void 0),
				(e.__className = void 0),
				(e.__attributes = null),
				(e.__style = void 0),
				(e.__e = void 0)),
			Et(n) && (n.__t = void 0);
	}
}
function Ve(e = '') {
	return document.createTextNode(e);
}
function st(e) {
	return Bt.call(e);
}
function ne(e) {
	return Gt.call(e);
}
function Qr(e, t) {
	if (!ve) return st(e);
	var n = st(m);
	if (n === null) n = m.appendChild(Ve());
	else if (t && n.nodeType !== Be) {
		var r = Ve();
		return n == null || n.before(r), be(r), r;
	}
	return t && vt(n), be(n), n;
}
function es(e, t = !1) {
	if (!ve) {
		var n = st(e);
		return n instanceof Comment && n.data === '' ? ne(n) : n;
	}
	if (t) {
		if ((m == null ? void 0 : m.nodeType) !== Be) {
			var r = Ve();
			return m == null || m.before(r), be(r), r;
		}
		vt(m);
	}
	return m;
}
function ts(e, t = 1, n = !1) {
	let r = ve ? m : e;
	for (var s; t--; ) (s = r), (r = ne(r));
	if (!ve) return r;
	if (n) {
		if ((r == null ? void 0 : r.nodeType) !== Be) {
			var f = Ve();
			return r === null ? s == null || s.after(f) : r.before(f), be(f), f;
		}
		vt(r);
	}
	return be(r), r;
}
function ns(e) {
	e.textContent = '';
}
function rs() {
	return !1;
}
function ss(e, t, n) {
	return document.createElementNS(t ?? Dn, e, void 0);
}
function vt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === Be; )
		t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling);
}
function fs(e, t, n, r = !0) {
	r && n();
	for (var s of t) e.addEventListener(s, n);
	$t(() => {
		for (var f of t) e.removeEventListener(f, n);
	});
}
function Kt(e) {
	var t = v,
		n = w;
	ee(null), Re(null);
	try {
		return e();
	} finally {
		ee(t), Re(n);
	}
}
function zt(e) {
	w === null && (v === null && bn(), Tn()), pe && gn();
}
function Zn(e, t) {
	var n = t.last;
	n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function j(e, t) {
	var n = w;
	n !== null && (n.f & H) !== 0 && (e |= H);
	var r = {
			ctx: R,
			deps: null,
			nodes: null,
			f: e | S | C,
			first: null,
			fn: t,
			last: null,
			next: null,
			parent: n,
			b: n && n.b,
			prev: null,
			teardown: null,
			wv: 0,
			ac: null
		},
		s = r;
	if ((e & Oe) !== 0) Ae !== null ? Ae.push(r) : Z(r);
	else if (t !== null) {
		try {
			Ne(r);
		} catch (a) {
			throw (de(r), a);
		}
		s.deps === null &&
			s.teardown === null &&
			s.nodes === null &&
			s.first === s.last &&
			(s.f & Pe) === 0 &&
			((s = s.first), (e & te) !== 0 && (e & Ye) !== 0 && s !== null && (s.f |= Ye));
	}
	if (
		s !== null &&
		((s.parent = n), n !== null && Zn(s, n), v !== null && (v.f & A) !== 0 && (e & he) === 0)
	) {
		var f = v;
		(f.effects ?? (f.effects = [])).push(s);
	}
	return r;
}
function Xt() {
	return v !== null && !L;
}
function $t(e) {
	const t = j(ce, null);
	return E(t, b), (t.teardown = e), t;
}
function is(e) {
	zt();
	var t = w.f,
		n = !v && (t & V) !== 0 && (t & ke) === 0;
	if (n) {
		var r = R;
		(r.e ?? (r.e = [])).push(e);
	} else return Zt(e);
}
function Zt(e) {
	return j(Oe | xt, e);
}
function as(e) {
	return zt(), j(ce | xt, e);
}
function ls(e) {
	Se.ensure();
	const t = j(he | Pe, e);
	return (n = {}) =>
		new Promise((r) => {
			n.outro
				? er(t, () => {
						de(t), r(void 0);
					})
				: (de(t), r(void 0));
		});
}
function os(e) {
	return j(Oe, e);
}
function Wn(e) {
	return j(it | Pe, e);
}
function us(e, t = 0) {
	return j(ce | t, e);
}
function cs(e, t = [], n = [], r = []) {
	Hn(r, t, n, (s) => {
		j(ce, () => e(...s.map(ae)));
	});
}
function _s(e, t = 0) {
	var n = j(te | t, e);
	return n;
}
function vs(e, t = 0) {
	var n = j(Ue | t, e);
	return n;
}
function ds(e) {
	return j(V | Pe, e);
}
function Wt(e) {
	var t = e.teardown;
	if (t !== null) {
		const n = pe,
			r = v;
		St(!0), ee(null);
		try {
			t.call(null);
		} finally {
			St(n), ee(r);
		}
	}
}
function dt(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null; ) {
		const s = n.ac;
		s !== null &&
			Kt(() => {
				s.abort(se);
			});
		var r = n.next;
		(n.f & he) !== 0 ? (n.parent = null) : de(n, t), (n = r);
	}
}
function Jn(e) {
	for (var t = e.first; t !== null; ) {
		var n = t.next;
		(t.f & V) === 0 && de(t), (t = n);
	}
}
function de(e, t = !0) {
	var n = !1;
	(t || (e.f & En) !== 0) &&
		e.nodes !== null &&
		e.nodes.end !== null &&
		(Qn(e.nodes.start, e.nodes.end), (n = !0)),
		dt(e, t && !n),
		Ce(e, 0),
		E(e, W);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (const f of r) f.stop();
	Wt(e);
	var s = e.parent;
	s !== null && s.first !== null && Jt(e),
		(e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null);
}
function Qn(e, t) {
	for (; e !== null; ) {
		var n = e === t ? null : ne(e);
		e.remove(), (e = n);
	}
}
function Jt(e) {
	var t = e.parent,
		n = e.prev,
		r = e.next;
	n !== null && (n.next = r),
		r !== null && (r.prev = n),
		t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function er(e, t, n = !0) {
	var r = [];
	Qt(e, r, !0);
	var s = () => {
			n && de(e), t && t();
		},
		f = r.length;
	if (f > 0) {
		var a = () => --f || s();
		for (var o of r) o.out(a);
	} else s();
}
function Qt(e, t, n) {
	if ((e.f & H) === 0) {
		e.f ^= H;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (const o of r) (o.is_global || n) && t.push(o);
		for (var s = e.first; s !== null; ) {
			var f = s.next,
				a = (s.f & Ye) !== 0 || ((s.f & V) !== 0 && (e.f & te) !== 0);
			Qt(s, t, a ? n : !1), (s = f);
		}
	}
}
function ps(e) {
	en(e, !0);
}
function en(e, t) {
	if ((e.f & H) !== 0) {
		e.f ^= H;
		for (var n = e.first; n !== null; ) {
			var r = n.next,
				s = (n.f & Ye) !== 0 || (n.f & V) !== 0;
			en(n, s ? t : !1), (n = r);
		}
		var f = e.nodes && e.nodes.t;
		if (f !== null) for (const a of f) (a.is_global || t) && a.in();
	}
}
function hs(e, t) {
	if (e.nodes)
		for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
			var s = n === r ? null : ne(n);
			t.append(n), (n = s);
		}
}
let je = !1,
	pe = !1;
function St(e) {
	pe = e;
}
let v = null,
	L = !1;
function ee(e) {
	v = e;
}
let w = null;
function Re(e) {
	w = e;
}
let P = null;
function tn(e) {
	v !== null && (P === null ? (P = [e]) : P.push(e));
}
let k = null,
	D = 0,
	I = null;
function tr(e) {
	I = e;
}
let nn = 1,
	ie = 0,
	ue = ie;
function Rt(e) {
	ue = e;
}
function rn() {
	return ++nn;
}
function Fe(e) {
	var t = e.f;
	if ((t & S) !== 0) return !0;
	if ((t & A && (e.f &= ~_e), (t & q) !== 0)) {
		for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
			var f = n[s];
			if ((Fe(f) && Ht(f), f.wv > e.wv)) return !0;
		}
		(t & C) !== 0 && T === null && E(e, b);
	}
	return !1;
}
function sn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(P !== null && Te.call(P, e)))
		for (var s = 0; s < r.length; s++) {
			var f = r[s];
			(f.f & A) !== 0 ? sn(f, t, !1) : t === f && (n ? E(f, S) : (f.f & b) !== 0 && E(f, q), Z(f));
		}
}
function fn(e) {
	var U;
	var t = k,
		n = D,
		r = I,
		s = v,
		f = P,
		a = R,
		o = L,
		i = ue,
		l = e.f;
	(k = null),
		(D = 0),
		(I = null),
		(v = (l & (V | he)) === 0 ? e : null),
		(P = null),
		He(e.ctx),
		(L = !1),
		(ue = ++ie),
		e.ac !== null &&
			(Kt(() => {
				e.ac.abort(se);
			}),
			(e.ac = null));
	try {
		e.f |= Ze;
		var c = e.fn,
			u = c();
		e.f |= ke;
		var d = e.deps,
			y = p == null ? void 0 : p.is_fork;
		if (k !== null) {
			var h;
			if ((y || Ce(e, D), d !== null && D > 0))
				for (d.length = D + k.length, h = 0; h < k.length; h++) d[D + h] = k[h];
			else e.deps = d = k;
			if (Xt() && (e.f & C) !== 0)
				for (h = D; h < d.length; h++) ((U = d[h]).reactions ?? (U.reactions = [])).push(e);
		} else !y && d !== null && D < d.length && (Ce(e, D), (d.length = D));
		if (Me() && I !== null && !L && d !== null && (e.f & (A | q | S)) === 0)
			for (h = 0; h < I.length; h++) sn(I[h], e);
		if (s !== null && s !== e) {
			if ((ie++, s.deps !== null)) for (let N = 0; N < n; N += 1) s.deps[N].rv = ie;
			if (t !== null) for (const N of t) N.rv = ie;
			I !== null && (r === null ? (r = I) : r.push(...I));
		}
		return (e.f & J) !== 0 && (e.f ^= J), u;
	} catch (N) {
		return Pn(N);
	} finally {
		(e.f ^= Ze), (k = t), (D = n), (I = r), (v = s), (P = f), He(a), (L = o), (ue = i);
	}
}
function nr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = _n.call(n, e);
		if (r !== -1) {
			var s = n.length - 1;
			s === 0 ? (n = t.reactions = null) : ((n[r] = n[s]), n.pop());
		}
	}
	if (n === null && (t.f & A) !== 0 && (k === null || !Te.call(k, t))) {
		var f = t;
		(f.f & C) !== 0 && ((f.f ^= C), (f.f &= ~_e)), ot(f), zn(f), Ce(f, 0);
	}
}
function Ce(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) nr(e, n[r]);
}
function Ne(e) {
	var t = e.f;
	if ((t & W) === 0) {
		E(e, b);
		var n = w,
			r = je;
		(w = e), (je = !0);
		try {
			(t & (te | Ue)) !== 0 ? Jn(e) : dt(e), Wt(e);
			var s = fn(e);
			(e.teardown = typeof s == 'function' ? s : null), (e.wv = nn);
			var f;
		} finally {
			(je = r), (w = n);
		}
	}
}
async function ws() {
	await Promise.resolve(), jn();
}
function ys() {
	return Se.ensure().settled();
}
function ae(e) {
	var t = e.f,
		n = (t & A) !== 0;
	if (v !== null && !L) {
		var r = w !== null && (w.f & W) !== 0;
		if (!r && (P === null || !Te.call(P, e))) {
			var s = v.deps;
			if ((v.f & Ze) !== 0)
				e.rv < ie &&
					((e.rv = ie),
					k === null && s !== null && s[D] === e ? D++ : k === null ? (k = [e]) : k.push(e));
			else {
				(v.deps ?? (v.deps = [])).push(e);
				var f = e.reactions;
				f === null ? (e.reactions = [v]) : Te.call(f, v) || f.push(v);
			}
		}
	}
	if (pe && Q.has(e)) return Q.get(e);
	if (n) {
		var a = e;
		if (pe) {
			var o = a.v;
			return (((a.f & b) === 0 && a.reactions !== null) || ln(a)) && (o = ct(a)), Q.set(a, o), o;
		}
		var i = (a.f & C) === 0 && !L && v !== null && (je || (v.f & C) !== 0),
			l = (a.f & ke) === 0;
		Fe(a) && (i && (a.f |= C), Ht(a)), i && !l && (qt(a), an(a));
	}
	if (T != null && T.has(e)) return T.get(e);
	if ((e.f & J) !== 0) throw e.v;
	return e.v;
}
function an(e) {
	if (((e.f |= C), e.deps !== null))
		for (const t of e.deps)
			(t.reactions ?? (t.reactions = [])).push(e),
				(t.f & A) !== 0 && (t.f & C) === 0 && (qt(t), an(t));
}
function ln(e) {
	if (e.v === g) return !0;
	if (e.deps === null) return !1;
	for (const t of e.deps) if (Q.has(t) || ((t.f & A) !== 0 && ln(t))) return !0;
	return !1;
}
function rr(e) {
	var t = L;
	try {
		return (L = !0), e();
	} finally {
		L = t;
	}
}
function Es(e) {
	if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
		if (oe in e) ft(e);
		else if (!Array.isArray(e))
			for (let t in e) {
				const n = e[t];
				typeof n == 'object' && n && oe in n && ft(n);
			}
	}
}
function ft(e, t = new Set()) {
	if (typeof e == 'object' && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let r in e)
			try {
				ft(e[r], t);
			} catch {}
		const n = Ot(e);
		if (
			n !== Object.prototype &&
			n !== Array.prototype &&
			n !== Map.prototype &&
			n !== Set.prototype &&
			n !== Date.prototype
		) {
			const r = vn(n);
			for (let s in r) {
				const f = r[s].get;
				if (f)
					try {
						f.call(e);
					} catch {}
			}
		}
	}
}
export {
	xe as $,
	Qr as A,
	Hr as B,
	ts as C,
	ss as D,
	Ye as E,
	w as F,
	st as G,
	$n as H,
	H as I,
	Ir as J,
	Yr as K,
	Be as L,
	be as M,
	vt as N,
	Ur as O,
	Vr as P,
	jr as Q,
	ke as R,
	On as S,
	Dr as T,
	os as U,
	us as V,
	gt as W,
	oe as X,
	De as Y,
	yr as Z,
	Nr as _,
	ds as a,
	hn as a$,
	G as a0,
	pe as a1,
	W as a2,
	Or as a3,
	Rr as a4,
	Sr as a5,
	Bn as a6,
	kr as a7,
	_t as a8,
	Zr as a9,
	Kt as aA,
	Jr as aB,
	Dt as aC,
	ne as aD,
	at as aE,
	wr as aF,
	ns as aG,
	ls as aH,
	fr as aI,
	xn as aJ,
	lt as aK,
	jn as aL,
	Xr as aM,
	ws as aN,
	z as aO,
	zr as aP,
	hr as aQ,
	cn as aR,
	gr as aS,
	mr as aT,
	Ar as aU,
	ur as aV,
	V as aW,
	Tr as aX,
	br as aY,
	te as aZ,
	xr as a_,
	Re as aa,
	ar as ab,
	cr as ac,
	Xt as ad,
	$e as ae,
	yn as af,
	kn as ag,
	Cr as ah,
	Se as ai,
	E as aj,
	S as ak,
	Z as al,
	q as am,
	Fn as an,
	ee as ao,
	He as ap,
	Pn as aq,
	v as ar,
	rt as as,
	qr as at,
	qe as au,
	Pe as av,
	Er as aw,
	Lr as ax,
	ir as ay,
	$t as az,
	_s as b,
	pr as b0,
	Pr as b1,
	vs as b2,
	Fr as b3,
	Wr as b4,
	Hn as b5,
	Mr as b6,
	dr as b7,
	g as b8,
	Dn as b9,
	Ot as ba,
	_r as bb,
	vn as bc,
	fs as bd,
	$r as be,
	or as bf,
	In as bg,
	ys as bh,
	Ve as c,
	de as d,
	p as e,
	m as f,
	R as g,
	ve as h,
	is as i,
	rr as j,
	wn as k,
	lr as l,
	hs as m,
	ae as n,
	Es as o,
	er as p,
	ut as q,
	ps as r,
	rs as s,
	Br as t,
	as as u,
	Ge as v,
	es as w,
	Gr as x,
	cs as y,
	Kr as z
};
