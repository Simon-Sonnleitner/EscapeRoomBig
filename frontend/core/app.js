import Component from "../modules/Component.js";

const main = await document.querySelector('main');

const header = new Component('header')
const scene2 = new Component('Szene_02_Daheim/index');
await scene2.appendTo(document.querySelector('main'));
const screen_interact = document.querySelector('#screen-interact');

const screen = new Component('screen');

window.addEventListener("click", function(e)
{
    if(document.getElementById("screen-interact").contains(e.target))

{
                var imageContainer =
                    document.createElement("div");
                imageContainer.className =
                    "image-container screen";

                var screen = new Component("screen");
                screen.appendTo(imageContainer);

                var closeButton =
                    document.createElement(
                        "button"
                    );
                closeButton.textContent = "Close";
                closeButton.className =
                    "close-btn";
                closeButton.onclick =
                    function () {
                        document.body.removeChild(
                            imageContainer
                        );
                    };

                imageContainer.appendChild(
                    closeButton
                );
                
                document.body.appendChild(
                    imageContainer
                );        
}
else
{
    document.body.removeChild(
        imageContainer
    );
}
}
)

// Da burgi räumt auf schau mal mal was wird