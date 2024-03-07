import { Component } from '@angular/core';
import { AddAtmService } from './add-atm.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-atm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-atm.component.html',
  styleUrl: './add-atm.component.scss'
})
export class AddAtmComponent {

  atmId: string = '';
  serialNo: string = '';
  type: string = '';
  clientName: string = '';
  location: string = '';
  phone: string = '';

  constructor(private atmService: AddAtmService){}

  public addAtm(atmForm: {atmId: string,
                                 serialNo: string,
                                     type: string,
                               clientName: string, 
                                 location: string, 
                                    phone: string}): void {

      this.atmService.addAtm(atmForm).subscribe(() => {
          console.log("Ok!");
      });
  }
}
