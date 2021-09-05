(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dash-admin/dash-admin.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dash-admin/dash-admin.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-4\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <span class=\"card-title\">Business Overview</span>\n                <span class=\"close\"><i class=\"fas fa-sync-alt\" (click)=\"loadBusinessOverview('')\"></i></span>\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': overviewInterval == 'daily'}\" (click)=\"loadBusinessOverview('daily')\">Daily</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': overviewInterval == 'weekly'}\" (click)=\"loadBusinessOverview('weekly')\">Weekly</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': overviewInterval == 'monthly'}\" (click)=\"loadBusinessOverview('monthly')\">Monthly</a>\n                    </li>\n                </ul>\n                <div class=\"summary\" *ngIf=\"businessOverview\">\n                    <p><label class=\"text-success\">{{businessOverview.leadsNew}}</label> New Leads</p>\n                    <p><label class=\"text-success\">{{businessOverview.leadsClosed}}</label> Leads Closed</p>\n                    <p><label class=\"text-danger\">{{businessOverview.leadsFollowUpOverdue}}</label> Leads Follow-up Overdue\n                    </p>\n                    <p><label class=\"text-danger\">{{businessOverview.leadsMeetingOverdue}}</label> Leads Meeting Overdue\n                    </p>\n                    <p><label class=\"text-danger\">{{businessOverview.leadsPhoneOverdue}}</label> Leads Phone Call Overdue\n                    </p>\n                    <p><label class=\"text-danger\">{{businessOverview.leadsEmailOverdue}}</label> Leads Email Overdue</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-8\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <span class=\"card-title\">Team Task Summary</span>\n                <span class=\"close\"><i class=\"fas fa-sync-alt\" (click)=\"loadTeamTaskSummary('')\"></i></span>\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': summaryInterval == 'today'}\" (click)=\"loadTeamTaskSummary('today')\">Today</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': summaryInterval == 'week'}\" (click)=\"loadTeamTaskSummary('week')\">This Week</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': summaryInterval == 'month'}\" (click)=\"loadTeamTaskSummary('month')\">Monthly</a>\n                    </li>\n                </ul>\n                <table class=\"table table-borderless table-sm\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\" class=\"font-size-bigger\">User</th>\n                            <th scope=\"col\" class=\"font-size-bigger\">Follow-Up</th>\n                            <th scope=\"col\" class=\"font-size-bigger\">Phone Call</th>\n                            <th scope=\"col\" class=\"font-size-bigger\">Meeting</th>\n                            <th scope=\"col\" class=\"font-size-bigger\">Email</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ts of teamTaskSummaryList\">\n                            <td>{{ts.user}}</td>\n                            <td>{{ts.followUp.pending}} | {{ts.followUp.total}}</td>\n                            <td>{{ts.phoneCall.pending}} | {{ts.phoneCall.total}}</td>\n                            <td>{{ts.meeting.pending}} | {{ts.meeting.total}}</td>\n                            <td>{{ts.email.pending}} | {{ts.email.total}}</td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"teamTaskSummaryList && teamTaskSummaryList.length==0\">\n                        <tr>\n                            <td colspan=\"5\" align=\"left\">No records found</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dash-user/dash-user.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dash-user/dash-user.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-50\">\n    <div class=\"card-header\">\n        <span class=\"card-title\">My Task Summary</span>\n        <span class=\"close\"><i class=\"fas fa-sync-alt\" (click)=\"loadTaskSummary('')\"></i></span>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': summaryInterval == 'today'}\" (click)=\"loadTaskSummary('today')\">Today</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" [ngClass]=\"{'active': summaryInterval == 'week'}\" (click)=\"loadTaskSummary('week')\">This\n                    Week</a>\n            </li>\n        </ul>\n        <table class=\"table table-borderless table-sm\">\n            <thead>\n                <tr>\n                    <th scope=\"col\" class=\"font-size-bigger\">Follow-Up</th>\n                    <th scope=\"col\" class=\"font-size-bigger\">Phone Call</th>\n                    <th scope=\"col\" class=\"font-size-bigger\">Meeting</th>\n                    <th scope=\"col\" class=\"font-size-bigger\">Email</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>{{taskSummary.followUp.pending}} | {{taskSummary.followUp.total}}</td>\n                    <td>{{taskSummary.phoneCall.pending}} | {{taskSummary.phoneCall.total}}</td>\n                    <td>{{taskSummary.meeting.pending}} | {{taskSummary.meeting.total}}</td>\n                    <td>{{taskSummary.email.pending}} | {{taskSummary.email.total}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n\n    <app-dash-admin *ngIf=\"isAdmin\"></app-dash-admin>\n    <app-dash-user *ngIf=\"!isAdmin\"></app-dash-user>\n\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-green\">\n    <div class=\"text-center\">\n        <p class=\"small\">&copy; 2019, SmartBusiness, All Rights Reserved</p>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-leads/list-leads.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-leads/list-leads.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n\n    <div class=\"mb-5\">\n        <h2>My Leads</h2>\n    </div>\n\n    <div class=\"mb-3\">\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchLeads()\">\n            <div class=\"row mb-2\">\n                <div class=\"col-5\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" formControlName=\"searchText\" class=\"form-control input-border-dark\" placeholder=\"Search Leads\" aria-describedby=\"searchBtn\" required autofocus>\n                        <div class=\"input-group-append\">\n                            <button type=\"submit\" class=\"btn btn-outline-secondary\" id=\"searchBtn\" [disabled]=\"loading\"><i class=\"fas fa-search\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"row\">\n                            <label class=\"col-sm-4 font-weight-bold text-right pr-0\">Lead Stage</label>\n                            <div class=\"col-sm-8\">\n                                <select name=\"leadStage\" [(ngModel)]=\"leadStageValue\" (change)=\"searchLeads()\" class=\"form-control form-control-sm\">\n                                    <option value=\"0\">All</option>\n                                    <option *ngFor=\"let stage of leadStages\" [value]=\"stage.stageId\">\n                                        {{stage.stageName}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"row\">\n                            <label class=\"col-sm-4 font-weight-bold text-right pr-0\">Lead Source</label>\n                            <div class=\"col-sm-8\">\n                                <select name=\"leadSource\" [(ngModel)]=\"leadSourceValue\" (change)=\"searchLeads()\" class=\"form-control form-control-sm\">\n                                    <option value=\"0\">All</option>\n                                    <option *ngFor=\"let source of leadSources\" [value]=\"source.sourceId\">\n                                        {{source.sourceName}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"row\">\n                            <label class=\"col-sm-4 font-weight-bold text-right pr-0\">Owner</label>\n                            <div class=\"col-sm-8\">\n                                <select name=\"owner\" [(ngModel)]=\"ownerValue\" (change)=\"searchLeads()\" class=\"form-control form-control-sm\">\n                                    <option value=\"0\">Any</option>\n                                    <option *ngFor=\"let user of leadOwners\" [value]=\"user.userId\">\n                                        {{user.username}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <table class=\"table table-bordered\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Lead Name</th>\n                    <th scope=\"col\">Lead Score</th>\n                    <th scope=\"col\">Lead Stage</th>\n                    <th scope=\"col\">Owner</th>\n                    <th scope=\"col\">Modified On</th>\n                    <th scope=\"col\">Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let lead of leads; index as i\">\n                    <td><span *ngIf=\"enableEditIndex != i\"><a [routerLink]=\"['/leads', lead.leadId]\">{{lead.firstName}}\n                                {{lead.lastName}}</a></span>\n                        <div class=\"input-group input-group-sm\">\n                            <input type=\"text\" class=\"form-control\" style=\"max-width: 150px;\" [(ngModel)]=\"lead.firstName\" *ngIf=\"enableEdit && enableEditIndex == i\">\n                            <input type=\"text\" class=\"form-control\" style=\"max-width: 150px;\" [(ngModel)]=\"lead.lastName\" *ngIf=\"enableEdit && enableEditIndex == i\">\n                        </div>\n                    </td>\n                    <td>0</td>\n                    <td>\n                        <span *ngIf=\"enableEditIndex != i\">{{lead.leadStage.stageName}}</span>\n                        <select [(ngModel)]=\"lead.leadStage\" class=\"form-control form-control-sm\" *ngIf=\"enableEdit && enableEditIndex == i\">\n                            <option *ngFor=\"let stage of leadStages\" [ngValue]=\"stage\">\n                                {{stage.stageName}}\n                            </option>\n                        </select>\n                    </td>\n                    <td>{{lead.owner.username}}</td>\n                    <td>{{lead.modifiedOn | date:'dd/MM/yy hh:mm a'}}</td>\n                    <td>\n                        <button *ngIf=\"enableEdit && enableEditIndex == i\" (click)=\"enableEdit=false; cancel()\" class=\"btn btn-sm btn-light mr-2\">Cancel</button>\n                        <button *ngIf=\"enableEdit && enableEditIndex == i\" id=\"saveBtn\" class=\"btn btn-sm btn-success\" (click)=\"saveRowData(lead)\" type=\"submit\">Save</button>\n                        <div ngbDropdown class=\"d-inline-block\" *ngIf=\"i != enableEditIndex || enableEditIndex == null\">\n                            <button class=\"btn\" id=\"actionDropdown\" ngbDropdownToggle><i\n                                    class=\"fas fa-cog\"></i></button>\n                            <div ngbDropdownMenu aria-labelledby=\"actionDropdown\">\n                                <button ngbDropdownItem (click)=\"enableEditMode($event, i)\">Edit</button>\n                                <button ngbDropdownItem>Add Task</button>\n                                <button ngbDropdownItem>Clone operations</button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr *ngIf=\"!leads || leads.length==0\">\n                    <td colspan=\"6\">No records found</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"d-flex justify-content-between p-2\" *ngIf=\"leads && leads.length > 0\">\n        <div>\n            <span class=\"mr-3\">Show:</span>\n            <select [(ngModel)]=\"pageSize\" (change)=\"searchLeads()\">\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n            </select>\n            <span class=\"ml-5\">{{(pageSize*(page-1))+1}} - {{(pageSize*(page-1))+recordsPerPage}} of\n                {{totalRecords}}</span>\n        </div>\n        <ngb-pagination [collectionSize]=\"totalRecords\" [(page)]=\"page\" [pageSize]=\"pageSize\" (pageChange)=\"searchLeads()\">\n        </ngb-pagination>\n    </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-projects/list-projects.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-projects/list-projects.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n\n    <div class=\"mb-5\">\n        <h2>Projects</h2>\n    </div>\n\n    <div class=\"mb-3\">\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchProjects()\">\n            <div class=\"row mb-2\">\n                <div class=\"col-5\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" formControlName=\"searchText\" class=\"form-control input-border-dark\" placeholder=\"Search Projects\" aria-describedby=\"searchBtn\" required autofocus>\n                        <div class=\"input-group-append\">\n                            <button type=\"submit\" class=\"btn btn-outline-secondary\" id=\"searchBtn\" [disabled]=\"loading\"><i class=\"fas fa-search\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div>\n        <table class=\"table table-bordered\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Project Name</th>\n                    <th scope=\"col\">Type</th>\n                    <th scope=\"col\">Stage</th>\n                    <th scope=\"col\">Location</th>\n                    <th scope=\"col\">Builder</th>\n                    <th scope=\"col\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let project of projects;\">\n                    <td>{{project.projectName}}</td>\n                    <td>{{project.projectType.projectTypeName}}</td>\n                    <td>{{project.projectStage.projectStageName}}</td>\n                    <td>{{project.projectLocation}}</td>\n                    <td>{{project.builder.builderName}}</td>\n                    <td>\n                        <button type=\"button\" class=\"btn mr-3 p-0\" (click)=\"editItem(project.projectId)\">\n                            <i class=\"fas fa-edit\"></i>\n                        </button>\n                        <button type=\"button\" class=\"btn p-0\" (click)=\"delteItem(project.projectId)\">\n                            <i class=\"far fa-trash-alt\"></i>\n                        </button>\n                    </td>\n                </tr>\n                <tr *ngIf=\"!projects || projects.length==0\">\n                    <td colspan=\"6\">No records found</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row pt-4\">\n        <div class=\"col\">\n            <img src=\"../../../assets/login-bg.jpg\" class=\"img-fluid\">\n        </div>\n        <div class=\"col\">\n            <div class=\"box h-100 d-flex justify-content-center flex-column\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n                    <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}\n                    </ngb-alert>\n                    <div class=\"form-group row mb-2\">\n                        <label class=\"col-sm-3 col-form-label\">Organization</label>\n                        <div class=\"col-sm-7\">\n                            <select class=\"form-control\" formControlName=\"organization\" required autofocus>\n                                <option value=\"\">Select organization</option>\n                                <option *ngFor=\"let org of organizations\" [value]=\"org.orgId\">\n                                    {{org.orgName}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb-2\">\n                        <label class=\"col-sm-3 col-form-label\">Username</label>\n                        <div class=\"col-sm-7\">\n                            <input type=\"text\" formControlName=\"username\" class=\"form-control\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb-2\">\n                        <label class=\"col-sm-3 col-form-label\">Password</label>\n                        <div class=\"col-sm-7\">\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" required>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 offset-md-6\">\n                            <button class=\"btn btn-success btn-block\" type=\"submit\" [disabled]=\"loading || !loginForm.valid\">Login\n                                <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loading\" role=\"status\"\n                                    aria-hidden=\"true\"></span>\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<footer class=\"footer\">\n    <div class=\"text-center\">\n        <p class=\"small\">Smart way to Lead your Business | &copy; 2019 All Rights Reserved</p>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-lg bg-green\">\n        <a class=\"navbar-brand mr-auto mr-lg-0 font-weight-bold\" href=\"#\">SmartLead</a>\n        <button class=\"navbar-toggler p-0 border-0\" type=\"button\" data-toggle=\"offcanvas\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\" ngbDropdown>\n                <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\n                    {{username}}\n                </a>\n                <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu\">\n                    <button ngbDropdownItem (click)=\"openUserProfileModal()\">My Profile</button>\n                    <button ngbDropdownItem (click)=\"logout()\">Logout</button>\n                </div>\n            </li>\n        </ul>\n    </nav>\n    <div class=\"menu-buttons\">\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\"><a class=\"btn btn-sm btn-light\" href=\"#\" role=\"button\" (click)=\"openSaveLeadModal()\">Add Lead</a></li>\n            <li class=\"list-inline-item\"><a class=\"btn btn-sm btn-light\" href=\"#\" role=\"button\" (click)=\"openSaveQuickLeadModal()\">Add Quick Lead</a></li>\n            <li class=\"list-inline-item\"><a class=\"btn btn-sm btn-light\" href=\"#\" role=\"button\" (click)=\"openSaveProjectModal()\">Add Project</a></li>\n\n            <li class=\"list-inline-item\"><a class=\"btn btn-sm btn-light\" routerLink=\"/projects\" role=\"button\">List\n                    Projects</a></li>\n            <li class=\"list-inline-item\"><a class=\"btn btn-sm btn-light\" routerLink=\"/leads\" role=\"button\">List\n                    Leads</a></li>\n        </ul>\n    </div>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"text-center vertical-center mt-5\">\n        <p>The requested page could not be found.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/save-document/save-document.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/save-document/save-document.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h6 class=\"modal-title\">Add documents to your Lead!</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"saveDocumentForm\">\n        <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">File type</label>\n            <div class=\"col-sm-10\">\n                <select class=\"form-control\" formControlName=\"documentType\" required>\n                    <option value=\"\">Select file type...</option>\n                    <option *ngFor=\"let type of documentTypes\" [ngValue]=\"type\">\n                        {{type.documentTypeName}}\n                    </option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Attachment</label>\n            <div class=\"col-sm-10\">\n                <input type=\"file\" formControlName=\"attachment\" class=\"form-control-file\" (change)=\"onFileChange($event)\" required>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10\">\n                <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\" required></textarea>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close('Cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveDocumentForm.valid\" (click)=\"saveDocument(saveDocumentForm.value)\">Add</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/save-lead/save-lead.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/save-lead/save-lead.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h6 class=\"modal-title\">Add New Lead</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"saveLeadForm\">\n        <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">First Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" pattern=\".{3,}\" required autofocus>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Last Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Phone Number</label>\n                    <div class=\"col-sm-9\">\n                        <international-phone-number formControlName=\"phone\" [maxlength]=\"15\" [defaultCountry]=\"'in'\" [required]=\"true\"></international-phone-number>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Company</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"company\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Website</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"website\" class=\"form-control\" pattern=\".{7,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" formControlName=\"doNotSMS\" class=\"form-check-input\" id=\"doNotSMS\">\n                    <label class=\"form-check-label\" for=\"doNotSMS\">Do Not SMS</label>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" formControlName=\"doNotTrack\" class=\"form-check-input\" id=\"doNotTrack\">\n                    <label class=\"form-check-label\" for=\"doNotTrack\">Do Not Track</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" formControlName=\"doNotEmail\" class=\"form-check-input\" id=\"doNotEmail\">\n                    <label class=\"form-check-label\" for=\"doNotEmail\">Do Not Email</label>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" formControlName=\"doNotCall\" class=\"form-check-input\" id=\"doNotCall\">\n                    <label class=\"form-check-label\" for=\"doNotCall\">Do Not Call</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Lead Source</label>\n                    <div class=\"col-sm-9\">\n                        <select class=\"form-control\" formControlName=\"leadSource\" required>\n                            <option value=\"\">Select source...</option>\n                            <option *ngFor=\"let source of leadSources\" [ngValue]=\"source\">\n                                {{source.sourceName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Source Campaign</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"sourceCampaign\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Mobile Number</label>\n                    <div class=\"col-sm-9\">\n                        <international-phone-number formControlName=\"mobile\" [maxlength]=\"15\" [defaultCountry]=\"'in'\" [required]=\"true\"></international-phone-number>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Source Medium</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"sourceMedium\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Job Title</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"jobTitle\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Lead Stage</label>\n                    <div class=\"col-sm-9\">\n                        <select class=\"form-control\" formControlName=\"leadStage\" required>\n                            <option value=\"\">Select stage...</option>\n                            <option *ngFor=\"let stage of leadStages\" [ngValue]=\"stage\">\n                                {{stage.stageName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Owner</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"owner\" class=\"form-control\" readonly>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Address</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"address\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">City</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"city\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">State</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"state\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Zip</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"number\" formControlName=\"zip\" class=\"form-control\" pattern=\".{4,15}\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\" col-6 \">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Country</label>\n                    <div class=\"col-sm-9 \">\n                        <input type=\"text\" formControlName=\"country\" class=\"form-control \" pattern=\".{4,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-6 \">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Interested Projects</label>\n                    <div class=\"col-sm-9\">\n                        <ng-select [items]=\"projects\" [multiple]=\"true\" [closeOnSelect]=\"false\" [searchable]=\"false\" bindLabel=\"projectName\" placeholder=\"Select projects\" formControlName=\"interestedProjects\">\n                        </ng-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6 \">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Notes</label>\n                    <div class=\"col-sm-9\">\n                        <textarea class=\"form-control\" formControlName=\"notes\" rows=\"3\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-6 \">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Interest Requirement</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"interestRequirement\" class=\"form-control\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveLeadForm.valid\" (click)=\"saveAndAddNew(saveLeadForm.value)\">Save\n        and Add New</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveLeadForm.valid\" (click)=\"saveAndClose(saveLeadForm.value)\">Save and Close</button>\n    <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close( 'Cancel click')\">Cancel</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/save-note/save-note.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/save-note/save-note.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h6 class=\"modal-title\">Add notes to your Lead!</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"saveNoteForm\">\n        <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10\">\n                <textarea class=\"form-control\" formControlName=\"note\" rows=\"5\" required></textarea>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Attachment</label>\n            <div class=\"col-sm-10\">\n                <input type=\"file\" formControlName=\"attachment\" class=\"form-control-file\" (change)=\"onFileChange($event)\" required>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close('Cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveNoteForm.valid\" (click)=\"saveNote(saveNoteForm.value)\">Add</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/save-project/save-project.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/save-project/save-project.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"saveProjectForm\">\n    <div class=\"modal-header\">\n        <h6 class=\"modal-title\">{{titleAndButtonText}}</h6>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div>\n            <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n            <div class=\"form-group row mb-3\">\n                <label class=\"col-sm-3 col-form-label\">Project Name</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"projectName\" class=\"form-control\" pattern=\".{3,}\" required autofocus>\n                </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n                <label class=\"col-sm-3 col-form-label\">Project Type</label>\n                <div class=\"col-sm-9\">\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <select class=\"form-control\" formControlName=\"projectType\" required>\n                                <option value=\"\">Select type...</option>\n                                <option *ngFor=\"let pType of projectTypes\" [ngValue]=\"pType\"\n                                    [selected]=\"saveProjectForm.controls.projectType.value.projectTypeId===pType.projectTypeId\">\n                                    {{pType.projectTypeName}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Project Stage</label>\n                                <div class=\"col-sm-8\">\n                                    <select class=\"form-control\" formControlName=\"projectStage\" required>\n                                        <option value=\"\">Select stage...</option>\n                                        <option *ngFor=\"let pStage of projectStages\" [ngValue]=\"pStage\"\n                                            [selected]=\"saveProjectForm.controls.projectStage.value.projectStageId===pStage.projectStageId\">\n                                            {{pStage.projectStageName}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-3\">\n                <label class=\"col-sm-3 col-form-label\">Project Location</label>\n                <div class=\"col-sm-9\">\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <input type=\"text\" formControlName=\"projectLocation\" class=\"form-control\" pattern=\".{3,}\" required>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Builder</label>\n                                <div class=\"col-sm-8\">\n                                    <select class=\"form-control\" formControlName=\"builder\" required>\n                                        <option value=\"\">Select builder...</option>\n                                        <option *ngFor=\"let b of builders\" [ngValue]=\"b\"\n                                            [selected]=\"saveProjectForm.controls.builder.value.builderId===b.builderId\">\n                                            {{b.builderName}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-3\">\n                <div class=\"col\">\n                    <div class=\"form-group form-inline\">\n                        <label class=\"mr-3\">Towers</label>\n                        <input type=\"number\" formControlName=\"towers\" class=\"form-control short-length-input\" pattern=\".{1,3}\" required>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"form-group form-inline\">\n                        <label class=\"mr-3\">Wings</label>\n                        <input type=\"number\" formControlName=\"wings\" class=\"form-control short-length-input\" pattern=\".{1,3}\" required>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"form-group form-inline\">\n                        <label class=\"mr-3\">Blocks</label>\n                        <input type=\"number\" formControlName=\"blocks\" class=\"form-control short-length-input\" pattern=\".{1,3}\" required>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"form-group form-inline\">\n                        <label class=\"mr-3\">Floors</label>\n                        <input type=\"number\" formControlName=\"floors\" class=\"form-control short-length-input\" pattern=\".{1,3}\" required>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"form-group form-inline\">\n                        <label class=\"mr-3\">Units</label>\n                        <input type=\"number\" formControlName=\"units\" class=\"form-control short-length-input\" pattern=\".{1,3}\" required>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-3\">\n                <label class=\"col-sm-3 col-form-label\">Amenities</label>\n                <div class=\"col-sm-9\">\n                    <div *ngFor=\"let order of getAmenitiesControls(); let i = index\" formArrayName=\"amenities\" class=\"form-check form-check-inline mr-5 mb-4\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"i\">\n                            {{amenities[i].amenityName}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n                <label class=\"col-sm-3 col-form-label\">Project Description</label>\n                <div class=\"col-sm-9\">\n                    <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n                <label class=\"col-sm-3 col-form-label\">Attachment</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"file\" formControlName=\"attachment\" class=\"form-control-file\" (change)=\"onFileChange($event)\">\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"brochureName\">\n                    <a href=\"#\" title=\"Download brochure\" (click)=\"downLoadBrochure()\">{{brochureName}}</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close('Cancel click')\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loading || !saveProjectForm.valid\" (click)=\"saveProject(saveProjectForm.value)\">{{titleAndButtonText}}</button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/save-quick-lead/save-quick-lead.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/save-quick-lead/save-quick-lead.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h6 class=\"modal-title\">Add New Lead</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"saveLeadForm\">\n        <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">First Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" pattern=\".{3,}\" required autofocus>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Last Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" pattern=\".{3,}\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Phone Number</label>\n                    <div class=\"col-sm-9\">\n                        <international-phone-number formControlName=\"phone\" [maxlength]=\"15\" [defaultCountry]=\"'in'\" [required]=\"true\"></international-phone-number>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Website</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" formControlName=\"website\" class=\"form-control\" pattern=\".{7,}\" required>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Lead Source</label>\n                    <div class=\"col-sm-9\">\n                        <select class=\"form-control\" formControlName=\"leadSource\" required>\n                            <option value=\"\">Select source...</option>\n                            <option *ngFor=\"let source of leadSources\" [ngValue]=\"source\">\n                                {{source.sourceName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group row mb-3\">\n                    <label class=\"col-sm-3 col-form-label\">Notes</label>\n                    <div class=\"col-sm-9\">\n                        <textarea class=\"form-control\" formControlName=\"notes\" rows=\"5\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveLeadForm.valid\" (click)=\"saveAndAddNew(saveLeadForm.value)\">Save and Add New</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveLeadForm.valid\" (click)=\"saveAndClose(saveLeadForm.value)\">Save and Close</button>\n    <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close('Cancel click')\">Cancel</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/save-task/save-task.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/save-task/save-task.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h6 class=\"modal-title\">{{title}}</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"saveTaskForm\">\n        <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Owner<span class=\"text-danger ml-2\">*</span></label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"owner\" class=\"form-control\" readonly>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Associated Lead</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"associatedLead\" class=\"form-control\" readonly>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Subject<span class=\"text-danger ml-2\">*</span></label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"subject\" class=\"form-control\" required>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\" *ngIf=\"taskSpecificFields.includes('location')\">\n            <label class=\"col-sm-2 col-form-label\">Location<span class=\"text-danger ml-2\">*</span></label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"location\" class=\"form-control\" required>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Schedule<span class=\"text-danger ml-2\">*</span></label>\n            <div class=\"col-sm-4\" *ngIf=\"taskSpecificFields.includes('scheduleDate')\">\n                <input type=\"date\" formControlName=\"scheduleDate\" class=\"form-control\" required>\n            </div>\n            <div class=\"col-sm-10\" *ngIf=\"taskSpecificFields.includes('fromDate') && taskSpecificFields.includes('fromTime') && \n            taskSpecificFields.includes('toDate') && taskSpecificFields.includes('toTime')\">\n                <div class=\"row\">\n                    <div class=\"col-4\"><input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"col-3\"><input type=\"time\" formControlName=\"fromTime\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"w-100\"></div>\n                    <div class=\"col-1\">to</div>\n                    <div class=\"w-100\"></div>\n                    <div class=\"col-4\"><input type=\"date\" formControlName=\"toDate\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"col-3\"><input type=\"time\" formControlName=\"toTime\" class=\"form-control\" required>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10\">\n                <textarea class=\"form-control\" formControlName=\"description\" rows=\"5\"></textarea>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\" *ngIf=\"taskSpecificFields.includes('marketingOfficer')\">\n            <label class=\"col-sm-2 col-form-label\">Marketing Oficer</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"marketingOfficer\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\" *ngIf=\"taskSpecificFields.includes('attachment')\">\n            <label class=\"col-sm-2 col-form-label\">Attachment</label>\n            <div class=\"col-sm-5\">\n                <input type=\"file\" formControlName=\"attachment\" class=\"form-control-file\" (change)=\"onFileChange($event)\">\n            </div>\n            <div class=\"col-sm-5\" *ngIf=\"attachmentName\">\n                <a href=\"#\" title=\"Download attachment\" (click)=\"downLoadAttachment()\">{{attachmentName}}</a>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n            <label class=\"col-sm-2 col-form-label\">Organizer<span class=\"text-danger ml-2\">*</span></label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"organizer\" class=\"form-control-plaintext\" readonly>\n            </div>\n        </div>\n        <div class=\"form-group row mb-3\" *ngIf=\"task\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"taskCompleted\" formControlName=\"taskCompleted\">\n                <label class=\"form-check-label\" for=\"taskCompleted\">Mark as complete</label>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close('Cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading || !saveTaskForm.valid\" (click)=\"saveTask(saveTaskForm.value)\">Save</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tab-activity-history/tab-activity-history.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tab-activity-history/tab-activity-history.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n    <h6>Activities</h6>\n    <hr>\n\n    <div>\n        <div *ngFor=\"let actInterval of activityIntervals\">\n            <p class=\"font-weight-bold\">{{actInterval.interval}}</p>\n            <div class=\"row\" *ngFor=\"let activity of actInterval.activities\">\n                <div class=\"col-2 pr-1 font-size-90\" style=\"border-right: 1px solid #dee2e6;\">\n                    {{activity.createdOn | date:'dd MMM hh:mm a'}}\n                </div>\n                <div class=\"col pl-3 pb-5\">\n                    <p class=\"mb-0\">{{activity.activityDescription}}</p>\n                    <p class=\"mb-0 text-muted font-italic font-size-90\">Added by {{activity.createdBy}} on {{activity.createdOn | date:'dd MMM yyyy hh:mm a'}}\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"activityIntervals.length==0\">\n            <p>No activities added</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tab-documents/tab-documents.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tab-documents/tab-documents.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n    <h6>Documents</h6>\n    <hr>\n\n    <div class=\"mb-4\" *ngFor=\"let document of documents; index as i\" (mouseover)=\"onMouseover(i)\" (mouseout)=\"onMouseout(i)\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <p class=\"mb-0 font-weight-bold\">{{document.documentName}}</p>\n            </div>\n            <div class=\"col-2 text-right\" [hidden]=\"!(showItems && i==showItemsIndex)\">\n                <button type=\"button\" class=\"btn p-0\" (click)=\"deleteItem(document.leadDocumentId)\">\n                    <i class=\"far fa-trash-alt\"></i>\n                </button>\n            </div>\n        </div>\n        <p class=\"mb-0\">{{document.documentType.documentTypeName}}</p>\n        <p class=\"mb-0 text-muted font-size-90 font-italic\">\n            Uploaded by {{document.createdBy}} on {{document.createdOn | date:'dd/MM/yy hh:mm a'}}\n        </p>\n    </div>\n    <div *ngIf=\"!documents || documents.length==0\">\n        <p>No documents added</p>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tab-lead-details/tab-lead-details.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tab-lead-details/tab-lead-details.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n    <h6>Lead Details</h6>\n    <hr>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Lead Number</div>\n        <div class=\"col-8\">{{lead.leadId}}</div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">First Name</div>\n        <div class=\"col-8\">{{lead.firstName}}</div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Last Name</div>\n        <div class=\"col-8\">{{lead.lastName}}</div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Email</div>\n        <div class=\"col-8\"><a href=\"mailto:{{lead.email}}\">{{lead.email}}</a></div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Phone Number</div>\n        <div class=\"col-8\">{{lead.phone}}</div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Company</div>\n        <div class=\"col-8\">{{lead.company}}</div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Website</div>\n        <div class=\"col-8 text-primary\"><a href=\"{{lead.website}}\" target=\"_blank\">{{lead.website}}</a></div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Do No SMS</div>\n        <div class=\"col-8\">{{lead.doNotSMS == true ? 'Yes' : 'No'}}</div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-4 text-muted\">Do No Track</div>\n        <div class=\"col-8\">{{lead.doNotTrack == true ? 'Yes' : 'No'}}</div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tab-notes/tab-notes.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tab-notes/tab-notes.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n    <h6>Notes</h6>\n    <hr>\n\n    <div class=\"mb-3\" *ngFor=\"let note of notes\">\n        <p class=\"font-size-90 mb-0\">Created by {{note.createdBy}} on {{note.createdOn | date:'dd MMM hh:mm a'}}</p>\n        <p class=\"p-3 bg-light mb-0\" style=\"border: 1px solid #dee2e6;\">{{note.note}}</p>\n    </div>\n    <div *ngIf=\"!notes || notes.length==0\">\n        <p>No notes added</p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tab-tasks/tab-tasks.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tab-tasks/tab-tasks.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n    <div class=\"row\">\n        <div class=\"col-9\">\n            <h6>Tasks</h6>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"row\">\n                <label class=\"col-sm-3 text-right\">Status</label>\n                <div class=\"col\">\n                    <select class=\"form-control form-control-sm mt-n1\" (change)=\"filterTasks($event)\">\n                        <option value=\"\" selected>All Tasks</option>\n                        <option value=\"Completed\">Completed</option>\n                        <option value=\"Overdue\">Overdue</option>\n                        <option value=\"Pending\">Pending</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"mt-1\">\n\n    <div>\n        <div *ngFor=\"let taskInterval of taskIntervals\">\n            <p class=\"font-weight-bold\">{{taskInterval.interval}}</p>\n            <div class=\"row\" *ngFor=\"let task of taskInterval.tasks; index as i\">\n                <div class=\"col-2 pr-1 font-size-90\" style=\"border-right: 1px solid #dee2e6;\">\n                    {{task.createdOn | date:'dd MMM hh:mm a'}}\n                </div>\n                <div class=\"col-10 pb-5 pl-0\" (mouseover)=\"onMouseover(i)\" (mouseout)=\"onMouseout(i)\">\n                    <div class=\"pl-4\" [style.border-left]=\"getBorderStyle(task.status)\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <p class=\"mb-0 font-weight-bold\">{{task.subject}}</p>\n                            </div>\n                            <div class=\"col-2 text-right\" [hidden]=\"!(showItems && i==showItemsIndex)\">\n                                <button type=\"button\" class=\"btn mr-3 p-0\" (click)=\"editItem(task)\">\n                                    <i class=\"fas fa-edit\"></i>\n                                </button>\n                                <button type=\"button\" class=\"btn p-0\" (click)=\"delteItem(task.leadTaskId)\">\n                                    <i class=\"far fa-trash-alt\"></i>\n                                </button>\n                            </div>\n                        </div>\n\n                        <p class=\"mb-0 font-size-90\">{{task.desc}}</p>\n                        <p class=\"mb-0 text-muted font-size-90 font-italic\" [hidden]=\"!(showItems && i==showItemsIndex)\">\n                            Owner: {{task.owner.username}} | Created by {{task.createdBy}} on {{task.createdOn | date:'dd MMM yyyy hh:mm a'}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"taskIntervals.length==0\">\n            <p>No tasks added</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userProfileForm\" (ngSubmit)=\"onSubmit(userProfileForm.value)\">\n    <div class=\"modal-header\">\n        <h6 class=\"modal-title\">User Profile</h6>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div>\n            <ngb-alert *ngIf=\"alert.message\" [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}\n            </ngb-alert>\n            <div class=\"form-group row mb-3\">\n                <label for=\"firstName\" class=\"col-sm-3 col-form-label\">First Name</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" pattern=\".{3,}\" required autofocus>\n                </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n                <label for=\"lastName\" class=\"col-sm-3 col-form-label\">Last Name</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" pattern=\".{3,}\" required>\n                </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n                <label for=\"phone\" class=\"col-sm-3 col-form-label\">Phone</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"string\" formControlName=\"mobile\" class=\"form-control\" maxlength=\"13\" pattern=\".{10,}\" required>\n                </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n                <label for=\"password\" class=\"col-sm-3 col-form-label\">Password / Confirm</label>\n                <div class=\"input-group col-sm-9\">\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control mr-2\" pattern=\"(?=.*\\d)(?=.*[~!@#$%&*-+=])(?=.*[a-z])(?=.*[A-Z]).{6,12}\">\n                    <input type=\"password\" formControlName=\"cpassword\" class=\"form-control\" pattern=\"(?=.*\\d)(?=.*[~!@#$%&*-+=])(?=.*[a-z])(?=.*[A-Z]).{6,12}\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light light-border\" (click)=\"activeModal.close('Cancel click')\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loading || !userProfileForm.valid\">Save</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/view-lead/view-lead.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/view-lead/view-lead.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n\n    <div class=\"mb-2\">\n        <h2>Lead details</h2>\n    </div>\n\n    <div class=\"row mb-2\">\n        <div class=\"col-sm-1\">\n            <button class=\"btn btn-sm btn-dark\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back </button>\n        </div>\n        <div class=\"col\">\n            <hr>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <div class=\"card mb-2\">\n                <div class=\"card-header bg-dark-blue\">\n                    <h5 class=\"mb-0\">{{lead.firstName}} {{lead.lastName}}</h5>\n                    <p class=\"mb-0\"><em>{{lead.leadStage.stageName}}</em></p>\n                </div>\n                <div class=\"card-body bg-dark-blue\">\n                    <p class=\"font-size-90\" *ngIf=\"lead.company\">\n                        <i class=\"fas fa-building mr-2\"></i> {{lead.company}}\n                    </p>\n                    <p class=\"font-size-90\" *ngIf=\"lead.email\">\n                        <i class=\"fas fa-envelope mr-2\"></i> {{lead.email}}\n                    </p>\n                    <p class=\"font-size-90\" *ngIf=\"lead.phone\">\n                        <i class=\"fas fa-phone-alt mr-2\"></i> {{lead.phone}}\n                    </p>\n                    <p class=\"font-size-90\" *ngIf=\"lead.address\">\n                        <i class=\"fas fa-map-marker-alt mr-2\"></i> {{lead.address}}\n                    </p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header bg-light-grey\">\n                    <h6 class=\"mb-0\">Lead Properties</h6>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-6 text-muted\">Owner</div>\n                        <div class=\"col-6\">{{lead.owner.username}}</div>\n                    </div>\n                    <div class=\"row mb-2\">\n                        <div class=\"col-6 text-muted\">Lead Source</div>\n                        <div class=\"col-6\">{{lead.leadSource.sourceName}}</div>\n                    </div>\n                    <div class=\"row mb-2\">\n                        <div class=\"col-6 text-muted\">Lead Age</div>\n                        <div class=\"col-6\">{{lead.ageInDays}} {{lead.ageInDays > 1? 'days': 'day'}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-9\">\n            <div class=\"row\">\n                <div class=\"col-8\">\n                    <ul class=\"list-inline\">\n                        <li class=\"list-inline-item mr-3\">\n                            <a class=\"btn btn-light light-border\" href=\"#\" role=\"button\" (click)=\"openSaveDocumentModal()\">\n                                <i class=\"far fa-calendar-plus mr-1\"></i> Document </a>\n                        </li>\n                        <li class=\"list-inline-item mr-3\">\n                            <a class=\"btn btn-light light-border\" href=\"#\" role=\"button\" (click)=\"openSaveNoteModal()\">\n                                <i class=\"far fa-edit mr-1\"></i> Note </a>\n                        </li>\n                        <li class=\"list-inline-item mr-3\">\n                            <div ngbDropdown class=\"d-inline-block\">\n                                <a class=\"btn btn-light light-border\" style=\"cursor: pointer;\" role=\"button\" id=\"dropdownAddTasks\" ngbDropdownToggle>\n                                    <i class=\"far fa-calendar-check\"></i> Task </a>\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownAddTasks\">\n                                    <button ngbDropdownItem (click)=\"openSaveTaskModal('meeting')\">\n                                        <i class=\"far fa-calendar-alt mr-2\"></i>Meeting\n                                    </button>\n                                    <button ngbDropdownItem (click)=\"openSaveTaskModal('follow-up')\">\n                                        <i class=\"fas fa-tasks mr-2\"></i>Follow-Up\n                                    </button>\n                                    <button ngbDropdownItem (click)=\"openSaveTaskModal('site-visit')\">\n                                        <i class=\"far fa-building mr-2\"></i>Site Visit\n                                    </button>\n                                    <button ngbDropdownItem (click)=\"openSaveTaskModal('phone-call')\">\n                                        <i class=\"fas fa-phone-volume mr-2\"></i>Phone Call\n                                    </button>\n                                    <button ngbDropdownItem (click)=\"openSaveTaskModal('email')\">\n                                        <i class=\"far fa-envelope mr-2\"></i>Email\n                                    </button>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-4\">\n\n                </div>\n            </div>\n            <div>\n                <ngb-tabset>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><span class=\"font-weight-500\">Activity History</span></ng-template>\n                        <ng-template ngbTabContent>\n                            <app-tab-activity-history [leadId]=\"lead.leadId\"></app-tab-activity-history>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><span class=\"font-weight-500\">Lead Details</span></ng-template>\n                        <ng-template ngbTabContent>\n                            <app-tab-lead-details [lead]=\"lead\"></app-tab-lead-details>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><span class=\"font-weight-500\">Tasks</span></ng-template>\n                        <ng-template ngbTabContent>\n                            <app-tab-tasks [lead]=\"lead\"></app-tab-tasks>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><span class=\"font-weight-500\">Notes</span></ng-template>\n                        <ng-template ngbTabContent>\n                            <app-tab-notes [leadId]=\"lead.leadId\"></app-tab-notes>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><span class=\"font-weight-500\">Documents</span></ng-template>\n                        <ng-template ngbTabContent>\n                            <app-tab-documents [leadId]=\"lead.leadId\"></app-tab-documents>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view-lead/view-lead.component */ "./src/app/components/view-lead/view-lead.component.ts");
/* harmony import */ var _components_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list-leads/list-leads.component */ "./src/app/components/list-leads/list-leads.component.ts");
/* harmony import */ var _components_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list-projects/list-projects.component */ "./src/app/components/list-projects/list-projects.component.ts");










const routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'projects', component: _components_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_9__["ListProjectsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'leads', component: _components_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_8__["ListLeadsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'leads/:leadId', component: _components_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_7__["ViewLeadComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '404', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '404' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'smartlead';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-international-phone-number */ "./node_modules/ngx-international-phone-number/index.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_dash_admin_dash_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dash-admin/dash-admin.component */ "./src/app/components/dash-admin/dash-admin.component.ts");
/* harmony import */ var _components_dash_user_dash_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dash-user/dash-user.component */ "./src/app/components/dash-user/dash-user.component.ts");
/* harmony import */ var _components_save_project_save_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/save-project/save-project.component */ "./src/app/components/save-project/save-project.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_save_lead_save_lead_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/save-lead/save-lead.component */ "./src/app/components/save-lead/save-lead.component.ts");
/* harmony import */ var _components_save_quick_lead_save_quick_lead_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/save-quick-lead/save-quick-lead.component */ "./src/app/components/save-quick-lead/save-quick-lead.component.ts");
/* harmony import */ var _components_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/list-leads/list-leads.component */ "./src/app/components/list-leads/list-leads.component.ts");
/* harmony import */ var _components_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/list-projects/list-projects.component */ "./src/app/components/list-projects/list-projects.component.ts");
/* harmony import */ var _components_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/view-lead/view-lead.component */ "./src/app/components/view-lead/view-lead.component.ts");
/* harmony import */ var _components_tab_lead_details_tab_lead_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/tab-lead-details/tab-lead-details.component */ "./src/app/components/tab-lead-details/tab-lead-details.component.ts");
/* harmony import */ var _components_tab_activity_history_tab_activity_history_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/tab-activity-history/tab-activity-history.component */ "./src/app/components/tab-activity-history/tab-activity-history.component.ts");
/* harmony import */ var _components_tab_tasks_tab_tasks_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/tab-tasks/tab-tasks.component */ "./src/app/components/tab-tasks/tab-tasks.component.ts");
/* harmony import */ var _components_tab_notes_tab_notes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/tab-notes/tab-notes.component */ "./src/app/components/tab-notes/tab-notes.component.ts");
/* harmony import */ var _components_tab_documents_tab_documents_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/tab-documents/tab-documents.component */ "./src/app/components/tab-documents/tab-documents.component.ts");
/* harmony import */ var _components_save_task_save_task_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/save-task/save-task.component */ "./src/app/components/save-task/save-task.component.ts");
/* harmony import */ var _components_save_note_save_note_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/save-note/save-note.component */ "./src/app/components/save-note/save-note.component.ts");
/* harmony import */ var _components_save_document_save_document_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/save-document/save-document.component */ "./src/app/components/save-document/save-document.component.ts");
/* harmony import */ var _http_confg_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./http-confg-interceptor */ "./src/app/http-confg-interceptor.ts");

































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _components_dash_admin_dash_admin_component__WEBPACK_IMPORTED_MODULE_15__["DashAdminComponent"],
            _components_dash_user_dash_user_component__WEBPACK_IMPORTED_MODULE_16__["DashUserComponent"],
            _components_save_project_save_project_component__WEBPACK_IMPORTED_MODULE_17__["SaveProjectComponent"],
            _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"],
            _components_save_lead_save_lead_component__WEBPACK_IMPORTED_MODULE_19__["SaveLeadComponent"],
            _components_save_quick_lead_save_quick_lead_component__WEBPACK_IMPORTED_MODULE_20__["SaveQuickLeadComponent"],
            _components_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_21__["ListLeadsComponent"],
            _components_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_22__["ListProjectsComponent"],
            _components_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_23__["ViewLeadComponent"],
            _components_tab_lead_details_tab_lead_details_component__WEBPACK_IMPORTED_MODULE_24__["TabLeadDetailsComponent"],
            _components_tab_activity_history_tab_activity_history_component__WEBPACK_IMPORTED_MODULE_25__["TabActivityHistoryComponent"],
            _components_tab_tasks_tab_tasks_component__WEBPACK_IMPORTED_MODULE_26__["TabTasksComponent"],
            _components_tab_notes_tab_notes_component__WEBPACK_IMPORTED_MODULE_27__["TabNotesComponent"],
            _components_tab_documents_tab_documents_component__WEBPACK_IMPORTED_MODULE_28__["TabDocumentsComponent"],
            _components_save_task_save_task_component__WEBPACK_IMPORTED_MODULE_29__["SaveTaskComponent"],
            _components_save_note_save_note_component__WEBPACK_IMPORTED_MODULE_30__["SaveNoteComponent"],
            _components_save_document_save_document_component__WEBPACK_IMPORTED_MODULE_31__["SaveDocumentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_9__["InternationalPhoneNumberModule"]
        ],
        entryComponents: [
            _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"],
            _components_save_project_save_project_component__WEBPACK_IMPORTED_MODULE_17__["SaveProjectComponent"],
            _components_save_lead_save_lead_component__WEBPACK_IMPORTED_MODULE_19__["SaveLeadComponent"],
            _components_save_quick_lead_save_quick_lead_component__WEBPACK_IMPORTED_MODULE_20__["SaveQuickLeadComponent"],
            _components_save_task_save_task_component__WEBPACK_IMPORTED_MODULE_29__["SaveTaskComponent"],
            _components_save_note_save_note_component__WEBPACK_IMPORTED_MODULE_30__["SaveNoteComponent"],
            _components_save_document_save_document_component__WEBPACK_IMPORTED_MODULE_31__["SaveDocumentComponent"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _http_confg_interceptor__WEBPACK_IMPORTED_MODULE_32__["HttpConfigInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dash-admin/dash-admin.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dash-admin/dash-admin.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item a {\r\n    color: #212529;\r\n}\r\n\r\n.nav-item .active {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.card .close {\r\n    text-shadow: none;\r\n    opacity: 1;\r\n}\r\n\r\n.table th,\r\ntd {\r\n    text-align: center;\r\n}\r\n\r\n.summary {\r\n    margin-left: 15px;\r\n    padding: 10px 0 0 0;\r\n    font-size: 1.15rem;\r\n}\r\n\r\n.summary label {\r\n    margin-bottom: 0;\r\n    font-weight: bolder;\r\n}\r\n\r\n.summary p {\r\n    line-height: 0.7em;\r\n}\r\n\r\n.font-size-bigger {\r\n    font-size: 1.20rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoLWFkbWluL2Rhc2gtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2gtYWRtaW4vZGFzaC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtIGEge1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jYXJkIC5jbG9zZSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3VtbWFyeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbn1cclxuXHJcbi5zdW1tYXJ5IGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uc3VtbWFyeSBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcclxufVxyXG5cclxuLmZvbnQtc2l6ZS1iaWdnZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjIwcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dash-admin/dash-admin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dash-admin/dash-admin.component.ts ***!
  \***************************************************************/
/*! exports provided: DashAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAdminComponent", function() { return DashAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");



let DashAdminComponent = class DashAdminComponent {
    constructor(restService) {
        this.restService = restService;
        this.overviewInterval = 'daily';
        this.summaryInterval = 'today';
    }
    ngOnInit() {
        this.loadBusinessOverview(null);
        this.loadTeamTaskSummary(null);
    }
    loadBusinessOverview(interval) {
        if (event) {
            event.preventDefault();
        }
        if (interval) {
            this.overviewInterval = interval;
        }
        else {
            interval = this.overviewInterval;
        }
        this.restService.getBusinessOverviewForAdmin(interval).subscribe(businessOverview => {
            this.businessOverview = businessOverview;
        });
    }
    loadTeamTaskSummary(interval) {
        if (event) {
            event.preventDefault();
        }
        if (interval) {
            this.summaryInterval = interval;
        }
        else {
            interval = this.summaryInterval;
        }
        this.restService.getAllEmployees().subscribe(userList => {
            this.restService.getTaskSummaryForAdmin(userList, interval).subscribe(teamTaskSummaryList => {
                this.teamTaskSummaryList = teamTaskSummaryList;
            });
        });
    }
};
DashAdminComponent.ctorParameters = () => [
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
DashAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash-admin',
        template: __webpack_require__(/*! raw-loader!./dash-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dash-admin/dash-admin.component.html"),
        styles: [__webpack_require__(/*! ./dash-admin.component.css */ "./src/app/components/dash-admin/dash-admin.component.css")]
    })
], DashAdminComponent);



