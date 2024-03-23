import { Component } from '@angular/core';
import { AddOperatorService } from './add-operator.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomValidator } from '../validation/CustomValidator';
import { MainService } from '../main/main.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-operator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule
  ],
  templateUrl: './add-operator.component.html',
  styleUrl: './add-operator.component.scss'
})
export class AddOperatorComponent {

  parentForm = new FormGroup({
    operatorForm: new FormGroup({
      name: new FormControl('', [Validators.required], [CustomValidator.operatorNameExistsValidator(this.mainService)]),
      role: new FormControl('OPERATOR', [Validators.required]),
      phone: new FormControl('', [Validators.required, CustomValidator.contactNumberValidator]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }),
    roleForm: new FormGroup({
      selectedRole: new FormControl('USER')
    })
  })

  positions: string[] = ["OPERATOR", "INŻYNIER", "TEAM LEADER"];

  roles: string[] = ["ADMIN", "USER"];

  get name(){
    return this.parentForm.get('operatorForm.name');
  }

  get role(){
    return this.parentForm.get('operatorForm.role');
  }

  get phone(){
    return this.parentForm.get('operatorForm.phone');
  }

  get email(){
    return this.parentForm.get('operatorForm.email');
  }

  get password(){
    return this.parentForm.get('operatorForm.password');
  }

  get selectedRole(){
    return this.parentForm.get('roleForm.selectedRole');
  }

  get operatorForm(){
    return this.parentForm.get('operatorForm') as FormGroup;
  }

  get roleForm(){
    return this.parentForm.get('roleForm') as FormGroup;
  }

  constructor(
    private operatorService: AddOperatorService,
    private mainService: MainService
    ){}

  public addOperator(): void {
    const operator = this.parentForm.get('operatorForm')?.value;
    const role = this.parentForm.get('roleForm')?.value.selectedRole;
    
    console.log(role);
    console.log(operator);

    if(role === "ADMIN"){
        this.operatorService.registerAdmin(operator).subscribe(() => {
            alert("Admin " + operator?.name + " został dodany do bazy."); 
            location.reload();
        });
    }else if(role === "USER"){
        this.operatorService.registerOperator(operator).subscribe(() => {
            alert("Operator " + operator?.name + " został dodany do bazy.");
            location.reload();
        });
    }
  }
}
