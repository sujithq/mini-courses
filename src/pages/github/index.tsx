import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingpageFeatures from '../../components/LandingpageFeatures';
import Heading from '@theme/Heading';

import styles from '../index.module.css';


const imageUrls = [
  './img/github/img2.png',
];

const keywords = [
    'GitHub',
    'Actions',
    'Pages',
    'Copilot',
    'CLI',
    '...',
  ];

const buttons = [
  {
    to: '/github/course1/intro',
    text: 'GitHub Course1 Tutorial',
  },
  {
    to: '/github/course2/intro',
    text: 'GitHub Course2 Tutorial',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={'github'} buttons={buttons} />
      </main>
    </Layout>
  );
}
