import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainService } from '../main/main.service';
import { ForumMessageDto } from '../dto/ForumMessageDto';
import { AddForumMessageDto } from '../dto/AddForumMessageDto';

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
export class ForumComponent {

  message: string = '';
  forumMessages: ForumMessageDto[] = [];
  email: any;

  constructor(
    private mainService: MainService
  ){
    this.mainService.getForumMessages().subscribe((data: ForumMessageDto[]) => {
        this.forumMessages = data;
    });

    this.email = localStorage.getItem('email');
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
      });
  }
}
