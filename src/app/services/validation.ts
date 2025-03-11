import { Validator, Validators } from "@angular/forms";

export class CustomValidation {


    static validEmail = Validators.pattern('[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,8})');

    static requiredValidEmail = Validators.compose([Validators.required, CustomValidation.validEmail]);
   

    
}
