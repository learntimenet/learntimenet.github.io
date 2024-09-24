function toPreviousSectionLink(a) {
  const res = document.createElement("a");
  res.href = a.getAttribute("href");
  res.classList.add('previous-section');
  const right = document.createElement("div");
  right.classList.add('right');
  const leftLabel = document.createElement("span");
  leftLabel.classList.add('label');
  leftLabel.innerHTML = 'Précédant'
  right.appendChild(leftLabel);
  const leftTitle = document.createElement("span");
  leftTitle.innerHTML = a.innerHTML;
  right.appendChild(leftTitle);
  const left = document.createElement("div");
  left.classList.add('left');
  left.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4l4 4"/></svg>';
  res.appendChild(left);
  res.appendChild(right);
  return res;
}

function toNextSectionLink(a) {
  const res = document.createElement("a");
  res.href = a.getAttribute("href");
  res.classList.add('next-section');
  const left = document.createElement("div");
  left.classList.add('left');
  const leftLabel = document.createElement("span");
  leftLabel.classList.add('label');
  leftLabel.innerHTML = 'Suivant'
  left.appendChild(leftLabel);
  const leftTitle = document.createElement("span");
  leftTitle.innerHTML = a.innerHTML;
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
    if (p.innerHTML === '<strong>next-section</strong>') {
      const a = p.nextElementSibling.querySelector('a');
      p.nextElementSibling.remove();
      p.insertAdjacentElement("afterend", toNextSectionLink(a));
      p.remove();
      return;
    };
    if (p.innerHTML === '<strong>previous-section</strong>') {
      const a = p.nextElementSibling.querySelector('a');
      p.nextElementSibling.remove();
      p.insertAdjacentElement("afterend", toPreviousSectionLink(a));
      p.remove();
      return;
    };
    if (p.innerHTML === '<strong>next-previous-sections</strong>') {
      const links = p.nextElementSibling.querySelectorAll('a')
      const aPrevious = links[0];
      const aNext = links[1];
      p.nextElementSibling.remove();
      const div = document.createElement('div');
      div.classList.add('next-previous-sections');
      div.appendChild(toPreviousSectionLink(aPrevious));
      div.appendChild(toNextSectionLink(aNext));
      p.insertAdjacentElement("afterend", div);
      p.remove();
      return;
    };
    if (/<strong>code-explication-(\d+)<\/strong>/.test(p.innerHTML)) {
      const nbElements = p.innerHTML.match(/<strong>code-explication-(\d+)<\/strong>/)[1];
      let index = 0;
      let html = '<summary>Explications</summary>';
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
    if (p.innerHTML === '<strong>method-signature</strong>') {
      p.nextElementSibling.classList.add('method-signature');
      p.remove();
      return;
    };
    if (p.innerHTML === '<strong>without-line-numbers</strong>') {
      p.nextElementSibling.classList.add('without-line-numbers');
      p.remove();
      return;
    }
    if (p.innerHTML === '<strong>code-tabs</strong>') {
      p.nextElementSibling.classList.add('code-tabs');
      p.remove();
      return;
    }
    if (p.innerHTML === '<strong>alert-info</strong>') {
      p.nextElementSibling.classList.add('alert-info');
      p.remove();
      return;
    }
    if (/<strong>alert-info-(\d+)<\/strong>/.test(p.innerHTML)) {
      const nbElements = p.innerHTML.match(/<strong>alert-info-(\d+)<\/strong>/)[1];
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
      div.classList.add('alert-info');
      div.innerHTML = html;
      p.insertAdjacentElement("afterend", div);
      p.remove();
      return;
    }
    if (p.innerHTML === '<strong>alert-warn</strong>') {
      p.nextElementSibling.classList.add('alert-warn');
      p.remove();
      return;
    }
    if (p.innerHTML === '<strong>alert-error</strong>') {
      p.nextElementSibling.classList.add('alert-error');
      p.remove();
      return;
    }
  });
}

function formatCodeTabs() {
  document.querySelectorAll('.code-tabs').forEach((codeTabs) => {
    try {
      const tabsContentsId = 'tas-contents-id-' + Date.now() + Math.floor(Math.random() * 100);
      let tabsLinks = '<div class="tab-links">';
      let tabsContents = `<div class="tab-content-wrapper">`;
      codeTabs.querySelectorAll('li').forEach((codeTab) => {
        const tabName = codeTab.querySelector('p').textContent;
        const tabId = tabName + '-' + tabsContentsId;
        let tabContent = codeTab.innerHTML;
        if (codeTab.querySelector('div')) tabContent = codeTab.querySelector('div').innerHTML;
        if (codeTab.querySelector('img')) tabContent = codeTab.querySelector('img').outerHTML;
        tabsLinks += `<button class="tab-link" onclick="openCode(event, '${tabId}', '${tabsContentsId}')">${tabName}</button>`;
        tabsContents += `<div id="${tabId}" class="tab-content">${tabContent}</div>`;
      });
      tabsLinks += '</div>';
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
    tabsContents.querySelectorAll('.tab-content').forEach((tabContent) => (tabContent.style.display = 'none'));
    tabsContents.querySelectorAll('.tab-link').forEach((tabLink) => tabLink.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
  } catch (error) {
    console.error(error);
  }
}

function addCodeLineNumbers() {
  try {
    document.querySelectorAll('pre.highlight').forEach((code) => {
      try {
        const codeLineNumbers = (code.innerHTML.match(/\n/g) || []).length;
        let codeLineNumbersHtml = '<div class="code-line-number">';
        for (let i = 1; i <= codeLineNumbers; i++) {
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

function addCodeCopyIcon() {
  try {
    document.querySelectorAll('pre.highlight code').forEach((code) => {
      code.addEventListener("mouseleave", () => {
        copiedLabel = code.querySelector('.copy-code-icon-copied-label')
        if (!copiedLabel) return;
        copiedLabel.style.opacity = '0';
      });
      const codeId = 'code-id-' + Date.now() + Math.floor(Math.random() * 100);
      code.id = codeId;
      const copyCodeIconHtml = /* html */ `
        <span 
          title="copy code" 
          onclick="onCodeCopyIconClick(event, '${codeId}')" 
          class="code-copy-icon iconify" 
          data-icon="icon-park-solid:copy" 
          data-inline="false"
        ></span>
      `;
      code.insertAdjacentHTML('beforebegin', copyCodeIconHtml);
      code.style.position = 'relative';
    });
  } catch (error) {
    console.error(error);
  }
}

function onCodeCopyIconClick(event, codeId) {
  const code = document.getElementById(codeId);
  const codeText = code.innerText || code.contentText;
  const textarea = document.createElement('textarea');
  textarea.textContent = codeText;
  textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
  document.body.appendChild(textarea);
  textarea.select();
  const span = document.createElement('span');
  span.classList.add('copy-code-icon-copied-label');
  span.innerText = 'Copied';
  code.appendChild(span);
  setTimeout(() => (span.style.opacity = '0'), 1250);
  setTimeout(() => code.removeChild(span), 2000);
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

document.addEventListener('DOMContentLoaded', () => {
  formatCode();
  formatCodeTabs();
  addCodeLineNumbers();
  addCodeCopyIcon();
  addCodeShadowOnLeftScroll();
  formatShellCommands();
  highlightCodeLines();
  resizeIFrame();
});


