import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { switchMap, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';
import { UserService } from '../openapi';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user: Observable<firebase.User>;
  firstChoose: string;
  constructor(
    private afu: AngularFireAuth,
    private router: Router,
    private userSV: UserService,
    private helper: HelperService
  ) {
    afu.authState.subscribe(async user => {
      if (user !== null) {
        const obj = {
          uid: user.uid,
          name: user.displayName,
          photo: user.photoURL,
          role: ''
        };
        const claims = (await firebase.auth().currentUser.getIdTokenResult(true)).claims;

        if (claims.role) {
          if (claims.admin) {
            obj.name = 'ADMIN';
          }
          obj.role = claims.role;
          helper.setRole(obj);
        }
      } else {
        helper.setRole({ uid: undefined });
        this.router.navigate(['/login']);
      }
    });
  }

  async SignIn(email: string, password: string) {
    await this.afu.signInWithEmailAndPassword(email, password).catch(err => alert(err.code));
    this.router.navigate(['/']);
  }

  async googleSignIn(f: any) {
    this.firstChoose = f;
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await this.afu.signInWithPopup(provider);
    const claims = (await user.user.getIdTokenResult(true)).claims;
    if (claims.role) {
      this.router.navigate(['/']);
    } else {
      if (f) {
        this.userSV.createUser({
          displayName: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
          photoURL: user.user.photoURL,
          role: f
        }).subscribe(res => {
          console.log(res);
          this.router.navigate(['/']);
          setTimeout(() => {
            location.reload();
          }, 1000);
        });
      } else {
        this.logOut();
      }
    }
  }

  logOut() {
    this.afu.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
