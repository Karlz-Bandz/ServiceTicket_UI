import { Component } from '@angular/core';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { MainService } from '../main/main.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-atm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './delete-atm.component.html',
  styleUrl: './delete-atm.component.scss',
})

export class DeleteAtmComponent {

  atms: CheckAtmDto[] = [];
  atm: CheckAtmDto | undefined;
  
  constructor(
    private mainService: MainService,
    private route: Router,
    ){}
  
  ngOnInit(): void {
    this.mainService.getAtmList().subscribe(data => {
      this.atms = data;
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
