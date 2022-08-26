import React from 'react';

type IViewAll = {
  title: String;
};
const ViewAll = (props: IViewAll) => (
  <div>{props.title}</div>
);

export { ViewAll };
