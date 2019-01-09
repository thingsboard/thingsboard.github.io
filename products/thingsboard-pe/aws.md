---
layout: pe-aws
title: ThingsBoard Professional Edition on AWS Marketplace
description: 
---

# ThingsBoard Professional Edition on AWS Marketplace

<br/>
<br/>
<div id="pe-aws-pricing">
    <table>
        <thead>
            <tr>
                <th></th>
                <th colspan="5"><div class="instance-type-header">Instance types</div></th>
            </tr>
            <tr>
                <th></th>
                <th class="bottom-shadow"><div class="instance-type-header">Maker</div></th>
                <th class="bottom-shadow"><div class="instance-type-header">Prototype</div></th>
                <th class="bottom-shadow"><div class="instance-type-header">Startup</div></th>
                <th class="bottom-shadow"><div class="instance-type-header">Business</div></th>
                <th class="bottom-shadow"><div class="instance-type-header">Enterprise</div></th>
            </tr>
        </thead>
        <tbody>
            <tr class="price">
                <td></td>
                <td>
                    <div class="price-cell">
                        <div class="price">$10</div>
                        <div>/month</div>
                        <p><a href="/products/thingsboard-pe/install/?deploy=cloud" class="button">Try it now</a></p>
                    </div>
                </td>
                <td>
                    <div class="price-cell">
                        <div class="price">$99</div>
                        <div>/month</div>
                        <p><a href="/products/thingsboard-pe/install/?deploy=cloud" class="button">Try it now</a></p>
                    </div>
                </td>
                <td>
                    <div class="price-cell">
                        <div class="price">$199</div>
                        <div>/month</div>
                        <p><a href="/products/thingsboard-pe/install/?deploy=cloud" class="button">Try it now</a></p>
                    </div>
                </td>
                <td>
                    <div class="price-cell">
                        <div class="price">$299</div>
                        <div>/month</div>
                        <p><a href="/products/thingsboard-pe/install/?deploy=cloud" class="button">Try it now</a></p>           
                    </div>
                </td>
                <td>
                    <div class="price-cell">
                        <div class="price">$500</div>
                        <div>/month</div>
                        <p><a href="/products/thingsboard-pe/install/?deploy=cloud" class="button">Try it now</a></p>
                    </div>
                </td>
            </tr>
            <tr class="yearly-sub">
                <td></td>
                <td colspan="5"><div class="yearly-sub-cell">Save up to 18% on yearly subscription</div></td>
            </tr>
            <tr>
                <td>Devices and Assets</td>
                <td>up to 10</td>
                <td>up to 100</td>
                <td>up to 500</td>
                <td>up to 1,000</td>
                <td>Unlimited<sup>*</sup></td>
            </tr>
            <tr>
                <td>Customers, Users and Dashboards</td>
                <td colspan="5">Unlimited<sup>*</sup></td>
            </tr>
            <tr>
                <td>Data points or Messages</td>
                <td colspan="5">Unlimited<sup>*</sup></td>
            </tr>
            <tr>
                <td>White-labeling</td>
                <td><b>Not available</b></td>
                <td colspan="4">Advanced<sup>**</sup></td>
            </tr>
            <tr>
                <td>Dashboards</td>
                <td colspan="5">Unlimited<sup>*</sup></td>            
            </tr>
            <tr>
                <td>Integrations</td>
                <td colspan="5">Unlimited<sup>*</sup></td>
            </tr>
            <tr>
                <td>API Calls</td>
                <td colspan="5">Unlimited<sup>*</sup></td>
            </tr>
            <tr>
                <td>Scheduler Events</td>
                <td colspan="5">Unlimited<sup>*</sup></td>
            </tr>
            <tr>
                <td>Support</td>
                <td colspan="2">Community</td>
                <td>Email support whithin 72 hours</td>
                <td>Email support whithin 48 hours</td>
                <td>Email support whithin 24 hours</td>
            </tr>
            <tr>
                <td>Recommended AWS Instance</td>
                <td>t2.micro</td>
                <td>t2.medium</td>
                <td>m5.large</td>
                <td>m5.xlarge</td>
                <td>m5.xlarge cluster</td>
            </tr>
            <tr>
                <td>Recommended DB</td>
                <td colspan="2">Co-located PostgreSQL</td>
                <td>Co-located PostgreSQL or Amazon RDS for PostgreSQL or external Cassandra DB</td>
                <td colspan="2">Cassandra Cluster</td>
            </tr>
            <tr>
                <td></td>
                <td class="note" colspan="5">* - Platform does not introduce any software limits, limited by the hardware or network capacity only</td>
            </tr>
            <tr>
                <td></td>
                <td class="note" colspan="5">** - Custom logos, color schemes, login pages, translations and domains on a system, tenant and customer levels</td>
            </tr>
        </tbody>
    </table>
    <div class="bottom-background"></div>
</div>

## Frequently asked questions

<br/>

<div class="pi-accordion">
    <h3 id="trial--billing">Trial &amp; Billing</h3>    
    <div class="item" data-tag="h4" data-id="what-does-free-trial-mean" data-title="What does &quot;free trial&quot; mean?">
        <div class="container">
            <p>
                AWS marketplace will not charge you for the TB PE License during the trial, however, you will still need to pay for the AWS EC2 infrastructure you use (server instance, disk, network and optional services).
            </p>    
        </div>    
    </div>
    <div class="item" data-tag="h4" data-id="what-does-hourly-charges-mean" data-title="What does &quot;hourly charges&quot; mean?">
        <div class="container">
            <p>
                AWS is going to charge you for each hour the server is running. Most of the servers are running 24/7, because they need to be able to constantly serve requests from devices or users. 
                However, if you are using this server for a development purposes can stop the server to save time in the end of the work day.
            </p>    
        </div>    
    </div>
    <div class="item" data-tag="h4" data-id="what-is-the-total-cost-of-ownership-tco-for-my-tb-pe-instance" data-title="What is the Total Cost of Ownership (TCO) for my TB PE instance? ">
        <div class="container">
            <p>The typical total cost of ownership consists of:</p>
            <ul>
                <li>TB License fee - see pricing above</li>
                <li>AWS EC2 instance price - we believe <a href="https://www.ec2instances.info/">ec2instances.info</a> is a convenient resource to compare prices.</li>
                <li>Additional EC2 costs for network traffic, disk space and other optional services (Cloud Watch or similar)</li>
            </ul>            
            <p>Example A: The price for TB PE Maker instance based on t2.micro with 20 GB disk will cost approximately $20.5 per month:</p>            
            <ul>
                <li>$10.08 for 720 hours of TB PE Maker license fee</li>
                <li>$8.468 for 1 month of t2.micro usage</li>
                <li>$2.0 for 20 GB of EBS volume per month</li>
            </ul>             
            <p>Example B: The price for TB PE Prototype instance based on t2.medium with 100 GB disk will cost approximately $143.862 per month:</p>            
            <ul>
                <li>$99.99 for 720 hours of TB PE Maker license fee</li>
                <li>$33.872 for 1 month of t2.medium usage</li>
                <li>$10.0 for 100 GB of EBS volume per month</li>
            </ul>
            <p>All prices are in USD.</p>
        </div>    
    </div>
    <div class="item" data-tag="h4" data-id="what-saving-options-are-available" data-title="What saving options are available?">
        <div class="container">
            <p>
                Save up to 18% on a yearly TB PE AWS marketplace license or deploy TB PE on premises for additional savings. 
                Additional AWS EC2 infrastructure savings are available for reserved EC2 instances.
            </p>    
        </div>    
    </div>        
</div>



