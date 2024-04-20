export class AddForumMessageDto {
    email: string;
    message: string;

    constructor(
        email: string, message: string
    ){
        this.email = email;
        this.message = message;
    }
}