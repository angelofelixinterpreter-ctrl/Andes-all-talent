
const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');
if(menu&&links){menu.onclick=()=>links.classList.toggle('open');links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'))}
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const t=document.querySelector('#toast');if(t){t.textContent='Demo submission received. Connect a secure backend before collecting real data.';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4500)}form.reset()}));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
