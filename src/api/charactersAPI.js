import { basicConfig } from './basicConfig';

export const charactersAPI = {
  getAllCharacters(params) {
    return basicConfig
      .createRequest(`/characters${params}`, 'GET', { 'content-type': 'application/json' })
      .then((res) => res.data);
  },

  getConcreteCharacter(id) {
    return basicConfig
      .createRequest(`/characters/${id}`, 'GET', { 'content-type': 'application/json' })
      .then((res) => res.data);
  },
};
