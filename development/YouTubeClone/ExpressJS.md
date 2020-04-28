# ExpressJS 

## What is a Server
* Software Server
    * 네트워크에 연결된 한 덩어리의 코드
    
## What is Express
* super stable framework!!!

## first Express Server
* [commit](https://github.com/eyabc/wetube/commit/709c9f3f97e2af7857e83aa5b635efd9371deceb)

## handle route with express
* [commit](https://github.com/eyabc/wetube/commit/e061cea3088dd84bb00828b81b709db7b62ec0cc)

## ES6 on NodeJS using Babel
* [commit](https://github.com/eyabc/wetube/commit/b6a2460419d832830f3bc03dcf09d3008b5d436a)
* [참고](https://shlee0882.tistory.com/231)

## Express Core : Middlewares 1
* [commit](https://github.com/eyabc/wetube/commit/054e584f61abfd2421038ab229efc7d8b72d125c)
* [참고](https://shlee0882.tistory.com/232?category=797808)
* ip 주소 거부 기능 등..
* middleware 는 중간에 접속을 끊을 수도 있다.
    * res.send() !!!
    ```javascript
    const middleware = (req, res, next) => {
      res.send('not hapenning')
    }
    ```

## Express Core: Middlewares 2
* [commit](https://github.com/eyabc/wetube/commit/1dcca49d204527bc005a4f2cfc3dc804ebb930ef)
* [참고](https://shlee0882.tistory.com/233?category=797808)

## Express Core: Routing
* [commit](https://github.com/eyabc/wetube/commit/123099dd366443818c578365e17784ba620cd452)

## MVC Pattern 1 - Route
* [commit](https://github.com/eyabc/wetube/commit/69010a0c9ae6a041302f2e0b04cddadc965add6e)

## MVC Pattern 2 - routes to const 
* [commit](https://github.com/eyabc/wetube/commit/edea14c498779ecedd37c258171b56f60660c828)

## MVC Pattern 3 - controllers
* [commit](https://github.com/eyabc/wetube/commit/0cc50e1c32adaf05b84fd985d15bbd95622dc002)

## Installing pug
* [commit](https://github.com/eyabc/wetube/commit/12fdfc214e4676cf9c9c0f667823218e1628b855)

## Layout with pug
* [commit](https://github.com/eyabc/wetube/commit/4ddcd5cd2b941992dab30f2f46fc06b9e7cb68ad)

## Partials with Pug - header, footer
* [commit](https://github.com/eyabc/wetube/commit/4d8ee9614aaec3b01b6222bae95e2d93d5b29c24)

## Local Variables in Pug
* [commit](https://github.com/eyabc/wetube/commit/2300a3343c63e458459dd21fd4729bd760806b96)

## Template Variables in Pug
* [commit](https://github.com/eyabc/wetube/commit/ade1e0d4628efdf4cf6c42ee1406f28ce8bdec34)

## Search Controller
* [commit](https://github.com/eyabc/wetube/commit/dc086793ea8390116a1b164f0af7c2a3ee76c207)

## Log In HTML
* [commit](https://github.com/eyabc/wetube/commit/18c149f52f273ad4c405f7cd016fb3746589f6b8)

## Change Profile HTML
* [commit](https://github.com/eyabc/wetube/commit/b29cd6004166cfb1180ad852bcf8cc151ac4a96b)

## Change ChangePassword.pug, EditVideo.pug, VideoUpload.pug HTML
* [commit](https://github.com/eyabc/wetube/commit/b57ca7cac1a5719d95f589da8aabd5ba4257f251)

## Home Controller - Videos 
* [commit](https://github.com/eyabc/wetube/commit/854bcf2751f376cd093aec6ee80e2098a8b4afd1)

## Home Controller part Two - mixins
* [commit](https://github.com/eyabc/wetube/commit/bd7598b4cf7beea6cff9e13caa63ea9cae543bd5)

## Join Controller
* [commit](https://github.com/eyabc/wetube/commit/bbfcad8e6d51260d6ea6cd74f128cab0b063089f)

## Log In and User Profile Controller
* [commit](https://github.com/eyabc/wetube/commit/50c6d21e7eae4dda8bf49d7dcf1fb335647f1883)

## More Controllers
* [commit](https://github.com/eyabc/wetube/commit/6a8b5d1e18cecd0bcc6ff30c597e9835195d9812)

## MongoDB & [Mongoose](https://mongoosejs.com/)
* [commit](https://github.com/eyabc/wetube/commit/76c5dc943ebbe9e44a4930c66bc8461d14c30d58)
* mongodb object modeling for node.js
* mongo - >chatting 

## Connecting MongoDB
* [commit](https://github.com/eyabc/wetube/commit/b04cc3df2fe8d342e0a7c2f0181145aab619f6e2)

## Configuring Dot Env
* [commit](https://github.com/eyabc/wetube/commit/b19637cb121a804ed9908df4284f4c26107aa536)

## Video Model
* [commit](https://github.com/eyabc/wetube/commit/f59c097dcee32993213924f3e167d3797cc28445)

## Comment Model
* [commit](https://github.com/eyabc/wetube/commit/9cb5611a8337dcd01235ce8ced70e9ac76617aa7)

## Home Controller Finished
* [commit](https://github.com/eyabc/wetube/commit/2bbbb190168af7d8e3ab21a0e890b9fcf120393e)

## Uploading and Creating Video
* [commit](https://github.com/eyabc/wetube/commit/636ca9f989d74a399e34289729f6a9f0b5c34ae0)
* [multer](https://www.npmjs.com/package/multer)

## Uploading and Creating a Video part Two
* [commit1](https://github.com/eyabc/wetube/commit/c2017fc8f1c5051a6e6830cf7e0e5218694bdbe1)
* [commit2](https://github.com/eyabc/wetube/commit/0927d813bd4fed4618dfe872e44d08b0f25dc027)
* [commit3](https://github.com/eyabc/wetube/commit/e6275f5ece8f476fbf733ce31d1083c3cc25ad6b)
``` shell script
mongo
> use we-tube
> show collections
> db.videos.remove({})
```
* express.static('dir')
    * dir에서 file을 보내주는 middleware

## Getting Video By ID
* [commit](https://github.com/eyabc/wetube/commit/9408c224fe8eec8287d3fb6728ed14d91430c58d)

## Editing a Video
* [commit](https://github.com/eyabc/wetube/commit/724d25d5fa5e0f052ca9cd6d83606b6bd5456d0c)

## Deleting a Video
* [commit](https://github.com/eyabc/wetube/commit/b9c5ab618451b8bd3ac68b5cb6e559af93787b0e)

## ~~Installing ESLint~~ IntelliJ JSLint && Search
* [commit](https://github.com/eyabc/wetube/commit/b9c5ab618451b8bd3ac68b5cb6e559af93787b0e)
```shell script
npm install eslint -g
eslint --init
```

## Searching Videos
* [commit](https://github.com/eyabc/wetube/commit/bf0c083a9104c65dfcbb25249393346688636cc9)
* [commit](https://github.com/eyabc/wetube/commit/8fca103f8068ce3caaaed3286e8de2fb288a413c)
 
