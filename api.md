# Create ServiceNow API in 10 minutes 

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/header.png" alt="api header">

## Introduction ServiceNow
ServiceNow is currently the Enterprise platform for managing your IT Value Chains and their corresponding services their lifecycle.Nowadays with surviving the Digital Era and the rise of DevOps/Continuous Delivery most classic ITSM implementations lack an automated approach. Many say this is caused by processes, but the truth lies somewhere in the middle. Frameworks like ITIL aren't that bad, but many times their implementation sucks. As we learned from DevOps/CLAMS we know that Lean Value Stream Mapping (VSM) can help us to identify waste (muda) in the value chain.
For bad implemenations this means:
-	No good balance the type of changes (standard vs normal), which causes overhead and enormous delays.
-	Too much repeatable inquiries asking the same information, which increase administration.
-	Too many wait time by approval/advisory boards, like CAB or other.
-       Too many handovers.

To eliminate this waste automation is our first goal, but to automate these processes into automated workflows the classic ITSM approach needs an operational extension for measuring your IT ecosystem configuration,health and performance states to feed your ITSM capabilities. This approach is called IT Operations Management (ITOM), which helps to create value chain visibility,prevent service outages by earlier detection and maximizing operational agility. 

ITOM helps companies to have better configuration control on their dynamic behaviour of their technology stacks. New compute resources can provisioned easily from standard changes or defunct states can be easily recovered with *book automation.

<img src="https://raw.githubusercontent.com/avwsolutions/SN-API-Examples/master/Content/itom-overview.png" alt="itom overview">

At Devoteam we are experts in this IT Operations Management approach !!! Why ???

-	Devoteam has a long background in Business Service Monitoring, connecting business and IT.
-	Devoteam has very strong data lake consultants on IT Operational Analytics (ITOA) and more traditional event handlers like IBM Netcool or HP Operations Manager.
-	Devoteam are software engineers, we think outside-the-box delivering a DevOps approach instead of creating vendor-locking. 
-	Devoteam can also help with the technology automation topics like discovery, orchestration and cloud management. 

ELK (Elasticsearch-Logstash-Kibana) and Graphite/Grafana are the most popular tools for analyzing your logs and metrics. Almost every company has one of these tools running, with various use cases like big data, analytics or just monitoring.
In this hands-on workshop the student learns the fundamental skills needed to understand the concepts en start creating their Monitoring configuration. 
Main topics that are covered are setting up your logstash configuration for log parsing, enabling metric gathering with Graphite (i.e. Collectd) and finally create some awesome dashboards.
The hands-on workshop is fully scenario based, including helpful lab exercises, sample code and a prepared Vagrant Box running on Linux.
To run the Vagrant Box in Virtual Box a minimum of 2 GB memory or better is preferred."

## About the speaker
Arnold van Wijnbergen is an independent advisor, coach and consultant from Devoteam. He specializes in Monitoring and Automation topics to improve quality and efficiency of operational control of IT4IT business. To achieve this he combines Lean principles with DevOps culture, because he strongly believes in the power of culture and self-steering teams. His broad experience in Monitoring and Automation tooling implementations ranges from MKB till enterprise scale, formed mainly in the banking, insurance, governance, retail, telco and service provider branches.
At ING he is management consultant within the ING Automate monitoring stream, which is responsible for advising, training and coaching DevOps teams with improving their monitoring capabilities.

*We welcome you to the workshop that will learn you to setup your own IT Operations data lake. All this can be achieved by using popular open source tools and technologies.* 

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
