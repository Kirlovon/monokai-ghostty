![Theme Preview](./images/preview.webp)

# Monokai for Ghostty 👻

Monokai themes for [Ghostty](https://github.com/mitchellh/ghostty) terminal. Generated from the official iTerm2 color schemes, made by [Monokai](https://monokai.com/).

<br>

> For quick installation, just put the content of the theme file into your terminal config.

| Theme                          | Preview                                             | File Path                                            |
| ------------------------------ | --------------------------------------------------- | ---------------------------------------------------- |
| Monokai Pro                    | ![Theme Preview](./images/MonokaiPro.webp)          | [Monokai Classic](./Monokai%20Classic)               |
| Monokai Classic                | ![Theme Preview](./images/MonokaiClassic.webp)      | [Monokai Pro](./Monokai%20Pro)                       |
| Monokai Pro (Filter Octagon)   | ![Theme Preview](./images/MonokaiProOctagon.webp)   | [Monokai Pro Octagon](./Monokai%20Pro%20Octagon)     |
| Monokai Pro (Filter Machine)   | ![Theme Preview](./images/MonokaiProMachine.webp)   | [Monokai Pro Machine](./Monokai%20Pro%20Machine)     |
| Monokai Pro (Filter Ristretto) | ![Theme Preview](./images/MonokaiProRistretto.webp) | [Monokai Pro Ristretto](./Monokai%20Pro%20Ristretto) |
| Monokai Pro (Filter Spectrum)  | ![Theme Preview](./images/MonokaiProSpectrum.webp)  | [Monokai Pro Spectrum](./Monokai%20Pro%20Spectrum)   |
| Monokai Pro Light              | ![Theme Preview](./images/MonokaiProLight.webp)     | [Monokai Pro Light](./Monokai%20Pro%20Light)         |
| Monokai Pro Light (Filter Sun) | ![Theme Preview](./images/MonokaiProLightSun.webp)  | [Monokai Pro Light Sun](./Monokai%20Pro%20Sun)       |

<br>

## Installation

> For quick installation, just put the content of the theme file into your terminal config.

1. Download archive wih themes from the [releases page]().

2. Extract theme files to the themes folder:

    - **MacOS:** `~/.config/ghostty/themes`.
    - **Linux (XDG):** `$XDG_CONFIG_DIR/ghostty/themes`.

3. Set the theme in your config file:
    ```ini
    theme = "Monokai Pro" # Or "Monokai Pro Spectrum", "Monokai Pro Light", etc
    ```

<br>

## Building from Source

1. Make sure you have [Deno](https://deno.land/) installed.

2. Copy the original `.itermcolors` theme files to the `itermcolors` folder in the repo directory. You can get them from the [Monokai Pro](https://monokai.pro/iterm) website.

3. Run the generation script:

    ```bash
    deno run --allow-read --allow-write generate.ts
    ```

<br>

## License

> These color schemes were converted from the original iTerm2 color schemes by [Monokai Pro](https://monokai.pro/iterm). All rights to the original color schemes and the **Monokai Pro** trademark are owned by Monokai.

Code and generated configs under MIT License _(see [LICENSE](./LICENSE) file)_
