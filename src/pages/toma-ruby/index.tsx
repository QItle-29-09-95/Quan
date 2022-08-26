import React from 'react';
import { HeaderSubcriptLogo } from '../../components/tomabox-subcription/HeaderSubcriptLogo';
import { PhotoGallery } from '../../components/tomabox-subcription/PhotoGallery';
import { QuestionAndAnswer } from '../../components/tomabox-subcription/QuestionAndAnswer';
import { TableListInfomationSubcription } from '../../components/tomabox-subcription/TableListInfomationSubcription';
import { MainPrivate } from '../../layout/private/MainPrivate';
import { Meta } from '../../layout/public/Meta';
import { Content } from '../../shares/components/content/Content';
import { AppConfig } from '../../utils/AppConfig';

const TomaRuby = () => (
    <MainPrivate
        meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
    >
        <Content>
            <div className='light-black-bg toma-subcription'>
                <HeaderSubcriptLogo logoUrl='/assets/images/toma-ruby-lg.png' bannerUrl='/assets/images/toma-ruby-1.png'/>
                <TableListInfomationSubcription/>
                <PhotoGallery/>
                <QuestionAndAnswer/>
            </div>
        </Content>
    </MainPrivate>
);

export default TomaRuby;