/***/ }),

/***/ "./src/app/components/dash-user/dash-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dash-user/dash-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item a {\r\n    color: #212529;\r\n}\r\n\r\n.nav-item .active {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.card .close {\r\n    text-shadow: none;\r\n    opacity: 1;\r\n}\r\n\r\n.card {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    float: none;\r\n}\r\n\r\n.table {\r\n    width: 80%;\r\n}\r\n\r\n.table th,\r\ntd {\r\n    text-align: center;\r\n}\r\n\r\n.font-size-bigger {\r\n    font-size: 1.20rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoLXVzZXIvZGFzaC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2gtdXNlci9kYXNoLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbSBhIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uY2FyZCAuY2xvc2Uge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9udC1zaXplLWJpZ2dlciB7XHJcbiAgICBmb250LXNpemU6IDEuMjByZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dash-user/dash-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dash-user/dash-user.component.ts ***!
  \*************************************************************/
/*! exports provided: DashUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashUserComponent", function() { return DashUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let DashUserComponent = class DashUserComponent {
    constructor(restService, authenticationService) {
        this.restService = restService;
        this.authenticationService = authenticationService;
        this.summaryInterval = 'today';
    }
    ngOnInit() {
        this.loadTaskSummary(null);
    }
    loadTaskSummary(interval) {
        if (event) {
            event.preventDefault();
        }
        if (interval) {
            this.summaryInterval = interval;
        }
        else {
            interval = this.summaryInterval;
        }
        this.restService.getTaskSummaryForUser(this.authenticationService.getUser().userId, interval).subscribe(taskSummary => {
            this.taskSummary = taskSummary;
        });
    }
};
DashUserComponent.ctorParameters = () => [
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
DashUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash-user',
        template: __webpack_require__(/*! raw-loader!./dash-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dash-user/dash-user.component.html"),
        styles: [__webpack_require__(/*! ./dash-user.component.css */ "./src/app/components/dash-user/dash-user.component.css")]
    })
], DashUserComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        const loggedInUser = this.authenticationService.getUser();
        if (loggedInUser.roles.includes('Admin')) {
            this.isAdmin = true;
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/list-leads/list-leads.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/list-leads/list-leads.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\r\n    color: #495057;\r\n    background-color: #dee2e6 !important;\r\n    border-color: #dee2e6;\r\n}\r\n\r\n.input-border-dark {\r\n    border-color: #6c757d;\r\n    border-right: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWxlYWRzL2xpc3QtbGVhZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1sZWFkcy9saXN0LWxlYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3JkZXItZGFyayB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/list-leads/list-leads.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/list-leads/list-leads.component.ts ***!
  \***************************************************************/
/*! exports provided: ListLeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLeadsComponent", function() { return ListLeadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_search_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/search-model */ "./src/app/models/search-model.ts");
/* harmony import */ var src_app_models_field_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/field-filter */ "./src/app/models/field-filter.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_models_pageable_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/pageable-model */ "./src/app/models/pageable-model.ts");







