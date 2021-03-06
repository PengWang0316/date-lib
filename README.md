# Date-lib

Help javascript users to get the formatted date string from the date

[![Build Status](https://travis-ci.org/PengWang0316/date-lib.svg?branch=master)](https://travis-ci.org/PengWang0316/date-lib) [![Coverage Status](https://coveralls.io/repos/github/PengWang0316/date-lib/badge.svg?branch=master)](https://coveralls.io/github/PengWang0316/date-lib?branch=master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/af8131c212944226bfeeab4ef01aba4c)](https://www.codacy.com/app/PengWang0316/date-lib?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PengWang0316/date-lib&amp;utm_campaign=Badge_Grade) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Installing

```
npm install --save date-format-lib
```

# Usage

**When you use ES5**

```javascript
var DateLib = require('date-format-lib');
```

**When you use ES6**

```javascript
import DateLib form 'date-format-lib';
```

**Get today's date string with a giving pattern**
Assume today is March 16 1982

```javascript
console.log(DateLib.getCurrentDateString('yyyy/mm/dd'));
// Output 1982/03/16
console.log(DateLib.getCurrentDateString('yyyy-mm-dd'));
// Output 1982-03-16
console.log(DateLib.getCurrentDateString('mm-dd-yyyy'));
// Output 03-16-1982
console.log(DateLib.getCurrentDateString('dd-mm-yyyy'));
// Output 16-03-1982
console.log(DateLib.getCurrentDateString('mm*dd&yyyy'));
// Output 03*16&1982
```

**Get a giving date's string with a giving pattern**
You can use either a string or a Date object for the date source.

```javascript
console.log(DateLib.getDateString('03/16/1982', 'yyyy/mm/dd'));
// Output 1982/03/16
console.log(DateLib.getDateString('03/16/1982', 'yyyy-mm-dd'));
// Output 1982-03-16
console.log(DateLib.getDateString(new Date('03/16/1982'), 'yyyy-mm-dd'));
// Output 1982-03-16
```

# License

Date-lib is licensed under MIT License - see the [License file](https://github.com/PengWang0316/date-lib/blob/master/LICENSE).
