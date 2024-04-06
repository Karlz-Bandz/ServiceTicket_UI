export class AddMessageDto {
    email: string;
    title: string;
    message: string;

    constructor(
        email: string, title: string, message: string
    ){
        this.email = email;
        this.title = title;
        this.message = message;
    }
}