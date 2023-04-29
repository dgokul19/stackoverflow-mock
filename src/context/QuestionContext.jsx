import React, { createContext, useReducer } from "react";

import { stackReducer } from "../reducer";

export const StackContext = createContext();

const initialState = {
    questions: [
        {
            id: 1,
            title: 'How to add Tailwind to a React App in django?',
            description: "I'm trying to build a django app with React and Tailwind. I have checked and tried countless tutorials, now I'm able to preview the react app on http://127.0.0.1:8000/ But the tailwind classes are not ...",
            tags: ['css', 'reactjs', 'django', 'tailwind-css'],
            votes: 3,
            answers: 6,
            views: 12,
            authorBy: 'kristy',
            createdTime: '',
            updatedTime: ''
        },
        {
            id: 2,
            title: 'Rust / mismatched types - expected `Box<City>`, found `City` / How to extract data from Box?',
            description: "need to extract data from Box. I can not. I made a very simple demo with a minimal example: https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=.",
            tags: ['rust'],
            votes: 0,
            answers: 0,
            views: 3,
            authorBy: 'himanshu baradwaz',
            createdTime: '',
            updatedTime: ''
        },
    ]
};

const StackContextProvider = (props) => {
    const [stack, dispatch] = useReducer(stackReducer, initialState);

    return (
        <StackContext.Provider value={{ stack, dispatch }}>
            {props.children}
        </StackContext.Provider>
    )
};

export default StackContextProvider;