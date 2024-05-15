import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'


const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Sensei</p>
        <img src={assets.user_icon} alt="Image error" />
      </div>
      <div className="main-container">

        {
          !showResult ?
            <>
              <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest a beautiful place to see in an upcoming road trip</p>
                  <img src={assets.compass_icon} alt="Image error" />
                </div>
                <div className="card">
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="Image error" />
                </div>
                <div className="card">
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="Image error" />
                </div>
                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="Image error" />
                </div>
              </div>
            </>

            : <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt=""/>
                {
                  loading ? 
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  :
                  <p dangerouslySetInnerHTML = {{__html : resultData}}></p>
                }
              </div>
            </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="Image error" />
              <img src={assets.mic_icon} alt="Image error" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="Image error" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Sensei may display inaccurate info, including about people, so double-check its responses.
            your privacy and Sensei
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main