import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import { MainService } from "../main/main.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CustomValidator{
    
    constructor(){}

    static atmIdExistsValidator(mainService: MainService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          return mainService.existsByAtmId(control.value)
            .pipe(
              map((result: boolean) =>
                result ? { atmNotExists: true } : null
              )
            );
        };
    }

    static selrialNoExistsValidator(mainService: MainService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return mainService.existsBySerialNo(control.value)
          .pipe(
            map((result: boolean) =>
              result ? { serialNoNotExists: true } : null
            )
          );
      };
    }

    static allUpperCaseValidator(control: AbstractControl): ValidationErrors | null {
        const value: string = control.value;

        if(value && value !== value.toUpperCase()){
            return { allUpperCaseValidator: true }
        }
        return null;
    }
}