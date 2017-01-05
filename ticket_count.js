<script>
  $.ajax({
    url: "http://webshare/departments/it/_api/Lists/getbytitle('IT%20Helpdesk')/items?$select=Title,Priority,OData__Status&$filter=(Priority eq '(2) High') and (OData__Status ne 'Closed')",
    type: "GET",
    // dataType: "json",
    headers: {
        accept: "application/json;odata=verbose",
        contentType: "application/json;odata=verbose"
    },
    success: function(data) {
        // you can find the items in JSON format under data.results
        console.log(data.d.results);
    console.log(data.d.results.length);
    },
    error: function(data, errorCode, errorMessage) {
        // error handling
    }
  });
</script>
