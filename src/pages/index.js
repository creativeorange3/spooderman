import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Headspooder from 'sections/headspooder';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import ExcitingFeatures from 'sections/exciting-features';
import FAQ from 'sections/faq';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import HappyCustomer from 'sections/happy-customer';
import Blog from 'sections/blog';
import SubscribeUs from 'sections/subscribe-us';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Spooderman"
          description="Teh amazing spooder!"
        />
        <Headspooder />
        <Banner />
        <Services />
        <WorkHard />
        <ExcitingFeatures />
        <FAQ />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
