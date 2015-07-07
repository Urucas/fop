# fop (folder-of-path) [![Build Status](https://travis-ci.org/Urucas/fop.svg)](https://travis-ci.org/Urucas/fop)
Simply giving you the folder of a file path 

#Usage

**CLI**
```bash
$ npm install -g fop
$ fop --path /Users/vruno/myfile.txt
$ /Users/vruno/
```

**API**
```bash 
npm install --save fop
```
```javascript
var fop = require('fop');
var folder = fop("/Users/vruno/myfile.txt");
console.log(folder);
// /Users/vruno/
```

