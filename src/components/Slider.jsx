import { motion } from 'framer-motion';

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

function Slider({direction}) {
    const duplicatedImages = direction ? [...images, ...images] : [...images, ...images].reverse()
    console.log(duplicatedImages)

    return (
        <div className="flex flex-grow justify-center py-2 px-1">
            <motion.div className='flex'
                animate= {{
                    x: direction ? ['-100%', '100%'] :  ['100%', '-100%'], 
                    transition: {
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: "reverse",
                    }
                }}>

            {duplicatedImages.map((image, index) => (
                <div key={index} className='flex-shrink-0' style={{ width: `${100 / images.length}%` }} >
                    <div className='flex flex-col items-center justify-center h-full'>
                        <img src={image.img} alt='' />
                    </div>
                </div>
            ))}
            </motion.div>
        </div>
    );
}

export default Slider; 
