import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('opa');
  res.json([
    'Petrus',
    'Paulo'
  ]);
});

app.listen(3333);
