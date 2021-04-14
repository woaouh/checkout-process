import classes from './index.module.scss';

const Loader = () => (
  <div className={classes.backdrop}>
    <div className={classes.loader}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
