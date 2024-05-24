import React, { memo, useState, useCallback } from "react"
import type { TContactProps } from "./Contact.types"
import AboutBGLightTop from "/light-bg-top.png" 
import AboutBGDarkTop from "/dark-bg-top.png"

const Contact = ({ ui }: TContactProps) => {
  const [msg, setMsg] = useState<string>("")

  const textAreaMsg = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>((e) => {
    const el = e.target as HTMLTextAreaElement
    setMsg(el.value)
  }, [])

  const btnSendMsg = useCallback<React.MouseEventHandler<HTMLDivElement>>(() => {
    if(!msg || msg == "") return alert("Please leave a message")
  }, [msg])

  return (
    <div id="contact-container" className={`section relative max-w-[1600px] mx-auto h-fit pt-64 pb-48 px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60 flex justify-center items-center`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightTop} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkTop} />

        {/* <div className="subscribe">
          <p>REACH ME OUT</p>
          <textarea cols={50} rows={10} onChange={textAreaMsg}></textarea>
          <br />
          <div className="submit-btn" onClick={btnSendMsg}>SEND</div>
        </div> */}
      </div>
  )
}

export default memo(Contact)