function greeting(){

  if(document.getElementById("target").innerText == "World"){
    document.getElementById("target").innerText = "Hello"
  }
  else{
    document.getElementById("target").innerText = "World"
  }
  
  document.getElementById("input").value = "World"
}