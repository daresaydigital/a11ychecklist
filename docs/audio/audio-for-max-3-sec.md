---
id: audio-for-max-3-sec
title: If audio or video (with audio) plays automatically, it should last for less than three seconds or there must be a way to pause/stop/mute it
tags:
  - 1.4.2 A
  - Audio
  - Video
  - Design
  - Tech
sidebar_label: Audio for max 3 sec
---

### Description

Audio interfers with screen readers and unexpected audio can be distracting and distruptive for people with cognitive disabilities.

If it doesn't automatically turn of then include a control for turning it off which is easy to access with assistive technologies (i.e. early in the page/reading order/tab order) and keyboard operable. It's important that the mechanism for controling the audio volume is independent from the overall system volume level, since the user still need to be able to hear the screen reader.

The recommendation is to not play sounds automatically, only when user request it.
