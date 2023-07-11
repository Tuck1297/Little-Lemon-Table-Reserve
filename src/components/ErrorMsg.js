import {useEffect, useRef} from 'react';
function ErrorMessage({message, msgFunc}) {
    const errRef = useRef(null);
useEffect(() => {
    if (message !== "") {
        errRef.current.style.display = "";
    } else {
        errRef.current.style.display = "none"
    }
})

const handleClose = (e) => {
    e.preventDefault();
    errRef.current.style.display = "none";
    msgFunc("")
}

    return(
        <div className="errorBox" ref={errRef}>
            <header><div>Authentication Error Message</div> <button onClick={handleClose}>X</button></header>
            <div className="msgBody">
                {message ? message : 'Error Message Here'}
            </div>
        </div>
    );
}

export default ErrorMessage;