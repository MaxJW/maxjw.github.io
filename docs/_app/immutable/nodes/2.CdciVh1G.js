import { b as Ot, a as L, f as F, d as Ht, c as re } from '../chunks/cWAZ9Vb5.js';
import { i as gt } from '../chunks/Du07120t.js';
import {
	W as He,
	h as O,
	K as Pe,
	b as pt,
	n as T,
	O as Rt,
	ag as Ft,
	P as tt,
	M as pe,
	Q as de,
	f as ue,
	aC as Dt,
	aJ as Wt,
	as as at,
	e as Bt,
	a as $e,
	aQ as Kt,
	s as Jt,
	a6 as jt,
	aR as ht,
	aI as Qe,
	aS as Ut,
	a8 as rt,
	aT as qt,
	aU as Gt,
	aM as mt,
	c as Ne,
	aV as ee,
	a2 as Vt,
	r as bt,
	p as wt,
	I as je,
	aW as Yt,
	aG as Xt,
	m as Qt,
	d as Oe,
	G as _t,
	aD as Zt,
	aX as yt,
	aY as ea,
	F as xt,
	E as St,
	aZ as ta,
	R as aa,
	U as Re,
	j as kt,
	a_ as ra,
	ab as ia,
	a$ as xe,
	aA as Fe,
	b0 as na,
	D as oa,
	b1 as sa,
	az as Ze,
	b2 as Mt,
	b3 as la,
	b4 as ca,
	b5 as ua,
	b6 as da,
	b7 as De,
	b8 as fa,
	b9 as va,
	ba as ga,
	bb as pa,
	bc as ha,
	V as ma,
	bd as ba,
	x as we,
	y as fe,
	z as _e,
	a0 as ne,
	A as $,
	B as S,
	aO as Ee,
	aP as Ie,
	C as A,
	be as wa,
	o as it,
	w as X,
	bf as _a,
	at as ya
} from '../chunks/CCxZTBg-.js';
import { o as Ae } from '../chunks/C9iigCqp.js';
import { s as xa } from '../chunks/BY3K5Aua.js';
import { b as et, l as Q, p as R, s as ae, c as Sa, i as We } from '../chunks/BDUbzTll.js';
import {
	a as ka,
	b as Le,
	i as Ma,
	c as Ta,
	d as $a,
	e as Ea,
	f as Aa,
	n as za,
	g as Ca,
	j as La,
	s as Z
} from '../chunks/_6OQttmc.js';
import { B as Na } from '../chunks/DRMZ3B1H.js';
function Ia(e, t) {
	if (t) {
		const a = document.body;
		(e.autofocus = !0),
			He(() => {
				document.activeElement === a && e.focus();
			});
	}
}
let nt = !1;
function Pa() {
	nt ||
		((nt = !0),
		document.addEventListener(
			'reset',
			(e) => {
				Promise.resolve().then(() => {
					var t;
					if (!e.defaultPrevented)
						for (const a of e.target.elements) (t = a.__on_r) == null || t.call(a);
				});
			},
			{ capture: !0 }
		));
}
function me(e, t) {
	return t;
}
function Oa(e, t, a) {
	for (var r = [], i = t.length, n, o = t.length, s = 0; s < i; s++) {
		let v = t[s];
		wt(
			v,
			() => {
				if (n) {
					if ((n.pending.delete(v), n.done.add(v), n.pending.size === 0)) {
						var d = e.outrogroups;
						Ge(e, Qe(n.done)), d.delete(n), d.size === 0 && (e.outrogroups = null);
					}
				} else o -= 1;
			},
			!1
		);
	}
	if (o === 0) {
		var l = r.length === 0 && a !== null;
		if (l) {
			var c = a,
				u = c.parentNode;
			Xt(u), u.append(c), e.items.clear();
		}
		Ge(e, t, !l);
	} else
		(n = { pending: new Set(t), done: new Set() }),
			(e.outrogroups ?? (e.outrogroups = new Set())).add(n);
}
function Ge(e, t, a = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (const o of e.pending.values()) for (const s of o) r.add(e.items.get(s).e);
	}
	for (var i = 0; i < t.length; i++) {
		var n = t[i];
		if (r != null && r.has(n)) {
			n.f |= ee;
			const o = document.createDocumentFragment();
			Qt(n, o);
		} else Oe(t[i], a);
	}
}
var ot;
function be(e, t, a, r, i, n = null) {
	var o = e,
		s = new Map(),
		l = (t & yt) !== 0;
	if (l) {
		var c = e;
		o = O ? pe(_t(c)) : c.appendChild(Ne());
	}
	O && Pe();
	var u = null,
		v = jt(() => {
			var k = a();
			return ht(k) ? k : k == null ? [] : Qe(k);
		}),
		d,
		b = new Map(),
		p = !0;
	function h(k) {
		(C.effect.f & Vt) === 0 &&
			(C.pending.delete(k),
			(C.fallback = u),
			Ha(C, d, o, t, r),
			u !== null &&
				(d.length === 0
					? (u.f & ee) === 0
						? bt(u)
						: ((u.f ^= ee), Te(u, null, o))
					: wt(u, () => {
							u = null;
						})));
	}
	function f(k) {
		C.pending.delete(k);
	}
	var g = pt(() => {
			d = T(v);
			var k = d.length;
			let M = !1;
			if (O) {
				var H = Rt(o) === Ft;
				H !== (k === 0) && ((o = tt()), pe(o), de(!1), (M = !0));
			}
			for (var x = new Set(), _ = Bt, E = Jt(), N = 0; N < k; N += 1) {
				O && ue.nodeType === Dt && ue.data === Wt && ((o = ue), (M = !0), de(!1));
				var z = d[N],
					D = r(z, N),
					P = p ? null : s.get(D);
				P
					? (P.v && at(P.v, z), P.i && at(P.i, N), E && _.unskip_effect(P.e))
					: ((P = Ra(s, p ? o : (ot ?? (ot = Ne())), z, D, N, i, t, a)),
						p || (P.e.f |= ee),
						s.set(D, P)),
					x.add(D);
			}
			if (
				(k === 0 &&
					n &&
					!u &&
					(p ? (u = $e(() => n(o))) : ((u = $e(() => n(ot ?? (ot = Ne())))), (u.f |= ee))),
				k > x.size && Kt(),
				O && k > 0 && pe(tt()),
				!p)
			)
				if ((b.set(_, x), E)) {
					for (const [G, B] of s) x.has(G) || _.skip_effect(B.e);
					_.oncommit(h), _.ondiscard(f);
				} else h(_);
			M && de(!0), T(v);
		}),
		C = { effect: g, items: s, pending: b, outrogroups: null, fallback: u };
	(p = !1), O && (o = ue);
}
function Se(e) {
	for (; e !== null && (e.f & Yt) === 0; ) e = e.next;
	return e;
}
function Ha(e, t, a, r, i) {
	var z, D, P, G, B, K, j, U, ce;
	var n = (r & ea) !== 0,
		o = t.length,
		s = e.items,
		l = Se(e.effect.first),
		c,
		u = null,
		v,
		d = [],
		b = [],
		p,
		h,
		f,
		g;
	if (n)
		for (g = 0; g < o; g += 1)
			(p = t[g]),
				(h = i(p, g)),
				(f = s.get(h).e),
				(f.f & ee) === 0 &&
					((D = (z = f.nodes) == null ? void 0 : z.a) == null || D.measure(),
					(v ?? (v = new Set())).add(f));
	for (g = 0; g < o; g += 1) {
		if (((p = t[g]), (h = i(p, g)), (f = s.get(h).e), e.outrogroups !== null))
			for (const J of e.outrogroups) J.pending.delete(f), J.done.delete(f);
		if ((f.f & ee) !== 0)
			if (((f.f ^= ee), f === l)) Te(f, null, a);
			else {
				var C = u ? u.next : l;
				f === e.effect.last && (e.effect.last = f.prev),
					f.prev && (f.prev.next = f.next),
					f.next && (f.next.prev = f.prev),
					ie(e, u, f),
					ie(e, f, C),
					Te(f, C, a),
					(u = f),
					(d = []),
					(b = []),
					(l = Se(u.next));
				continue;
			}
		if (
			((f.f & je) !== 0 &&
				(bt(f),
				n &&
					((G = (P = f.nodes) == null ? void 0 : P.a) == null || G.unfix(),
					(v ?? (v = new Set())).delete(f))),
			f !== l)
		) {
			if (c !== void 0 && c.has(f)) {
				if (d.length < b.length) {
					var k = b[0],
						M;
					u = k.prev;
					var H = d[0],
						x = d[d.length - 1];
					for (M = 0; M < d.length; M += 1) Te(d[M], k, a);
					for (M = 0; M < b.length; M += 1) c.delete(b[M]);
					ie(e, H.prev, x.next),
						ie(e, u, H),
						ie(e, x, k),
						(l = k),
						(u = x),
						(g -= 1),
						(d = []),
						(b = []);
				} else
					c.delete(f),
						Te(f, l, a),
						ie(e, f.prev, f.next),
						ie(e, f, u === null ? e.effect.first : u.next),
						ie(e, u, f),
						(u = f);
				continue;
			}
			for (d = [], b = []; l !== null && l !== f; )
				(c ?? (c = new Set())).add(l), b.push(l), (l = Se(l.next));
			if (l === null) continue;
		}
		(f.f & ee) === 0 && d.push(f), (u = f), (l = Se(f.next));
	}
	if (e.outrogroups !== null) {
		for (const J of e.outrogroups)
			J.pending.size === 0 && (Ge(e, Qe(J.done)), (B = e.outrogroups) == null || B.delete(J));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || c !== void 0) {
		var _ = [];
		if (c !== void 0) for (f of c) (f.f & je) === 0 && _.push(f);
		for (; l !== null; ) (l.f & je) === 0 && l !== e.fallback && _.push(l), (l = Se(l.next));
		var E = _.length;
		if (E > 0) {
			var N = (r & yt) !== 0 && o === 0 ? a : null;
			if (n) {
				for (g = 0; g < E; g += 1)
					(j = (K = _[g].nodes) == null ? void 0 : K.a) == null || j.measure();
				for (g = 0; g < E; g += 1)
					(ce = (U = _[g].nodes) == null ? void 0 : U.a) == null || ce.fix();
			}
			Oa(e, _, N);
		}
	}
	n &&
		He(() => {
			var J, ye;
			if (v !== void 0)
				for (f of v) (ye = (J = f.nodes) == null ? void 0 : J.a) == null || ye.apply();
		});
}
function Ra(e, t, a, r, i, n, o, s) {
	var l = (o & qt) !== 0 ? ((o & Gt) === 0 ? mt(a, !1, !1) : rt(a)) : null,
		c = (o & Ut) !== 0 ? rt(i) : null;
	return {
		v: l,
		i: c,
		e: $e(
			() => (
				n(t, l ?? a, c ?? i, s),
				() => {
					e.delete(r);
				}
			)
		)
	};
}
function Te(e, t, a) {
	if (e.nodes)
		for (
			var r = e.nodes.start, i = e.nodes.end, n = t && (t.f & ee) === 0 ? t.nodes.start : a;
			r !== null;

		) {
			var o = Zt(r);
			if ((n.before(r), r === i)) return;
			r = o;
		}
}
function ie(e, t, a) {
	t === null ? (e.effect.first = a) : (t.next = a), a === null ? (e.effect.last = t) : (a.prev = t);
}
function le(e, t, a, r, i) {
	var s;
	O && Pe();
	var n = (s = t.$$slots) == null ? void 0 : s[a],
		o = !1;
	n === !0 && ((n = t.children), (o = !0)), n === void 0 || n(e, o ? () => r : r);
}
const Fa = () => performance.now(),
	te = { tick: (e) => requestAnimationFrame(e), now: () => Fa(), tasks: new Set() };
