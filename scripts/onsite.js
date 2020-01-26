
// HTML Elements
const writeup = document.getElementById("writeup");
const diagram = document.getElementById("diagram");
const display = document.getElementById("box_display");
// Area maps for onsite
const soc_area = document.getElementById("soc_area");
const workstations_area = document.getElementById("workstations_area");
const email_area = document.getElementById("email_area");
const db_group_area = document.getElementById("db_group_area");
const dns_area = document.getElementById("dns_area");
const reverse_proxy_area = document.getElementById("reverse_proxy_area");
const sdn_area = document.getElementById("sdn_area");
const network_area = document.getElementById("network_area");
const dmz_area = document.getElementById("dmz_area");
const wan_area = document.getElementById("wan_area");
const internet_area = document.getElementById("internet_area");
const application_area = document.getElementById("application_area");
const monitor_area = document.getElementById("monitor_area");
//onsite messages
const soc_message = "SOC: This node represents all scanning, logging, and security automation tools implemented in this design. This includes Splunk indexers, Splunk Phantom nodes, and Qualys scanners (or the company’s preferred SIEM, SOAR, and scanning solutions). This node is responsible for rapid response, recovery, and data protection. The servers and software in this group will be an early target for an attacker that gains access to a network. Assets in the SOC are designed for high-availability, redundancy, and resiliency to ensure they are functional in the event of a serious security breach. Failure to properly protect this group could result in attacks going unnoticed. "
const ws_message = "Workstations: This node represents all user end devices. All users and devices are granted minimum access to network resources as are necessary for their role. Devices are configured to be rapidly quarantined if necessary, and sensitive information is backed up in accordance with business goals, company policy, and regulations. Access-layer switches are configured with DHCP snooping, and other necessary security appliances are placed here to prevent MITM attacks and unauthorized access. This area of the network will often be the entry point for threat actors, so strong password policies, user training, and heavy monitoring are implemented here."
const email_message = "Email Servers: This node represents the internal company email servers. All traffic received and sent from these servers is monitored for malicious attachments, suspicious activity, NDA breaches, and sensitive data exposure. This is another significant attack vector if emails are allowed from external organizations. Email attachments from external organizations will be scanned and users will be trained to report questionable emails. Email verification and monitoring services will be applied here, such as SolarWinds Mail Assure. Different email software should be used for backup servers to protect from vulnerabilities in the software itself being exploited."
const dns_message = "DNS Servers: These servers manage forward and reverse lookup zones within this internal network. To prevent DNS poisoning attacks, internal DNS queries are restricted to only cover the internal network, lessening the possibility that malicious DNS responses are received. Servers designated to resolve names or addresses to external networks are monitored for suspicious activity. A threat actor could seek to redirect internal traffic or cut off users and applications from DNS entirely by gaining access to this group. Trusted backup DNS servers should be made ready for redundancy. Different DNS domain management software should be used for backup servers to protect from vulnerabilities in the software itself being exploited."
const rp_message = "Reverse Proxy Server Group: The software and servers that are responsible for forwarding user requests, providing access control to internal resources, and caching web resources when needed. They provide an extra layer of logic in directing web traffic. This group also provides an extra layer of monitoring and security for internal resources. A threat actor could seek to cut off access to internal applications or monitor internal traffic by compromising these servers. Infrastructure-as-code and SOAR will help provide automatic failover to an uncompromised system if there is a suspected breach. Different reverse-proxy software should be used for backup servers to protect from vulnerabilities in the software itself being exploited."
const sdn_message = "SDN Server Group: This node utilizes infrastructure-as-code technologies such as Ansible, Terraform, and Vagrant to create a responsive, agile and scalable infrastructure. This design allows engineers to efficiently patch, manage, and monitor servers. Network devices can also be managed and configured here through services like RESTCONF and NETCONF The ability to manipulate the behavior of the entire network makes this group a great security tool for engineers and a great target for threat actors. Access to this group should be minimized and frequent security audits should be performed here."
const dmz_message = "DMZ: This configuration is responsible for isolating public-facing application servers from the internal network. This DMZ contains firewalls from two different vendors. If a vulnerability exists in one firewall, the entire DMZ will not be compromised. This is the second layer of defense against external threat actors."
const application_message = "Application Server Group: This Application server group is made up of multiple servers in different failure domains. Each server has multiple virtual machines hosting the application. These virtual machines are managed by Terraform and can be automatically scaled up or down to meet the incoming load. If vulnerabilities are found in the software hosting the application, or in the virtual machines themselves, this design allows us to quickly apply patches, implement new software, or administer the entire server group at once. Reverse proxy software is used here to provide more efficient use of resources, traffic monitoring, and caching. This group is a major target for threat actors, as public-facing applications can provide an entry point to the internal network and often allow users to input information that will be processed or stored by internal servers. Application servers will have minimal access to network resources and code will be heavily tested before, during, and after deployment for vulnerabilities. Developers will follow best practices when implementing APIs, CORS, and any other technologies that allow code to access other resources within the environment."
const monitor_message = "Traffic Monitoring: This is a collection of in-line appliances and software that monitors all incoming and outgoing network traffic. These include IPS, IDS, and NGFW appliances. These solutions can dynamically respond to suspicious activity, send alerts, and block malicious traffic. Threat actors will look to expose vulnerabilities in these appliances to allow their payloads and activities to go unnoticed or to monitor internal network traffic. Manual security audits will be conducted to find loopholes in security rules or remote access vulnerabilities."
const network_message = "Internal Networking Devices: This node represents the Cisco collapsed-core architecture interconnecting the hosts on this network. The layer three switches in the distribution/core layer are used for inter-VLAN routing, and for connecting access-layer switches. DHCP servers are also included in this area of the network. Switches are configured with redundant connections and proper layer two and layer three protections (VLANs, DHCP Snooping, BPDU guard, root guard, etc) are implemented here. This area of the network can be dynamically configured to react to network incidents by the SDN server group. Multiple failure domains for network devices will be created to prevent downtime in the event of an incident. Threat actors will seek to exploit vulnerabilities in these appliances to spoof IP or MAC addresses, bypass access control, or conduct DOS attacks. Network analytics and statistics should be logged and monitored for suspicious activity or connection loss."
const wan_message = "Edge router: the WAN edge for the network. It contains multiple standby routers for failover, and routers are multi-homed to at least two ISPs to protect from outages."
const internet_message = "Public Internet: This is where all external traffic originates from. All traffic from this node is treated with extreme caution. All public traffic destined for the internal network is heavily monitored. This is where the majority of threats will originate. "
const db_message = "High Availability Database Server Group: The database services provided by this node will need to be heavily backed up, with servers placed in different failure domains. Different policies will be applied depending on the business goals, regulations, and sensitivity of the data. Data-at-rest will be properly encrypted and data transferred to and from this group will have encryption enforced as well. This cluster will be designed with a high availability configuration to meet the company’s goals and resources. This means the cluster could have active-active, hot standby, or warm standby configurations. This section of the network will be the end goal for many threat actors, and multiple layers of security will be enforced to prevent sensitive data exposure."
// Display box updates
soc_area.addEventListener("click", function(){  writeup.innerHTML= soc_message});
workstations_area.addEventListener("click", function(){  writeup.innerHTML= ws_message});
email_area.addEventListener("click", function(){  writeup.innerHTML= email_message});
db_group_area.addEventListener("click", function(){  writeup.innerHTML= db_message});
dns_area.addEventListener("click", function(){  writeup.innerHTML= dns_message});
reverse_proxy_area.addEventListener("click", function(){  writeup.innerHTML= rp_message});
sdn_area.addEventListener("click", function(){  writeup.innerHTML= sdn_message});
dmz_area.addEventListener("click", function(){  writeup.innerHTML= dmz_message});
application_area.addEventListener("click", function(){  writeup.innerHTML= application_message});
monitor_area.addEventListener("click", function(){  writeup.innerHTML= monitor_message});
network_area.addEventListener("click", function(){  writeup.innerHTML= network_message});
internet_area.addEventListener("click", function(){  writeup.innerHTML= internet_message});
wan_area.addEventListener("click", function(){  writeup.innerHTML= wan_message});