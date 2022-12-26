import {FormControlOptions, ValidatorFn} from "@angular/forms";
import {UserType} from "./userType";

export interface IFormBuilder {
  formName: string;
  controls: IControl[];
  actions: ActionType[];
  permissions: UserType[];
  callback?: ICallBack;
}

export interface IControl {
  key: string;
  title: string;
  type: CtrlType;
  desc?: string;
  validation?:  FormControlOptions | ValidatorFn | ValidatorFn[] | null | undefined;
  optional?: boolean;
  permissions?: UserType[];
  options?: any;
  defaultVal?: any;
  order?: number;
  size?: 1|2|3|4|5|6|7|8|9|10|11|12;
}

export interface ICallBack {
  beforeCreate?: Function;
  create?: Function;
  afterCreate?: Function;
  beforeUpdate?: Function;
  update?: Function;
  afterUpdate?: Function;
  beforeDelete?: Function;
  delete?: Function;
  afterDelete?: Function;
}

export enum CtrlType {
  Number = "number",
  String = "string",
  TextArea = "text_area",
  Date = "date",
  RangeDate = "range_date",
  DropDown = "dropdown",
  Radio = "radio",
  CheckBox = "checkbox",
}

export enum ActionType {
  Create = "Create",
  Update = "Update",
  Delete = "Delete"
}
