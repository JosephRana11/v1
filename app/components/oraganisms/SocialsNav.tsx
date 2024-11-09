'use client'
import {SocialIcon} from 'react-social-icons'

interface SocialsNavProps {
    iconSrc : string //for rendering the icon
    href : string
}

const socials : SocialsNavProps[] = [
    {
        iconSrc : "https://www.linkedin.com",
        href : "https://www.linkedin.com/in/joseph-rana-009319288/"
    },
    {
        iconSrc : "https://github.com",
        href : "https://github.com/JosephRana11"
    },
    {
        iconSrc : "https://discord.com",
        href : ""
    },
    {
        iconSrc: "https://email.com",
        href : "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLMnVzmXZpbGXZHwGcRlsdvqkMkQfDLHVTrCfLrXBtvvcctldxJpcTXNXWXTSXxHcTCBQPV"
    }
]


export default function SocialsNav() {
    return (
        <div className="flex flex-col space-y-6 fixed left-4 bottom-4">
            {
                socials.map((item , index) => 
                    <SocialIcon key={index} url={item.iconSrc} bgColor='none' style={{height: 38 , width: 38}}/>
                )
            }
        </div>
    )
}