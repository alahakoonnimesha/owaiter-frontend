import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";


@Directive({
    selector:'[confirmpwdmethod]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:Confirmpassword,
        multi:true
    }]

})
export class Confirmpassword implements Validator
{
    @Input() confirmpwdmethod:string;
    validate(control:AbstractControl):{[Key:string]:any} |null
    {
        const   controltocompare=control.parent.get(this.confirmpwdmethod); 
        if(controltocompare && controltocompare.value !== control.value)
        {
            return{'notEqual':true};
        }
        return null;

    }
}