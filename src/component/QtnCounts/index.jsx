import classes from './index.module.scss';

const QtnCounts = ({ views, answers, votes }) => {
    return (
        <div className={classes.qtnCounts}>
            <ul>
                <li>
                    <h5>{votes}</h5>
                    <span>Votes</span>
                </li>
                <li>
                    <h5>{answers}</h5>
                    <span>Answers</span>
                </li>
            </ul>
            <span> {views} views</span>
        </div>
    );
};

export default QtnCounts;