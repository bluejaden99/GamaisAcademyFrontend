import React from 'react';
import CoursesSection from '../../components/courses_section/CoursesSection'

let dummy = [
    {
        image: "/logo512.png",
        title: "test1",
        description: "test1 descdsadasdas"
    },
    {
        image: "/logo512.png",
        title: "test2",
        description: "test2 dsadasdas"
    },
    {
        image: "/logo512.png",
        title: "test3",
        description: "test3 descdsadasdas"
    },
    {
        image: "/logo512.png",
        title: "test4",
        description: "test4 dsadasdas"
    }
];

const Profile = () => {
    return (
    <div>
        <CoursesSection courses={ dummy }/>
    </div>);
}

export default Profile;