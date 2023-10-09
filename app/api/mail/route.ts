// Import any necessary libraries if needed
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const email = body.email;

      // Replace this URL with your Google Apps Script web app URL
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyl5Tf-BV_sIMlzoLsDdDn5TjJQldRf-cD_xX7nw9bP-Bhw_FNcaJ5ya5men7_8-EKYpw/exec";

      // Send the form data to the Google Sheets script
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Include other fields if needed
      });

      if (response.ok) {
        // Handle success
        NextResponse.json(
          { message: "Form submitted successfully" },
          { status: 200 }
        );
      } else {
        // Handle error
        NextResponse.json(
          { message: "Form submission failed" },
          { status: 500 }
        );
      }
    } catch (error) {
      console.error(error);
      NextResponse.json({ message: "Internal Error", error }, { status: 500 });
    }
  } else {
    NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
}