let ListLeadsComponent = class ListLeadsComponent {
    constructor(formBuilder, restService) {
        this.formBuilder = formBuilder;
        this.restService = restService;
        this.loading = false;
        this.page = 1;
        this.pageSize = 10;
        this.leadStageValue = 0;
        this.leadSourceValue = 0;
        this.ownerValue = 0;
        this.enableEdit = false;
        this.enableEditIndex = null;
        this.searchForm = this.formBuilder.group({
            searchText: ''
        });
    }
    ngOnInit() {
        this.loadLeadSources();
        this.loadLeadStages();
        this.loadLeadOwners();
        this.searchLeads();
    }
    searchLeads() {
        let searchModel = new src_app_models_search_model__WEBPACK_IMPORTED_MODULE_3__["SearchModel"]();
        searchModel.searchTerm = this.searchForm.get('searchText').value;
        let fieldFilters = [];
        if (this.leadStageValue !== 0) {
            let leadStageFilter = new src_app_models_field_filter__WEBPACK_IMPORTED_MODULE_4__["FieldFilter"]();
            leadStageFilter.fieldName = 'leadStage';
            leadStageFilter.fieldValue = this.leadStageValue;
            fieldFilters.push(leadStageFilter);
        }
        if (this.leadSourceValue !== 0) {
            let leadSourceFilter = new src_app_models_field_filter__WEBPACK_IMPORTED_MODULE_4__["FieldFilter"]();
            leadSourceFilter.fieldName = 'leadSource';
            leadSourceFilter.fieldValue = this.leadSourceValue;
            fieldFilters.push(leadSourceFilter);
        }
        if (this.ownerValue !== 0) {
            let ownerFilter = new src_app_models_field_filter__WEBPACK_IMPORTED_MODULE_4__["FieldFilter"]();
            ownerFilter.fieldName = 'owner';
            ownerFilter.fieldValue = this.ownerValue;
            fieldFilters.push(ownerFilter);
        }
        searchModel.fieldFilters = fieldFilters;
        this.doSearch(searchModel);
    }
    enableEditMode(e, i) {
        this.enableEdit = true;
        this.enableEditIndex = i;
    }
    cancel() {
        this.enableEditIndex = null;
    }
    saveRowData(rowData) {
        this.enableEditIndex = null;
        console.log('rowData', rowData);
        this.restService.saveLead(rowData).subscribe(reponse => {
            console.log('reponse', reponse);
        }, error => {
            console.log('error', error);
        });
    }
    delteItem(id) {
        if (confirm('Confirm Lead deletion?')) {
            // delete and load grid
            this.searchLeads();
        }
    }
    loadLeadSources() {
        this.restService.getLeadSources().subscribe(leadSources => {
            this.leadSources = leadSources;
        });
    }
    loadLeadStages() {
        this.restService.getLeadStages().subscribe(leadStages => {
            this.leadStages = leadStages;
        });
    }
    loadLeadOwners() {
        this.restService.getLeadOwners().subscribe(leadOwners => {
            this.leadOwners = leadOwners;
        });
    }
    doSearch(searchModel) {
        let pageableModel = new src_app_models_pageable_model__WEBPACK_IMPORTED_MODULE_6__["PageableModel"]();
        pageableModel.page = this.page - 1;
        pageableModel.size = this.pageSize;
        pageableModel.request = searchModel;
        this.restService.searchLeads(pageableModel).subscribe(page => {
            this.leads = page.result;
            this.recordsPerPage = this.leads.length;
            this.totalRecords = page.total;
        });
    }
};
ListLeadsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
ListLeadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-leads',
        template: __webpack_require__(/*! raw-loader!./list-leads.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list-leads/list-leads.component.html"),
        styles: [__webpack_require__(/*! ./list-leads.component.css */ "./src/app/components/list-leads/list-leads.component.css")]
    })
], ListLeadsComponent);



