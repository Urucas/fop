# fop (folder-of-path) [![Build Status](https://travis-ci.org/Urucas/fop.svg)](https://travis-ci.org/Urucas/fop)
Simply giving you the folder of a file path 

#Install
```bash
npm install --save fop
```

#Usage

API
```javascript
var fop = require('fop');
var folder = fop("/Users/vruno/myfile.txt");
console.log(folder);
// /Users/vruno/
```

