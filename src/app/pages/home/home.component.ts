import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

interface Iroute {
  link: string;
  query?: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(
    public helper: HelperService,
    private router: Router
  ) {
    this.sub = this.helper.role$.subscribe(role => {
      if (role.uid) {
        const route: Iroute = {
          link: '/',
          query: {}
        };
        switch (role.role) {
          case 'kigui':
            route.link = '/don-nhap';
            route.query = {
              role: role.role
            };
            break;
        //   case 14:
        //     route.link = '/orders';
        //     route.query = {
        //       role: role.code
        //     };
        //     break;
        //     case 12:
        //       route.link = '/profile';
        //       break;
        //   case 4:
        //     route.link = '/orders';

        //     route.query = {
        //       role: role.code,
        //       type: 1
        //     };
        //     break;
        }
        console.log(route);
        this.router.navigate([route.link], { queryParams: route.query });
      }
    });
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
