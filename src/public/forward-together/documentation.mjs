import './system-search.js';

export function initExamples(root) {
  const button = root.querySelector('[data-draft]');
  button?.addEventListener('click', () => {
    root.querySelector('[data-draft-status]').textContent = 'Draft saved for this example.';
  });

  const form = root.querySelector('[data-field-example]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const input = form.elements.workspace;
    const valid = Boolean(input.value.trim());
    input.setAttribute('aria-invalid', String(!valid));
    input.setAttribute('aria-describedby', valid ? 'name-hint' : 'name-hint field-status');
    form.querySelector('[role="status"]').textContent = valid
      ? 'This name is ready to use.' : 'Enter a workspace name.';
    if (!valid) input.focus();
  });
}

const search = document.querySelector('system-search');
document.querySelector('[data-search]').addEventListener('click', () => search.show());
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (!search.dialog.open) search.show();
  }
});
initExamples(document);
