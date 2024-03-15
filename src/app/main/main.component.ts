import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { CommonModule } from '@angular/common';
import { CheckOperatorDto } from '../dto/CheckOperatorDto';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
   CommonModule,
   FormsModule,
   MatButtonModule,
   MatSelectModule,
   MatFormFieldModule,
   MatInputModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  resultsAtm: CheckAtmDto[] = [];
  resultsOperator: CheckOperatorDto[] = [];
  selectedAtmId: number | undefined;
  selectedOperatorId: number | undefined;
  operatorDescription: string = '';
  clientDescription: string = '';

  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.mainService.getAtmList().subscribe(data => {
      this.resultsAtm = data;
    });

    this.mainService.getOperatorList().subscribe(data => {
      this.resultsOperator = data;
    });
  }

  public submitPdf(pdfForm: {atmId: number, 
          operatorId: number,
          clientDescription: string,
          operatorDescription: string}): void{

      console.log(pdfForm);

      this.mainService.export(pdfForm).subscribe(() => {
        console.log("Ok!");
        location.reload();
        alert("Zlecenie serwisowe pomyślnie wyeksportowane.");
      });
  }
}
