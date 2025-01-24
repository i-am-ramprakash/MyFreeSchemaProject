import { StatefulWidget } from 'mftsccs-browser';
import { create } from "./createTask";
import { list } from "./taskList";
import './todolist.style.css';

export class wrapper extends StatefulWidget {
  mount_child() {
    let widget1 = this.getElementById("widget1");
    let widget2 = this.getElementById("widget2");
    let creating = new create();
    let listing = new list();

    if (widget1) {
      this.childWidgets.push(creating);
      creating.mount(widget1);
    }
    if (widget2) {
      listing.dataChange((value: any) => {
        this.UpdateChildData(value, creating); // Sync task list data with the creation widget
      });
      this.childWidgets.push(listing);
      listing.mount(widget2);
    } 
  }



  getHtml(): string {
    let html = "";
    html = `
      <div class="wrapper-container">
        <div id="widget1" class="flex-container"></div>
        <div id="widget2" class="flex-container"></div>
      </div>`
      return html;
  }
}
