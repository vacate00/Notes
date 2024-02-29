export const hashToHex = (hash) => {
	const c = (hash & 0x00ffffff).toString(16);
	return `#${'00000'.substring(0, 6 - c.length) + c}`;
};

export const hashToRgb = (hash) =>
	`rgb(${(hash & 0xff0000) >> 16},${(hash & 0x00ff00) >> 8},${
		hash & 0x0000ff
	})`;

export const hashToHsl = (hash) => {
	const r = ((hash & 0xff0000) >> 16) / 255;
	const g = ((hash & 0x00ff00) >> 8) / 255;
	const b = (hash & 0x0000ff) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
		l * 100,
	)}%)`;
};
