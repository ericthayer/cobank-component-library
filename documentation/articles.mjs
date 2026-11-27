// Authored HTML fragments. Each section heading also appears in the page outline.
export const articles = {
  '/foundations/': [
    ['Choose a foundation', 'children'],
    ['Start with a reading order', '<p>Take a document request. A member needs to see which file to provide, when it is due and how to send it. Give that sequence a clear heading, an adjacent instruction and one primary action. Apply color after the sequence works in plain text.</p>'],
    ['Review the result', '<ul><li>At a narrow width, does the instruction still appear before the action?</li><li>With color removed, can you distinguish an outstanding request from a received document?</li><li>Can someone find the next step by moving through headings and links?</li></ul>']
  ],
  '/foundations/color/': [
    ['Editorial palette', 'palette'],
    ['Assign a job to each color', '<p>Use Midnight for text on light surfaces and Cloud for a quiet section background. Evergreen supports emphasis and links. On a Growth button, use Midnight text. Reserve the strongest accent for the next action in the task.</p><p>These values describe the public site. For a product implementation, map the role to the semantic token in your installed theme.</p>'],
    ['Communicate status', '<p>Pair a status color with a precise word. “Received” tells a member that the upload finished. “In review” means someone has begun reviewing it. Keep the label visible in grayscale and when a custom theme overrides the color.</p>']
  ],
  '/foundations/type-and-space/': [
    ['Reading order', '<div class="specimen"><small>Document request</small><strong>Proof of insurance</strong><p>Upload the declaration page that lists the insured property.</p></div><p>Use the task as the heading. Keep the supporting instruction close enough that a reader can tell which action it belongs to.</p>'],
    ['Layout at different widths', '<p>Keep related controls in a single reading column. At wider sizes, move supporting guidance into a second column only if the tab order and reading order still make sense.</p><p>Let labels wrap. Use flexible gaps between groups and preserve the full field label when a page is zoomed.</p>'],
    ['A fluid spacing example', 'spacing-code']
  ],
  '/components/': [
    ['Forms and actions', 'children'],
    ['Compose a short task', '<p>For a workspace name, pair one labeled text field with a save button. Put validation next to the field and confirmation after the action. Add another control only when it represents a separate member decision.</p>'],
    ['Library reference', '<p>The examples here use native HTML so you can inspect their behavior. Check the component API and theme for the version your product ships before adopting an example.</p><a class="reference-link" href="https://state-of-agrikit.netlify.app/deck/">Explore the Agrikit reference ↗</a>']
  ],
  '/components/buttons/': [
    ['Interactive example', 'button-demo'],
    ['Usage', '<p>Lead with a verb and include the object when there is room for doubt. “Save draft” and “Send request” are different commitments. Give the action that advances the current task the strongest visual emphasis.</p><p>Use a link for navigation to another page. A button is appropriate when someone changes the current state, opens a dialog or submits a form.</p>'],
    ['Native markup', 'button-code'],
    ['Keyboard and feedback', '<p>Tab to the example and press Space or Enter. Focus stays on the button and the status announces the result. A production save should confirm success only after the write succeeds and preserve entered data when it fails.</p>']
  ],
  '/components/text-fields/': [
    ['Interactive example', 'field-demo'],
    ['Label and hint', '<p>Give the control a persistent label. Place format instructions next to the field before someone starts typing. Use a placeholder only for an optional example.</p>'],
    ['Native markup', 'field-code'],
    ['Validation', '<p>Try submitting the empty example, then enter a name and submit again. The message names the repair and the field retains what you typed. Validate on a meaningful boundary, such as submit, so the first keystroke does not immediately appear to be a mistake.</p>']
  ],
  '/workflows/': [
    ['In the field', 'children'],
    ['Frame the decision', '<p>Write one sentence together: “After a member sends a document, they can tell who has it and whether they need to act.” Use it to settle design disagreements and define what to test.</p>'],
    ['Give the handoff an owner', '<dl><dt>Design</dt><dd>Show the start, the confirmation and the recovery path in one flow.</dd><dt>Content</dt><dd>Name each state using language a member would recognize.</dd><dt>Engineering</dt><dd>Identify which events the system can actually confirm. Bring a working example to review.</dd></dl>']
  ],
  '/workflows/task-review/': [
    ['Set up the task', '<p>Give a participant a realistic sample document. Ask them to find where to send it and explain what they expect to happen afterward. Keep identifying member information out of the example.</p>'],
    ['Run the walkthrough', '<ol><li>Let the participant read the request in their own words. Record the first action they attempt.</li><li>Introduce a recoverable problem, such as the wrong file format. Watch whether they can fix it without starting over.</li><li>After confirmation, ask who acts next. Record their answer before explaining the intended flow.</li></ol>'],
    ['Record the decision', '<div class="specimen"><small>Example review note</small><strong>Keep the receipt on screen.</strong><p>The participant looked for the file name after uploading. Add it to the receipt and repeat the task with a different document.</p></div><p>Assign the follow-up to one person. Keep the observation, proposed change and retest together so the next reviewer can trace the decision.</p>']
  ],
  '/resources/': [
    ['Choose your field guide', 'children'],
    ['Bring the team together', '<p>Use the same task across disciplines. The designer brings the flow, the developer brings a working slice and the content creator brings language for each state. Compare the three at the point where a member needs to decide what to do next.</p><a class="reference-link" href="/workflows/task-review/">Run a task review →</a>']
  ],
  '/resources/designers/': [
    ['Map the member journey', '<p>Sketch how someone arrives, what information they already have and what confirms completion. For a document request, include the member returning later to check its status.</p>'],
    ['Choose the building blocks', '<p>Start with the <a href="/foundations/type-and-space/">reading order</a>. Select a <a href="/components/">control</a> for each decision. Sketch a narrow viewport and a long label before polishing the wide layout.</p>'],
    ['Share the handoff', '<ul><li>Annotate where focus lands after a validation error.</li><li>Pair each asynchronous state with its member-facing message.</li><li>Call out any behavior the library does not already supply.</li></ul><a class="reference-link" href="https://design.cobank.net/">Open internal design documentation ↗</a>']
  ],
  '/resources/developers/': [
    ['Check the contract', '<p>Confirm which Agrikit version the product has installed. Check its documented entry points, supported states and peer dependencies before adding a component. Use the engineering reference to find the current library guidance.</p><a class="reference-link" href="https://state-of-agrikit.netlify.app/deck/">Open the Agrikit engineering reference ↗</a>'],
    ['Build a thin slice', '<p>Wire one <a href="/components/text-fields/">labeled field</a> to a <a href="/components/buttons/">submit action</a>. Model the pending, success and failure states. Keep the entered value available for a retry and prevent duplicate submissions while a request is in flight.</p>'],
    ['Verify the interaction', '<ul><li>Complete the task using only the keyboard.</li><li>Test with a narrow viewport and a long member-entered name.</li><li>Simulate a failed request and retry. Verify which state the member sees after returning to the page.</li></ul>']
  ],
  '/resources/content/': [
    ['Name the action', '<p>Read the label out loud with the object: “Send document” tells the member what will leave their hands. Match that wording in the heading, button and confirmation.</p>'],
    ['Write the states together', '<dl><dt>Waiting</dt><dd>“Sending your document…”</dd><dt>Success</dt><dd>“Document received. Your loan team will review it.”</dd><dt>Recoverable error</dt><dd>“We couldn’t send the file. Check your connection and try again.”</dd></dl>'],
    ['Check the promise', '<p>Ask engineering which event triggers the message. If the system only confirms receipt, save “approved” for the later decision. Test the copy in context during a <a href="/workflows/task-review/">task review</a>.</p><a class="reference-link" href="https://design.cobank.net/">Open internal design documentation ↗</a>']
  ]
};
