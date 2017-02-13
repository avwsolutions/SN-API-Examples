// Example Resource Code Snippet
// Arnold van Wijnbergen
// AVWSolutions 2016
// Request CI 

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var ciname=request.pathParams.ci_name;
	gs.info("GET Configuration Item:" + ciname + " on SRAPI");
	var body={};
	var ci=new GlideRecord('cmdb_ci');
	ci.addQuery('name',ciname);
	ci.query();
	if(ci.next()) {
		body.Name=ci.getDisplayValue('name');
		body.Asset_tag=ci.getDisplayValue('asset_tag');
	}
              
	response.setContentType('application/JSON');
	var writer=response.getStreamWriter();
	writer.writeString(JSON.stringify(body));
         
})(request, response);
