// Example Resource Code Snippet
// Arnold van Wijnbergen
// AVWSolutions 2016
// Create Incident / TroubleTicket

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	gs.info("POST troubleticket request by:" + request.body.data.employee + " received on SRAPI");
	var inc = new GlideRecord('incident');
	inc.short_description = request.body.data.shortdescription;
	inc.category = request.body.data.category;
	inc.caller_id.setDisplayValue(request.body.data.employee);
	inc.insert();
     
})(request, response);
