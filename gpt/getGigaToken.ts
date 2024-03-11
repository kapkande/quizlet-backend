const { config } = require("../config");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const qs = require("qs");
const https = require("https");

export async function getGigaToken() {
  const data = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    method: "post",
    maxBodyLength: Infinity,
    url: "https://ngw.devices.sberbank.ru:9443/api/v2/oauth",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      RqUID: uuidv4(),
      Authorization: `Basic ${config.gigaAuth}`,
    },
    data: qs.stringify({
      scope: config.gigaScope,
    }),
  };

  try {
    const response = await axios(data);
    const { access_token: accessToken, expires_at: expiresAt } = response.data;
    // console.log(accessToken, expiresAt);
    return  accessToken;
  } catch (error) {
    console.log(error);
  }
}
