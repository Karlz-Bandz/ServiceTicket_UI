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
    RouterModule
  ],
  templateUrl: './add-operator.component.html',
  styleUrl: './add-operator.component.scss'
})
export class AddOperatorComponent {

  operatorForm = new FormGroup({
    name: new FormControl('', [Validators.required], [CustomValidator.operatorNameExistsValidator(this.mainService)]),
    role: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, CustomValidator.contactNumberValidator]),
  });

  get name(){
    return this.operatorForm.get('name');
  }

  get role(){
    return this.operatorForm.get('role');
  }

  get phone(){
    return this.operatorForm.get('phone');
  }

  constructor(
    private operatorService: AddOperatorService,
    private mainService: MainService
    ){}

  public addOperator(): void {
      this.operatorService.addOperator(this.operatorForm.value).subscribe(() => {
          console.log("Ok!");
          location.reload();
          alert("Operator " + this.operatorForm.value.name + " został dodany do bazy.")
      });
  }
}
