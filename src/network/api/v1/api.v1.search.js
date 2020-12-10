import { network } from '../../network.config';

export const search = {
  find: (query, lang = 'ru') =>
    network.nominatim
      .get(
        `search?format=json&addressdetails=1&q=${query}&accept-language=${lang}`,
      )
      .then(response => response.data),
};
