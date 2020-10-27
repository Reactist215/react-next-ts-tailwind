import { format } from "path";
import { FC } from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    )
};

export default App;
