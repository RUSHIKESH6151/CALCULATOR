let lightTheme = "styles/light.css";
 let darkTheme = "styles/dark.css";
  
//clear the screen after clicking on C button 
  function clearScreen(){
      document.getElementById("result").value = "";
  }
//Display entered value on screen 
  function liveScreen(value){
      let res = document.getElementById("result");
       if(res.value == "undefined"){
           res.value = "";
       }
       res.value += value;
  }
//Swap the stylesheets in order to dark mode and light mode .
  function changeTheme(){
      let darkMode = document.getElementById("dark-mode");
      let theme = document.getElementById("theme");
        if( theme.getAttribute("href") == lightTheme)
        {
            theme.href = darkTheme;
            darkMode.innerHTML = "Light Mode";
        }
        else{
            theme.href = lightTheme;
            darkMode.innerHTML = "Dark Mode";
        }
  }