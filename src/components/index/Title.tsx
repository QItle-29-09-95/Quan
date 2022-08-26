import React from 'react';

type IHeaderTitle = {
  title: String;
};
const Title = (props: IHeaderTitle) => (
  <div>{props.title}</div>
);

export { Title };
