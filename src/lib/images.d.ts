declare module '*&enhanced' {
	import type { Picture } from 'vite-imagetools';

	const value: Picture;
	export default value;
}

declare module '*&inline' {
	const dataUrl: string;
	export default dataUrl;
}
