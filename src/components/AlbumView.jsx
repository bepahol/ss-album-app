import React from "react";
import styles from "assets/styles/Home.module.css";
import AlbumItem from "components/AlbumItem";

class AlbumView extends React.Component {
  render() {
    const { albums } = this.props;

    return (
      <div>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>"{this.props.artist}"</h1>
            <p className={styles.description}>
              Total: <code className={styles.code}>{albums.data.length}</code>
            </p>

            <div className={styles.grid}>
              {albums.data.map((item, index) => {
                return <AlbumItem index={index} item={item} key={index} />;
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default AlbumView;
