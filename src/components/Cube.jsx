import '../css/Cube.css'

export default function Cube () {


  return(
    <>
      <div className="cube"> 
        <div className="box box1">
          <a target="_blank" href="https://github.com/kylatae/employee_tracker"> 
            <img src="./img/employeeTracker.png" alt="employee tracker page" /> 
          </a>
        </div> 

        <div className="box box2">
          <a target="_blank" href="https://franklinbrad.github.io/robot-murder-mystery/"> 
            <img src="./img/roboMurderMystery.png" alt="robo murder mystery web game" />
          </a> 
        </div> 

        <div className="box box3"> 
          <a target="_blank" href="https://saleblazers.fandom.com/wiki/Saleblazers_Wiki">
            <img src="./img/saleBlazers.png" alt="saleblazers wikipedia at fandom" /> 
          </a>
        </div> 

        <div className="box box4"> 
          <a target="_blank" href="https://kylatae-save-a-book-a485871b6375.herokuapp.com/">
            <img src="./img/saveABook.png" alt="save a book page" /> 
          </a>
        </div> 

        <div className="box box5"> 
          <a target="_blank" href="https://github.com/kylatae/social-network/tree/main/assets">
            <img src="./img/socialNetwork.png" alt="social network framework" /> 
          </a>
        </div> 

        <div className="box box6"> 
          <a target="_blank" href="/">
            <img src="./img/devCard.png" alt="arthur henningfield quick info card" /> 
          </a>
        </div> 
      </div> 
    </>
  )
}