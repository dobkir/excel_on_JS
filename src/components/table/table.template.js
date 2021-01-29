const CODES = {
  A: 65,
  Z: 90
};

function toCell(cell, col) {
  return `
  <div class="cell" contenteditable data-col="${col}"></div>
  `
};

function toColumn(col, index) {
  return `
  <div class='column' data-type="resizible" data-col="${index}">
    ${col}
    <div class='col__resize' data-resize="col"></div>
  </div>
  `
};

function createRow(index, content) {
  const resize = index ? '<div class="row__resize" data-resize="row"></div>' : ''
  return `
  <div class='row'>
    <div class="row__info">
    ${index ? index : ''}
    ${resize}
    </div>
    <div class="row__data">${content}</div>
  </div>
  `
};

function toChar(el, index) {
  return String.fromCharCode(CODES.A + index)
};

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
    rows.push(createRow(i + 1, cells))
  };

  return rows.join('')
}