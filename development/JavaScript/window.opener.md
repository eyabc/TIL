# window.opener
현재 윈도우를 오픈한 윈도우의 reference를 반환한다.

윈도우 A에서 window.open()을 통해 윈도우 B를 열었다면
window.opener를 통해 윈도우 B에서 윈도우A를 제어할 수 있다.

- 오프너 윈도우의 페이지 reload
```html
window.opener.location.reload();
```

현재 윈도우가 다른 윈도우에 의해 열리지 않았다면 null  반환

rel='noopener' 로 window.opener 의 reference 의 세팅을 막는다.