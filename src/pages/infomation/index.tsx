import React from 'react';
import { TableInfoList } from '../../components/infomation/TableInfoList';


import { Main } from '../../layout/public/Main';
import { Meta } from '../../layout/public/Meta';
import { Content } from '../../shares/components/content/Content';
import { VintageHeader } from '../../shares/components/title/VintageHeader';
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
