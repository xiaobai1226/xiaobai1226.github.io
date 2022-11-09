(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{538:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("dev-environment\nDockerfile文件（仅前端）")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("16.17\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /workspace_node\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm config set registry https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//registry.npm.taobao.org\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("g @vue/cli\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[s._v("docker build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f Dockerfile "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("t dev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v0.1 .\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("docker-compose.yml文件")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[s._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.7"')]),s._v("\nservices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  dev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    restart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" xiaobai1226/dev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v0.1\n    tty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true\n    network_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" host\n    volumes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /etc/localtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/localtime\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /Users/felix/programme/workspace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/workspace_node\n    environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" TZ=Asia/Shanghai\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);