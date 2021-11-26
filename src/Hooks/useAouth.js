import { useContext } from "react"
import { AouthContext } from "../Components/Context/AouthProvider"

const useAouth = () => {
	return useContext(AouthContext)
}

export default useAouth;