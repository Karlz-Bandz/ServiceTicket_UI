import { Component } from '@angular/core';
import { OperatorService } from './operator.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operator',
  standalone: true,
  imports: [
    CommonModule,
   FormsModule
  ],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent {

  name: string = '';
  role: string = '';
  phone: string = '';

  constructor(private operatorService: OperatorService){}

  public addOperator(operatorForm: {name: string, role: string, phone: string}): void {
      this.operatorService.addOperator(operatorForm).subscribe(() => {
          console.log("Ok!");
      });
  }

}
