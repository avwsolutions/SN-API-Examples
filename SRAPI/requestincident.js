// Example Resource Code Snippet
// Arnold van Wijnbergen
// AVWSolutions 2016
// Request Incident

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var incid=request.pathParams.incident_number;
	gs.info("GET incident request:" + incid + " on SRAPI");
	var body={};
	var inc=new GlideRecord('incident');
	inc.addQuery('number',incid);
	inc.query();
	if(inc.next()) {
		body.GroupName=inc.getDisplayValue('assignment_group');
		body.Description=inc.getDisplayValue('description');
	}
              
	response.setContentType('application/JSON');
	var writer=response.getStreamWriter();
	writer.writeString(JSON.stringify(body));
         
})(request, response);
