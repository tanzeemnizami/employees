import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import {FormControl , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private commonService: CommonService,
              private fb: FormBuilder) { }
  alert = false;            
  form:any = this.fb.group({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.commonService.fatchData(this.route.snapshot.params.id).subscribe((result)=>{
      this.form = this.fb.group({
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
