import next from "next";

interface CleaningProps {
    profilePic: string;
    greeting: string;
    qualification: string;
    reviews: string;
    description: string;
    languages: string;
    lorem: string;
    lorem2: string;
}

function CleaningS({
    profilePic,
    greeting,
    qualification,
    reviews,
    description,
    languages,
    lorem,
    lorem2,
}: CleaningProps) {
    return (
        <div className="flex justify-center">
            <div className="mx-10 w-28 h-28 overflow-hidden rounded-3xl ">
                <img 
                    src={profilePic} 
                    alt=""
                    className="object-cover w-full h-full scale-[1.8] translate-x-4 translate-y-8" 
                />
            </div>
            <div className="flex flex-col mr-10 w-28">
                <div className="font-semibold font-montserrat text-lg leading-4 my-2">{greeting}</div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm font-montserrat">{qualification}</p>
                    <p className="font-semibold text-[10px] ">{reviews}</p>
                </div>
            </div>
            <div>
                <div className="w-[400px] mx-10 text-[10px] text-justify font-semibold tracking-normal leading-4">{description}</div>
            </div>
            <div className="flex mx-10">
                <div className="flex flex-col">
                    <div className="text-sm font-semibold mr-10 font-montserrat">Languages</div>
                    <div className="text-sm font-semibold mr-10 mt-1 font-montserrat">Lorem</div>
                    <div className="text-sm font-semibold mr-10 mt-1 font-montserrat">Lorem</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xs mt-1">{languages}</div>
                    <div className="text-xs mt-2">{lorem}</div>
                    <div className="text-xs mt-2">{lorem2}</div>
                </div>
            </div>
        </div>
    );
}

export default CleaningS;