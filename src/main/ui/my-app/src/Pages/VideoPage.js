import Footer from "../Components/Layouts/Footer";
import Header from "../Components/Layouts/Header";
import '../styles/App.css';
import PropTypes from "prop-types";

function VideoPage () {
    const YoutubeEmbed = ({ embedId }) => (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      );
      
      YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired
      };

      return (
        <div>
            <Header/>
                <h1>This is Embedded Youtube video</h1>
                <YoutubeEmbed embedId="VsUzmlZfYNg"/>
            <Footer/>
        </div>
      )

}

export default VideoPage;