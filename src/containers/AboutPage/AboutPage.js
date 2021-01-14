import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './photoabout.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage, siteInstagramPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Wardrobly',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the sustainable fashion in Greece.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>The fashion industry is the 2nd largest polluter in the world!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Welcome to Wardrobly, the GR’s wardrobe rental platform. We believe that keeping up with 
              the latest fashion trends shouldn’t cost the planet.
              </h2>

              <p>
               Wardrobly allows fashion icons to share their wardrobes securely and in seconds. We’re on a mission to 
               democratise luxury and make fashion circular. Much more than an online platform, we are a trusted community 
               and marketplace for mid to luxury fashion rental.
              </p>

              <h3 className={css.subtitle}>Are you the next big lender?</h3>

              <p>
                Wardrobly offers you a good way to earn an extra income! Rent your wardrobe's unworn 
                qualilty clothes to other people (while it's free to use). Share you fashion
                style, experience and culture with other members of our community!
              </p>
              <p>
                Wardrobly is brought to you by the good folks at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
