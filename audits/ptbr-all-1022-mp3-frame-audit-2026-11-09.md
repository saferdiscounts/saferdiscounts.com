# PT-BR R2: complete MPEG frame structure audit (2026-11-09)

## Scope
Read all 511 normal and all 511 slow original MP3 objects directly from Cloudflare R2 bucket `saferdiscounts-audio`, under `ptbr/`, using the authoritative `ptbr/manifest.json` (195 basic + 316 advanced items).

## Procedure
For each original MP3, scan MPEG Layer III frame headers and frame lengths, including MPEG-2 Layer III at 24 kHz. Detect incomplete frames, residual trailing bytes after parsed frames, and files with zero recognized frames. Read in batches of 12 pairs with concurrent normal/slow retrieval.

## Findings
- **511/511 pairs inspected**.
- **1,022/1,022 MP3 files fetched and scanned**.
- **0** files with incomplete frames, trailing unparsed bytes, zero recognized frames, or fetch errors.
- **1,022/1,022** report 24,000 Hz sampling in parsed frames.

## Limitations
This is a **compressed-bitstream structural audit**. It does **not** decode audio into PCM, detect clipped samples, leading/trailing silence, unnatural pitch/time stretching, or establish the accuracy of Brazilian Portuguese pronunciation or the text/audio mapping. It does not replace linguistic review. The `scripts/ptbr_pcm_pair_audit.py` tool is available for decoded PCM inspection once original files are accessible to an FFmpeg execution environment, but **no PCM results on original R2 audio are claimed here**.

## Decision
No MP3 deletion or modification. Preserve normal/slow pairs and academy references until confirmed lexical or audio-quality defects are established.
