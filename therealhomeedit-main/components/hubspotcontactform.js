import React, { useEffect } from "react";

export default function HubspotContactForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js-eu1.hsforms.net/forms/shell.js";
        document.body.appendChild(script);

        script.addEventListener("load", () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "eu1",
                    portalId: "25103415",
                    formId: "92ae2dc6-c53b-4b79-b8dd-425ce9cb2a55",
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
