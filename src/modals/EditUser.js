import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditUserPopup = ({modal, toggle, updateUser, userObj}) => {
    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "userName"){
            setUserName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setUserName(userObj.Name)
        setDescription(userObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = userName
        tempObj['Description'] = description
        updateUser(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update User</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>User Name</label>
                        <input type="text" className = "form-control" value = {userName} onChange = {handleChange} name = "userName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditUserPopup;