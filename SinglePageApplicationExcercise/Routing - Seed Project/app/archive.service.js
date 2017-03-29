/**
 * Created by x073880 on 2/2/2017.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArchiveService;
    return {
        setters:[],
        execute: function() {
            ArchiveService = (function () {
                function ArchiveService() {
                }
                ArchiveService.prototype.getArchivesList = function () {
                    return [{
                            year: "2016",
                            month: "1"
                        },
                        {
                            year: "2016",
                            month: "2"
                        },
                        {
                            year: "2016",
                            month: "3"
                        }
                    ];
                };
                return ArchiveService;
            }());
            exports_1("ArchiveService", ArchiveService);
        }
    }
});
//# sourceMappingURL=archive.service.js.map