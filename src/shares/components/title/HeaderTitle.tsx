import React from 'react';

type IHeaderTitle = {
  title: String;
};
const HeaderTitle = (props: IHeaderTitle) => (
  <div>{props.title}</div>
);

export { HeaderTitle };
