import{j as e,r as s,a as x,b as g,c as f}from"./index-BLjqJfq7.js";import{u as h}from"./apiCall-DKqZyrV_.js";const p=({handleSubmit:t,isPasswordCorrect:a})=>e.jsx("div",{children:e.jsxs("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:e.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{className:"space-y-6",onSubmit:i=>{t(i)},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"})}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsx("div",{children:e.jsx("button",{className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Sign in"})})]}),a&&e.jsx("center",{style:{color:"red"},className:"text-xs mt-1",children:"Login failed! check you email and password."})]})]})}),y=()=>{const[t,a]=s.useState(null),[i,n]=s.useState(!1),o=x(),{setuserCredentials:d}=s.useContext(g);s.useEffect(()=>{(async()=>{let r=await h();a(r)})()},[]);const m=r=>{r.preventDefault();let c=email.value,u=password.value,l=f(c,window.btoa(u),t);l!=="userNotFound"?(d(l),o("/app/events")):l=="userNotFound"&&n(!0)};return e.jsx(e.Fragment,{children:e.jsx(p,{handleSubmit:m,isPasswordCorrect:i})})};export{y as default};
