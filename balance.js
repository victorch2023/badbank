function Balance(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    return(
        <Card
            bgcolor="primary"
            header="Balance"
            status={status}
            body={
                <>
                Balance<br/>
                <h2>USD: {JSON.stringify((ctx.users[0]).balance)}</h2><br/><br/>
                </>
            }

        />
    )
}