const numbers = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
const maxNumber = Math.max(...numbers);
const bars = document.querySelector('.bars');
document.querySelector('.number__max').textContent = maxNumber;
document.querySelector('.number__middle').textContent = maxNumber / 2;
    for(let i = 0; i < numbers.length; i++){
        /*li*/
        let li = document.createElement('li');
        /*bar*/
        let barItem = document.createElement('div');
        barItem.classList.add('bar');
        barItem.setAttribute('data-percent', numbers[i]);
        barItem.style.height = numbers[i]/maxNumber*100 + "%";
        li.prepend(barItem);
        /*span*/
        let span = document.createElement('span');
        span.textContent = i+1;
        li.append(span);
        bars.append(li);
    }
         