import { ProductTier } from '../models/product-tier';
import { Task } from '../models/task';

export const Tasks: Task[] = [
  {
    id: 1,
    phaseId: 1,
    title: 'Configure the network',
    productTier: ProductTier.Essential
  },
  {
    id: 2,
    phaseId: 1,
    title: 'Configure cameras and other IP hardware devices',
    productTier: ProductTier.Essential
  },
  {
    id: 3,
    phaseId: 1,
    title: 'Configure Windows servers',
    productTier: ProductTier.Essential
  },
  {
    id: 4,
    phaseId: 1,
    title: 'Configure storage',
    productTier: ProductTier.Essential
  },
  {
    id: 5,
    phaseId: 1,
    title: 'Install XProtect Management Server',
    productTier: ProductTier.Essential
  },
  {
    id: 6,
    phaseId: 1,
    title: 'Install Milestone Mobile Server',
    productTier: ProductTier.Essential
  },
  {
    id: 7,
    phaseId: 1,
    title: 'Install XProtect Recording Server',
    productTier: ProductTier.Essential
  },
  {
    id: 8,
    phaseId: 1,
    title: 'Install XProtect Failover Recording Servers',
    productTier: ProductTier.Expert
  },
  {
    id: 9,
    phaseId: 1,
    title: 'Install XProtect Management Clients',
    productTier: ProductTier.Essential
  }
]
