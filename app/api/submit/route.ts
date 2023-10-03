// app/api/submitFormData.ts

import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Only POST requests allowed" });
  }
  console.log("test");
  const request = await req.json();
  const body = request.body as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.message]],
      },
    });

    return NextResponse.json({
      data: response.data,
    });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
