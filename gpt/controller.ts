import { getGigaToken } from "./getGigaToken";
import { giga } from "./giga";

let lastCallTimestamp = 0;
export const controller = async (req: any, res: any) => {
  // console.log(req.headers.data);
  // console.log(req.user);

  try {
    const gToken = req.headers.gtocen;
    const content = req.headers.request;
    const currentTimestamp = Date.now();
    if (currentTimestamp - lastCallTimestamp >= 1000) {
      const response = await giga(gToken, content);
      res.json(response);
      lastCallTimestamp = currentTimestamp;
    } else {
      res.json("Error logging in");
    }
  } catch (error) {
    console.log(error);
    res.json({ text: "Error logging in" });
  }
};
