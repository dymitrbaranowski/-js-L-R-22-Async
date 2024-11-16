(async function(){const t=["sdfweee","Ukraine","France"].map((async t=>{const e=await fetch(`https://restcountries.com/v3.1/name/${t}`);if(!e.ok)throw new Error("Not found");return e.json()}));return await Promise.allSettled(t)})().then((t=>{const e=t.filter((({status:t})=>"fulfilled"===t));console.log(e)})).catch((t=>console.log(t)));
//# sourceMappingURL=index.c84e720f.js.map
