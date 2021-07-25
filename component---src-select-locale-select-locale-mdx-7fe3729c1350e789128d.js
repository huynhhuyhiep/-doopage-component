(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Jv0O:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a("Fcif"),l=a("+I+c"),c=a("mXGw"),o=a("/FXl"),i=a("TjRS"),s=a("ZFoC"),d=a("Lv8c"),u=(a("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/SelectLocale/SelectLocale.mdx"}});var r={_frontmatter:u},p=i.a;function b(e){var t,a,b,m=e.components,O=Object(l.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},r,O,{components:m,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"selectlocale"},"SelectLocale"),Object(o.b)("p",null,"Base on ",Object(o.b)("a",{parentName:"p",href:"https://material-ui.com/components/text-fields/"},"https://material-ui.com/components/text-fields/")),Object(o.b)("p",null,"Related component"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://material-ui.com/components/selects/#select"},"https://material-ui.com/components/selects/#select"))),Object(o.b)("p",null,"Icon"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://material-ui.com/components/material-icons/"},"https://material-ui.com/components/material-icons/"))),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { SelectLocale } from '@doopage/react-ui-kit'\n\nconst Example = () => {\n    return <SelectLocale />;\n}\n\nexport default Example;\n")),Object(o.b)("h2",{id:"playground"},"Playground"),Object(o.b)("h3",{id:"simple"},"Simple"),Object(o.b)(s.c,{__position:0,__code:"() => {\n  const [selectedLocale, setSelectedLocale] = useState()\n  return (\n    <div>\n      <div>selectedLocale: {selectedLocale}</div>\n      <SelectLocale onSelectedChange={setSelectedLocale} />\n    </div>\n  )\n}",__scope:(t={props:O,DefaultLayout:i.a,Playground:s.c,Props:s.d,useState:c.useState,SelectLocale:d.a},t.DefaultLayout=i.a,t._frontmatter=u,t),mdxType:"Playground"},(function(){var e=Object(c.useState)(),t=e[0],a=e[1];return Object(o.b)("div",null,Object(o.b)("div",null,"selectedLocale: ",t),Object(o.b)(d.a,{onSelectedChange:a,mdxType:"SelectLocale"}))})),Object(o.b)("h3",{id:"show-default-locale"},"Show default locale"),Object(o.b)(s.c,{__position:1,__code:"() => {\n  const [selectedLocale, setSelectedLocale] = useState('en_US')\n  const [defaultLocale, setDefaultLocale] = useState('vi_VN')\n  const [options, setOptions] = useState([\n    {\n      id: 'vi_VN',\n      name: 'Việt Nam',\n    },\n    { id: 'en_US', name: 'English (US)' },\n  ])\n  return (\n    <div>\n      <div>selectedLocale: {selectedLocale}</div>\n      <div>defaultLocale: {defaultLocale}</div>\n      <div>Locale Options: {JSON.stringify(options)}</div>\n      <SelectLocale\n        defaultSelectedLocale={selectedLocale}\n        onSelectedChange={setSelectedLocale}\n        defaultLocale={defaultLocale}\n        onCheckedDefaultLocale={setDefaultLocale}\n        defaultOptions={options}\n        onOptionsChange={setOptions}\n        showCheckedDefaultLocale\n      />\n    </div>\n  )\n}",__scope:(a={props:O,DefaultLayout:i.a,Playground:s.c,Props:s.d,useState:c.useState,SelectLocale:d.a},a.DefaultLayout=i.a,a._frontmatter=u,a),mdxType:"Playground"},(function(){var e=Object(c.useState)("en_US"),t=e[0],a=e[1],n=Object(c.useState)("vi_VN"),l=n[0],i=n[1],s=Object(c.useState)([{id:"vi_VN",name:"Việt Nam"},{id:"en_US",name:"English (US)"}]),u=s[0],r=s[1];return Object(o.b)("div",null,Object(o.b)("div",null,"selectedLocale: ",t),Object(o.b)("div",null,"defaultLocale: ",l),Object(o.b)("div",null,"Locale Options: ",JSON.stringify(u)),Object(o.b)(d.a,{defaultSelectedLocale:t,onSelectedChange:a,defaultLocale:l,onCheckedDefaultLocale:i,defaultOptions:u,onOptionsChange:r,showCheckedDefaultLocale:!0,mdxType:"SelectLocale"}))})),Object(o.b)("h3",{id:"show-default-option"},"Show default option"),Object(o.b)(s.c,{__position:2,__code:"() => {\n  const [selectedLocale, setSelectedLocale] = useState()\n  const [options, setOptions] = useState([\n    { id: 'default', name: 'Default Locale', allowRemove: false },\n    {\n      id: 'vi_VN',\n      name: 'Việt Nam',\n    },\n  ])\n  return (\n    <div>\n      <div>selectedLocale: {selectedLocale}</div>\n      <div>Locale Options: {JSON.stringify(options)}</div>\n      <SelectLocale\n        onSelectedChange={setSelectedLocale}\n        defaultOptions={options}\n        onOptionsChange={setOptions}\n      />\n    </div>\n  )\n}",__scope:(b={props:O,DefaultLayout:i.a,Playground:s.c,Props:s.d,useState:c.useState,SelectLocale:d.a},b.DefaultLayout=i.a,b._frontmatter=u,b),mdxType:"Playground"},(function(){var e=Object(c.useState)(),t=e[0],a=e[1],n=Object(c.useState)([{id:"default",name:"Default Locale",allowRemove:!1},{id:"vi_VN",name:"Việt Nam"}]),l=n[0],i=n[1];return Object(o.b)("div",null,Object(o.b)("div",null,"selectedLocale: ",t),Object(o.b)("div",null,"Locale Options: ",JSON.stringify(l)),Object(o.b)(d.a,{onSelectedChange:a,defaultOptions:l,onOptionsChange:i,mdxType:"SelectLocale"}))})),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"select-locale"},"Select Locale"),Object(o.b)(s.d,{of:d.a,table:!0,mdxType:"Props"}))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/SelectLocale/SelectLocale.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-select-locale-select-locale-mdx-7fe3729c1350e789128d.js.map