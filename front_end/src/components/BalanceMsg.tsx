import { makeStyles } from "@mui/styles"
import { borderColor, color } from "@mui/system"

const useStyles = makeStyles(theme => ({
    container: {
        display: "inline-grid",
        gridTemplateColumns: "auto auto auto",
        alignItems: "center",
        outerWidth: "100%",
        color: "white",
    },
    tokenImg: {
        width: "32px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    amount: {
        fontWeight: 700,
        paddingLeft: "20px",
        color: "white"
    }
}))

interface BalanceMsgProps {
    label: string
    amount: number
    tokenImgSrc: string
}

export const BalanceMsg = ({ label, amount, tokenImgSrc }: BalanceMsgProps) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div>{label}</div>
            <div className={classes.amount}>{amount}</div>
            <img className={classes.tokenImg} src={tokenImgSrc} alt="tokenImg"></img>
        </div>
    )
}