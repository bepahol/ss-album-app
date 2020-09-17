import React from "react";
import styles from "assets/styles/Home.module.css";

import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from "reactstrap";

class AlbumItem extends React.Component {
  render() {
    const { index, item } = this.props;

    const date = new Date(item.releaseDate);

    return (
      <div className={styles.card}>
        <h3>{item.collectionName}</h3>
        <Card>
          <a href={item.collectionViewUrl}>
            <CardImg top width="50%" height="50%" src={item.artworkUrl100} alt={item.collectionName} />
          </a>
          <CardBody>
            {/* <CardTitle>Track: {item.trackName}</CardTitle>
            <CardSubtitle>Artist: {item.artistName}</CardSubtitle>
            <CardText>Release Date: {item.releaseDate}</CardText> */}
            <CardTitle>Release Date: {date.toDateString()}</CardTitle>
            <CardText>
              <span className={styles.artistName}>{item.artistName}</span>
            </CardText>
            {/* <Button className="btn btn-block">Preview</Button> */}
            <a href={item.previewUrl}>gabab</a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AlbumItem;
