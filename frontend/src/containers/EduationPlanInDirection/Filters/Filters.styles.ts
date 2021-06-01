import {createStyles, Theme, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    flexDirection: 'column',
    paddingTop: '10px',
  },
  fieldsWrapper: {
    width: '90%',
    margin: '0 auto 20px auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '20px',
  },
  btnsWrapper: {
    display: 'flex',
    width: '490px',
    justifyContent: 'space-between',
    [theme.breakpoints.down(880)]: {
      width: '100%',
    }
  },
  btn: {
    width: '235px',
    [theme.breakpoints.down(880)]: {
      width: '40%',
    }
  },
  filterBtn: {
    backgroundColor: theme.palette.primary.main,
  },
  resetBtn: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}))