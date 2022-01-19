import {ApolloProvider} from "@apollo/client";
import apolloClient from "../src/utils/apolloClient";
import {FC, ReactElement} from "react";


type Props = {
    Component: any,
    pageProps: any,
}
const MyApp: FC<Props> = ({ Component, pageProps }): ReactElement=> {

    // React.useEffect(() => {
    //     const jssStyles = document.querySelector('#jss-server-side');
    //     if (jssStyles) {
    //         jssStyles?.parentElement?.removeChild(jssStyles);
    //     }
    // }, []);

    return (
        <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;