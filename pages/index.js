import styles from '../styles/Home.module.css'
import Link from 'next/link';
import apolloClient from "../src/utils/apolloClient";
import {useStyles} from "../styles/theme";
import {GET_ALL_MAIN} from "../src/utils/queries";


export default function Home({launches}) {
    const classes = useStyles();

    return (<div className={classes.container}>
        <main>
            <h1 className={styles.title}>
                SpaceX Missions Data
            </h1>

            <div className={classes.grid}>
                {launches.map(l => {
                    return (
                        <Link href={l.id} key={l.id} className={classes.card}>
                            <div className={classes.card}>
                                <img src={l.links.flickr_images[0]} className={classes.image}/>
                                <h3><strong>Mission Name: </strong>{l.mission_name}</h3>
                                <p><strong>Rocket Name: </strong>{l.rocket.rocket_name}</p>
                                <p><strong> Launch Time: </strong>{
                                    new Date(l.launch_date_local).toLocaleDateString('en-UK')
                                }</p>

                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    </div>)
}

export async function getStaticProps() {
    const {data} = await apolloClient.query({
        query: GET_ALL_MAIN,
    })
    return {
        props: {
            launches: data.launchesPast,
        }
    }
}
