const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Backend Yincanatomical");
});

app.listen(PORT, (err) => {
    if (err) {
      return console.error('Failed', err);
    }
    console.log(`Listening on port ${PORT}`);
    return app;
  });