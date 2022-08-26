import React from 'react';
import { GroupMediaPost } from '../../components/media/GroupMediaPost';


import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { Content } from '../../shares/components/content/Content';
import { VintageTitle } from '../../shares/components/title/VintageTitle';
import { AppConfig } from '../../utils/AppConfig';

const Media = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageTitle title='Media' />
        </div>
        <div className='right-side'>
          <GroupMediaPost />
        </div>
      </div>
    </Content>
  </Main>
);

export default Media;
