import Image from "next/image";
import Tick from "./images/tick.svg";
export default function Toast(){
    return(
        <div id="toast" className="closed-toast">
            <div className="size-[72px] relative">
                <Image 
                    src={Tick}
                    alt="tick"
                    fill
                    sizes="100%"
                    className="size-auto"
                />
            </div>
            <div id="toast_data" className="font-semibold text-center" />
        </div>
    )
}