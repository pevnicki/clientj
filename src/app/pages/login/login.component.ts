import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlSerializer} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../shared/state/login/auth.service';
import {User} from '../../shared/models/user.model';


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



  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private  authService: AuthService) {

    this.iconRegistry.addSvgIcon(
      'user-login',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/user-login.svg')
    );
    this.iconRegistry.addSvgIcon(
      'eye-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/eye-icon.svg')
    );
    this.iconRegistry.addSvgIcon(
      'user-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/user-icon.svg')
    );

  }

  ngOnInit(): void {
    this.iconsRegistry();
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


    const user: User = {
      username: 'admin',
      password: 'admin'
    };

    this.authService.login(user);
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

  iconsRegistry(): void{

}
}
