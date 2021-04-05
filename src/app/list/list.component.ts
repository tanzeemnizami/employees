import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private commonService: CommonService) { }
  nameSearch:any='';
 alert = false;
  allData:any =[];
  ngOnInit(): void {
    this.commonService.getData().subscribe((result)=>{
      console.log(result);
      this.allData = result;
    })
  }
  removeUser(data:any){
    this.commonService.deleteUser(data).subscribe(()=>{
      this.ngOnInit();
      this.alert = true
      console.log('user has been deleted');
    })
  }
  off(){
    this.alert = false;
  }
}
function res(res: any, arg1: (any: any) => void): any {
  throw new Error('Function not implemented.');
}

