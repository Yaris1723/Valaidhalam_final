import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const linkedin = formData.get("linkedin") as string;
    const portfolio = formData.get("portfolio") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File | null;

    // Validate required fields
    if (!name || !email || !position || !experience) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save resume file if provided
    let resumePath = "";
    if (resume) {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadsDir, { recursive: true });
      
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${resume.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const filePath = path.join(uploadsDir, fileName);
      
      await writeFile(filePath, buffer);
      resumePath = `/uploads/${fileName}`;
    }

    // Create email content
    const emailContent = `
New Career Application

Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}
Experience: ${experience}
LinkedIn: ${linkedin || "Not provided"}
Portfolio: ${portfolio || "Not provided"}
Message: ${message || "No additional message"}
${resumePath ? `Resume: ${resumePath}` : ""}

---
Submitted on: ${new Date().toLocaleString()}
    `;

    // In production, you would send this email using a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    
    // For now, we'll log it and return success
    console.log("=== New Career Application ===");
    console.log(emailContent);
    console.log("=============================");

    return NextResponse.json(
      { 
        success: true, 
        message: "Application submitted successfully",
        // In production, return the email content to be sent
        // emailContent 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing career application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}
