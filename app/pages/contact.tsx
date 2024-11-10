import { Button } from "@mui/material";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <>
        <h1 className="custom-subheading mb-4">Get in touch</h1>
        <div className="flex justify-between items-center">
            <p className="flex">
                If you have any questions or would like to work together, feel free to contact me.
            </p>
            <SocialIcon url={'https://email.com'} bgColor='none' style={{height: 64 , width: 64}}/>
        </div>
        </>
    )
}