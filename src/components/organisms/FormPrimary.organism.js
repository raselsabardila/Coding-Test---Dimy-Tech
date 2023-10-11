import { Fragment, useContext } from "react"
import ButtonSolid from "../molecules/ButtonSolid.molecule"

const FormPrimary = ({ context, index }) => {
    const { data, setData } = useContext(context)

    return (
        <Fragment>
            <div
                className="w-full flex flex-row mb-5 items-end"
            >
                <div
                    className="flex flex-col flex-1 mr-5"
                    >
                    <label className="font-gray-500 text-sm">
                        Product Name
                    </label>
                    <input type="text" className="p-2 rounded-md border border-gray-300 w-max mt-2" value={ data[index].name } onChange={ (value) => {
                        let dataNow = data
                        dataNow[index].name = value.target.value

                        setData([...dataNow])
                    } }/>
                </div>
                <div
                    className="flex flex-col flex-1 mr-5"
                    >
                    <label className="font-gray-500 text-sm">
                        Product Price
                    </label>
                    <input type="number" min={ 0 } className="p-2 rounded-md border border-gray-300 w-max mt-2" value={ data[index].price } onChange={ (value) => {
                        let dataNow = data
                        dataNow[index].price = value.target.value

                        setData([...dataNow])
                    } }/>
                </div>
                <div
                    className="flex flex-col flex-1 mr-5"
                    >
                    <label className="font-gray-500 text-sm">
                        Qty
                    </label>
                    <input type="number" className="p-2 rounded-md border border-gray-300 w-max mt-2" value={ data[index].qty } onChange={ (value) => {
                        if(value.target.value < 1) {
                            alert("Qty harus lebih dari 1.")
                        } else {
                            let dataNow = data
                            dataNow[index].qty = value.target.value

                            setData([...dataNow])
                        }
                    } }/>
                </div>
                <div
                    className="flex flex-col flex-1 mr-5"
                    >
                    <label className="font-gray-500 text-sm">
                        Total
                    </label>
                    <input type="number" disabled value={ data[index].price && data[index].price * data[index].qty } className="p-2 rounded-md border border-gray-300 w-max mt-2"/>
                </div>
                <ButtonSolid
                    bgColor="bg-red-400"
                    text="Delete"
                    isHide={ index !== 0 ? false : true }
                    onClick={ () => {
                        let dataNow = data.filter((item, indexNow) => index !== indexNow)
                        
                        setData([...dataNow])
                    } }
                />
            </div>
        </Fragment>
    )
}

export default FormPrimary