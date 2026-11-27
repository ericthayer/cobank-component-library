import { guidePages } from './guide-catalog.mjs';
export const searchItems=Object.freeze([
  ...guidePages,
  {title:'Agrikit engineering reference',description:'Component library, delivery platform, and MCP tooling',href:'https://state-of-agrikit.netlify.app/deck/',keywords:'ai agents mcp toolkit release react agrikit',external:true}
]);
export function findSearchItems(query) {
  const normalized = query.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!normalized) return searchItems;

  const words = normalized.split(' ');
  const exact = [];
  const titleMatches = [];
  const otherMatches = [];

  for (const item of searchItems) {
    const title = item.title.toLowerCase();
    const text = `${title} ${item.description} ${item.keywords}`.toLowerCase();
    if (title === normalized) exact.push(item);
    else if (words.every(word => title.includes(word))) titleMatches.push(item);
    else if (words.every(word => text.includes(word))) otherMatches.push(item);
  }

  return [...exact, ...titleMatches, ...otherMatches];
}

export class SystemSearch extends HTMLElement {
  connectedCallback(){
    this.innerHTML='<dialog aria-labelledby="search-heading"><div class="dialog-head"><h2 id="search-heading">Find your next starting point.</h2><button class="close-dialog" aria-label="Close search">×</button></div><div class="search-input-wrap"><label class="eyebrow" for="system-query">SEARCH THE DESIGN SYSTEM</label><input id="system-query" type="search" placeholder="Try “tokens” or “components”" autocomplete="off"></div><ul class="search-results" aria-label="Search results"></ul><p class="dialog-key" aria-live="polite"></p></dialog>';
    this.dialog=this.querySelector('dialog');this.input=this.querySelector('input');
    this.querySelector('.close-dialog').addEventListener('click',()=>this.dialog.close());
    this.input.addEventListener('input',()=>this.render(this.input.value));
    this.input.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();this.querySelector('.search-results a')?.focus();}if(e.key==='Enter'){e.preventDefault();this.querySelector('.search-results a')?.click();}});
    this.querySelector('.search-results').addEventListener('click',e=>{if(e.target.closest('a'))this.dialog.close();});
    this.dialog.addEventListener('close',()=>{document.body.style.overflow='';this.opener?.focus();});
    this.dialog.addEventListener('click',e=>{if(e.target===this.dialog){const r=this.dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)this.dialog.close();}});
    this.render('');
  }
  render(query){
    const results = findSearchItems(query);
    this.querySelector('.search-results').innerHTML=results.length?results.map(item=>`<li><a href="${item.href}" ${item.external?'target="_blank" rel="noopener"':''}><span>${item.title}<small>${item.description}</small></span><span aria-hidden="true">${item.external?'↗':'→'}</span></a></li>`).join(''):'<li class="search-empty">No matching resources. Try “design”, “tokens”, or “Agrikit”.</li>';
    this.querySelector('.dialog-key').textContent=`${results.length} resource${results.length===1?'':'s'} · Enter to open the first result · Esc to close`;
  }
  show(){this.opener=document.activeElement;this.input.value='';this.render('');this.dialog.showModal();document.body.style.overflow='hidden';this.input.focus();}
}
customElements.define('system-search',SystemSearch);
