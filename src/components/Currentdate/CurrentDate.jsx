import React from 'react'
import moment from 'moment'

import Moment from 'react-moment';

const CurrentDate = () => {
    const currentDateTime = moment()

    return (
        <Moment format='D MMM YYYY, h:mm:ss a'>{currentDateTime}</Moment>

    )
}

export default CurrentDate
