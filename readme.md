[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-gtag --save
```

# Usage

```javascript
import Gtag from 'lesca-gtag';

Gtag.install('your-gtag-id');
Gtag.pv('your page name');

function gevt() {
	Gtag.event('category', 'label');
}

<button onClick={gevt}>send event</button>;
```

# Methods

| method             |  options  |       description        | default |
| :----------------- | :-------: | :----------------------: | ------: |
| install(id)        |    id     |         gtag id          |         |
| pv(page_name)      | page_name |    page name ex: home    |         |
| event(cate, label) |   cate    | category name. ex: home  |         |
|                    |   label   | label name. ex: download |         |
