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
      appleId: process.env.NOTORIZE_APPLE_ID,
      appleIdPassword: process.env.NOTORIZE_APPLE_ID_PASSWORD,
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
