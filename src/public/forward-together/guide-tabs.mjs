export function initGuideTabs(root) {
  const list = root.querySelector('[data-guide-tabs]');
  const tabs = [...list.querySelectorAll('a')];
  const panels = tabs.map(tab => root.getElementById(tab.hash.slice(1)));
  const outline = [...root.querySelectorAll('[data-guide-outline-panel]')];

  function select(index) {
    tabs.forEach((tab, position) => {
      const active = index === position;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[position].hidden = !active;
    });
    outline.forEach(link => {
      link.hidden = link.dataset.guideOutlinePanel !== panels[index].id;
    });
  }

  function syncLocation() {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return select(0);
    }
    const target = root.getElementById(id);
    const index = panels.findIndex(panel => target && panel.contains(target));
    const revealTarget = index !== -1 && target !== panels[index] && panels[index].hidden;
    select(index === -1 ? 0 : index);
    if (revealTarget) target.scrollIntoView();
  }

  function activate(index) {
    select(index);
    if (window.location.hash !== tabs[index].hash) {
      window.history.pushState(null, '', tabs[index].hash);
    }
  }

  list.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    const panel = panels[index];
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;

    tab.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activate(index);
    });

    tab.addEventListener('keydown', event => {
      let next;
      switch (event.key) {
        case 'ArrowLeft': next = (index + tabs.length - 1) % tabs.length; break;
        case 'ArrowRight': next = (index + 1) % tabs.length; break;
        case 'Home': next = 0; break;
        case 'End': next = tabs.length - 1; break;
        case ' ': next = index; break;
        default: return;
      }
      event.preventDefault();
      activate(next);
      tabs[next].focus();
    });
  });

  syncLocation();
  window.addEventListener('hashchange', syncLocation);
}

initGuideTabs(document);
