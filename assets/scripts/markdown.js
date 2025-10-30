const explanation = {
  "en": "Explanation",
  "fr": "Explication",
  "__page.language__": "Language Not found",
}

const advantages = {
  "en": "Advantages",
  "fr": "Avantages",
  "__page.language__": "Language Not found",
}

const disadvantages = {
  "en": "Disadvantages",
  "fr": "Inconvénients",
  "__page.language__": "Language Not found",
}

const next = {
  "en": "Next",
  "fr": "Suivant",
  "__page.language__": "Language Not found",
}

const previous = {
  "en": "Previous",
  "fr": "Précédent",
  "__page.language__": "Language Not found",
}

const copy = {
  "en": "Copy",
  "fr": "Copier",
  "__page.language__": "Language Not found",
}

const copied = {
  "en": "Copied",
  "fr": "Copié",
  "__page.language__": "Language Not found",
}

function getLanguage() {
  return document.querySelector('html').getAttribute('lang');
}

function toPreviousUrlFromATag(a) {
  return toPreviousUrl(a.innerHTML, a.getAttribute("href"));
}

function toPreviousUrl(title, url) {
  const res = document.createElement("a");
  res.href = url;
  const linkValue = title;
  res.classList.add('previous-section');
  const right = document.createElement("div");
  right.classList.add('right');
  const leftLabel = document.createElement("span");
  leftLabel.classList.add('label');
  leftLabel.innerHTML = previous[getLanguage()];
  right.appendChild(leftLabel);
  const leftTitle = document.createElement("span");
  leftTitle.innerHTML = linkValue;
  right.appendChild(leftTitle);
  const left = document.createElement("div");
  left.classList.add('left');
  left.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4l4 4"/></svg>';
  res.appendChild(left);
  res.appendChild(right);
  return res;
}

function toNextUrlFromATag(a) {
  return toNextUrl(a.innerHTML, a.getAttribute("href"));
}

function toNextUrl(title, url) {
  const res = document.createElement("a");
  res.href = url;
  const linkValue = title;
  res.classList.add('next-section');
  const left = document.createElement("div");
  left.classList.add('left');
  const leftLabel = document.createElement("span");
  leftLabel.classList.add('label');
  leftLabel.innerHTML = next[getLanguage()];
  left.appendChild(leftLabel);
  const leftTitle = document.createElement("span");
  leftTitle.innerHTML = linkValue;
  left.appendChild(leftTitle);
  const right = document.createElement("div");
  right.classList.add('right');
  right.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0l-4 4m4-4l-4-4"/></svg>';
  res.appendChild(left);
  res.appendChild(right);
  return res;
}

