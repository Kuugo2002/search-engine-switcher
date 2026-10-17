// ==UserScript==
// @name         Bing / Google 搜索切换
// @namespace    https://github.com/local/search-engine-switcher
// @version      1.0.0
// @description  在 Bing 与 Google 搜索结果页之间切换，并保留当前搜索关键词。
// @author       You
// @include      /^https?:\/\/([a-z0-9-]+\.)*bing\.com\/search(?:[/?#].*)?$/
// @include      /^https?:\/\/([a-z0-9-]+\.)*google\.[a-z.]+\/search(?:[/?#].*)?$/
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const BUTTON_ID = 'search-engine-switcher-button';
  const isBing = /(^|\.)bing\.com$/i.test(location.hostname);
  const isGoogle = /(^|\.)google\.[a-z.]+$/i.test(location.hostname);

  if (!isBing && !isGoogle) return;

  function getSearchQuery() {
    const queryFromUrl = new URL(location.href).searchParams.get('q');
    if (queryFromUrl) return queryFromUrl.trim();

    const input = document.querySelector(
      isBing
        ? 'input[name="q"], #sb_form_q'
        : 'textarea[name="q"], input[name="q"]'
    );

    return input?.value?.trim() || '';
  }

  function switchSearchEngine() {
    const query = getSearchQuery();

    if (!query) {
      window.alert('没有找到当前搜索关键词。');
      return;
    }

    const targetUrl = new URL(
      isBing ? 'https://www.google.com/search' : 'https://www.bing.com/search'
    );
    targetUrl.searchParams.set('q', query);

    // 使用当前标签页跳转，不打开新窗口。
    location.assign(targetUrl.href);
  }

  function addButton() {
    if (document.getElementById(BUTTON_ID)) return;

    const button = document.createElement('button');
    button.id = BUTTON_ID;
    button.type = 'button';
    button.textContent = isBing ? '切换到 Google' : '切换到 Bing';
    button.title = `${button.textContent}（保留当前搜索关键词）`;
    button.setAttribute('aria-label', button.title);
    button.addEventListener('click', switchSearchEngine);

    Object.assign(button.style, {
      position: 'fixed',
      right: '24px',
      bottom: '24px',
      zIndex: '2147483647',
      padding: '11px 16px',
      border: '1px solid rgba(0, 0, 0, 0.16)',
      borderRadius: '999px',
      color: '#fff',
      background: isBing ? '#4285f4' : '#008373',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.22)',
      font: '600 14px/1.2 system-ui, -apple-system, "Segoe UI", sans-serif',
      cursor: 'pointer',
      opacity: '0.94',
      transition: 'transform 120ms ease, opacity 120ms ease, box-shadow 120ms ease'
    });

    button.addEventListener('mouseenter', () => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.28)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.opacity = '0.94';
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.22)';
    });

    button.addEventListener('focus', () => {
      button.style.outline = '3px solid rgba(66, 133, 244, 0.38)';
      button.style.outlineOffset = '2px';
    });

    button.addEventListener('blur', () => {
      button.style.outline = 'none';
    });

    document.body.appendChild(button);
  }

  addButton();
})();
