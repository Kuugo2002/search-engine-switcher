# Bing / Google Search Switcher

[简体中文](README.md) | [English](README_EN.md)

This userscript lets you switch between Bing and Google search results while keeping the current search query. The switch happens directly in the current browser tab.

## Installation

1. Install the Tampermonkey browser extension.
2. Open the Tampermonkey dashboard and select **Create a new script**.
3. Remove the default content from the editor, then paste in the complete contents of `search-engine-switcher.user.js`.
4. Save the script.

## Usage

- On a Bing search results page, a button for switching to Google appears in the bottom-right corner.
- On a Google search results page, a button for switching to Bing appears in the bottom-right corner.
- Clicking the button opens the equivalent search in the current tab and preserves the original search query.

The script supports `www.bing.com`, `cn.bing.com`, and common regional Google domains.
