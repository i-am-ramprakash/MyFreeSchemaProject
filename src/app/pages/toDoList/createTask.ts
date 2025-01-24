import { 
    CreateTheConnectionLocal, 
    LocalSyncData, 
    MakeTheInstanceConceptLocal, 
    PatcherStructure, 
    PRIVATE, 
    UpdateComposition 
  } from "mftsccs-browser";
  import { StatefulWidget } from "mftsccs-browser";
  import './todolist.style.css';
  import { getLocalUserId} from "../user/login.service";
  
  export class create extends StatefulWidget {

  
    /**
     * These are the events that user adds. These could be anything like populating the data to creating the data
     */
    after_render(): void {
      let userId: number = getLocalUserId();
      let order: number = 1;
      let name = this.getElementById("name") as HTMLInputElement;
      let id = this.getElementById("id") as HTMLInputElement;
      if (this.data) {
        name.value = this.data.name;
        id.value = this.data.id;
      }
  
      let submitButton = this.getElementById("submit");
      if (submitButton) {
        submitButton.onclick = (ev: Event) => {
          ev.preventDefault();
  
          if (id.value) {
            // Update existing task
            let patcherStructure: PatcherStructure = new PatcherStructure();
            patcherStructure.compositionId = Number(id.value);
            patcherStructure.patchObject = {
              "name": name.value,
            };
            UpdateComposition(patcherStructure);

          } 
          else {
            MakeTheInstanceConceptLocal("the_todolist", "", true, userId, PRIVATE)
              .then((mainconcept) => {
                MakeTheInstanceConceptLocal("name", name.value, false, userId, PRIVATE)
                  .then((concept) => {
                    CreateTheConnectionLocal(mainconcept.id, concept.id, mainconcept.id, order, "", userId)
                      .then(() => {
                        LocalSyncData.SyncDataOnline();
                        this.notify();
                    });
                });
            });
          }
  
          console.log("Submit button clicked");
        }
      }
    }
  
    /**
     * This is the main HTML component of our creating widget.
     * @returns returns a form that takes in name and task details.
     */
    getHtml(): string {
      let html = "";
      html =`<header class="welcome-header">
          <h1>Welcome!</h1>
          <p>Start by adding your task below:</p>
        </header>
        <div class="container">
          <form>
            <div>
              <input type=number id=id hidden>
              <div class="formbody">
                <label class="task-label">Task Name</label>
                <input type="text" id="name" placeholder="Enter your task name">
              </div>
              <button class="btn btn-primary" id="submit" type="submit">Submit</button>
            </div>
          </form>
        </div>`
        return html;
    }
  }
  