function formatCode() {
  document.querySelectorAll('pre.highlight').forEach((el) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('highlight');
    wrapper.appendChild(el.cloneNode(true));
    el.parentNode.replaceChild(wrapper, el);
  });
  document.querySelectorAll('p').forEach((p) => {
    if (p.innerHTML.endsWith('>cheatsheet</strong>')) {
      const ul = p.nextElementSibling;
      ul.classList.add('cheatsheet');
      ul.querySelectorAll('li').forEach((li) => {
        const label = li.innerHTML.split(/<br>/)[0];
        let code = li.innerHTML.split(/<br>/).slice(1).map(p => p.replaceAll('<', '&lt;').replaceAll('>', '&gt;')).join('<br/>');
        code = code.replace(/&lt;\/.+;/g, '');
        li.innerHTML = `<div class="li-wrapper"><span class="label">${label}</span><br/>` + code + '</div>';
      });
      p.remove();
      return;
    };
    if (p.innerHTML.endsWith('>next-section</strong>')) {
      const a = p.nextElementSibling.querySelector('a');
      p.nextElementSibling.remove();
      p.insertAdjacentElement("afterend", toNextUrlFromATag(a));
      p.remove();
      return;
    };
    if (p.innerHTML.endsWith('>previous-section</strong>')) {
      const a = p.nextElementSibling.querySelector('a');
      p.nextElementSibling.remove();
      p.insertAdjacentElement("afterend", toPreviousUrlFromATag(a));
      p.remove();
      return;
    };
    if (p.innerHTML.endsWith('>previous-next-sections</strong>')) {
      const links = p.nextElementSibling.querySelectorAll('a')
      const aPrevious = links[0];
      const aNext = links[1];
      p.nextElementSibling.remove();
      const div = document.createElement('div');
      div.classList.add('previous-next-sections');
      div.appendChild(toPreviousUrlFromATag(aPrevious));
      div.appendChild(toNextUrlFromATag(aNext));
      p.insertAdjacentElement("afterend", div);
      p.remove();
      return;
    };
    if (/>code-explication-(\d+)<\/strong>/.test(p.innerHTML)) {
      const nbElements = p.innerHTML.match(/>code-explication-(\d+)<\/strong>/)[1];
      let index = 0;
      let html = `<summary>${explanation[getLanguage()]}</summary>`;
      let nextElementSibling = p.nextElementSibling;
      while (index < nbElements) {
        html += nextElementSibling.outerHTML;
        nextElementSibling.innerHTML = '';
        nextElementSibling = nextElementSibling.nextElementSibling;
        index++;
      }
      div = document.createElement("details");
      div.innerHTML = html;
      p.insertAdjacentElement("afterend", div);
      p.remove();
      return;
    };
    if (p.innerHTML.endsWith('>method-signature</strong>')) {
      p.nextElementSibling.classList.add('method-signature');
      p.remove();
      return;
    };
    if (p.innerHTML.endsWith('>without-line-numbers</strong>')) {
      p.nextElementSibling.classList.add('without-line-numbers');
      p.remove();
      return;
    }
    if (p.innerHTML.endsWith('>code-tabs</strong>')) {
      p.nextElementSibling.classList.add('code-tabs');
      p.remove();
      return;
    }
    if (p.innerHTML.endsWith('>code-tabs-with-max-height</strong>')) {
      p.nextElementSibling.classList.add('code-tabs', 'max-height');
      p.remove();
      return;
    }
    if (p.innerHTML.endsWith('>diagram</strong>')) {
      p.nextElementSibling.classList.add('diagram');
      p.remove();
      return;
    }
    if (p.innerHTML.endsWith('>advantages-disadvantages</strong>')) {
      const el = document.createElement('div');
      el.classList.add('advantages-disadvantages');
      const advantagesEl = document.createElement('div');
      advantagesEl.classList.add('advantages');
      const avantagesTitle = document.createElement('p');
      avantagesTitle.classList.add('title');
      avantagesTitle.innerHTML = `${advantages[getLanguage()]}`;
      advantagesEl.appendChild(avantagesTitle);
      advantagesEl.appendChild(p.nextElementSibling);
      const disadvantagesEl = document.createElement('div');
      disadvantagesEl.classList.add('disadvantages');
      const disadvantagesTitle = document.createElement('p');
      disadvantagesTitle.classList.add('title');
      disadvantagesTitle.innerHTML = `${disadvantages[getLanguage()]}`;
      disadvantagesEl.appendChild(disadvantagesTitle);
      disadvantagesEl.appendChild(p.nextElementSibling.nextElementSibling);
      el.appendChild(advantagesEl);
      el.appendChild(disadvantagesEl);
      p.nextElementSibling.remove();
      p.insertAdjacentElement("afterend", el);
      p.remove();
      return;
    }
    if (/>alert-(info|warn|error)(-\d+)?<\/strong>/.test(p.innerHTML)) {
      const nbElements = p.innerHTML.match(/>alert-(info|warn|error)-(\d+)<\/strong>/) ? p.innerHTML.match(/>alert-(info|warn|error)-(\d+)<\/strong>/)[2] : 1;
      const alertType = p.innerHTML.match(/>alert-(info|warn|error)(-\d+)?<\/strong>/)[1];
      let index = 0;
      let html = '';
      let nextElementSibling = p.nextElementSibling;
      while (index < nbElements) {
        html += nextElementSibling.outerHTML;
        nextElementSibling.innerHTML = '';
        nextElementSibling = nextElementSibling.nextElementSibling;
        index++;
      }
      div = document.createElement("div");
      div.classList.add(`alert-${alertType}`);
      div.innerHTML = html;
      p.insertAdjacentElement("afterend", div);
      p.remove();
      return;
    }
  });
}

