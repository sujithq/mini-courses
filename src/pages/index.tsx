import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingpageFeatures from '../components/LandingpageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';


const imageUrls = [
  './img/azure/img.png',
  './img/github/img.png',
];
const keywords = [
    'Azure',
    'GitHub',
    'DevOps',
    'Terraform',
    '.NET',
    'Platform Engineering',
    '...',
  ];

const buttons = [
  {
    to: '/github',
    text: 'GitHub Tutorials',
  },
  {
    to: '/azure',
    text: 'Azure Tutorials',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={'main'} buttons={buttons}/>
      </main>
    </Layout>
  );
}
