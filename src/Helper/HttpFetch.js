import { apiDomain, apiKey } from "../Env";
/**
 * Http Fetch Request POST Method
 * @param {String} uri
 * @param {Object} payload
 * @param {Object} header
 */
const httpPost = async (uri, payload, header = {}) => {
  let resp = await fetch(`${apiDomain}${uri}`, {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      ...header,
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json"
    }
  });
  return resp;
};

/**
 * Http Fetch Request GET Method
 * @param {String} uri
 * @param {Object} header
 */
const httpGet = async (uri, header = {}) => {
  let resp = await fetch(`${apiDomain}${uri}`, {
    method: "GET",
    headers: {
      ...header,
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json"
    }
  });
  return resp;
};

export { httpGet, httpPost };
