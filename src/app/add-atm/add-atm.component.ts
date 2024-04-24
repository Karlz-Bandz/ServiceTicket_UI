import { Component } from '@angular/core';
import { AddAtmService } from './add-atm.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidator } from '../validation/CustomValidator';
import { MainService } from '../main/main.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-atm',
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
  providers: [
    CustomValidator
  ],
  templateUrl: './add-atm.component.html',
  styleUrl: './add-atm.component.scss'
})
export class AddAtmComponent {

  constructor(
    private atmService: AddAtmService,
    private mainService: MainService,
    private rout: Router
  ){}

 atmForm = new FormGroup({
      atmId: new FormControl('', [Validators.required, Validators.minLength(8), CustomValidator.allUpperCaseValidator], [CustomValidator.atmIdExistsValidator(this.mainService)]),
      serialNo: new FormControl('', [Validators.required, Validators.minLength(8)], [CustomValidator.selrialNoExistsValidator(this.mainService)]),
      clientName: new FormControl('', [Validators.required]),
      type: new FormControl('BANKOMAT', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[ +()0-9]+')])
  });

  types: string[] = ["BANKOMAT", "WPŁATOMAT", "RECYKLER"];

  get atmId() {
    return this.atmForm.get('atmId');
  }

  get serialNo() {
    return this.atmForm.get('serialNo');
  }

  get clientName() {
    return this.atmForm.get('clientName');
  }

  get type() {
    return this.atmForm.get('type');
  }

  get location() {
    return this.atmForm.get('location');
  }

  get phone() {
    return this.atmForm.get('phone');
  }

  public addAtm(): void {
    
    this.atmService.addAtm(this.atmForm.value).subscribe(() => {
        console.log("Ok!");
        location.reload();
        alert("Maszyna " + this.atmForm.value.atmId + " została dodana do bazy.");
    },(err) => {
        localStorage.removeItem('btn');
        localStorage.removeItem('email');
        localStorage.removeItem('tokenJwt');
        localStorage.removeItem('role');
        this.rout.navigate(['']);
    });
  }
}
