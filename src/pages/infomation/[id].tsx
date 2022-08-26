import { Main } from '../../layout/public/Main';

import { Meta } from "../../layout/public/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { InfomationGetDetail } from '../../components/infomation/InfomationGetDetail';
import {useRouter} from 'next/router'
import { Content } from '../../shares/components/content/Content';
import { VintageTitle } from '../../shares/components/title/VintageTitle';

const InfomationDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="container-fluid other-page flex">
        <div className='left-side'>
          <VintageTitle title='Infomation Detail' />
        </div>
        <div className='right-side'>
          {
            id && <InfomationGetDetail id={id as string}/>
          }
        </div>
      </div>
    </Content>
  </Main>
  )
  
  };

export default InfomationDetail;
