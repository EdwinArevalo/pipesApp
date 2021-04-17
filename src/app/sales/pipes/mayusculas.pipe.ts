import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{
        
    transform(value: string, isMayus: boolean = true): string {

        if(isMayus){
            return value.toLocaleUpperCase();
        }else {
            return value.toLowerCase();
        }
    }

}