import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { MasterTicketDto } from '../dto/MasterTicketDto';
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

  public submitPdf(pdfForm: {atm: CheckAtmDto, 
          clientDescription: string,
          operatorDescription: string}): void{

      
      const email: string | null = localStorage.getItem('email');

      if(email !== null){
        const atmObject = new MasterTicketDto(pdfForm.atm.id, email, pdfForm.clientDescription, pdfForm.operatorDescription);
        
        this.mainService.export(atmObject).subscribe(resp => {
          this.downloadPdf(resp, 'Zlecenie serwisowe ' + pdfForm.atm.atmId + '(WEB)');
          location.reload();
          alert("PDF pobrany pomyślnie dla maszyny " + pdfForm.atm.atmId);
        });
      }
    }

  private downloadPdf(blob: Blob, fileName: string): void{
      const fileURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = fileURL;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(fileURL);
  }
}
