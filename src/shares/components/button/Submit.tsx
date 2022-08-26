import React from 'react';

type ISubmit = {
  title: String;
};
const Submit = (props: ISubmit) => (
  <div>{props.title}</div>
);

export { Submit };
