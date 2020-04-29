(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{328:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"iterm2-개발환경-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterm2-개발환경-만들기"}},[s._v("#")]),s._v(" Iterm2 개발환경 만들기")]),s._v(" "),a("h4",{attrs:{id:"iterm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterm2"}},[s._v("#")]),s._v(" iterm2")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("* 맥의 터미널 보조 프로그\n")])])]),a("h3",{attrs:{id:"맥-처음썼을-때-su-sorry-루트-사용자로-들어가는-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#맥-처음썼을-때-su-sorry-루트-사용자로-들어가는-방법"}},[s._v("#")]),s._v(' 맥 처음썼을 때, "su: Sorry" 루트 사용자로 들어가는 방법')]),s._v(" "),a("ul",[a("li",[s._v("bash-3.2# 접속")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -s \npassword: 맥북 비밀번호 입력\n")])])]),a("ul",[a("li",[s._v("비밀번호 설정")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root\n")])])]),a("h3",{attrs:{id:"root-에서-user로-돌아오기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root-에서-user로-돌아오기"}},[s._v("#")]),s._v(" root 에서  user로 돌아오기")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("\n")])])]),a("h2",{attrs:{id:"brew-installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brew-installing"}},[s._v("#")]),s._v(" brew installing")]),s._v(" "),a("h4",{attrs:{id:"home-brew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-brew"}},[s._v("#")]),s._v(" home brew")]),s._v(" "),a("p",[s._v("맥에서 라이브러리나 플러그인등을 쉽게 설치하게 도와주는 패키징 매니저")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("아래 주소의 내용 복사하여 터미널에서 실행\nhttps://brew.sh/index_ko")])]),s._v(" "),a("li",[a("p",[s._v("Press RETURN to continue or any other key to abort\n문구가 출력되면\nRETURN(ENTER)키를 눌러주고 맥 password 입력")])])]),s._v(" "),a("h2",{attrs:{id:"zsh-installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-installing"}},[s._v("#")]),s._v(" zsh installing")]),s._v(" "),a("h4",{attrs:{id:"zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" ZSH")]),s._v(" "),a("p",[s._v("쉘의 확장판")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n")])])]),a("h2",{attrs:{id:"oh-my-zsh-installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh-installing"}},[s._v("#")]),s._v(" Oh My ZSH installing")]),s._v(" "),a("p",[s._v("zsh 을 더 쉽게 사용해주는 플러그인")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),a("h2",{attrs:{id:"agnoster-테마-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agnoster-테마-설치"}},[s._v("#")]),s._v(" agnoster 테마 설치")]),s._v(" "),a("p",[s._v("현재 디렉토리에서 git 의 상태를 알려준다.")]),s._v(" "),a("ul",[a("li",[s._v("zshrc 파일 수정하기")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.zshrc\n--- 변경\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"agnoster"')]),s._v(" \n---\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n \n")])])]),a("h2",{attrs:{id:"폰트-깨짐-해결-d2-폰트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#폰트-깨짐-해결-d2-폰트"}},[s._v("#")]),s._v(" 폰트 깨짐 해결 D2 폰트")]),s._v(" "),a("ol",[a("li",[s._v("최신폰트 다운 후 서체관리자 에 옮김\nhttps://github.com/naver/d2codingfont")]),s._v(" "),a("li",[s._v("iterm2 > (command + ,) 창 > Profiles > Font 변경")])]),s._v(" "),a("h2",{attrs:{id:"이름부분-macbook-pro-지우기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이름부분-macbook-pro-지우기"}},[s._v("#")]),s._v(" 이름부분 Macbook-pro 지우기")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .zshrc\n--- insert\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("prompt_context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DEFAULT_USER")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SSH_CLIENT")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    prompt_segment black default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%(!.%{%F{yellow}%}.)'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n---\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .zshrc\n")])])]),a("h2",{attrs:{id:"new-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-line"}},[s._v("#")]),s._v(" New Line")]),s._v(" "),a("p",[s._v("명령어가 화면에서 벗어나는 경우 new line 적용")]),s._v(" "),a("ul",[a("li",[s._v("agnoster theme update")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .oh-my-zsh/themes/agnoster.zsh-theme\n--- change\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("build_prompt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  // "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  prompt_hg\n  prompt_newline // added, sequence important\n  prompt_end\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n// insert\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("prompt_newline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CURRENT_BG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%{%k%F{'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CURRENT_BG")]),s._v("}%}"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SEGMENT_SEPARATOR")]),s._v("\n%{%k%F{blue}%}"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SEGMENT_SEPARATOR")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%{%k%}"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%{%f%}"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CURRENT_BG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n---\n")])])]),a("h2",{attrs:{id:"syntax-highlight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-highlight"}},[s._v("#")]),s._v(" Syntax Highlight")]),s._v(" "),a("ul",[a("li",[s._v("사용가능한 명령어: green")]),s._v(" "),a("li",[s._v("사용불가능한 명령어: red")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zsh-syntax-highlighting\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n")])])]),a("h2",{attrs:{id:"ide-터미널에-적용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide-터미널에-적용"}},[s._v("#")]),s._v(" IDE 터미널에 적용")]),s._v(" "),a("ul",[a("li",[s._v("Preference(cmd + ,)\nTools > Terminal > Shell path: /bin/zsh\n참고")])]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[s._v("해리의 유목코딩 https://medium.com/harrythegreat/oh-my-zsh-iterm2%EB%A1%9C-%ED%84%B0%EB%AF%B8%EB%84%90%EC%9D%84-%EB%8D%94-%EA%B0%95%EB%A0%A5%ED%95%98%EA%B2%8C-a105f2c01bec")]),s._v(" "),a("li",[s._v("subicura https://subicura.com/2017/11/22/mac-os-development-environment-setup.html")])])])}),[],!1,null,null,null);t.default=e.exports}}]);