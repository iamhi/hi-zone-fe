import BlogImageMediaComponent from './media-components/BlogImageMediaComponent';
import BlogLinkMediaComponent from './media-components/BlogLinkMediaComponent';
import BlogVideoMediaComponent from './media-components/BlogVideoMediaComponent';

const isImageMedia = (mediaType) => mediaType === 'image';
const isVideoMedia = (mediaType) => mediaType === 'video';

const getMediaComponent = (mediaType) => {
	if (isImageMedia(mediaType)) {
		return BlogImageMediaComponent;
	}

	if (isVideoMedia(mediaType)) {
		return BlogVideoMediaComponent;
	}

	return BlogLinkMediaComponent;
};

export default getMediaComponent;
