function SideBar() {
    const navigate = useNavigate()

    const onSelect = (selected) => {
        const to = '/' + selected
        console.log(to)
        if (location.pathname !== to) {
            history.push(to);
        }
    } 

    return (
        <SideNav onSelect={onSelect}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="test">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Test
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="images">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Images
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="video">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Video
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
        </SideNav>
    )
}