/***/ }),

/***/ "./src/app/components/list-projects/list-projects.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/list-projects/list-projects.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-border-dark {\r\n    border-color: #6c757d;\r\n    border-right: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXByb2plY3RzL2xpc3QtcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3QtcHJvamVjdHMvbGlzdC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWJvcmRlci1kYXJrIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/list-projects/list-projects.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-projects/list-projects.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProjectsComponent", function() { return ListProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _save_project_save_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../save-project/save-project.component */ "./src/app/components/save-project/save-project.component.ts");
/* harmony import */ var src_app_models_search_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/search-model */ "./src/app/models/search-model.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");







let ListProjectsComponent = class ListProjectsComponent {
    constructor(formBuilder, ngbModal, restService) {
        this.formBuilder = formBuilder;
        this.ngbModal = ngbModal;
        this.restService = restService;
        this.loading = false;
        this.searchForm = this.formBuilder.group({
            searchText: ''
        });
    }
    ngOnInit() {
        this.searchProjects();
    }
    searchProjects() {
        let searchModel = new src_app_models_search_model__WEBPACK_IMPORTED_MODULE_5__["SearchModel"]();
        searchModel.searchTerm = this.searchForm.get('searchText').value;
        this.restService.searchProjects(searchModel).subscribe(projects => {
            this.projects = projects;
        });
    }
    editItem(id) {
        const modalRef = this.ngbModal.open(_save_project_save_project_component__WEBPACK_IMPORTED_MODULE_4__["SaveProjectComponent"], { size: 'xl', backdrop: 'static' });
        modalRef.componentInstance.projectId = id;
        modalRef.result.then((data) => {
            this.searchProjects();
        }, (reason) => {
            this.searchProjects();
        });
    }
    delteItem(id) {
        if (confirm('Confirm Project deletion?')) {
            this.restService.deleteProject(id).subscribe(response => {
                console.log(response);
                this.searchProjects();
            });
        }
    }
};
ListProjectsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] }
];
ListProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-projects',
        template: __webpack_require__(/*! raw-loader!./list-projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list-projects/list-projects.component.html"),
        styles: [__webpack_require__(/*! ./list-projects.component.css */ "./src/app/components/list-projects/list-projects.component.css")]
    })
], ListProjectsComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n   margin : 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZUFBZTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICBtYXJnaW4gOiAwIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");








let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authenticationService, restService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.restService = restService;
        this.loading = false;
        if (authenticationService.isLoggedIn()) {
            this.router.navigate(['dashboard']);
        }
        this.loginForm = this.formBuilder.group({
            organization: '',
            username: '',
            password: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]();
        let navState = this.router.getCurrentNavigation().extras.state;
        if (navState) {
            this.setAlert(navState.message, src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Error);
        }
    }
    ngOnInit() {
        this.loadOrganizations();
    }
    onSubmit(formData) {
        let loginRequest = formData;
        this.loading = true;
        this.login(loginRequest);
    }
    login(loginRequest) {
        this.restService.login(loginRequest).subscribe(user => {
            this.authenticationService.setUser(user);
            this.router.navigate(['dashboard']);
        }, error => {
            this.setAlert(error, src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Error);
            this.loading = false;
        });
    }
    loadOrganizations() {
        this.restService.getOrganizations().subscribe(organizations => {
            this.organizations = organizations;
        });
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n    color: #282828;\r\n    font-size: 1.7rem;\r\n    padding: 0;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n    left: -50px;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n    color: #282828;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.menu-buttons {\r\n    width: 100%;\r\n    background-color: #282828;\r\n}\r\n\r\n.menu-buttons .list-inline {\r\n    padding: 10px 30px;\r\n}\r\n\r\n.modal-dialog {\r\n    max-width: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjMjgyODI4O1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBsZWZ0OiAtNTBweDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMjgyODI4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG59XHJcblxyXG4ubWVudS1idXR0b25zIC5saXN0LWlubGluZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _save_project_save_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../save-project/save-project.component */ "./src/app/components/save-project/save-project.component.ts");
/* harmony import */ var _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-projects/list-projects.component */ "./src/app/components/list-projects/list-projects.component.ts");
/* harmony import */ var _save_lead_save_lead_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../save-lead/save-lead.component */ "./src/app/components/save-lead/save-lead.component.ts");
/* harmony import */ var _save_quick_lead_save_quick_lead_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../save-quick-lead/save-quick-lead.component */ "./src/app/components/save-quick-lead/save-quick-lead.component.ts");
/* harmony import */ var _list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../list-leads/list-leads.component */ "./src/app/components/list-leads/list-leads.component.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");










let NavBarComponent = class NavBarComponent {
    constructor(ngbModal, authenticationService) {
        this.ngbModal = ngbModal;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.username = this.authenticationService.getUser().username;
    }
    openSaveProjectModal() {
        event.preventDefault();
        this.ngbModal.open(_save_project_save_project_component__WEBPACK_IMPORTED_MODULE_4__["SaveProjectComponent"], { size: 'xl', backdrop: 'static' });
    }
    openSaveLeadModal() {
        event.preventDefault();
        this.ngbModal.open(_save_lead_save_lead_component__WEBPACK_IMPORTED_MODULE_6__["SaveLeadComponent"], { size: 'xl', backdrop: 'static', scrollable: true });
    }
    openSaveQuickLeadModal() {
        event.preventDefault();
        this.ngbModal.open(_save_quick_lead_save_quick_lead_component__WEBPACK_IMPORTED_MODULE_7__["SaveQuickLeadComponent"], { size: 'lg', backdrop: 'static' });
    }
    openListProjectsModal() {
        event.preventDefault();
        this.ngbModal.open(_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_5__["ListProjectsComponent"], { size: 'xl', backdrop: 'static' });
    }
    openListLeadsModal() {
        event.preventDefault();
        this.ngbModal.open(_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_8__["ListLeadsComponent"], { size: 'xl', backdrop: 'static' });
    }
    openUserProfileModal() {
        event.preventDefault();
        this.ngbModal.open(_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"], { backdrop: 'static' });
    }
    logout() {
        event.preventDefault();
        if (confirm("Confirm logout?")) {
            this.authenticationService.logout();
        }
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/save-document/save-document.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/save-document/save-document.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS1kb2N1bWVudC9zYXZlLWRvY3VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/save-document/save-document.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/save-document/save-document.component.ts ***!
  \*********************************************************************/
/*! exports provided: SaveDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDocumentComponent", function() { return SaveDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var src_app_models_lead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/lead */ "./src/app/models/lead.ts");









let SaveDocumentComponent = class SaveDocumentComponent {
    constructor(activeModal, formBuilder, authService, restService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.restService = restService;
        this.loading = false;
        this.saveDocumentForm = this.formBuilder.group({
            documentType: '',
            description: '',
            attachment: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"]();
    }
    ngOnInit() {
        this.getDocumentTypes();
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.attachment = file;
        }
    }
    saveDocument(formData) {
        let document = formData;
        document.createdBy = this.authService.getUser().username;
        document.updatedBy = document.createdBy;
        let lead = new src_app_models_lead__WEBPACK_IMPORTED_MODULE_8__["Lead"]();
        lead.leadId = this.leadId;
        document.lead = lead;
        console.log(document);
        this.restService.addLeadDocument(this.leadId, document, this.attachment).subscribe(response => {
            this.setAlert('Document added successfully to Lead', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Success);
            this.saveDocumentForm.reset();
        }, error => {
            console.error(error);
            this.setAlert('Server side error in adding document', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Error);
        });
    }
    getDocumentTypes() {
        this.restService.getDocumentTypes().subscribe(documentTypes => {
            this.documentTypes = documentTypes;
        });
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
SaveDocumentComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SaveDocumentComponent.prototype, "leadId", void 0);
SaveDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-document',
        template: __webpack_require__(/*! raw-loader!./save-document.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/save-document/save-document.component.html"),
        styles: [__webpack_require__(/*! ./save-document.component.css */ "./src/app/components/save-document/save-document.component.css")]
    })
], SaveDocumentComponent);



/***/ }),

/***/ "./src/app/components/save-lead/save-lead.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/save-lead/save-lead.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS1sZWFkL3NhdmUtbGVhZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/save-lead/save-lead.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/save-lead/save-lead.component.ts ***!
  \*************************************************************/
/*! exports provided: SaveLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveLeadComponent", function() { return SaveLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");








let SaveLeadComponent = class SaveLeadComponent {
    constructor(activeModal, formBuilder, restService, authenticationService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.restService = restService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.saveLeadForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            doNotSMS: false,
            doNotTrack: false,
            doNotEmail: false,
            doNotCall: false,
            leadSource: '',
            sourceCampaign: '',
            mobile: '',
            sourceMedium: '',
            jobTitle: '',
            leadStage: '',
            owner: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            interestedProjects: '',
            notes: '',
            interestRequirement: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"]();
    }
    ngOnInit() {
        this.loadProjects();
        this.loadLeadSources();
        this.loadLeadStages();
        this.loggedInUser = this.authenticationService.getUser();
        this.saveLeadForm.get('owner').setValue(this.loggedInUser.username);
    }
    saveAndAddNew(formData) {
        this.saveLead(formData);
    }
    saveAndClose(formData) {
        this.saveLead(formData);
        this.activeModal.close();
    }
    saveLead(formData) {
        let lead = formData;
        lead.owner = this.loggedInUser;
        lead.createdBy = this.loggedInUser.username;
        lead.modifiedBy = this.loggedInUser.username;
        this.restService.addLead(lead).subscribe(response => {
            this.setAlert('Lead added successfully', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Success);
            this.saveLeadForm.reset();
        }, error => {
            this.setAlert(error.message, src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Error);
        });
    }
    loadProjects() {
        this.restService.getProjects().subscribe(projects => {
            this.projects = projects;
        });
    }
    loadLeadSources() {
        this.restService.getLeadSources().subscribe(leadSources => {
            this.leadSources = leadSources;
        });
    }
    loadLeadStages() {
        this.restService.getLeadStages().subscribe(leadStages => {
            this.leadStages = leadStages;
        });
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
SaveLeadComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
SaveLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-lead',
        template: __webpack_require__(/*! raw-loader!./save-lead.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/save-lead/save-lead.component.html"),
        styles: [__webpack_require__(/*! ./save-lead.component.css */ "./src/app/components/save-lead/save-lead.component.css")]
    })
], SaveLeadComponent);



/***/ }),

/***/ "./src/app/components/save-note/save-note.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/save-note/save-note.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS1ub3RlL3NhdmUtbm90ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/save-note/save-note.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/save-note/save-note.component.ts ***!
  \*************************************************************/
/*! exports provided: SaveNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveNoteComponent", function() { return SaveNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var src_app_models_lead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/lead */ "./src/app/models/lead.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");









