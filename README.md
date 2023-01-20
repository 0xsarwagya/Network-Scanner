# Network Scanner

This is a command-line tool that allows you to discover devices on a network by sending ARP packets and analyzing the responses. It uses the execSync function from the child_process module to run the command-line interface (CLI) command arp to scan for devices on the network.

## What it does
The script uses the execSync function to run the command arp -a <target-ip-or-ip-range> and captures the output of the command. The script then parses the output and creates a list of dictionaries containing the IP and MAC addresses of the responding devices and prints the list to the console.

## Warning
This script should be used for educational and testing purposes only. If you use this script, you should have permission from the network administrator and all parties involved.

## Prevention

* Use a firewall to block unauthorized ARP packets
* Use ARP inspection to validate ARP packets
* Use secure protocols such as ARPsec and DHCP snooping
* Use a VPN for remote connections
* Use static ARP entries for critical devices

