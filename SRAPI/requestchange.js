// Example Resource Code Snippet
// Arnold van Wijnbergen
// AVWSolutions 2016
// Request Change

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
        var chgid=request.pathParams.change_number;
        gs.info("GET change request:" + chgid + " on SRAPI");
	var body={};
        var chgreq=new GlideRecord('change_request');
        chgreq.addQuery('number',chgid);
        chgreq.query();
        if(chgreq.next()) {
                body.GroupName=chgreq.getDisplayValue('assignment_group');
                body.Priority=chgreq.getDisplayValue('priority');
		body.State=chgreq.getDisplayValue('state');
		body.StartDate=chgreq.getDisplayValue('start_date');
		body.EndDate=chgreq.getDisplayValue('end_date');
        }

        response.setContentType('application/JSON');
        var writer=response.getStreamWriter();
        writer.writeString(JSON.stringify(body));

})(request, response);
