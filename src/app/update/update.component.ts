import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private commonService: CommonService) { }
  alert = false;            
  form:any = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl('')
  })
  ngOnInit(): void {
    this.commonService.fatchData(this.route.snapshot.params.id).subscribe((result)=>{
      this.form = new FormGroup({
        name: new FormControl(result.name),
        email:  new FormControl(result.email),
        department:  new FormControl(result.department),
        phone:  new FormControl(result.phone),
        gender:  new FormControl(result.gender),
        status:  new FormControl(result.status),
        date:  new FormControl(result.date)
      })
      console.log(result);
    })
  }
  update(){
    this.commonService.updateUser(this.route.snapshot.params.id, this.form.value).subscribe((result)=>{
      console.log(result);
      this.alert = true;
      this.form.reset();
    })
  }
  off(){
    this.alert = false;
  }
}
