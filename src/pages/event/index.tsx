import React from 'react';
import { GroupEventPost } from '../../components/event/GroupEventPost';
import { LeftSideMenu } from '../../components/event/LeftSideMenu';

import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { Content } from '../../shares/components/content/Content';
import { VintageTitle } from '../../shares/components/title/VintageTitle';
import { AppConfig } from '../../utils/AppConfig';

const Event = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageTitle title='Event' />
          <LeftSideMenu />
        </div>
        <div className='right-side'>
          <GroupEventPost />
        </div>
      </div>
    </Content>
  </Main>
);

export default Event;
