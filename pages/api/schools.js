export default function handler(req, res) {
    if (req.method === 'POST') {
     
      const { schoolName, email, schoolImage } = req.body;
  
  
      res.status(200).json({ message: 'Data stored successfully' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  