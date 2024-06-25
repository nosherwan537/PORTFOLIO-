import React from "react";

const FiverrButton = () => {
    return (
        <div className="relative inline-flex group mt-[-2px]">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
                href="https://www.fiverr.com/noshotahir?up_rollout=true"
                title="Fiverr Profile"
                className="relative inline-flex items-center justify-center p-2 text-base font-bold text-white transition-all duration-200 rounded-xl"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-8 mr-2"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                >
                    <path
                        fill="#FFFFFF"
                        d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 26.5 11 C 21.579 11 18.409109 14.037 18.037109 19 L 14 19 L 14 25 L 18 25 L 18 36 L 24 36 L 24 25 L 28 25 L 28 36 L 34 36 L 34 19 L 24.066406 19 C 24.360406 17.001 25.579 17 26.5 17 L 29.03125 17 L 29.03125 11 L 26.5 11 z"
                    />
                </svg>
            </a>
        </div>
    );
};

export default FiverrButton;
