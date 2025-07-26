import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Example: Gmail SMTP (for other SMTP providers, change accordingly)
// It's best to use environment variables for credentials
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,       // Your email address
    pass: process.env.EMAIL_PASS,       // Your app password (not your email password directly)
  },
});
