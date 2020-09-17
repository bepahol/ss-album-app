import React from "react";
import { Row, Col, Button } from "reactstrap";
import AlbumSelectors from "selectors/AlbumSelectors";
import { connect } from "react-redux";
import Link from "next/link";

class SearchBar extends React.Component {
  state = {
    artist: "",
  };

  handleChange(event) {
    const { name, value } = event.target;

    // let error = null;
    // const stripped = value.replace(/^\w*$/, "");

    // if (stripped.length !== value.length) {
    //   error = "Input Contains Bad Characters";
    // }

    // if (error) {
    //   alert(error);
    // } else {
    //   // console.log("setting.. " + event.target.name + " -> " + event.target.value);
    this.setState({ [name]: value });
    // }
  }

  render() {
    const { albums } = this.props;
    const { fetching } = albums;

    return (
      <>
        <div className="wrapper login_page">
          <div className="main-panel" ref="mainPanel">
            <Row>
              <Col xs={12} md={12}>
                <div className="container-fluid">
                  <div className="login-wrapper row">
                    <div id="login" className="login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4">
                      <form name="loginform" id="loginform" onSubmit={(event) => this.handleSearch(event)}>
                        {/* using div here so elements are all on one line */}
                        <label htmlFor="user_login">
                          Search for your fav artist: &nbsp;
                          <input
                            type="text"
                            name="artist"
                            id="user_login"
                            className="input"
                            value={this.state.artist}
                            size="20"
                            onChange={(event) => this.handleChange(event)}
                            disabled={fetching ? true : false}
                          />
                        </label>
                        &nbsp;
                        <Link href={`/album/${this.state.artist}`}>
                          <a>
                            <Button color="secondary" disabled={!this.state.artist}>
                              {fetching ? "Searching..." : "Search"}
                            </Button>
                          </a>
                        </Link>
                        {/* <input type="submit" name="wp-submit" id="wp-submit" className="" value={fetching ? "Searching..." : "Search"} /> */}
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: AlbumSelectors.albums(state),
});

export default connect(mapStateToProps)(SearchBar);
