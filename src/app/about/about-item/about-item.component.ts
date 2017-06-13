import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css']
})
export class AboutItemComponent implements OnInit {
  id: any;
  paramsSub: any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
    .subscribe(params => this.id = parseInt(params['id'], 10));
  }
  ngOnDestroy(){
    this.paramsSub.unsubscribe();
  }
}
