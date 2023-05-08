---
slug: blogs/2023-May-08
title: May 2023 Update
authors: [basamaryan, whyredfire]
tags: [AOSP, A13, May, update]
ogImage: 'https://cdn.discordapp.com/attachments/1057236325096493066/1105205630609932378/pixelos-ruby2.png'
twitterImage: 'https://cdn.discordapp.com/attachments/1057236325096493066/1105205630609932378/pixelos-ruby2.png'
---

Welcome back to another exciting PixelOS update! We're happy to bring you this month's update, full of many new features and improvements from our side. We have merged the latest May patch and listened to your feedback.

<head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8622741211890473"
     crossorigin="anonymous"></script>
</head>


![PixelOS](https://cdn.discordapp.com/attachments/1057236325096493066/1105205630609932378/pixelos-ruby2.png)

Starting with the launcher. We switched to the Paranoid launcher last month over rare instances where the launcher would cause the CPU to be stuck at the highest frequencies for some users, which led to excessive battery usage and heating. However, most users were disappointed with this change due to it not matching the same look and feel as on Pixel devices. This is why **we have decided to switch back to the Pixel launcher and the Pixel theme picker** while incorporating a potential fix for the issue.

Coming to our new additions for the month. Firstly, we have **added a toggle to control the haptic feedback on the back gesture**, which allows users will have the opportunity to use what best suits them. We have also **brought back the secure lock-screen feature**, which gives you additional security by preventing unauthorized access to the power button while your device is locked. Additionally, we have also **added a button to upload crash logs** directly to `Memocho` which makes bug reporting much more convenient. 

We have also **implemented the power-off-alarm service** from YAAP, which is a service that makes use of Qualcomm's power-off alarm feature. This allows your device to turn on before your alarm is set to ring, making sure you never miss an alarm. Additionally, thanks to Paranoid Android, we are happy to announce that **unlinked ringer streams are back**.

Coming to improvements, we have the App lock. **App lock is now much more accessible in settings**, having moved it to the advanced security section,  also incorporating a few additional fixes along with it. We have also made another improvement in the sound settings, by **reorganizing the page and moving certain customization into the 'Advanced sound settings' menu.**

For the apps that check SafetyNet, such as banking applications or games, we have **made a few improvements that should help in running these applications on your device**. The **pocket-mode style has also been updated** to keep up with the latest OxygenOS trends.

Finally, we have **updated the themed icons for the Pixel launcher**, as well as some minor HWUI improvements.

In summary, the May 2023 PixelOS Update includes the following updates:

- Merged the May security patch
- Switched back to the Pixel launcher (with a potential fix) and Pixel theme picker 
- Brought back unlinked ringer streams
- Brought back the option to hide the power menu on the secure lock screen
- Added option for haptic feedback on back gesture
- Added button to upload crash log to Memocho for easier bug reporting
- Minor improvements to SafetyNet/banking app hiding
- Made App Lock more properly accessible and fixed a few issues
- Update pocket mode style to the latest OxygenOS specs
- Re-organized the sound settings
- Introduced the power-off-alarm service
- Updated themed icons
- HWUI improvements
- Reduced log spam
- Other improvements

import InArticleAd from '../../src/components/InArticleAd'
<InArticleAd></InArticleAd>

We hope you enjoyed the project! Your donations help us maintain our infrastructure and continue our work. Please consider showing your support by donating! [Click Me](https://wiki.pixelos.net/docs/donate)