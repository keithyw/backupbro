Header = React.createClass({

    render(){
        let authMenu = this.props.user ? <LoggedIn/> : <LoggedOut/>;
        return(
            <header>
                <div className="header-container">
                    <a href="/" className="logo">BackupBro</a>
                    <nav className="search-box">
                        <form>
                            <input type="text" name="search"/>
                        </form>
                    </nav>
                    <nav className="right-nav">
                        {authMenu}
                    </nav>
                </div>
            </header>
        );
    }
});