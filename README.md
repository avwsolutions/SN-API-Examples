# ServiceNow {API} and [Integrations] by $Example 

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

## Example material
This tutorial contains examples which can help setting up various type of API or Web Service use cases. Since we love using RESTful APIs we will start with this type of interface. As mentioned above our use cases will mainly be describing our most preferable automation and monitoring tools like Ansible, Puppet, Elastic or DynaTrace.

:warning: **If you have any questions don't hesitate to contact me by Github.com or just through [social media](https://www.avwsolutions.nl). It is always a pleasure to help you guys with improving your IT management.**

## Pre-tutorial preparation
Before starting this tutorial you need the following software installed or available.
-	ServiceNow development instance, preferable [Helsinki](https://docs.servicenow.com/category/helsinki) or [Istanbul](https://docs.servicenow.com/category/istanbul) release.
-	Account with a preferable the *admin* role assigned.
-	Locally installed [cURL](https://curl.haxx.se/docs/manpage.html) CLI to test the API interfaces. GUI option is using Chrome plugin like [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
-	Locally available tool called [SOAPui](https://www.soapui.org/downloads/soapui.html) for simple testing of Web Services.Preferable APIs can also tested with SOAPui.
-	Use git CLI to clone this repository easily with ...

`` git clone https://github.com/avwsolutions/SN-API-Examples `` 

:warning: *Most parts you need additional Automation or Monitoring software implemented, this part contains that additional preparation.*
 
# **And now you are ready to start with the tutorial !!!, :warning: go over to the [API Tutorial](https://github.com/avwsolutions/SN-API-Examples/blob/master/api.md)**
