# ServiceNow API Examples 

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
This Github repository contains examples which can help setting up various type of API or Web Service use cases. Since we love using RESTful APIs we will start with this type of interface. As mentioned above our use cases will mainly be describing our most preferable automation and monitoring tools like Ansible, Puppet, Elastic or DynaTrace.

*If you have any questions don't hesitate to contact me by Github.com or just send me an e-mail (https://www.avwsolutions.nl). It is always a pleasure to help you guys with improving your IT management.*

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