let SaveNoteComponent = class SaveNoteComponent {
    constructor(activeModal, formBuilder, authService, restService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.restService = restService;
        this.loading = false;
        this.saveNoteForm = this.formBuilder.group({
            note: '',
            attachment: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]();
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.attachment = file;
        }
    }
    saveNote(formData) {
        let note = formData;
        note.createdBy = this.authService.getUser().username; // if not edit mode
        note.updatedBy = note.createdBy; // if not edit mode
        // if edit mode
        // note.updatedBy = this.authService.getUser().username;
        let lead = new src_app_models_lead__WEBPACK_IMPORTED_MODULE_7__["Lead"]();
        lead.leadId = this.leadId;
        note.lead = lead;
        console.log(note);
        this.restService.addLeadNote(this.leadId, note, this.attachment).subscribe(response => {
            this.setAlert('Note added successfully to Lead', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Success);
            this.saveNoteForm.reset();
        }, error => {
            console.error(error);
            this.setAlert('Server side error in adding note', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Error);
        });
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
SaveNoteComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SaveNoteComponent.prototype, "leadId", void 0);
SaveNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-note',
        template: __webpack_require__(/*! raw-loader!./save-note.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/save-note/save-note.component.html"),
        styles: [__webpack_require__(/*! ./save-note.component.css */ "./src/app/components/save-note/save-note.component.css")]
    })
], SaveNoteComponent);



/***/ }),

/***/ "./src/app/components/save-project/save-project.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/save-project/save-project.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-length-input {\r\n    width: 120px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYXZlLXByb2plY3Qvc2F2ZS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYXZlLXByb2plY3Qvc2F2ZS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcnQtbGVuZ3RoLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/save-project/save-project.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/save-project/save-project.component.ts ***!
  \*******************************************************************/
/*! exports provided: SaveProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveProjectComponent", function() { return SaveProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/project */ "./src/app/models/project.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");










let SaveProjectComponent = class SaveProjectComponent {
    constructor(activeModal, formBuilder, restService, authenticationService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.restService = restService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.titleAndButtonText = 'Add Project';
        this.saveProjectForm = this.formBuilder.group({
            projectName: '',
            projectType: '',
            projectStage: '',
            projectLocation: '',
            builder: '',
            towers: '',
            wings: '',
            blocks: '',
            floors: '',
            units: '',
            amenities: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
            description: '',
            attachment: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_7__["Alert"]();
    }
    ngOnInit() {
        this.loadProjectTypes();
        this.loadProjectStages();
        this.loadBuilders();
        this.loadAmenities();
        if (this.projectId) {
            this.titleAndButtonText = 'Save Project';
            this.fetchProject(this.projectId);
        }
        this.loggedInUser = this.authenticationService.getUser();
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.attachment = file;
        }
    }
    getAmenitiesControls() {
        return this.saveProjectForm.get('amenities').controls;
    }
    saveProject(formData) {
        const selectedAmenities = this.saveProjectForm.value.amenities
            .map((v, i) => v ? this.amenities[i] : null)
            .filter(v => v !== null);
        let project = new src_app_models_project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        Object.assign(project, formData);
        project.amenities = selectedAmenities;
        if (this.projectId) {
            project.projectId = this.projectId;
            project.modifiedBy = this.loggedInUser.username;
            this.restService.saveProject(project, this.attachment).subscribe(response => {
                if (response.brochureName) {
                    this.brochureName = response.brochureName;
                }
                this.setAlert('Project updated successfully', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Success);
            }, error => {
                console.error(error);
                this.setAlert('Server side error in saving project', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Error);
            });
        }
        else {
            project.createdBy = this.loggedInUser.username;
            project.modifiedBy = this.loggedInUser.username;
            this.restService.addProject(project, this.attachment).subscribe(response => {
                this.setAlert('Project added successfully with id: ' + response.projectId, src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Success);
                this.saveProjectForm.reset();
            }, error => {
                console.error(error);
                this.setAlert('Server side error in adding project', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_6__["EnumAlertType"].Error);
            });
        }
    }
    downLoadBrochure() {
        event.preventDefault();
        this.restService.downLoadBrochure(this.projectId).subscribe(response => {
            const blob = new Blob([response]);
            file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](blob, this.brochureName);
        });
    }
    fetchProject(id) {
        this.restService.fetchProject(id).subscribe(project => {
            if (!project) {
                alert('Error: Project with id: ' + id + ' was not found');
                this.activeModal.dismiss();
            }
            this.saveProjectForm.patchValue({
                projectName: project.projectName,
                projectType: project.projectType,
                projectStage: project.projectStage,
                projectLocation: project.projectLocation,
                builder: project.builder,
                towers: project.towers,
                wings: project.wings,
                blocks: project.blocks,
                floors: project.floors,
                units: project.units,
                description: project.description,
            });
            this.brochureName = project.brochureName;
            this.patchAmenities(project.amenities);
            console.log(project);
        });
    }
    patchAmenities(savedAmenities) {
        let that = this;
        for (let i = 0; i < that.amenities.length; i++) {
            if (savedAmenities.filter(function (e) { return e.amenityId === that.amenities[i].amenityId; }).length > 0) {
                this.saveProjectForm.controls.amenities.controls[i].patchValue(true);
            }
            else {
                this.saveProjectForm.controls.amenities.controls[i].patchValue(false);
            }
        }
    }
    loadProjectTypes() {
        this.restService.getProjectTypes().subscribe(projectTypes => {
            this.projectTypes = projectTypes;
        });
    }
    loadProjectStages() {
        this.restService.getProjectStages().subscribe(projectStages => {
            this.projectStages = projectStages;
        });
    }
    loadBuilders() {
        this.restService.getBuilders().subscribe(builders => {
            this.builders = builders;
        });
    }
    loadAmenities() {
        this.restService.getAmenities().subscribe(amenities => {
            this.amenities = amenities;
            this.amenities.forEach(e => {
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
                this.saveProjectForm.controls.amenities.push(control);
            });
        });
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
SaveProjectComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
];
SaveProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-project',
        template: __webpack_require__(/*! raw-loader!./save-project.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/save-project/save-project.component.html"),
        styles: [__webpack_require__(/*! ./save-project.component.css */ "./src/app/components/save-project/save-project.component.css")]
    })
], SaveProjectComponent);



/***/ }),

/***/ "./src/app/components/save-quick-lead/save-quick-lead.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/save-quick-lead/save-quick-lead.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS1xdWljay1sZWFkL3NhdmUtcXVpY2stbGVhZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/save-quick-lead/save-quick-lead.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/save-quick-lead/save-quick-lead.component.ts ***!
  \*************************************************************************/
/*! exports provided: SaveQuickLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveQuickLeadComponent", function() { return SaveQuickLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");








let SaveQuickLeadComponent = class SaveQuickLeadComponent {
    constructor(activeModal, formBuilder, restService, authenticationService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.restService = restService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.saveLeadForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            leadSource: '',
            notes: '',
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]();
    }
    ngOnInit() {
        this.loadLeadSources();
        this.loggedInUser = this.authenticationService.getUser();
        this.setDefaultLeadStage();
    }
    saveAndAddNew(formData) {
        this.saveLead(formData);
    }
    saveAndClose(formData) {
        this.saveLead(formData);
        this.activeModal.close();
    }
    setDefaultLeadStage() {
        this.restService.getDefaultLeadStage().subscribe(stage => {
            this.defaultLeadStage = stage;
        });
    }
    saveLead(formData) {
        let lead = formData;
        lead.owner = this.loggedInUser;
        lead.createdBy = this.loggedInUser.username;
        lead.modifiedBy = this.loggedInUser.username;
        lead.leadStage = this.defaultLeadStage;
        this.restService.addLead(lead).subscribe(response => {
            this.setAlert('Lead added successfully', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Success);
            this.saveLeadForm.reset();
        }, error => {
            this.setAlert(error.message, src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Error);
        });
    }
    loadLeadSources() {
        this.restService.getLeadSources().subscribe(leadSources => {
            this.leadSources = leadSources;
        });
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
SaveQuickLeadComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
];
SaveQuickLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-quick-lead',
        template: __webpack_require__(/*! raw-loader!./save-quick-lead.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/save-quick-lead/save-quick-lead.component.html"),
        styles: [__webpack_require__(/*! ./save-quick-lead.component.css */ "./src/app/components/save-quick-lead/save-quick-lead.component.css")]
    })
], SaveQuickLeadComponent);



/***/ }),

/***/ "./src/app/components/save-task/save-task.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/save-task/save-task.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS10YXNrL3NhdmUtdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/save-task/save-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/save-task/save-task.component.ts ***!
  \*************************************************************/
/*! exports provided: SaveTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTaskComponent", function() { return SaveTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_lead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/lead */ "./src/app/models/lead.ts");
/* harmony import */ var src_app_models_enum_task_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/enum-task-type */ "./src/app/models/enum-task-type.ts");
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/task */ "./src/app/models/task.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/enum-task-status */ "./src/app/models/enum-task-status.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);













let SaveTaskComponent = class SaveTaskComponent {
    constructor(activeModal, formBuilder, authenticationService, restService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.restService = restService;
        this.loading = false;
        this.saveTaskForm = this.formBuilder.group({
            owner: '',
            associatedLead: '',
            subject: '',
            location: '',
            scheduleDate: '',
            fromDate: '',
            fromTime: '',
            toDate: '',
            toTime: '',
            description: '',
            marketingOfficer: '',
            attachment: '',
            organizer: '',
            taskCompleted: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_8__["Alert"]();
    }
    ngOnInit() {
        this.initTaskSpecificSettings();
        this.loggedInUser = this.authenticationService.getUser();
        if (!this.task) {
            this.saveTaskForm.get('owner').setValue(this.lead.owner.username);
            this.saveTaskForm.get('associatedLead').setValue(this.lead.firstName + ' ' + this.lead.lastName);
            this.saveTaskForm.get('organizer').setValue(this.loggedInUser.username);
        }
        else {
            console.log(this.task);
            this.populateFormOnEdit();
        }
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.attachment = file;
        }
    }
    populateFormOnEdit() {
        this.saveTaskForm.patchValue({
            owner: this.task.owner.username,
            associatedLead: (this.task.lead.firstName + ' ' + this.task.lead.lastName),
            organizer: this.task.organizer.username,
            subject: this.task.subject,
            location: this.task.location,
            scheduleDate: this.task.scheduleFrom.split(' ')[0],
            fromDate: this.task.scheduleFrom.split(' ')[0],
            fromTime: this.task.scheduleFrom.split(' ')[1],
            toDate: this.task.scheduleTo ? this.task.scheduleTo.split(' ')[0] : '',
            toTime: this.task.scheduleTo ? this.task.scheduleTo.split(' ')[1] : '',
            description: this.task.description,
            marketingOfficer: this.task.marketingOfficer,
            attachment: '',
            taskCompleted: this.task.completedOn ? true : false
        });
        this.attachmentName = this.task.attachmentName;
    }
    saveTask(formData) {
        let task = new src_app_models_task__WEBPACK_IMPORTED_MODULE_6__["Task"]();
        if (this.task) {
            task.leadTaskId = this.task.leadTaskId;
        }
        task.taskType = this.taskType;
        task.owner = this.lead.owner;
        let lead = new src_app_models_lead__WEBPACK_IMPORTED_MODULE_4__["Lead"]();
        lead.leadId = this.lead.leadId;
        task.lead = lead;
        task.organizer = this.loggedInUser;
        task.subject = formData.subject;
        if (formData.location) {
            task.location = formData.location;
        }
        if (formData.scheduleDate) {
            task.scheduleFrom = formData.scheduleDate + ' ' + '23:59:00';
        }
        if (formData.fromDate && formData.toDate) {
            task.scheduleFrom = formData.fromDate + ' ' + formData.fromTime + ':00';
            task.scheduleTo = formData.toDate + ' ' + formData.toTime + ':00';
        }
        task.description = formData.description;
        if (formData.marketingOfficer) {
            task.marketingOfficer = formData.marketingOfficer;
        }
        if (!this.task) {
            task.createdBy = this.loggedInUser.username;
            task.updatedBy = task.createdBy;
        }
        else {
            task.createdBy = this.task.createdBy;
            task.updatedBy = this.loggedInUser.username;
            task.status = this.task.status;
        }
        if (this.task && this.task.status !== src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_11__["EnumTaskStatus"].Completed) {
            if (formData.taskCompleted) {
                task.status = src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_11__["EnumTaskStatus"].Completed;
            }
        }
        console.log(task);
        if (this.task) {
            this.restService.saveLeadTask(this.lead.leadId, task, this.attachment).subscribe(response => {
                this.setAlert('Task saved successfully', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_7__["EnumAlertType"].Success);
                if (response.attachmentName) {
                    this.attachmentName = response.attachmentName;
                }
            }, error => {
                console.error(error);
                this.setAlert('Server side error in saving task', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_7__["EnumAlertType"].Error);
            });
        }
        else {
            this.restService.addLeadTask(this.lead.leadId, task, this.attachment).subscribe(response => {
                this.saveTaskForm.reset();
                this.setAlert('Task added successfully', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_7__["EnumAlertType"].Success);
            }, error => {
                console.error(error);
                this.setAlert('Server side error in adding task', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_7__["EnumAlertType"].Error);
            });
        }
    }
    downLoadAttachment() {
        event.preventDefault();
        this.restService.downLoadTaskAttachment(this.task.lead.leadId, this.task.leadTaskId).subscribe(response => {
            const blob = new Blob([response]);
            file_saver__WEBPACK_IMPORTED_MODULE_12__["saveAs"](blob, this.attachmentName);
        });
    }
    initTaskSpecificSettings() {
        this.taskSpecificFields = [];
        switch (this.taskType) {
            case src_app_models_enum_task_type__WEBPACK_IMPORTED_MODULE_5__["EnumTaskType"].Meeting: {
                this.title = this.task ? 'Edit Meeting task' : 'Create Meeting task';
                if (!this.task)
                    this.saveTaskForm.get('subject').setValue('Meeting: ');
                this.taskSpecificFields.push('location');
                this.taskSpecificFields.push('fromDate');
                this.taskSpecificFields.push('fromTime');
                this.taskSpecificFields.push('toDate');
                this.taskSpecificFields.push('toTime');
                break;
            }
            case src_app_models_enum_task_type__WEBPACK_IMPORTED_MODULE_5__["EnumTaskType"].SiteVisit: {
                this.title = this.task ? 'Edit Site Visit task' : 'Create Site Visit task';
                if (!this.task)
                    this.saveTaskForm.get('subject').setValue('Site Visit: ');
                this.taskSpecificFields.push('location');
                this.taskSpecificFields.push('fromDate');
                this.taskSpecificFields.push('fromTime');
                this.taskSpecificFields.push('toDate');
                this.taskSpecificFields.push('toTime');
                this.taskSpecificFields.push('marketingOfficer');
                this.taskSpecificFields.push('attachment');
                break;
            }
            case src_app_models_enum_task_type__WEBPACK_IMPORTED_MODULE_5__["EnumTaskType"].FollowUp: {
                this.title = this.task ? 'Edit Follow Up task' : 'Create Follow Up task';
                if (!this.task)
                    this.saveTaskForm.get('subject').setValue('Follow-Up: ');
                this.taskSpecificFields.push('scheduleDate');
                break;
            }
            case src_app_models_enum_task_type__WEBPACK_IMPORTED_MODULE_5__["EnumTaskType"].PhoneCall: {
                this.title = this.task ? 'Edit Phone Call task' : 'Create Phone Call task';
                if (!this.task)
                    this.saveTaskForm.get('subject').setValue('Phone Call: ');
                this.taskSpecificFields.push('scheduleDate');
                break;
            }
            case src_app_models_enum_task_type__WEBPACK_IMPORTED_MODULE_5__["EnumTaskType"].Email: {
                this.title = this.task ? 'Edit Email task' : 'Create Email task';
                if (!this.task)
                    this.saveTaskForm.get('subject').setValue('Email: ');
                this.taskSpecificFields.push('scheduleDate');
                break;
            }
        }
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
SaveTaskComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_10__["RestService"] }
];
SaveTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-task',
        template: __webpack_require__(/*! raw-loader!./save-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/save-task/save-task.component.html"),
        styles: [__webpack_require__(/*! ./save-task.component.css */ "./src/app/components/save-task/save-task.component.css")]
    })
], SaveTaskComponent);



