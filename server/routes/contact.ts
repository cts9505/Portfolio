import { RequestHandler } from "express";
import { z } from "zod";
import { db } from "../firebase"; // Adjust the import based on your Firebase setup
import { transporter } from "../mailer";
import dotenv from "dotenv";
dotenv.config();

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message too long"),
});

// Personal notification email template (for you)
const createNotificationTemplate = (name: string, email: string, subject: string, message: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Contact</title>
        <style>
            body {
                font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #2d3748;
                margin: 0;
                padding: 0;
                background-color: #f7fafc;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 12px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 32px;
                text-align: center;
                position: relative;
            }
            .header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                position: relative;
                z-index: 1;
            }
            .header p {
                margin: 8px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
                position: relative;
                z-index: 1;
            }
            .content {
                padding: 40px 32px;
            }
            .priority-badge {
                display: inline-block;
                background: linear-gradient(135deg, #48bb78, #38a169);
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 20px;
            }
            .sender-info {
                background: linear-gradient(135deg, #edf2f7, #e2e8f0);
                border-radius: 12px;
                padding: 24px;
                margin: 24px 0;
                border: 1px solid #e2e8f0;
            }
            .info-row {
                display: flex;
                align-items: center;
                margin-bottom: 12px;
                font-size: 15px;
            }
            .info-row:last-child {
                margin-bottom: 0;
            }
            .info-icon {
                width: 20px;
                height: 20px;
                margin-right: 12px;
                opacity: 0.7;
            }
            .info-label {
                font-weight: 600;
                color: #4a5568;
                min-width: 60px;
            }
            .info-value {
                color: #2d3748;
            }
            .email-link {
                color: #667eea;
                text-decoration: none;
                font-weight: 500;
            }
            .email-link:hover {
                text-decoration: underline;
            }
            .message-section {
                margin: 32px 0;
            }
            .message-box {
                background: #f7fafc;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 24px;
                position: relative;
            }
            .message-box::before {
                content: '"';
                position: absolute;
                top: -10px;
                left: 20px;
                font-size: 40px;
                color: #cbd5e0;
                font-family: Georgia, serif;
            }
            .message-text {
                font-size: 16px;
                line-height: 1.6;
                color: #4a5568;
                margin: 0;
                white-space: pre-wrap;
                font-style: italic;
            }
            .action-buttons {
                margin: 32px 0;
                text-align: center;
            }
            .btn {
                display: inline-block;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin: 0 8px;
                transition: transform 0.2s;
            }
            .btn:hover {
                transform: translateY(-1px);
            }
            .btn-primary {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
            }
            .footer {
                background: #2d3748;
                color: #a0aec0;
                padding: 24px 32px;
                text-align: center;
                font-size: 14px;
            }
            .footer p {
                margin: 4px 0;
            }
            .timestamp {
                font-size: 13px;
                color: #718096;
                text-align: center;
                margin-top: 20px;
                padding: 12px;
                background: #f7fafc;
                border-radius: 8px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Portfolio Contact!</h1>
                <p>Someone wants to connect with you</p>
            </div>
            
            <div class="content">
                <div class="priority-badge">New Opportunity</div>
                
                <div class="sender-info">
                    <div class="info-row">
                        <span class="info-icon">👤</span>
                        <span class="info-label">Name:</span>
                        <span class="info-value"><strong>${name}</strong></span>
                    </div>
                    <div class="info-row">
                        <span class="info-icon">📧</span>
                        <span class="info-label">Email:</span>
                        <span class="info-value">
                            <a href="mailto:${email}" class="email-link">${email}</a>
                        </span>
                    </div>
                    <div class="info-row">
                        <span class="info-icon">📝</span>
                        <span class="info-label">Subject:</span>
                        <span class="info-value"><strong>${subject}</strong></span>
                    </div>
                </div>
                
                <div class="message-section">
                    <h3 style="color: #2d3748; margin-bottom: 16px;">💬 Their Message:</h3>
                    <div class="message-box">
                        <p class="message-text">${message}</p>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <a href="mailto:${email}?subject=Re: ${subject}" class="btn btn-primary">
                        ✉️ Reply Now
                    </a>
                </div>
                
                <div class="timestamp">
                    📅 Received on ${new Date().toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Portfolio Contact Form</strong></p>
                <p>This message was sent through your portfolio website</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Thank you email template for the sender
const createThankYouTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thanks for reaching out!</title>
        <style>
            body {
                font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #2d3748;
                margin: 0;
                padding: 0;
                background-color: #f7fafc;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 12px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                color: white;
                padding: 40px 32px;
                text-align: center;
                position: relative;
            }
            .header::before {
                content: '✨';
                position: absolute;
                top: 20px;
                left: 30px;
                font-size: 20px;
                opacity: 0.7;
            }
            .header::after {
                content: '🚀';
                position: absolute;
                top: 20px;
                right: 30px;
                font-size: 20px;
                opacity: 0.7;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
            }
            .header p {
                margin: 12px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 40px 32px;
            }
            .greeting {
                font-size: 18px;
                color: #2d3748;
                margin-bottom: 24px;
                text-align: center;
            }
            .message-card {
                background: linear-gradient(135deg, #e6fffa, #b2f5ea);
                border-left: 4px solid #38a169;
                border-radius: 12px;
                padding: 24px;
                margin: 24px 0;
                text-align: center;
            }
            .response-timeline {
                background: #edf2f7;
                border-radius: 12px;
                padding: 24px;
                margin: 24px 0;
            }
            .timeline-item {
                display: flex;
                align-items: center;
                margin: 12px 0;
                font-size: 15px;
            }
            .timeline-icon {
                width: 24px;
                height: 24px;
                background: #667eea;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                font-size: 12px;
                color: white;
                font-weight: bold;
            }
            .personal-note {
                background: #fff5f5;
                border: 1px solid #fed7d7;
                border-radius: 12px;
                padding: 20px;
                margin: 24px 0;
                text-align: center;
                color: #742a2a;
            }
            .social-links {
                text-align: center;
                margin: 32px 0;
            }
            .social-links a {
                display: inline-block;
                margin: 0 12px;
                color: #667eea;
                text-decoration: none;
                font-weight: 500;
                padding: 8px 16px;
                border: 2px solid #e2e8f0;
                border-radius: 20px;
                transition: all 0.2s;
            }
            .social-links a:hover {
                background: #667eea;
                color: white;
                border-color: #667eea;
            }
            .footer {
                background: #2d3748;
                color: #a0aec0;
                padding: 24px 32px;
                text-align: center;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You!</h1>
                <p>Your message has been received</p>
            </div>
            
            <div class="content">
                <div class="greeting">
                    <strong>Hi ${name}! 👋</strong>
                </div>
                
                <div class="message-card">
                    <h3 style="margin: 0 0 12px 0; color: #2d5a2d;">
                        🎉 Message Delivered Successfully!
                    </h3>
                    <p style="margin: 0; font-size: 16px; color: #2d5a2d;">
                        Thank you for taking the time to reach out. I'm excited to connect with you!
                    </p>
                </div>
                
                <div class="response-timeline">
                    <h3 style="margin: 0 0 20px 0; color: #2d3748; text-align: center;">
                        What happens next? 🗓️
                    </h3>
                    <div class="timeline-item">
                        <div class="timeline-icon">1</div>
                        <span>I'll carefully review your message</span>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">2</div>
                        <span>You'll hear back from me within <strong>24-48 hours</strong></span>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">3</div>
                        <span>We'll discuss your project or opportunity in detail</span>
                    </div>
                </div>
                
                <div class="personal-note">
                    <p style="margin: 0; font-size: 15px;">
                        <strong>💡 Pro Tip:</strong> While you wait, feel free to explore more of my work on my portfolio 
                        or connect with me on social media!
                    </p>
                </div>
                
                <div class="social-links">
                    <a href="https://github.com/cts9505" onclick="return false;">🐱 GitHub</a>
                    <a href="https://www.linkedin.com/in/chaitanya-shinde-computer/" onclick="return false;">💼 LinkedIn</a>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Thanks again for your interest!</strong></p>
                <p>This is an automated response from my portfolio contact form</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const validation = ContactSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed", 
        errors: validation.error.errors 
      });
    }
    
    const { name, email, subject, message } = validation.data;

    // Save to Firestore
    await db.collection("portfolio_contacts").add({
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send notification email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your personal email
      subject: `🚀 Portfolio Contact: ${subject}`,
      html: createNotificationTemplate(name, email, subject, message),
    });

    // Send thank you email to the person who contacted you
    await transporter.sendMail({
      from: `"Chaitanya Shinde" <${process.env.EMAIL_USER}>`, // Replace with your actual name
      to: email,
      subject: "Thanks for reaching out! 🎉",
      html: createThankYouTemplate(name),
    });

    res.status(200).json({ 
      success: true, 
      message: "Thanks for reaching out! I'll get back to you within 24-48 hours. 🚀" 
    });
    
  } catch (error) {
    console.error("Portfolio contact form error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Oops! Something went wrong. Please try again later." 
    });
  }
};