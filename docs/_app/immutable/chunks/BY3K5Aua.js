import { b as p, E as t } from './CCxZTBg-.js';
import { B as c } from './DRMZ3B1H.js';
function E(r, s, ...a) {
	var e = new c(r);
	p(() => {
		const n = s() ?? null;
		e.ensure(n, n && ((o) => n(o, ...a)));
	}, t);
}
export { E as s };