function Tt() {
	const e = te.now();
	te.tasks.forEach((t) => {
		t.c(e) || (te.tasks.delete(t), t.f());
	}),
		te.tasks.size !== 0 && te.tick(Tt);
}
function Da(e) {
	let t;
	return (
		te.tasks.size === 0 && te.tick(Tt),
		{
			promise: new Promise((a) => {
				te.tasks.add((t = { c: e, f: a }));
			}),
			abort() {
				te.tasks.delete(t);
			}
		}
	);
}
function Ve(e, t) {
	Fe(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function Wa(e) {
	if (e === 'float') return 'cssFloat';
	if (e === 'offset') return 'cssOffset';
	if (e.startsWith('--')) return e;
	const t = e.split('-');
	return t.length === 1
		? t[0]
		: t[0] +
				t
					.slice(1)
					.map((a) => a[0].toUpperCase() + a.slice(1))
					.join('');
}
function st(e) {
	const t = {},
		a = e.split(';');
	for (const r of a) {
		const [i, n] = r.split(':');
		if (!i || n === void 0) break;
		const o = Wa(i.trim());
		t[o] = n.trim();
	}
	return t;
}
const Ba = (e) => e;
function oe(e, t, a, r) {
	var f;
	var i = (e & ra) !== 0,
		n = 'in',
		o,
		s = t.inert,
		l = t.style.overflow,
		c,
		u;
	function v() {
		return Fe(() => o ?? (o = a()(t, (r == null ? void 0 : r()) ?? {}, { direction: n })));
	}
	var d = {
			is_global: i,
			in() {
				(t.inert = s),
					c == null || c.abort(),
					(c = $t(t, v(), u, 1, () => {
						Ve(t, 'introend'), c == null || c.abort(), (c = o = void 0), (t.style.overflow = l);
					}));
			},
			out(g) {
				{
					g == null || g(), (o = void 0);
					return;
				}
			},
			stop: () => {
				c == null || c.abort();
			}
		},
		b = xt;
	if ((((f = b.nodes).t ?? (f.t = [])).push(d), ka)) {
		var p = i;
		if (!p) {
			for (var h = b.parent; h && (h.f & St) !== 0; ) for (; (h = h.parent) && (h.f & ta) === 0; );
			p = !h || (h.f & aa) !== 0;
		}
		p &&
			Re(() => {
				kt(() => d.in());
			});
	}
}
function $t(e, t, a, r, i) {
	if (ia(t)) {
		var n,
			o = !1;
		return (
			He(() => {
				if (!o) {
					var h = t({ direction: 'in' });
					n = $t(e, h, a, r, i);
				}
			}),
			{
				abort: () => {
					(o = !0), n == null || n.abort();
				},
				deactivate: () => n.deactivate(),
				reset: () => n.reset(),
				t: () => n.t()
			}
		);
	}
	if (!(t != null && t.duration) && !(t != null && t.delay))
		return Ve(e, 'introstart'), i(), { abort: xe, deactivate: xe, reset: xe, t: () => r };
	const { delay: s = 0, css: l, tick: c, easing: u = Ba } = t;
	var v = [];
	if ((c && c(0, 1), l)) {
		var d = st(l(0, 1));
		v.push(d, d);
	}
	var b = () => 1 - r,
		p = e.animate(v, { duration: s, fill: 'forwards' });
	return (
		(p.onfinish = () => {
			p.cancel(), Ve(e, 'introstart');
			var h = 1 - r,
				f = r - h,
				g = t.duration * Math.abs(f),
				C = [];
			if (g > 0) {
				var k = !1;
				if (l)
					for (var M = Math.ceil(g / 16.666666666666668), H = 0; H <= M; H += 1) {
						var x = h + f * u(H / M),
							_ = st(l(x, 1 - x));
						C.push(_), k || (k = _.overflow === 'hidden');
					}
				k && (e.style.overflow = 'hidden'),
					(b = () => {
						var E = p.currentTime;
						return h + f * u(E / g);
					}),
					c &&
						Da(() => {
							if (p.playState !== 'running') return !1;
							var E = b();
							return c(E, 1 - E), !0;
						});
			}
			(p = e.animate(C, { duration: g, fill: 'forwards' })),
				(p.onfinish = () => {
					(b = () => r), c == null || c(r, 1 - r), i();
				});
		}),
		{
			abort: () => {
				p && (p.cancel(), (p.effect = null), (p.onfinish = xe));
			},
			deactivate: () => {
				i = xe;
			},
			reset: () => {},
			t: () => b()
		}
	);
}
function Ka(e, t, a, r, i, n) {
	let o = O;
	O && Pe();
	var s = null;
	O && ue.nodeType === na && ((s = ue), Pe());
	var l = O ? ue : e,
		c = new Na(l, !1);
	pt(() => {
		const u = t() || null;
		var v = sa;
		if (u === null) {
			c.ensure(null, null), Le(!0);
			return;
		}
		return (
			c.ensure(u, (d) => {
				if (u) {
					if (((s = O ? s : oa(u, v)), Ot(s, s), r)) {
						O && Ma(u) && s.append(document.createComment(''));
						var b = O ? _t(s) : s.appendChild(Ne());
						O && (b === null ? de(!1) : pe(b)), r(s, b);
					}
					(xt.nodes.end = s), d.before(s);
				}
				O && pe(d);
			}),
			Le(!0),
			() => {
				u && Le(!1);
			}
		);
	}, St),
		Ze(() => {
			Le(!0);
		}),
		o && (de(!0), pe(l));
}
function Ja(e, t) {
	var a = void 0,
		r;
	Mt(() => {
		a !== (a = t()) &&
			(r && (Oe(r), (r = null)),
			a &&
				(r = $e(() => {
					Re(() => a(e));
				})));
	});
}
function Et(e) {
	var t,
		a,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (a = Et(e[t])) && (r && (r += ' '), (r += a));
		} else for (a in e) e[a] && (r && (r += ' '), (r += a));
	return r;
}
function ja() {
	for (var e, t, a = 0, r = '', i = arguments.length; a < i; a++)
		(e = arguments[a]) && (t = Et(e)) && (r && (r += ' '), (r += t));
	return r;
}
function Ua(e) {
	return typeof e == 'object' ? ja(e) : (e ?? '');
}
const lt = [
	...` 	
\r\f \v\uFEFF`
];
function qa(e, t, a) {
	var r = e == null ? '' : '' + e;
	if ((t && (r = r ? r + ' ' + t : t), a)) {
		for (var i of Object.keys(a))
			if (a[i]) r = r ? r + ' ' + i : i;
			else if (r.length)
				for (var n = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
					var s = o + n;
					(o === 0 || lt.includes(r[o - 1])) && (s === r.length || lt.includes(r[s]))
						? (r = (o === 0 ? '' : r.substring(0, o)) + r.substring(s + 1))
						: (o = s);
				}
	}
	return r === '' ? null : r;
}
function ct(e, t = !1) {
	var a = t ? ' !important;' : ';',
		r = '';
	for (var i of Object.keys(e)) {
		var n = e[i];
		n != null && n !== '' && (r += ' ' + i + ': ' + n + a);
	}
	return r;
}
function Ue(e) {
	return e[0] !== '-' || e[1] !== '-' ? e.toLowerCase() : e;
}
function Ga(e, t) {
	if (t) {
		var a = '',
			r,
			i;
		if ((Array.isArray(t) ? ((r = t[0]), (i = t[1])) : (r = t), e)) {
			e = String(e)
				.replaceAll(/\s*\/\*.*?\*\/\s*/g, '')
				.trim();
			var n = !1,
				o = 0,
				s = !1,
				l = [];
			r && l.push(...Object.keys(r).map(Ue)), i && l.push(...Object.keys(i).map(Ue));
			var c = 0,
				u = -1;
			const h = e.length;
			for (var v = 0; v < h; v++) {
				var d = e[v];
				if (
					(s
						? d === '/' && e[v - 1] === '*' && (s = !1)
						: n
							? n === d && (n = !1)
							: d === '/' && e[v + 1] === '*'
								? (s = !0)
								: d === '"' || d === "'"
									? (n = d)
									: d === '('
										? o++
										: d === ')' && o--,
					!s && n === !1 && o === 0)
				) {
					if (d === ':' && u === -1) u = v;
					else if (d === ';' || v === h - 1) {
						if (u !== -1) {
							var b = Ue(e.substring(c, u).trim());
							if (!l.includes(b)) {
								d !== ';' && v++;
								var p = e.substring(c, v).trim();
								a += ' ' + p + ';';
							}
						}
						(c = v + 1), (u = -1);
					}
				}
			}
		}
		return r && (a += ct(r)), i && (a += ct(i, !0)), (a = a.trim()), a === '' ? null : a;
	}
	return e == null ? null : String(e);
}
function he(e, t, a, r, i, n) {
	var o = e.__className;
	if (O || o !== a || o === void 0) {
		var s = qa(a, r, n);
		(!O || s !== e.getAttribute('class')) &&
			(s == null ? e.removeAttribute('class') : t ? (e.className = s) : e.setAttribute('class', s)),
			(e.__className = a);
	} else if (n && i !== n)
		for (var l in n) {
			var c = !!n[l];
			(i == null || c !== !!i[l]) && e.classList.toggle(l, c);
		}
	return n;
}
function qe(e, t = {}, a, r) {
	for (var i in a) {
		var n = a[i];
		t[i] !== n && (a[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, n, r));
	}
}
function Be(e, t, a, r) {
	var i = e.__style;
	if (O || i !== t) {
		var n = Ga(t, r);
		(!O || n !== e.getAttribute('style')) &&
			(n == null ? e.removeAttribute('style') : (e.style.cssText = n)),
			(e.__style = t);
	} else
		r &&
			(Array.isArray(r)
				? (qe(e, a == null ? void 0 : a[0], r[0]),
					qe(e, a == null ? void 0 : a[1], r[1], 'important'))
				: qe(e, a, r));
	return r;
}
function Ye(e, t, a = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!ht(t)) return la();
		for (var r of e.options) r.selected = t.includes(ut(r));
		return;
	}
	for (r of e.options) {
		var i = ut(r);
		if (ca(i, t)) {
			r.selected = !0;
			return;
		}
	}
	(!a || t !== void 0) && (e.selectedIndex = -1);
}
function Va(e) {
	var t = new MutationObserver(() => {
		Ye(e, e.__value);
	});
	t.observe(e, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ['value'] }),
		Ze(() => {
			t.disconnect();
		});
}
function ut(e) {
	return '__value' in e ? e.__value : e.value;
}
const ke = Symbol('class'),
	Me = Symbol('style'),
	At = Symbol('is custom element'),
	zt = Symbol('is html'),
	Ya = De ? 'link' : 'LINK',
	Xa = De ? 'input' : 'INPUT',
	Qa = De ? 'option' : 'OPTION',
	Za = De ? 'select' : 'SELECT';
