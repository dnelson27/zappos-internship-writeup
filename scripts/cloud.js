// HTML Elements
const diagram = document.getElementById("diagram");
const display = document.getElementById("writeup");
// Area maps for onsite
const kube_area = document.getElementById("kube_area");
const devops_area = document.getElementById("devops_area");
const appsec_area = document.getElementById("appsec_area");
const backup_area = document.getElementById("backup_area");
const ws_area = document.getElementById("ws_area");
const dev_ws_area = document.getElementById("dev-ws_area");
const sdn_area = document.getElementById("sdn_area");
const net_area = document.getElementById("net_area");
const dns_area = document.getElementById("dns_area");
const monitor_area = document.getElementById("monitor_area");
const wan_area = document.getElementById("wan_area");
const vpn_area = document.getElementById("vpn_area");
const internet_area = document.getElementById("internet_area");
const google_area = document.getElementById("google_area");
const vpcsec_area = document.getElementById("vpcsec_area");
const route53_area = document.getElementById("route53_area");
const rds_area = document.getElementById("rds_area");
const inspect_area = document.getElementById("inspect_area");
const bean_area = document.getElementById("bean_area");
const proxy_area = document.getElementById("proxy_area");
//Messages
const monitor_message = "Traffic Monitoring: This is a collection of in-line appliances and software that monitors all incoming and outgoing network traffic. These include IPS, IDS, and a NGFW. These solutions can dynamically respond to suspicious activity, send alerts, and block malicious traffic."
const network_message = "Internal Networking devices: This node represents the Cisco collapsed-core architecture interconnecting the hosts on this network. The layer 3 switches in the distribution/core layer are used for inter-VLAN routing, and for connecting access-layer switches. DHCP servers are also included in this area of the network. Switches are configured with redundant connections for resliance. Proper layer two and layer three protections (VLANs, DHCP Snooping, BPDU guard, root guard, etc) are implemented here. This area of the network can be dynamically configured to react to network incidents by the SDN server group."
const wan_message = "Edge router: the WAN edge for the network. It contains multiple standby routers for failover, and routers are multi-homed to at least two ISPs to protect from outages."
const internet_message = "Public Internet: This is where all external traffic originates from. All traffic from this node is treated with extreme caution. All public traffic destined for the internal network is heavily monitored. "
const kube_message = "Production Container Orchestration: This node represents the Amazon ECS or Kubernetes implementation hosting the public-facing application for this company. Containerization allows for increased isolation of application resources. Back-end and front-end components can be separated more easily and scaled independently. If vulnerabilities are found, container orchestration allows for the rapid implementation of patches and bug fixes."
const dev_message = "CI/CD Pipeline: This CI/CD pipeline utilizes strictly AWS software, but these could be substituted for other tools. CodeCommit is being used for version control, while CodeBuild is being used for continuous integration and testing. This design gives developers and security engineers the ability to fully test code before it is deployed."
const appsec_message = "Application Security Services: This node represents the cloud security software in use in this design. Amazon IAM and Cognito are being used to provide access control to the development services and to the application itself. Amazon WAF and Shield are being used to protect the application from external attacks. Amazon CloudWatch is being used for monitoring, analytics, and logging for all cloud resources. These services, when combined with frequent manual testing, allow security engineers to monitor cloud resources, find vulnerabilities, and respond to threats efficiently."
const rds_message = "Amazon RDS: This node represents the database resources for this company. Multiple RDS instances can be used for different roles, like storing information for company applications and network resources. Increasing isolation without requiring the company to purchase the hardware and space needed to run a high-availability database cluster. Using RDS allows security engineers to focus more on securing access to sensitive information, and less on securing the hardware, operating system, and other server components."
const google_message = "Google G Suite: Google G suite is the service being used for company email. Using SaaS allows this company to save resources on securing internal email servers, without compromising security or availability. Engineers can spend more time on other aspects of security, and do not have to dedicate time to managing an internal group of on-site or cloud servers."
const proxy_message = "EC2 Reverse Proxy Server Group: This server group provides reverse proxy and traffic monitoring services for this cloud network.  It is also responsible for forwarding user requests, providing access control to VPC resources, and caching web resources when needed. It provides an extra layer of logic in directing traffic."
const route53_message = "Amazon Route53: This node is responsible for providing name resolution for resources within this VPC. It provides a secure and scalable means to route end users and internal VPC traffic. "
const bean_message = "Amazon Elastic Beanstalk (Internal application hosting): This node provides the means to orchestrate the hosting of internal applications. This company has the freedom to choose how they would like their internal services to be hosted, and integrates with auto-scaling, load balancers, and security features."
const vpcsec_message = "VPC Security Services: This node represents the cloud security software in use in this design. Amazon IAM and Cognito are being used to provide access control to VPC resources. Amazon CloudWatch is being used for monitoring, analytics, and logging for all cloud resources. These services, when combined with frequent manual testing, allow security engineers to monitor cloud resources, find vulnerabilities, and respond to threats efficiently."
const vpn_message = "VPN Concentrator: This is an on-site device or software that allows cloud engineers to securely access cloud resources without needing to leave other remote access protocols open to the public. "
const backup_message = "On-Site Emergency Backup Storage: These resources will be utilized for sensitive information that should not leave the internal network, as well as for backups in the event of a total internet outage. The need for these resources will be dependent on the sensitivity of the information stored by the company, the position of this company in the supply chain, and any other risk factors associated with this company."
const dev_ws_message = "Developer Workstations: These user workstations are treated with special care as they have access to company source code, intellectual property, and need special access to cloud resources."
const dns_message = "DNS Servers: These servers manage forward and reverse lookup zones within this internal network. To prevent DNS poisoning attacks, internal DNS queries are restricted to only cover the internal network, lessening the possibility that malicious DNS responses are received. Servers designated to resolve names or addresses to external networks are monitored for suspicious activity."
const soc_message = "SOC: This node represents all scanning, logging, and security automation tools implemented in this design. This includes Splunk indexers, Splunk Phantom nodes, and Qualys scanners (or the company’s preferred SIEM, SOAR, and scanning solutions). This node is responsible for rapid response, recovery, and data protection. Assets in the SOC are designed for high-availability, redundancy, and resiliancy."
const sdn_message = "SDN Server Group: This node utilizes infrastructure-as-code technologies such as Ansible, Terraform, and Vagrant to create a responsive, agile and scalable infrastructure. This design allows engineers to efficiently patch, manage, and monitor servers. Network devices can also be managed and configured here through services like RESTCONF and NETCONF. The ability to manipulate the behavior of the entire network makes this group a great security tool for engineers and a great target for threat actors. Access to this group should be minimized and frequent security audits should be performed here.""
const ws_message = "Workstations: This node represents all end devices. All users and devices are granted minimum access to network resources as are necessary for their role. Devices are configured to be rapidly quarantined if necessary, and sensitive information is backed up in accordance with business goals, company policy, and regulations. Access-layer switches are configured with DHCP snooping, and other necessary security appliances are placed here to prevent MITM attacks and unauthorized access. Strong password policies, user training, and heavy monitoring are implemented here. This node is considered one of the most significant attack vectors and is heavily monitored."
const inspect_message = "Amazon Inspector: This service is implemented to scan applications for vulnerabilities, monitor network activity, and allow engineers to verify security compliance."

