import React from 'react';
import { DiscographyItems } from '../../components/discography/DiscographyItems';


import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { Content } from '../../shares/components/content/Content';
import { VintageHeader } from '../../shares/components/title/VintageHeader';
import { AppConfig } from '../../utils/AppConfig';

const Discography = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid discography-div other-page">
        <VintageHeader title='Discography' />
        <DiscographyItems/>
      </div>
    </Content>
  </Main>
);

export default Discography;
