import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            aria-label="Property listing navigation arrow"
            className=" w-5 mx-4 items-center select-none justify-center flex flex-col"
        >
            {children}
        </button>
    );
}

export function LeftArrow() {
    const { getPrevItem, scrollToItem } = React.useContext(VisibilityContext);

    const clickHandler = () => {
        const prevItem = getPrevItem();
        scrollToItem(prevItem?.entry?.target, "smooth", "start");
    };

    return (
        <Arrow onClick={clickHandler}>
            <span className="arrow arrow-left"></span>
        </Arrow>
    );
}

export function RightArrow() {
    const { getNextItem, scrollToItem } = React.useContext(VisibilityContext);

    const clickHandler = () => {
        const nextItem = getNextItem();
        scrollToItem(nextItem?.entry?.target, "smooth", "end");
    };

    return (
        <Arrow onClick={clickHandler}>
            <span className="arrow arrow-right"></span>
        </Arrow>
    );
}