function formatCodeTabs() {
  document.querySelectorAll('.code-tabs').forEach((codeTabs) => {
    try {
      const isMaxHeight = codeTabs.classList.contains('max-height');
      const tabsContentsId = 'tas-contents-id-' + Date.now() + Math.floor(Math.random() * 100);
      let tabsLinks = `<div class="tab-links">
        <div class="tab-links-left">
          <div class="red-circle"></div>
          <div class="yellow-circle"></div>
          <div class="green-circle"></div>
        </div>
        <div class="tab-links-middle">
      `;
      let tabsContents = `<div class="tab-content-wrapper ${isMaxHeight ? 'max-height' : ''}">`;
      codeTabs.querySelectorAll('li').forEach((codeTab) => {
        const tabName = codeTab.querySelector('p').textContent;
        const tabId = tabName + '-' + tabsContentsId;
        let tabContent = codeTab.innerHTML;
        if (codeTab.querySelector('div')) tabContent = codeTab.querySelector('div').innerHTML;
        if (codeTab.querySelector('img')) tabContent = codeTab.querySelector('img').outerHTML;
        tabsLinks += `<button class="tab-link" onclick="openCode(event, '${tabId}', '${tabsContentsId}')">${tabName}</button>`;
        tabsContents += `<div id="${tabId}" class="tab-content">${tabContent}</div>`;
      });
      tabsLinks += `
        </div>
        <div class="tab-links-right">
          <button class="copy" onclick="onCodeTabsCopyButtonClick(event, '${tabsContentsId}')">${copy[getLanguage()]}</button>
        </div>
      </div>`;
      tabsContents + '</div>';
      codeTabs.outerHTML = `<div id="${tabsContentsId}">${tabsLinks}${tabsContents}</div>`;
      document.querySelector(`#${tabsContentsId} .tab-link`).click();
    } catch (error) {
      console.error(error);
    }
  });
}

function openCode(event, tabId, tabsContentsId) {
  try {
    const tabsContents = document.getElementById(tabsContentsId);
    tabsContents.querySelectorAll('.tab-content').forEach((tabContent) => {
      tabContent.style.display = 'none';
      tabContent.classList.remove('active-tab');
    });
    tabsContents.querySelectorAll('.tab-link').forEach((tabLink) => tabLink.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId).classList.add('active-tab');
    event.currentTarget.classList.add('active');
  } catch (error) {
    console.error(error);
  }
}

function generateRandom () {
  return Date.now() + Math.floor(Math.random() * 100);
}

