import styles from "./Loader.module.css";
import icon1 from "../../icons/icons8-autumn-100.png";
import icon2 from "../../icons/icons8-spring-100.png";
import icon3 from "../../icons/icons8-summer-100.png";
import DemoCard from "./DemoCardv1";
import { nextTick } from "vue";
//! useEffect hook to switch between the icons?

export default function Loader() {

      const $refs = {};

      return (
        <div
          x-data={{}}
          x-init={nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
          })}
          className="w-full flex-nowrap inline-flex  animate-infinite-scroll overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
   
    
        {/* {Array.from({ length: numSquares }, (_, index) => ( */}
          {/* // <div key={index} className='border-2 p-12 bg-green-600'><img src={icon1} alt="" /></div> */}
          <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
<li>
    <img src="../../icons/icons8-snow-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-spring-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-summer-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-fog-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-heavy-rain-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-moon-and-stars-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-night-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-winter-100.png" alt="" />
</li>

</ul>

    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
<li>
    <img src="../../icons/icons8-snow-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-spring-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-summer-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-fog-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-heavy-rain-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-moon-and-stars-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-night-100.png" alt="" />
</li>
<li>
    <img src="../../icons/icons8-winter-100.png" alt="" />
</li>
</ul>

      </div>
   
  );
}

// icon${Math.floor(Math.random() * 3) + 1}`}