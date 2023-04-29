import React, { Fragment, useCallback, useContext } from "react";

import ListHeader from './Header/';
import QuestionRow from '../../component/QuestionRow';

import { StackContext } from "../../context/QuestionContext";

import classes from '../../styles/List/index.module.scss';

const StackList = () => {
    const { stack } = useContext(StackContext);
    const { questions } = stack || {};
    
    const renderQuestions = useCallback(() => {
        return questions.map(qtns => <QuestionRow key={qtns.id} details={qtns}/>);
    },[questions]);

    return (
        <Fragment>
            <div className={classes.listWrapper}>
                <ListHeader questions={questions}/>
                {renderQuestions()}
            </div>
        </Fragment>
    );
};

export default StackList;