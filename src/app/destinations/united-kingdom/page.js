import React from 'react';
import PageBanner from '../../../components/PageBanner';
import UKVisaContent from '../../../components/UKVisaContent';

const UKPage = () => {
  return (
    <div>
      <PageBanner 
        title="UK Student Visa"
        breadcrumb="studyshare > destinations > uk"
      />
      <UKVisaContent />
    </div>
  );
};

export default UKPage;