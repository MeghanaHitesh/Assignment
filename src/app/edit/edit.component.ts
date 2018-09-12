import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common-service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usersForm:FormGroup;
  users;
  submitted = false;
  selectedID;
  constructor(private formBuilder: FormBuilder,private route:Router,private commonService:CommonService) { }

  ngOnInit() {
   
    
    this.usersForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required]
      
  });

     
     var retrievedObject = localStorage.getItem('userEdited');

      let data = JSON.parse(retrievedObject);
   console.log("Edit data:",data);
   this.selectedID = data.id;
 
      this.usersForm.setValue(data);

  }

  get f() { return this.usersForm.controls; }
  onSubmit() {
   this.submitted = true;
     console.log("Form Data : ",this.usersForm.value);
    // stop here if form is invalid
    if (this.usersForm.invalid) {
        console.log("Error");
    }
    else{

      this.commonService.editUser(this.usersForm.value,this.selectedID);
      this.route.navigate(["/users"]);
    }
  }

}
