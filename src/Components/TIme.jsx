import { useEffect, useState } from "react";
const Time = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default Time;