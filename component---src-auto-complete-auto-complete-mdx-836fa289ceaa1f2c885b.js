(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{c8pZ:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return b})),o.d(t,"default",(function(){return g}));var n=o("Fcif"),a=o("+I+c"),l=o("mXGw"),i=o("/FXl"),u=o("TjRS"),p=o("CR/M"),c=o.n(p),r=o("ZFoC"),d=o("Jd/G"),m=o("WBG2"),s=o("YmFV"),b=(o("aD51"),{});void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/AutoComplete/AutoComplete.mdx"}});var f={_frontmatter:b},v=u.a;function g(e){var t,o,p,g,j,y,A=e.components,h=Object(a.a)(e,["components"]);return Object(i.b)(v,Object(n.a)({},f,h,{components:A,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"autocomplete"},"Autocomplete"),Object(i.b)("p",null,"Base on ",Object(i.b)("a",{parentName:"p",href:"https://material-ui.com/components/autocomplete/#autocomplete"},"https://material-ui.com/components/autocomplete/#autocomplete")),Object(i.b)("p",null,"Related component"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://huynhhuyhiep.github.io/doopage-react-ui-kit/input"},"Input"))),Object(i.b)("p",null,"Icon"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://material-ui.com/components/material-icons/"},"https://material-ui.com/components/material-icons/"))),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import { Autocomplete } from '@doopage/react-ui-kit'\n\nconst Example = () =>\n    <Autocomplete\n      options={[\n          { id: '1', name: 'The Shawshank Redemption' },\n          { id: '2', name: 'The Godfather' },\n      ]}\n    />\n\nexport default Example;\n")),Object(i.b)("h2",{id:"playground"},"Playground"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)(r.c,{__position:0,__code:"<Autocomplete\n  options={[\n    { id: '1', name: 'The Shawshank Redemption' },\n    { id: '2', name: 'The Godfather' },\n  ]}\n/>",__scope:(t={props:h,DefaultLayout:u.a,AdbIcon:c.a,Playground:r.c,Props:r.d,useState:l.useState,useMemo:l.useMemo,Avatar:d.b,Autocomplete:m.a,doopageLogo:s.a},t.DefaultLayout=u.a,t._frontmatter=b,t),mdxType:"Playground"},Object(i.b)(m.a,{options:[{id:"1",name:"The Shawshank Redemption"},{id:"2",name:"The Godfather"}],mdxType:"Autocomplete"})),Object(i.b)("h3",{id:"custom-option-item"},"Custom option item"),Object(i.b)(r.c,{__position:1,__code:"<Autocomplete\n  options={[\n    {\n      id: '1',\n      name: 'option 1',\n      icon: <AdbIcon />,\n      description: 'description options',\n    },\n    {\n      id: '2',\n      name: 'option 2',\n      icon: <AdbIcon />,\n      description: 'description options',\n    },\n  ]}\n/>",__scope:(o={props:h,DefaultLayout:u.a,AdbIcon:c.a,Playground:r.c,Props:r.d,useState:l.useState,useMemo:l.useMemo,Avatar:d.b,Autocomplete:m.a,doopageLogo:s.a},o.DefaultLayout=u.a,o._frontmatter=b,o),mdxType:"Playground"},Object(i.b)(m.a,{options:[{id:"1",name:"option 1",icon:Object(i.b)(c.a,{mdxType:"AdbIcon"}),description:"description options"},{id:"2",name:"option 2",icon:Object(i.b)(c.a,{mdxType:"AdbIcon"}),description:"description options"}],mdxType:"Autocomplete"})),Object(i.b)("h3",{id:"multiple"},"Multiple"),Object(i.b)(r.c,{__position:2,__code:'<Autocomplete\n  multiple\n  placeholder="Select options"\n  label="Autocomplete Multiple"\n  variant="outlined"\n  chipColor="info"\n  options={Array(10)\n    .fill(0)\n    .map((item, index) => ({\n      id: index.toString(),\n      name: `option ${index}`,\n      icon:\n        index % 2 ? <AdbIcon /> : <Avatar src={doopageLogo} size={\'small\'} />,\n      description: `description option ${index}`,\n    }))}\n/>',__scope:(p={props:h,DefaultLayout:u.a,AdbIcon:c.a,Playground:r.c,Props:r.d,useState:l.useState,useMemo:l.useMemo,Avatar:d.b,Autocomplete:m.a,doopageLogo:s.a},p.DefaultLayout=u.a,p._frontmatter=b,p),mdxType:"Playground"},Object(i.b)(m.a,{multiple:!0,placeholder:"Select options",label:"Autocomplete Multiple",variant:"outlined",chipColor:"info",options:Array(10).fill(0).map((function(e,t){return{id:t.toString(),name:"option "+t,icon:t%2?Object(i.b)(c.a,{mdxType:"AdbIcon"}):Object(i.b)(d.b,{src:s.a,size:"small",mdxType:"Avatar"}),description:"description option "+t}})),mdxType:"Autocomplete"})),Object(i.b)("h3",{id:"control"},"Control"),Object(i.b)(r.c,{__position:3,__code:'() => {\n  const [valueSingle, setValueSingle] = useState(\'3\')\n  const [valueMulti, setValueMulti] = useState([\'1\', \'2\'])\n  const options = useMemo(\n    () =>\n      Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          id: index.toString(),\n          name: `option ${index}`,\n        })),\n    [],\n  )\n  return (\n    <div>\n      <div style={{ fontSize: 15, marginBottom: 10 }}>\n        Single Value: {valueSingle}\n      </div>\n      <Autocomplete\n        placeholder="Select options"\n        label="Autocomplete Single"\n        variant="outlined"\n        value={valueSingle}\n        onChange={value => {\n          setValueSingle(value)\n        }}\n        options={options}\n      />\n      <br />\n      <div style={{ fontSize: 15, marginBottom: 10 }}>\n        Multiple Value: {valueMulti.join(\', \')}\n      </div>\n      <Autocomplete\n        multiple\n        placeholder="Select options"\n        label="Autocomplete Multiple"\n        variant="outlined"\n        value={valueMulti}\n        onChange={value => {\n          setValueMulti(value)\n        }}\n        options={options}\n      />\n    </div>\n  )\n}',__scope:(g={props:h,DefaultLayout:u.a,AdbIcon:c.a,Playground:r.c,Props:r.d,useState:l.useState,useMemo:l.useMemo,Avatar:d.b,Autocomplete:m.a,doopageLogo:s.a},g.DefaultLayout=u.a,g._frontmatter=b,g),mdxType:"Playground"},(function(){var e=Object(l.useState)("3"),t=e[0],o=e[1],n=Object(l.useState)(["1","2"]),a=n[0],u=n[1],p=Object(l.useMemo)((function(){return Array(10).fill(0).map((function(e,t){return{id:t.toString(),name:"option "+t}}))}),[]);return Object(i.b)("div",null,Object(i.b)("div",{style:{fontSize:15,marginBottom:10}},"Single Value: ",t),Object(i.b)(m.a,{placeholder:"Select options",label:"Autocomplete Single",variant:"outlined",value:t,onChange:function(e){o(e)},options:p,mdxType:"Autocomplete"}),Object(i.b)("br",null),Object(i.b)("div",{style:{fontSize:15,marginBottom:10}},"Multiple Value: ",a.join(", ")),Object(i.b)(m.a,{multiple:!0,placeholder:"Select options",label:"Autocomplete Multiple",variant:"outlined",value:a,onChange:function(e){u(e)},options:p,mdxType:"Autocomplete"}))})),Object(i.b)("h3",{id:"allow-create-item"},"Allow create item"),Object(i.b)(r.c,{__position:4,__code:"() => {\n  const [value, setValue] = useState(['1', '2'])\n  return (\n    <div>\n      <div style={{ fontSize: 15, marginBottom: 10 }}>\n        Value: {value.join(', ')}\n      </div>\n      <Autocomplete\n        allowCreate\n        multiple\n        placeholder=\"Select options\"\n        label=\"Autocomplete Multiple\"\n        variant=\"outlined\"\n        value={value}\n        onChange={value => {\n          setValue(value)\n        }}\n        options={Array(10)\n          .fill(0)\n          .map((item, index) => ({\n            id: index.toString(),\n            name: `option ${index}`,\n          }))}\n        chipProps={{\n          outlined: false,\n          rounded: true,\n          color: 'success',\n        }}\n        setCreateText={value => `Add \"${value}\"`}\n        showCreateText={false}\n        allowDuplicates\n      />\n    </div>\n  )\n}",__scope:(j={props:h,DefaultLayout:u.a,AdbIcon:c.a,Playground:r.c,Props:r.d,useState:l.useState,useMemo:l.useMemo,Avatar:d.b,Autocomplete:m.a,doopageLogo:s.a},j.DefaultLayout=u.a,j._frontmatter=b,j),mdxType:"Playground"},(function(){var e=Object(l.useState)(["1","2"]),t=e[0],o=e[1];return Object(i.b)("div",null,Object(i.b)("div",{style:{fontSize:15,marginBottom:10}},"Value: ",t.join(", ")),Object(i.b)(m.a,{allowCreate:!0,multiple:!0,placeholder:"Select options",label:"Autocomplete Multiple",variant:"outlined",value:t,onChange:function(e){o(e)},options:Array(10).fill(0).map((function(e,t){return{id:t.toString(),name:"option "+t}})),chipProps:{outlined:!1,rounded:!0,color:"success"},setCreateText:function(e){return'Add "'+e+'"'},showCreateText:!1,allowDuplicates:!0,mdxType:"Autocomplete"}))})),Object(i.b)("h3",{id:"custom-chip-color"},"Custom chip color"),Object(i.b)(r.c,{__position:5,__code:"() => {\n  const [value, setValue] = useState(['1', '2'])\n  return (\n    <div>\n      <div style={{ fontSize: 15, marginBottom: 10 }}>\n        Value: {value.join(', ')}\n      </div>\n      <Autocomplete\n        allowCreate\n        multiple\n        placeholder=\"Select options\"\n        label=\"Autocomplete Multiple\"\n        variant=\"outlined\"\n        value={value}\n        onChange={value => {\n          setValue(value)\n        }}\n        options={Array(10)\n          .fill(0)\n          .map((item, index) => ({\n            id: index.toString(),\n            name: `option ${index}`,\n            color: index % 2 === 0 ? '#D8BFD8' : undefined,\n          }))}\n      />\n    </div>\n  )\n}",__scope:(y={props:h,DefaultLayout:u.a,AdbIcon:c.a,Playground:r.c,Props:r.d,useState:l.useState,useMemo:l.useMemo,Avatar:d.b,Autocomplete:m.a,doopageLogo:s.a},y.DefaultLayout=u.a,y._frontmatter=b,y),mdxType:"Playground"},(function(){var e=Object(l.useState)(["1","2"]),t=e[0],o=e[1];return Object(i.b)("div",null,Object(i.b)("div",{style:{fontSize:15,marginBottom:10}},"Value: ",t.join(", ")),Object(i.b)(m.a,{allowCreate:!0,multiple:!0,placeholder:"Select options",label:"Autocomplete Multiple",variant:"outlined",value:t,onChange:function(e){o(e)},options:Array(10).fill(0).map((function(e,t){return{id:t.toString(),name:"option "+t,color:t%2==0?"#D8BFD8":void 0}})),mdxType:"Autocomplete"}))})),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(r.d,{of:m.a,table:!0,mdxType:"Props"}))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/AutoComplete/AutoComplete.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-auto-complete-auto-complete-mdx-836fa289ceaa1f2c885b.js.map