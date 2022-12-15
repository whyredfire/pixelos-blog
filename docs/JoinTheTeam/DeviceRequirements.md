---
sidebar_position: 3
slug: /JoinTheTeam/DeviceRequirements
---

# Device Requirements

- RemovePackages **MUST NOT** be used. This is a form of modifying the source code, and is not allowed.

- The device **MUST** have SELinux Enforcing to release builds.

- Release builds **MUST** be `userdebug` or `user`.

- Usage of `IGNORE_SELINUX_NEVERALLOWS := true` **MUST** be avoided.

- The device **MUST NOT** include any unused props, overlays or packages. This includes, but is not limited to, packages not being built, packages that don't work, obsolete packages, placebo 'tweaks' or any packages that will include unnecessary and/or unwanted features.

- On the encryption, the device **MUST** always have the encryption enabled and enforced as per stock. This is to ensure the security and privacy of the device's data.

- You **MUST** make the kernel sources for the ROM publicly available, unless the OEM does not provide them. Prebuilt kernels are **DISCOURAGED**.

- You **MUST NOT** overclock or do anything that can damage the device. This can cause instability and can harm the device.

:::note
Exceptions for some of the requirements maybe made for older phones and during beta stage. 
::: 