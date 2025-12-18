---
title: November 2025 Release
authors: [InFeRnO]
tags: [PixelOS, AOSP, A16, November]
---

# November 2025 Update

It’s been a *while*. Long enough for some of you to wonder whether we disappeared into a wormhole, switched careers, or got kidnapped by upstream tags.  

But we’re still here, still sleep-deprived, and finally ready to ship this thing.

**PixelOS is now based on Android 16.**

<Banner src="https://github.com/PixelOS-CI/blog_assets/blob/main/2025-11-18/banner.png?raw=True" />

This update includes the latest security patches (from `android-16.0.0_r2`) along with all the adjustments required for the new platform changes.

Detailed changelogs can be viewed at <https://blog.pixelos.net/changelogs>.

## What’s new?

### Android 16 upgrade  
The entire codebase has been moved to Android 16. All previous features are still there, with the only new addition on top of the platform bump being KeyboxOverlay support.

### Say hello to **Gerrit**  
We finally have Gerrit now — yes, the real one.  
All patches should now be submitted there instead of using github pull requests.

You can find it at: **https://review.pixelos.net**

So if you've been waiting for an excuse to contribute properly… this is it.

## New device support
We are excited to officially add support for the following devices in this release:
- Redmi Turbo 4 Pro/POCO F7 (onyx)
- Redmi Turbo 3/POCO F6 (peridot) 
- Redmi Note 13 Pro 5G/POCO X6 5G (garnet)

### For unofficial builders
We’ve migrated our ROM-signing setup to follow the LineageOS structure. You can use [this](https://github.com/ItsVixano/android_vendor_lineage-priv_keys) template. 

### For self-builders who want to compile official devices
Roomservice is now available.

If you’d like to build PixelOS on your own, we now provide a complete and accurate roomservice configuration to make the process easier.

After syncing, simply use:

```bash
. build/envsetup.sh
lunch custom_codename-bp2a-userdebug
m pixelos
```

## Support our work

To support our work, consider making a donation at <https://blog.pixelos.net/docs/donate> to assist in covering our infrastructure expenses.

A heartfelt thank you to our sponsors from the last release: [aphirst](https://github.com/aphirst), [Ivomola](https://github.com/Ivomola), [LobodPl](https://github.com/LobodPl) and our beloved [kawaaii](https://github.com/hridaya2004).

Thanks for being part of PixelOS.


