import { Component, OnInit } from '@angular/core';
import { Account } from '../shared'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // Store a reference to the enum
  statusType = Status;
  status = Status.LoggedIn;

  account:Account = {id: "1", username: "test"};

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.status = Status.LoggingIn;
  }

  doLogin(uid:string, password:string) {
    if (uid) {
      this.account.id = uid;
    }
    this.status = Status.LoggedIn;
  }

  signUp() {
    this.status = Status.SigningUp;
  }

  doSignUp(username:string, password:string, passwordConfirm: string) {
    if((!username) || (!password) || (!passwordConfirm)) {
      console.error("empty username|password|passwordConfirm");
      this.reset();
      return;
    }
    if (password !== passwordConfirm) {
      console.error("password !== passwordConfirm");
      this.reset();
      return;
    }
    this.account.username = username;
    this.status = Status.LoggedIn;
  }

  logout() {
    this.status = Status.NotLoggedIn;
  }

  reset() {
    this.status = Status.NotLoggedIn;
  }

}

enum Status {
  LoggedIn,
  NotLoggedIn,
  LoggingIn,
  SigningUp
}
