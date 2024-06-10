import styles from './reveal.module.css';
import createClassTransformer from '../style-utils';


export default function Reveal() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout reveal-container")}>
        <span id="revealDashBoard" className={classes("reveal-dash-board")}>RevealDashBoard not yet available in React</span>
      </div>
    </>
  );
}
