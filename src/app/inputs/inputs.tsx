import { IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrChip, IgrChipModule, IgrDateTimeInputModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRangeSlider, IgrRangeSliderModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSlider, IgrSliderModule, IgrSwitch, IgrSwitchModule, IgrTextarea, IgrTextareaModule, IgrToggleButton, IgrToggleButtonModule } from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './inputs.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrChipModule.register();
IgrDatePickerModule.register();
IgrDateTimeInputModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSliderModule.register();
IgrSwitchModule.register();
IgrTextareaModule.register();
IgrToggleButtonModule.register();

export default function Inputs() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [value, setValue] = useState<number | undefined>(50);
  const [value1, setValue1] = useState<string | undefined>('some content');
  const [checked, setChecked] = useState<boolean | undefined>(true);
  const [value2, setValue2] = useState<string | undefined>('1');
  const date = new Date('2021-03-16T00:00');
  let _test: string | undefined;

  return (
    <>
      <div className={classes("row-layout inputs-container")}>
        <div className={classes("column-layout column-layout_1")}>
          <IgrInput type="email" label="Email address" outlined="false" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>mail</span>
              </span>
            </span>
            <span slot="suffix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>clear</span>
              </span>
            </span>
          </IgrInput>
          <IgrInput label="I'm disabled" disabled="true" outlined="false" className={classes("input")}></IgrInput>
          <IgrInput label="Label +prefix+box+help" outlined="false" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <IgrInput label="Label" placeholder="Label/Placeholder" outlined="false" className={classes("input")}></IgrInput>
          <igrDateTimeInput value={date} label="Date-box style-input format 1" outlined="false" className={classes("style_1")}></igrDateTimeInput>
          <igrDateTimeInput value={date} label="Date-box style - input format 2" outlined="false" className={classes("style_1")}></igrDateTimeInput>
          <IgrTextarea placeholder="Type here" className={classes("style_1")}></IgrTextarea>
          <IgrDatePicker label="Date" className={classes("date-picker")}></IgrDatePicker>
          <div className={classes("row-layout group")}>
            <IgrChip size="large" className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip size="large" className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip size="large" className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip disabled="true" size="large" className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>account_balance</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrChip size="large" className={classes("chip_2")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar initials="AB" shape="circle" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <IgrSlider disabled="true" min="0" max="100" step="10" primaryTicks="3" secondaryTicks="2" hideSecondaryLabels="false" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
          <IgrSlider min="0" max="100" step="10" primaryTicks="3" secondaryTicks="2" hideSecondaryLabels="false" tickOrientation="mirror" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
          <IgrRangeSlider lower="20" upper="80" min="0" max="100" step="10" discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
          <IgrRangeSlider lower="20" upper="80" min="0" max="100" step="10" primaryTicks="6" discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
          <div className={classes("row-layout group_2")}>
            <IgrAvatar initials="GM" size="large" shape="circle" className={classes("avatar_2")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar2.png" size="medium" className={classes("avatar_3")}></IgrAvatar>
            <IgrAvatar shape="circle">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>people</span>
              </span>
            </IgrAvatar>
          </div>
          <div className={classes("row-layout group_3")}>
            <span className={classes("material-icons icon_1")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_3")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_4")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_5")}>
              <span key={uuid()}>person</span>
            </span>
            <IgrRating size="large" className={classes("user-input")}></IgrRating>
          </div>
        </div>
        <div className={classes("column-layout group_4")}>
          <IgrInput label="Label + prefix + suffix + border" outlined="true" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>https://</span>
              </p>
            </span>
            <span slot="suffix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>.com</span>
              </p>
            </span>
          </IgrInput>
          <IgrInput label="Label + required" required="true" outlined="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("input")}></IgrInput>
          <IgrInput label="I'm disabled" disabled="true" outlined="true" className={classes("input")}></IgrInput>
          <IgrInput label="Label" required="true" outlined="true" className={classes("input")}></IgrInput>
          <IgrInput label="Prefix, helptext and border" outlined="true" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <IgrDatePicker label="Date" className={classes("date-picker")}></IgrDatePicker>
          <igrDateTimeInput value={date} label="Date" outlined="true" className={classes("style_1")}></igrDateTimeInput>
          <igrDateTimeInput value={date} label="Date" outlined="true" className={classes("style_1")}></igrDateTimeInput>
          <IgrTextarea placeholder="Type here" className={classes("style_1")}></IgrTextarea>
          <div className={classes("row-layout group_5")}>
            <IgrButton size="large" clicked={() => navigate(`/lists-data`)} className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
              <span key={uuid()}>Lists</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" disabled="true" size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="fab" size="large" className={classes("user-input")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Fab</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <a href="https://www.youtube.com/playlist?list=PLZ4rRHIJepBuKeP2WqXZUtG8LAYmyHHsa" className={classes("typography__body-1 hyperlink")}>
              <span>YouTube playlist</span>
            </a>
            <div className={classes("row-layout group_6")}>
              <div className={classes("row-layout group_7")}>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>email</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrBadge variant="success" className={classes("badge")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_7")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>emergency</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_7")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>mail</span>
                </span>
                <IgrBadge variant="warning" className={classes("badge_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_7")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>mail</span>
                </span>
                <IgrBadge variant="success" className={classes("badge_1")}>
                  <span key={uuid()}>99</span>
                </IgrBadge>
              </div>
              <IgrBadge variant="success" className={classes("badge_2")}>
                <span key={uuid()}>Accepted</span>
              </IgrBadge>
              <IgrBadge variant="danger" className={classes("badge_2")}>
                <span key={uuid()}>Denied</span>
              </IgrBadge>
            </div>
          </div>
          <div className={classes("column-layout group_8")}>
            <div className={classes("row-layout group_9")}>
              <IgrButtonGroup className={classes("button-group")}>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_left</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_center</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_right</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input_1")}>
                <span key={uuid()}>Notify me</span>
              </IgrSwitch>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input_1")}></IgrSwitch>
            </div>
            <div className={classes("row-layout group_10")}>
              <IgrCheckbox checked={checked} Change={(_c, e) => setChecked(e.detail)} className={classes("checkbox")}></IgrCheckbox>
              <IgrCheckbox labelPosition="after" checked={checked} Change={(_c, e) => setChecked(e.detail)} className={classes("checkbox")}>
                <span key={uuid()}>Does it work?</span>
              </IgrCheckbox>
              <IgrCheckbox labelPosition="before" checked={checked} Change={(_c, e) => setChecked(e.detail)} className={classes("user-input")}>
                <span key={uuid()}>How about now?</span>
              </IgrCheckbox>
            </div>
          </div>
          <div className={classes("row-layout group_11")}>
            <IgrRadioGroup value={value2} Change={(_c, e) => setValue2(e.target.value)} className={classes("radio-group")}>
              <IgrRadio value="1" className={classes("radio")} key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="2" className={classes("radio")} key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" className={classes("radio")} key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
            <IgrRadioGroup alignment="horizontal" value={value2} Change={(_c, e) => setValue2(e.target.value)} className={classes("user-input_1")}>
              <IgrRadio value="1" className={classes("radio")} key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="2" className={classes("radio")} key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" className={classes("radio")} key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
          </div>
          <div className={classes("row-layout group_12")}>
            <IgrInput label="Group name" required="true" outlined="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("input_1")}></IgrInput>
            <IgrButton variant="outlined" size="large" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>check</span>
              </span>
              <span key={uuid()}>Submit</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
      </div>
    </>
  );
}
