export class MasterTicketDto {
    atmId: any;
    email: any;
    clientDescription: any;
    operatorDescription: any;

    constructor(atmId: any, email: any, clientDescription: any, operatorDescription: any){
        this.atmId = atmId;
        this.email = email;
        this.clientDescription = clientDescription;
        this.operatorDescription = operatorDescription;
    }
}