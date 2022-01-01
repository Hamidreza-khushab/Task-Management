import { Modal } from "react-bootstrap";
import Taskinput from '../taskinputForm/Taskinput';

const Task = ({ addTask, showTask, hideModaltask }) => {
    return (

        <Modal
            show={showTask}
            fullscreen={"md-down"}
            onHide={() => hideModaltask()}
        >
            <Modal.Header closeButton>
                <Modal.Title>New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Taskinput
                    addTask={(id, title, estimateDo, description, date) => addTask(id, title, estimateDo, description, date)}
                />
            </Modal.Body>
        </Modal >
    )
}

export default Task
