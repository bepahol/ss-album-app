import React from "react";
import AlbumSelectors from "selectors/AlbumSelectors";
import { connect } from "react-redux";
import { wrapper } from "redux/configureStore";
import * as Util from "utils/Util";
import AlbumView from "components/AlbumView";
import AlbumActions from "redux/AlbumRedux";
import SearchBar from "components/SearchBar";

class AlbumPage extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsRequest(this.props.params.artistName);
  }

  render() {
    const { albums } = this.props;

    return (
      <>
        <SearchBar />
        {Util.getDisplayStatus(albums)}
        <AlbumView artist={this.props.params.artistName} albums={albums} />
      </>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps((context) => {
  return {
    props: {
      params: context.params,
    },
  };
});

const mapStateToProps = (state) => ({
  albums: AlbumSelectors.albums(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumsRequest: (artist) => dispatch(AlbumActions.fetchAlbumsRequest(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
