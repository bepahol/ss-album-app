import React from "react";
import { connect } from "react-redux";
import styles from "assets/styles/Home.module.css";

import AlbumActions from "redux/AlbumRedux";
import AlbumSelectors from "selectors/AlbumSelectors";

import * as Util from "utils/Util";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsRequest("hello");
  }

  render() {
    return (
      <>
        <div>{Util.getDisplayStatus(this.props.albums)}</div>
        <div>
          {this.props.albums.data.map((item, index) => {
            return (
              <div>
                {index}. {item}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: AlbumSelectors.albums(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumsRequest: (term) => dispatch(AlbumActions.fetchAlbumsRequest(term)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
