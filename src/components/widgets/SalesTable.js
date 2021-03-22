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

function createData(date, name, sale, upsellProduct, returned, total) {
  return { date, name, sale, upsellProduct, returned, total };
}

const rows = [
    createData('1- 08 2020', "Marketing Tip Vol1", 1, 0, 0, "250€"),
    createData('2- 08 2020', "Digital Marketing Tip Vol1", 1, 0, 0, "250€"),
    createData('3- 08 2020', "Analytical Marketing", 4, 1, 0, "1000€"),
    createData('4- 08 2020', "Marketing Guide", 1, 0, 0, "250€"),
    createData('5- 08 2020', "Marketing Guide", 1, 3, 0, "250€"),
    createData('6- 08 2020', "High Speed Selling Course", 1, 0, 0, "250€"),
    createData('6- 08 2020',"Social Media Marketing", 1,0,0,"250€" ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function SalesTables() {
  const classes = useStyles();

return (
<div className="z-depth-1" style={{ padding: "16px" }}>
    <div className="col s12">
        <h6 className="light-green-text text-accent-1">
            <b>
                Total Sales
            </b>
        </h6>
    </div>   
<TableContainer className="z-depth-0" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{borderBottom:"2px solid #000"}}>
          <TableRow>
            <StyledTableCell> <b>Date</b> </StyledTableCell>
            <StyledTableCell align="right"><b>Product Name</b></StyledTableCell>
            <StyledTableCell align="right"><b>Products Sale</b></StyledTableCell>
            <StyledTableCell align="right"><b>Upsell Products</b></StyledTableCell>
            <StyledTableCell align="right"><b>Returned </b></StyledTableCell>
            <StyledTableCell align="right"><b>Total Amount </b></StyledTableCell>
                      
          </TableRow>
        </TableHead>
        <TableBody>
                  {rows.map((row, i) => {

                      return (i%2)==0 ?(
                          <StyledTableRow className="" style={{background:"#e0ffe0"}} key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.sale}</StyledTableCell>
                            <StyledTableCell align="right">{row.upsellProduct}</StyledTableCell>
                            <StyledTableCell align="right">{row.returned}</StyledTableCell>
                            <StyledTableCell align="right">{row.total}</StyledTableCell>
                        
                        </StyledTableRow>
                      )
                    :(
                          <StyledTableRow className="" key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.sale}</StyledTableCell>
                            <StyledTableCell align="right">{row.upsellProduct}</StyledTableCell>
                            <StyledTableCell align="right">{row.returned}</StyledTableCell>
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
