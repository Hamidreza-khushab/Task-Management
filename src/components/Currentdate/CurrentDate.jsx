import React from 'react'
import moment from 'moment'

import Moment from 'react-moment';

const CurrentDate = () => {
    const currentDateTime = moment()

    return (
        <Moment format='D MMM YYYY'>{currentDateTime}</Moment>
    )
}

export default CurrentDate
