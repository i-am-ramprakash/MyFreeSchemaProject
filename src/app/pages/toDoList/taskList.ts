import { DeleteConceptById, GetCompositionListListener, NORMAL } from "mftsccs-browser";
import { StatefulWidget } from "mftsccs-browser";
import { getLocalUserId } from "../user/login.service";
import "./todolist.style.css";
export class list extends StatefulWidget {
  todolist: any;
  inpage: number = 10;
  page: number = 1;
  linker: string = "console_folder_s";


  before_render(): void {
    let userId: number = getLocalUserId();
    GetCompositionListListener("the_todolist", userId, this.inpage, this.page, NORMAL).subscribe((output: any) => {
      this.todolist = output;
      console.log("This is my list", output);
      this.render(); // Re-render to display tasks
    })
  }

  after_render() {
    let tableElement = this.getElementById("mainbody");
    if (tableElement) {
      tableElement.innerHTML = "";
      console.log("this is the element", tableElement, this.todolist.length);
      if (this.todolist.length > 0) {
        for (let i = 0; i < this.todolist.length; i++) {
          let id = this.todolist[i].the_todolist?.id;

          // If the ID is present and valid
          if (id) {
            let row = document.createElement("tr");
            let col1 = document.createElement("td");
            let col2 = document.createElement("td");
            let col3 = document.createElement("td");

            let nameValue = document.createElement("span");
            nameValue.innerHTML = this.todolist[i].the_todolist.name;

            let edit = document.createElement("button");
            edit.setAttribute("class", "btn btn-primary");
            edit.id = id;
            edit.innerHTML = "edit";

            let del = document.createElement("button");
            del.setAttribute("class", "btn btn-primary");
            del.id = id;
            del.innerHTML = "Delete";

            del.onclick = () => {
              if (id) {
                DeleteConceptById(id).then(() => {
                  console.log("this is the delete notify");
                });
              }
            }

            let that = this;
            edit.onclick = () => {
              that.data = {
                "id": edit.id,
                "name": nameValue,
              }
              console.log("this is the update click", that.data, that.subscribers);

              that.notify();
            }

            col1.append(nameValue);
            col2.append(del);
            col3.append(edit);

            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            tableElement.append(row);
          }
        }
      }
    }
  }

  getHtml(): string {
    let html = "";
    html = `<div>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody id= mainbody>

        </tbody>
        </table>
      </div>`
    return html;
  }
}
