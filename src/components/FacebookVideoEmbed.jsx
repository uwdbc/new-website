const FacebookVideoEmbed = ({ videoURL, className }) => {
  const iframeSrc = `https://www.facebook.com/plugins/video.php?href=${videoURL}&show_text=0`;

  return (
    <div className={"aspect-video w-fit overflow-hidden"}>
      <iframe
        className={"border-none overflow-hidden block aspect-video"}
        src={iframeSrc}
        width="100%"
        height="20000px"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookVideoEmbed;
