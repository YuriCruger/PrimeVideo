import React, { useState } from "react";
import "../../index.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import movie1 from "../../../media/01d9a76a-7125-4516-882d-acb925fdce08._UR3840,1440_SX1440_FMwebp_.webp";
import movie2 from "../../../media/1bcf0e93-5686-494d-920d-4b46b1993e00._UR3840,1440_SX1440_FMwebp_.webp";
import movie3 from "../../../media/bcfd316d-ab1f-4f56-984b-f69cfa1c9a22._UR3840,1440_SX1440_FMwebp_.webp";
import movie4 from "../../../media/261b3433-edbe-46bf-aff9-b9cc48a51e92._UR3840,1440_SX1440_FMwebp_.webp";

const slidesImg = [movie1, movie2, movie3, movie4];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider flex">
        {slidesImg.map((item) => (
          <div key={item} className="keen-slider__slide z-0">
            <img
              src={item}
              alt="Banner Movie"
              className="z-0 mx-auto cursor-pointer"
            />
          </div>
        ))}
      </div>
      {/* {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )} */}
      {/* {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )} */}
    </>
  );
}

// function Arrow(props: {
//     disabled: boolean
//     left?: boolean
//     onClick: (e: any) => void
// }) {
//     const disabeld = props.disabled ? " arrow--disabled" : ""
//     return (
//         <svg
//             onClick={props.onClick}
//             className={`arrow ${props.left ? "arrow--left" : "arrow--right"
//                 } ${disabeld && 'hidden'}`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//         >
//             {props.left && (
//                 <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//             )}
//             {!props.left && (
//                 <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//             )}
//         </svg>
//     )
// }
