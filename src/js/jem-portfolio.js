
const sAdobeClientID = "4487db9b9dd048ba93c8744711d762e5";

document.addEventListener( "adobe_dc_view_sdk.ready", function()
{
    var adobeDCView = new AdobeDC.View({
                            clientId: sAdobeClientID,
                            divId: "adobe-dc-view"
                            });
    adobeDCView.previewFile(
    {
        content:{ location: 
            { url: "https://jeminick.github.io/JEM-Portfolio/assets/JEM-Resume.pdf" }},
        metaData:{fileName: "JEM-Resume.pdf"}
    },
    {
        embedMode: "SIZED_CONTAINER"
    } );
} );
