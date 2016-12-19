import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  // 提交按钮状态
  submited = false;
  issueForm: FormGroup;

  ngOnInit() { }

  constructor(private fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.issueForm = fb.group({
      username: ['', Validators.required],
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)])
      ]
    });
    this.issueForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.issueForm) { return; }
    const form = this.issueForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(value) {
    this.submited = true;
    console.log('form', value);
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        // Redirect the user
        console.log(redirect);
        this.router.navigate([redirect]);
      }
    });
  }

  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'password': {
      'required': 'password is required.',
      'minlength': 'password must be at least 6 characters long.',
      'maxlength': 'password cannot be more than 20 characters long.'
    },
    'username': {
      'required': 'username is required.'
    }
  };
}
