module.exports = {
  packagerConfig: {
    executableName: "mmrc",
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
      name: "@electron-forge/maker-wix",
      config: {
        language: 1033,
        manufacturer: "Ricardo Peironcely",
        appUserModelId: "com.squirrel.mmrc.exe",
        exe: "mmrc",
        programFilesFolderName: "ModernModelRailwaysControler",
        shortcutFolderName: "Modern Model Railways Controler",
        name: "mmrc",
      },
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {
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
