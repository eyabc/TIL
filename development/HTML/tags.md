# html 태그
## applet 
이 기능은 이제 사용되지 않음. html5에서 제거됨.
문서에 포함되는 애플릿(웹페이지에 포함되어 작은 기능을 하는 프로그램)을 정의할 떄 사용된다.
html5에서는 <embed> <object> 를 사용

## object: 퇴화 태그, <iframe> 을 사용할 수 없는 상황에서만 사용을 권장함.
  html 문서안에 또 다른 html 문서를 삽입, audio, video, pdf 파일이나 플러그인(Java applets, Flash 등)을 넣을 수 있다.
  iframe은 플레이어를 담고 있는 하나의 창이다. 사용자 컴퓨터의 환경설정에 맞추어 역동적으로 반응한다. 만약 사용자 컴퓨터에 flash가 설치되어 있지 않다면
  iframe은 이것을 탐지해서 다른 대안을 찾는다. 설정이 업데이트 되면 iframe에 삽입된 객체도 실시간으로 업데이트 된다.
  object로 코드를 삽입하면 업데이트를 할 수 없다.
  
## h1 - h6
* 하나의 html 페이지에 <h1>는 한번만 사용하자.
* h 태그는 제목을 나타내는 코드이기 떄문에 문단의 처음에 배치하며 꾸미기에는 사용하지 않는다.

### [접근성 고려사항](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
스크린리더 사용자가 흔히 사용하는 탐색 기법은 제목에서 제목으로 뛰어넘으며 페이지 콘텐츠를 빠르게 파악하는 것이다.
따라서 제목단계를 뛰어넘으면 중간에 빠진 제목이 어디 있는 건지 모르므로 사용자의 혼란을 야기할 수 있다.
- bad
    ```html
    <h1>Heading level 1</h1>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    ```
- good
    ```html
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    ```
  
## p 
* [<P>태그와 <DIV>태그 차이점과 용도 2016](https://m.blog.naver.com/PostView.nhn?blogId=magicmedia&logNo=220796228474&proxyReferer=https:%2F%2Fwww.google.com%2F)
* p 는 문장의 단락 표시. 다음 단락과 구분하기 위해 한줄을 강제로 비운다.
div 는 영역을 나누는 용도로 사용하자.

## blockquote
안쪽의 텍스트가 긴 인용문임을 나타낸다.
```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
``` 
* cite : 인용문의 출처 문서나 메시지를 가리키는 URL. 인용문의 맥락 혹은 출처 정보를 가리킬 용도

# pre
미리 서식을 지정한 텍스트, html 에 작성한 내용 그대로 표현한다.
요소 내 공백문자를 그대로 유지한다.  
```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

### 접근성 고려사항
pre 요소로 만든 이미지나 도표에 대한 대체 설명을 지정한다.
* figure / figcaption
```html
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  _______________________
< 나는 이 분야의 전문가다. >
  -----------------------
         \   ^__^ 
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을 적용한 텍스트로 그려져있습니다.
  </figcaption>
</figure>
```
## [a](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)
href 속성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소, 전화번호 와 그 외 다른 url 로 연결할 수 있는 하이퍼링크를 만든다. 

- 같은 페이지의 요소로 연결    
    ```html
    <p><a href="#Section_further_down">아래 제목으로 건너뛰기</a></p>
    <h2 id="Section_further_down">아래의 제목</h2>
    ```
  - 스위치 조작, 음성 명령 처럼 콘텐츠를 건너뛰기 힘든 보조 기술 사용자에게 도움이 된다.

- 현재 페이지의 최상단으로 이동하는 링크
    ```html
    <a href="#top"></a>
    <a href="#"></a>
    ```

### 보안과 개인정보
a 요소는 사용자의 보안과 개인정보에 중요한 영향을 줄 수 있다.
- [referer issue](/Users/ey/project/TIL/development/HTTP/HTTP headers Referer 보안이슈.md)

target="_blank" 를 rel="noreferrer" 와 rel="noopener" 없이 사용하면 웹사이트가 [window.opener](/Users/ey/project/TIL/development/JavaScript/window.opener.md) API 악용 공격에 취약해 진다. 

### onclick 이벤트
href='#' / javascript:void(0) 으로 페이지 새로고침을 막고 click 이벤트처리기를 등록해서 가짜버튼을 만드는 방식의 남용은 좋지 않다.

=> 예측하지 못한 동작


- 링크를 복사하거나 드래그 
- 링크를 새 탭이나 새창에서 열 때
- 즐겨찾기에 추가할 때
- javascript 를 불러오는 중일때 
- 오류가 발생했을때
- javascript 를 비활성화 했을 때

스크린 리더 등 보조 기술에도 잘못된 의미를 전달한다

""button 을 사용하자.

하이퍼링크는 진짜 url로의 내비게이션만 사용하면 된다.
  


## [abbr](https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr)
준말/머리글자
```html
<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> 
to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
```
- title : 툴팁으로 표현
- 준말 정의하기 : dfn
```html
<p><dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr>
</dfn> is a markup language used to create the semantics and structure
of a web page.</p>

<p>A <dfn id="spec">Specification</dfn>
(<abbr title="Specification">spec</abbr>) is a document that outlines
in detail how a technology or API is intended to function and how it is
accessed.</p>
```

### 접근성 고려사항
준말과 머리글자의 첫 등장에, 그 뜻을 풀어 설명하면 독자가 보다 수월하게 이해할 수 있습니다. 
```html
<p>JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight data-interchange format.</p>
```

## acronym
퇴화된 태그. abbr 요소를 사용해야 한다.
약어와 역어를 구성하는 문자표


## address
사람, 단체, 조직 등에 대한 연락처 정보
```html
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

## big
html5에서 제거됨.
주변텍스트보다 한레벨 더 큰 폰트사이즈로 렌더링함.

```css
.bigger {
  font-size: larger;
}
```

## cite Citation element 
인용에서 참조를 설명
```html
<blockquote>
    <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    <footer>
        First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).
    </footer>
</blockquote>
```

code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgruop,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}
ol,ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}
blockquote: before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  all: unset;
  cursor: pointer;
}
*,
input {
  box-sizing: border-box;
}

input {
  border: none;
  box-sizing: border-box;
  &: focus,
  &L action {
    outline: none;
  }
}
