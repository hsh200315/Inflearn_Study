let isStarted = false
let auth = () =>{
  if(isStarted === false){
    console.log("���ư���")
    //Ÿ�̸Ӱ� �۵� ���� �ƴ� ��
    isStarted = true
    document.getElementById("finishCertify").disabled = false
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("randomNumber").innerText = token
    let timer
    let time = 180
    timer = setInterval(function() {
      if(time >= 0){
          let min = Math.floor(time/60)
          let sec = String(time%60).padStart(2,"0")
          document.getElementById("timer").innerText = min + ":" + sec
          time = time - 1
      }
      else{
        document.getElementById("finishCertify").disabled = true
        isStarted = false
        clearInterval(timer)
        document.getElementById("randomNumber").innerText = "000000"
        document.getElementById("timer").innerText = "3:00"
      }
    },1000)
  }
  else{
    //Ÿ�̸Ӱ� �۵� ���� ��

  }
}

let checkCertify = () => {
  alert("������ �Ϸ�Ǿ����ϴ�")
}

let checkall = () => {
  if(email === ""){
    
  }
}

