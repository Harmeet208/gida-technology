import React,{useState} from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import image from '../NonCopyrightImg.png';
import GIF from '../test-gif.gif';
import Graph from '../line_graph.png';

const ImageComponent = (props) =>{
    const [gifOpen,setGIFOpen] = useState(false);
    const [graphOpen, setGraphOpen] = useState(false);
    const {open, setOpen} = props;
    return(
        <div>
            <div className={!open ? "clear-div" : "blurry-div"}>
                <img className="landing-image" src={image}  alt="Landing Page" /><br />
                <Button onClick={()=>setOpen(!open)} variant="contained" size="large">
                    Click Me
                </Button>
            </div>
            {open && 
            <dialog className="dialog" open style={{ position: "absolute" }}>
                <img
                    className="image"
                    src={image}
                    alt="modal"
                />
                <div className="btn-container">
                    <Button onClick={()=>{
                        setGIFOpen(!gifOpen)
                        setInterval(() => {
                            setGIFOpen(false)
                        }, 7000);
                    }}    
                    variant="contained" size="large" style={{margin:"8px"}}>
                        Show GIF
                    </Button>
                    <Button onClick={()=>setGraphOpen(!graphOpen)} variant="contained" size="large" style={{margin:"8px"}}>
                        Show Graph
                    </Button>
                </div>
          </dialog>
        }
        {gifOpen && <img src={GIF}  className="gif" />}
        {graphOpen && <img src ={Graph} className="graph" />}
        </div>
    )
}

const LandingPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <ImageComponent open={open} setOpen={setOpen} />
        </div>
    )
}

export default LandingPage
