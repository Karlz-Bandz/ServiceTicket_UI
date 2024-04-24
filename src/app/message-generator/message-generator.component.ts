import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
import { MessageDto } from '../dto/MessageDto';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddMessageDto } from '../dto/AddMessageDto';
import { Clipboard } from '@angular/cdk/clipboard';
import { MessageEditDialogComponent } from '../message-edit-dialog/message-edit-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-generator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  templateUrl: './message-generator.component.html',
  styleUrl: './message-generator.component.scss'
})
export class MessageGeneratorComponent implements OnInit {
  
  constructor(
    private mainService: MainService,
    private dialog: MatDialog,
    private clipboard: Clipboard,
    private rout: Router
  ){}

  email: any;
  messages: MessageDto[] = [];
  
  ngOnInit(): void {
     this.email = localStorage.getItem('email');
     this.mainService.getAllMessages(this.email).subscribe((data: MessageDto[]) => {
        this.messages = data;
     },(err) => {
      localStorage.removeItem('btn');
      localStorage.removeItem('email');
      localStorage.removeItem('tokenJwt');
      localStorage.removeItem('role');
      this.rout.navigate(['']);
     });
  }

  openDialog(message: MessageDto): void {
    const dialogRef = this.dialog.open(MessageEditDialogComponent, {
      width: '700px',
      height: '500px',
      data: {message: message},
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)

      this.mainService.getAllMessages(this.email).subscribe((data: MessageDto[]) => {
        this.messages = data;
      });
      
    });
  }

  public deleteMessage(id: number): void {
    this.mainService.deleteMessage(id).subscribe(() => {
        this.mainService.getAllMessages(this.email).subscribe((data: MessageDto[]) => {
            this.messages = data;
        });
    })
  }

  public copyMsg(message: string): void {
    this.clipboard.copy(message);
  }

  public addNewTextBox(): void{
    const addMessage = new AddMessageDto(this.email, "", "");
    this.mainService.addNewMessage(addMessage).subscribe(() => {
      this.mainService.getAllMessages(this.email).subscribe((data: MessageDto[]) => {
        this.messages = data;
     });
    });
  }
}
