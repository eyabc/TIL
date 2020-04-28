# Webpack

## Introduction to Webpack
https://velog.io/@decody/Webpack-%EC%84%A4%EC%A0%95
* [commit](https://github.com/eyabc/wetube/commit/052d28a103e53c44b8dcaf59ac8cb3e7442d47a2)
웹팩은 모듈 번들러이다. 
modern .js .hbs .cjs .sass .png .jpg 
-> .js .css .jpg .png

```shell script
npm install webpack webpack-cli
```

- webpack.config.js 는 modern js 파일이 아니라서 import를 쓸 수 없다.
- Node.js에서 파일과 디렉터리 경로를 절대경로로 만들어 주는 방법 path 는 node에 기본적으로 깔려있다.
- __dirname 은 현재 프로젝트 디렉토리 이름. Node.js의 전역 변수
```shell script
const path = require('path');
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: '[name].[format]'
  }
}
module.exports = config;
```

## Styles with Webpack 1
- [commit](https://github.com/eyabc/wetube/commit/1b02b53b0c22297085550d0ee2be2b0c5f734dd7)
- webpack 은  config 파일에서 아래에서 위로 실행한다.

## Styles with Webpack 2
- [commit](https://github.com/eyabc/wetube/commit/11dfc175bf0ff4906867c3d5768b3b6943e1f616)