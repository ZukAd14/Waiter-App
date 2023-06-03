import { useSelector } from "react-redux";
import TableEditForm from "../../features/TableEditForm/TableEditForm";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getAllTables, getTableById } from "../../../redux/tablesRedux";
import Loader from "../../common/Loader/Loader";

const TableEdit = () => {

    
    const navigate = useNavigate();
    const { id } = useParams();
    const tableData = useSelector(state => getTableById(state, id));
    const tables = useSelector(getAllTables);

    
    const handleSubmit = () => {
        
       // dispatch(editTableRequest({ id: id, status: }));
        navigate('/');
    }

    if(!tables) {
        return <Loader />
    } else
    
    if(!tableData) {
    return <Navigate to='/' />
    } else
    
    return(
       <TableEditForm
       action={handleSubmit}
       id={id}
       status={tableData.status}
       peopleAmount={tableData.peopleAmount}
       maxPeopleAmount={tableData.maxPeopleAmount}
       bill={tableData.bill}
       />
    );
};

export default TableEdit;