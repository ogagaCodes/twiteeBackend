const app = require("./src");
const KEYS = require('./src/_helpers/keys')

const PORT = KEYS.PORT || 7070;
app.listen(PORT, () => {
  console.log(`Server has started!... and running on port ${PORT}`);
});
