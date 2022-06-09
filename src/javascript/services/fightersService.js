import { callApi } from '../helpers/apiHelper';

class FighterService {
  #endpoint = 'fighters.json';

  async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {
    // todo: implement this method
    // endpoint - `details/fighter/${id}.json`;
    try {
      const fighterInfo = await callApi(`details/fighter/${id}.json`);
      return fighterInfo;
    } catch (error) {
      throw error;
    }
    
  }
}

export const fighterService = new FighterService();

// FighterService.getFighterDetails(2).then(console.log());
// console.log(fighterInfo);