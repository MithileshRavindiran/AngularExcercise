import {ControlGroup, Control} from "angular2/common";
/**
 * Created by x073880 on 12/20/2016.
 */

export class UsernameValidators {

    static shouldBeUnique(control: Control) {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if (control.value == "mosh")
                    resolve ({shouldBeUnique: true});
                else
                    resolve(null);
            },1000)
        });
    }
    static cannotContainSpace(control:Control) {
        if (control.value.indexOf(' ') >= 0)
            return {cannotContainSpace:true};

        return null;

    }
}