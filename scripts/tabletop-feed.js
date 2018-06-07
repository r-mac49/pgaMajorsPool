var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject("1LgVwRQ1GIB_Lx8FLEswC29dTQInj0qiBQWE2x1FyGiU");

});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
		{"mDataProp": "rank", "sTitle": "Rank", "sClass": "center"},
		{"mDataProp": "entry", "sTitle": "Entry", "sClass": "center"},
		{"mDataProp": "grouptotal", "sTitle": "Group Total", "sClass": "center"},
        {"mDataProp": "grouptoday", "sTitle": "Group Today", "sClass": "center"},
        {"mDataProp": "winnerbonus", "sTitle": "Winner Bonus", "sClass": "center"},
        {"mDataProp": "groupA1", "sTitle": "GroupA1", "sClass": "center"},
        {"mDataProp": "toparA1", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "todayA1", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thruA1", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "groupA2", "sTitle": "GroupA2", "sClass": "center"},
        {"mDataProp": "toparA2", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "todayA2", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thruA2", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "groupB", "sTitle": "GroupB", "sClass": "center"},
        {"mDataProp": "toparB", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "todayB", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thruB", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "groupC", "sTitle": "GroupC", "sClass": "center"},
        {"mDataProp": "toparC", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "todayC", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thruC", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "groupD", "sTitle": "GroupD", "sClass": "center"},
        {"mDataProp": "toparD", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "todayD", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thruD", "sTitle": "Thru", "sClass": "center"}


	];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict("#demo").html("<table cellpadding='0' cellspacing='0' border='0' class='display table table-bordered table-striped' id='data-table-container'></table>");

    var oTable = jqueryNoConflict("#data-table-container").dataTable({
        "sPaginationType": "bootstrap",
        "iDisplayLength": 120,
        "aaData": dataSource,
        "aoColumns": createTableColumns(),
        "processing": true,
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    });

};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort["string-case-asc"]  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort["string-case-desc"] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};