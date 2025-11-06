# Missing Font Files

The following font files are referenced but not present in the localized site:

## Inter Font Files (in `/assets/assets/`)
- `1ZFS7N918ojhhd0nQWdj3jz4w.woff2` (weight: 400, 600)
- `vQyevYAyHtARFwPqUzQGpnDs.woff2` (weight: 400)
- `5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2` (weight: 400)
- `EOr0mi4hNtlgWNn9if640EZzXCo.woff2` (weight: 400)
- `Y9k9QrlZAqio88Klkmbd8VoMQc.woff2` (weight: 400)
- `OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2` (weight: 400)
- `JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2` (weight: 400)
- `b6Y37FthZeALduNqHicBT6FutY.woff2` (weight: 400)
- `hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2` (weight: 600)
- `NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2` (weight: 600)
- `oYaAX5himiTPYuN8vLWnqBbfD2s.woff2` (weight: 600)
- `lEJLP4R0yuCaMCjSXYHtJw72M.woff2` (weight: 600)
- `cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2` (weight: 600)
- `A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2` (weight: 600)

## Satoshi Font Files (from FontShare, in `/assets/third-party-assets/fontshare/wf/...`)
- `LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2` (weight: 700)
- `TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2` (weight: 400)
- `P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2` (weight: 500)

## Impact

The site will function normally with fallback fonts (system fonts), but the typography may look slightly different from the original design. The browser will automatically use fallback fonts when these files are not found.

## Solution

To fully localize the site, you would need to:
1. Download the Inter font from Google Fonts or another source
2. Download the Satoshi font from FontShare (requires account/license)
3. Place the font files in the appropriate directories

Alternatively, you can ignore these 404 errors as they don't affect functionality.
