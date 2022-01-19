import {gql} from "@apollo/client";

export const GET_ALL_MAIN = gql`
    {
      launchesPast(limit: 20) {
        mission_name
        rocket {
          rocket_name
        }
        id
        launch_date_local
        links {
          flickr_images
        }
      }
    }`;

export const GET_BY_ID = gql`
        {
          launchesPast(limit: 20) {
            id
          }
        }
    `;

export const GET_ALL_BY_ID = gql`
        {
          launchesPast(limit: 20) {
            mission_name
            ships {
              name
              image
            }
            launch_date_local
            id
            details
            launch_site {
               site_name
            }
            links {
               flickr_images
            }
          }
        }
    `;



