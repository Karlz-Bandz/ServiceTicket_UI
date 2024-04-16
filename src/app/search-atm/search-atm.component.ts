import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MainService } from '../main/main.service';
import { AtmDto } from '../dto/AtmDto';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CheckAtmDto } from '../dto/CheckAtmDto';

@Component({
  selector: 'app-search-atm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  templateUrl: './search-atm.component.html',
  styleUrl: './search-atm.component.scss'
})
export class SearchAtmComponent {

  atm: AtmDto | undefined;
  errorMessage: string = '';
  viewChange: string = 'atmId';
  atms: CheckAtmDto[] = [];
  atmId: string | undefined;

  searchForm = new FormGroup({
    atmId: new FormControl(''),
    serialNo: new FormControl('')
  });

  constructor(
     private mainService: MainService
  ){}

  public changeFormToSelect(): void{
    this.viewChange = 'select';
    this.atm = undefined;
    this.errorMessage = '';
    this.searchForm.reset();
    this.mainService.getAtmList().subscribe(data => {
      this.atms = data;
    });
  }

  public changeFormToSerial(): void{
        this.viewChange = 'serial';
        this.atm = undefined;
        this.errorMessage = '';
        this.searchForm.reset();
  }

  public changeFormToAtmId(): void {
        this.viewChange = 'atmId';
        this.atm = undefined;
        this.errorMessage = '';
        this.searchForm.reset();
  }

  public changeAtmId(atmId: string): void {
    this.searchForm.value.atmId = atmId;
  }

  public searchAtm(): void {
    if(this.viewChange === 'atmId' || this.viewChange === 'select'){
      this.mainService.findByAtmId(this.searchForm.value.atmId).subscribe((data) => {
        this.errorMessage = '';
        this.atm = data;
        console.log('ok');
      },
      (error) => {
        this.atm = undefined;
        this.errorMessage = "Identyfikator nie istnieje.";
        console.error('Error:', error);
      });
    }else if(this.viewChange === 'serial'){
      this.mainService.findBySerialNo(this.searchForm.value.serialNo).subscribe((data) => {
        this.errorMessage = '';
        this.atm = data;
      },
      (error) => {
        this.atm = undefined;
        this.errorMessage = "Numer seryjny nie istnieje.";
        console.error('Error:', error);
      });
    }
  }
}
