import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  tag: boolean = false;
  userid: string;
  id: number;
  phone: string;

  buyerData = {
    id: this.id,
    userid: this.userid || '0',
    data: [{
      cp_name: '',
      cp_guige: '',
      cp_buycount: '',
      cp_danwei: '',
      cp_pinpai: '',
      freight: 0,
      tax: false,
      edate: '',
      note: '',
      gys: []
    }]
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: IndexService) { }

  ngOnInit() {
    this.buyerData.id = this.id = +this.route.snapshot.params['id'];
    this.buyerData.userid = this.userid = this.route.snapshot.params['userid'];
    this.phone = this.route.snapshot.params['phone'];
    console.log(this.id, this.userid, this.phone);
    this.service.getImgBuyerData(this.id).subscribe(res => {
      if (res.tag) {
        return;
      }
      console.log(res);
      this.buyerData.data = res.data;
      this.tag = true;
    });
  }

  pushMsg() {
    this.service.pushMsg(this.id, this.phone).subscribe(res => {
      if (res.data) {
        alert('保存成功!');
      } else {
        alert('保存失败,请联系管理员');
      }
    });
  }

  del(items, index) {
    if (!confirm('确定要删除此信息吗?删除后无法恢复!')) {
      return;
    }
    items.splice(index, 1);
    if (this.buyerData.data.length < 1) {
      this.addPro();
    }
  }

  submit(b) {
    console.log(this.buyerData);
    if (this.tag) {
      // update
      this.service.updateBuyer(this.buyerData).subscribe(res => {
        if (res.data) {
          if (b) this.pushMsg();
          alert('修改成功!');
        } else {
          alert('修改失败!,请联系管理员');
        }
      });
    } else {
      // add
      this.service.submitBuyer(this.buyerData).subscribe(res => {
        if (res.data) {
          if (b) this.pushMsg();
          alert('保存成功!');
          this.tag = true;
        } else {
          alert('保存失败!,请联系管理员');
        }
      });
    }
  }

  addPro() {
    this.buyerData.data.push({
      cp_name: '',
      cp_guige: '',
      cp_buycount: '',
      cp_danwei: '',
      cp_pinpai: '',
      freight: 0,
      tax: false,
      edate: '',
      note: '',
      gys: []
    });
  }

  addGYS(items) {
    items.push({
      gys_shouji: '',
      gys_xingming: '',
      gys_gongsi: '',
      gys_userid: '',
      gys_baojia: '',
      note: ''
    });
  }

}
