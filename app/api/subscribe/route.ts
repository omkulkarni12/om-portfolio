import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email, postTitle, postExcerpt, postImage, postSlug } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not defined in environment variables. Simulating success.");
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "API key missing. Local simulation completed successfully."
      });
    }

    const resend = new Resend(apiKey);

    // Dynamic subject and body based on context
    const emailSubject = postTitle 
      ? `[The Innovation Log] New Article: ${postTitle}` 
      : "Thank you for subscribing to The Innovation Log!";

    const htmlContent = postTitle ? `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${postTitle}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #020617; color: #f8fafc; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0f172a; border: 1px solid #334155; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); }
            .header { text-align: center; padding: 30px 20px; border-bottom: 1px solid #1e293b; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: 2px; }
            .header p { margin: 5px 0 0 0; font-size: 11px; text-transform: uppercase; color: #3b82f6; letter-spacing: 3px; font-weight: 750; }
            .content { padding: 30px; }
            .cover-img { width: 100%; height: auto; border-radius: 16px; margin-bottom: 25px; border: 1px solid #1e293b; }
            .title { font-size: 20px; font-weight: 800; color: #ffffff; margin: 0 0 15px 0; line-height: 1.4; }
            .text { font-size: 14px; line-height: 1.7; color: #94a3b8; margin: 0 0 25px 0; }
            .btn-container { text-align: center; }
            .btn { display: inline-block; background-color: #3b82f6; color: #ffffff !important; font-weight: bold; text-decoration: none; padding: 12px 30px; border-radius: 9999px; font-size: 13px; transition: background-color 0.3s; }
            .footer { text-align: center; padding: 25px; border-t: 1px solid #1e293b; font-size: 11px; color: #64748b; background-color: #090d16; }
            .footer p { margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>THE INNOVATION LOG</h1>
              <p>Engineering Journal Update</p>
            </div>
            <div class="content">
              ${postImage ? `<img src="${postImage.startsWith('http') ? postImage : `https://om-portfolio.dev${postImage}`}" class="cover-img" alt="${postTitle}" />` : ''}
              <h2 class="title">${postTitle}</h2>
              <p class="text">${postExcerpt}</p>
              <div class="btn-container">
                <a href="https://om-portfolio.dev/innovation-log/${postSlug}" target="_blank" class="btn">Read Full Article</a>
              </div>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Om Rajendra Kulkarni Portfolio.</p>
              <p>You received this because you subscribed to The Innovation Log.</p>
            </div>
          </div>
        </body>
      </html>
    ` : `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to The Innovation Log</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #020617; color: #f8fafc; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0f172a; border: 1px solid #334155; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); }
            .header { text-align: center; padding: 30px 20px; border-bottom: 1px solid #1e293b; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: 2px; }
            .header p { margin: 5px 0 0 0; font-size: 11px; text-transform: uppercase; color: #3b82f6; letter-spacing: 3px; font-weight: 750; }
            .content { padding: 35px 30px; text-align: center; }
            .title { font-size: 22px; font-weight: 800; color: #ffffff; margin: 0 0 15px 0; }
            .text { font-size: 14px; line-height: 1.8; color: #94a3b8; margin: 0 0 25px 0; max-width: 480px; margin-left: auto; margin-right: auto; }
            .btn { display: inline-block; background-color: #3b82f6; color: #ffffff !important; font-weight: bold; text-decoration: none; padding: 12px 30px; border-radius: 9999px; font-size: 13px; }
            .footer { text-align: center; padding: 25px; border-t: 1px solid #1e293b; font-size: 11px; color: #64748b; background-color: #090d16; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>THE INNOVATION LOG</h1>
              <p>Subscription Confirmed</p>
            </div>
            <div class="content">
              <h2 class="title">You're Subscribed!</h2>
              <p class="text">
                Thank you for joining my engineering journal. You will receive thoughtful logs and updates whenever I publish new research, hardware projects, source code, and engineering postmortems.
              </p>
              <a href="https://om-portfolio.dev/innovation-log" target="_blank" class="btn">Explore The Innovation Log</a>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Om Rajendra Kulkarni Portfolio.</p>
              <p>You received this because you subscribed to The Innovation Log.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send the email using Resend API
    const data = await resend.emails.send({
      from: "The Innovation Log <onboarding@resend.dev>", // default sender for free/unverified domains
      to: email,
      subject: emailSubject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Resend execution error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to dispatch email." },
      { status: 500 }
    );
  }
}
