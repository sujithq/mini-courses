import { ReactNode } from 'react';
import TypewriterComponent from '../TypewriterComponent';
import ImageRotator from '../ImageRotator';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface ButtonConfig {
  to: string;
  text: string;
}

interface LandingpageFeaturesProps {
  images: string[];
  keywords: string[];
  area: string;
  buttons: ButtonConfig[];
}

export default function LandingpageFeatures({ images, keywords, area, buttons }: LandingpageFeaturesProps): ReactNode {
  return (
    //<section className={styles.largetext}>    
    <div className='container no-sidebar'>
      <div className="row">
        <img className={styles.logo} src={require(`../../../static/img/${area}/banner.png`).default} alt={`${area} logo`} />
      </div>
      <div className='row'>
        <div className='col col--6'>
          <div className="row">
            <div className={styles.largetext}>
              Hands-on tutorials to <span className={styles.purpletext}>learn</span> <br />
              and <span className={styles.purpletext}>teach</span> <TypewriterComponent words={keywords} />
            </div>
          </div>
          <div className="row">
            <div className={`${styles.subtitle}`}>
              Grab-and-go resources to help you learn new skills but also <a href="./contributing">contribute</a> your own workshop to help others in their AKS learning journey.
            </div>
          </div>
          <div className='row'>
            <div className={styles.buttons}>
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  className={`button button--lg button--primary ${styles.buttonSpacing}`}
                  to={button.to}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='col col--6'>
          <div className={styles.img450x450}>
            <ImageRotator images={images} />
          </div>
        </div>
      </div>
    </div>
    //</section>
  );
}