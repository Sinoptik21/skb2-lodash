import express from 'express';
import cors from 'cors';
import f1 from '../lib/countWords';
import f2 from '../lib/nestedFunctions';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ 'task1': '/task1', 'task2': '/task2' });
});

app.get('/task1', (req, res) => {
  const str = 'Lorem ipsum dolor sit amet, ne dicat propriae torquatos mei, nam doming eirmod sapientem ne. Nec sint recusabo ad, duo delenit inciderint ut. Eu lorem qui adhuc affert dicant. Ne sonet argumentum sea, his lorem delectus ex, no mel minim exerci. Pro te labore habemus reformidans, eu dolor feugiat tractatos sed.';
  res.json(f1(str));
});

app.get('/task2', (req, res) => {
  const res1 = f2(1, scenario1);
  const res2 = f2(22, scenario2);
  const res3 = f2(4, scenario3);
  const res4 = f2(0, scenario4);
  res.json({ 'res1': res1, 'res2': res2, 'res3': res3, 'res4': res4 });
});

const plus = i => i+1;
const multy = i => i*2;

const scenario1 = plus;
const scenario2 = [ multy ];
const scenario3 = [ plus, multy, plus ];
const scenario4 = [ plus, scenario3, [ scenario1, scenario2 ], scenario1 ];

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
