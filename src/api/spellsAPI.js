import { basicConfig } from './basicConfig';

export const spellsAPI = {
  getAllSpells() {
    return basicConfig
      .createRequest('/spells', 'GET', { 'content-type': 'application/json' })
      .then((res) => res.data);
  },
};
