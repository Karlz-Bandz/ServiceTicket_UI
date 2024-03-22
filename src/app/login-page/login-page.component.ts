import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainService } from '../main/main.service';
import { Router } from '@angular/router';


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
export class LoginPageComponent {

  constructor(
    private mainService: MainService,
    private router: Router,
  ){}

  authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public logIn(): void{
    console.log(this.authForm.value);
    this.mainService.authenticate(this.authForm)
    .subscribe((data: any) => {
        if(data.token){
          localStorage.setItem('tokenJwt', data.token);
          this.router.navigate(['/service']);
          
        }else{
          alert(data.message);
        }
    });
  }
}