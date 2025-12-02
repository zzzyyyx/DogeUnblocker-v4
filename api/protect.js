export default function handler(req, res) {
  const password = req.query.pass;
  const correct = "antisecurlyleague";

  // If correct password, show your site
  if (password === correct) {
   return res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Protected Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding-top: 80px;
      }
      h1 {
        font-size: 32px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        color: #444;
      }
    </style>
  </head>
  <body>
    <h1>Welcome inside!</h1>
    <p>You successfully entered the password.</p>
  </body>
  </html>
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
