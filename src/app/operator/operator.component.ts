import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-operator',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent {

  constructor(private router: Router){}

  
}
