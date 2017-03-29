/**
 * Created by x073880 on 12/23/2016.
 */
import {Component} from 'angular2/core'
import {ControlGroup, FormBuilder, Control,Validators} from "angular2/common";
import {PasswordValidator} from "./PasswordValidator";

@Component({
    selector: 'changepassword-form',
    templateUrl:'app/changePasswordTemplate.html',
    
})
export class ChangePasswordFormComponent {
    form : ControlGroup;
    
    constructor(fb:FormBuilder) {
        this.form = fb.group({
            oldPassword:['',Validators.compose([
                Validators.required,
                Validators.minLength(6)])],
            newPassword:['',Validators.compose([
                Validators.required,
                Validators.minLength(6),PasswordValidator.cannotContainSpace])],
            confirmNewPassword:['',
                Validators.compose([Validators.required, 
                    Validators.minLength(6)])]
        }, {validator: PasswordValidator.checkPasswordMatch })
    }

    changePassword(){
        // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var oldPassword = this.form.find('oldPassword');
        if (oldPassword.value != '123456')
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
}