import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_LENS_PROFILE_QUERY } from 'src/utils/queries'

interface Props {
	address: string
}

const LensProfile = (props: Props) => {
	const [address, setAddress] = useState('')
	const [queryData, setQueryData] = useState(<></>)

    useEffect(() => {
        console.log('Updated address:', props.address)
        setAddress(props.address)
        refetch()
    },[props.address])

	const { loading, error, data, refetch } = useQuery(GET_LENS_PROFILE_QUERY, {
		variables: {
			userAddress: address
		}
	})

	useEffect(() => {
		if (data && data.profiles?.items[0]?.bio) {
            console.log(data)
			console.log(data.profiles.items[0].bio)
			setQueryData(<>
                <p>ID: {data.profiles.items[0].id}</p>
                <p>Name: {data.profiles.items[0].name}</p>
                <p>Handle: {data.profiles.items[0].handle}</p>
                <p>Bio: {data.profiles.items[0].bio}</p>
                </>
                    
                    )
		}
	}, [data])

	return <div>{queryData}</div>
}

export default LensProfile
