import "assets/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { wrapper } from "../redux/configureStore";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
