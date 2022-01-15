import apolloClient from "../src/utils/apolloClient";
import {gql} from "@apollo/client";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import { routesStyles} from "../styles/theme";
import {GET_ALL_BY_ID, GET_BY_ID} from "../src/utils/queries";


export async function getStaticPaths() {
    const {data} = await apolloClient.query({
        query: GET_BY_ID,
    })

    const missions = data.launchesPast;
    const paths = missions.map((mission) => {
        return {
            params: {id: mission.id}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    console.log("id: ", id);
    const {data} = await apolloClient.query({
        query: GET_ALL_BY_ID,
        variables: {id}
    })
    const launch = data.launchesPast.filter(l => l.id === id);
    console.log("the right launch: ", launch)
    return {
        props: {launches: launch}
    }
}


const Mission = ({launches}) => {
    const classes = routesStyles();
    const launch = launches[0];

    return (
        //Not all missions have images, so some image placeholders might be empty
        //Not all missions have details
        <div className={classes.main}>
            <Card sx={{maxWidth: 500}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={launch.links.flickr_images[0]}
                        alt="starman"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {launch.mission_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {launch.details}
                        </Typography>
                        <Typography variant="body1" color="primary">
                            Launch Time: {
                            new Date(launch.launch_date_local).toString()
                        }
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Launch Site: {launch.launch_site.site_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Mission;