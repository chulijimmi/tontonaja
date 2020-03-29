import { SET_COUNTRY } from "./countries-action";

const initState = {
  country: [],
  menuHeader: []
};

// Reducers Countries
// use to render menu and some component when
// need to render country information
export default (state = initState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      const countryCode = [
        {
          code: ["US", "DE", "IE", "DK", "ZA", "AT", "AR", "IL", "TW"]
        },
        {
          code: ["GB", "JP", "ES", "FI", "KR", "SE", "NO", "HU", "RO"]
        },
        {
          code: ["CA", "AU", "HK", "IN", "NZ", "MX", "ID", "BR", "PL"]
        },
        {
          code: ["FR", "IT", "CN", "BE", "NL", "RU", "CH", "FI", "TH"]
        }
      ];

      const selectedCountry = [];
      countryCode.map(item => {
        const temp = [];
        item.code.map(cc => {
          const country = action.response.find(ct => ct.iso_3166_1 === cc);
          const countryName =
            country.english_name === "United States of America"
              ? "United State"
              : country.english_name;
          temp.push({
            code: country.iso_3166_1,
            name: countryName
          });
        });
        selectedCountry.push(temp);
      });

      return {
        ...state,
        country: action.response,
        menuHeader: selectedCountry
      };

    default:
      return state;
  }
};
