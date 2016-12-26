import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: IndexService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    let userid = this.route.snapshot.params['userid'];
    let phone = this.route.snapshot.params['phone'];
    console.log(id, userid, phone);
  }

}
