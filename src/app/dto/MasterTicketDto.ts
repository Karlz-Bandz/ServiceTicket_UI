export class MasterTicketDto {
    atmId: number;
    operatorId: number;
    clientDescription: string;
    operatorDescription: string;

    constructor(atmId: number, opertaorId: number, clientDescription: string, operatorDescription: string){
        this.atmId = atmId;
        this.operatorId = opertaorId;
        this.clientDescription = clientDescription;
        this.operatorDescription = operatorDescription;
    }
}