import React from "react";
import ImageViewer from "react-simple-image-viewer";

const GalleryPage = ({
  images,
  currentImage,
  closeImageViewer,
  leftArrowComponent,
  rightArrowComponent,
}) => {
  return (
    <div>
      (
      <ImageViewer
        src={images}
        backgroundStyle={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflow: "hidden",
          zIndex: 9999,
          backgroundColor: "black",
        }}
        currentIndex={currentImage}
        disableScroll={true}
        closeOnClickOutside={false}
        onClose={closeImageViewer}
        // leftArrowComponent={leftArrowComponent}
        // rightArrowComponent={rightArrowComponent}
      />
      )
    </div>
  );
};

export default GalleryPage;
