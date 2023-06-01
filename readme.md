[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

use Google analytics in a simple way.

#### [Live Demo](https://jameshsu1125.github.io/lesca-gtag/)

# Installation

```sh
npm install lesca-gtag --save
```

## Usage

### install modules before DOM render

```javascript
import Gtag from 'lesca-gtag';

// install on entry file
Gtag.install('your-gtag-id'); // get your id => https://analytics.google.com/analytics/web/
```

### add pageview

```javascript
import Gtag from 'lesca-gtag';

// page view
Gtag.pv('your-page-name');
```

### add event

```JSX
import Gtag from 'lesca-gtag';

<button
  onClick={() => {
    Gtag.event('your-page-name', 'action-name');
  }}
>
  send event
</button>
```

## Development

### Methods

| method                                                 |                  description                  | return |
| :----------------------------------------------------- | :-------------------------------------------: | -----: |
| .install( **id**:_string_, **debug**:_boolean_ )       |                initialize gtag                |   void |
| .inset(**id**:_string_)                                | push dataLayer without gtag.js(use gtm maybe) |   void |
| .pv( **pageName**:_string_ )                           |                 add page view                 |   void |
| .event(**pageName**:_string_, **actionName**:_string_) |                   add event                   |   void |
| .gtag( **arguments**:_string_ )                        |                   arguments                   |   void |

### Features

- maintain if necessary
