import Link from 'next/link';
import apolloClient from "../src/utils/apolloClient";
import {useStyles} from "../styles/theme";
import {GET_ALL_MAIN} from "../src/utils/queries";
import React, {FC, ReactElement} from 'react';
import { Input } from '@mui/material';
import {GetStaticProps} from "next";

type Props = {
    launches: [],
}

const Home: FC<Props> = ({launches}): ReactElement => {
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = React.useState<string>('');

    return (<div className={classes.container}>
        <main>
            <h1 className={classes.title}>
                SpaceX Missions Data
            </h1>

            <Input placeholder="Search mission by name" className={classes.search}
                   onChange={event => {
                       setSearchTerm(event.target.value)
                   }}
            />
            <div className={classes.grid}>
                {launches.filter((val: any) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.mission_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((l: {
                    id: string; links: any; mission_name: string; rocket: any; rocket_name: string;
                    launch_date_local: any
                }) => {
                    return (
                        <Link href={l.id} key={l.id}>
                            <div className={classes.card}>
                                <img src={l.links.flickr_images[1]} className={classes.image}
                                     alt="missing image from the api"/>
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

export const getStaticProps: GetStaticProps = async () => {
    const {data} = await apolloClient.query({
        query: GET_ALL_MAIN,
    })
    return {
        props: {
            launches: data.launchesPast,
        }
    }
}

export default Home;