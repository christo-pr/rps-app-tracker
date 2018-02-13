import { PtUser } from './../models/domain';
import { PtItem } from './../models/domain';

export type StateKey = 'backlogItems' | 'currentUser';


export interface State {
  backlogItems: PtItem[];
  currentUser: PtUser;
  [key: string]: any; // Positibilty to add key/value pairs
}

export const INITIAL_STATE: State = {
  backlogItems: [],
  currentUser: undefined
};
