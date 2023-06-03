import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import TableRender from "../../features/TableRender/TableRender";
import { ListGroup,  } from "react-bootstrap";
import Loader from "../../common/Loader/Loader";

const HomePage = () => {

    const tables = useSelector(state => getAllTables(state));
    console.log('tables: ', tables)
    if(tables.length < 1 ) return <Loader />
    else 
    return(
        <div>
            <div>
                <h1>All Tables</h1>
            </div>
            <div>
               
                <ListGroup>
                    {tables.map(table =>
                        <TableRender
                        key={table.id}
                        {...table} />
                        )}  
                </ListGroup>
                
            </div>
            
        </div>
    );
};

export default HomePage;