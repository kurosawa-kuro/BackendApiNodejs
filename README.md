# BackendApiNodejs
Backend API Node.js Express

```
npm install -g nodemon
```

```
npm install
```

```
NODE_ENV=development nodemon app.js
```

アプリケーション ログ
```
 const logger = require("../lib/log/logger").application
 logger.error("debug", 変数)
```