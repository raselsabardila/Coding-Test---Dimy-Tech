import { Fragment } from "react"

const ButtonSolid = ({ textColor = "text-white", bgColor = "bg-gray-200", text = "Button", onClick, isHide = false }) => {
    return (
        <Fragment>
            <button
                className={ `w-max px-4 py-2 rounded-md flex-shrink-0 ${ textColor } ${ bgColor } ${ isHide && "opacity-0 cursor-auto" }` }
                onClick={ () => !isHide && onClick() }
            >
                { text }
            </button>
        </Fragment>
    )
}

export default ButtonSolid