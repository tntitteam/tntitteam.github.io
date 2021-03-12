import logo from './logo.svg';
import './App.css';
import MaterialTable from "material-table";
import { forwardRef , useState, useEffect } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Save from '@material-ui/icons/Save'
import ErrorShow from '@material-ui/icons/Error'
import DoneOutline from '@material-ui/icons/DoneOutline'
import Switch from '@material-ui/core/Switch';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />), 
    Save: forwardRef((props, ref) => <Save {...props} ref={ref} />),
    ErrorShow: forwardRef((props, ref) => <ErrorShow {...props} ref={ref} />),
    DoneOutline: forwardRef((props, ref) => <DoneOutline {...props} ref={ref} />),
  };



function ErrorWindow(props) {
  const [errorStatus, setErrorStatus] = useState({
    'closed': true
  });

  useEffect(() => {
    fetch('/error_status?id='+props.file_id.toString()).then(res =>res.json()).then(data => {
      setErrorStatus(data)
    });
  }, []);

const [state, setState] = useState({
    checked: errorStatus.closed
  });
  


  const handleChange = (name) => {
    let status;
    if ( state.checked ) status = 'closed';
    else status = 'open';
    fetch('/set_error_status?id='+props.file_id.toString()+'&closed='+ status)
    setState({ checked: !state.checked });
  };

  function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
};
renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

  return (
          <div>
              <Switch
              checked={state.checked}
              onClick={() => handleChange('checked')}

              color="primary"
              name="checked"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
             <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
               {renderRow}
            </FixedSizeList>
           </div>
  )
};

function App() {
  //const table_data;
  const [table, setTable] = useState([]);
  
  useEffect(() => {
    fetch('/epcis').then(res =>res.json()).then(data => {
      setTable(data)
    });
  }, []);
  const columns = [
    {
      title: "aif",
      field: "aif_timestamp",
    },
    {
      title: "Message",
      field: "message_id",
    },
    {
      title: "File",
      field: "filename",
    },
    {
      title: "Documnent",
      field: "business_document",
    },
    {
      title: "Error",
      field :'error_status'
    },
    {
      title: "File id",
      field :'file_id'
    }
  ];
  return (
    <div style={{ maxWidth: "100%" }}>
        <MaterialTable
        icons={tableIcons}
          columns={columns}
          data={table}
          title="EPCIS Monitoring"
          actions={[
        {
          icon: () => <Save />,
          tooltip: 'Open file',
          onClick: (event, rowData) => {
            window.open('http://10.167.92.182:5000/files?file='+rowData.filename, '_blank');
          }
        },  ]}
      //detailsPanelVisibile: (rowData) => rowData.error_status != '-'
     detailPanel={[

          rowData => ({
          icon: () => {if (rowData.error_status == '-') return <DoneOutline />;
                        else return <ErrorShow />;},
          disabled: rowData.error_status == '-',
          tooltip: 'Show error',
          render: rowData =>  <ErrorWindow file_id={rowData.file_id}/>  
          // onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
          // disabled: rowData.birthYear < 2000
        })

    ]}      
        />
      </div>
  );
}

export default App;
