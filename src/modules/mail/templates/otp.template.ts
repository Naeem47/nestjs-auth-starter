export const otpTemplate = (otp: string, fullName: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your OTP Code</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: #fff; padding: 30px; border-radius: 8px; text-align: center;">
    <h2 style="color: #333;">Hello, ${fullName}</h2>
    <p style="font-size: 16px; color: #555;">Use the following OTP to complete your action:</p>
    <h1 style="letter-spacing: 3px; color: #2c7be5;">${otp}</h1>
    <p style="font-size: 14px; color: #999;">This OTP will expire in 5 minutes.</p>
    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
    <p style="font-size: 12px; color: #aaa;">If you did not request this OTP, please ignore this email.</p>
  </div>
</body>
</html>
`;
