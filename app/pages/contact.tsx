"use client"

import { Button } from "@mui/material";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <>
        <h1 className="custom-subheading mb-4">Get in touch</h1>
        <div className="flex justify-between items-center">
            <p className="flex">
                If you have any questions or would like to work together, feel free to contact me.
            </p>
            {/* <Link href={"https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLMnVzmXZpbGXZHwGcRlsdvqkMkQfDLHVTrCfLrXBtvvcctldxJpcTXNXWXTSXxHcTCBQPV"}> */}
                <SocialIcon url={'https://email.com'} bgColor='none' style={{height: 64 , width: 64}} href={"https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLMnVzmXZpbGXZHwGcRlsdvqkMkQfDLHVTrCfLrXBtvvcctldxJpcTXNXWXTSXxHcTCBQPV"} target="_blank"/>
            {/* </Link> */}
        </div>
        </>
    )
}