import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingpageFeatures from '../../components/LandingpageFeatures';
import Heading from '@theme/Heading';

import styles from '../index.module.css';


const imageUrls = [
  './img/azure/img1.png',
];

const keywords = [
    'Azure',
    'WAF',
    '...',
  ];

  const buttons = [
  {
    to: '/azure/course1/intro',
    text: 'Azure Course1 Tutorial',
  },
  {
    to: '/azure/course2/intro',
    text: 'Azure Course2 Tutorial',
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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="azure/course1">
            Course1 Tutorial
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="azure/course2">
            Course2 Tutorial
          </Link>
        </div>
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
      <main>
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={'azure'} buttons={buttons} />
      </main>
    </Layout>
  );
}
