import Slider from "./Slider"

function Loader() {
    return (
        <div className='flex flex-wrap bg-'>
            <div className="">
            <Slider direction={true}/>
            </div>
            <div
            className="text-7xl font-bold text-center p-5 w-full"
            >Memory Game</div>
            <div
            className="text-2xl font-bold text-center p-5 w-full"
            >Press Start To Begin...</div>
              <div className="" style={{ position: 'fixed', bottom: 0 }}>
            <Slider direction={false}/>
            </div>
 </div>      
    )
}

export default Loader
