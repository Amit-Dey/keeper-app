import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isClicked, setClicked] = useState(false);
    const [inputData, setInputData] = useState({
        title: "",
        content: ""
    })

    function changHandeller(event) {
        const { name, value } = event.target;
        setInputData((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }
    function click(event) {
        event.preventDefault()
        props.addData(inputData)
        setInputData({
            title: "",
            content: ""
        })
    }

    function handleClick() {
        setClicked(true)
    }

    return (
        <div>
            <form className="create-note">
                {isClicked && (<input name="title" onChange={changHandeller} value={inputData.title} placeholder="Title" />)}
                <textarea name="content" onClick={handleClick} onChange={changHandeller} value={inputData.content} placeholder="Take a note..." rows={isClicked?"3":"1"} />
                <Zoom in={isClicked}>
                    <Fab onClick={click} >
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
