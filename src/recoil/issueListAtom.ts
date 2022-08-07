import { IIssue } from '@/types/issueType';
import { atom } from 'recoil';

const ISSUE_LIST_ATOM_KEY = 'issue-list-atom-key';

const $issueListAtom = atom<IIssue[]>({
  key: ISSUE_LIST_ATOM_KEY,
  default: [],
});

export default $issueListAtom;
