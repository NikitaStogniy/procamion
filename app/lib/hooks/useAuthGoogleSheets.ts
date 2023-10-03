import { google } from "googleapis";
import fs from "fs";

const CREDENTIALS_PATH = "path/to/your/credentials.json"; // Replace with your credentials file path

async function authenticate() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8"));
  const { client_email, private_key } = credentials;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email,
      private_key,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return auth.getClient();
}

export default authenticate;
