const o=async()=>(await fetch("/EventBookingSystem/users.json")).json(),c=async()=>(await fetch("/EventBookingSystem/events.json")).json(),r=async s=>(await(await fetch("/EventBookingSystem/events.json")).json()).find(n=>n.id==s.substring(1));export{c as a,r as e,o as u};
