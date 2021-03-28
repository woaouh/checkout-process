import React from 'react';

import classes from './index.module.scss';

export default function Loader() {
  return (
    <div className={classes.backdrop}>
      <div className={classes.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
