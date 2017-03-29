/**
 * Created by x073880 on 12/17/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeService;
    return {
        setters:[],
        execute: function() {
            EmployeeService = (function () {
                function EmployeeService() {
                }
                EmployeeService.prototype.getEmployees = function () {
                    return [
                        {
                            name: "Mithilesh",
                            country: "Netherlands",
                            rating: 4.9745,
                            coEmployers: 1238,
                            attendance: 99.95,
                            salary: 72000
                        }
                    ];
                };
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});
//# sourceMappingURL=employee.service.js.map