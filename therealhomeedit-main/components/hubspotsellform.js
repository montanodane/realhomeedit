import React, { useEffect } from "react";

export default function HubspotSellForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js-eu1.hsforms.net/forms/shell.js";
        document.body.appendChild(script);

        script.addEventListener("load", () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "eu1",
                    portalId: "25103415",
                    formId: "b15cb328-31b7-4de2-884a-bb972b917f5f",
                    target: "#hubspotForm",
                });
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
}
