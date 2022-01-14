# tempp

will make full on projects with each of theese files. Decluttering the pc at the moment.

import {useSelector,useDispatch} from 'react-redux';
import {mx} from './action.x';

import {useReducer, useEffect,useLayoutEffect,useRef,useState} from 'react';





const App=()=>{ const rt=useRef(null);useEffect(()=>{console.log('useEffect');window.title="hello world";},[]); useLayoutEffect(()=>console.log('layout teeftc call'),[]); const [a,b]=useReducer((v,d)=>{switch(d.type){case "hi":return {m:a.m+"!!",n:a.n+2}; case "num":return {m:a.m,n:-1};default:return {m:'def',n:22};}},{m:"hello",n:2}); const d=useDispatch(); const t=useSelector(s=>s.hx); return(<><h1 onClick={()=>{console.log(mx());d(mx());}}>{t}</h1><h1 onClick={()=>d({type:'lol'})}>{t}</h1><h4 onClick={()=>b({type:'def'})}>{a.m} and {a.n -20}</h4><div><input ref={rt} /><button onClick={()=>rt.current.value="hello universe"}>ol</button></div></>);};

—---------
import {useSelector,useDispatch} from 'react-redux';
import {mx} from './action.x';

import {useReducer, useEffect,useLayoutEffect,useRef,useState} from 'react';





const App=()=>{ const rt=useRef(null);useEffect(()=>{console.log('useEffect');window.title="hello world";},[]); useLayoutEffect(()=>console.log('layout teeftc call'),[]); const [a,b]=useReducer((v,d)=>{switch(d.type){case "hi":return {m:a.m+"!!",n:a.n+2}; case "num":return {m:a.m,n:-1};default:return {m:'def',n:22};}},{m:"hello",n:2}); const d=useDispatch(); const t=useSelector(s=>s.hx); return(<><h1 onClick={()=>{console.log(mx());d(mx());}}>{t}</h1><h1 onClick={()=>d({type:'lol'})}>{t}</h1><h4 onClick={()=>b({type:'def'})}>{a.m} and {a.n -20}</h4><div><input ref={rt} /><button onClick={()=>rt.current.value="hello universe"}>ol</button></div></>);};

