import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.page.html',
  styleUrls: ['./password-update.page.scss'],
})
export class PasswordUpdatePage implements OnInit {

  isSubmitted = false;
  
  ionicForm: any;

 
 
  constructor(public formBuilder: FormBuilder) { 
   
  }
  
    ngOnInit(): void {
      this.ionicForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        dob: ['',[Validators.required]],
        mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
      })
      
    }

    get errorControl() {
      return this.ionicForm.controls;
    } 

    submitForm () {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        console.log('Please provide all the required values!')
      
      } else {
        console.log(this.ionicForm.value)
      }
    }

   
    

  
  }
