import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { MasterTicketDto } from '../dto/MasterTicketDto';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { CustomValidator } from '../validation/CustomValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
   CommonModule,
   FormsModule,
   MatButtonModule,
   MatSelectModule,
   MatFormFieldModule,
   MatInputModule,
   ReactiveFormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  resultsAtm: CheckAtmDto[] = [];
  
  pdfForm = new FormGroup({
      selectedAtm: new FormControl<CheckAtmDto>({id: 0, atmId: ''}, CustomValidator.selectAtmForPdfValidator),
      operatorDescription: new FormControl(''),
      clientDescription: new FormControl('', Validators.required)
  });

  constructor(
    private mainService: MainService,
    private rout: Router
  ){}

  ngOnInit(): void {
    this.mainService.getAtmList().subscribe(data => {
      this.resultsAtm = data;
    },(err) => {
      localStorage.removeItem('btn');
      localStorage.removeItem('email');
      localStorage.removeItem('tokenJwt');
      localStorage.removeItem('role');
      this.rout.navigate(['']);
    });
  }

  get selectedAtm() {
    return this.pdfForm.get('selectedAtm');
  }

  get operatorDescription() {
    return this.pdfForm.get('operatorDescription');
  }

  get clientDescription() {
    return this.pdfForm.get('clientDescription');
  }

  public submitPdf(): void{

      const email: string | null = localStorage.getItem('email');

      if(this.pdfForm.valid && email !== null){
        const atmObject = new MasterTicketDto(this.selectedAtm?.value?.id, email, this.clientDescription?.value, this.operatorDescription?.value);
        
        this.mainService.export(atmObject).subscribe(resp => {
          this.downloadPdf(resp, 'Zlecenie serwisowe ' + this.selectedAtm?.value?.atmId + '(WEB)');
          location.reload();
          alert("PDF pobrany pomyślnie dla maszyny " + this.selectedAtm?.value?.atmId);
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
