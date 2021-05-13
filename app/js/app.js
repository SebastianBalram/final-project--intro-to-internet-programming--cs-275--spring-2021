window.onload = () => {


    let diamondSize = parseInt(prompt(`Enter the width of the diamond:`));
    let diamond=document.querySelector(`div`);



    let evenDiamond = (diamondSize) => {
        let numOfStars =1;
        for(let i =1; i<=(diamondSize/2)+1;i++){
            for(let j=0;j<=diamondSize-1;j++){
                diamond.innerHTML += ``;
            }
            if(i===1){
                diamond.innerHTML += `* `;
                numOfStars +=1;
            }
            else{
                for(let k=1;k<=numOfStars;k++){
                    diamond.innerHTML += `* `;
                }
                numOfStars +=2;
            }
            diamond.innerHTML +=  `<br>`;
        }


        for(let i =diamondSize-2;i>0;i-=2)
        {
            diamond.innerHTML += `   `;
            for( let j=0;j<i;j++){
                diamond.innerHTML += `* `;
            }
            diamond.innerHTML +=  `<br>`;
        }
        diamond.innerHTML += ` * `;
        document.querySelector(`div`).style.lineHeight = `100%`;
    };


    let oddDiamond = (diamondSize) => {
        let numOfStars =1;
        let numOfSpaces=1;
        for(let i =1; i<=(diamondSize/2);i++){
            for(let j=0;j<=i;j++){
                diamond.innerHTML += ``;
            }
            for(let k=1;k<=numOfStars;k++){
                diamond.innerHTML += `* `;
            }
            numOfStars+=2;
            diamond.innerHTML +=  `<br>`;
        }
        for(let i =1; i<=(diamondSize);i++){
            diamond.innerHTML +=`* `;
        }
        diamond.innerHTML +=  `<br>`;

        for(let i =1; i<=(diamondSize/2);i++){
            for(let i =1;i<numOfStars-1;i++){
                diamond.innerHTML += `* `;
            }
            numOfStars-=2;
            for(let k=1;k<=numOfSpaces;k++){
                diamond.innerHTML += ` `;
            }
            diamond.innerHTML +=  `<br>`;
        }
        document.querySelector(`div`).style.lineHeight = `100%`;

    };

    if(diamondSize%2===0){
        evenDiamond(diamondSize);
    }
    else{
        oddDiamond(diamondSize);
    }

    let position = 1;
    let leftSide = diamond.offsetLeft;

    setInterval(() => {
        let screenLength = diamond.offsetWidth;
        let wSize = window.innerWidth;



        if (leftSide > wSize - screenLength) {
            position = -1;
        }
        if (leftSide < 0) {
            position = 1;
        }


        leftSide += position;
        diamond.style.marginLeft = leftSide + `px`;



    },1);










};
