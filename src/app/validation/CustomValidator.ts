import { AbstractControl, ValidationErrors } from "@angular/forms";
import { MainService } from "../main/main.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CustomValidator{
    
    constructor(mainService: MainService){}

    static allUpperCaseValidator(control: AbstractControl): ValidationErrors | null {
        const value: string = control.value;

        if(value && value !== value.toUpperCase()){
            return { allUpperCaseValidator: true }
        }
        return null;
    }
}