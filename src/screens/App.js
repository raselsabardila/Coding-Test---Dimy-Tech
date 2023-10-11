import React, { Fragment, createContext, useState } from "react"
import ButtonSolid from "../components/molecules/ButtonSolid.molecule"
import ConditionalRendering from "../components/organisms/ConditionalRendering.organism"
import FormPrimary from "../components/organisms/FormPrimary.organism"

const dataContext = createContext()
const { Provider } = dataContext

const App = () => {
  const [data, setData] = useState([])

  const countGrandtotal = () => {
    let result = 0

    if(data.length) {
      data.forEach(element => {
        result += element.price ? element.price * element.qty : 0
      })
    }

    return result
  }

  return (
    <Fragment>
      <Provider
        value={{ data, setData }}
      >
        <section
          className="w-full min-h-full p-20 flex flex-col"
        >
          <ButtonSolid
            bgColor="bg-gray-500"
            text="New"
            onClick={ () => {
              setData([...data, {
                name: "",
                price: null,
                qty: 1,
                total: 0
              }])
            } }
          />
          <br/><br/>
          <ConditionalRendering
            condition={ data.length }
            allow={
              React.Children.toArray(data.map((item, index) => {
                return (
                  <FormPrimary
                    context={ dataContext }
                    index={ index }
                  />
                )
              }))
            }
            notAllow={ <h3 className="font-gray-500 text-center text-base">Belum ada data tersedia.</h3> }
          />
          <br/><br/>
          <div
            className="flex flex-col self-end"
          >
            <label className="font-gray-500 text-sm">
              Grand Total
            </label>
            <input type="text" disabled className="p-2 rounded-md border border-gray-300 w-max mt-2" value={ countGrandtotal() }/>
          </div>
        </section>
      </Provider>
    </Fragment>
  )
}

export default App