//Event handlers
net_area.addEventListener("click", function(){ display.innerHTML = network_message });
wan_area.addEventListener("click", function(){ display.innerHTML = wan_message });
internet_area.addEventListener("click", function(){ display.innerHTML = internet_message });
kube_area.addEventListener("click", function(){ display.innerHTML = kube_message });
devops_area.addEventListener("click", function(){ display.innerHTML = dev_message });
appsec_area.addEventListener("click", function(){ display.innerHTML = appsec_message });
rds_area.addEventListener("click", function(){ display.innerHTML = rds_message });
google_area.addEventListener("click", function(){ display.innerHTML = google_message });
proxy_area.addEventListener("click", function(){ display.innerHTML = proxy_message });
route53_area.addEventListener("click", function(){ display.innerHTML = route53_message });
bean_area.addEventListener("click", function(){ display.innerHTML = bean_message });
vpcsec_area.addEventListener("click", function(){ display.innerHTML = vpcsec_message });
vpn_area.addEventListener("click", function(){ display.innerHTML =vpn_message });
backup_area.addEventListener("click", function(){ display.innerHTML = backup_message });
dev_ws_area.addEventListener("click", function(){ display.innerHTML = dev_ws_message });
dns_area.addEventListener("click", function(){ display.innerHTML = dns_message });
soc_area.addEventListener("click", function(){ display.innerHTML = soc_message });
sdn_area.addEventListener("click", function(){ display.innerHTML = sdn_message });
ws_area.addEventListener("click", function(){ display.innerHTML = ws_message });
inspect_area.addEventListener("click", function(){ display.innerHTML= inspect_message });
monitor_area.addEventListener("click", function(){ display.innerHTML= monitor_message });






