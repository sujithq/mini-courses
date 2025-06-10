import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import LandingpageFeatures from '../../components/LandingpageFeatures';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

const area = 'azure';
const title = 'Azure Tutorials';
const tagline= 'Learn Azure with our step-by-step tutorials';

const imageUrls = [
  `./img/${area}/img.png`,
];

const keywords = [
    'Azure',
    'WAF',
    '...',
  ];

  const buttons = [
  {
    to: `/${area}/course1/intro`,
    text: 'Azure Course1 Tutorial',
  },
  {
    to: `/${area}/course2/intro`,
    text: 'Azure Course2 Tutorial',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {title}
        </Heading>
        <p className="hero__subtitle">{tagline}</p>        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Hello from ${title}`}
      description="${tagline}">
      <HomepageHeader />
      <main>
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={area} buttons={buttons} />
      </main>
    </Layout>
  );
}
