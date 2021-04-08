import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common/common.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private rout:ActivatedRoute,
              private commonService:CommonService) { }
  viewData:any = [];
  ngOnInit(): void {
    this.commonService.fatchData(this.rout.snapshot.params.id).subscribe((result)=>{
       this.viewData = result;
    })
  }

}
