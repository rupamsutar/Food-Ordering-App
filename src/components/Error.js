import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    const stack = err.error.stack.split("\n");
    return (
        <>
        <h1>Opps !!</h1>
        <h2>This Page is not available.</h2>
        <h3>{err.status}: {err.statusText}</h3>
        <h4>{err.error.message}</h4>
        {stack.map((s,i) => {
            return <p key={i}>{s}</p>
        })}
        </>
    )
}

export default Error;