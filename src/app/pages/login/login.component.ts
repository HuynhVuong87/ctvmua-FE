import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';
  selected: string;
  constructor(
    private fbSV: FirebaseService,
    private helper: HelperService
  ) { }

  ngOnInit() {
  }

  googleSignIn() {
    console.log(this.selected);
    this.fbSV.googleSignIn(this.selected);
  }

  async loginNormal() {
    if (this.email !== '' && this.pass !== '') {
      this.fbSV.SignIn(this.email, this.pass);
    } else {
      this.helper.openSnackBar('Vui lòng nhập đủ các trường', 2500);
    }
  }

}
