import { storage } from "@core/utils";

function toHTML(key) {
  const model = storage(key);
  const id = key.split(':')[1];
  return `
    <li class="dashboard__record"> 
      <a href="#excel/${id}">${model.title}</a>
      <strong>
        ${new Date(model.openedDate).toLocaleDateString()}
        ${new Date(model.openedDate).toLocaleTimeString()}
      </strong>
    </li> 
  `
};

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue
    };
    keys.push(key)
  };
  return keys
};

export function createRecordsTable() {
  const keys = getAllKeys();
  if (!keys.length) {
    return `<p>No tables yet</p>`
  };
  return `
    <div class="dashboard__list--header">
      <span>Title</span>
      <span>Opening date</span>
    </div><!--/.dashboard__list--header-->

    <ul class="dashboard__list">
      ${keys.map(toHTML).join('')}
    </ul>
  `
}