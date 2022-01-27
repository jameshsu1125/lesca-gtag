[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-gtag --save
```

# Demo

[Live Demo](https://jameshsu1125.github.io/lesca-gtag/)

# Usage

## install

```javascript
import Gtag from 'lesca-gtag';

// install on entry file
Gtag.install('your-gtag-id');
```

## add pageview

```javascript
import Gtag from 'lesca-gtag';

// page view
Gtag.pv('your page name');
```

## add event

```javascript
import Gtag from 'lesca-gtag';

<button
	onClick={() => {
		Gtag.event('pageName', 'CategoryName');
	}}
>
	send event
</button>;
```

# Methods

| method             |  options  |       description        | default |
| :----------------- | :-------: | :----------------------: | ------: |
| install(id)        |    id     |         gtag id          |         |
| pv(page_name)      | page_name |    page name ex: home    |         |
| event(cate, label) |   cate    | category name. ex: home  |         |
|                    |   label   | label name. ex: download |         |
