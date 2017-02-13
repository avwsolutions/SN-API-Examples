# Create a ServiceNow API in 10 minutes 

## Table of Contents

-   [1.0 Small introduction in API concepts](#intro)
    -   [1.1 Introduction in RESTful APIS](#intrest)
    -	[1.2 RESTful APIS in ServiceNow](#restnow)
-   [2.0 Hands-on Example](#hexample)
    -   [2.1 Create your REST API Service](#service)
    -   [2.2 Create our Service Resources](#resources)
	-  [2.2.1 Incident Request API](#incident)
	-  [2.2.2 Change Request API](#change)
	-  [2.2.3 Incident creation API](#incidentc)
	-  [2.2.4 CI Request API](#configitem)
    -   [2.3 Test your API](#apitest)
	-  [2.3.1 Simple validation using the REST API Explorer feature](#explorer)
	-  [2.3.2 Testing your REST API using cURL](#curl)
	-  [2.3.3 Advanced testing with SoapUI](#soapui)

<a id="intro"></a>
# Small introduction in API concepts
<a id="intrest"></a>
## Introduction in RESTful APIS

An API makes it possible too only once implement the business logic at Provider level and support lightweight consumers, such as an application or user interface. With this approach it is following the *do it once, do it right* and *don't repeat yourself* principles.

REST itself stands for *REpresentational State Transfer* and it is an *architectural pattern* for creating an API that uses the HTTP as its underlying communication method. REST was first described in 2000 by [Roy Thomas Fielding](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).

I really like the [Richardson Maturity Model](http://restcookbook.com/Miscellaneous/richardsonmaturitymodel/) for grading your API. The model itself consists of 4 levels, which scores on the Swamp of POX, Resources, HTTP Verbs and Hypermedia Controls usage. 

If you want to know more about RESTful API development and the maturity model I really suggest to read the [REST Cookbook](http://restcookbook.com/). 

<a id="restnow"></a>
## RESTful APIS in ServiceNow

*OutoftheBox* ServiceNow delivers table API access, which delivers straightforward access to the various tables. In some cases you want to manipulate the data input or output, this can be done with a Scripted API.

Creating a scripted REST API in ServiceNow is rather simple. The development consists of six small guided steps which help you to setup your own API in minutes. Find some more interesting information about this cool functionality at [docs.servicenow.com](https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/integrate/inbound-rest/concept/c_RESTAPI.html)

Let's start, it only takes up to 10 minutes.

<a id="hexample"></a>
# Hands-on Example

In this example we will create three simple scripted Rest API resources commonly used by IT Operations Management implementations, regarding:

-	GET change information by changenumber.
-	GET configuration information by CI name.
-	GET incident informatoin by incidentnumber.
-	POST incident from event handler or monitoring alert system.

<a id="service"></a>
## Create your REST API Service 

In ServiceNow you wil start with creating the REST API Service. Simple use the Application Navigator to filter for '*Scripted REST*§' and start clicking on the **New** button.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/srapi-new.png" alt="screenshot"> 

Now it is time to fill-in the **mandatory** fields. Only *Name* is required.By practice the *API ID* field is automatic filled in with the *Name* value.

In our case we will create the a service with the *Name* value of **srapi**, which refers to scripted-rest-api.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/srapi-add.png" alt="screenshot">

:warning: Use a short, lowercase and functional name for identifying that service and a solid foundation for grouping your later creating resources.

<a id="resources"></a>
## Create our Service Resources

Now that we have a service created we can implement the actual resources that provide the functionality. Resources are mainly containing the configuration around

<a id="incident"></a>
### Incident request API
First step is to open the *New resource* window. This can be done opening the service window and clicking on *New* on the *Resources* tab.
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part1.png" alt="screenshot">

We will first start with the resource *Name* and *Version*. We will use 'incident' as name and set our *default* version to 'v1'.

Now it is time to select the correct *HTTP Method*. Since we are only requesting data and not modifying, creating or deleting records we must choose the **GET** method.
As *relative path* we will choose the resource name followed by the actual specific resource which we need the data from. in our case this will be 'incident/{incident_number}'. 

:warning: Please be aware of these REST API principles. 

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part2.png" alt="screenshot">

Now we are ready for writing some actual code. Current example code is :

-	Receiving the incident_number from url path.
-	Logging the requested incident_number & action to the system logs.
-	Querying the specific incident_number data.
-	Save the specific results in a JSON formatted body and writes it back as output.

Use the example code provided in this repository [requestincident](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI).

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part3.png" alt="screenshot">

After you saved your awesome code you enter the last configuration step around security. My advice to always setup minimal authentication extended with authorization provided by global defined applicable ACL policies.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part4.png" alt="screenshot">

In this example we only enable *Require Authentication*.

Now we can repeat the above step for the Change request and Incident creation.

<a id="change"></a>
### Change request API
First step is to open the *New resource* window. This can be done opening the service window and clicking on *New* on the *Resources* tab.
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/change-part1.png" alt="screenshot">

We will first start with the resource *Name* and *Version*. We will use 'change' as name and set our *default* version to 'v1'.

Now it is time to select the correct *HTTP Method*. Since we are only requesting data and not modifying, creating or deleting records we must choose the **GET** method.
As *relative path* we will choose the resource name followed by the actual specific resource which we need the data from. in our case this will be 'change/{change_number}'.

:warning: Please be aware of these REST API principles.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/change-part2.png" alt="screenshot">

Now we are ready for writing some actual code. Current example code is :

-       Receiving the change_number from url path.
-       Logging the requested change_number & action to the system logs.
-       Querying the specific change_number data.
-       Save the specific results in a JSON formatted body and writes it back as output.

Use the example code provided in this repository [requestchange](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI).

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/change-part3.png" alt="screenshot">

After you saved your awesome code you enter the last configuration step around security. My advice to always setup minimal authentication extended with authorization provided by global defined applicable ACL policies.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part4.png" alt="screenshot">

In this example we only enable *Require Authentication*.

<a id="incidentc"></a>
### Incident creation API

First step is to open the *New resource* window. This can be done opening the service window and clicking on *New* on the *Resources* tab.
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incidentc-part1.png" alt="screenshot">

We will first start with the resource *Name* and *Version*. We will use 'create-incident' as name and set our *default* version to 'v1'.

Now it is time to select the correct *HTTP Method*. Since we are now posting data and creating a new record we must choose the **POST** method.
As *relative path* we will choose only the resource name. in our case this will be 'create-incident'.

:warning: Please be aware of these REST API principles.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incidentc-part2.png" alt="screenshot">

Now we are ready for writing some actual code. Current example code is :

-       Receiving the data attributes from the JSON formatted body.
-       Logging the action and employee which triggering the API to the system logs.
-       Create a new incident record with the provided data attributes.
-       Save the status in a JSON formatted body and writes it back as output.

Use the example code provided in this repository [createincident](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI).

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incidentc-part3.png" alt="screenshot">

After you saved your awesome code you enter the last configuration step around security. My advice to always setup minimal authentication extended with authorization provided by global defined applicable ACL policies.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part4.png" alt="screenshot">

In this example we only enable *Require Authentication*.

<a id="configitem"></a>
### CI request API

Now use the previous samples above to create the *CI Request* resource.Use the example code provided in this repository [requestci](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI).

<a id="apitest"></a>
## Test your API

Testing your API can be done using various methods. Simple validation can be done using the REST API Explorer feature. More automated testing can be done using SOAPUI or cURL started from your Jenkins pipeline.

Below the examples explained.

<a id="explorer"></a>
### Simple validation using the REST API Explorer feature

Below a screenshot of the REST API Explorer, which is accessible by the following formatted URL 

*https://\<instance\>.service-now.com/$restapi.do*

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/rest-api-explorer.png" alt="screenshot"> 

Now follow the following steps to test your incident request API.

1. Select your namespace (i.e. 78973) which corresponds to your just created REST API.
2. Select you API name which corresponds to our just created service called 'srapi'.
3. Select you API version if you released more than one version. In our case 'v1' or just 'latest'.
4. Now type in an existing incidentnumber and press *Send*.

Now the request, response and body are shown. See an example output body provided in this repository [requestincident.example-output](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI)

<object width="300" height="300" type="text/html" data="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/SRAPI/requestincident.example-output" border="1" > </object>

<a id="curl"></a>
### Testing your REST API using cURL

If you already noticed the API explorer window they also provide example CLI snippits for most popular tools or scripting languages.

In this cURL example we will test the incident request API by following the steps below.

Open an CLI and run the following statement.

```
curl "https://instance.service-now.com/api/78973/srapi/change/CHG0030002" \
--request GET \
--header "Accept:application/json" \
--user 'username':'password'
```

Now the body is shown in JSON format. See an example output body provided in this repository [requestchange.example-output](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI)

<a id="soapui"></a>
### Advanced testing with SoapUI

If you are working with multiple colleagues on the same project or you want to combine it with all your other tests you can use SoapUI. This example just gives an idea of SoapUI usage in the scope of testing a ServiceNow REST API.

In this SoapUI Example we will test the incident create API by following the steps below.

1. Open SoapUI.
2. Open or create a new REST Project.
3. Now add your first resource. In our case *https://instance.service-now.com* /api/78973/srapi/incident.
4. After the resource is created you can add the first POST method.
5. As additional add a mediatype application/json body with the following defined:

```
{
	"category": "software",
	"shortdescription": "Hello GitHub this is my first troubleticket",
	"employee": "Abel Tuter"
}
```
6. Now you can easily submit the request.

Now a lot of information is shown like the response time, reponse and other details. See an example SoapUI configuration below:

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/soapui-example.png" alt="screenshot">

