import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainService } from '../main/main.service';
import { ForumMessageDto } from '../dto/ForumMessageDto';
import { AddForumMessageDto } from '../dto/AddForumMessageDto';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent implements OnDestroy {

  message: string = '';
  forumMessages: ForumMessageDto[] = [];
  email: any;
  intervalSubscription: Subscription;

  constructor(
    private mainService: MainService,
    private rout: Router
  ){
    this.mainService.getForumMessages().subscribe((data: ForumMessageDto[]) => {
      this.forumMessages = data;
    });

    this.intervalSubscription = interval(8000).subscribe(() => {
      this.mainService.getForumMessages().subscribe((data: ForumMessageDto[]) => {
        console.log('interval');
        this.forumMessages = data;
      },(err) => {
        localStorage.removeItem('btn');
        localStorage.removeItem('email');
        localStorage.removeItem('tokenJwt');
        localStorage.removeItem('role');
        this.rout.navigate(['']);
      });
    })

    this.email = localStorage.getItem('email');
  }

  ngOnDestroy(): void {
    if(this.intervalSubscription){
      this.intervalSubscription.unsubscribe();
    }
  }

  deleteMessage(id: number): void{
      this.mainService.deleteForumMessage(id).subscribe(() => {
        this.mainService.getForumMessages().subscribe((data: ForumMessageDto[]) => {
          this.forumMessages = data;
        });
      },
      (err) => {
          alert("Nie można usunąć wpisu innego operatora.")
      })
  }

  public submit(): void{
      console.log(this.message);

      const addForumMessage = new AddForumMessageDto(this.email, this.message);

      this.mainService.addForumMessage(addForumMessage).subscribe(() => {

            this.message = '';

            this.mainService.getForumMessages().subscribe((data: ForumMessageDto[]) => {
                  this.forumMessages = data;
            });
      },(err) => {
        localStorage.removeItem('btn');
        localStorage.removeItem('email');
        localStorage.removeItem('tokenJwt');
        localStorage.removeItem('role');
        this.rout.navigate(['']);
      });
  }
}
