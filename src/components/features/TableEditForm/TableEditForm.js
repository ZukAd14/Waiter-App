import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './TableEditForm.module.scss';
import { useDispatch } from "react-redux";
import { editTableRequest } from "../../../redux/tablesRedux";

const TableEditForm = ({ action, ...props }) => {

    const [status, setStatus] = useState(props.status || '');
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || '');
    const [bill, setBill] = useState(props.bill || '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTableRequest({ id: props.id, status: status, peopleAmount: peopleAmount, maxPeopleAmount: maxPeopleAmount, bill: bill}))
        action({ status, peopleAmount, maxPeopleAmount, bill });
    };

    const handleChange1 = (event) => {
        setStatus(event.target.value);
        if(status === 'Free' || status === 'Cleaning'){
            return setPeopleAmount(0);
        }
    }
   
    
    useEffect(() => {
        if(peopleAmount > maxPeopleAmount)
        setPeopleAmount(maxPeopleAmount || peopleAmount);
    }, [maxPeopleAmount, peopleAmount]);
    
    console.log('sta: ', status);
    console.log('People: ', peopleAmount);
    return(
        <div>
            <h1 className="mb-2">Table {props.id}</h1>
            <form onSubmit={handleSubmit}>
                <Form.Group >
                    <Row className="justify-content-start mt-4">
                        <Col className="col-1 pt-2">
                            <Form.Label><strong>Status: </strong></Form.Label>
                        </Col>
                        <Col className="col-4" >
                            <Form.Select onChange={handleChange1} className="w-50">
                                <option hidden>{status || 'Select status'}</option>
                                <option value='Free'>Free</option>
                                <option value='Busy'>Busy</option>
                                <option value='Reserved'>Reserved</option>
                                <option value='Cleaning'>Cleaning</option>
                            </Form.Select>
                            </Col>
                            </Row>
                        </Form.Group>
                <Form.Group>
                    <Row className="justify-content-start mt-2">
                        <Col className="col-1 pt-3">
                            <Form.Label><strong>People: </strong></Form.Label>
                        </Col>
                        <Col className="col-4 d-inline-flex">
                            <Form.Control type="number" className={styles.short} value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}  max={maxPeopleAmount} min={0}/>
                             <p className="pt-3 mx-1">/</p>
                            <Form.Control type="number" className={styles.short} value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} min={1} max={10}/>
                        </Col>
                    </Row>
                </Form.Group>
                {
                    (status === 'Busy') &&
                <Form.Group>
                    <Row className="justify-content-start mt-2">
                        <Col className="col-1 pt-3">
                            <Form.Label><strong>Bill: </strong></Form.Label>
                        </Col>
                        <Col className="col-4 d-inline-flex">
                            <p className="pt-3 me-2">$</p>
                            <Form.Control className={styles.short} value={bill} onChange={e => setBill(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                }
                <Button variant="primary" type="submit">Update</Button>
            </form>
        </div>
        
    );
};

export default TableEditForm;