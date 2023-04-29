import React from 'react';

import classes from '~/styles/globals.module.scss';

const Tags = ({tagLabel}) => {
    return (
        <span className={classes.tagContainer}>
            {tagLabel}
        </span>
    )
};

export default React.memo(Tags);