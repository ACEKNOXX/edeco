import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.transparent,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(product,sold,total) {
  return { product,sold,total };
}

const rows = [
    createData('Marketing Strategy', "10","1200€"),
    createData('Elements of Marketing', "7","700€"),
    createData('Digital Exposure Vol 1', "5","500€"),        
    createData('Mystery of Marketing', "3", "300€"),
    createData('Marketing Tips', "3","200€"),        
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ProductTables() {
  const classes = useStyles();

return (
<div className="z-depth-1" style={{ padding: "16px" }}>
        <div className="col s12">
            <h6>
                <b>
                    Top Products Sold
                </b>
            </h6>
        </div>
    <TableContainer className="z-depth-0" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{borderBottom:"2px solid #000"}}>
          <TableRow>
            <StyledTableCell> <b>Product</b></StyledTableCell>
            <StyledTableCell align="right"><b>Item Sold</b></StyledTableCell>
            <StyledTableCell align="right"><b>Total Sales</b></StyledTableCell>
                          
          </TableRow>
        </TableHead>
        <TableBody>
                  {rows.map((row, i) => {

                      return (i%2)==0 ?(
                          <StyledTableRow className="" style={{background:"#e0ffe0"}} key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.product}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.sold}</StyledTableCell>
                            <StyledTableCell align="right">{row.total}</StyledTableCell>
                           
                        </StyledTableRow>
                      )
                    :(
                          <StyledTableRow className="" key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.product}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.sold}</StyledTableCell>
                            <StyledTableCell align="right">{row.total}</StyledTableCell>
                        
                        </StyledTableRow>
                      )
                  }
          )}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  );
}
