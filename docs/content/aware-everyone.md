---
id: aware-everyone
title: Make sure that information that’s added to another part of the UI, that doesn’t have focus, is made aware for everyone
tags:
  - 4.1.3 AA
  - Content
  - Design
  - Tech
sidebar_label: Auto-updating content
---

### Description

Blind or low vision users with screen readers must be made aware of things that are happening in other parts of the UI that doesn’t have their focus. Depending on what kind of information and how the user should be alerted, make use of pre-defined aria-roles related to status messages or the more generic aria-live for regions where you can set the precise details you want with additional aria-attributes.

### Examples

- Use role=“status” when a product has been added to shopping cart or saved to a folder.
- Use role=“progressbar” for a progress bar that shows a user how far along she/he is in an upgrade.
- Use role="alert" and aria-busy="true" to indicate that the system is busy.

### Additional information

Don’t use too many status messages, it can be too chatty and the user might be constantly disrupted when trying to navigate your site.
