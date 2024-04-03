export class RemoveMessageDto {
    messageId: number
    
    constructor(
        messageId: number
    ){
        this.messageId = messageId;
    }
}