/***/ }),

/***/ "./src/app/components/tab-activity-history/tab-activity-history.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/tab-activity-history/tab-activity-history.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFiLWFjdGl2aXR5LWhpc3RvcnkvdGFiLWFjdGl2aXR5LWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tab-activity-history/tab-activity-history.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tab-activity-history/tab-activity-history.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TabActivityHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabActivityHistoryComponent", function() { return TabActivityHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_activity_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/activity-interval */ "./src/app/models/activity-interval.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");




let TabActivityHistoryComponent = class TabActivityHistoryComponent {
    constructor(restService) {
        this.restService = restService;
    }
    ngOnInit() {
        this.fetchActivityHistory(this.leadId);
    }
    fetchActivityHistory(leadId) {
        this.activityIntervals = [];
        this.restService.getLeadActivities(leadId).subscribe(activities => {
            let intervalToday = new src_app_models_activity_interval__WEBPACK_IMPORTED_MODULE_2__["ActivityInterval"]();
            intervalToday.interval = 'Today';
            intervalToday.activities = [];
            let intervalOlder = new src_app_models_activity_interval__WEBPACK_IMPORTED_MODULE_2__["ActivityInterval"]();
            intervalOlder.interval = 'Older';
            intervalOlder.activities = [];
            activities.forEach(activity => {
                if (this.isToday(activity.createdOn)) {
                    intervalToday.activities.push(activity);
                }
                else {
                    intervalOlder.activities.push(activity);
                }
            });
            if (intervalToday.activities.length > 0) {
                this.activityIntervals.push(intervalToday);
            }
            if (intervalOlder.activities.length > 0) {
                this.activityIntervals.push(intervalOlder);
            }
        }, error => {
            console.error(error);
        });
    }
    isToday(createdOn) {
        let createdDate = new Date(Date.parse(createdOn));
        let today = new Date();
        return createdDate.getDate() == today.getDate() &&
            createdDate.getMonth() == today.getMonth() &&
            createdDate.getFullYear() == today.getFullYear();
    }
};
TabActivityHistoryComponent.ctorParameters = () => [
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabActivityHistoryComponent.prototype, "leadId", void 0);
TabActivityHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-activity-history',
        template: __webpack_require__(/*! raw-loader!./tab-activity-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tab-activity-history/tab-activity-history.component.html"),
        styles: [__webpack_require__(/*! ./tab-activity-history.component.css */ "./src/app/components/tab-activity-history/tab-activity-history.component.css")]
    })
], TabActivityHistoryComponent);



/***/ }),

/***/ "./src/app/components/tab-documents/tab-documents.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/tab-documents/tab-documents.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFiLWRvY3VtZW50cy90YWItZG9jdW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/tab-documents/tab-documents.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tab-documents/tab-documents.component.ts ***!
  \*********************************************************************/
/*! exports provided: TabDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDocumentsComponent", function() { return TabDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");



let TabDocumentsComponent = class TabDocumentsComponent {
    constructor(restService) {
        this.restService = restService;
        this.showItems = false;
        this.showItemsIndex = null;
    }
    ngOnInit() {
        this.getDocuments(this.leadId);
    }
    onMouseover(index) {
        this.showItems = true;
        this.showItemsIndex = index;
    }
    onMouseout(index) {
        this.showItems = false;
        this.showItemsIndex = index;
    }
    deleteItem(leadDocumentId) {
        if (confirm('Confirm document deletion?')) {
            this.restService.deleteLeadDocument(this.leadId, leadDocumentId).subscribe(response => {
                console.log(response);
                this.getDocuments(this.leadId);
            }, error => {
                console.log(error);
            });
        }
    }
    getDocuments(leadId) {
        this.restService.getLeadDocuments(leadId).subscribe(documents => {
            this.documents = documents;
        });
    }
};
TabDocumentsComponent.ctorParameters = () => [
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabDocumentsComponent.prototype, "leadId", void 0);
TabDocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-documents',
        template: __webpack_require__(/*! raw-loader!./tab-documents.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tab-documents/tab-documents.component.html"),
        styles: [__webpack_require__(/*! ./tab-documents.component.css */ "./src/app/components/tab-documents/tab-documents.component.css")]
    })
], TabDocumentsComponent);



/***/ }),

/***/ "./src/app/components/tab-lead-details/tab-lead-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/tab-lead-details/tab-lead-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFiLWxlYWQtZGV0YWlscy90YWItbGVhZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/tab-lead-details/tab-lead-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tab-lead-details/tab-lead-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: TabLeadDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLeadDetailsComponent", function() { return TabLeadDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabLeadDetailsComponent = class TabLeadDetailsComponent {
    constructor() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabLeadDetailsComponent.prototype, "lead", void 0);
TabLeadDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-lead-details',
        template: __webpack_require__(/*! raw-loader!./tab-lead-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tab-lead-details/tab-lead-details.component.html"),
        styles: [__webpack_require__(/*! ./tab-lead-details.component.css */ "./src/app/components/tab-lead-details/tab-lead-details.component.css")]
    })
], TabLeadDetailsComponent);



/***/ }),

/***/ "./src/app/components/tab-notes/tab-notes.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tab-notes/tab-notes.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFiLW5vdGVzL3RhYi1ub3Rlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tab-notes/tab-notes.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tab-notes/tab-notes.component.ts ***!
  \*************************************************************/
/*! exports provided: TabNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNotesComponent", function() { return TabNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");



let TabNotesComponent = class TabNotesComponent {
    constructor(restService) {
        this.restService = restService;
    }
    ngOnInit() {
        this.getNotes(this.leadId);
    }
    getNotes(leadId) {
        this.restService.getLeadNotes(leadId).subscribe(notes => {
            this.notes = notes;
        });
    }
};
TabNotesComponent.ctorParameters = () => [
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabNotesComponent.prototype, "leadId", void 0);
TabNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-notes',
        template: __webpack_require__(/*! raw-loader!./tab-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tab-notes/tab-notes.component.html"),
        styles: [__webpack_require__(/*! ./tab-notes.component.css */ "./src/app/components/tab-notes/tab-notes.component.css")]
    })
], TabNotesComponent);



/***/ }),

/***/ "./src/app/components/tab-tasks/tab-tasks.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tab-tasks/tab-tasks.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFiLXRhc2tzL3RhYi10YXNrcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tab-tasks/tab-tasks.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tab-tasks/tab-tasks.component.ts ***!
  \*************************************************************/
/*! exports provided: TabTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabTasksComponent", function() { return TabTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_task_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/task-interval */ "./src/app/models/task-interval.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _save_task_save_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../save-task/save-task.component */ "./src/app/components/save-task/save-task.component.ts");
/* harmony import */ var src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/enum-task-status */ "./src/app/models/enum-task-status.ts");







let TabTasksComponent = class TabTasksComponent {
    constructor(ngbModal, restService) {
        this.ngbModal = ngbModal;
        this.restService = restService;
        this.showItems = false;
        this.showItemsIndex = null;
    }
    ngOnInit() {
        this.getTasks(this.lead.leadId, '');
    }
    filterTasks(event) {
        const status = event.target.value;
        console.log(status);
        this.getTasks(this.lead.leadId, status);
    }
    onMouseover(index) {
        this.showItems = true;
        this.showItemsIndex = index;
    }
    onMouseout(index) {
        this.showItems = false;
        this.showItemsIndex = index;
    }
    getBorderStyle(status) {
        let style = '6px solid ';
        if (status == src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_6__["EnumTaskStatus"].Pending) {
            style += '#4caf50';
        }
        else if (status == src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_6__["EnumTaskStatus"].Overdue) {
            style += '#f4511e';
        }
        else if (status == src_app_models_enum_task_status__WEBPACK_IMPORTED_MODULE_6__["EnumTaskStatus"].Completed) {
            style += '#9e9e9e';
        }
        return style;
    }
    editItem(leadTask) {
        const modalRef = this.ngbModal.open(_save_task_save_task_component__WEBPACK_IMPORTED_MODULE_5__["SaveTaskComponent"], { size: 'lg', backdrop: 'static' });
        const component = modalRef.componentInstance;
        component.task = leadTask;
        component.taskType = leadTask.taskType;
        component.lead = this.lead;
        modalRef.result.then((data) => {
            this.getTasks(this.lead.leadId, '');
        }, (reason) => {
            this.getTasks(this.lead.leadId, '');
        });
    }
    delteItem(leadTaskId) {
        if (confirm('Confirm Task deletion?')) {
            this.restService.deleteLeadTask(this.lead.leadId, leadTaskId).subscribe(response => {
                console.log(response);
                this.getTasks(this.lead.leadId, '');
            }, error => {
                console.log(error);
            });
        }
    }
    getTasks(leadId, status) {
        this.taskIntervals = [];
        this.restService.getLeadTasks(leadId, status).subscribe(tasks => {
            let intervalToday = new src_app_models_task_interval__WEBPACK_IMPORTED_MODULE_2__["TaskInterval"]();
            intervalToday.interval = 'Today';
            intervalToday.tasks = [];
            let intervalOlder = new src_app_models_task_interval__WEBPACK_IMPORTED_MODULE_2__["TaskInterval"]();
            intervalOlder.interval = 'Older';
            intervalOlder.tasks = [];
            tasks.forEach(task => {
                if (this.isToday(task.createdOn)) {
                    intervalToday.tasks.push(task);
                }
                else {
                    intervalOlder.tasks.push(task);
                }
            });
            if (intervalToday.tasks.length > 0) {
                this.taskIntervals.push(intervalToday);
            }
            if (intervalOlder.tasks.length > 0) {
                this.taskIntervals.push(intervalOlder);
            }
        }, error => {
            console.error(error);
        });
    }
    isToday(createdOn) {
        let createdDate = new Date(Date.parse(createdOn));
        let today = new Date();
        return createdDate.getDate() == today.getDate() &&
            createdDate.getMonth() == today.getMonth() &&
            createdDate.getFullYear() == today.getFullYear();
    }
};
TabTasksComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabTasksComponent.prototype, "lead", void 0);
TabTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-tasks',
        template: __webpack_require__(/*! raw-loader!./tab-tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tab-tasks/tab-tasks.component.html"),
        styles: [__webpack_require__(/*! ./tab-tasks.component.css */ "./src/app/components/tab-tasks/tab-tasks.component.css")]
    })
], TabTasksComponent);



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/enum-alert-type */ "./src/app/models/enum-alert-type.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");








