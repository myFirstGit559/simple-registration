import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'registration-container',
    styles: [`
.auth {
 height: 100%;
    }
    input {
      border-bottom: 1px solid lightgrey;
    }
    form.ng-invalid.ng-dirty {
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
      margin: 0 auto .5em auto;
      text-align: left;
    }
    .actions div {
        justify-content: flex-end;
    }
        
`],
    template: `
<div class="auth row center-xs middle-xs">
  <form class="shadow-2" [formGroup]="regForm" (ngSubmit)="register(regForm.valid)" novalidate>
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
                    formControlName="name"
                    placeholder="Name"
            >
            <div *ngIf="confirm"
                    [hidden]="regForm.controls.name.valid"
                    class="error col-xs-8">
                name field can't be empty
            </div>
        </div>
        <div>
            <label for="login" class="col-xs-8">Login</label>
            <input
                    class="col-xs-8"
                    type="text"
                    name="login"
                    id="login"
                    formControlName="login"
                    required
                    [(ngModel)]="user.login"
                    placeholder="Login"
            >
            <div *ngIf="confirm"
                    [hidden]="regForm.controls.login.valid"
                    class="error col-xs-8">
                login field can't be empty
            </div>
        </div>
        <div>
            <label for="email" class="col-xs-8">Email</label>
            <input
                    class="col-xs-8"
                    type="email"
                    name="email"
                    id="email"
                    formControlName="email"
                    required
                    [(ngModel)]="user.email"
                    pattern="^[a-zA-Z0-9_\.]+[a-zA-Z0-9\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$"
                    placeholder="Email"
            >
            <div *ngIf="confirm"
                 [hidden]="regForm.controls.email.valid"
                 class="error col-xs-8">
                email field can't be empty
            </div>
            <div *ngIf="confirm"
                    [hidden]="regForm.controls.email.valid || regForm.controls.email.pristine"
                    class="error col-xs-8">
                email field is invalid
            </div>
        </div>
        <div>
            <label for="password" class="col-xs-8">Password</label>
            <input
                    class="col-xs-8"
                    type="password"
                    name="password"
                    formControlName="password"
                    id="password"
                    minlength="8"
                    required
                    [(ngModel)]="user.password"
                    placeholder="Password"
            >
            <div *ngIf="confirm"
                    [hidden]="regForm.controls.password.valid"
                    class="error col-xs-8">
                password field can't be empty
            </div>
            <div *ngIf="confirm"
                    [hidden]="!regForm.controls.password.minlength"
                    class="error col-xs-8">
                password must be at least 4 characters long
            </div>
        </div>
        <div>
            <label for="repPswd" class="col-xs-8">Repeat Password</label>
            <input
                    class="col-xs-8"
                    type="password"
                    minlength="8"
                    name="repPswd"
                    formControlName="repPswd"
                    id="repPswd"
                    required
                    [(ngModel)]="user.repPswd"
                    placeholder="Repeate Password"
            >
            <div *ngIf="confirm"
                    [hidden]="regForm.controls.repPswd.valid"
                    class="error col-xs-8">
                repeat password field can't be empty
            </div>
            <div *ngIf="confirm"
                    [hidden]="user.password === user.repPswd"
                    class="error col-xs-8">
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

export class Registration implements OnInit {
    public regForm: FormGroup;
    user = {
        name: '',
        login: '',
        email:'',
        password: '',
        repPswd: ''
    };
    ngOnInit() {
        this.regForm = this._fb.group(this.user);
    }
    confirm:boolean = false;
    constructor(
        private router: Router,
        private _fb: FormBuilder
    ){}

    register(isValid: boolean) {
       if(!isValid){
           this.confirm = !isValid;
       } else {
           this.confirm = false;
           this.router.navigate(['','confirmation']);
       }
    }
}