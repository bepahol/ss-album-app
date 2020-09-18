import React from "react";
import { Row, Col, Button } from "reactstrap";
import AlbumSelectors from "selectors/AlbumSelectors";
import { connect } from "react-redux";
import Link from "next/link";
import styles from "assets/styles/Search.module.css";

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
    // console.log("setting.. " + event.target.name + " -> " + event.target.value);

    this.setState({ [name]: value });
  }

  handleSearch(event) {
    event.preventDefault();
    window.location.href = `/album/${this.state.artist}`;
  }

  render() {
    const { fetching } = this.props.albums;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.search}>
                <form name="searchform" id="searchform" onSubmit={(event) => this.handleSearch(event)}>
                  {/* using div here so elements are all on one line */}
                  <label htmlFor="artist">
                    Search for your fav artist: &nbsp;
                    <input
                      type="text"
                      name="artist"
                      id="artist"
                      className="input"
                      value={this.state.artist}
                      size="20"
                      onChange={(event) => this.handleChange(event)}
                      disabled={fetching ? true : false}
                    />
                  </label>
                  &nbsp;
                  <input type="submit" name="search" id="search" value={fetching ? "Searching..." : "Search"} disabled={!this.state.artist} />
                </form>
              </div>
            </div>
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
