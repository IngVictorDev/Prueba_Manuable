// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTable').DataTable();
    $('#dataTable_ontrade').DataTable();
});

$(document).ready(function() {
    $('#dataTableActivity').DataTable({
        "order": [[ 0, 'desc' ]]
    });
});
