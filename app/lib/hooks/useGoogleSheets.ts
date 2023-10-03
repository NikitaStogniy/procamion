import { google } from "googleapis";
import authenticate from "./useAuthGoogleSheets";

async function saveToGoogleSheets(data) {
  const client = await authenticate();
  const sheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "YOUR_SPREADSHEET_ID"; // Replace with your Google Sheets spreadsheet ID
  const range = "Sheet1!A1"; // Replace with your desired sheet and cell

  const values = [[data.name, data.email, data.comment]]; // Update with your form fields

  const request = {
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    resource: { values },
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    return response.data;
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    throw error;
  }
}

export default saveToGoogleSheets;
