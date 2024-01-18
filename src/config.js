const LIST_TYPES = {
	COMPANY: {
		POBEDA: 'pobeda',
		RED_WINGS: 'red wings',
		AIRLINES: 'airlines',	
	},
	CONNECTIONAMOUNT: {
		NONE: null,
		ONE: 1,
		TWO: 2,
		THREE: 3,
	}
}

const LIST_COPY = {
	[LIST_TYPES.COMPANY.POBEDA]: 'Победа',
   [LIST_TYPES.COMPANY.RED_WINGS]: 'Red Wings',
	[LIST_TYPES.COMPANY.AIRLINES]: 'S7 Airlines',
	[LIST_TYPES.CONNECTIONAMOUNT.NONE]: 'Без пересадок',
   [LIST_TYPES.CONNECTIONAMOUNT.ONE]: '1 пересадка',
	[LIST_TYPES.CONNECTIONAMOUNT.TWO]: '2 пересадки',
	[LIST_TYPES.CONNECTIONAMOUNT.THREE]: '3 пересадки',
}


export { LIST_TYPES, LIST_COPY }