let UserProfileComponent = class UserProfileComponent {
    constructor(activeModal, formBuilder, restService, authenticationService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.restService = restService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.userProfileForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            mobile: '',
            password: '',
            cpassword: ''
        });
        this.alert = new src_app_models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]();
    }
    ngOnInit() {
        this.loadUserData();
    }
    onSubmit(formData) {
        let isValid = this.validateFormData(formData);
        if (!isValid) {
            return;
        }
        let user = formData;
        user.userId = this.userData.userId;
        this.restService.saveUserDetails(user).subscribe(user => {
            this.authenticationService.setUser(user);
            this.setAlert('User details updated successfully', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Success);
        }, error => {
            this.setAlert(error.message, src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Error);
            this.loading = false;
        });
    }
    loadUserData() {
        this.userData = this.authenticationService.getUser();
        this.userProfileForm.get('firstName').setValue(this.userData.firstName);
        this.userProfileForm.get('lastName').setValue(this.userData.lastName);
        this.userProfileForm.get('mobile').setValue(this.userData.mobile);
        this.userProfileForm.get('password').setValue('');
        this.userProfileForm.get('cpassword').setValue('');
    }
    validateFormData(formData) {
        this.alert.message = null;
        if (formData.password || formData.cpassword) {
            if (formData.password !== formData.cpassword) {
                this.setAlert('Passwords do not match', src_app_models_enum_alert_type__WEBPACK_IMPORTED_MODULE_5__["EnumAlertType"].Error);
            }
        }
        if (this.alert.message) {
            return false;
        }
        return true;
    }
    setAlert(message, type) {
        this.alert.message = message;
        this.alert.type = type;
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/components/view-lead/view-lead.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-lead/view-lead.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\r\n    background-color: #dee2e6 !important;\r\n}\r\n\r\n.font-weight-500 {\r\n    font-weight: 500;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWxlYWQvdmlldy1sZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctbGVhZC92aWV3LWxlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC13ZWlnaHQtNTAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/view-lead/view-lead.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-lead/view-lead.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLeadComponent", function() { return ViewLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _save_task_save_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../save-task/save-task.component */ "./src/app/components/save-task/save-task.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _save_note_save_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../save-note/save-note.component */ "./src/app/components/save-note/save-note.component.ts");
/* harmony import */ var _save_document_save_document_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../save-document/save-document.component */ "./src/app/components/save-document/save-document.component.ts");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");









let ViewLeadComponent = class ViewLeadComponent {
    constructor(location, route, ngbModal, restService) {
        this.location = location;
        this.route = route;
        this.ngbModal = ngbModal;
        this.restService = restService;
    }
    ngOnInit() {
        const leadId = this.route.snapshot.params['leadId'];
        if (!leadId) {
            this.location.back();
        }
        this.fetchLeadDetails(leadId);
    }
    goBack() {
        this.location.back();
    }
    openSaveTaskModal(taskType) {
        event.preventDefault();
        const modalRef = this.ngbModal.open(_save_task_save_task_component__WEBPACK_IMPORTED_MODULE_4__["SaveTaskComponent"], { size: 'lg', backdrop: 'static' });
        const component = modalRef.componentInstance;
        component.taskType = taskType;
        component.lead = this.lead;
    }
    openSaveNoteModal() {
        event.preventDefault();
        const modalRef = this.ngbModal.open(_save_note_save_note_component__WEBPACK_IMPORTED_MODULE_6__["SaveNoteComponent"], { backdrop: 'static' });
        modalRef.componentInstance.leadId = this.lead.leadId;
    }
    openSaveDocumentModal() {
        event.preventDefault();
        const modalRef = this.ngbModal.open(_save_document_save_document_component__WEBPACK_IMPORTED_MODULE_7__["SaveDocumentComponent"], { backdrop: 'static' });
        modalRef.componentInstance.leadId = this.lead.leadId;
    }
    fetchLeadDetails(leadId) {
        this.restService.fetchLead(leadId).subscribe(lead => {
            this.lead = lead;
            this.lead.ageInDays = this.getAgeInDays(lead.createdOn);
        });
    }
    getAgeInDays(createdOn) {
        let diff = new Date().getTime() - new Date(createdOn).getTime();
        return Math.ceil(diff / (1000 * 3600 * 24));
    }
};
ViewLeadComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"] }
];
ViewLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-lead',
        template: __webpack_require__(/*! raw-loader!./view-lead.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/view-lead/view-lead.component.html"),
        styles: [__webpack_require__(/*! ./view-lead.component.css */ "./src/app/components/view-lead/view-lead.component.css")]
    })
], ViewLeadComponent);



/***/ }),

/***/ "./src/app/http-confg-interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/http-confg-interceptor.ts ***!
  \*******************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");






let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        const token = this.authenticationService.getToken();
        if (token && this.sendTokenInRequest(request.url)) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                if (this.isLoginRequest(event.url)) {
                    const token = event.headers.get('Authorization');
                    if (token) {
                        this.authenticationService.setToken(token);
                    }
                }
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err.status && err.status === 403) {
                this.authenticationService.forceLogout();
            }
            //const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    }
    isLoginRequest(url) {
        return (url.substr(url.lastIndexOf('/')) === '/login');
    }
    sendTokenInRequest(url) {
        return !(url.substr(url.lastIndexOf('/')) === '/login' || url.substr(url.lastIndexOf('/')) === '/organizations');
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpConfigInterceptor);



/***/ }),

/***/ "./src/app/models/activity-interval.ts":
/*!*********************************************!*\
  !*** ./src/app/models/activity-interval.ts ***!
  \*********************************************/
/*! exports provided: ActivityInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityInterval", function() { return ActivityInterval; });
class ActivityInterval {
}


/***/ }),

/***/ "./src/app/models/alert.ts":
/*!*********************************!*\
  !*** ./src/app/models/alert.ts ***!
  \*********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
class Alert {
}


/***/ }),

/***/ "./src/app/models/enum-alert-type.ts":
/*!*******************************************!*\
  !*** ./src/app/models/enum-alert-type.ts ***!
  \*******************************************/
/*! exports provided: EnumAlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumAlertType", function() { return EnumAlertType; });
var EnumAlertType;
(function (EnumAlertType) {
    EnumAlertType["Success"] = "success";
    EnumAlertType["Error"] = "danger";
    EnumAlertType["Warning"] = "warning";
})(EnumAlertType || (EnumAlertType = {}));


/***/ }),

/***/ "./src/app/models/enum-task-status.ts":
/*!********************************************!*\
  !*** ./src/app/models/enum-task-status.ts ***!
  \********************************************/
/*! exports provided: EnumTaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTaskStatus", function() { return EnumTaskStatus; });
var EnumTaskStatus;
(function (EnumTaskStatus) {
    EnumTaskStatus["Completed"] = "Completed";
    EnumTaskStatus["Pending"] = "Pending";
    EnumTaskStatus["Overdue"] = "Overdue";
})(EnumTaskStatus || (EnumTaskStatus = {}));


/***/ }),

/***/ "./src/app/models/enum-task-type.ts":
/*!******************************************!*\
  !*** ./src/app/models/enum-task-type.ts ***!
  \******************************************/
/*! exports provided: EnumTaskType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTaskType", function() { return EnumTaskType; });
var EnumTaskType;
(function (EnumTaskType) {
    EnumTaskType["Meeting"] = "meeting";
    EnumTaskType["FollowUp"] = "follow-up";
    EnumTaskType["SiteVisit"] = "site-visit";
    EnumTaskType["PhoneCall"] = "phone-call";
    EnumTaskType["Email"] = "email";
})(EnumTaskType || (EnumTaskType = {}));


/***/ }),

/***/ "./src/app/models/field-filter.ts":
/*!****************************************!*\
  !*** ./src/app/models/field-filter.ts ***!
  \****************************************/
/*! exports provided: FieldFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFilter", function() { return FieldFilter; });
class FieldFilter {
}


/***/ }),

/***/ "./src/app/models/lead.ts":
/*!********************************!*\
  !*** ./src/app/models/lead.ts ***!
  \********************************/
/*! exports provided: Lead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lead", function() { return Lead; });
class Lead {
}


/***/ }),

/***/ "./src/app/models/pageable-model.ts":
/*!******************************************!*\
  !*** ./src/app/models/pageable-model.ts ***!
  \******************************************/
/*! exports provided: PageableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageableModel", function() { return PageableModel; });
class PageableModel {
}


/***/ }),

/***/ "./src/app/models/project.ts":
/*!***********************************!*\
  !*** ./src/app/models/project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/search-model.ts":
/*!****************************************!*\
  !*** ./src/app/models/search-model.ts ***!
  \****************************************/
/*! exports provided: SearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModel", function() { return SearchModel; });
class SearchModel {
}


/***/ }),

/***/ "./src/app/models/task-interval.ts":
/*!*****************************************!*\
  !*** ./src/app/models/task-interval.ts ***!
  \*****************************************/
/*! exports provided: TaskInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInterval", function() { return TaskInterval; });
class TaskInterval {
}


/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
}


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let AuthenticationService = class AuthenticationService {
    constructor(router, ngbModal) {
        this.router = router;
        this.ngbModal = ngbModal;
    }
    getToken() {
        const token = localStorage.getItem('token');
        return token;
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    isLoggedIn() {
        return this.getUser() !== null;
    }
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    logout() {
        this.doLogout(false);
    }
    forceLogout() {
        this.doLogout(true);
    }
    doLogout(forceLogout) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        let state;
        if (forceLogout) {
            state = {
                message: 'User is logged out of the application due to session expiry'
            };
        }
        this.ngbModal.dismissAll();
        this.router.navigate(['/login'], { state: state });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/search-model */ "./src/app/models/search-model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let RestService = class RestService {
    constructor(http) {
        this.http = http;
    }
    /** USER SERVICE start **/
    getOrganizations() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userAPIPrefix, '/organizations'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    login(loginRequest) {
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].loginUrl), loginRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleLoginError()));
    }
    saveUserDetails(user) {
        return this.http.put(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userAPIPrefix, '/users/' + user.userId), user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getAllEmployees() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userAPIPrefix, '/employees'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    /** PROJECT SERVICE start **/
    getProjects() {
        let searchObj = new _models_search_model__WEBPACK_IMPORTED_MODULE_3__["SearchModel"]();
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects/search'), searchObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    searchProjects(searchObj) {
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects/search'), searchObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    fetchProject(projectId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects/' + projectId))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getProjectTypes() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projectTypes'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getProjectStages() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projectStages'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getBuilders() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/builders'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getAmenities() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/amenities'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    addProject(project, file) {
        const formData = new FormData();
        formData.append('project', new Blob([
            JSON.stringify(project)
        ], {
            type: "application/json"
        }));
        if (file) {
            formData.append('file', file, file.name);
        }
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects'), formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    saveProject(project, file) {
        const formData = new FormData();
        formData.append('project', new Blob([
            JSON.stringify(project)
        ], {
            type: "application/json"
        }));
        if (file) {
            formData.append('file', file, file.name);
        }
        return this.http.put(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects/' + project.projectId), formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    deleteProject(projectId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.delete(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects/' + projectId), { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    downLoadBrochure(projectId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].projectAPIPrefix, '/projects/' + projectId, '/file'), { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    /** LEAD SERVICE start **/
    searchLeads(pageableModel) {
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/search'), pageableModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    fetchLead(leadId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadStages() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leadStages'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getDefaultLeadStage() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/getDefaultleadStage'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadSources() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leadSources'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadOwners() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leadOwners'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    addLead(lead) {
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads'), lead)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    saveLead(lead) {
        return this.http.put(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + lead.leadId), lead)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getDocumentTypes() {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/documentTypes'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    addLeadDocument(leadId, document, file) {
        const formData = new FormData();
        formData.append('document', new Blob([
            JSON.stringify(document)
        ], {
            type: "application/json"
        }));
        if (file) {
            formData.append('file', file, file.name);
        }
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/documents'), formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadDocuments(leadId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/documents'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    deleteLeadDocument(leadId, leadDocumentId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.delete(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/documents/') + leadDocumentId, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    addLeadNote(leadId, note, file) {
        const formData = new FormData();
        formData.append('note', new Blob([
            JSON.stringify(note)
        ], {
            type: "application/json"
        }));
        if (file) {
            formData.append('file', file, file.name);
        }
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/notes'), formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadNotes(leadId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/notes'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    deleteLeadNote(leadId, leadNoteId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.delete(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/notes/' + leadNoteId), { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    addLeadTask(leadId, task, file) {
        const formData = new FormData();
        formData.append('task', new Blob([
            JSON.stringify(task)
        ], {
            type: "application/json"
        }));
        if (file) {
            formData.append('file', file, file.name);
        }
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/tasks'), formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    saveLeadTask(leadId, task, file) {
        const formData = new FormData();
        formData.append('task', new Blob([
            JSON.stringify(task)
        ], {
            type: "application/json"
        }));
        if (file) {
            formData.append('file', file, file.name);
        }
        return this.http.put(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/tasks/' + task.leadTaskId), formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadTasks(leadId, status) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/tasks?status=' + status))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    deleteLeadTask(leadId, leadTaskId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.delete(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/tasks/' + leadTaskId), { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    downLoadTaskAttachment(leadId, leadTaskId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/tasks/' + leadTaskId), { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getTaskSummaryForUser(userId, interval) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/user/' + userId, '/taskSummary?interval=' + interval))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getBusinessOverviewForAdmin(interval) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/admin/businessOverview?interval=' + interval))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getTaskSummaryForAdmin(users, interval) {
        return this.http.post(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/admin/taskSummary?interval=' + interval), users)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getLeadActivities(leadId) {
        return this.http.get(this.getAPIUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].leadAPIPrefix, '/leads/' + leadId, '/activities'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError()));
    }
    getAPIUrl(...args) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        args.forEach(arg => {
            url += arg;
        });
        return url;
    }
    handleError() {
        return (error) => {
            if (error.status === 403) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Unauthorized operation');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error);
        };
    }
    handleLoginError() {
        return (error) => {
            if (error.status === 403) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Login failed: Invalid credentials');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error);
        };
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:8081',
    loginUrl: '/login',
    userAPIPrefix: '/api/user',
    projectAPIPrefix: '/api/project',
    leadAPIPrefix: '/api/lead'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\intellij-workspace\smartlead_new\smartlead-ui\src\main\resources\smartlead\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map