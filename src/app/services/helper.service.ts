import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
export interface IRole {
  role?: string;
  name?: string;
  uid?: string;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  role$ = new BehaviorSubject<IRole>({
    uid: undefined
  });

  roleRef = [
    {
      code: 'nguoimoi',
      name: 'Người mới'
    },
    {
      code: 'kigui',
      name: 'Kí Gửi'
    },
    {
      code: 'muaho',
      name: 'Mua Hộ'
    },
  ];

  constructor(
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private afauth: AngularFireAuth,
  ) { }

  async getToken() {
    const token = await (await this.afauth.currentUser).getIdToken();
    return token;
  }

  openSnackBar(message: string, duration: number) {
    this.snackBar.open(message, 'OK', {
      duration
    });
  }

  showSpinner(hide?: boolean) {
    hide ? this.spinner.hide() : this.spinner.show();
  }

  setRole(data: IRole) {
    this.role$.next(data);
  }

}
