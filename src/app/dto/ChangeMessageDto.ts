export class ChangeMessageDto {
    id: number;
    title: string;
    message: string;

    constructor(
        id: number, title: string, message: string
    ){
        this.id = id;
        this.title = title;
        this.message = message;
    }
}