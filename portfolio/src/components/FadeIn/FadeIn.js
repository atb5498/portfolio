import React, { useEffect } from "react";
import "./FadeIn.css"

function FadeIn({ children }) {
    useEffect(() => {
        const faders = document.querySelectorAll(".fade-in");
        const appearOptions = {
            threshold: .25,
        };

        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            })
        }, appearOptions);

        if (!faders.length) {
            return;
        }

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        })
    }, [])

    return (
        <div className="fade-in">
            {children}
        </div>
    );
}

export default FadeIn;
