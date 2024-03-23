export class MasterTicketDto {
    atmId: number;
    email: string;
    clientDescription: string;
    operatorDescription: string;

    constructor(atmId: number, email: string, clientDescription: string, operatorDescription: string){
        this.atmId = atmId;
        this.email = email;
        this.clientDescription = clientDescription;
        this.operatorDescription = operatorDescription;
    }
}