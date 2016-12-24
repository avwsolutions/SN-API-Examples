# Create ServiceNow API in 10 minutes 

## Introduction in RESTful APIS

An API makes it possible too only once implement the business logic at Provider level and support lightweight consumers, such as an application or user interface. With this approach it is following the *do it once, do it right* and *don't repeat yourself* principles.

REST itself stands for *REpresentational State Transfer* and it is an *architectural pattern* for creating an API that uses the HTTP as its underlying communication method. REST was first described in 2000 by [Roy Thomas Fielding](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).
 

## Part 1 Creating Scripted Rest API 

In this example we will create three simple scripted Rest API resources commonly used by IT Operations Management.
change-part1.png
change-part2.png
change-part3.png
header.png
incident-part1.png
incident-part2.png
incident-part3.png
incident-part4.png
incidentc-part1.png
incidentc-part2.png
incidentc-part3.png
poc_overview.png
srapi-add.png
srapi-new.png


<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part1.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part2.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part3.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part4.png" alt="screenshot">

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incidentc-part1.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incidentc-part2.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incidentc-part3.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part4.png" alt="screenshot">

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/change-part1.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/change-part2.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/change-part3.png" alt="screenshot">
<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/incident-part4.png" alt="screenshot">


-	BankIT, the fictive application that is submitting the monitoring data.
-	Logfile, which stores the application server logs.
-	CollectD, which directly sends OperatingSystem metrics to the Graphite environment.
-	Logstash indexer, which transforms your input streams to their associated output.
-	Elasticsearch document store, which is the distributed system which will store all events in JSON format and has Lucene capabilities for full text searches.
-	Kibana dashboard, which gives visualization access to the elasticsearch document store.
-	Java Producer, which is the simulation worker for generating events and metrics to the eponymous topics.
-	Kafka/Zookeeper, which is a high throughput distributed message broker for real-time integration.
-	Java Consumer, which is the worker for retrieving the metrics from the topic and sending them to Graphite.
-	Graphite, which is a Python/Django/Whisper based application for storing numeric time-series data and rendering their graphs. 
-	Grafana, which is a dashboard application for displaying metric data from various sources like Graphite and Elasticsearch.

*This will be a self-paced beginners’ tutorial for attendees to learn ELK, Kafka and Graphite basics as they install and develop this ITOps data lake within their Vagrantbox. Experienced Devoteam colleagues will serve as support to help attendees successfully complete this workshop.*

:warning: **This document prepares you for the workshop before you actually attend. If you are already at the [DevOpsDays 2016](http://www.devopsdays.org/events/2016-amsterdam/workshops/arnold-van-wijnbergen/), please go over to the [Workshop](https://github.com/avwsolutions/DOD-AMS-Workshop/blob/master/workshop.md)**

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
