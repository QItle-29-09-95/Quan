import React from 'react';
import { ListPromo } from '../../components/tomabox/ListPromo';
import { ListSubcription } from '../../components/tomabox/ListSubcription';

import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { Content } from '../../shares/components/content/Content';
import { AppConfig } from '../../utils/AppConfig';

const Profile = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="toma-box-page">
        <ListPromo/>
        <ListSubcription/>
      </div>
    </Content>
  </Main>
);

export default Profile;
