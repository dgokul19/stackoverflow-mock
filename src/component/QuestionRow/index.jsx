import React from 'react';

import QtnCounts from '../QtnCounts';
import Tags from '../Tags';

import classes from  './index.module.scss';

const QuestionRow = ({details}) => {
    const { views, answers, votes, tags, title, description } = details || {};
    return(
        <div className={classes.questionRow}>
            <QtnCounts views={views} answers={answers} votes={votes}/>
            <div className={classes.questionSection}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={classes.qtnTags}>
                    {tags.map(label => <Tags key={label} tagLabel={label} />)}
                </div>
            </div>
        </div>
    );
};

export default React.memo(QuestionRow);