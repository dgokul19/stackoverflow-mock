import React, { Fragment } from "react";

import FilterTabs from '~/component/FilterTabs';

import classes from '~/styles/List/index.module.scss';

const ListHeader = (props) => {
    const { questions } = props || {};
    return (
        <Fragment>
            <div className={classes.listHeader}>
                <div className={classes.headerRow}>
                    <h1>All Questions</h1>

                    <button> Ask Question</button>
                </div>

                <div className={classes.headerDetails}>
                    <span>{questions?.length} Questions</span>
                    <div className={classes.filterElement}>
                        <FilterTabs />
                        <button><i className="fa fa-cog" aria-hidden="true"></i> Filter</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ListHeader;