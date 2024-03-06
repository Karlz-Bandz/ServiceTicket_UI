import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { CommonModule } from '@angular/common';
import { CheckOperatorDto } from '../dto/CheckOperatorDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
   CommonModule,
   FormsModule
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

  submitPdf(pdfForm: {atmId: number, 
          operatorId: number,
          clientDescription: string,
          operatorDescription: string}): void{

      console.log(pdfForm);

      this.mainService.export(pdfForm).subscribe(() => {
        console.log("Ok");
      });
  }
}
