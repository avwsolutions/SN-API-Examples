# Create ServiceNow API in 10 minutes 

## Introduction in RESTful APIS

An API makes it possible too only once implement the business logic at Provider level and support lightweight consumers, such as an application or user interface. With this approach it is following the *do it once, do it right* and *don't repeat yourself* principles.

REST itself stands for *REpresentational State Transfer* and it is an *architectural pattern* for creating an API that uses the HTTP as its underlying communication method. REST was first described in 2000 by [Roy Thomas Fielding](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).

I really like the [Richardson Maturity Model](http://restcookbook.com/Miscellaneous/richardsonmaturitymodel/) for grading your API. The model itself consists of 4 levels, which scores on the Swamp of POX, Resources, HTTP Verbs and Hypermedia Controls usage. 

If you want to know more about RESTful API development and the maturity model I really suggest to read the [REST Cookbook](http://restcookbook.com/). 

## RESTful APIS in ServiceNow

*OutoftheBox* ServiceNow delivers table API access, which delivers straightforward access to the various tables. In some cases you want to manipulate the data input or output, this can be done with a Scripted API.

Creating a scripted REST API in ServiceNow is rather simple. The development consists of six small guided steps which help you to setup your own API in minutes.

Let's start it only takes up to 10 minutes.

# Hands-on Example

In this example we will create three simple scripted Rest API resources commonly used by IT Operations Management implementations, regarding:

-	GET change information by changenumber.
-	GET configuration information by CI name.
-	GET incident informatoin by incidentnumber.
-	POST incident from event handler or monitoring alert system.

## Create your REST API Service 

In ServiceNow you wil start with creating the REST API Service. Simple use the Application Navigator to filter for 'scripted REST' and start clicking on the **New** button.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/srapi-new.png" alt="screenshot"> 

Now it is time to fill-in the **mandatory** fields. Only *Name* is required.By practice the *API ID* field is automatic filled in with the *Name* value.

In our case we will create the a service with the *Name* value of **srapi**, which refers to scripted-rest-api.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/srapi-add.png" alt="screenshot">

:warning: Use a short, lowercase and functional name for identifying that service and a solid foundation for grouping your later creating resources.

## Create our Service Resources

Now that we have a service created we can implement the actual resources that provide the functionality. Resources are mainly containing the configuration around

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

Now we can repeat the above step for the Change request and Incident creation.

Now you can use multiple options to test your API. One of the easiest options is using the REST API Explorer feature. See below a screenshot of this option.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/rest-api-explorer.png" alt="screenshot">


## Test your API

Testing your API can be done using various methods. Simple validation can be done using the REST API Explorer feature. More automated testing can be done using SOAPUI or cURL started from your Jenkins pipeline.

Below the examples explained.

### Simple validation using the REST API Explorer feature

Below a screenshot of the REST API Explorer, which is accessible by the following formatted URL *https://<instance>.service-now.com/$restapi.do*

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/rest-api-explorer.png" alt="screenshot"> 

Now follow the following steps to test your change request API.

1. Select your namespace (i.e. 78973) which corresponds to your just created REST API.
2. Select you API name which corresponds to our just created service called 'srapi'.
3. Select you API version if you released more than one version. In our case 'v1' or just 'latest'.
4. Now type in an existing incidentnumber and press *Send*.

Now the request, response and body are shown. See an example output body provided in this repository [requestincident.example-output](https://github.com/avwsolutions/SN-API-Examples/tree/master/SRAPI)


Other options for testing your API are using Postman/SOAPui or a simple cURl statement.


## Pre-tutorial preparation
At the workshop, you will need to bring your own computer. Before you go to the DevOpsDays 2016 workshop, there are some steps you should do some preparation to get your work environment ready. Here are the steps:
- For PC, Mac and Linux users we need you to install the latest version of [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads).
- If you are new to Vagrant execute the [Getting Started](https://www.vagrantup.com/docs/getting-started/) for a very simple introduction. Skip this step if you are already familiar with Vagrant.
```
vagrant init hashicorp/precise64
vagrant up
vagrant ssh
hostname
uname –a
exit
vagrant destroy
```
# **And now you're ready. See you at the DevOpsDays 2016!!!**
