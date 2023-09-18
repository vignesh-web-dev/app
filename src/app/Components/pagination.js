import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "#000", // Change the text color
    },
    "& .Mui-selected": {
      backgroundColor: "#c9c8c8", // Change the active button background color
      "&:hover": {
        backgroundColor: "gray", // Change the active button background color on hover
      },
    },
  },
}));

function MyPagination(props) {
  debugger;
  const classes = useStyles();

  const { onUpdateParentState } = props;
  const handleButtonClick = (event, value) => {
    onUpdateParentState(value);
  };

  return (
    <Pagination
      count={props.count}
      page={props.page}
      onChange={handleButtonClick}
      classes={{ root: classes.pagination }}
    />
  );
}

export default MyPagination;
