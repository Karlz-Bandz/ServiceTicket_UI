import { Component, OnInit } from '@angular/core';
import { CheckOperatorDto } from '../dto/CheckOperatorDto';
import { MainService } from '../main/main.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-operator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule
  ],
  templateUrl: './delete-operator.component.html',
  styleUrl: './delete-operator.component.scss'
})
export class DeleteOperatorComponent implements OnInit {

  operators: CheckOperatorDto[] = [];
  operator: CheckOperatorDto | undefined;

  constructor(private mainService: MainService){}
  
  ngOnInit(): void {
    this.mainService.getOperatorList().subscribe(data => {
      this.operators = data;
    });
  }

  public deleteOperatorById(operatorForm: any): void{
    this.mainService.deleteOperatorById(operatorForm.operator.id).subscribe(() => {
      console.log("Ok!");
      location.reload();
      alert("Operator " + operatorForm.operator.name + " został usunięty.");
    });
  }
}
