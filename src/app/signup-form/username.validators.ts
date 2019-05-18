import {ValidationErrors, AbstractControl} from '@angular/forms';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0)
            return {cannotContainSpace: true};
        return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === 'polinema')
                    resolve({shouldBeUnique: true});
                else resolve(null);
            }, 2000);
        })
    }
}