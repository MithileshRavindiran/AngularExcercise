/**
 * Created by x073880 on 12/3/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FacilitatorService;
    return {
        setters:[],
        execute: function() {
            FacilitatorService = (function () {
                function FacilitatorService() {
                }
                FacilitatorService.prototype.getFacilitatorNames = function () {
                    return ["Mithilesh", "MithraShri", "Pavithra", "Ravindran", "Revathy"];
                };
                return FacilitatorService;
            }());
            exports_1("FacilitatorService", FacilitatorService);
        }
    }
});
//# sourceMappingURL=facilitator.service.js.map