import React from 'react';
import { TableInfoList } from '../../components/infomation/TableInfoList';

import { Content } from '../../layout/child-layout/content/Content';
import { VintageHeader } from '../../layout/child-layout/vintage-header/VintageHeader';
import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { AppConfig } from '../../utils/AppConfig';

const Infomation = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageHeader title='Infomation' />
        </div>
        <div className='right-side'>
          <TableInfoList />
        </div>
      </div>
    </Content>
  </Main>
);

export default Infomation;
