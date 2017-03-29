/**
 * Created by x073880 on 12/1/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorsService;
    return {
        setters:[],
        execute: function() {
            AuthorsService = (function () {
                function AuthorsService() {
                }
                AuthorsService.prototype.getAuthorNames = function () {
                    return ["Mithilesh", "Pavithra", "Mithra", "Ravindran", "Revathy"];
                };
                AuthorsService.prototype.getAuthorAge = function () {
                    return "50";
                };
                return AuthorsService;
            }());
            exports_1("AuthorsService", AuthorsService);
        }
    }
});
//# sourceMappingURL=authors.service.js.map