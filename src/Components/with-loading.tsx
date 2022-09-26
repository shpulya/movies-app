import React from "react"
// Higher Ordering Component
function WithLoading (Component: any) {
    const LoadingIndication = () => <h2>...Almost there</h2>

    return function WithLoadingComponent({ isLoading, ...props }: any) {
        if (!isLoading) return <Component {...props} />
        return <LoadingIndication />
    }
}

export default WithLoading