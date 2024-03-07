import { Component } from '@angular/core';
import { AddOperatorService } from './add-operator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-operator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './add-operator.component.html',
  styleUrl: './add-operator.component.scss'
})
export class AddOperatorComponent {

  name: string = '';
  role: string = '';
  phone: string = '';

  constructor(private operatorService: AddOperatorService){}

  public addOperator(operatorForm: {name: string, role: string, phone: string}): void {
      this.operatorService.addOperator(operatorForm).subscribe(() => {
          console.log("Ok!");
      });
  }
}
