/**
 * Generate Ghostty themes from iTerm2 color schemes.
 * To use this script, place all `.itermcolors` files in a folder named `itermcolors` in the same directory as this script.
 * Run the script using `deno run --allow-read --allow-write generate.ts`.
 * The generated themes will be saved in the same directory as this script.
 */

import { join } from 'jsr:@std/path';
import { parse as parseXML } from 'jsr:@libs/xml';

// Path to the folder containing iTerm2 color schemes
const INPUT_DIR = './itermcolors';

// Output directory for Ghostty themes
const OUTPUT_DIR = './';

// Prefix with credits
const PREFIX = '# Based on Monokai Pro iTerm2 color scheme, made by Monokai. https://monokai.pro/iterm';

interface ITermColors {
	plist: {
		dict: {
			key: string[];
			dict: {
				key: string;
				string?: string[];
				real: string[];
			}[];
		};
	};
}

/**
 * Convert RGB values to hex string
 */
function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (n: number) =>
		Math.round(n * 255)
			.toString(16)
			.padStart(2, '0');

	return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Convert iTerm color scheme to Ghostty theme
 * @param name Theme name
 * @param xml Content of .itermcolors file
 */
function convertTheme(name: string, xml: string) {
	const parsed = parseXML(xml) as unknown as ITermColors;
	const dict = parsed.plist.dict;

	const colors: Record<string, string> = {};
	for (let i = 0; i < dict.key.length; i++) {
		const key = dict.key[i];

		const colorDict = dict.dict[i];
		if (!colorDict) continue;

		const r = parseFloat(colorDict.real[3]);
		const g = parseFloat(colorDict.real[2]);
		const b = parseFloat(colorDict.real[1]);
		colors[key] = rgbToHex(r, g, b);
	}

	const theme = [
		`# ${name}`,
		PREFIX.trim(),
		'',
		'window-colorspace = srgb',
		`palette = 0=${colors['Ansi 0 Color']}`,
		`palette = 1=${colors['Ansi 1 Color']}`,
		`palette = 2=${colors['Ansi 2 Color']}`,
		`palette = 3=${colors['Ansi 3 Color']}`,
		`palette = 4=${colors['Ansi 4 Color']}`,
		`palette = 5=${colors['Ansi 5 Color']}`,
		`palette = 6=${colors['Ansi 6 Color']}`,
		`palette = 7=${colors['Ansi 7 Color']}`,
		`palette = 8=${colors['Ansi 8 Color']}`,
		`palette = 9=${colors['Ansi 9 Color']}`,
		`palette = 10=${colors['Ansi 10 Color']}`,
		`palette = 11=${colors['Ansi 11 Color']}`,
		`palette = 12=${colors['Ansi 12 Color']}`,
		`palette = 13=${colors['Ansi 13 Color']}`,
		`palette = 14=${colors['Ansi 14 Color']}`,
		`palette = 15=${colors['Ansi 15 Color']}`,
		`background = ${colors['Background Color']}`,
		`foreground = ${colors['Foreground Color']}`,
		`cursor-color = ${colors['Cursor Color']}`,
		`selection-background = ${colors['Selection Color']}`,
		`selection-foreground = ${colors['Selected Text Color']}`,
	].join('\n');

	return theme;
}

/**
 * Generate Ghostty themes from iTerm2 color schemes
 */
function generate() {
	for (const file of Deno.readDirSync(INPUT_DIR)) {
		if (!file.isFile) continue;
		if (!file.name.endsWith('.itermcolors')) continue;

		try {
			const themeName = file.name
				.replace(/[_()]/g, ' ')
				.replace(/Filter|\.itermcolors/g, '')
				.replace(/\s+/g, ' ')
				.trim();

			const fileData = Deno.readTextFileSync(join(INPUT_DIR, file.name));
			const theme = convertTheme(themeName, fileData);

			Deno.writeTextFileSync(join(OUTPUT_DIR, themeName), theme);
			console.log(`Converted: ${file.name}`);
		} catch (error) {
			console.error(`Error converting ${file.name}:`, error);
		}
	}
}

if (import.meta.main) {
	generate();
}
