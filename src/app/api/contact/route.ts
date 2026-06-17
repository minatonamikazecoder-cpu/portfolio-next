import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailSubject = `New Project Inquiry from ${name} (${service})`;
    const emailBody = `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Requested:</strong> ${service}</p>
      <p><strong>Project Details:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `;

    if (resend) {
      const { data, error } = await resend.emails.send({
        from: "FlowStack Contact <onboarding@resend.dev>",
        to: ["hello@flowstack.in"],
        subject: emailSubject,
        html: emailBody,
        replyTo: email,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data });
    } else {
      console.log("----------------------------------------");
      console.log("MOCK EMAIL SENT (RESEND_API_KEY not set):");
      console.log("Subject:", emailSubject);
      console.log("Body:", emailBody);
      console.log("----------------------------------------");
      
      // Simulate delay in dev mode to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({ success: true, mock: true });
    }
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
