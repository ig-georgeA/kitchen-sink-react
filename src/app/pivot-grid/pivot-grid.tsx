import { IgrPivotDataSelector, IgrPivotDataSelectorModule, IgrPivotGrid, IgrPivotGridModule } from '@infragistics/igniteui-react-grids';
import { useGetSales } from '../hooks/financial-hooks';
import { useRef } from 'react';
import '@infragistics/igniteui-react-grids/grids';
import styles from './pivot-grid.module.css';
import createClassTransformer from '../style-utils';

IgrPivotDataSelectorModule.register();
IgrPivotGridModule.register();

export default function PivotGrid() {
  const classes = createClassTransformer(styles);
  const pivotGrid = useRef<IgrPivotGrid>(null);
  const pivotDataSelector = useRef<IgrPivotDataSelector>(null);
  let _dateDimension: ;
  let _pivotConfigHierarchy: ;
  const { financialSales } = useGetSales();

  return (
    <>
      <div className={classes("row-layout pivot-grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrPivotGrid data={financialSales} pivotConfiguration={pivotConfigHierarchy} superCompactMode="true" defaultExpandState="true" ref={pivotGrid} className={classes("ig-typography ig-scrollbar pivot-grid")}></IgrPivotGrid>
          <IgrPivotDataSelector grid="pivotGrid" ref={pivotDataSelector}></IgrPivotDataSelector>
        </div>
      </div>
    </>
  );
}
