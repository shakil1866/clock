const currTime = () => {
    let time = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = time;
  };
  currTime();  
    
  setInterval(() => {
    currTime();
  }, 1000);