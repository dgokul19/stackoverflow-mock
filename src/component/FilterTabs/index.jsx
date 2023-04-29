import classes from './index.module.scss';

const FilterTabs = () => {
    return (
        <ul className={classes.tabsFilter}>
            <li className={classes.active}>Newest</li>
            <li>Active</li>
            <li>Bountied <span>370</span></li>
            <li>Unanswered</li>
            <li>More <i className="fa fa-sort-desc"></i></li>
        </ul>
    );
};

export default FilterTabs;