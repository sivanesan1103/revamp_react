
import { LazyLoadImage } from 'react-lazy-load-image-component';

const img_1 = "https://ik.imagekit.io/sivanesan/default-image.jpg?updatedAt=1718705705744";
export const Card = (props) => {
    return (
        <>
            <LazyLoadImage
                effect="blur"
                wrapperProps={{

                    style: { transitionDelay: "1s" },
                }}

                className='h-3'
                src={img_1} />

            <div className="grid m-7 ">

                <p>
                    {props.name}
                </p>
                <p>
                    {props.age}
                </p>
            </div>
        </>
    )
}