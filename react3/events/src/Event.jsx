




function onHandler(e)
{
    e.preventDefault();
    console.log("clicked");
}
export default function Event()


{
    return (
        <div>
            <button onClick={onHandler}>
                click me
            </button>
        </div>
    )
}