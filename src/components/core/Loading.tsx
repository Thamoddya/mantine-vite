import { Loader } from "@mantine/core";

export default function Loading() {
    return (
        <div className="w-screen h-screen absolute flex justify-center items-center top-0 right-0">
            <Loader type="bars"/>
        </div>
    )
}