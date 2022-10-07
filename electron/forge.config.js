module.exports = {
  packagerConfig: {
    name: "mmrc",
    executableName: "mmrc",
    appCopyright: "This application is open source. Help us in https://github.com/ricard2k/modern-model-railways-controler",
    osxSign: {
      identity: "Developer ID Application: Ricardo Peironcely (92G3X5LFNN)",
      "hardened-runtime": true,
      entitlements: "./electron/entitlements.plist",
      "entitlements-inherit": "./electron/entitlements.plist",
      "signature-flags": "library",
    },
    osxNotarize: {
      tool: "notarytool",
      appleApiKey: process.env.APPLE_NOTARIZE_KEY,
      appleApiKeyId: process.env.APPLE_NOTARIZE_KEY_ID,
      appleApiIssuer: process.env.APPLE_NOTARIZE_KEY_ISSUER,
    },
  },
  makers: [
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "./electron/icons/icon.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        icon: "./electron/icons/icon.icns",
        format: "ULFO",
        name: "mmrc",
      },
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "mmrc",
        exe: "mmrc",
        setupIcon: "./electron/icons/icon.ico",
        icon: "./electron/icons/icon.ico",
        makeVersionWinStoreCompatible: true,
      }
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "ricard2k",
          name: "modern-model-railways-controler",
        },
        prerelease: true,
        tagPrefix: "v",
      },
    },
  ],
};
