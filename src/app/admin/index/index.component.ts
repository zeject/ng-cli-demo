import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  buylist: any[];

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.indexService.search().subscribe(data => {
      console.log(data);
      this.buylist = data.p.data;
    });
    console.log();
  }

}
