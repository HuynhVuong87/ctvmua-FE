import { Pipe, PipeTransform } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  constructor(
    private helper: HelperService
  ) { }
  transform(val: number | string, type: string): string {
    let statusName = '';
    switch (type) {
      case 'Role':
        statusName = this.helper.roleRef.find(x => x.code === val).name;
        break;
    }
    return statusName;

  }
}
