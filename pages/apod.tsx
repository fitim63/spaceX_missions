import {GetStaticProps} from "next";
import {FC, ReactElement} from "react";
import {useStyles} from "../styles/theme";

export const getStaticProps: GetStaticProps = async () => {
    const key = "zrxPgmyFBOo52QUmC3NixBXpoPm8EI8XX4CWLJLS"
    const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=zrxPgmyFBOo52QUmC3NixBXpoPm8EI8XX4CWLJLS");
    const data = await res.json();
    return {
        props: {pic: data}
    }
}

type Props = {
    pic: any,
}

const Apod: FC<Props> = ({pic}): ReactElement => {
    console.log(pic);
    const classes = useStyles();
    return (
        <div className={classes.apodContainer}>
            <div className={classes.apod}>
                <h2>{pic.title}</h2>
                <img src={pic.url} style={{}}/>
                <h4>Picture taken by: {pic.copyright}</h4>
            </div>
            <div className={classes.explanation}>
                <h2>Explanation</h2>
                <p>{pic.explanation}</p>
            </div>
        </div>
    );
}
export default Apod;