import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  imgBuyer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: IndexService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getImgBuyer(+params['id']))
      .subscribe(data => this.imgBuyer = data.data);
  }

  add(id, userid, phone) {
    this.router.navigate(['qadmin/add', { id, userid, phone }]);
  }

  updateImgBuyer() {
    if (!confirm('订单确定处理完成吗?')) {
      return;
    }
    this.service.updateImgBuyer(this.imgBuyer.id).subscribe(data => {
      if (data.data) {
        alert('修改成功');
      } else {
        alert('修改失败,请联系管理员');
      }
    });
  }

}
