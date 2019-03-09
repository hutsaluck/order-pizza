let sizeSelect = form_pizza.selectSize;
let prise = document.getElementById("prise");


let rad = document.form_pizza.sizePizza;
let big = 0;
let middle = 0;
let small = 0;
let bigPrise = 120;
let middlePrise = 100;
let smallPrise = 80;
for (let i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        let add = prise.innerHTML;
        switch(this.value) {
          case 'big':
            if(this.value == 'big' && big == 0 && middle == 0 && small == 0){
              prise.innerHTML = +add + bigPrise;
              big++;
              break;
            } else if(this.value == 'big' && big == 0 || middle > 0 || small > 0){
              if(middle > 0){
                add = +add - middlePrise;
                middle--;
              } else if(small > 0){
                add = +add - smallPrise;
                small--;
              }
              big++;
              prise.innerHTML = +add + 120;
              break;
            } else if(this.value == 'big' && big > 0){
              big--;
              break;
            }
            break;
          case 'middle': 
            if(this.value == 'middle' && middle == 0 && big == 0 && small == 0){
              prise.innerHTML = +add + 100;
              middle++;
              break;
            } else if(this.value == 'middle' && middle == 0 || big > 0 || small > 0){
              if(big > 0){
                add = +add - bigPrise;
                big--;
              } else if(small > 0){
                add = +add - smallPrise;
                small--;
              }
              middle++;
              prise.innerHTML = +add + 100;
              break;
            } else if(this.value == 'middle' && middle > 0){
              middle--;
              break;
            }
            break;
          case 'small': 
            if(this.value == 'small' && small == 0 && big == 0 && middle == 0){
              prise.innerHTML = +add + 80;
              small++;
              break;
            } else if(this.value == 'small' && small == 0 || big > 0 || middle > 0){
              if(big > 0){
                add = +add - bigPrise;
                big--;
              } else if(middle > 0){
                add = +add - middlePrise;
                middle--;
              }
              small++;
              prise.innerHTML = +add + 80;
              break;
            } else if(this.value == 'small' && small > 0){
              small--;
              break;
            }
            break;
        }
    });
}

let mushrooms = document.getElementById('mushrooms');
let mush = 0;
let bacon = document.getElementById('bacon');
let bac = 0;
let tomatoes = document.getElementById('tomatoes');
let tom = 0;
let cheese = document.getElementById('cheese');
let ches = 0;
let olives = document.getElementById('olives');
let oliv = 0;
let checkObj = {
  mushrooms,
  bacon,
  tomatoes,
  cheese,
  olives
};
function checkAdd(){
  let add = prise.innerHTML;
  for (let key in checkObj) {
    switch(key) {
      case 'mushrooms':
        if(checkObj['mushrooms'].checked && mush == 0){
          prise.innerHTML = +add + 50;
          mush++;
          break;
        } else if(checkObj['mushrooms'].checked && mush > 0){
          break;
        } else if(!checkObj['mushrooms'].checked && mush > 0){
          prise.innerHTML = add - 50;
          mush--;
          break;
        } else if(!checkObj['mushrooms'].checked && mush == 0){
          break;
        }
      case 'bacon':
        if(checkObj['bacon'].checked && bac == 0){
          prise.innerHTML = +add + 60;
          bac++;
          break;
        } else if(checkObj['bacon'].checked && bac > 0){
          break;
        } else if(!checkObj['bacon'].checked && bac > 0){
          prise.innerHTML = add - 60;
          bac--;
          break;
        } else if(!checkObj['bacon'].checked && bac == 0){
          break;
        }
      case 'tomatoes':
        if(checkObj['tomatoes'].checked && tom == 0){
          prise.innerHTML = +add + 40;
          tom++;
          break;
        } else if(checkObj['tomatoes'].checked && tom > 0){
          break;
        } else if(!checkObj['tomatoes'].checked && tom > 0){
          prise.innerHTML = add - 40;
          tom--;
          break;
        } else if(!checkObj['tomatoes'].checked && tom == 0){
          break;
        }
      case 'cheese':
        if(checkObj['cheese'].checked && ches == 0){
          prise.innerHTML = +add + 30;
          ches++;
          break;
        } else if(checkObj['cheese'].checked && ches > 0){
          break;
        } else if(!checkObj['cheese'].checked && ches > 0){
          prise.innerHTML = add - 30;
          ches--;
          break;
        } else if(!checkObj['cheese'].checked && ches == 0){
          break;
        }
      case 'olives':
        if(checkObj['olives'].checked && oliv == 0){
          prise.innerHTML = +add + 20;
          oliv++;
          break;
        } else if(checkObj['olives'].checked && oliv > 0){
          break;
        } else if(!checkObj['olives'].checked && oliv > 0){
          prise.innerHTML = add - 20;
          oliv--;
          break;
        } else if(!checkObj['olives'].checked && oliv == 0){
          break;
        }
    }
  }
}
