import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'registration-container',
    styles: [`
.auth {
 height: 100%;
    }
    input {
      border-bottom: 1px solid lightgrey;
    }
    .ng-invalid.ng-dirty {
      border-bottom: 1px solid red;
    }
    form {
      width: 80%;
      border-radius: 2px;
      background-color: white;
      padding: 20px;
    }
    .inputs {
      height: 100%;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
    }
    .inputs div,
    .inputs input {
        width: 100%;
    }
    .inputs input {
        box-shadow: none;
        padding: .6em .5em;
    }
    label {
        display: block;
        text-align: left;
        margin: 0 auto .5em auto;
    }
    .link {
      color: lightblue;
    }
    .link:hover {
      background-color: transparent;
    }
    .title {
      font-size: 36px;
      font-weight: 300;
      text-transform: capitalize;
    }
    .error {
      color: red;
      right: 20px; 
}
`],
    template: `
<div class="auth row center-xs middle-xs">
  <form class="shadow-2" #regForm="ngForm" (submit)="register()" novalidate>
    <div class="inputs row center-xs middle-xs">
        <div>
            <label for="name" class="col-xs-8">Name</label>
            <input
                    class="col-xs-8"
                    type="text"
                    name="name"
                    id="name"
                    required
                    [(ngModel)]="user.name"
                    placeholder="Name"
                    #name="ngModel"
            >
            <div
                    [hidden]="name.valid || name.pristine && confirm"
                    class="error">
                name can't be empty
            </div>
        </div>
        <div>
            <label for="login" class="col-xs-8">Login</label>
            <input
                    class="col-xs-8"
                    type="text"
                    name="login"
                    id="login"
                    required
                    [(ngModel)]="user.login"
                    placeholder="Login"
                    #login="ngModel"
            >
            <div
                    [hidden]="login.valid || login.pristine && confirm"
                    class="error">
                login can't be empty
            </div>
        </div>
        <div>
            <label for="email" class="col-xs-8">Email</label>
            <input
                    class="col-xs-8"
                    type="email"
                    name="email"
                    id="email"
                    required
                    [(ngModel)]="user.email"
                    placeholder="Email"
                    #email="ngModel"
            >
            <div
                    [hidden]="email.valid || email.pristine && confirm"
                    class="error">
                email is invalid
            </div>
        </div>
        <div>
            <label for="password" class="col-xs-8">Password</label>
            <input
                    class="col-xs-8"
                    type="text"
                    name="password"
                    id="password"
                    required
                    [(ngModel)]="user.password"
                    placeholder="Password"
                    #password="ngModel"
            >
            <div
                    [hidden]="password.valid || password.pristine && confirm"
                    class="error">
                password can't be empty
            </div>
        </div>
        <div>
            <label for="repPswd" class="col-xs-8">Repeat Password</label>
            <input
                    class="col-xs-8"
                    type="password"
                    name="repPswd"
                    id="repPswd"
                    required
                    [(ngModel)]="user.repPswd"
                    placeholder="Repeate Password"
                    #repPswd="ngModel"
            >
            <div
                    [hidden]="(repPswd.valid || repPswd.pristine) && confirm"
                    class="error">
                repeat password can't be empty
            </div>
            <div
                    [hidden]="password === repPswd && confirm"
                    class="error">
                Password doesn't match the confirmation
            </div>
        </div>
      <div class="actions col-xs-12">
        <div class="row center-xs">
          <button type="submit" class="btn-light">
            Next
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
  `
})

export class Registration {
    user = {
        name: '',
        login: '',
        email:'',
        password: '',
        repPswd: ''
    };
    confirm:boolean = false;
    constructor(
        private router: Router,
    ){}

    register() {

    }
}