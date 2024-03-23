import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainService } from '../main/main.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  constructor(
    private mainService: MainService,
    private router: Router,
  ){}

  ngOnInit(): void {
    if(localStorage.getItem('tokenJwt') !== null){
      localStorage.removeItem('tokenJwt');
    }
    if(localStorage.getItem('role') !== null){
      localStorage.removeItem('role');
    }
    if(localStorage.getItem('email') !== null){
      localStorage.removeItem('email');
    }
    if(localStorage.getItem('btn') !== null){
      localStorage.removeItem('btn');
    }
  }

  get email(){
    return this.authForm.get('email');
  }

  get password(){
    return this.authForm.get('password');
  }

  authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public logIn(): void{
    console.log(this.authForm.value);
    this.mainService.authenticate(this.authForm)
    .subscribe((data: any) => {
      console.log(data.token);
        if(data.token){
          const decodedToken: any = jwtDecode(data.token);
          const authorities = decodedToken.authorities;
          const email = decodedToken.sub;
          const authority = authorities[0];
          localStorage.setItem('email', email);
          localStorage.setItem('role', authority.authority);
          localStorage.setItem('tokenJwt', data.token);
          localStorage.setItem('btn', 'true');
          this.router.navigate(['/service']);
          
        }else{
          alert(data.message);
        }
    });
  }
}