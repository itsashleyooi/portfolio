import nodemailer from "nodemailer"

export const smtpEmail = process.env.GOOGLE_EMAIL
export const smtpPassword = process.env.GOOGLE_PASSWORD

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: smtpEmail,
    pass: smtpPassword,
  },
})
