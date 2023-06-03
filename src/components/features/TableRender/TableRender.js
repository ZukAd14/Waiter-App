import { Button, ListGroup, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableRender = (props) => {

    return(
        <ListGroup.Item className="border-start-0 border-top-0 border-end-0 py-3">
            <Stack direction="horizontal" gap={3}>
                <h2 className="me-3">Table {props.id}</h2>
                <p><strong>Status: </strong>{props.status}</p>
                <Link className="ms-auto" to={`/table/${props.id}`}>
                    <Button variant="primary">Show more</Button>
                </Link>
            </Stack>
        </ListGroup.Item>
    );
};

export default TableRender;