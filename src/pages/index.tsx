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
  './img/devops/img.png',
  './img/terraform/img.png',
  './img/.net/img.png',
  './img/platform_engineering/img.png',
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

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={'main'} buttons={buttons}/>
      </main>
    </Layout>
  );
}
