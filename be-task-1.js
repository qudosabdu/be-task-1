const express = require('express');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('please visit /api');
});

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;
  const currentDay = moment().format('dddd');
  const utcTime = moment().utc().format();

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: 'https://github.com/qudosabdu/be-task-1.git/main/file_name.ext',
    github_repo_url: 'https://github.com/qudosabdu/be-task-1',
    status_code: 200
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
