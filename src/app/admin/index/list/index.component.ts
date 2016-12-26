import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  pages: any;

  constructor(private router: Router, private route: ActivatedRoute, private indexService: IndexService) { }

  ngOnInit() {
    this.loadData();
  }

  goDetail(id) {
    this.router.navigate(['qadmin/detail', id]);
  }

  loadData(currentPage: number = 1) {
    this.indexService.search(currentPage).subscribe(data => {
      console.log(data);
      this.pages = data.page;
    });
  }

  public pageChanged(event: any): void {
    this.loadData(event.page);
  }

}
