import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateUser'
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [userList, setUserList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("userList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setUserList(obj)
        }
    }, [])


    const deleteUser = (index) => {
        let tempList = userList
        tempList.splice(index, 1)
        localStorage.setItem("userList", JSON.stringify(tempList))
        setUserList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = userList
        tempList[index] = obj
        localStorage.setItem("userList", JSON.stringify(tempList))
        setUserList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveUser = (userObj) => {
        let tempList = userList
        tempList.push(userObj)
        localStorage.setItem("userList", JSON.stringify(tempList))
        setModal(false)
        setUserList(userList)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>USERS</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Add User</button>
            </div>
            <div className = "task-container">          
            {userList && userList.map((obj , index) => <Card userObj = {obj} index = {index} deleteUser = {deleteUser} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveUser}/>
        </>
    );
};

export default TodoList;