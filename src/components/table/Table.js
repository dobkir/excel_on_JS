import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "@core/dom";

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  };

  toHTML() {
    return createTable(20)
  };

  // onClick(event) {
  //   console.log('click', event.target)
  // };

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      // const $parent = $resizer.$el.parentNode;  // bad solution!
      // const $parent = $resizer.$el.closest('column');  // better but not well
      const $parent = $resizer.closest('[data-type="resizible"]');  // solution to be used
      const coords = $parent.getCoords();

      document.onmousemove = ev => {
        const delta = ev.pageX - coords.right;
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px')
      };

      document.onmouseup = () => {
        document.onmousemove = null
      }

    }
  };

  // onMousemove() {
  //   console.log('mousemove')
  // };

  // onMouseup() {
  //   console.log('mouseup')
  // }
}