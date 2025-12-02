export default function handler(req, res) {
  const password = req.query.pass;
  const correct = "antisecurlyleague";

  // If correct password, show your site
  if (password === correct) {
    return res.send(`
      <h1>Welcome!</h1>
      <p>You passed the password page.</p>
    `);
  }

  // Otherwise show password form
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Password Required</title>
      <style>
        body { 
          font-family: Arial; 
          text-align: center; 
          padding-top: 100px;
        }
        input {
          padding: 8px;
          font-size: 16px;
        }
        button {
          padding: 8px 16px;
          font-size: 16px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h2>Enter Password</h2>
      <form method="GET">
        <input name="pass" type="password" placeholder="Password" />
        <button type="submit">Enter</button>
      </form>
    </body>
    </html>
  `);
}
