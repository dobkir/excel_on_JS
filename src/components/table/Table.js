import { ExcelComponent } from "@core/ExcelComponent";

export class Table extends ExcelComponent {
  static className = 'excel__table';
  toHTML() {
    return `
    <div class="row">
          <div class="row__info"></div>
          <!--/.row__info-->

          <div class="row__data">
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
            <div class="column">
              A
            </div>
            <div class="column">
              B
            </div>
            <div class="column">
              C
            </div>
          </div>
          <!--/.row__data-->
        </div>
        <!--/.row-->

        <div class="row">
          <div class="row__info">
            1
          </div>
          <!--/.row__info-->

          <div class="row__data">
            <div class="cell selected" contenteditable="">A1</div>
            <div class="cell" contenteditable="">B1</div>
            <div class="cell" contenteditable="">C1</div>
          </div>
          <!--/.row__data-->
        </div>
        <!--/.row-->

        <div class="row">
          <div class="row__info">
            2
          </div>
          <!--/.row__info-->

          <div class="row__data">
            <div class="cell" contenteditable="">A2</div>
            <div class="cell" contenteditable="">B2</div>
            <div class="cell" contenteditable="">C2</div>
          </div>
          <!--/.row__data-->
        </div>
        <!--/.row-->

    `
  };
}