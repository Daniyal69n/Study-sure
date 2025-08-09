import React from 'react';
import PageBanner from '../../components/PageBanner';
import Contact from '../../components/Contact';

const ContactPage = () => {
  return (
    <div>
      <PageBanner 
        title="Contact Us"
        breadcrumb="studyshare > contact"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
