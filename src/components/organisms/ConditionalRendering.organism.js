import { Fragment } from "react"

const ConditionalRendering = ({ condition, allow, notAllow }) => {
    return (
        <Fragment>
            {
                condition ? 
                    allow :
                    notAllow
            }
        </Fragment>
    )
}

export default ConditionalRendering