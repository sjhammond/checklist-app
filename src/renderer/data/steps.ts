import { Step } from '../models/step';
import { ProductTier } from '../models/product-tier';

export const Steps: Step[] = [
  {
    id: 1,
    taskId: 1,
    title: "Confirm passwords and settings on existing network and server equipment",
    productTier: ProductTier.Essential,
    infoPath: "../renderer/info_content/document.htm"
  },
  {
    id: 2,
    taskId: 1,
    title: 'Check switches',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 3,
    taskId: 1,
    title: 'Determine IP Address Ranges',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 4,
    taskId: 1,
    title: 'Configure the Network',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 5,
    taskId: 1,
    title: 'Test the Network',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 6,
    taskId: 1,
    title: 'Check Network Time Protocol (NTP) Server',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 7,
    taskId: 1,
    title: 'Check Access to Microsoft Active Directory',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 8,
    taskId: 1,
    title: 'Verify Microsoft SQL server access and permissions',
    productTier: ProductTier.Professional,
    infoPath: ''
  },
  {
    id: 9,
    taskId: 1,
    title: 'Verify access to remote XProtect VMS systems that will be interconnected',
    productTier: ProductTier.Corporate,
    infoPath: ''
  },
  {
    id: 10,
    taskId: 2,
    title: 'Set a static IP address or configure DHCP and hostname',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 11,
    taskId: 2,
    title: 'Set administrator account credentials',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 12,
    taskId: 2,
    title: 'Verify firmware version with Milestone Supported Devices list',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 13,
    taskId: 2,
    title: 'Mount cameras and other IP hardware devices',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 14,
    taskId: 2,
    title: 'Configure additional device settings',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 15,
    taskId: 2,
    title: 'Install Milestone Screen recorder',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 16,
    taskId: 3,
    title: 'Install operating system environment',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 17,
    taskId: 3,
    title: 'Set and verify network settings',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 18,
    taskId: 3,
    title: 'Check server access',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 19,
    taskId: 3,
    title: 'Add and verify user accounts and passwords',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 20,
    taskId: 3,
    title: 'Enable remote management, such as Windows Remote Desktop',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 21,
    taskId: 3,
    title: 'Check Server time',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 22,
    taskId: 3,
    title: 'Install all important Windows Updates',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 23,
    taskId: 3,
    title: 'Check additional server software and settings',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 24,
    taskId: 3,
    title: 'Add anti-virus scan exceptions',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 25,
    taskId: 3,
    title: 'Enable SNMP traps',
    productTier: ProductTier.Corporate,
    infoPath: ''
  },
  {
    id: 26,
    taskId: 4,
    title: 'Prepare storage system',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 27,
    taskId: 4,
    title: 'Verify access to remote storage',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 28,
    taskId: 5,
    title: 'Prepare for installation',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 29,
    taskId: 5,
    title: 'Run the Management Server installer',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 30,
    taskId: 5,
    title: 'Verify the Management Server is running',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 31,
    taskId: 6,
    title: 'Download and run Milestone Mobile server software from the Management Server',
    productTier: ProductTier.Professional,
    infoPath: ''
  },
  {
    id: 32,
    taskId: 6,
    title: 'Specify URL and credentials to connect to the Management Server',
    productTier: ProductTier.Professional,
    infoPath: ''
  },
  {
    id: 33,
    taskId: 6,
    title: 'Verify the Mobile Server is running',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 34,
    taskId: 7,
    title: 'Prepare for installation',
    productTier: ProductTier.Professional,
    infoPath: ''
  },
  {
    id: 35,
    taskId: 7,
    title: 'Download and run the XProtect Recording Server installer from the Management Server',
    productTier: ProductTier.Professional,
    infoPath: ''
  },
  {
    id: 36,
    taskId: 7,
    title: 'Verify the server is running',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 37,
    taskId: 7,
    title: 'Install a different device pack',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 38,
    taskId: 7,
    title: 'Add anti-virus scan exceptions',
    productTier: ProductTier.Essential,
    infoPath: ''
  },
  {
    id: 39,
    taskId: 8,
    title: 'Prepare for installation',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
  {
    id: 40,
    taskId: 8,
    title: 'Download and run the XProtect Recording Server installer from the Management Server',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
  {
    id: 41,
    taskId: 8,
    title: 'Verify the server is running',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
  {
    id: 42,
    taskId: 8,
    title: 'Install a different device pack',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
  {
    id: 43,
    taskId: 8,
    title: 'Add anti-virus scan exceptions',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
  {
    id: 44,
    taskId: 9,
    title: 'Prepare for installation',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
  {
    id: 45,
    taskId: 9,
    title: 'Download and run the Management Client software from the Management Server',
    productTier: ProductTier.Expert,
    infoPath: ''
  },
];
