document.addEventListener('DOMContentLoaded', ()=>
{
    const gridBlock = document.querySelectorAll('.board div')
    const car = document.querySelectorAll('.car')
    const log = document.querySelectorAll('.log')
    const gameChecker = document.querySelector('#gameChecker')
    let currentFrog = 76
    let xAxis = 5
    let yAxis = 9
    let startBackground
   

    gridBlock[currentFrog].classList.add('frog')
    document.addEventListener("keydown", move, false)
    
    startBackground=setInterval(moveBackground, 1000)
   
    function move(event)
    {
        
        gridBlock[currentFrog].classList.remove('frog')
        
        switch(event.code)
        {
            case "ArrowDown":
                if(yAxis<9)
                {
                    yAxis++
                    currentFrog=currentFrog+9
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }
                
            case "ArrowRight":
                if(xAxis<9)
                {
                    xAxis++
                    currentFrog++
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }
                
            case "ArrowUp":
                if(yAxis>1)
                {
                    yAxis--
                    currentFrog=currentFrog-9
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }
                
            case "ArrowLeft":
                if(xAxis>1)
                {
                    xAxis--
                    currentFrog--
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }       
        }
       
      gameCheck()
        
    }
    
    function gameCheck()
    {
        if(gridBlock[currentFrog].classList.contains('w') || gridBlock[currentFrog].classList.contains('c'))
        {
            gameChecker.innerHTML = "You lose."
            document.removeEventListener("keydown", move, false)
        }
        if(currentFrog<10)
        {
            gameChecker.innerHTML = "You win!"
            document.removeEventListener("keydown", move, false)
        }
    }
    
    function moveBackground()
    {
        
        car.forEach(car=>moveCar(car))
        log.forEach(log=>moveLog(log))
    }

    function moveCar(car)
    {
        switch(true)
        {
            
            case car.classList.contains('c'):
                
                car.classList.remove('c')
                car.classList.add('s1')
                gameCheck()
                break
            
            case car.classList.contains('s1'):
                
                car.classList.remove('s1')
                car.classList.add('s2')
                gameCheck()
                break
            
            case car.classList.contains('s2'):
                
                car.classList.remove('s2')
                car.classList.add('c')
                gameCheck()
                break
            
        }
    }

    function moveLog(log)
    {
        switch(true)
        {
            case log.classList.contains('w'):

               
                log.classList.remove('w')
                log.classList.add('l1')
                gameCheck()
                break
            
            case log.classList.contains('l1'):
                
          
                log.classList.remove('l1')
                log.classList.add('l2')
                gameCheck()
                break
            
            case log.classList.contains('l2'):
               
                log.classList.remove('l2')
                log.classList.add('l3')
                gameCheck()
                break
            
            case log.classList.contains('l3'):
               
                log.classList.remove('l3')
                log.classList.add('w')
                gameCheck()
                break
            
        }
    }
})

