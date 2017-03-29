System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                PasswordValidator.checkPasswordMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmNewPassword = group.find('confirmNewPassword').value;
                    if (newPassword == '' || confirmNewPassword == '')
                        return null;
                    if (newPassword != confirmNewPassword)
                        return { passwordsNotMatched: true };
                    return null;
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=PasswordValidator.js.map