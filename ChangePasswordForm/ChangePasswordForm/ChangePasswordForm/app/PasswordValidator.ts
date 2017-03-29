/**
 * Created by x073880 on 12/25/2016.
 */
import {Control, ControlGroup} from 'angular2/common';  


export class PasswordValidator {
    static cannotContainSpace(control:Control) {
        if (control.value.indexOf(' ') >= 0)
            return {cannotContainSpace:true};
        return null;

    }

    static checkPasswordMatch(group:ControlGroup) {
        var newPassword = group.find('newPassword').value;
        var confirmNewPassword = group.find('confirmNewPassword').value;


        if (newPassword == '' || confirmNewPassword == '')
            return null;

        if (newPassword != confirmNewPassword)
            return { passwordsNotMatched: true };

        return null;
    }
}