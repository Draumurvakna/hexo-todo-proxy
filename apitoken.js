// 文件路径：api/token.js
export default async (req, res) => {
    const { code } = JSON.parse(req.body);
    
    // 获取GitHub Token
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.GH_CLIENT_ID,
        client_secret: process.env.GH_CLIENT_SECRET,
        code
      })
    });
  
    const data = await response.json();
    res.json({ token: data.access_token });
  };