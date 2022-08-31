import { gql } from '@apollo/client'

export const GET_LENS_PROFILE_QUERY = gql`
	query ($userAddress: [EthereumAddress!]) {
		profiles(
			request: { ownedBy: $userAddress }
		) {
			items {
				id
				name
				handle
				bio
			}
		}
	}
`