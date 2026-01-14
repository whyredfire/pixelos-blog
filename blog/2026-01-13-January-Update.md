---
title: January 2026 Update
authors: [Ashwin, Aryan]
tags: [PixelOS, AOSP, A16, January]
---

Happy New Year from the PixelOS team! We hope that 2026 is off to a great start for all of you. Let’s get into this month’s update.

# January 2026 Update

For this release, we’ve merged the latest Android security tag, `android-security-16.0.0_r3`, on Android 16 QPR1.

Our main focus right now is Android 16 QPR2. We’re working to carry over everything we’ve added on top of AOSP so far, while also making sure our device roster stays in a good place. If you wish to follow along, you can keep track of our progress on our [Gerrit](https://review.pixelos.net).

<Banner src="https://raw.githubusercontent.com/PixelOS-CI/blog_assets/refs/heads/main/2026-01-15/banner.webp" />

## Smartspace is back!

Smartspace (the weather) is back on the lock screen. We had it before, but it was dropped for QPR1 because it needed to be updated. The implementation is drastically different than how it was previously, and this update brings it back with the newly reverse engineered version.

<DeviceScreenshot src="https://raw.githubusercontent.com/PixelOS-CI/blog_assets/refs/heads/main/2026-01-15/smartspace.webp"/>

## Other changes

A few more things that landed with this update:
- **Updater**: We’ve updated the app to better match how it looks on Pixel devices.
- **Volume panel**: you can now choose the volume panel position (including left side support).
- **SystemUI**: battery is clickable again.
- **Signal icons**: updated a set of mobile data icons (5G+, 4G+, LTE+) to the newer design.

As always, detailed changelogs can be found on our [changelogs page](https://blog.pixelos.net/changelogs).

We hope you liked our changes, feel free to give us feedback on our [Telegram Chat](https://t.me/pixeloschat).  

# Support our work

To support our work, consider making a donation at <https://blog.pixelos.net/docs/donate> to assist in covering our infrastructure expenses.

A heartfelt thank you to our sponsors from the last release: [aphirst](https://github.com/aphirst), [Ivomola](https://github.com/Ivomola), [LobodPl](https://github.com/LobodPl).

We’d also like to thank everyone contributing patches and reviews on Gerrit. Thanks for the support, and as always, thank you for supporting PixelOS.

Thanks, as always, for being part of PixelOS.
