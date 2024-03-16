import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MainService } from '../main/main.service';
import { AtmDto } from '../dto/AtmDto';
import { MatInputModule } from '@angular/material/input';

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
    MatInputModule
  ],
  templateUrl: './search-atm.component.html',
  styleUrl: './search-atm.component.scss'
})
export class SearchAtmComponent {

  atm: AtmDto | undefined;

  constructor(
     private mainService: MainService
  ){}

  public searchAtm(atmId: string): void{

    console.log(atmId);
      this.mainService.findByAtmId(atmId).subscribe((data) => {
           this.atm = data;
           console.log('ok');
      });
  }
}
