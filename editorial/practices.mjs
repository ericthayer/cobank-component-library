const practices = [
  {
    id: 'collaboration', label: 'Collaboration', title: 'Read the same field.',
    body: 'Before a team sketches a screen, walk through one real task together. A designer, an engineer and a member specialist will each notice a different part of the same problem.',
    artifact: `<dl class="field-notes">
      <div><dt>Member specialist</dt><dd>“People call to ask whether we received their document.”</dd></div>
      <div><dt>Engineer</dt><dd>“We know when the upload finishes and when review begins.”</dd></div>
      <div><dt>Designer</dt><dd>“Let’s show those as two distinct moments.”</dd></div>
    </dl>`
  },
  {
    id: 'communication', label: 'Communication', title: 'Give every state a name.',
    body: 'Agree on the words a member will see while the flow is still on paper. A good status names what happened, who acts next and whether the member needs to do anything.',
    artifact: `<figure class="message-study">
      <figcaption>Writing a document receipt</figcaption>
      <p><small>First draft</small><s>Submission processed.</s></p>
      <p><small>Member-facing copy</small><strong>Document received.</strong> Your loan team will review it. You can close this page.</p>
    </figure>`
  },
  {
    id: 'outcomes', label: 'Building the right things', title: 'Test the decision before the build.',
    body: 'Put the smallest useful version in someone’s hands. Watch where they hesitate and use that moment to decide what earns a place in the release.',
    artifact: `<dl class="decision-notes">
      <div><dt>Ask</dt><dd>“You just uploaded a document. What would you do now?”</dd></div>
      <div><dt>Observe</dt><dd>Can the person explain who has the document and who acts next?</dd></div>
      <div><dt>Decide</dt><dd>If they try uploading it again, revise the receipt and repeat the task.</dd></div>
    </dl>`
  }
];

export function renderPractice({ id, label, title, body, artifact }) {
  return `<section class="practice practice--${id}" aria-labelledby="practice-${id}">
    <div class="practice-copy"><p class="eyebrow">${label}</p>
    <h2 id="practice-${id}">${title}</h2><p>${body}</p></div>
    <div class="practice-example">${artifact}</div>
  </section>`;
}

export function editorialPractices() {
  return {
    name: 'editorial-practices',
    transformIndexHtml(html) {
      return html.replace(/<section\b(?=[^>]*\bid="resources")/, tag => practices.map(renderPractice).join('\n') + '\n' + tag);
    }
  };
}
