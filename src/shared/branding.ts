/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export const BRAND_NAME = "Nv";
export const BRAND_NAME_LOWER = "nv";
export const BRAND_TAGLINE = "A commanding Discord client mod with a sharp plugin stack.";
export const BRAND_TAGLINE_SHORT = "Sharp client mod. Large plugin stack.";
export const DEFAULT_CLOUD_BACKEND = "https://api.vencord.dev/";
export const BRAND_REPOSITORY_URL = "https://github.com/o9ll/nv";
export const BRAND_INSTALLER_REPOSITORY_URL = "https://github.com/o9ll/nvInstaller";
export const BRAND_DONATE_URL = "https://github.com/sponsors/o9ll";
export const UPSTREAM_DONATE_URL = "https://github.com/sponsors/Vendicated";
export const BRAND_TRANSLATE_URL = BRAND_REPOSITORY_URL;
export const BRAND_BADGES_URL = "https://badge.equicord.org/badges.json";
export const BRAND_DONOR_BADGE_PREVIEW_URL = "https://badge.equicord.org/donor.webp";
export const BRAND_SUPPORT_URL = `${BRAND_REPOSITORY_URL}/issues`;

const brandIconSvg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">',
    "<defs>",
    '<linearGradient id="bg" x1="14" y1="12" x2="112" y2="116" gradientUnits="userSpaceOnUse">',
    '<stop stop-color="#14090D"/>',
    '<stop offset="0.55" stop-color="#45111B"/>',
    '<stop offset="1" stop-color="#7B1E2E"/>',
    "</linearGradient>",
    '<linearGradient id="ring" x1="28" y1="22" x2="101" y2="104" gradientUnits="userSpaceOnUse">',
    '<stop stop-color="#F7E8C8"/>',
    '<stop offset="1" stop-color="#E9B45C"/>',
    "</linearGradient>",
    '<radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(47 38) rotate(42) scale(52 44)" gradientUnits="userSpaceOnUse">',
    '<stop stop-color="#EBAA52" stop-opacity=".34"/>',
    '<stop offset="1" stop-color="#EBAA52" stop-opacity="0"/>',
    "</radialGradient>",
    '<linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="100%">',
    '<stop offset="45%" stop-color="#facf73"/>',
    '<stop offset="55%" stop-color="#f17083"/>',
    "</linearGradient>",
    "</defs>",
    '<rect width="128" height="128" rx="30" fill="url(#bg)"/>',
    '<rect width="128" height="128" rx="30" fill="url(#glow)"/>',
    '<circle cx="64" cy="64" r="43" fill="none" stroke="url(#ring)" stroke-width="7.5"/>',
    '<g transform="translate(32 30) scale(0.0625)">',
    '<path fill="url(#Gradient)" d="M684 238c46 2 89 15 128 41 41 29 71 65 84 114 6 24 7 47 5 72-5 39-21 73-43 105-37 52-70 106-104 159-24 39-48 77-74 115-6 10-15 15-28 14-2-1-55-2-82-9-9-2-10-5-5-13l73-109 44-66 2-6h-20a206 206 0 0 1-102-31c-7-6-8-10-3-18l27-41 13-17c4-5 9-7 15-5 13 4 26 10 40 12 52 9 97-4 130-48 12-15 18-34 20-53 7-66-46-117-99-127-41-7-79 0-112 26-27 21-42 49-45 83-1 22-3 45-9 66-20 67-63 112-129 134-29 11-60 13-92 10-42-3-80-16-114-41a199 199 0 0 1-44-282 210 210 0 0 1 202-84 246 246 0 0 1 66 18c8 3 10 8 6 16l-16 31-9 19c-5 7-11 10-19 8-19-4-38-8-57-6-47 2-85 20-109 62-11 18-15 38-15 59 1 56 42 101 98 111 29 6 58 3 85-10 29-15 48-39 57-71 3-13 4-26 5-39 1-47 17-89 47-124 34-40 78-63 129-72 18-4 36-3 54-3z"/>',
    "</g>",
    "</svg>",
].join("");

export const BRAND_ICON_DATA_URL = `data:image/svg+xml;utf8,${encodeURIComponent(brandIconSvg)}`;
