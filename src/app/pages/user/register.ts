// src/app/pages/user/register.ts
import { Signup, SignupModel } from "mftsccs-browser";
import { StatefulWidget } from "mftsccs-browser";
import { updateContent } from "../../routes/renderRoute.service";
import "./register.style.css";
export class register extends StatefulWidget {


  after_render(): void {
    let email = this.getElementById("email") as HTMLInputElement;
    let password = this.getElementById("password") as HTMLInputElement;
    let submitButton = this.getElementById("submit");
    console.log("this is the submit button eventeer", submitButton);

    if (submitButton) {
      submitButton.onclick = (ev: Event) => {
        ev.preventDefault();
        let signupData: SignupModel = {
          email: email.value,
          password: password.value,
        };

        console.log("this is the login clicked");
        Signup(signupData).then((output: any)=>{
            console.log("This is signup complete", output);
            updateContent('/login');
        }).catch((err)=>{
            let error = this.getElementById("error");
            if(error){
              error.innerHTML = err.message;
            }
        });
      }
    }
  }

  getHtml(): string {
    let html = "";
    html=`
      <div class="container">
        <h2>Create Your Account</h2>
        <form class="register-form">
          <div class="form-body">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required>
          </div>
          <div class="form-body">
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required>
          </div>
          <div class="form-body">
            <label for="verify-password">Repeat Password:</label>
            <input type="password" id="verify-password" placeholder="Re-enter your password" required>
          </div>
          <button class="btn btn-primary" id="submit">Submit</button>
          <div class="error-message" id="error"></div>
        </form>
      </div>
    `
    return html;
  }
}
