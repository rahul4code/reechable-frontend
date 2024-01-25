import Image from 'next/image'
import LandingPageForm from "../components/UI/LandingPageForm";

const Landing = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Image src="/LandingImage.png" width="700" height={700} alt="No Image" />
            <LandingPageForm />
        </div>
    )
}

export default Landing