import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlSerializer} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  message: string;
  hide = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'family',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/family.svg')
    );
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params: Params) => {
    //   if (params.loginAgain) {
    //     this.message = 'Please, login'
    //   } else if (params.authFaild){
    //     this.message = 'Time out, please login again'
    //   }
    // })

    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }


  submit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    // const user: User = {
    //   userName: this.loginForm.value.userName,
    //   password: this.loginForm.value.password
    // };

    // this.auth.login(user).subscribe(() => {
    //   this.form.reset()
    //   this.router.navigate(['/admin', 'main'])
    //   this.submitted = false
    // }, () => {
    //   this.submitted = false
    // })
  }
}
