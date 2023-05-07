import { Intbp } from './intbp';

export const INTBPS: Intbp[] = [
  {
	  id: 1,
	  name: 'Plan Ahead',
	  description: 'Ensure proper planning is done before embarking on any integration project to reduce risks involved in implementation. Identify requirements, understand business processes, define metrics, identify constraints etc.'
  },
  {
    id: 2,
    name: 'Choose Proven Technologies & Standards',
    description: 'Utilize proven technologies like SOAP/REST APIs, Message Queues (MQ), File Transfer Protocol (FTP) etc. Also comply with industry standards like XSD, XML, JSON etc. This will make maintenance easier in future.'
  },
  {
    id: 3,
    name: 'Test and Validate Data',
    description: 'Always ensure data consistency and validity when integrating multiple systems. It should always be properly tested and validated across all levels.'
  },
  {
    id: 4,
    name: 'Monitor Integrations Regularly',
    description: 'Continuously monitoring systems\' health is important and helps identify and fix issues quickly. Setup alerts and notifications based on critical parameters.'
  },
  {
    id: 5,
    name: 'Use a Centralized Management Console',
    description: 'Having a central console makes it easy to manage and monitor integration process at one place rather than accessing individual system consoles for each system.'
  },
  {
    id: 6,
    name: 'Leverage Cloud Integration Platforms',
    description: 'Utilizing cloud platforms available like AWS Lambda, Azure Logic Apps or Google Cloud Functions can simplify integration work by providing pre-built connectors for different applications and services.'
  },
  {
    id: 7,
    name: 'Invest in Training & Knowledge Sharing',
    description: 'Keep team updated on latest tools and technology trends. Encourage knowledge sharing amongst teams for better collaboration.'
  }
];
