import amity from '/img/amity.jpg'
import amityy from '/img/amityy.jpg'
import viteLogo from '/img/circle.jpg'
import vd from '/img/vd.mp4'
import './Helllo.css'

function Hello(props){

    const condicional = true;

    return(
        <>
        <div>
        {condicional && <h1> OH MY GAH!!!</h1>}

        <h1 style={{ color:'aquamarine'}}>Personagem: {props.nome}</h1>

        <a href="https://www.youtube.com/watch?v=nlLhw1mtCFA" target="_blank">
          <img src={amityy} className="logo" alt="a" />
        </a>

        <a href="https://www.youtube.com/watch?v=nlLhw1mtCFA" target="_blank">
          <img src={amity} className="logo" alt="b" />
        </a>

        <a href="https://www.youtube.com/watch?v=nlLhw1mtCFA" target="_blank">
          <img src={viteLogo} className="logo" alt="c" />
        </a>

        <h3 className="felipe">felipe malucas</h3>
      </div>
    </>
    );
}

export function Ola(){
  return( 
    <>
    <h1>Ola</h1>
    <video controls width={800} height={600} src={vd}></video>
    </>
  )

}

export default Hello