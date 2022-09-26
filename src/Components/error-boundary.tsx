import React from "react"

function ErrorBoundary (props: any) {
    const OopsText = () => (
        <h2>
            Oops, something went wrong...
        </h2>
    )

    let isEverythingIsOK = true; //downloadMovies()

    return <>{isEverythingIsOK ? props.children : <OopsText />}</>
}

export default ErrorBoundary