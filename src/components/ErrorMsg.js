import {useEffect, useRef} from 'react';
function ErrorMessage({message, display}) {
    const errRef = useRef(null);
useEffect(() => {
    if (display == true) {
        errRef.current.style.display = "";
    } else {
        errRef.current.style.display = "none"
    }
})

const handleClose = (e) => {
    e.preventDefault();
    errRef.current.style.display = "none";
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