function er(e) {
	if (O) {
		var t = !1,
			a = () => {
				if (!t) {
					if (((t = !0), e.hasAttribute('value'))) {
						var r = e.value;
						q(e, 'value', null), (e.value = r);
					}
					if (e.hasAttribute('checked')) {
						var i = e.checked;
						q(e, 'checked', null), (e.checked = i);
					}
				}
			};
		(e.__on_r = a), He(a), Pa();
	}
}
function tr(e, t) {
	t ? e.hasAttribute('selected') || e.setAttribute('selected', '') : e.removeAttribute('selected');
}
function q(e, t, a, r) {
	var i = Ct(e);
	(O &&
		((i[t] = e.getAttribute(t)),
		t === 'src' || t === 'srcset' || (t === 'href' && e.nodeName === Ya))) ||
		(i[t] !== (i[t] = a) &&
			(t === 'loading' && (e[pa] = a),
			a == null
				? e.removeAttribute(t)
				: typeof a != 'string' && Lt(e).includes(t)
					? (e[t] = a)
					: e.setAttribute(t, a)));
}
function ar(e, t, a, r, i = !1, n = !1) {
	if (O && i && e.nodeName === Xa) {
		var o = e,
			s = o.type === 'checkbox' ? 'defaultChecked' : 'defaultValue';
		s in a || er(o);
	}
	var l = Ct(e),
		c = l[At],
		u = !l[zt];
	let v = O && c;
	v && de(!1);
	var d = t || {},
		b = e.nodeName === Qa;
	for (var p in t) p in a || (a[p] = null);
	a.class ? (a.class = Ua(a.class)) : (r || a[ke]) && (a.class = null),
		a[Me] && (a.style ?? (a.style = null));
	var h = Lt(e);
	for (const x in a) {
		let _ = a[x];
		if (b && x === 'value' && _ == null) {
			(e.value = e.__value = ''), (d[x] = _);
			continue;
		}
		if (x === 'class') {
			var f = e.namespaceURI === 'http://www.w3.org/1999/xhtml';
			he(e, f, _, r, t == null ? void 0 : t[ke], a[ke]), (d[x] = _), (d[ke] = a[ke]);
			continue;
		}
		if (x === 'style') {
			Be(e, _, t == null ? void 0 : t[Me], a[Me]), (d[x] = _), (d[Me] = a[Me]);
			continue;
		}
		var g = d[x];
		if (!(_ === g && !(_ === void 0 && e.hasAttribute(x)))) {
			d[x] = _;
			var C = x[0] + x[1];
			if (C !== '$$')
				if (C === 'on') {
					const E = {},
						N = '$$' + x;
					let z = x.slice(2);
					var k = Ca(z);
					if ((Ta(z) && ((z = z.slice(0, -7)), (E.capture = !0)), !k && g)) {
						if (_ != null) continue;
						e.removeEventListener(z, d[N], E), (d[N] = null);
					}
					if (k) $a(z, e, _), Ea([z]);
					else if (_ != null) {
						let D = function (P) {
							d[x].call(this, P);
						};
						d[N] = Aa(z, e, D, E);
					}
				} else if (x === 'style') q(e, x, _);
				else if (x === 'autofocus') Ia(e, !!_);
				else if (!c && (x === '__value' || (x === 'value' && _ != null))) e.value = e.__value = _;
				else if (x === 'selected' && b) tr(e, _);
				else {
					var M = x;
					u || (M = za(M));
					var H = M === 'defaultValue' || M === 'defaultChecked';
					if (_ == null && !c && !H)
						if (((l[x] = null), M === 'value' || M === 'checked')) {
							let E = e;
							const N = t === void 0;
							if (M === 'value') {
								let z = E.defaultValue;
								E.removeAttribute(M), (E.defaultValue = z), (E.value = E.__value = N ? z : null);
							} else {
								let z = E.defaultChecked;
								E.removeAttribute(M), (E.defaultChecked = z), (E.checked = N ? z : !1);
							}
						} else e.removeAttribute(x);
					else
						H || (h.includes(M) && (c || typeof _ != 'string'))
							? ((e[M] = _), M in l && (l[M] = fa))
							: typeof _ != 'function' && q(e, M, _);
				}
		}
	}
	return v && de(!0), d;
}
function Xe(e, t, a = [], r = [], i = [], n, o = !1, s = !1) {
	ua(i, a, r, (l) => {
		var c = void 0,
			u = {},
			v = e.nodeName === Za,
			d = !1;
		if (
			(Mt(() => {
				var p = t(...l.map(T)),
					h = ar(e, c, p, n, o, s);
				d && v && 'value' in p && Ye(e, p.value);
				for (let g of Object.getOwnPropertySymbols(u)) p[g] || Oe(u[g]);
				for (let g of Object.getOwnPropertySymbols(p)) {
					var f = p[g];
					g.description === da &&
						(!c || f !== c[g]) &&
						(u[g] && Oe(u[g]), (u[g] = $e(() => Ja(e, () => f)))),
						(h[g] = f);
				}
				c = h;
			}),
			v)
		) {
			var b = e;
			Re(() => {
				Ye(b, c.value, !0), Va(b);
			});
		}
		d = !0;
	});
}
function Ct(e) {
	return (
		e.__attributes ??
		(e.__attributes = { [At]: e.nodeName.includes('-'), [zt]: e.namespaceURI === va })
	);
}
var dt = new Map();
function Lt(e) {
	var t = e.getAttribute('is') || e.nodeName,
		a = dt.get(t);
	if (a) return a;
	dt.set(t, (a = []));
	for (var r, i = e, n = Element.prototype; n !== i; ) {
		r = ha(i);
		for (var o in r) r[o].set && a.push(o);
		i = ga(i);
	}
	return a;
}
function rr(e, t, a = t) {
	var r = e === 'x',
		i = () =>
			Fe(() => {
				(n = !0), clearTimeout(o), (o = setTimeout(s, 100)), a(window[r ? 'scrollX' : 'scrollY']);
			});
	addEventListener('scroll', i, { passive: !0 });
	var n = !1,
		o,
		s = () => {
			n = !1;
		},
		l = !0;
	ma(() => {
		var c = t();
		l
			? (l = !1)
			: !n &&
				c != null &&
				((n = !0), clearTimeout(o), scrollTo(window.scrollX, c), (o = setTimeout(s, 100)));
	}),
		Re(i),
		Ze(() => {
			removeEventListener('scroll', i);
		});
}
function ir(e, t) {
	ba(window, ['resize'], () => Fe(() => t(window[e])));
}
var nr = F(
	'<div class="fixed inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 transition-all duration-300 ease-out"><!></div>'
);
function or(e, t) {
	we(t, !0);
	let a = Ee(0),
		r = Ee(0);
	const i = Ie(() => Math.min(Math.max((T(a) - T(r) * 0.2) / (T(r) * 0.8), 0), 1)),
		n = Ie(() => `blur(${T(i) * 8}px)`),
		o = Ie(() => Math.max(1 - T(a) / T(r), 0.2));
	Ae(() => {
		const c = () => ne(a, window.scrollY, !0),
			u = () => ne(r, window.innerHeight, !0);
		return (
			window.addEventListener('scroll', c, { passive: !0 }),
			window.addEventListener('resize', u, { passive: !0 }),
			u(),
			() => {
				window.removeEventListener('scroll', c), window.removeEventListener('resize', u);
			}
		);
	});
	var s = nr(),
		l = $(s);
	xa(l, () => t.children),
		S(s),
		fe(() => Be(s, `filter: ${T(n) ?? ''}; opacity: ${T(o) ?? ''}`)),
		rr(
			'y',
			() => T(a),
			(c) => ne(a, c, !0)
		),
		ir('innerHeight', (c) => ne(r, c, !0)),
		L(e, s),
		_e();
}
var sr = F(
	'<div class="fixed inset-0 -z-10 overflow-hidden"><div class="absolute inset-0 bg-gray-950"></div> <div class="absolute inset-0 opacity-30"></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div> <div class="from-primary/40 to-secondary/40 absolute inset-0 bg-gradient-to-tr via-transparent"></div> <div class="absolute inset-0" style="background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 40%);"></div> <div class="pointer-events-none absolute inset-0"></div></div>'
);
function lr(e, t) {
	we(t, !1);
	let a = mt(),
		r = [],
		i = null,
		n = -1,
		o = !1,
		s = -1;
	const l = {
		gridSize: 40,
		hoverFadeSpeed: 0.9,
		minOpacity: 0.02,
		waveSpeed: 0.34,
		waveThickness: 1.5,
		waveFadeRate: 0.7
	};
	let c = 0,
		u = 0,
		v = [],
		d = new Map(),
		b = 0,
		p,
		h = [];
	function f() {
		const m = window.innerWidth,
			w = window.innerHeight;
		(c = Math.ceil(m / l.gridSize)),
			(u = Math.ceil(w / l.gridSize)),
			wa(a, (T(a).innerHTML = '')),
			(r = []),
			(v = []),
			(h = []),
			(i = null),
			(n = -1),
			(s = -1),
			d.clear();
		for (let y = 0; y < u * c; y++) h[y] = [];
		for (let y = 0; y < u; y++)
			for (let I = 0; I < c; I++) {
				const W = I * l.gridSize,
					V = y * l.gridSize;
				if (W < m && V < w) {
					const Y = document.createElement('div');
					(Y.className = 'absolute opacity-0'),
						(Y.style.cssText = `left:${W}px;top:${V}px;width:${l.gridSize - 2}px;height:${l.gridSize - 2}px;border-radius:2px;transition:none`),
						T(a).appendChild(Y),
						r.push(Y),
						v.push(0);
				}
			}
	}
	function g(m, w, y = 0.8) {
		if (m < 0 || m >= r.length) return;
		i &&
			(i.style.cssText = i.style.cssText
				.replace(/opacity:[^;]*/g, 'opacity:0')
				.replace(/background-color:[^;]*/g, '')
				.replace(/box-shadow:[^;]*/g, ''));
		const I = r[m];
		(i = I),
			(I.style.opacity = y.toString()),
			(I.style.backgroundColor = w),
			(I.style.boxShadow = `0 0 20px ${w.replace(/[\d.]+\)$/g, '0.6)')}, inset 0 0 15px rgba(255, 255, 255, 0.2)`);
	}
	function C() {
		i &&
			((i.style.opacity = '0'),
			(i.style.backgroundColor = ''),
			(i.style.boxShadow = ''),
			(i = null));
	}
	function k(m) {
		m >= 0 && m < v.length && (v[m] = Math.min(1, v[m] + 0.3));
	}
	function M(m, w) {
		if (h[m] && h[m][w] !== void 0) return h[m][w];
		const y = m % c,
			I = Math.floor(m / c),
			W = w % c,
			V = Math.floor(w / c),
			Y = Math.sqrt(Math.pow(W - y, 2) + Math.pow(V - I, 2));
		return h[m] || (h[m] = []), (h[m][w] = Y), Y;
	}
	function H(m, w) {
		const y = Math.abs(m - w);
		if (y > l.waveThickness) return 0;
		const I = (1 - y / l.waveThickness) * 0.9,
			W = Math.exp(-w * l.waveFadeRate);
		return I * W;
	}
	function x(m) {
		if (m < 0 || m >= r.length || r[m] === i) return;
		const w = r[m],
			y = v[m];
		let I = 0;
		for (const W of d.values()) {
			if (m === W.centerIndex) continue;
			const V = ((Date.now() - W.startTime) / 16.67) * l.waveSpeed,
				Y = M(m, W.centerIndex),
				Ke = H(Y, V);
			I = Math.max(I, Ke);
		}
		I > 0
			? (w.style.cssText += `;opacity:${I};background-color:rgba(100, 200, 255, 0.9);box-shadow:0 0 ${20 * I}px rgba(100, 200, 255, ${0.8 * I}), inset 0 0 15px rgba(255, 255, 255, 0.3)`)
			: y > l.minOpacity
				? (w.style.cssText += `;opacity:${y};background-color:rgba(255, 255, 255, 0.6);box-shadow:0 0 ${10 * y}px rgba(255, 255, 255, ${0.3 * y}), inset 0 0 10px rgba(255, 255, 255, 0.1)`)
				: (w.style.cssText += ';opacity:0;background-color:;box-shadow:');
	}
	function _(m) {
		d.set(b++, { startTime: Date.now(), centerIndex: m });
	}
	function E() {
		const m = new Set();
		v.forEach((w, y) => {
			w > 0 && m.add(y);
		});
		for (const w of d.values()) {
			const y = ((Date.now() - w.startTime) / 16.67) * l.waveSpeed,
				I = w.centerIndex % c,
				W = Math.floor(w.centerIndex / c),
				V = Math.ceil(y + l.waveThickness),
				Y = Math.max(0, I - V),
				Ke = Math.min(c - 1, I + V),
				It = Math.max(0, W - V),
				Pt = Math.min(u - 1, W + V);
			for (let ze = It; ze <= Pt; ze++)
				for (let Ce = Y; Ce <= Ke; Ce++) {
					const Je = ze * c + Ce;
					Je < r.length &&
						Je !== w.centerIndex &&
						Math.sqrt(Math.pow(Ce - I, 2) + Math.pow(ze - W, 2)) <= y + l.waveThickness &&
						m.add(Je);
				}
		}
		return m;
	}
	function N() {
		for (const [w, y] of d) {
			const I = ((Date.now() - y.startTime) / 16.67) * l.waveSpeed;
			0.9 * Math.exp(-I * l.waveFadeRate) < 0.001 && I > 10 && d.delete(w);
		}
		v.forEach((w, y) => {
			y !== n && w > l.minOpacity ? (v[y] *= l.hoverFadeSpeed) : w <= l.minOpacity && (v[y] = 0);
		}),
			E().forEach((w) => x(w)),
			(p = requestAnimationFrame(N));
	}
	function z(m, w) {
		return Math.floor(w / l.gridSize) * c + Math.floor(m / l.gridSize);
	}
	function D(m) {
		const w = z(m.clientX, m.clientY);
		(n = w), k(w), g(w, 'rgba(100, 200, 255, 0.8)', 0.7);
	}
	function P(m) {
		if (o) return;
		const w = z(m.clientX, m.clientY);
		w >= 0 && w < r.length && _(w);
	}
	function G() {
		(n = -1), C();
	}
	function B(m) {
		if (((o = !0), m.touches.length > 0)) {
			const w = m.touches[0],
				y = z(w.clientX, w.clientY);
			(s = y), (n = y), k(y), g(y, 'rgba(100, 200, 255, 0.8)', 0.7);
		}
	}
	function K(m) {
		if (m.touches.length > 0) {
			const w = m.touches[0],
				y = z(w.clientX, w.clientY);
			(n = y), k(y), g(y, 'rgba(100, 200, 255, 0.8)', 0.7);
		}
	}
	function j(m) {
		if ((m.preventDefault(), m.changedTouches.length > 0)) {
			const w = m.changedTouches[0],
				y = z(w.clientX, w.clientY);
			y >= 0 && y < r.length && y === s && _(y), C();
		}
		(n = -1), (s = -1);
	}
	let U;
	function ce() {
		clearTimeout(U), (U = setTimeout(f, 150));
	}
	Ae(
		() => (
			f(),
			N(),
			window.addEventListener('mousemove', D, { passive: !0 }),
			window.addEventListener('click', P, { passive: !0 }),
			window.addEventListener('resize', ce, { passive: !0 }),
			window.addEventListener('touchstart', B, { passive: !0 }),
			window.addEventListener('touchmove', K, { passive: !0 }),
			window.addEventListener('touchend', j, { passive: !0 }),
			T(a) && T(a).addEventListener('mouseleave', G, { passive: !0 }),
			() => {
				p && cancelAnimationFrame(p),
					clearTimeout(U),
					window.removeEventListener('mousemove', D),
					window.removeEventListener('click', P),
					window.removeEventListener('resize', ce),
					window.removeEventListener('touchstart', B),
					window.removeEventListener('touchmove', K),
					window.removeEventListener('touchend', j),
					T(a) && T(a).removeEventListener('mouseleave', G);
			}
		)
	),
		gt();
	var J = sr(),
		ye = A($(J), 2),
		Nt = A(ye, 8);
	et(
		Nt,
		(m) => ne(a, m),
		() => T(a)
	),
		S(J),
		fe(() =>
			Be(
				ye,
				`
			background-image:
				linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
				linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px);
			background-size: ${l.gridSize}px ${l.gridSize}px;
		`
			)
		),
		L(e, J),
		_e();
}
var cr = F('<div class="icon-scroll svelte-187wpne" aria-hidden="true"></div>');
function ur(e) {
	function t() {
		const r = document.getElementById('about');
		r
			? r.scrollIntoView({ behavior: 'smooth' })
			: window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
	}
	var a = cr();
	La('click', a, t), L(e, a);
}
const dr = {
	outline: {
		xmlns: 'http://www.w3.org/2000/svg',
		width: 24,
		height: 24,
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': 2,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	},
	filled: {
		xmlns: 'http://www.w3.org/2000/svg',
		width: 24,
		height: 24,
		viewBox: '0 0 24 24',
		fill: 'currentColor',
		stroke: 'none'
	}
};
var fr = Ht('<svg><!><!></svg>');
function ve(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = Q(a, ['type', 'name', 'color', 'size', 'stroke', 'iconNode']);
	we(t, !1);
	let i = R(t, 'type', 8),
		n = R(t, 'name', 8),
		o = R(t, 'color', 8, 'currentColor'),
		s = R(t, 'size', 8, 24),
		l = R(t, 'stroke', 8, 2),
		c = R(t, 'iconNode', 8);
	gt();
	var u = fr();
	Xe(u, () => ({
		...dr[i()],
		...r,
		width: s(),
		height: s(),
		class: (it(n()), it(a), kt(() => `tabler-icon tabler-icon-${n()} ${a.class ?? ''}`)),
		...(i() === 'filled' ? { fill: o() } : { 'stroke-width': l(), stroke: o() })
	}));
	var v = $(u);
	be(v, 1, c, me, (b, p) => {
		var h = Ie(() => _a(T(p), 2));
		let f = () => T(h)[0],
			g = () => T(h)[1];
		var C = re(),
			k = X(C);
		Ka(k, f, !0, (M, H) => {
			Xe(M, () => ({ ...g() }));
		}),
			L(b, C);
	});
	var d = A(v);
	le(d, t, 'default', {}), S(u), L(e, u), _e();
}
function vr(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			[
				'path',
				{
					d: 'M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z'
				}
			]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'brand-bluesky' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
function gr(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			[
				'path',
				{
					d: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'
				}
			]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'brand-github' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
function pr(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			['path', { d: 'M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' }],
			['path', { d: 'M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' }],
			['path', { d: 'M16.5 7.5v.01' }]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'brand-instagram' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
function hr(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			['path', { d: 'M8 11v5' }],
			['path', { d: 'M8 8v.01' }],
			['path', { d: 'M12 16v-5' }],
			['path', { d: 'M16 16v-3a2 2 0 1 0 -4 0' }],
			['path', { d: 'M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z' }]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'brand-linkedin' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
function mr(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			[
				'path',
				{ d: 'M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z' }
			],
			['path', { d: 'M10 9l5 3l-5 3z' }]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'brand-youtube' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
function br(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			['path', { d: 'M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' }],
			['path', { d: 'M11 13l9 -9' }],
			['path', { d: 'M15 4h5v5' }]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'external-link' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
function wr(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = [
			[
				'path',
				{ d: 'M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' }
			],
			['path', { d: 'M3 7l9 6l9 -6' }]
		];
	ve(
		e,
		ae({ type: 'outline', name: 'mail' }, () => a, {
			get iconNode() {
				return r;
			},
			children: (i, n) => {
				var o = re(),
					s = X(o);
				le(s, t, 'default', {}), L(i, o);
			},
			$$slots: { default: !0 }
		})
	);
}
var _r = F('<a><!></a>');
function ge(e, t) {
	const a = Q(t, ['children', '$$slots', '$$events', '$$legacy']),
		r = Q(a, ['href', 'tooltip', 'icon', 'iconSize']);
	let i = R(t, 'href', 8),
		n = R(t, 'tooltip', 8),
		o = R(t, 'icon', 8),
		s = R(t, 'iconSize', 8, 24);
	var l = _r();
	Xe(
		l,
		() => ({
			href: i(),
			target: '_blank',
			rel: 'noopener noreferrer',
			class:
				'tooltip-container group hover:text-accent relative text-white transition-colors duration-250 hover:text-gray-400',
			'data-tooltip': n(),
			...r
		}),
		void 0,
		void 0,
		void 0,
		'svelte-28bzi9'
	);
	var c = $(l);
	Sa(c, o, (u, v) => {
		v(u, {
			get size() {
				return s();
			}
		});
	}),
		S(l),
		L(e, l);
}
function yr(e) {
	const t = e - 1;
	return t * t * t + 1;
}
function ft(e) {
	const t = typeof e == 'string' && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || 'px'] : [e, 'px'];
}
function se(
	e,
	{ delay: t = 0, duration: a = 400, easing: r = yr, x: i = 0, y: n = 0, opacity: o = 0 } = {}
) {
	const s = getComputedStyle(e),
		l = +s.opacity,
		c = s.transform === 'none' ? '' : s.transform,
		u = l * (1 - o),
		[v, d] = ft(i),
		[b, p] = ft(n);
	return {
		delay: t,
		duration: a,
		easing: r,
		css: (h, f) => `
			transform: ${c} translate(${(1 - h) * v}${d}, ${(1 - h) * b}${p});
			opacity: ${l - u * f}`
	};
}
var xr =
	F(`<div class="fixed inset-0 z-10 mx-auto flex h-screen max-w-fit flex-col items-center justify-center pb-20 md:pb-0"><img class="mb-6 block w-72 max-w-9/12 rounded-full shadow-none transition-all duration-250 hover:shadow-lg hover:shadow-black/30" alt="Profile" src="https://avatars1.githubusercontent.com/u/15789924"/> <div class="flex flex-col items-center text-center font-normal text-white"><h1 class="mt-1 mb-0 text-4xl font-medium">Max Wilson</h1> <h2 class="mt-2 mb-1 text-2xl">Full Stack Developer</h2> <h3 class="mt-1 mb-8 text-base"><a href="https://hertilityhealth.com/" class="hover:font-bold">Hertility Health</a> • Fife,
				Scotland</h3></div> <div class="flex justify-between gap-6"><!> <!> <!> <!> <!> <!></div></div>`);
function Sr(e, t) {
	we(t, !0);
	let a = Ee(!1);
	Ae(() => ne(a, !0));
	var r = re(),
		i = X(r);
	{
		var n = (o) => {
			var s = xr(),
				l = $(s),
				c = A(l, 2),
				u = A(c, 2),
				v = $(u);
			ge(v, {
				href: 'mailto:max@maxwilson.co.uk',
				tooltip: 'max@maxwilson.co.uk',
				'aria-label': 'Email',
				get icon() {
					return wr;
				}
			});
			var d = A(v, 2);
			ge(d, {
				href: 'https://github.com/MaxJW',
				tooltip: 'MaxJW',
				'aria-label': 'Github',
				get icon() {
					return gr;
				}
			});
			var b = A(d, 2);
			ge(b, {
				href: 'https://linkedin.com/in/maxjwilson-1',
				tooltip: 'Max Wilson',
				'aria-label': 'LinkedIn',
				get icon() {
					return hr;
				}
			});
			var p = A(b, 2);
			ge(p, {
				href: 'https://bsky.app/profile/maxwilson.co.uk',
				tooltip: '@maxwilson.co.uk',
				'aria-label': 'Bluesky',
				get icon() {
					return vr;
				}
			});
			var h = A(p, 2);
			ge(h, {
				href: 'https://instagram.com/maxjwilson_/',
				tooltip: 'maxjwilson_',
				'aria-label': 'Instagram',
				get icon() {
					return pr;
				}
			});
			var f = A(h, 2);
			ge(f, {
				href: 'https://youtube.com/@MaxJW_',
				tooltip: '@MaxJW_',
				'aria-label': 'YouTube',
				get icon() {
					return mr;
				}
			}),
				S(u),
				S(s),
				oe(
					1,
					l,
					() => se,
					() => ({ duration: 1e3, y: -200, opacity: 0 })
				),
				oe(
					1,
					c,
					() => se,
					() => ({ delay: 300, duration: 1e3, y: -120, opacity: 0 })
				),
				oe(
					1,
					u,
					() => se,
					() => ({ delay: 525, duration: 1e3, y: 50, opacity: 0 })
				),
				L(o, s);
		};
		We(i, (o) => {
			T(a) && o(n);
		});
	}
	L(e, r), _e();
}
const kr = {
		adarma: { name: 'Adarma', icon: '/images/icon-images/adarma.png' },
		personal: { name: 'Personal', icon: '/images/icon-images/personal.png' },
		uod: { name: 'University of Dundee', icon: '/images/icon-images/UoD.png' },
		lettingweb: { name: 'Let Tech Solutions', icon: '/images/icon-images/LT.png' },
		craneware: { name: 'Craneware', icon: '/images/icon-images/CW.png' },
		book: { name: 'Book', icon: '/images/icon-images/personal.png' }
	},
	Mr = [
		{
			id: 'monch',
			title: 'Monch - Recipe Manager',
			languages: ['SvelteKit', 'Firebase', 'Stripe', 'TypeScript', 'Tailwind'],
			organizationKey: 'personal',
			link: 'https://monch.cooking/',
			featured: !0,
			notificationText: 'Featured',
			notificationColor: '#6256a5'
		},
		{
			id: 'fantasysteam',
			title: 'Fantasy Steam',
			languages: [
				'SvelteKit',
				'Firebase',
				'TypeScript',
				'Tailwind',
				'Cloudflare',
				'GitHub Actions'
			],
			organizationKey: 'personal',
			link: 'https://fantasysteam.com/',
			featured: !0,
			notificationText: 'Featured',
			notificationColor: '#00A1EF'
		},
		{
			id: 'mindful',
			title: 'Mindful Browsing Chrome Extension',
			languages: ['JavaScript', 'HTML', 'CSS'],
			organizationKey: 'personal',
			link: 'https://github.com/MaxJW/MindfulBrowsing-ChromeExtension'
		},
		{
			id: 'socket',
			title: 'Socket Platform',
			languages: ['Svelte', 'TypeScript', 'Ionic', 'Golang', 'Docker', 'AWS'],
			organizationKey: 'adarma',
			link: 'https://adarma.com/socket-soc-platform/'
		},
		{
			id: 'MRCV',
			title: 'MyRentalCV',
			languages: ['C#.NET', 'ASP.NET Razor', 'HTML', 'CSS', 'JavaScript'],
			organizationKey: 'lettingweb',
			link: 'https://new.myrentalcv.com/Login/Login'
		},
		{
			id: 'wedjeo',
			title: 'Wedding Jeopardy',
			languages: ['Svelte', 'HTML', 'CSS'],
			organizationKey: 'personal',
			link: 'https://github.com/MaxJW/WeddingJeopardy'
		},
		{
			id: 'photochallenge',
			title: 'Photo Challenges',
			languages: ['Svelte', 'Firebase', 'HTML', 'CSS'],
			organizationKey: 'personal',
			link: 'https://github.com/MaxJW/GroomsmaidPhotoChallenge'
		},
		{
			id: 'marvel',
			title: 'Upcoming Marvel Releases',
			languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
			organizationKey: 'personal',
			link: 'https://marvel.maxwilson.co.uk/'
		},
		{
			id: 'todo',
			title: '🥕 Carrotodo',
			languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
			organizationKey: 'personal',
			link: 'https://todo.maxwilson.co.uk/'
		},
		{
			id: 'ego',
			title: 'Egocentric Video Segmentation',
			languages: ['Python'],
			organizationKey: 'uod',
			link: 'https://github.com/MaxJW/Egocentric-Video-Segmentation'
		},
		{
			id: 'overturned',
			title: 'Overturned',
			languages: ['Unity', 'C#'],
			organizationKey: 'uod',
			link: 'https://github.com/MaxJW/Overturned-Game'
		},
		{
			id: 'craneware',
			title: 'Price Doctor',
			languages: ['Angular', 'JavaScript', 'MongoDB', 'HTML', 'CSS'],
			organizationKey: 'craneware',
			link: 'https://github.com/MaxJW/Craneware-Project'
		},
		{
			id: 'openair',
			title: 'OpenAirBooking',
			languages: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
			organizationKey: 'uod',
			link: 'https://github.com/MaxJW/OpenAirBooking'
		},
		{
			id: 'fullstackreactnative',
			title: 'FullStack React Native Book',
			languages: ['React Native'],
			organizationKey: 'book',
			link: 'https://github.com/MaxJW/FullStack-React-Native'
		},
		{
			id: 'maxwilson',
			title: 'Personal Website',
			languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
			organizationKey: 'personal',
			link: 'https://github.com/MaxJW/maxjw.github.io'
		},
		{
			id: 'startpage',
			title: 'Browser Start-up Page',
			languages: ['HTML', 'CSS', 'JavaScript'],
			organizationKey: 'personal',
			link: 'https://start.maxwilson.co.uk/'
		},
		{
			id: 'tfthelper',
			title: 'TFT Game Helper',
			languages: ['HTML', 'CSS', 'JavaScript'],
			organizationKey: 'personal',
			link: 'https://maxwilson.co.uk/tfthelper/'
		},
		{
			id: 'mototek',
			title: 'Mototek - Company Website',
			languages: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
			organizationKey: 'personal',
			link: 'https://maxwilson.co.uk/mototek/'
		}
	];
function Tr(e) {
	const t = kr[e.organizationKey];
	return {
		link: e.link,
		title: e.title,
		languages: e.languages,
		source: t.name,
		icon: t.icon,
		image: `/images/repo-images/${e.id}.png`,
		image_webp: `/images/repo-images/${e.id}.webp`,
		notif_text: e.notificationText || '',
		notif_colour: e.notificationColor || '',
		featured: e.featured || !1
	};
}
function $r(e) {
	return e.map(Tr);
}
var Er = F(
		'<div class="absolute top-3 left-3 z-20 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg"> </div>'
	),
	Ar = F('<span class="bg-primary/20 rounded-full px-2 py-1 text-xs text-blue-300"> </span>'),
	zr = F(
		'<div><!> <div class="absolute top-3 right-3 z-20 rounded-full bg-gray-900/80 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"><!></div> <a target="_blank" rel="noopener noreferrer" class="block h-full"><div class="relative aspect-[4/2] overflow-hidden"><picture><source type="image/webp"/> <source type="image/png"/> <img class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async"/></picture> <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div></div> <div><div class="mb-3 flex items-center gap-2"><img class="h-4 w-4 rounded-sm"/> <span class="text-xs font-medium text-gray-400"> </span></div> <h3> </h3> <div class="-ml-0.5 flex flex-wrap gap-2"></div></div></a></div>'
	);
function vt(e, t) {
	let a = R(t, 'link', 8),
		r = R(t, 'title', 8),
		i = R(t, 'languages', 8),
		n = R(t, 'source', 8),
		o = R(t, 'icon', 8),
		s = R(t, 'image', 8),
		l = R(t, 'image_webp', 8),
		c = R(t, 'notif_text', 8, ''),
		u = R(t, 'notif_colour', 8, ''),
		v = R(t, 'variant', 8, 'compact');
	var d = zr(),
		b = $(d);
	{
		var p = (K) => {
			var j = Er(),
				U = $(j, !0);
			S(j),
				fe(() => {
					Be(j, `background-color: ${u() ?? ''}`), Z(U, c());
				}),
				L(K, j);
		};
		We(b, (K) => {
			c() && K(p);
		});
	}
	var h = A(b, 2),
		f = $(h);
	br(f, { class: 'h-4 w-4 text-gray-300', size: 24 }), S(h);
	var g = A(h, 2),
		C = $(g),
		k = $(C),
		M = $(k),
		H = A(M, 2),
		x = A(H, 2);
	S(k), ya(2), S(C);
	var _ = A(C, 2),
		E = $(_),
		N = $(E),
		z = A(N, 2),
		D = $(z, !0);
	S(z), S(E);
	var P = A(E, 2),
		G = $(P, !0);
	S(P);
	var B = A(P, 2);
	be(B, 5, i, me, (K, j) => {
		var U = Ar(),
			ce = $(U, !0);
		S(U), fe(() => Z(ce, T(j))), L(K, U);
	}),
		S(B),
		S(_),
		S(g),
		S(d),
		fe(() => {
			he(
				d,
				1,
				`group relative h-full cursor-pointer overflow-hidden rounded-xl border transition-all duration-300
	${v() === 'featured' ? 'border-gray-700 bg-gray-900/50 hover:border-gray-500 hover:bg-gray-800/50' : 'border-gray-800 bg-gray-900/30 hover:border-gray-600 hover:bg-gray-800/40'}
	shadow-lg backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/5`
			),
				q(g, 'href', a()),
				q(M, 'srcset', l()),
				q(H, 'srcset', s()),
				q(x, 'src', s()),
				q(x, 'alt', `${r() ?? ''} Screenshot`),
				he(_, 1, `${v() === 'featured' ? 'p-6' : 'p-4'} flex flex-grow flex-col justify-between`),
				q(N, 'src', o()),
				q(N, 'alt', `${n() ?? ''} logo`),
				Z(D, n()),
				he(
					P,
					1,
					`mb-2 leading-tight font-semibold text-white transition-colors duration-200 group-hover:text-blue-300
				${v() === 'featured' ? 'text-xl' : 'text-base'}`
				),
				Z(G, r());
		}),
		L(e, d);
}
var Cr = F('<div class="featured-card svelte-88fzye"><!></div>'),
	Lr = F('<div class="project-item svelte-88fzye"><!></div>'),
	Nr =
		F(`<div><h2 class="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">Projects & Work</h2> <p class="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-300">A collection of projects I've built across different technologies and industries, from
				healthcare platforms to personal tools.</p> <div class="mb-12 grid gap-8 md:grid-cols-2"></div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div></div>`),
	Ir = F(
		'<section class="relative mx-auto max-w-7xl px-6 py-20 sm:px-8" id="projects"><!></section>'
	);
function Pr(e, t) {
	we(t, !0);
	let a = Ee(!1),
		r;
	const i = $r(Mr),
		n = i.filter((u) => u.featured),
		o = i.filter((u) => !u.featured);
	Ae(() => {
		const u = new IntersectionObserver(
			([v]) => {
				v.isIntersecting && ne(a, !0);
			},
			{ threshold: 0.1 }
		);
		return r && u.observe(r), () => u.disconnect();
	});
	var s = Ir(),
		l = $(s);
	{
		var c = (u) => {
			var v = Nr(),
				d = A($(v), 4);
			be(
				d,
				21,
				() => n,
				me,
				(p, h, f) => {
					var g = Cr(),
						C = $(g);
					vt(
						C,
						ae(() => T(h), { variant: 'featured' })
					),
						S(g),
						oe(
							1,
							g,
							() => se,
							() => ({ y: 50, duration: 600, delay: 400 + f * 100 })
						),
						L(p, g);
				}
			),
				S(d);
			var b = A(d, 2);
			be(
				b,
				21,
				() => o,
				me,
				(p, h, f) => {
					var g = Lr(),
						C = $(g);
					vt(
						C,
						ae(() => T(h), { variant: 'compact' })
					),
						S(g),
						oe(
							1,
							g,
							() => se,
							() => ({ y: 30, duration: 500, delay: 600 + f * 50 })
						),
						L(p, g);
				}
			),
				S(b),
				S(v),
				oe(
					1,
					v,
					() => se,
					() => ({ y: 50, duration: 800, delay: 200 })
				),
				L(u, v);
		};
		We(l, (u) => {
			T(a) && u(c);
		});
	}
	S(s),
		et(
			s,
			(u) => (r = u),
			() => r
		),
		L(e, s),
		_e();
}
var Or =
	F(`<section class="relative mx-auto max-w-4xl px-6 py-20 sm:px-8" id="about"><h2 class="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">About Me</h2> <div class="mx-auto max-w-3xl text-center"><p class="mb-6 text-lg leading-relaxed text-gray-300">I'm a passionate Full Stack Developer with experience building everything from sleek web
			applications to complex enterprise platforms. Currently working at <a class="font-medium text-blue-400 hover:underline" href="https://hertilityhealth.com/" target="_blank">Hertility Health</a>, I love creating solutions that make a real impact!</p> <p class="mb-6 text-lg leading-relaxed text-gray-300">My journey spans across various technologies and industries, from cybersecurity platforms at
			Adarma to rental management systems at Let Tech Solutions. I enjoy the challenge of learning
			new technologies and turning complex problems into elegant, user-friendly solutions.</p></div></section>`);
function Hr(e) {
	var t = Or();
	L(e, t);
}
const Rr = [
	{
		title: 'Full Stack Developer',
		company: 'Hertility Health',
		companyUrl: 'https://hertilityhealth.com/',
		period: 'Oct 2024 - Present',
		location: 'London Area, United Kingdom · Remote',
		description:
			"Building innovative healthcare technology solutions, focusing on women's health and fertility. Working with modern web technologies to create accessible and user-friendly platforms that make a real impact in healthcare.",
		technologies: ['React', 'TypeScript', 'React Native', 'PostgreSQL', 'Docker', 'AWS', 'Figma']
	},
	{
		title: 'Software Engineer',
		company: 'Adarma Security',
		companyUrl: 'https://adarma.com/',
		period: 'Mar 2021 - Sep 2024',
		location: 'Edinburgh, Scotland, United Kingdom · Hybrid',
		description:
			"Key contributor to the Socket platform, Adarma's flagship SOC platform. Developed the Socket Mission plugin for threat scenario prioritisation and led development of Chronos, a serverless AWS application automating critical IT processes. Managed a team of developers while contributing to migration from Splunk Phantom to in-house solutions.",
		technologies: [
			'Svelte',
			'TypeScript',
			'Golang',
			'Python',
			'PostgreSQL',
			'AWS',
			'Docker',
			'Figma'
		]
	},
	{
		title: 'Software Developer',
		company: 'Let Tech Solutions',
		companyUrl: 'https://www.lettechsolutions.com/',
		period: 'Jun 2020 - Mar 2021',
		location: 'Edinburgh, Scotland, United Kingdom - On Site',
		description:
			'Developed and launched the MyRentalCV platform using ASP.NET to streamline property search for tenants and enhance matching for agents. Integrated Vimeo for property video management and translated Adobe XD designs into responsive web interfaces.',
		technologies: ['C# .NET', 'ASP.NET', 'JavaScript', 'HTML/CSS', 'Adobe XD', 'Vimeo API']
	}
];
var Fr = F('<span class="bg-primary/20 rounded-full px-3 py-1 text-xs text-blue-300"> </span>'),
	Dr = F(
		'<div class="relative flex items-center sm:justify-center"><div class="bg-primary absolute left-8 z-10 flex h-4 w-4 -translate-x-2/5 items-center justify-center rounded-full sm:left-1/2 sm:-translate-1/2"><div class="h-2 w-2 rounded-full bg-white"></div></div> <div><div class="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70"><h3 class="text-xl font-semibold text-white"> </h3> <a class="text-lg text-blue-400 hover:underline" target="_blank"> </a> <p class="mb-1 text-sm text-gray-400"> </p> <p class="mb-3 text-xs text-gray-500"> </p> <p class="mb-4 text-gray-300"> </p> <div></div></div></div></div>'
	),
	Wr = F(
		'<div><h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">Experience</h2> <div class="relative"><div class="from-primary to-secondary absolute top-0 left-8 h-full w-0.5 bg-gradient-to-b sm:left-1/2 sm:-translate-x-px"></div> <div class="space-y-8"></div></div></div>'
	),
	Br = F(
		'<section class="relative mx-auto max-w-4xl px-6 py-16 sm:px-8" id="experience"><!></section>'
	);
function Kr(e, t) {
	we(t, !0);
	let a = Ee(!1),
		r;
	Ae(() => {
		const s = new IntersectionObserver(
			([l]) => {
				l.isIntersecting && ne(a, !0);
			},
			{ threshold: 0.1 }
		);
		return r && s.observe(r), () => s.disconnect();
	});
	var i = Br(),
		n = $(i);
	{
		var o = (s) => {
			var l = Wr(),
				c = A($(l), 2),
				u = A($(c), 2);
			be(
				u,
				21,
				() => Rr,
				me,
				(v, d, b) => {
					var p = Dr(),
						h = A($(p), 2);
					he(
						h,
						1,
						`ml-16 w-full sm:ml-0 sm:w-5/12 ${b % 2 === 0 ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'}`
					);
					var f = $(h),
						g = $(f),
						C = $(g, !0);
					S(g);
					var k = A(g, 2),
						M = $(k, !0);
					S(k);
					var H = A(k, 2),
						x = $(H, !0);
					S(H);
					var _ = A(H, 2),
						E = $(_, !0);
					S(_);
					var N = A(_, 2),
						z = $(N, !0);
					S(N);
					var D = A(N, 2);
					he(D, 1, `flex flex-wrap gap-2 ${b % 2 === 0 ? 'sm:justify-end' : ''}`),
						be(
							D,
							21,
							() => T(d).technologies,
							me,
							(P, G) => {
								var B = Fr(),
									K = $(B, !0);
								S(B), fe(() => Z(K, T(G))), L(P, B);
							}
						),
						S(D),
						S(f),
						S(h),
						S(p),
						fe(() => {
							Z(C, T(d).title),
								q(k, 'href', T(d).companyUrl),
								Z(M, T(d).company),
								Z(x, T(d).period),
								Z(E, T(d).location),
								Z(z, T(d).description);
						}),
						oe(
							1,
							p,
							() => se,
							() => ({ x: b % 2 === 0 ? -50 : 50, duration: 600, delay: 300 + b * 100 })
						),
						L(v, p);
				}
			),
				S(u),
				S(c),
				S(l),
				oe(
					1,
					l,
					() => se,
					() => ({ y: 50, duration: 800, delay: 200 })
				),
				L(s, l);
		};
		We(n, (s) => {
			T(a) && s(o);
		});
	}
	S(i),
		et(
			i,
			(s) => (r = s),
			() => r
		),
		L(e, i),
		_e();
}
var Jr = F('<!> <!> <!>', 1),
	jr = F(
		'<div class="fixed inset-0 z-0"><!></div> <div class="pointer-events-none h-screen"></div> <div class="relative z-10"><!> <!> <!></div>',
		1
	);
function ti(e) {
	var t = jr(),
		a = X(t),
		r = $(a);
	or(r, {
		children: (l, c) => {
			var u = Jr(),
				v = X(u);
			lr(v, {});
			var d = A(v, 2);
			Sr(d, {});
			var b = A(d, 2);
			ur(b), L(l, u);
		},
		$$slots: { default: !0 }
	}),
		S(a);
	var i = A(a, 4),
		n = $(i);
	Hr(n);
	var o = A(n, 2);
	Kr(o, {});
	var s = A(o, 2);
	Pr(s, {}), S(i), L(e, t);
}
export { ti as component };
