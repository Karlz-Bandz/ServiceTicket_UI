import { Component } from '@angular/core';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { MainService } from '../main/main.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-delete-atm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule
  ],
  templateUrl: './delete-atm.component.html',
  styleUrl: './delete-atm.component.scss',
})

export class DeleteAtmComponent {

  atms: CheckAtmDto[] = [];
  atm: CheckAtmDto | undefined;
  
  constructor(
    private mainService: MainService,
    private rout: Router
  ){}
  
  ngOnInit(): void {
    this.mainService.getAtmList().subscribe(data => {
      this.atms = data;
    },(err) => {
      localStorage.removeItem('btn');
      localStorage.removeItem('email');
      localStorage.removeItem('tokenJwt');
      localStorage.removeItem('role');
      this.rout.navigate(['']);
    });
  }

  public deleteAtmById(atmForm: any): void{
    this.mainService.deleteAtmById(atmForm.atm.id).subscribe(() => {
        console.log("Ok!");
        location.reload();
        alert("Maszyna " + atmForm.atm.atmId + " została usunięta.");
    });
  }
}
