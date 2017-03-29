/**
 * Created by x073880 on 12/17/2016.
 */

import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: String,  args:String[]) {
     var limit =(args && args[0]) ? parseInt(args[0]):50;
        if (value) {
            return value.substring(0,limit)+"...";
        }
    }

}