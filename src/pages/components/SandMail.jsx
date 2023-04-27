import React from 'react';
import Lottie from "lottie-react";
import EmailHi from "../../assets/animation/send-mail.json";
const SandMail = () => {
    return (
        <div>
            <Lottie animationData={EmailHi} loop={true} />
        </div>
    );
};

export default SandMail;