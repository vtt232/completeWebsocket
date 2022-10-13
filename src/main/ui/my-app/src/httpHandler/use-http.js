import { useCallback, useState } from "react"

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (requestConfig, applyData)=>{
        setIsLoading(true)
        setError(null)
        try{
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method? requestConfig.method : 'GET' ,
                credentials: 'include',
                headers: requestConfig.headers? requestConfig.headers : {accept: 'application/json'},
                body: requestConfig.body? JSON.stringify(requestConfig.body):null,
            })


            if (!response.ok){
                throw new Error('Request failed')
            }

            const data = await response.json()
            applyData(data)
        } catch(err){
            setError(err.message || 'Something failed')
        }
        //setIsLoading(false)
    },[]
    )

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
} 
export default useHttp;