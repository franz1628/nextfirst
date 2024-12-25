import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Head>
                
                <title>Dashboard</title>
                <meta name="description" content="Dashboard layout" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
          
            <main className="flex-grow max-w-screen-xl mx-auto px-8">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;