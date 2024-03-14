import { Component } from '@angular/core';
import { AddAtmService } from './add-atm.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from '../validation/CustomValidator';
import { MainService } from '../main/main.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-atm',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    CustomValidator
  ],
  templateUrl: './add-atm.component.html',
  styleUrl: './add-atm.component.scss'
})
export class AddAtmComponent {

  constructor(
    private atmService: AddAtmService,
    private mainService: MainService
  ){}

 atmForm = new FormGroup({
      atmId: new FormControl('', [Validators.required, Validators.minLength(8), CustomValidator.allUpperCaseValidator], 
                                 [CustomValidator.atmIdExistsValidator(this.mainService)]),
      serialNo: new FormControl('', [Validators.required, Validators.minLength(8)],
                                    [CustomValidator.selrialNoExistsValidator(this.mainService)]),
      type: new FormControl(''),
      clientName: new FormControl(''),
      location: new FormControl(''),
      phone: new FormControl('')
  });

  get atmId() {
    return this.atmForm.get('atmId');
  }

  get serialNo() {
    return this.atmForm.get('serialNo');
  }

  public addAtm(): void {
    
    this.atmService.addAtm(this.atmForm.value).subscribe(() => {
        console.log("Ok!");
        location.reload();
        alert("Maszyna " + this.atmForm.value.atmId + " została dodana do bazy.");
    });
  }
}
