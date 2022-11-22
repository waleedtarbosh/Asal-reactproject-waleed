import React from 'react';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import tableIcons from "./MaterialTableIcons";
import { useApi } from './useApi';
import './font-h2.css'

function TeacherTable() {
  
  const [data,setData,loading, err] =useApi('https://api.github.com/users/edvardHua/repos')
  const columns = [
    { title: "ID", field: "id", sorting: false, filtering: false, cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
    { title: "Full Name", field: "full_name", filterPlaceholder: "filter" },
    { title: "Type", field: "owner.type", align: "center", grouping: false,filterPlaceholder:"filter" },
    { title: "Language", field: "language",filterPlaceholder:"filter" },
     
  ]
  return (
    <div className="table">
        {loading && <p>Loading...</p>}
        <h2> There are {data.length} Teacher in the Database</h2>
      <MaterialTable columns={columns} data={data} icons={tableIcons}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setData([...data, newRow])
  
            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...data]
            updatedData[oldRow.data.id] = newRow
            setData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...data]
            updatedData.splice(selectedRow.tableData.id, 1)
            setData(updatedData)
            setTimeout(() => resolve(), 1000)
  
          })
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            //disabled: rowData.id ===492722891,
             //color:"primary"
          }),
          grouping: false, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Teacher Information"
        />
        {err && <p>{err}</p>}
        
    </div>
  
  
  );
}

export default TeacherTable;
