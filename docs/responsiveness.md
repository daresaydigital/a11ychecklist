---
id: responsiveness
title: Make the design responsive
tags:
  - 1.4.10 AA
  - Layout
  - Design
  - Tech
sidebar_label: Responsiveness
---

## Make the design responsive so it can be displayed down to a width of 320 CSS pixels without horizontal scrolling 

Make sure that content can be presented without loss of information or functionality, and without the need of scrolling in two dimensions, i.e. that the content reflows so it's presented in one column. Being forced to scroll in reading direction significantly reduces reading comprehension. 

## What to do

- Avoid horizontal scrolling to about 320 CSS pixels width
- Use in first-hand responsive design
- Create an adapted mobile design if responsive design isn’t available
- Documents that are not a webpage should also be readable in a limited width

## Example

Design

![Example showing that a scroll bar should not stretch outside the window width](https://github.com/daresaydigital/a11ychecklist/blob/master/static/img/responsiveness.png?raw=true)

Code

```css
@media screen and (min-width: 320 px) {

}
```

## Exceptions

1. Content which requires two-dimensional layout: Images and video (do not cut them up and stack them, instead shrink them
2. Interfaces with toolbars to edit content where it's necessary to keep toolbars in view while manipulating content.

## Tips

You can simulate 320 CSS pixels by setting the browser window to 1280 px wide and then zooming the page content to 400%.

For content that are scrolled horizontally, the layout should work to a height of 256 CSS pixels (1024 px heigh, zoomed to 400%).

## Additional information

This requirement is connected to [guideline 1.4.4 A](# "Guidelines for criterion 1.4.4") (resize text up to 200%). If the text zooms with the UI you'll fulfill the 1.4.4 requirement as well. If you make adjustment to the text size per media query, make sure you don't make it too small, so it still becomes 200% from default (otherwise it must still be possible to also increase text size up to 200% of default).

## Related to

- [1.4.3 AA - Contrast (Minimum)](# "Guidelines for criterion 1.4.3")
- [1.4.4 A - Resize text](# "Guidelines for criterion 1.4.4")