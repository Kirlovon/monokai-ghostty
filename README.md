![SDF](./preview.webp)

# Monokai Pro for Ghostty 👻

Monokai Pro theme for [Ghostty](https://github.com/mitchellh/ghostty) terminal. Generated from the original iTerm2 color schemes, made by [Monokai](https://monokai.com/) .

<br>

| Theme                          | File Path                                            |
| ------------------------------ | ---------------------------------------------------- |
| Monokai Classic                | [Monokai Classic](./Monokai%20Classic)               |
| Monokai Pro                    | [Monokai Pro](./Monokai%20Pro)                       |
| Monokai Pro (Filter Octagon)   | [Monokai Pro Octagon](./Monokai%20Pro%20Octagon)     |
| Monokai Pro (Filter Machine)   | [Monokai Pro Machine](./Monokai%20Pro%20Machine)     |
| Monokai Pro (Filter Ristretto) | [Monokai Pro Ristretto](./Monokai%20Pro%20Ristretto) |
| Monokai Pro (Filter Spectrum)  | [Monokai Pro Spectrum](./Monokai%20Pro%20Spectrum)   |
| Monokai Pro Light              | [Monokai Pro Light](./Monokai%20Pro%20Light)         |
| Monokai Pro Light (Filter Sun) | [Monokai Pro Light Sun](./Monokai%20Pro%20Sun)       |

<br>

## Installation

> For quick installation, just put content of the theme file into your settings in `~/.config/ghostty/config` file.

1. Download themes from the [releases page]().

2. Extract theme files to themes folder:

    - **MacOS:** `~/.config/ghostty/themes`.
    - **Linux (XDG):** `$XDG_CONFIG_DIR/ghostty/themes`.

3. Set theme in your `~/.config/ghostty/config`:
    ```ini
    theme = "Monokai Pro" # Or "Monokai Pro Spectrum", "Monokai Pro Light", etc
    ```

<br>

## Building from Source

1. Make sure you have [Deno](https://deno.land/) installed.

2. Copy original theme files to the `itermcolors/` folder.

    ```bash
    git clone https://github.com/yourusername/monokai-ghostty
    cd monokai-ghostty
    ```

3. Run the generation script:

    ```bash
    deno run --allow-read --allow-write generate.ts
    ```

<br>

## Credits

These color schemes are based on [Monokai Pro](https://monokai.pro/iterm) by Monokai. The original color schemes are property of Monokai and were converted from their iTerm2 format.

<br>

## License

The color schemes are property of Monokai. The conversion script is MIT licensed.
