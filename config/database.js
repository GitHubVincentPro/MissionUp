### config/database.js

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/missionup');

module.exports = mongoose.connection;
```