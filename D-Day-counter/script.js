const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');

// container.style.display = 'none'
messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';

    const output = function(){
      console.log('함수를 실행했어요.');
    };
    const dateFormMaker = function(){
      const inputYear = document.querySelector('#target-year-input').value
      const inputMonth = document.querySelector('#target-month-input').value
      const inputDate = document.querySelector('#target-date-input').value
      

      const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`
      return dateFormat;
    };

    const counterMaker = function(){
      const messageContainer = document.querySelector('#d-day-message');
      messageContainer.textContent = '안녕하세요.'
      const targetDateInput = dateFormMaker();
      const nowDate = new Date();
      const targetDate = new Date(targetDateInput).setHours(0,0,0,0);
      const remaining = (targetDate - nowDate) / 1000;
      if(remaining === 0 || remaining < 0){
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다</h3>'
      }else if(isNaN(remaining)){
        //만약 잘못된 날짜가 들어왔다면
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'
      }
      // console.log(remainingDate, remainingHours, remainingMin, remainingSec);

      const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
      }

      console.log(remainingObj.remainingDate, remainingObj.remainingHours, remainingObj['remainingMin'],remainingObj['remainingSec'])


      console.log(days, hours, min, sec)

      

      const documentArr = ['days', 'hours', 'min', 'sec'];
      const timeKeys = Object.keys(remainingObj);

      
      let i = 0;
      for(let tag of documentArr){
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]]
        i++;
      }

      // const documentObj = {
      //   days:document.getElementById('days'),
      //   hours:document.getElementById('hours'),
      //   min:document.getElementById("min"),
      //   sec:document.getElementById("sec")
      // }
      // const docKeys = Object.keys(documentObj);
      // let i = 0;
      // for (let key in documentObj){
      //   documentObj[key].textContent = remainingObj[timeKeys[i]]
      //   i++;
      // }
    }