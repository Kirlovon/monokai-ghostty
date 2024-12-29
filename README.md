![Theme Preview](./images/preview.webp)

# Monokai for Ghostty 👻

Monokai themes for [Ghostty](https://github.com/mitchellh/ghostty) terminal. Generated from the official iTerm2 color schemes, made by [Monokai](https://monokai.com/).

<br>

> [!TIP]
> For quick setup, copy the theme file content into your terminal config. For regular installation, follow the [instructions](#installation) below.

| Theme                                                                        | Preview                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------ |
| **Monokai Pro** <br> [Link to file](./Monokai%20Pro)                         | ![Monokai Pro](./images/MonokaiPro.webp)         |
| **Monokai Classic** <br> [Link to file](./Monokai%20Classic)                 | ![Monokai Classic](./images/MonokaiClassic.webp) |
| **Monokai Pro Octagon** <br> [Link to file](./Monokai%20Pro%20Octagon)       | ![Octagon](./images/MonokaiProOctagon.webp)      |
| **Monokai Pro Machine** <br> [Link to file](./Monokai%20Pro%20Machine)       | ![Machine](./images/MonokaiProMachine.webp)      |
| **Monokai Pro Ristretto** <br> [Link to file](./Monokai%20Pro%20Ristretto)   | ![Ristretto](./images/MonokaiProRistretto.webp)  |
| **Monokai Pro Spectrum** <br> [Link to file](./Monokai%20Pro%20Spectrum)     | ![Spectrum](./images/MonokaiProSpectrum.webp)    |
| **Monokai Pro Light** <br> [Link to file](./Monokai%20Pro%20Light)           | ![Light](./images/MonokaiProLight.webp)          |
| **Monokai Pro Light Sun** <br> [Link to file](./Monokai%20Pro%20Light%20Sun) | ![Sun](./images/MonokaiProLightSun.webp)         |

<br>

## Installation

1. Download archive wih themes from the [releases page](https://github.com/Kirlovon/monokai-ghostty/releases).

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

2. Copy the original `.itermcolors` theme files to the `itermcolors` folder in the repo directory. You can get them from the official [Monokai Pro](https://monokai.pro/iterm) website.

3. Run the generation script:

    ```bash
    deno run --allow-read --allow-write generate.ts
    ```

<br>

## License

> These themes are based on the original [Monokai Pro](https://monokai.pro/iterm) iTerm2 color schemes by [Monokai](https://monokai.com/). All rights to the original color schemes and the **Monokai Pro** trademark belong to original author.

The code and generated configurations are licensed under the MIT License _(see [LICENSE](./LICENSE) file)_
