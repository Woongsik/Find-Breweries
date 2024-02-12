import React from 'react';

type Props = {
  title: string
}

export default function PageTitle(props: Props) {
  const { title } = props;
  return (
    <h1 style={{ textAlign: 'center'}}>{ title }</h1>
  )
}
