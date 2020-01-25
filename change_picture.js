
// HTML Elements
const cloud_btn = document.getElementById("cloud_btn");
const onsite_btn = document.getElementById("onsite_btn");
const writeup = document.getElementById("writeup");
const diagram = document.getElementById("diagram");
const display = document.getElementById("box_display");
const pdf_display = document.getElementById("writeup");
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
const wan_area = document.getElementById("wan_area")
const internet_area = document.getElementById("internet_area")
const application_area = document.getElementById("application_area")
const monitor_area = document.getElementById("monitor_area")
// Area maps for cloud


//onsite messages
const soc_message = "SOC: This node represents all scanning, logging, and security automation tools implemented in this topology. This includes Splunk indexers, Splunk Phantom nodes, and Qualys scanners (Or the company’s preferred SIEM, SOAR, and Scanning solutions). This node is responsible for rapid response, recovery, and data protection. Assets in the SOC are designed for high-availability, redundancy, and resiliancy."
const ws_message = "Workstations: This node represents all end-devices. All users and devices are granted minimum access to network resources as are necessary for their role. Devices are configured to be rapidly quarantined if necessary, and sensitive information is backed up in accordance with business goals, company policy, and regulations. Access-layer switches are configured with DHCP snooping, and other necessary security appliances are placed here to prevent MITM attacks. Strong password policies, user training, and heavy monitoring are implemented here. This node is considered one of the most significant attack vectors and is heavily monitored."
const email_message = "Email Servers: This node represents the internal company email servers. All traffic received and sent from these servers is monitored for malicious attachments, suspicious activity, NDA breaches, and sensitive data exposure. This is another significant attack vector if emails are allowed from external organizations. Email verification and monitoring services will be applied here, such as SolarWinds Mail Assure."
const db_message = "High Availability Database Server Group: The database services provided by this node will need to be heavily backed up, with servers placed in different failure domains. Different policies will be applied depending on the business goals, regulations, and sensitivity of the data. This cluster will be designed with a high availability configuration to meet the company’s goals and resources. This means the cluster could have active-active, hot standby, or warm standby configurations."
const dns_message = "DNS Servers: These servers manage forward and reverse lookup zones within this internal network. To prevent DNS poisoning attacks, internal DNS queries are restricted to only cover the internal network, lessening the possibility that malicious DNS responses are received. Servers designated to resolve names or addresses to external networks are monitored for suspicious activity."
const rp_message = "Reverse proxy server group: The software and servers that are responsible for forwarding user requests, providing access control to internal resources, and caching web resources when needed. It provides an extra layer of logic in directing web traffic. This group also provides an extra layer of monitoring and security for internal resources."
const sdn_message = "SDN Server Group: This node utilizes infrastructure-as-code technologies such as Ansible, Terraform, and Vagrant to create a responsive, agile and scalable infrastructure. This design allows engineers to efficiently patch, manage, and monitor servers. Network devices can also be managed and configured here through services like RESTCONF and NETCONF"
const dmz_message = "DMZ: This DMZ contains firewalls from two different vendors. If a vulnerability exists in one firewall, the entire DMZ will not be compromised. The DMZ isolates the public-facing application servers from the internal network."
const application_message = "Application Server Group: This Application server group is made up of multiple servers in different failure domains. Each server has multiple virtual machines hosting the application. These virtual machines are managed by Terraform and can be automatically scaled up or down to meet the incoming load. If vulnerabilities are found in the software hosting the application, or in the virtual machines themselves, this design allows us to quickly apply patches, implement new software, or administer the entire server group at once. Reverse proxy software is used here to provide more efficient use of resources, traffic monitoring, and caching."
const monitor_message = "Traffic Monitoring: This is a collection of in-line appliances and software that monitors all incoming and outgoing network traffic. These include IPS, IDS, and a NGFW. These solutions can dynamically respond to suspicious activity, send alerts, and block malicious traffic."
const network_message = "Internal Networking devices: This node represents the Cisco collapsed-core architecture interconnecting the hosts on this network. The layer 3 switches in the distribution/core layer are used for inter-VLAN routing, and for connecting access-layer switches. DHCP servers are also included in this area of the network. Switches are configured with redundant connections for resliance. Proper layer two and layer three protections (VLANs, DHCP Snooping, BPDU guard, root guard, etc) are implemented here. This area of the network can be dynamically configured to react to network incidents by the SDN server group."
const wan_message = "Edge router: the WAN edge for the network. It contains multiple standby routers for failover, and routers are multi-homed to at least two ISPs to protect from outages."
const internet_message = "Public Internet: This is where all external traffic originates from. All traffic from this node is treated with extreme caution. All public traffic destined for the internal network is heavily monitored. "
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



//Image swapping
cloud_btn.addEventListener("click", function(){ 
    diagram.src = "assets/cloud.png";
    diagram.usemap = "#cloud-map";
    diagram.style.height = "2000";
    diagram.style.width = "1086";
});
onsite_btn.addEventListener("click", function(){ 
    diagram.src = "assets/onsite.png"; 
    diagram.usemap = "#onsite-map";
    diagram.style.height = "1018";
    diagram.style.width = "1023";
});
