import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LandingpageFeatures from '../../components/LandingpageFeatures';

const area = 'github';

const imageUrls = [
  `./img/${area}/img.png`,
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
    to: `/${area}/course1/intro`,
    text: 'GitHub Course1 Tutorial',
  },
  {
    to: `/${area}/course2/intro`,
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
        <LandingpageFeatures images={imageUrls} keywords={keywords} area={area} buttons={buttons} />
      </main>
    </Layout>
  );
}
