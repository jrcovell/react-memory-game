import { useGame } from "../contexts/GameContext";

function DemoCard() {

    const { cards } = useGame();
    const images = [
        { id: 1, img: "../../icons/icons8-autumn-100.png" },
        { id: 2, img: "../../icons/icons8-spring-100.png" },
        { id: 3, img: "../../icons/icons8-summer-100.png" },
        { id: 4, img: "../../icons/icons8-winter-100.png" },
        { id: 5, img: "../../icons/icons8-avalanche-100.png" },
        { id: 6, img: "../../icons/icons8-fog-100.png" },
        { id: 7, img: "../../icons/icons8-heavy-rain-100.png" },
        { id: 8, img: "../../icons/icons8-moon-and-stars-100.png" },
        { id: 9, img: "../../icons/icons8-night-100.png" },
        { id: 10, img: "../../icons/icons8-snow-100.png" },    
    ]
    const shuffledImages = images.sort(() => Math.random() - 0.5).slice(0, 13);

    const shuffledCards = cards.sort(() => Math.random() - 0.5).slice(0, 13);
    // const shuffledCards = cards.sort(() => Math.random() - 0.5);

    return (
        <div className="flex flex-grow justify-center">
{shuffledImages.map((image) => (
                // Render each card here
                <div key={image.id}><img className="" src={image.img} alt="" /></div>
            ))

            /* {shuffledCards.map((card) => (
                // Render each card here
                <div key={card.id}><img src={images[0]} alt="" /></div>
            ))} */}
            

          
        </div>
    );
}


export default DemoCard

/*
<div class="w-full inline-flex flex-nowrap">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src="./facebook.svg" alt="Facebook" />
        </li>
        <li>
            <img src="./disney.svg" alt="Disney" />
        </li>
        <li>
            <img src="./airbnb.svg" alt="Airbnb" />
        </li>
        <li>
            <img src="./apple.svg" alt="Apple" />
        </li>
        <li>
            <img src="./spark.svg" alt="Spark" />
        </li>
        <li>
            <img src="./samsung.svg" alt="Samsung" />
        </li>
        <li>
            <img src="./quora.svg" alt="Quora" />
        </li>
        <li>
            <img src="./sass.svg" alt="Sass" />
        </li>
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <img src="./facebook.svg" alt="Facebook" />
        </li>
        <li>
            <img src="./disney.svg" alt="Disney" />
        </li>
        <li>
            <img src="./airbnb.svg" alt="Airbnb" />
        </li>
        <li>
            <img src="./apple.svg" alt="Apple" />
        </li>
        <li>
            <img src="./spark.svg" alt="Spark" />
        </li>
        <li>
            <img src="./samsung.svg" alt="Samsung" />
        </li>
        <li>
            <img src="./quora.svg" alt="Quora" />
        </li>
        <li>
            <img src="./sass.svg" alt="Sass" />
        </li>
    </ul>
</div>
*/
