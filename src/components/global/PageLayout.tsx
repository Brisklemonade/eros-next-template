const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


    return (
        <main>
            {children}
        </main>
    );
}

export default PageLayout;