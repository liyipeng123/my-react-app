import React from 'react';

import './footer.scss';
import {AiOutlineGithub, IoPersonCircleSharp} from "react-icons/all";

interface FooterProps {
    logo?: string
}

export const Footer = ({logo = ''}: FooterProps) => {

    return (
        <footer>
            <span>lyp123</span>
            <div>
                <IoPersonCircleSharp className="head" onClick={() => window.open("https://lyp123.com", "_blank")}/>
                <AiOutlineGithub className="github"
                                 onClick={() => window.open("https://github.com/liyipeng123", "_blank")}/>
            </div>
        </footer>
    )
};
