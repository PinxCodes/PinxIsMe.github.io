app.get('/time', (req, res) => {
  // Get the current time
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const time = h + ":" + m + ":" + s;

  // Return the current time
  res.send({ time });
});
