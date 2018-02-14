import { PtUser } from './../models/domain';
import { PtItem } from './../models/domain';

export type StateKey = 'backlogItems' | 'currentUser' | 
'currentSelectedItem';


export interface State {
  backlogItems: PtItem[];
  currentUser: PtUser;
  currentSelectedItem: PtItem;
  [key: string]: any; // Positibilty to add key/value pairs
}

export const INITIAL_STATE: State = {
  backlogItems: [],
  currentUser: undefined,
  currentSelectedItem: undefined
};
