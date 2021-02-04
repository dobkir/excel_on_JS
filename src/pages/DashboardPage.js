import { Page } from '@core/Page';
import { $ } from '@core/dom';
import { createRecordsTable } from './dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('div', 'dashboard').html(`
    <div class="dashboard">

      <div class="dashboard__header">
        <h1>Excel Dashboard</h1>
      </div>
      <!--/.dashboard__header-->

      <div class="dashboard__new">
        <div class="dashboard__viewport">
          <a class="dashboard__create" href="#excel/${now}">
            New <br /> table
          </a>
        </div>
        <!--/.dashboard__viewport-->
      </div>
      <!--/.dashboard__new-->

      <div class="dashboard__table dashboard__viewport">
        ${createRecordsTable()}
      </div>
      <!--/.dashboard__table-->

    </div>
    <!--/.dashboard-->

    `)
  }
}