function addCodeHeader() {
  try {
    document.querySelectorAll('div.highlight').forEach((div) => {
      try {
        const code = div.querySelector('code');
        const codeLineNumbers = (code.innerHTML.match(/\n/g) || []).length;
        if (codeLineNumbers < 3) return;
        const codeId = `code-id-${generateRandom()}`;
        code.id = codeId;
        div.insertAdjacentHTML('beforebegin', `
          <div class="code-header">
            <div class="code-header-left">
              <div class="red-circle"></div>
              <div class="yellow-circle"></div>
              <div class="green-circle"></div>
            </div>
           <div class="code-header-right">
              <button class="copy" onclick="onCodeCopyButtonClick(event, '${codeId}')">${copy[getLanguage()]}</button>
            </div>
          </div>
        `);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function addCodeLineNumbers() {
  try {
    document.querySelectorAll('pre.highlight').forEach((code) => {
      try {
        const codeLineNumbers = (code.innerHTML.match(/\n/g) || []).length;
        if (codeLineNumbers < 3) return;
        let codeLineNumbersHtml = '<div class="code-line-number">';
        for (let i = 1; i <= codeLineNumbers + 1; i++) {
          codeLineNumbersHtml += `<span>${i}</span>`;
        }
        codeLineNumbersHtml += '</div>';
        code.insertAdjacentHTML('afterbegin', codeLineNumbersHtml);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function onCodeTabsCopyButtonClick(event, tabsContentsId) {
  const tabsContents = document.getElementById(tabsContentsId);
  const activeTab = tabsContents.querySelector('.active-tab');
  onCodeCopyButtonClickCode(event, activeTab.querySelector('code'));
}

function onCodeCopyButtonClick(event, codeId) {
  onCodeCopyButtonClickCode(event, document.getElementById(codeId));
}

function onCodeCopyButtonClickCode(event, code) {
  const codeText = code.innerText || code.contentText;
  const textarea = document.createElement('textarea');
  textarea.textContent = codeText;
  textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
  document.body.appendChild(textarea);
  textarea.select();
  event.target.innerHTML = `${copied[getLanguage()]}!`;
  setTimeout(() => event.target.innerHTML = copy[getLanguage()], 1000);
  try {
    return document.execCommand('copy');
  } catch (error) {
    console.error('Copy to clipboard failed.', error);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

function addCodeShadowOnLeftScroll() {
  document.querySelectorAll('pre.highlight code').forEach((code) => {
    code.addEventListener('scroll', delay(handleCodeLeftScroll, 100));
  });
}

function handleCodeLeftScroll(event) {
  const target = event.target;
  if (target.scrollLeft !== 0) {
    target.classList.add('scroll-left');
  } else {
    target.classList.remove('scroll-left');
  }
}

function delay(fn, ms) {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(null, ...args), ms || 0);
  };
}

function formatShellCommands() {
  document.querySelectorAll('.shell-commands code').forEach((code) => {
    const lines = code.innerHTML.split(/\n/);
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('<span class="nv">$') || lines[i].startsWith('<span class="nv">#')) {
        lines[i] = `<span class="shell-command">${lines[i]}</span>`;
      } else {
        lines[i] = `<span class="shell-output">${lines[i]}</span>`;
      }
    }
    code.innerHTML = lines.join('\n');
  });
}

function highlightCodeLines() {
  document.querySelectorAll('[class*="highlight-line-code"]').forEach((codeWrapper) => {
    const code = codeWrapper.querySelector('code');
    const lines = code.innerHTML.split(/\n/);
    codeWrapper
      .getAttribute('class')
      .match(/highlight-line-code-([^ ]+)/)[1]
      .split('-')
      .forEach((line) => (lines[line - 1] = `<p class="line-highlight">${lines[line - 1]}</p>`));
    code.innerHTML = lines.join('\n');
  });
}

function resizeIFrame() {
  document.querySelectorAll('iframe').forEach(frame => {
    frame.style.width = "100%";
    frame.setAttribute('frameborder', '0');
  });
}

function addTutorialNextAndPreviousUrls() {
  const tutorial = document.querySelector('app-menu');
  if (!tutorial) return;
  const menu = JSON.parse(tutorial.getAttribute('menu'));
  const currentUrl = getCurrentUrl();
  const urls = [];
  menu.forEach((item) => {
    item.articles.forEach((article) => {
      urls.push({
        title: article.title,
        url: normalizeUrl(article.url),
        currentUrl: currentUrl == normalizeUrl(article.url),
      })
    })
  });
  const currentIndex = urls.findIndex((url) => url.currentUrl);
  if (currentIndex == -1) return;
  const subscribe = document.querySelector('app-subscribe');
  if (!subscribe) return;
  const previousUrl = currentIndex == 0 ? null : urls[currentIndex - 1];
  const nextUrl = currentIndex == urls.length - 1 ? null : urls[currentIndex + 1];
  if (previousUrl && nextUrl) {
    const div = document.createElement('div');
    div.classList.add('previous-next-sections');
    div.appendChild(toPreviousUrl(previousUrl.title, previousUrl.url));
    div.appendChild(toNextUrl(nextUrl.title, nextUrl.url));
    subscribe.insertAdjacentElement("beforebegin", div);
    return;
  }
  if (previousUrl) {
    subscribe.insertAdjacentElement('beforebegin', toPreviousUrl(previousUrl.title, previousUrl.url));
  }
  if (nextUrl) {
    subscribe.insertAdjacentElement('beforebegin', toNextUrl(nextUrl.title, nextUrl.url));
  }
}

function getCurrentUrl() {
  const url = window.location.pathname.replace(/\/+$/, '');
  return normalizeUrl(url);
}

function normalizeUrl(url) {
  if (!url) {
    return '';
  }
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

document.addEventListener('DOMContentLoaded', () => {
  formatCode();
  formatCodeTabs();
  addCodeLineNumbers();
  addCodeShadowOnLeftScroll();
  addCodeHeader();
  formatShellCommands();
  highlightCodeLines();
  resizeIFrame();
  addTutorialNextAndPreviousUrls();
});
