// Role typing rotation
  const roles = ["CE Student", "Full-Stack Developer", "CS50x — In Progress", "Node.js · PostgreSQL · React"];
  const roleEl = document.getElementById('roleText');
  let ri = 0, ci = 0, deleting = false;
  function typeRole(){
    const current = roles[ri];
    if(!deleting){
      ci++;
      roleEl.textContent = current.slice(0, ci);
      if(ci === current.length){ deleting = true; setTimeout(typeRole, 1400); return; }
    } else {
      ci--;
      roleEl.textContent = current.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
    }
    setTimeout(typeRole, deleting ? 35 : 55);
  }
  typeRole();

  // Terminal whoami typing
  const termText = "Suyog Basnet — Computer Engineering student.\nCurrently building full-stack apps & working through CS50x.\nBased in Nepal. Open to internships.";
  const termEl = document.getElementById('typedTerminal');
  let ti = 0;
  function typeTerm(){
    if(ti <= termText.length){
      termEl.textContent = termText.slice(0, ti);
      ti++;
      setTimeout(typeTerm, 22);
    }
  }
  setTimeout(typeTerm, 500);

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));