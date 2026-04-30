import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";

export function Send(){
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="flex flex-col text-center border px-20 py-30 mt-20 rounded-2xl">
                <Heading label={'send'}/>
                <SubHeading label={'enter the amount'}/>
                <Inputbox/>
                <Button label={'transfer'}/>
            </div>
        </div>
    </div>
}