import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingpageFeatures from '../../components/LandingpageFeatures';

const area = 'azure';

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

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={area} buttons={buttons} />
      </main>
    </Layout>
  );
}
