// const { config } = require("../config");
// const { v4: uuidv4 } = require('uuid')
const axios = require("axios");
// const qs = require('qs')
const https = require("https");

export async function giga(gToken: string, content = "", system = "") {
  if (!content) return;
  console.log(content);

  const messages = [];
  if (system) {
    messages.push({ role: "system", content: system });
  }

  const data = JSON.stringify({
    model: "GigaChat",
    messages: messages.concat([
      {
        "role": "system",
        "content": `шаблон объекта: {"data": [["слово", "определение"]]}`
    },
      {
        role: "user",
        content,
      },
    ]),
    temperature: 1,
    top_p: 0.01,
    n: 1,
    stream: false,
    max_tokens: 1024,
    repetition_penalty: 1,
    update_interval: 0,
  });

  const config = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${gToken}`,
    },
    data,
  };
  // console.log(data);
  try {
    const response = await axios(config);
    const message = response.data.choices[0].message;
    console.log(message.content);
    return message.content;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { giga };
