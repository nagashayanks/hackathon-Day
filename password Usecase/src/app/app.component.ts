import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loginForm: FormGroup;
  submitted = false;
  spinner = false;
  inputEl: any;
  password;
  constructor(
    private fb: FormBuilder,
  
  ) { }

  /*  Login form controls creation */
  private createForm() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  /*  Access to login form fields */
  get login() { return this.loginForm.controls; }


  
  public onClickSubmit(event) {
    console.log('dsd',event.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      this.spinner = true;
      const postObject = {
        password: this.loginForm.value.password
      };
     
    }
  }

 
  /* Oninit call */
  ngOnInit(event) {
    console.log('pas',event);
    
    /* Call the form creation while on component initiation */
    this.createForm();
    console.log('pas', this.loginForm.value.text);
    this.validate(event);
  }

  private validate($event) {
    if (this.loginForm.value.text.querySelector('[name=validation-type]:checked').value === 'number') {
      if (/[^0-9]/.test(this.password.value)) return false;
    } else if (this.el.querySelector('[name=validation-type]:checked').value === 'letter'){
      if (/[^a-zA-Z]/.test(this.inputEl.value)) return false;
    }
    else  
    {
      //checking for  three consecutive digits
      let regex = /(?=(\d{3}))/g; 
      console.log(this.inputEl.value)
      let re =/^(?!.*[@#&*])/; 
      if (re.test(this.inputEl.value)||regex.test(this.inputEl.value)) return false;
    }
    return true;
  }
  }
}