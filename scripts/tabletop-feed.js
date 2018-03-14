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
        {"mDataProp": "top10", "sTitle": "Top10", "sClass": "center"},
        {"mDataProp": "topar1", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "today1", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thru1", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "pick2", "sTitle": "11-25", "sClass": "center"},
        {"mDataProp": "topar2", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "today2", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thru2", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "pick3", "sTitle": "26-50", "sClass": "center"},
        {"mDataProp": "topar3", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "today3", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thru3", "sTitle": "Thru", "sClass": "center"},
        {"mDataProp": "pick4", "sTitle": "51+", "sClass": "center"},
        {"mDataProp": "topar4", "sTitle": "ToPar", "sClass": "center"},
        {"mDataProp": "today4", "sTitle": "Today", "sClass": "center"},
        {"mDataProp": "thru4", "sTitle": "Thru", "sClass": "center"}

	];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict("#demo").html("<table cellpadding='0' cellspacing='0' border='0' class='display table table-bordered table-striped' id='data-table-container'></table>");

    var oTable = jqueryNoConflict("#data-table-container").dataTable({
        "sPaginationType": "bootstrap",
        "iDisplayLength": 25,
        "aaData": dataSource,
        "aoColumns": createTableColumns(),
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