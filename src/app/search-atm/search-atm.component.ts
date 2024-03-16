import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MainService } from '../main/main.service';
import { AtmDto } from '../dto/AtmDto';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-search-atm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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

  constructor(
     private mainService: MainService
  ){}

  public searchAtm(atmId: string): void{

    console.log(atmId);
      this.mainService.findByAtmId(atmId).subscribe((data) => {
           this.errorMessage = '';
           this.atm = data;
           console.log('ok');
      },
      (error) => {
           this.atm = undefined;
           this.errorMessage = "Identyfikator nie istnieje.";
           console.error('Error:', error);
      });
  }
}
