import{r as t,u as n,a as m,j as e}from"./index-BLjqJfq7.js";import{e as x}from"./apiCall-DKqZyrV_.js";const h=()=>{const[a,l]=t.useState({}),[r,i]=t.useState(0),[s,o]=t.useState({booking:"Book Now",bgColor:"blue"}),{id:c}=n(),g=m();return t.useEffect(()=>{(async()=>{const d=await x(c);i(d.availableSeats),l(d)})()},[]),e.jsxs("div",{className:"bg-white",children:[e.jsx("button",{className:"bg-gray-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-600 transition m-2.5",onClick:()=>{g("/app/events")},children:"Back"}),e.jsxs("div",{className:"mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:a.title}),e.jsx("p",{className:"mt-4 text-gray-500",children:a.description}),e.jsxs("dl",{className:"mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8",children:[e.jsxs("div",{className:"border-t border-gray-200 pt-4",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Category"}),e.jsx("dd",{className:"mt-2 text-sm text-gray-500",children:a.category})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Date"}),e.jsx("dd",{className:"mt-2 text-sm text-gray-500",children:a.date})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4",children:[e.jsx("dt",{className:"font-medium text-gray-900",children:"Price"}),e.jsxs("dd",{className:"mt-2 text-sm text-gray-500",children:["$",a.price]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 flex flex-col",children:[e.jsxs("span",{className:"flex justify-between",children:[e.jsxs("h3",{style:{display:"inline"},className:"font-medium text-gray-900",children:["Available seats:"," "]}),r]}),e.jsx("button",{className:`bg-${s.bgColor}-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-${s.bgColor}-600 transition mt-2.5`,onClick:()=>{i(r-1),o({booking:"Booked",bgColor:"gray"})},disabled:r===0||s.booking=="Booked",children:s.booking})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8",children:[e.jsx("img",{src:"https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg",alt:"Walnut card tray with white powder coated steel divider and 3 punchout holes.",className:"rounded-lg bg-gray-100"}),e.jsx("img",{src:"https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg",alt:"Top down view of walnut card tray with embedded magnets and card groove.",className:"rounded-lg bg-gray-100"}),e.jsx("img",{src:"https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg",alt:"Side of walnut card tray with card groove and recessed card area.",className:"rounded-lg bg-gray-100"}),e.jsx("img",{src:"https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg",alt:"Walnut card tray filled with cards and card angled in dedicated groove.",className:"rounded-lg bg-gray-100"})]})]})]})};export{h as default};
