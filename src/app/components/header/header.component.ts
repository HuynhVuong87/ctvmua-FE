import { Component, OnInit } from '@angular/core';
import { HelperService, IRole } from 'src/app/services/helper.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role: IRole;
  menu: {
    title: string;
    route: string;
    param?: { role: string }
  }[] = [];
  constructor(
    public helper: HelperService,
    public fbSV: FirebaseService
  ) { }

  ngOnInit(): void {
    this.helper.role$.subscribe(async user => {
      this.role = user;
      if (this.role.uid) {
        console.log(await this.helper.getToken());
        const role = this.role.role;
        switch (this.role.role) {
          case 'kigui':
            this.menu = [
              {
                route: 'don-nhap',
                title: 'Đơn nhập',
                param: {
                  role
                }
              },
              {
                route: 'san-pham',
                title: 'sản phẩm',
                param: {
                  role
                }
              }
            ];
            break;
          default:
            break;
        }
      }
    });
  }

}
