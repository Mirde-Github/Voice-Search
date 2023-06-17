import React, { useState } from "react";
import "../component/Voice.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
const Voice = () => {
    const [text, settext] = useState()
    const [isCopied, setCopied] = useClipboard(text);
    const start_listening = () => { SpeechRecognition.startListening({ continuous: true }) }
    const stop_listening = () => { SpeechRecognition.stopListening() }
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1>Search for Voice </h1>

                </div>
                <div className="text">
                    <p onClick={() => { settext(transcript) }}>{transcript}</p>

                </div>
                <div className="btn">
                    <button onClick={setCopied}>
                        {isCopied ? "copied! 👍" : "copy to clip board! 👎"}
                    </button>
                    <button onClick={start_listening}>Start Listnening</button>
                    <button onClick={stop_listening}>Stop Listening</button>
                    <button onClick={resetTranscript}>Reset</button>
                </div>
            </div>
        </>
    )
}
export default Voice;