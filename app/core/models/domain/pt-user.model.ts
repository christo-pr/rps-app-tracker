import { PtObjectBase } from './pt-base-object.model';
import { GenderEnum } from './enums/gender.enum';

export interface PtUser extends PtObjectBase {
  fullName: string,
  avatar: string,
  gender: GenderEnum
}
