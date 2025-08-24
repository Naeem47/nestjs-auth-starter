export const resetPasswordTemplate = (resetLink: string, fullName: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: #fff; padding: 30px; border-radius: 8px; text-align: center;">
    <h2 style="color: #333;">Hello, ${fullName}</h2>
    <p style="font-size: 16px; color: #555;">Click the button below to reset your password:</p>
    <a href="${resetLink}" style="display: inline-block; padding: 12px 25px; background-color: #2c7be5; color: #fff; border-radius: 5px; text-decoration: none; margin: 15px 0;">Reset Password</a>
    <p style="font-size: 14px; color: #999;">This link will expire in 1 hour.</p>
    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
    <p style="font-size: 12px; color: #aaa;">If you did not request a password reset, please ignore this email.</p>
  </div>
</body>
</html>
`;
