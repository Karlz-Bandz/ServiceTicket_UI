import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MessageDto } from '../dto/MessageDto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MainService } from '../main/main.service';
import { ChangeMessageDto } from '../dto/ChangeMessageDto';

@Component({
  selector: 'app-message-edit-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './message-edit-dialog.component.html',
  styleUrl: './message-edit-dialog.component.scss'
})
export class MessageEditDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<MessageEditDialogComponent>,
    private mainService: MainService
  ){}

  @Output() dataEvent = new EventEmitter<ChangeMessageDto>();

  messageDto: MessageDto | undefined;
  email: any;

  ngOnInit(): void {

    this.email = localStorage.getItem('email');

    this.messageDto = this.data.message;

    this.id = this.messageDto?.id;
    this.title = this.messageDto?.title;
    this.message = this.messageDto?.message;
  }

  messageForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl(''),
  })

  get id(){
    return this.messageForm.get('id');
  }

  set id(value: any){
    this.messageForm.patchValue({id: value});
  }

  get title(){
    return this.messageForm.get('title');
  }

  set title(value: any){
    this.messageForm.patchValue({title: value});
  }

  get message(){
    return this.messageForm.get('message');
  }

  set message(value: any){
    this.messageForm.patchValue({message: value});
  }

  onSubmit(): void {
    const newMessage: ChangeMessageDto = new ChangeMessageDto(
      this.id.value, 
      this.title.value, 
      this.message.value
      );

    this.mainService.changeMessage(newMessage).subscribe(() => {
      console.log('OK');
      this.matDialogRef.close({ success: false });
    });
  }

  onCancel(): void {
    this.matDialogRef.close({ success: false });
  }
}
